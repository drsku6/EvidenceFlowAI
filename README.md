# ⚕️ EvidenceFlowAI: The Open-Source Clinical AI Operating System

**EvidenceFlowAI** is an open-source, persona-driven clinical AI copilot built on **Gemini**. It operates as a decoupled clinical workspace with two distinct operational runtimes: a **Configurable Mentorship Layer** (Socratic Preceptor) for guided clinical reasoning, and **Native System Utilities** for generating structured, EHR-ready documents on command. When you describe a patient, the app intercepts the input and surfaces a **Choice Card** — letting you declare your operational mode before the AI responds. Designed for hospitalists, residents, and medical educators who need a real-time thinking partner and documentation assistant at the bedside.

> [!WARNING]
> **DO NOT ENTER PROTECTED HEALTH INFORMATION (PHI) OR PERSONALLY IDENTIFIABLE INFORMATION (PII).**
> Unless your Google Cloud project is covered by an institutional Business Associate Agreement (BAA), sending real patient data to the Gemini API violates HIPAA. Always use fictional or fully de-identified cases.

---

## ✨ Key Features

### 🎓 Configurable Mentorship Layer: Socratic Preceptor
When you describe a patient case, EvidenceFlowAI performs a silent **"Virtual Triage"** — identifying the sickest problem, "can't miss" diagnoses, and critical data gaps. Its first response is always a series of probing, Socratic questions organized by organ system and pre-test probability. It references major clinical trials by name (RALES, COURAGE, FACTT), applies validated risk scores (CURB-65, GRACE, TIMI), and connects every recommendation to underlying pathophysiology.

Two additional commands also run on this runtime — the same persistent chat session, no document schema:
- `/ask_the_expert` — answers nuanced "unwritten rules" questions about inpatient medicine using the model's full native reasoning
- `/run_simulation` — launches an interactive scenario where the AI presents a dynamic clinical emergency and responds to your real-time decisions

### 🃏 Choice Card: Guided Mode Selection
When you describe a patient for the first time in a session (without a slash command), the app intercepts the input and renders an interactive **Choice Card** in the chat feed — prompting you to declare your intent before the AI responds. This separates mode selection from AI response; the system never guesses what you need from a patient description.

| Option | Runtime |
|---|---|
| 🎓 Socratic Mentorship | Runtime 1 — Configurable Mentorship Layer |
| 📝 Daily Progress Plan (`/assessment_and_plan`) | Runtime 2 — Native System Utility |
| 📢 Rounds Presentation (`/short_presentation`) | Runtime 2 — Native System Utility |
| 🔄 IPASS Handoff (`/handoff`) | Runtime 2 — Native System Utility |
| 📌 Quick Sticky Note (`/sticky_note`) | Runtime 2 — Native System Utility |
| 🧠 Clinical Algorithm (`/clinicalalgorithm`) | Runtime 2 — Native System Utility |
| 🚨 Clinical Simulation (`/run_simulation`) | Runtime 1 — Configurable Mentorship Layer |

### 📝 Native System Utilities: Generative Document Commands
On command, EvidenceFlowAI reads your entire conversation history and generates structured, EHR-ready clinical documents:

| Command | Output |
|---|---|
| `/assessment_and_plan` | Comprehensive, problem-based A&P using a mounted local data layer (see below) |
| `/short_presentation` | Polished oral presentation formatted for reading aloud on morning rounds |
| `/handoff` | Concise I-PASS written handoff with stability level and contingency plan |
| `/sticky_note` | Hyper-concise bedside reference card with acute/chronic problem list |
| `/clinicalalgorithm [topic]` | Step-by-step, ABIM board-prep algorithm with vignettes and best next steps |

### 🧬 The Execution Engine: Mounted Local Data Layer
The `/assessment_and_plan` command bypasses blanket RAG setups in favor of a true workspace OS execution engine. A 130KB+ local data layer (`apTemplates.ts`) containing **140+ evidence-based A&P templates** across **16 specialty categories** is injected into the Gemini context window. The model diagnoses the patient from the conversation, searches the knowledge base for a matching protocol, and dynamically customizes the template's exact structure with the patient's live vitals, labs, and history.

**Specialties covered:** Cardiovascular · Pulmonary & Critical Care · Neurology · Gastroenterology & Hepatology · Nephrology & Electrolytes · Hematology & Oncology · Infectious Disease · Endocrinology · Rheumatology · Psychiatry & Substance Use · Geriatrics/Rehab/DME · Goals of Care · Pharmacology Pearls · Exam & Note Blocks · Admin & Legal · Other Specialties

### 🔒 Clinician-First Privacy
Fully client-side. All sessions, chat logs, and generated documents live exclusively in your browser's `localStorage`. No clinical data ever reaches a project database.

---

## 🛠️ Technology Stack

| | |
|---|---|
| **Frontend** | React 19 (Hooks, Refs), TypeScript 5, Vite 6 |
| **AI** | `@google/genai` SDK v1.25.0 — streaming chat & content generation |
| **Styling** | Tailwind CSS (custom clinical UI palette) |
| **Markdown** | `react-markdown` + `remark-gfm` |

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- A Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

### 1. Clone & Install
```bash
git clone git@github.com:drsku6/EvidenceFlowAI.git
cd EvidenceFlowAI
npm install
```

### 2. Configure Environment
```bash
# Create local environment file
touch .env.local
```
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Run Locally
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 4. Build for Production
```bash
npm run build
```
Outputs static files to `dist/` — ready for Firebase Hosting, Netlify, Google Cloud Storage, etc.

---

## 📖 How It Works: Behind the Scenes

### The Prompt Architecture
EvidenceFlowAI's intelligence lives in the `prompts/` directory. Each document type has its own prompt module enforcing a strict output schema. All document-generation prompts share a **unified Master Prompt** declaring the AI's persona as "EvidenceFlow" — a clinical decision support tool with four non-negotiable directives: clinical accuracy, structured formatting, conciseness, and strict schema adherence.

See [`PROJECT_DOCUMENTATION.md`](PROJECT_DOCUMENTATION.md) for the full technical deep-dive including per-prompt output schemas, the execution engine runtime, and the service layer design.

### The Two Runtime Patterns
EvidenceFlowAI uses two distinct Gemini API call patterns depending on the selected mode:

- **Runtime 1 — Socratic Preceptor (`/ask_the_expert`, `/run_simulation`):** Uses `ai.chats.create()` to maintain a persistent multi-turn session. The `EVIDENCEFLOW_PERSONA` system instruction is loaded once at session start. All messages stream through `chat.sendMessageStream()`, preserving full conversation context across turns.

- **Runtime 2 — Document Commands (`/assessment_and_plan`, `/handoff`, `/short_presentation`, `/sticky_note`, `/clinicalalgorithm`):** Uses `ai.models.generateContentStream()` for one-shot generation. On each command, the full conversation history is assembled as a plain-text string and injected into a fresh specialized prompt module from `prompts/`. There is no persistent session state — the context is rebuilt from the conversation log on every call.

### Unified Model Architecture
EvidenceFlowAI supports both **`gemini-3.5-flash`** and **`gemini-3.1-pro`**. Every action — Socratic mentorship, patient summaries, I-PASS handoffs, A&P generation, and board-style algorithms — runs on your selected model. `gemini-3.5-flash` is recommended for low-latency performance; `gemini-3.1-pro` is available for maximum reasoning depth.

---

## 🛡️ Security & HIPAA Policy

- **No PHI/PII**: Never input real patient records. Use fictional or fully de-identified cases only.
- **Local Storage**: All encounter data resides in the user's browser cache. Clearing browser data wipes all sessions.
- **API Transmission**: Data is sent client-side to Google's Gemini API. For clinical/institutional deployment, ensure your Google Cloud organization is covered by a **Business Associate Agreement (BAA)**.

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.
