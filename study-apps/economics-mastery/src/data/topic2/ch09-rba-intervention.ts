import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch09-001', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 1,
    front: "Can the RBA permanently change the value of the A$ through intervention?",
    back: "No. The RBA cannot change the value of the A$ in the long term. It can only smooth out swings relating to short-term factors. Ultimately, long-term exchange rate movements are determined by the fundamental forces of supply and demand.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-002', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 1,
    front: "What are the two ways the RBA can influence the value of the A$?",
    back: "1. Dirtying the float: the RBA directly buys or sells A$ in the foreign exchange market to stabilise the exchange rate.\n2. Monetary policy decisions: the RBA adjusts interest rates, which indirectly influences the exchange rate by affecting financial flows into or out of Australia.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-003', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 1,
    front: "What is 'dirtying the float'?",
    back: "Dirtying the float is when the RBA steps into the forex market as a buyer or seller of A$ to stabilise the currency when it believes a large short-term change in the exchange rate will be harmful to the domestic economy. It does NOT eliminate the float — it merely 'dirties' it by adding an element of intervention.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-004', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 2,
    front: "What does the RBA do to curb rapid depreciation of the A$?",
    back: "To curb rapid depreciation: the RBA BUYS A$ in the forex market, using its foreign currency reserves. This increases demand for A$ → puts upward pressure on the exchange rate. Example: in the second half of 2008, as the A$ lost one-third of its value, the RBA purchased $3.3 billion of A$ to moderate the depreciation and provide support.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-005', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 2,
    front: "What does the RBA do to prevent rapid appreciation of the A$?",
    back: "To prevent rapid appreciation: the RBA SELLS A$ in the forex market. This increases the supply of A$ → puts downward pressure on the exchange rate. Example: the RBA sold $3.4 billion of A$ in 2009 as the currency recovered strongly in value following the GFC.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-006', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 2,
    front: "What is the key limitation on the RBA's ability to 'dirty the float'?",
    back: "The RBA's ability to buy A$ is limited by the SIZE of its foreign currency reserves (holdings of foreign currency and gold). The total value of RBA's foreign currency reserves is relatively small — it is not even equal to ONE day's total transactions in the currency. Therefore the RBA cannot intervene for extended periods to defend the exchange rate.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-007', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 2,
    front: "How can monetary policy be used to influence the exchange rate?",
    back: "If the RBA wants to curb rapid depreciation, it may INCREASE interest rates → attract more foreign savings → those savings must be converted into A$ → increases demand for A$ → upward pressure on exchange rate. Higher rates make Australia a more attractive destination for foreign capital. However, this effect is generally only effective for a limited time.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-008', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 2,
    front: "What is the primary focus of the RBA's monetary policy, and how does this relate to exchange rate management?",
    back: "The primary focus of monetary policy is to influence the domestic economy — particularly the inflation rate (targeting 2–3% on average). It is unusual for the RBA to change interest rates specifically in response to currency movements. However, if exchange rate movements are so large that they affect the stability of the economy or the level of inflation, they become a concern for the RBA even though they are not the primary target.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-009', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 3,
    front: "What is the quantified relationship between exchange rate movements and inflation, according to RBA (2014) research?",
    back: "RBA (2014): A 10% depreciation of the A$ → leads to a ¼–½ percentage point increase in inflation over two years. A 10% appreciation → leads to a 0.3% annual decline in inflation. This explains why large currency movements are a concern for the RBA, even though exchange rate management is not its primary mandate — they can significantly affect the inflation rate, which IS the primary target.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-010', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 3,
    front: "Did the RBA's 2008 forex intervention generate any additional benefits?",
    back: "Yes. Beyond stabilising the exchange rate, the RBA's forex interventions in 2008-09 generated profits. Buying A$ at depressed prices and then selling them as the currency recovered generated profits that contributed to the RBA's dividend payment to the government — making the intervention both economically beneficial and fiscally productive.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch09-q001', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'mcq', difficulty: 1, marks: 1,
    question: "To moderate a rapid depreciation of the A$, the RBA would:",
    options: [
      { label: 'a', text: 'Sell A$ in the foreign exchange market' },
      { label: 'b', text: 'Buy A$ in the foreign exchange market' },
      { label: 'c', text: 'Lower the official cash rate' },
      { label: 'd', text: 'Increase the money supply' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch09-q002', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'mcq', difficulty: 2, marks: 1,
    question: "How much did the RBA spend buying A$ during the second half of 2008 to moderate the GFC depreciation?",
    options: [
      { label: 'a', text: '$1.1 billion' },
      { label: 'b', text: '$2.5 billion' },
      { label: 'c', text: '$3.3 billion' },
      { label: 'd', text: '$5.0 billion' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch09-q003', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'short', difficulty: 3, marks: 6,
    question: "Explain how the Reserve Bank of Australia can influence the value of the Australian dollar, and assess the limitations of each method.",
    keyPoints: [
      "Method 1 — dirtying the float: RBA buys A$ (to raise value) or sells A$ (to lower value) in the forex market",
      "Limitation: RBA's foreign currency reserves are limited — not even equal to one day's transactions; cannot intervene for extended periods",
      "Example: RBA bought $3.3bn A$ in 2H 2008; sold $3.4bn A$ in 2009",
      "Method 2 — monetary policy: raising interest rates → attracts foreign savings → increases demand for A$ → appreciates",
      "Limitation: rarely used specifically for exchange rate; primary focus is inflation; effective only for a limited time",
      "RBA (2014): 10% depreciation → ¼–½% increase in inflation over two years → explains why large currency moves are a concern",
      "Overall limitation: RBA cannot change the exchange rate in the long term; can only smooth short-term fluctuations",
    ],
    modelAnswer: "The Reserve Bank of Australia has two main methods to influence the value of the A$. The first is 'dirtying the float': the RBA enters the foreign exchange market as a buyer or seller of A$ when it believes a short-term movement will be harmful. To curb rapid depreciation, the RBA buys A$ (using foreign currency reserves), increasing demand and putting upward pressure on the exchange rate. To prevent rapid appreciation, it sells A$, increasing supply and pushing the value down. In practice, the RBA purchased $3.3 billion of A$ during the second half of 2008 to moderate the GFC-driven depreciation, and then sold $3.4 billion of A$ in 2009 as the currency recovered. The key limitation of this method is the size of the RBA's foreign currency reserves, which are relatively small — not even equal to one day's total transactions in the currency. The RBA therefore cannot sustain intervention for extended periods.\n\nThe second method is monetary policy. Raising the official cash rate attracts foreign savings into Australia, which must be converted into A$, increasing demand for the currency. This tends to appreciate the A$. However, the RBA rarely changes interest rates specifically to manage the exchange rate — its primary focus is influencing domestic inflation. Monetary policy is only effective for a limited time and can have significant side effects on the domestic economy. A 2014 RBA research publication found that a 10% depreciation leads to a ¼–½ percentage point increase in inflation over two years, which is why large currency movements remain a concern for the RBA even when they are not the primary policy target. In sum, the RBA can smooth short-term exchange rate volatility, but cannot fundamentally alter the exchange rate in the long run.",
  },
];
