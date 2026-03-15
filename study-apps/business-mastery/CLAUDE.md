# Business Mastery — Project Instructions

## What this app is
HSC Business Studies Topic 3: Finance flashcard + practice quiz app.
Sister project to `../economics-mastery`. Same architecture, different content.

## Stack
- React 18 + TypeScript + Vite 5
- Tailwind CSS 3 (no custom config — uses Tailwind defaults only)
- lucide-react for icons
- localStorage for all state (key: `biz-mastery-v1`)
- No backend, no external APIs

## Commands
- Dev: `npm run dev` → http://localhost:5173
- Build: `npm run build`
- Lint: `npm run lint`

## Chapter IDs
Use exactly these string IDs (matches textbook section numbers):
`'9.2' | '9.3' | '9.4' | '10.2' | '10.3' | '10.4' | '10.5' | '11.2' | '11.3' | '11.4' | '11.5' | '11.6' | '11.7' | '11.8'`

## File structure
```
src/
  types/index.ts        — ChapterId type + all interfaces
  data/
    index.ts            — chapters array, allFlashcards, allQuestions, helpers
    finance/            — 14 chapter data files (ch01–ch14)
  components/
    FlashcardDeck.tsx   — flip card with SM-2 buttons
    ChapterView.tsx     — chapter detail with stats
    QuizMode.tsx        — MCQ + short answer quiz
  hooks/
    useSpacedRepetition.ts
  utils/
    storage.ts          — localStorage helpers (KEY = 'biz-mastery-v1')
  App.tsx
  main.tsx
  index.css
```

## Content conventions (MUST follow)
- Flash card **back** field: bullet points starting with `• `, bold key terms using `**term**`
- Flash card **front**: single clear question
- Flash card **detail** (optional): full paragraph for complex concepts
- Practice questions: mix MCQ (type:'mcq') and short answer (type:'short')
- MCQ: 4 options (a/b/c/d), correctOption is the letter
- Short answer: keyPoints array (dot points) + modelAnswer (full prose)
- Marks: 1 for MCQ, 2–8 for short answer

## Color palette (do not change)
Each chapter has a unique Tailwind bg-*-600 color:
9.2=blue, 9.3=purple, 9.4=pink, 10.2=orange, 10.3=teal, 10.4=red,
10.5=sky, 11.2=violet, 11.3=emerald, 11.4=amber, 11.5=rose, 11.6=cyan,
11.7=lime, 11.8=indigo

## Spaced repetition
SM-2 algorithm in `useSpacedRepetition` hook:
- Quality 0 (Again) → reset streak, interval=1 day, easeFactor-=0.2
- Quality 1–2 (Hard) → interval=1 day
- Quality 3 (Good) → increment streak; interval 1→3→multiply by easeFactor
- Quality 4 (Easy) → streak++, easeFactor+=0.1, interval×easeFactor+boost

## Branding
- App title: "Business Mastery"
- Subtitle: "HSC Business Studies — Topic 3: Finance"
- HSC Study Mode banner: uses emerald gradient (same as economics)
- Study tips section: business-specific tips (financial ratios, terminology)
- Footer: "HSC Business Studies · Topic 3: Finance"
