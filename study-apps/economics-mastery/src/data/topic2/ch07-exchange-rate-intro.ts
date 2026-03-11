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
  {
    id: 'ch07-q004', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'mcq', difficulty: 1, marks: 1,
    question: "What percentage of all A$ sold in the Australian foreign exchange market are used to purchase US dollars?",
    options: [
      { label: 'a', text: '55%' },
      { label: 'b', text: '72%' },
      { label: 'c', text: '89%' },
      { label: 'd', text: '95%' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch07-q005', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'mcq', difficulty: 1, marks: 1,
    question: "What is the foreign exchange (forex) market?",
    options: [
      { label: 'a', text: 'A centralised market located in Sydney where currencies are traded during business hours' },
      { label: 'b', text: 'A government-run system in which the RBA sets the price of the A$ daily' },
      { label: 'c', text: 'A global, decentralised market that operates 24 hours a day in which supply and demand determine currency prices' },
      { label: 'd', text: 'A fixed-rate system managed by the International Monetary Fund' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch07-q006', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'mcq', difficulty: 1, marks: 1,
    question: "Approximately what share of Australia's exports are priced in US dollars?",
    options: [
      { label: 'a', text: 'One quarter' },
      { label: 'b', text: 'One third' },
      { label: 'c', text: 'Two thirds' },
      { label: 'd', text: 'Three quarters' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch07-q007', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'mcq', difficulty: 2, marks: 1,
    question: "What does the Trade Weighted Index (TWI) measure?",
    options: [
      { label: 'a', text: "The A$/US$ bilateral exchange rate only" },
      { label: 'b', text: "The value of the A$ against a basket of currencies weighted by Australia's trade flows" },
      { label: 'c', text: "The total volume of foreign exchange transactions in Australia per day" },
      { label: 'd', text: "The RBA's foreign currency reserve holdings" },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch07-q008', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'mcq', difficulty: 2, marks: 1,
    question: "What was the exchange rate system used by Australia between November 1976 and December 1983?",
    options: [
      { label: 'a', text: 'A fully fixed exchange rate pegged to the US dollar' },
      { label: 'b', text: 'A free-floating exchange rate determined solely by market forces' },
      { label: 'c', text: 'A managed flexible peg set daily by the Reserve Bank' },
      { label: 'd', text: 'A currency board system tied to gold' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch07-q009', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'mcq', difficulty: 2, marks: 1,
    question: "The A$ accounts for approximately what share of all daily global forex trades?",
    options: [
      { label: 'a', text: '2.1%' },
      { label: 'b', text: '4.4%' },
      { label: 'c', text: '6.8%' },
      { label: 'd', text: '9.6%' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch07-q010', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'mcq', difficulty: 2, marks: 1,
    question: "Why is the A$/US$ exchange rate considered disproportionately important relative to the US dollar's weighting in Australia's TWI?",
    options: [
      { label: 'a', text: 'Because the US is Australia\'s largest trading partner by volume' },
      { label: 'b', text: 'Because international commodities such as iron ore and coal are priced in US dollars regardless of the buyer\'s nationality' },
      { label: 'c', text: 'Because the RBA targets the A$/US$ rate as its primary exchange rate objective' },
      { label: 'd', text: 'Because the TWI no longer includes the US dollar in its basket' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch07-q011', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'mcq', difficulty: 3, marks: 1,
    question: "The US dollar's weighting in Australia's Trade Weighted Index is approximately:",
    options: [
      { label: 'a', text: '30.0%' },
      { label: 'b', text: '19.5%' },
      { label: 'c', text: '11.2%' },
      { label: 'd', text: '9.6%' },
    ],
    correctOption: 'd',
  },
  {
    id: 'ch07-q012', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'short', difficulty: 3, marks: 6,
    question: "Why is Australia's adoption of a floating exchange rate in December 1983 regarded as one of the most significant structural reforms in the country's economic history? In your answer, explain what changed and what the broader economic implications were.",
    keyPoints: [
      "Prior to December 1983: managed flexible peg — RBA set the exchange rate daily (Nov 1976–Dec 1983)",
      "December 1983: floating exchange rate adopted — value determined solely by supply and demand",
      "Opened Australia to global financial flows and international capital markets",
      "Allowed market-determined currency pricing, improving allocative efficiency",
      "Exchange rate could now act as an automatic stabiliser, adjusting to external shocks without government intervention",
    ],
    modelAnswer: "Prior to December 1983, Australia operated a managed flexible peg system in which the Reserve Bank set the exchange rate each day, insulating the A$ from market forces but limiting Australia's integration into global financial markets. The adoption of a floating exchange rate in December 1983 meant that the value of the A$ would henceforth be determined by the interaction of supply and demand, with no government or RBA target rate. This reform opened the Australian economy to global financial flows, allowing foreign investors to access Australian financial markets freely and enabling Australian firms and investors to operate internationally on market-determined terms. It also allowed the exchange rate to act as an automatic stabiliser — depreciating to boost competitiveness during downturns and appreciating to dampen inflationary pressure during booms — without requiring ongoing government intervention. For these reasons, the float is widely regarded as one of the most important structural changes in Australia's economic history.",
  },
  {
    id: 'ch07-q013', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'short', difficulty: 2, marks: 4,
    question: "Explain why the A$/US$ exchange rate is more important to the Australian economy than the US dollar's weighting in the TWI suggests.",
    keyPoints: [
      "TWI weights currencies by trade volume — US dollar weighting is only 9.6%",
      "89% of A$ sold in the forex market are used to buy US dollars",
      "Approximately two-thirds of Australia's exports and half of imports are priced in US dollars",
      "International commodities (iron ore, coal, LNG) are typically invoiced in USD regardless of buyer's nationality",
      "Analysts must consider both the A$/US$ bilateral rate and the TWI to fully assess exchange rate movements",
    ],
    modelAnswer: "The US dollar's weighting in Australia's Trade Weighted Index is only 9.6%, because the TWI is calculated based on the volume of trade with each trading partner. However, approximately 89% of all A$ sold in the Australian foreign exchange market are converted into US dollars, and around two-thirds of Australia's exports and half of its imports are priced in US dollars. This is because international commodity markets — for iron ore, coal, LNG, and agricultural products — are typically invoiced in USD regardless of the nationality of the buyer. For example, when Australia sells iron ore to China, the contract is still denominated in US dollars. As a result, the A$/US$ bilateral rate has far greater practical significance for Australian exporters and importers than its TWI share suggests, and analysts should consider both the TWI and the A$/US$ rate when assessing the exchange rate.",
  },
  {
    id: 'ch07-q014', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'short', difficulty: 2, marks: 4,
    question: "Describe the role of the foreign exchange market and explain how Australia's exchange rate system changed in December 1983.",
    keyPoints: [
      "Forex market = global, decentralised market operating 24 hours; determines currency prices via supply and demand",
      "Necessary because exporters want payment in own currency; importers need foreign currency",
      "Prior to December 1983: managed flexible peg — RBA set the A$ rate daily",
      "December 1983: Australia adopted a floating exchange rate — value determined by market forces",
      "Regarded as one of the most important structural reforms in Australia's economic history",
    ],
    modelAnswer: "The foreign exchange market is a global, decentralised market that operates 24 hours a day and facilitates the conversion of one currency into another. It is necessary because exporting firms prefer to be paid in their own currency, and importing firms must obtain foreign currency to pay overseas suppliers. Under Australia's floating system, the price of the A$ is determined by the interaction of supply and demand, changing minute by minute as conditions shift. Prior to December 1983, Australia used a managed flexible peg, under which the RBA set the exchange rate each day. The shift to a floating rate in December 1983 opened Australia to global financial flows and is considered one of the most significant structural reforms in the nation's economic history.",
  },
  {
    id: 'ch07-q015', chapter: '5.1', topic: 'Introduction to Exchange Rates', type: 'short', difficulty: 3, marks: 6,
    question: "Assess the significance of the A$ as an international currency, with reference to its global ranking and its role in Australia's trade and finance.",
    keyPoints: [
      "A$ is world's 5th most traded currency — after USD, EUR, JPY, GBP",
      "Used in 6.8% of all daily global forex trades",
      "89% of A$ sold in Australian forex market are converted to US dollars",
      "~Two-thirds of exports and ~half of imports are priced in USD — makes A$/US$ rate pivotal",
      "A$'s commodity-currency status: value closely linked to global commodity prices",
    ],
    modelAnswer: "The Australian dollar holds significant standing in global currency markets, ranking as the world's fifth most traded currency — after the US dollar, euro, Japanese yen, and British pound — and accounting for approximately 6.8% of all daily global foreign exchange transactions. This reflects Australia's integration into the global economy through trade and capital flows. Despite this global significance, approximately 89% of A$ sold in the Australian forex market are converted into US dollars, reflecting the dominance of USD-denominated commodity pricing. Around two-thirds of Australia's exports and half of its imports are invoiced in US dollars, meaning the A$/US$ bilateral exchange rate is the most critical single rate for Australia's trade and financial flows. The A$'s close correlation with commodity prices has also earned it the label of a 'commodity currency', with its value rising and falling in line with global demand for Australia's resource exports.",
  },
];
