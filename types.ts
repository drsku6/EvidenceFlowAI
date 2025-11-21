import { Chat } from '@google/genai';

export enum Sender {
  User = 'user',
  Hippocrates = 'hippocrates',
}

export interface Message {
  sender: Sender;
  content: string;
  timestamp: string;
  status?: 'streaming' | 'complete' | 'error';
  loadingMessage?: string;
}

export type ChatSession = Chat | null;

export interface Session {
  id: string;
  title: string;
  messages: Message[];
  patientSummary?: PatientSummary;
  masterAlgorithmHtml?: string;
  isGeneratingAlgorithm?: boolean;
  algorithmError?: string;
}

export interface PatientSummary {
  summary: string;
  topic: string;
}