# Business Mastery — Product Requirements Document

## Overview
A flashcard and practice quiz app for HSC Business Studies Topic 3: Finance.
Built as a standalone React + TypeScript + Vite app in `study-apps/business-mastery/`.
Mirrors the architecture of the `economics-mastery` app.

## Subject
**HSC Business Studies — Topic 3: Finance**
Textbook: *Jacaranda Business Studies in Action* (HSC)
Chapters: 9 (Role of Financial Management), 10 (Influences on Financial Management), 11 (Processes of Financial Management)

## Chapter Structure (14 chapters)

| File | Chapter ID | Title |
|------|-----------|-------|
| ch01-strategic-role.ts | '9.2' | Strategic Role of Financial Management |
| ch02-objectives.ts | '9.3' | Objectives of Financial Management |
| ch03-interdependence.ts | '9.4' | Interdependence with Business Functions |
| ch04-sources-finance.ts | '10.2' | Sources of Finance — Internal & External |
| ch05-financial-institutions.ts | '10.3' | Financial Institutions |
| ch06-govt-influence.ts | '10.4' | Influence of Government |
| ch07-global-market.ts | '10.5' | Global Market Influences |
| ch08-planning.ts | '11.2' | Planning & Implementing |
| ch09-debt-equity.ts | '11.3' | Debt & Equity Financing |
| ch10-matching-finance.ts | '11.4' | Matching Finance to Business Purpose |
| ch11-monitoring.ts | '11.5' | Monitoring & Controlling |
| ch12-financial-ratios.ts | '11.6' | Financial Ratios & Analysis |
| ch13-limitations.ts | '11.7' | Limitations of Financial Reporting |
| ch14-ethics.ts | '11.8' | Ethical Issues in Financial Reports |

## Color Assignments (Tailwind)

| Chapter ID | Color | Accent |
|-----------|-------|--------|
| 9.2 | bg-blue-600 | text-blue-400 |
| 9.3 | bg-purple-600 | text-purple-400 |
| 9.4 | bg-pink-600 | text-pink-400 |
| 10.2 | bg-orange-600 | text-orange-400 |
| 10.3 | bg-teal-600 | text-teal-400 |
| 10.4 | bg-red-600 | text-red-400 |
| 10.5 | bg-sky-600 | text-sky-400 |
| 11.2 | bg-violet-600 | text-violet-400 |
| 11.3 | bg-emerald-600 | text-emerald-400 |
| 11.4 | bg-amber-600 | text-amber-400 |
| 11.5 | bg-rose-600 | text-rose-400 |
| 11.6 | bg-cyan-600 | text-cyan-400 |
| 11.7 | bg-lime-600 | text-lime-400 |
| 11.8 | bg-indigo-600 | text-indigo-400 |

## Features
- **Flashcards** with SM-2 spaced repetition (Again / Hard / Good / Easy)
- **Practice Quiz** (MCQ + short answer with model answers)
- **Per-chapter view** (stats, due count, progress bar)
- **HSC Study Mode** (all chapters combined)
- **Streak tracking** (consecutive days studied)
- **Local storage** with key `'biz-mastery-v1'`
- **Mobile optimised** (responsive Tailwind layout)

## Assessment Context
- HSC Task 2: short answer + multiple choice
- Content sourced exclusively from the provided textbook PDF

## Content Requirements per Chapter
- **10–14 flashcards** per chapter, difficulty 1–5
- **6–10 practice questions** per chapter (mix of MCQ and short answer)
- Short answer marks: 2–8 marks (HSC style)
- Flash card back: bullet points with `• ` prefix, **bold** key terms via `**text**`
- Optional `detail` field: paragraph-length explanation for complex concepts

## Tech Stack
- React 18 + TypeScript 5 + Vite 5
- Tailwind CSS 3 + lucide-react
- localStorage for SRS state
- No external API dependencies
- Node >=18 <21
