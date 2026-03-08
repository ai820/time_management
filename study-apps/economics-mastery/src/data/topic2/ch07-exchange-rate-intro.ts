import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch07-001', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 1,
    front: "What is an exchange rate?",
    back: `• **Exchange rate** = the **price of Australia's currency** in terms of another country's currency\n• The price at which traders and investors can **swap A$ for another currency**\n• Determined by **supply and demand** under a floating system`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-002', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 1,
    front: "Why are exchange rates necessary?",
    back: `• Exporting firms want to be paid in their **own currency**\n• Importers need to **convert A$ to foreign currency** to make payments overseas\n• Without exchange rates, **international trade and investment could not occur**\n• The forex market facilitates these **currency conversions**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-003', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 1,
    front: "What is the foreign exchange market (forex market)?",
    back: `• **Forex market** = the market in which **supply and demand** (or the government under a fixed system) determine the price of one currency in terms of another\n• Under Australia's **floating** system, price is market-determined\n• Under a **fixed** system, the government sets the price`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-004', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 1,
    front: "How does the A$ rank among the world's most traded currencies?",
    back: `• A$ is the world's **5th most traded currency**\n• After: **US dollar, European euro, Japanese yen, British pound**\n• Used in **6.8%** of all daily currency trades in foreign exchange markets`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-005', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 1,
    front: "What percentage of A$ sold in the Australian forex market are used to buy US dollars?",
    back: `• **89%** of all A$ sold in the Australian forex market are used to buy **US dollars**\n• Reflects the dominance of the **A$/US$ exchange rate** in Australian trade and finance\n• ~**two-thirds** of Australia's exports and **half** of imports are **priced in US dollars**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-006', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 1,
    front: "What was the average daily turnover from foreign exchange transactions in Australia in April 2019?",
    back: `• Turnover averaged **US$121 billion per day** in Australia in April 2019\n• Activity had softened since 2013 but can still go through **large upswings and downswings**\n• Illustrates the enormous scale of forex market activity`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-007', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 2,
    front: "When did Australia switch to a floating exchange rate system, and why is this significant?",
    back: `• Australia switched to a **floating exchange rate** in **December 1983**\n• Previously used a **managed flexible peg** (set daily by RBA)\n• Regarded as **one of the most important structural changes** in Australia's economic history\n• Opened the economy to **global financial flows** and allowed market-determined pricing`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-008', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 2,
    front: "What are the two key summary points about exchange rates from the textbook?",
    back: `• **1.** An exchange rate is the **price of Australia's currency** in terms of another country's currency\n• **2.** Under Australia's floating system, the value is determined by **interaction of supply and demand** — equilibrium changes **regularly (minute by minute)** as conditions shift`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-009', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 2,
    front: "Why does the role of exporters and importers create demand for a forex market?",
    back: `• **Exporting firms** want to be paid in their own currency (e.g. Australian exporter wants A$)\n• Foreign buyers must therefore **convert their currency into A$**\n• Australian **importers** need to sell A$ to obtain foreign currency to pay overseas suppliers\n• This **two-way conversion** creates continuous demand for currency exchange`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-010', chapter: '5.1', topic: 'Introduction to Exchange Rates', difficulty: 3,
    front: "What does it mean that the A$/US$ exchange rate is disproportionately important relative to its TWI weight?",
    back: `• US dollar's weight in Australia's **TWI is only 9.6%** (based on trade volumes)\n• Yet **89%** of A$ sold in the Australian forex market are used to buy US dollars\n• ~**two-thirds** of exports and **half** of imports are priced in US dollars\n• Analysts must consider **both the A$/US$ bilateral rate AND the broader TWI** when assessing exchange rate movements`,
    detail: `The discrepancy arises because international commodity markets — iron ore, coal, LNG, agricultural products — are typically priced in US dollars regardless of the buyer's nationality. Even when Australia sells iron ore to China, the contract is priced in USD. This means the A$/USD rate has far more practical significance for Australian exporters and importers than its TWI weighting suggests. The TWI is useful for a broad indicator of competitiveness, but the A$/USD rate captures the most important day-to-day pricing effects.`,
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
