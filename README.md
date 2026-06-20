# ⚕️ EvidenceFlowAI: The Open-Source Clinical AI Operating System

**EvidenceFlowAI** is an open-source, persona-driven clinical AI copilot built on **Gemini (gemini-3.5-flash)**. It operates as a decoupled clinical workspace, featuring a Configurable Mentorship Layer for guided reasoning and Native System Utilities for generating structured, evidence-based medical documents on command. Designed for hospitalists, residents, and medical educators who need a real-time thinking partner and documentation assistant.

> [!WARNING]
> **DO NOT ENTER PROTECTED HEALTH INFORMATION (PHI) OR PERSONALLY IDENTIFIABLE INFORMATION (PII).**
> Unless your Google Cloud project is covered by an institutional Business Associate Agreement (BAA), sending real patient data to the Gemini API violates HIPAA. Always use fictional or fully de-identified cases.

---

## ✨ Key Features

### 🎓 Configurable Mentorship Layer: Socratic Preceptor
When you describe a patient case, EvidenceFlowAI performs a silent **"Virtual Triage"** — identifying the sickest problem, "can't miss" diagnoses, and critical data gaps. Its first response is always a series of probing, Socratic questions organized by organ system and pre-test probability. It references major clinical trials by name (RALES, COURAGE, FACTT), applies validated risk scores (CURB-65, GRACE, TIMI), and connects every recommendation to underlying pathophysiology.

### 📝 Native System Utilities: Generative Document Commands
On command, EvidenceFlowAI reads your entire conversation history and generates structured, EHR-ready clinical documents:

| Command | Output |
|---|---|
| `/assessment_and_plan` | Comprehensive, problem-based A&P using a mounted local data layer (see below) |
| `/short_presentation` | Polished oral presentation formatted for reading aloud on morning rounds |
| `/handoff` | Concise I-PASS written handoff with stability level and contingency plan |
| `/sticky_note` | Hyper-concise bedside reference card with acute/chronic problem list |
| `/clinicalalgorithm [topic]` | Step-by-step, ABIM board-prep algorithm with vignettes and best next steps |
| `/ask_the_expert` | Answers nuanced "unwritten rules" questions about inpatient medicine |
| `/run_simulation` | Interactive clinical emergency simulation (e.g., "The patient is now hypotensive.") |

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
