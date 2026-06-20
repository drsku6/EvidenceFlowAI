---
# EvidenceFlowAI — Claude Instructions
# Project: EvidenceFlowAI | Owner: drsku6

## What This Repo Is

EvidenceFlowAI is an open-source clinical AI OS for the wards — a React + TypeScript + Vite frontend using the Gemini API (@google/genai SDK). Runs entirely in the browser. No backend.

**GitHub:** drsku6/EvidenceFlowAI | **License:** MIT | **Status:** Live

---

## Implementation Plan Requirement

Before making ANY changes — to files, code, configuration, or system state — Claude must:
1. Create an implementation plan listing every action in order
2. Present it clearly and wait for explicit confirmation
3. Do not begin until confirmed

Read-only actions proceed freely.

---

## Key Architecture

- **Two runtimes:** Runtime 1 (Socratic Preceptor) = `ai.chats.create()` persistent chat session with EVIDENCEFLOW_PERSONA system instruction. Runtime 2 (document commands) = `ai.models.generateContentStream()` one-shot generation.
- **Choice Card:** Intercepts first non-command patient message before any AI call — renders 7-option card.
- **Data layer:** `apTemplates.ts` (130KB, 140+ templates, 16 specialties) mounted ONLY for `/assessment_and_plan`.
- **`/ask_the_expert` and `/run_simulation`:** Runtime 1 — chat session only, no prompt module.
- **`sendMessageStream`** in `services/geminiService.ts` is the single routing function — calls `getPromptForCommand()` internally to decide which API pattern to use.

For full architecture detail see `PROJECT_DOCUMENTATION.md`.

---

## Session-End Sync Rule

At the end of every working session: if any architectural decisions, significant code changes, new features, bug fixes, or status changes were made — update the **EvidenceFlowAI section** of `/Users/sku/drsku6/SKU_AI_OS/memory/projects.md` to reflect the current state. Do this before closing the session, without being asked.

---

## Context Reference

- `PROJECT_DOCUMENTATION.md` — full architecture reference
- `/Users/sku/drsku6/SKU_AI_OS/memory/projects.md` — EvidenceFlowAI entry in personal OS
---
