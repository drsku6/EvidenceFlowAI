import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Sender, type Message, type ChatSession, type Session } from './types';
import { COMMANDS } from './constants';
import { createChatSession, sendMessageStream, generatePatientSummary, generateMasterAlgorithm } from './services/geminiService';
import { HippocratesIcon, UserIcon, SendIcon, LoadingIcon, CopyIcon, CheckIcon, BookOpenIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon, ChatBubbleLeftRightIcon } from './components/icons';
import Feedback from './components/Feedback';
import { Content } from '@google/genai';

const markdownComponents = {
    p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
    h1: ({node, ...props}) => <h1 className="text-xl font-bold mt-4 mb-2 border-b border-brand-border pb-1" {...props} />,
    h2: ({node, ...props}) => <h2 className="text-lg font-semibold mt-3 mb-2" {...props} />,
    h3: ({node, ...props}) => <h3 className="text-base font-semibold mt-2 mb-2" {...props} />,
    ul: ({node, ...props}) => <ul className="list-disc list-inside mb-2 pl-4 space-y-1" {...props} />,
    ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-2 pl-4 space-y-1" {...props} />,
    blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-brand-border pl-4 italic my-2 text-brand-text-secondary" {...props} />,
    code: ({node, inline, className, children, ...props}) => {
      return !inline ? (
        <pre className="bg-brand-text-primary text-brand-surface p-3 rounded-md my-2 overflow-x-auto text-sm">
          <code {...props}>
            {String(children).replace(/\n$/, '')}
          </code>
        </pre>
      ) : (
        <code className="bg-brand-border font-mono px-1.5 py-1 rounded-md text-sm" {...props}>
          {children}
        </code>
      )
    },
    a: ({node, ...props}) => <a className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
    table: ({node, ...props}) => <div className="overflow-x-auto my-2"><table className="w-full text-sm border-collapse border border-brand-border" {...props} /></div>,
    thead: ({node, ...props}) => <thead className="bg-brand-secondary" {...props} />,
    th: ({node, ...props}) => <th className="border border-brand-border px-3 py-2 text-left font-semibold" {...props} />,
    td: ({node, ...props}) => <td className="border border-brand-border px-3 py-2" {...props} />,
};

const examplePrompts = [
  {
    title: 'Start a patient case',
    prompt: '78M with hx of CAD, HFpEF presents with 3 days of worsening SOB and LE edema.',
  },
  {
    title: 'Ask a clinical question',
    prompt: '/ask_the_expert What is the evidence for using steroids in community-acquired pneumonia?',
  },
  {
    title: 'Run a clinical simulation',
    prompt: '/run_simulation A 55-year-old patient presents with chest pain. Go.',
  }
];

const ExamplePrompts: React.FC<{ onPromptClick: (prompt: string) => void }> = ({ onPromptClick }) => (
    <div className="w-full mt-10">
      <h3 className="text-sm font-medium text-brand-text-secondary mb-3 text-center">Or try one of these examples:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
        {examplePrompts.map((p, i) => (
          <button
            key={i}
            onClick={() => onPromptClick(p.prompt)}
            className="p-4 bg-brand-surface rounded-lg shadow-sm hover:shadow-md transition-shadow text-left border border-brand-border h-full flex flex-col justify-between hover:border-brand-accent/50"
          >
            <div>
              <p className="font-semibold text-brand-text-primary mb-1 text-sm">{p.title}</p>
              <p className="text-xs text-brand-text-secondary">{p.prompt}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

const convertMessagesToHistory = (messages: Message[]): Content[] => {
    return messages
        .filter(msg => msg.status === 'complete' && msg.content) // Only use completed, non-empty messages
        .map(msg => ({
            role: msg.sender === Sender.User ? 'user' : 'model',
            parts: [{ text: msg.content }]
        }));
};

const MessageBubble: React.FC<{ message: Message; onRetry: () => void; }> = ({ message, onRetry }) => {
  const isUser = message.sender === Sender.User;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if (message.content) {
      navigator.clipboard.writeText(message.content).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }).catch(err => {
        console.error("Failed to copy text:", err);
      });
    }
  }, [message.content]);

  return (
    <div className={`flex items-start gap-4 my-4 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-text-secondary flex items-center justify-center"><HippocratesIcon className="w-5 h-5 text-white" /></div>}
      <div className={`relative max-w-3xl w-full p-4 rounded-lg shadow-md ${isUser ? 'bg-brand-accent text-white rounded-br-none max-w-2xl' : 'bg-brand-surface text-brand-text-primary rounded-bl-none'}`}>
        {!isUser && message.content && message.status !== 'streaming' && (
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 p-1.5 rounded-full text-brand-text-secondary hover:bg-brand-border hover:text-brand-text-primary transition-colors"
              aria-label="Copy to clipboard"
            >
              {isCopied ? <CheckIcon className="w-4 h-4 text-green-500" /> : <CopyIcon className="w-4 h-4" />}
            </button>
        )}
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <>
            {(message.status === 'streaming' && message.content === '') ? (
              <div className="flex items-center">
                <LoadingIcon className="w-5 h-5 mr-3" />
                {message.loadingMessage ? (
                  <ReactMarkdown
                    children={message.loadingMessage}
                    components={{ p: React.Fragment }} 
                  />
                ) : (
                  <span>Hippocrates is thinking...</span>
                )}
              </div>
            ) : (
              <ReactMarkdown
                children={message.content}
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              />
            )}
            
            {message.status === 'error' && (
               <div className="mt-3 pt-3 border-t border-brand-border">
                <p className="text-red-600 text-sm mb-2">Error: {message.content.split('Error: ')[1]}</p>
                <button
                  onClick={onRetry}
                  className="px-3 py-1 text-xs font-semibold bg-brand-surface text-brand-text-primary rounded-md hover:bg-brand-border transition-colors flex items-center gap-1.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201-4.42 5.5 5.5 0 0110.89 2.024l-.135.539a.75.75 0 01-1.423-.356l.135-.54a4 4 0 00-7.94-1.464.75.75 0 01-1.061-1.06 5.5 5.5 0 019.201 4.42zM4.688 8.576a.75.75 0 01.356-1.423l.539-.135a4 4 0 00-1.464-7.94.75.75 0 01-1.06-1.06 5.5 5.5 0 014.42 9.201l.54.135a.75.75 0 01-.356 1.423l-.539-.135a4 4 0 00-1.464 7.94.75.75 0 011.06 1.06 5.5 5.5 0 01-4.42-9.201l-.54-.135z" clipRule="evenodd" />
                  </svg>
                  Retry
                </button>
              </div>
            )}
          </>
        )}
        <p className="text-xs mt-2 opacity-60 text-right">{message.timestamp}</p>
      </div>
       {isUser && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center"><UserIcon className="w-5 h-5 text-white" /></div>}
    </div>
  );
};

const AlgorithmSkeletonLoader: React.FC = () => (
    <div className="space-y-8 animate-pulse p-6 bg-brand-bg rounded-lg shadow-sm">
        <div className="space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
        <div className="space-y-4">
            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
    </div>
);

const MasterAlgorithmView: React.FC<{
    activeSession: Session;
    onUpdateSession: (session: Session) => void;
    onGenerateAlgorithm: (topic: string) => void;
}> = ({ activeSession, onUpdateSession, onGenerateAlgorithm }) => {
    const [isLoadingSummary, setIsLoadingSummary] = useState(false);
    const [summaryError, setSummaryError] = useState<string | null>(null);
    const [editableTopic, setEditableTopic] = useState('');

    const hasCompletedMessages = React.useMemo(() => 
        activeSession.messages.some(m => m.status === 'complete'),
        [activeSession.messages]
    );

    useEffect(() => {
        if (activeSession.patientSummary) {
            setEditableTopic(activeSession.patientSummary.topic);
            return;
        }

        if (summaryError) {
            return;
        }

        if (hasCompletedMessages && !isLoadingSummary) {
            const handleGenerateSummary = async () => {
                setIsLoadingSummary(true);
                setSummaryError(null);
                try {
                    const conversationHistory = activeSession.messages
                        .filter(m => m.status === 'complete')
                        .map(m => `${m.sender === Sender.User ? 'User' : 'Hippocrates'}: ${m.content}`)
                        .join('\n\n');
                    
                    if (!conversationHistory.trim()) {
                       return;
                    }

                    const summaryData = await generatePatientSummary(conversationHistory);
                    const updatedSession = { ...activeSession, patientSummary: summaryData };
                    onUpdateSession(updatedSession);
                    setEditableTopic(summaryData.topic);

                } catch (e) {
                    setSummaryError(e instanceof Error ? e.message : "An unknown error occurred during summary generation.");
                } finally {
                    setIsLoadingSummary(false);
                }
            };
            handleGenerateSummary();
        }
    }, [activeSession, onUpdateSession, isLoadingSummary, hasCompletedMessages, summaryError]);

    const isLoadingAlgorithm = !!activeSession.isGeneratingAlgorithm;
    const algorithmError = activeSession.algorithmError;

    return (
        <div className="p-6 overflow-y-auto w-full max-w-5xl mx-auto">
            {(summaryError || algorithmError) && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6" role="alert">
                    <p className="font-bold">An Error Occurred</p>
                    <p>{summaryError || algorithmError}</p>
                </div>
            )}
            
            {!hasCompletedMessages && !isLoadingSummary && !summaryError && !activeSession.patientSummary && (
                <div className="p-6 text-center text-brand-text-secondary">
                    <p>Waiting for the current consultation turn to complete before generating a summary...</p>
                </div>
            )}

            {isLoadingSummary && (
                <div className="animate-pulse space-y-4">
                    <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
            )}

            {!isLoadingSummary && activeSession.patientSummary && (
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-brand-text-primary mb-3">Consultation Summary</h2>
                    <div className="bg-brand-secondary p-4 rounded-lg shadow-sm prose prose-sm max-w-none">
                         <ReactMarkdown children={activeSession.patientSummary.summary} remarkPlugins={[remarkGfm]} components={markdownComponents} />
                    </div>
                </div>
            )}

            {!isLoadingSummary && activeSession.patientSummary && (
                 <div className="p-6 bg-brand-surface border border-brand-border rounded-lg shadow-md">
                    <label htmlFor="topic-input" className="block text-sm font-bold text-brand-text-primary mb-2">Algorithm Topic</label>
                    <p className="text-xs text-brand-text-secondary mb-3">Confirm or edit the topic to generate a master algorithm.</p>
                    <div className="flex items-center gap-3">
                        <input
                            id="topic-input"
                            type="text"
                            value={editableTopic}
                            onChange={(e) => setEditableTopic(e.target.value)}
                            className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                        />
                        <button
                            onClick={() => onGenerateAlgorithm(editableTopic)}
                            disabled={isLoadingAlgorithm || !editableTopic.trim()}
                            className="px-4 py-2 bg-brand-accent text-white font-semibold rounded-lg hover:bg-brand-accent-hover transition-colors flex items-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed flex-shrink-0"
                        >
                            {isLoadingAlgorithm ? <LoadingIcon /> : <BookOpenIcon className="w-5 h-5"/>}
                            <span>{isLoadingAlgorithm ? 'Generating...' : 'Generate Algorithm'}</span>
                        </button>
                    </div>
                </div>
            )}

            <div className="mt-8">
                 {isLoadingAlgorithm && <AlgorithmSkeletonLoader />}
                 {activeSession.masterAlgorithmHtml && !isLoadingAlgorithm && (
                    <div className="bg-brand-surface p-4 sm:p-6 rounded-lg shadow-lg border border-brand-border" dangerouslySetInnerHTML={{ __html: activeSession.masterAlgorithmHtml }} />
                 )}
            </div>
        </div>
    );
};


const Sidebar: React.FC<{
    sessions: Session[];
    activeSessionId: string | null;
    onNewSession: () => void;
    onSelectSession: (id: string) => void;
    onDeleteSession: (id: string) => void;
    width: number;
}> = ({ sessions, activeSessionId, onNewSession, onSelectSession, onDeleteSession, width }) => {
    return (
        <aside className="bg-brand-secondary flex flex-col border-r border-brand-border h-full overflow-hidden" style={{ width: `${width}px` }}>
            <div className="p-3 border-b border-brand-border">
                <button onClick={onNewSession} className="w-full px-3 py-2 bg-brand-surface text-brand-text-primary font-semibold rounded-lg text-sm hover:bg-brand-border transition-colors flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>
                    New Consultation
                </button>
            </div>
            <nav className="flex-grow overflow-y-auto p-2">
                <ul>
                    {sessions.map(session => (
                        <li key={session.id}>
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); onSelectSession(session.id); }}
                                className={`group flex justify-between items-center p-2 my-1 rounded-md text-sm truncate ${activeSessionId === session.id ? 'bg-brand-accent/10 text-brand-accent font-semibold' : 'hover:bg-brand-border'}`}
                            >
                                <span className="truncate">{session.title}</span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onDeleteSession(session.id); }}
                                    className="p-1 rounded-full text-brand-text-secondary hover:bg-red-100 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                    aria-label="Delete session"
                                >
                                    <TrashIcon />
                                </button>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

const App: React.FC = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const isResizing = useRef(false);

  const [activeView, setActiveView] = useState<'consultation' | 'algorithm'>('consultation');

  const chatSessionRef = useRef<ChatSession>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const activeSession = sessions.find(s => s.id === activeSessionId);
  const messages = activeSession?.messages ?? [];

  useEffect(() => {
    try {
      const savedSessions = localStorage.getItem('hippocrates-sessions');
      if (savedSessions) {
        const parsedSessions = JSON.parse(savedSessions);
        setSessions(parsedSessions);
        if (parsedSessions.length > 0) {
          setActiveSessionId(parsedSessions[0].id);
        } else {
           handleNewSession();
        }
      } else {
        handleNewSession();
      }
    } catch (e) {
      console.error("Failed to load sessions from localStorage", e);
      handleNewSession();
    }
  }, []);

  useEffect(() => {
    if (sessions.length > 0) {
      localStorage.setItem('hippocrates-sessions', JSON.stringify(sessions));
    } else {
      localStorage.removeItem('hippocrates-sessions');
    }
  }, [sessions]);

  useEffect(() => {
    if (activeSession) {
      const history = convertMessagesToHistory(activeSession.messages);
      chatSessionRef.current = createChatSession(history);
    }
  }, [activeSessionId]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, activeView]);

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
    document.body.style.cursor = 'col-resize';
  };

  const handleResizeMouseUp = useCallback(() => {
    isResizing.current = false;
    document.body.style.cursor = 'default';
  }, []);

  const handleResizeMouseMove = useCallback((e: MouseEvent) => {
    if (isResizing.current && !isSidebarCollapsed) {
      const newWidth = e.clientX;
      if (newWidth >= 200 && newWidth <= 500) {
        setSidebarWidth(newWidth);
      }
    }
  }, [isSidebarCollapsed]);

  useEffect(() => {
    window.addEventListener('mousemove', handleResizeMouseMove);
    window.addEventListener('mouseup', handleResizeMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleResizeMouseMove);
      window.removeEventListener('mouseup', handleResizeMouseUp);
    };
  }, [handleResizeMouseMove, handleResizeMouseUp]);

  const handleNewSession = useCallback(() => {
    const newSession: Session = {
      id: crypto.randomUUID(),
      title: "New Consultation",
      messages: [],
    };
    setSessions(prev => [newSession, ...prev]);
    setActiveSessionId(newSession.id);
    setActiveView('consultation');
    setUserInput('');
    setIsLoading(false);
    setError(null);
  }, []);

  const handleSelectSession = (id: string) => {
    if (id !== activeSessionId) {
        setActiveSessionId(id);
        setActiveView('consultation');
        setIsLoading(false);
        setError(null);
    }
  };

  const handleDeleteSession = (idToDelete: string) => {
    setSessions(prev => {
        const remainingSessions = prev.filter(s => s.id !== idToDelete);
        if (activeSessionId === idToDelete) {
            if (remainingSessions.length > 0) {
                setActiveSessionId(remainingSessions[0].id);
            } else {
                handleNewSession(); 
                return []; 
            }
        }
        if (remainingSessions.length === 0) {
             localStorage.removeItem('hippocrates-sessions');
        }
        return remainingSessions;
    });
  };

  const updateMessageInSession = (sessionId: string, messageUpdater: (messages: Message[]) => Message[]) => {
      setSessions(prev => prev.map(s => s.id === sessionId ? { ...s, messages: messageUpdater(s.messages) } : s));
  };

  const handleUpdateSession = (updatedSession: Session) => {
    setSessions(prev => prev.map(s => s.id === updatedSession.id ? updatedSession : s));
  };
  
  const processStream = useCallback(async (prompt: string) => {
    if (!chatSessionRef.current || !activeSessionId) return;

    const currentSessionId = activeSessionId;
    const conversationHistory = messages
        .map(m => `${m.sender === Sender.User ? 'User' : 'Hippocrates'}: ${m.content}`)
        .join('\n\n');

    try {
      const stream = await sendMessageStream(chatSessionRef.current, prompt, conversationHistory);
      let responseText = '';
      for await (const chunk of stream) {
        responseText += chunk.text;
        updateMessageInSession(currentSessionId, prevMsgs => {
            const newMessages = [...prevMsgs];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage?.sender === Sender.Hippocrates) {
              newMessages[newMessages.length - 1] = { ...lastMessage, content: responseText };
            }
            return newMessages;
        });
      }
      updateMessageInSession(currentSessionId, prevMsgs => {
          const newMessages = [...prevMsgs];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage?.sender === Sender.Hippocrates) {
            newMessages[newMessages.length - 1] = { ...lastMessage, status: 'complete' };
          }
          return newMessages;
      });
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMessage);
       updateMessageInSession(currentSessionId, prevMsgs => {
          const newMessages = [...prevMsgs];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage?.sender === Sender.Hippocrates) {
            newMessages[newMessages.length - 1] = { 
               ...lastMessage, 
               status: 'error', 
               content: `*(Hippocrates apologizes. An error occurred. Please try again.)*\n\n**Error:** ${errorMessage}` 
            };
          }
          return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  }, [activeSessionId, messages]);
  
  const sendMessage = useCallback(async (messageContent: string) => {
    const content = messageContent.trim();
    if (!content || isLoading || !activeSessionId) return;
  
    if (!chatSessionRef.current) {
        const currentSession = sessions.find(s => s.id === activeSessionId);
        if (currentSession) {
            chatSessionRef.current = createChatSession(convertMessagesToHistory(currentSession.messages));
        } else {
             setError('No active session found.');
             return;
        }
    }

    setActiveView('consultation');
  
    const userMessage: Message = {
      sender: Sender.User,
      content: content,
      timestamp: new Date().toLocaleTimeString(),
      status: 'complete',
    };
  
    setSessions(prev => prev.map(s => {
      if (s.id === activeSessionId) {
          const isFirstUserMessage = s.messages.filter(m => m.sender === Sender.User).length === 0;
          return {
              ...s,
              title: isFirstUserMessage ? content.substring(0, 40) : s.title,
              messages: [...s.messages, userMessage],
              patientSummary: undefined,
              masterAlgorithmHtml: undefined,
          };
      }
      return s;
    }));

    setUserInput('');
    setIsLoading(true);
    setError(null);

    const isCommand = content.startsWith('/');
    let loadingMessage: string | undefined = undefined;

    if (isCommand) {
        const commandName = COMMANDS.find(cmd => content.toLowerCase().startsWith(cmd.toLowerCase()));
        if (commandName && commandName.startsWith('/generate')) {
            const docType = commandName.replace('/generate ', '').replace(/\b\w/g, l => l.toUpperCase());
            loadingMessage = `Hippocrates is generating the **${docType}**...`;
        }
    }
  
    const hippocratesResponsePlaceholder: Message = {
        sender: Sender.Hippocrates,
        content: '',
        timestamp: new Date().toLocaleTimeString(),
        status: 'streaming',
        loadingMessage,
    };
    updateMessageInSession(activeSessionId, prev => [...prev, hippocratesResponsePlaceholder]);

    await processStream(content);
  }, [isLoading, activeSessionId, sessions, processStream]);

  const handleSendMessage = useCallback(async () => {
    await sendMessage(userInput);
  }, [userInput, sendMessage]);

  const handleRetry = useCallback(async () => {
    if (!activeSessionId) return;
    const messagesBeforeRetry = messages.slice(0, -1).filter(m => m.status !== 'error');
    const lastUserMessage = messagesBeforeRetry.filter(m => m.sender === Sender.User).pop();

    if (!lastUserMessage) return;

    setIsLoading(true);
    setError(null);
    setActiveView('consultation');

    setSessions(prev => prev.map(s => s.id === activeSessionId ? { ...s, messages: messagesBeforeRetry } : s));

    const hippocratesResponsePlaceholder: Message = {
        sender: Sender.Hippocrates,
        content: '',
        timestamp: new Date().toLocaleTimeString(),
        status: 'streaming',
    };
    updateMessageInSession(activeSessionId, prev => [...prev, hippocratesResponsePlaceholder]);

    await processStream(lastUserMessage.content);
}, [messages, activeSessionId, processStream]);

  const handleGenerateMasterAlgorithm = useCallback(async (topic: string) => {
    if (!activeSessionId) return;

    setSessions(prev => prev.map(s => 
        s.id === activeSessionId 
        ? { ...s, isGeneratingAlgorithm: true, masterAlgorithmHtml: undefined, algorithmError: undefined } 
        : s
    ));
    
    try {
        const htmlContent = await generateMasterAlgorithm(topic);
        setSessions(prev => prev.map(s => 
            s.id === activeSessionId 
            ? { ...s, masterAlgorithmHtml: htmlContent, isGeneratingAlgorithm: false } 
            : s
        ));
    } catch(e) {
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred during algorithm generation.";
        setSessions(prev => prev.map(s => 
            s.id === activeSessionId 
            ? { ...s, algorithmError: errorMessage, isGeneratingAlgorithm: false } 
            : s
        ));
    }
  }, [activeSessionId]);

  const handleCommandClick = (command: string) => {
      if (command.startsWith('/ask') || command.startsWith('/run')) {
          setUserInput(command + ' ');
          document.querySelector('textarea')?.focus();
      } else {
        sendMessage(command);
      }
  };
  
  const handlePromptClick = (prompt: string) => {
    setUserInput(prompt);
    document.querySelector('textarea')?.focus();
  };

  const TabButton: React.FC<{
      label: string;
      icon: React.ReactNode;
      isActive: boolean;
      onClick: () => void;
      disabled?: boolean;
    }> = ({ label, icon, isActive, onClick, disabled }) => (
      <button 
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
          isActive 
            ? 'bg-brand-accent/10 text-brand-accent' 
            : 'text-brand-text-secondary hover:bg-brand-secondary'
        }`}
      >
        {icon}
        {label}
      </button>
  );

  return (
    <>
    <div className="h-screen w-screen flex bg-brand-bg text-brand-text-primary font-sans overflow-hidden relative">
        <div 
            className="flex-shrink-0 transition-all duration-300 ease-in-out"
            style={{ 
                width: isSidebarCollapsed ? '0px' : `${sidebarWidth}px`,
                overflow: 'hidden'
            }}
        >
            <Sidebar 
                sessions={sessions}
                activeSessionId={activeSessionId}
                onNewSession={handleNewSession}
                onSelectSession={handleSelectSession}
                onDeleteSession={handleDeleteSession}
                width={sidebarWidth}
            />
        </div>

        {!isSidebarCollapsed && (
             <div 
                className="w-1.5 cursor-col-resize bg-brand-border/50 hover:bg-brand-accent/50 transition-colors flex-shrink-0"
                onMouseDown={handleResizeMouseDown}
            />
        )}
       
        <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="absolute top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-brand-surface rounded-full shadow-md border border-brand-border hover:bg-brand-secondary flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-accent"
            style={{ 
                left: isSidebarCollapsed ? '8px' : `${sidebarWidth - 12}px`, 
                transition: 'left 0.3s ease-in-out' 
            }}
            aria-label={isSidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'}
        >
            {isSidebarCollapsed ? <ChevronRightIcon className="w-4 h-4" /> : <ChevronLeftIcon className="w-4 h-4" />}
        </button>

        <div className="flex-1 flex flex-col min-w-0">
            <header className="p-4 border-b border-brand-border bg-brand-surface flex-shrink-0 flex justify-between items-center">
                <h1 className="text-xl font-bold flex items-center"><HippocratesIcon className="w-6 h-6 mr-3 text-brand-accent"/>Hippocrates</h1>
                <div className="flex items-center gap-2 bg-brand-secondary p-1 rounded-lg">
                    <TabButton
                        label="Consultation"
                        icon={<ChatBubbleLeftRightIcon className="w-5 h-5"/>}
                        isActive={activeView === 'consultation'}
                        onClick={() => setActiveView('consultation')}
                    />
                     <TabButton
                        label="Master Algorithm"
                        icon={<BookOpenIcon className="w-5 h-5"/>}
                        isActive={activeView === 'algorithm'}
                        onClick={() => setActiveView('algorithm')}
                        disabled={!activeSession || messages.length === 0}
                    />
                </div>
            </header>
            
            {activeView === 'consultation' && (
              <>
                <main ref={chatContainerRef} className="flex-grow p-6 overflow-y-auto w-full max-w-5xl mx-auto">
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-brand-text-secondary p-8">
                    <HippocratesIcon className="w-24 h-24 mb-6 text-brand-border" />
                    <h2 className="text-2xl font-bold text-brand-text-primary mb-2">Begin Your Consultation</h2>
                    <p className="max-w-md mb-4">
                        Describe your patient's case to start the conversation, or try an example below.
                    </p>
                    <ExamplePrompts onPromptClick={handlePromptClick} />
                    </div>
                )}
                {messages.map((msg, index) => <MessageBubble key={index} message={msg} onRetry={handleRetry} />)}
                </main>
                <footer className="p-4 border-t border-brand-border bg-brand-surface flex-shrink-0">
                    <div className="max-w-5xl mx-auto">
                        {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}
                        <>
                        {activeSession && (
                            <div className="flex flex-wrap gap-2 mb-3 justify-center">
                                {COMMANDS.map(cmd => (
                                    <button 
                                        key={cmd}
                                        onClick={() => handleCommandClick(cmd)}
                                        disabled={isLoading}
                                        className="px-3 py-1 bg-brand-secondary text-brand-text-secondary text-xs rounded-full hover:bg-gray-200 hover:text-brand-text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        {cmd}
                                    </button>
                                ))}
                            </div>
                        )}
                    <div className="flex items-center gap-2 bg-brand-secondary p-2 rounded-lg border border-transparent focus-within:border-brand-accent focus-within:ring-2 focus-within:ring-brand-accent/50">
                        <textarea
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
                                e.preventDefault();
                                handleSendMessage();
                            }
                        }}
                        placeholder={activeSession ? "Ask a follow-up, provide an update, or use a command..." : "Describe your patient/medical query to begin."}
                        className="w-full bg-transparent focus:outline-none p-2 resize-none max-h-40"
                        rows={1}
                        disabled={isLoading}
                        />
                        <button
                        onClick={handleSendMessage}
                        disabled={isLoading || !userInput.trim()}
                        className="p-2 rounded-full bg-brand-accent text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-brand-accent-hover transition-colors self-end"
                        aria-label="Send message"
                        >
                        <SendIcon />
                        </button>
                    </div>
                    </>
                    </div>
                </footer>
              </>
            )}

            {activeView === 'algorithm' && activeSession && (
                <MasterAlgorithmView
                    activeSession={activeSession}
                    onUpdateSession={handleUpdateSession}
                    onGenerateAlgorithm={handleGenerateMasterAlgorithm}
                />
            )}
        </div>
    </div>
    <Feedback />
    </>
  );
};

export default App;