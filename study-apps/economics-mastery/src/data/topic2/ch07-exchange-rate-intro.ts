import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch07-001', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 1,
    front: "What is an exchange rate?",
    back: "An exchange rate is the price of Australia's currency in terms of another country's currency — the price at which traders and investors can swap A$ for another currency.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-002', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 1,
    front: "Why are exchange rates necessary?",
    back: "Exchange rates are necessary because exporting firms want to be paid in their own currency, while importers need to convert A$ to foreign currency to make payments overseas. Without exchange rates, international trade and investment could not occur.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-003', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 1,
    front: "What is the foreign exchange market (forex market)?",
    back: "The foreign exchange market is the market in which the forces of supply and demand (or the government under a fixed exchange rate system) determine the price of one country's currency in terms of another.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-004', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 1,
    front: "How does the A$ rank among the world's most traded currencies?",
    back: "The Australian dollar is the world's 5th most traded currency, after the US dollar, European euro, Japanese yen, and British pound. The A$ is used in 6.8% of all daily currency trades in foreign exchange markets.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-005', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 1,
    front: "What percentage of A$ sold in the Australian forex market are used to buy US dollars?",
    back: "89% of all A$ sold in the Australian foreign exchange market are used to buy US dollars, reflecting the dominance of the A$/US$ exchange rate in Australian trade and finance.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-006', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 1,
    front: "What was the average daily turnover from foreign exchange transactions in Australia in April 2019?",
    back: "Turnover from foreign exchange transactions averaged US$121 billion per day in Australia in April 2019, though activity had softened since 2013 but can still go through large upswings and downswings.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-007', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 2,
    front: "When did Australia switch to a floating exchange rate system, and why is this significant?",
    back: "In December 1983, Australia switched from a managed flexible peg to a floating exchange rate system. This is regarded as one of the most important structural changes in Australia's economic history, as it opened the economy to global financial flows and allowed the exchange rate to be determined by market forces.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-008', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 2,
    front: "What are the two key summary points about exchange rates from the textbook?",
    back: "1. An exchange rate is the price of Australia's currency in terms of another country's currency.\n2. Under Australia's floating exchange rate system, the value is determined by the interaction of supply and demand — the equilibrium changes regularly (minute by minute) as supply and demand conditions shift.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-009', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 2,
    front: "Why does the role of exporters and importers create demand for a forex market?",
    back: "Exporting firms want to be paid in their own currency (e.g. an Australian exporter wants A$). Foreign buyers must therefore convert their currency into A$. Conversely, Australian importers need to sell A$ to obtain foreign currency to pay overseas suppliers. This two-way conversion creates continuous demand for a market where currencies can be exchanged.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-010', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 3,
    front: "What does it mean that the A$/US$ exchange rate is disproportionately important relative to its TWI weight?",
    back: "Although the US dollar's weight in Australia's TWI is only 9.6% (based on trade volumes), approximately 89% of A$ sold in the Australian forex market are used to buy US dollars, and roughly two-thirds of Australia's exports and half of imports are priced in US dollars. This means the A$/US$ exchange rate has far greater practical significance than its TWI weight suggests — analysts must consider both the A$/US$ bilateral rate and the broader TWI when assessing exchange rate movements.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch07-q001', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'mcq', difficulty: 1, marks: 1,
    question: "The Australian dollar ranks as the world's most traded currency in what position?",
    options: [
      { label: 'a', text: '2nd' },
      { label: 'b', text: '3rd' },
      { label: 'c', text: '4th' },
      { label: 'd', text: '5th' },
    ],
    correctOption: 'd',
  },
  {
    id: 'ch07-q002', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'mcq', difficulty: 2, marks: 1,
    question: "Australia switched from a managed flexible peg to a floating exchange rate system in:",
    options: [
      { label: 'a', text: 'November 1976' },
      { label: 'b', text: 'December 1983' },
      { label: 'c', text: 'January 1990' },
      { label: 'd', text: 'June 2000' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch07-q003', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'short', difficulty: 2, marks: 4,
    question: "Explain what an exchange rate is and why exchange rates are necessary for international trade.",
    keyPoints: [
      "Exchange rate = price of Australia's currency in terms of another country's currency",
      "Exporting firms want to be paid in their own currency",
      "Importers need to convert A$ to foreign currency to make payments",
      "Without exchange rates, international trade and investment could not take place",
    ],
    modelAnswer: "An exchange rate is the price of Australia's currency in terms of another country's currency — it is the price at which traders and investors can swap A$ for another currency. Exchange rates are necessary because exporting firms want to be paid in their own currency: an Australian resource company selling iron ore to China, for example, wants payment in A$, so the Chinese buyer must obtain A$ by converting renminbi. Conversely, Australian importers buying goods from overseas must sell A$ and purchase foreign currency to pay their suppliers. Without a forex market to facilitate these currency conversions, international trade and investment flows would not be possible. In Australia's case, the forex market operates under floating exchange rate conditions, with the value of the A$ determined by the interaction of supply and demand.",
  },
];
