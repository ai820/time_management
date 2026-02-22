import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch08-001', chapter: '2.8', topic: 'Terms of Trade', difficulty: 1,
    front: "What are the Terms of Trade (TOT)?",
    back: "The Terms of Trade measure the ratio of EXPORT PRICES to IMPORT PRICES. They indicate how many imports Australia can purchase per unit of exports. An improvement means each unit of exports buys more imports. A deterioration means each unit of exports buys fewer imports.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-002', chapter: '2.8', topic: 'Terms of Trade', difficulty: 1,
    front: "Write the formula for the Terms of Trade Index.",
    back: "TOT Index = (Export Price Index ÷ Import Price Index) × 100\n\nIf TOT Index > 100 (or previous period): IMPROVEMENT — export prices rising faster than import prices.\nIf TOT Index < 100 (or previous period): DETERIORATION — import prices rising faster than export prices.\n\nBase year: TOT Index = 100.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-003', chapter: '2.8', topic: 'Terms of Trade', difficulty: 2,
    front: "What does an 'improvement' in the Terms of Trade mean?",
    back: "An improvement means export prices are rising faster than import prices — each unit of exports can buy MORE imports.\n\nEffects:\n• BOGS improves (more export revenue relative to import costs)\n• CAD narrows or moves to surplus\n• AUD may appreciate (demand for AUD increases as export revenue rises)\n• Net Foreign Debt may decrease (less need to borrow to finance BOGS)\n• Economic growth supported (higher export income → higher GDP)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-004', chapter: '2.8', topic: 'Terms of Trade', difficulty: 2,
    front: "What does a 'deterioration' in the Terms of Trade mean?",
    back: "A deterioration means import prices rise faster than export prices — each unit of exports buys FEWER imports.\n\nEffects on:\n• BOGS: worsens (export revenue falls relative to import costs) → larger CAD\n• Exchange Rate: AUD may depreciate (less demand for AUD, more supply)\n• Net Foreign Debt: may increase (more borrowing needed to finance larger CAD)\n• Economic growth: may slow (lower export income → reduced GDP)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-005', chapter: '2.8', topic: 'Terms of Trade', difficulty: 2,
    front: "Calculate the TOT Index: Export Price Index = 125, Import Price Index = 110.",
    back: "TOT Index = (Export Price Index ÷ Import Price Index) × 100\n= (125 ÷ 110) × 100\n= 113.6\n\nSince TOT Index > 100 (base year), this represents an IMPROVEMENT in the Terms of Trade — export prices are higher relative to import prices compared to the base period.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-006', chapter: '2.8', topic: 'Terms of Trade', difficulty: 2,
    front: "How does a deterioration in TOT affect the Current Account Deficit?",
    back: "1. Export prices fall relative to import prices\n2. For the SAME volume of exports, Australia earns LESS revenue\n3. For the SAME volume of imports, Australia pays MORE\n4. Net Goods balance worsens → BOGS deteriorates → CAD increases\n5. A larger CAD requires more capital inflows → increases Net Foreign Debt over time",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-007', chapter: '2.8', topic: 'Terms of Trade', difficulty: 3,
    front: "How does a deterioration in TOT affect the exchange rate?",
    back: "When TOT deteriorates:\n1. Export revenue falls (lower export prices) → less demand for AUD in foreign exchange markets\n2. Import costs increase → more AUD sold to buy foreign currency for imports → increased supply of AUD\n3. Less demand + more supply of AUD → AUD DEPRECIATES\nNote: The depreciation can partially offset the TOT deterioration by making exports cheaper overseas (price effect).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-008', chapter: '2.8', topic: 'Terms of Trade', difficulty: 3,
    front: "How does a deterioration in TOT affect Net Foreign Debt?",
    back: "1. Deteriorating TOT → worsened BOGS → larger CAD\n2. Larger CAD requires more capital inflows to finance it\n3. Capital inflows via borrowing → increases Net Foreign Debt\n4. More debt → higher servicing costs → further worsens Net Primary Income deficit and CAD\nCycle: Deteriorating TOT → larger CAD → more borrowing → more debt → more servicing costs → even larger CAD.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-009', chapter: '2.9', topic: 'Terms of Trade', difficulty: 2,
    front: "How has Australia's TOT changed over recent decades and why?",
    back: "Australia's TOT improved significantly over the last 15–20 years (the commodities boom):\n• China's rapid industrialisation drove strong demand for iron ore and coal → pushed export prices UP\n• Asian manufacturing capability pushed prices of manufactured imports DOWN\n• Both effects pushed TOT up — Australia earns more from exports relative to imports\nThis improvement in TOT contributed to current account surpluses in recent years.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-010', chapter: '2.8', topic: 'Terms of Trade', difficulty: 3,
    front: "Calculate: Year 1 TOT Index = 100; Year 2: Export Price Index = 115, Import Price Index = 105. Did TOT improve or deteriorate in Year 2?",
    back: "Year 2 TOT Index = (115 ÷ 105) × 100 = 109.5\n\nSince Year 2 (109.5) > Year 1 (100): IMPROVEMENT in TOT.\n\nExport prices rose by 15% while import prices only rose by 5% → Australia earns relatively more from exports → can buy more imports per unit exported.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch08-q001', chapter: '2.8', topic: 'Terms of Trade', type: 'mcq', difficulty: 2, marks: 1,
    question: "The Terms of Trade Index formula is:",
    options: [
      { label: 'a', text: '(Import Price Index ÷ Export Price Index) × 100' },
      { label: 'b', text: '(Export Price Index ÷ Import Price Index) × 100' },
      { label: 'c', text: '(Export Volume ÷ Import Volume) × 100' },
      { label: 'd', text: '(Export Revenue ÷ Import Revenue) × 100' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch08-q002', chapter: '2.8', topic: 'Terms of Trade', type: 'mcq', difficulty: 2, marks: 1,
    question: "If the Export Price Index = 120 and Import Price Index = 130, the TOT Index is:",
    options: [
      { label: 'a', text: '108.3 — improvement' },
      { label: 'b', text: '92.3 — deterioration' },
      { label: 'c', text: '92.3 — improvement' },
      { label: 'd', text: '108.3 — deterioration' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch08-q003', chapter: '2.8', topic: 'Terms of Trade', type: 'short', difficulty: 3, marks: 5,
    question: "Comment on the effects of a DETERIORATION in the Terms of Trade on the Current Account Deficit, the exchange rate, and Net Foreign Debt.",
    keyPoints: [
      "CAD: export prices fall relative to import prices → lower export revenue → worsened BOGS → larger CAD",
      "Exchange rate: lower export revenue → less demand for AUD; higher import costs → more supply of AUD → AUD depreciation",
      "Net Foreign Debt: larger CAD needs financing → more borrowing overseas → NFD increases → more servicing costs",
      "Link all three: deterioration → CAD worsens → more borrowing → more debt → more servicing costs → larger future CAD",
    ],
    modelAnswer: "A deterioration in the Terms of Trade (TOT) — where import prices rise faster than export prices — has negative effects on Australia's Balance of Payments and external position.\n\nEffect on CAD: With lower export prices relative to import prices, Australia earns less revenue for the same volume of exports while paying more for the same volume of imports. This worsens the Balance on Goods and Services (BOGS), increasing the Current Account Deficit.\n\nEffect on Exchange Rate: As export revenue falls, overseas demand for Australian dollars decreases. At the same time, higher import costs mean Australians sell more AUD to purchase foreign currencies. The combination of reduced demand and increased supply of AUD causes the Australian dollar to depreciate.\n\nEffect on Net Foreign Debt: A larger CAD must be financed by a surplus on the Capital and Financial Account. This typically requires additional borrowing from overseas, increasing Net Foreign Debt. Higher debt means greater interest servicing costs, which create further debits on the Net Primary Income account, potentially deepening the CAD in a self-reinforcing cycle.",
  },
];
