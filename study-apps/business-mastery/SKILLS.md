# Design & Content Skills — Learned from Economics Mastery

This document captures all conventions learned from building the economics-mastery app.
Use as a reference when building or extending any study app in this project.

---

## UI / Visual Design

### Color System
- **Background**: `bg-gray-50` (page), `bg-white` (cards)
- **Text**: `text-gray-900` (headings), `text-gray-400` (subtitles/muted), `text-gray-500` (body)
- **Chapter colors**: Each chapter gets a unique `bg-*-600` Tailwind color + matching `text-*-400` accent
  - Used for: left stripe on chapter card, progress bar fill, chapter header bar
  - 14 colors used: blue, purple, pink, orange, teal, red, sky, violet, emerald, amber, rose, cyan, lime, indigo
- **Status colors**:
  - Due cards badge: `bg-amber-50 text-amber-700 border-amber-200`
  - Streak badge: `bg-orange-50 text-orange-600 border-orange-200`
  - HSC Mode banner: `from-emerald-50 to-white`, buttons: `bg-emerald-600`
  - Flashcard "Again": `bg-red-500 hover:bg-red-600`
  - Flashcard "Hard": `bg-amber-500 hover:bg-amber-600`
  - Flashcard "Good": `bg-emerald-500 hover:bg-emerald-600`
  - Flashcard "Easy": `bg-blue-500 hover:bg-blue-600`

### Card Component
```css
.card {
  bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm
}
```
- Hover state: `hover:border-blue-300 hover:shadow-md`
- Chapter cards have a left-side color stripe: `w-1 self-stretch rounded-full {chapter.color}`

### Buttons
```css
.btn-primary { px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors }
.btn-secondary { px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors }
```

### Typography
- App title: `text-2xl sm:text-3xl font-bold text-gray-900`
- Section headers: `text-lg font-semibold text-gray-600`
- Chapter title: `font-semibold text-gray-900`
- Chapter subtitle: `text-gray-400 text-sm`
- Body text: `text-sm text-gray-500`
- Bold highlights in flashcard backs: `<strong className="font-semibold text-blue-700">`
- Bullet list marker: `<span className="text-blue-500 font-bold">•</span>`

### Layout
- Max width: `max-w-4xl mx-auto`
- Page padding: `p-4 sm:p-6`
- Section spacing: `space-y-8`
- Card grid (chapters): `grid gap-3`
- Responsive: sm: breakpoints for padding and flex direction

### Flip Card Animation
```css
.flip-card { perspective: 1000px }
.flip-card-inner { transition: transform 0.45s ease; transform-style: preserve-3d }
.flip-card.flipped .flip-card-inner { transform: rotateY(180deg) }
.flip-card-front, .flip-card-back { backface-visibility: hidden }
.flip-card-back { transform: rotateY(180deg) }
```

---

## Content Format

### Flashcard Back (bullet point style)
```
• **Key term** is the definition here\n• Second point with **bolded** concept\n• Third point
```
- Use `• ` (bullet + space) for each point
- Use `**text**` for bold key terms — rendered as `<strong className="font-semibold text-blue-700">`
- Separate points with `\n`
- 3–6 bullet points per back — not too long

### Flashcard Front
- Single question only
- Clear, specific — matches what an exam marker would ask
- Examples:
  - "Define the term 'financial management'."
  - "What are the five objectives of financial management?"
  - "Distinguish between debt and equity financing."

### Flashcard Difficulty Scale
- 1 = basic definition / recall
- 2 = explanation / comparison
- 3 = analysis / application
- 4 = evaluation / extended response
- 5 = complex synthesis / case-based

### Detail Field (optional)
- Use for concepts that need paragraph-length context
- Plain prose, 2–4 sentences
- Shown in a blue-50 expandable box below the back

### Practice Questions — MCQ
```typescript
{
  type: 'mcq',
  difficulty: 1,
  marks: 1,
  question: "...",
  options: [
    { label: 'a', text: '...' },
    { label: 'b', text: '...' },
    { label: 'c', text: '...' },
    { label: 'd', text: '...' },
  ],
  correctOption: 'c',
}
```
- 1 mark each
- All 4 options should be plausible (no obviously wrong answers)
- Correct answer should not always be the same position

### Practice Questions — Short Answer
```typescript
{
  type: 'short',
  difficulty: 2,
  marks: 4,
  question: "...",
  keyPoints: [
    "Point 1 — what the marker looks for",
    "Point 2",
    "Point 3 with example",
  ],
  modelAnswer: "Full prose model answer 2–6 sentences...",
}
```
- HSC marking verbs: Define (1–2m), Outline (2–4m), Explain (4–6m), Discuss/Assess (6–8m)
- keyPoints = marking criteria, one per mark approx
- modelAnswer = what a Band 6 student would write

---

## Chapter Labeling Convention
- IDs match textbook section numbers: '9.2', '9.3', '10.2', etc.
- Title format: `"9.2 Strategic Role of Financial Management"`
- Subtitle: concise topic description (≤50 chars)

---

## Storage Convention
- localStorage key format: `'{subject}-mastery-v{n}'`
  - Economics: `'econ-mastery-v3'`
  - Business: `'biz-mastery-v1'`
- Increment version if data structure changes (triggers re-initialisation)
- `initializeCards()` always merges SRS state with fresh content — never loses progress

---

## Component Architecture
All three components (FlashcardDeck, ChapterView, QuizMode) are subject-agnostic.
They accept `chapterIds: ChapterId[]` and render from the global data store.
Only `App.tsx` and `data/index.ts` are subject-specific.

## File naming
- Chapter data files: `ch{NN}-{kebab-name}.ts` where NN is zero-padded (01–14)
- Folder: `src/data/finance/` (matches the topic folder)
- IDs in data: use textbook section numbers

---

## HSC Business Studies Exam Tips (for Study Tips section)
- Always define key terms before explaining/discussing
- For financial ratios: state the formula, calculate, then interpret
- Short answer: use PEEL structure (Point, Evidence, Explain, Link)
- "Discuss" = consider both sides / advantages and disadvantages
- "Assess" = make a judgement with supporting evidence
- Learn all 7 ratios: current, debt-to-equity, gross profit, net profit, return on equity, expense, AR turnover
- Know the accounting equation: Assets = Liabilities + Owners' Equity
