import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch10-001', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 1,
    front: "When did Australia introduce a floating exchange rate system, and what system did it use before?",
    back: `• Australia switched to a **floating exchange rate** in **December 1983**\n• Prior to **November 1976**: fixed exchange rate system (pegged to UK pound, US dollar, and TWI at different times)\n• **November 1976 – December 1983**: used a **managed flexible peg**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-002', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 1,
    front: "How is the exchange rate set under a fixed exchange rate system?",
    back: `• Government or central bank (RBA) **officially sets the exchange rate** — NOT determined by supply and demand\n• RBA then attempts to **maintain that fixed rate** by buying or selling foreign currency in exchange for A$\n• Rate only changes if the government **officially devalues or revalues** it`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-003', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 2,
    front: "What happens when the official fixed exchange rate is set ABOVE the market rate?",
    back: `• Official fixed rate **above** market equilibrium → **EXCESS SUPPLY** of A$ (more sellers than buyers at official price)\n• RBA must **buy that excess supply** using its foreign currency reserves to maintain the fixed price\n• **Risk**: if excess supply persists, RBA could **exhaust its foreign reserves** → potential collapse of trade in the currency`,
    detail: `When the official rate is too high, the market would naturally push the currency lower — but the central bank intervenes to prevent this. Every day it must buy the excess A$ using its limited foreign currency reserves. If the overvaluation persists for long, reserves deplete. Once exhausted, the central bank can no longer defend the fixed rate, often leading to a sudden, large devaluation — as occurred in many Asian economies in 1997. This "reserve depletion" risk is the fundamental vulnerability of fixed exchange rate systems.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-004', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 2,
    front: "What is the difference between a devaluation and a revaluation?",
    back: `• Under a **fixed** exchange rate system, if the official rate drifts away from the market rate:\n• **DEVALUATION**: government **officially lowers** the exchange rate (brings it closer to the lower market equilibrium)\n• **REVALUATION**: government **officially raises** the exchange rate\n• These are **deliberate policy decisions**, unlike the automatic depreciation/appreciation under a floating system`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-005', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 2,
    front: "How did the RBA obtain foreign reserves under Australia's fixed exchange rate system?",
    back: `• RBA insisted that **all foreign exchange holdings be lodged with the RBA**\n• This gave the RBA **control over the country's total stock** of foreign currency\n• Necessary to **intervene in the market** and maintain the fixed rate\n• Represented a major **restriction on financial freedom**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-006', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 1,
    front: "What is a managed flexible peg?",
    back: `• **Managed flexible peg** = variation of the fixed exchange rate system\n• Under Australia's version (**November 1976 – December 1983**), RBA would **'peg' (set) the value of the A$ at 9am** each day\n• That price would operate for **the rest of that day**\n• More flexible than a fully fixed rate, but official rate can still drift from free-market level`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-007', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 2,
    front: "What criticism was made of Australia's managed flexible peg in the early 1980s?",
    back: `• Many economists argued Australia had an **overvalued exchange rate** under the managed flexible peg\n• Official rate was **higher than what market forces would have set**\n• Created **distortions in the economy** (e.g. made Australian exports less competitive)\n• One of the arguments used to justify the move to a **fully floating exchange rate** in December 1983`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-008', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 3,
    front: "What is the key risk of a fixed exchange rate system if the official rate diverges significantly from the market rate?",
    back: `• If official rate is significantly **above the market rate** → large **excess supply** of currency emerges\n• RBA must continuously buy excess supply using **foreign reserves**\n• Since reserves are **finite**, could be **completely exhausted**\n• Once exhausted → RBA can no longer defend the fixed rate → **currency collapses**\n• Mechanism behind many historical currency crises (e.g. **Asia 1997, Argentina 2001**)`,
    detail: `Historical currency crises demonstrate this risk vividly. Thailand's baht (1997), Argentina's peso (2001), and others collapsed when central banks exhausted their reserves defending an overvalued fixed rate. As reserves fell, markets anticipated the eventual collapse, accelerating capital flight — a self-fulfilling crisis. Under a floating rate, Australia avoids this vulnerability because the exchange rate adjusts continuously, so no reserve depletion crisis can occur.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-009', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 2,
    front: "What currencies was the A$ pegged to under the fixed exchange rate system before 1976?",
    back: `• Prior to November 1976, Australia's fixed exchange rate was pegged at different times to:\n• **UK pound sterling**\n• **US dollar**\n• **Trade Weighted Index**\n• Reflecting Australia's **shifting trade and financial relationships** over those decades`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-010', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 3,
    front: "Compare the key features of a fixed exchange rate system and a managed flexible peg.",
    back: `• **Fixed exchange rate**: rate set for an **extended period**; only changes via official devaluation/revaluation; requires **large foreign reserves** to defend; maximum stability but least responsiveness to market forces\n• **Managed flexible peg**: rate set **daily** (e.g. at 9am in Australia's case); more flexible — adjusts each day; still official, not market-determined; can still be **overvalued** (as critics argued in Australia's early 1980s case)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch10-q001', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'mcq', difficulty: 1, marks: 1,
    question: "Under Australia's managed flexible peg (1976–1983), the RBA would set the value of the A$ at what time each day?",
    options: [
      { label: 'a', text: 'Midnight' },
      { label: 'b', text: '9am' },
      { label: 'c', text: 'Midday' },
      { label: 'd', text: '4pm' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch10-q002', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'mcq', difficulty: 2, marks: 1,
    question: "If the official fixed exchange rate is set ABOVE the market rate, the RBA must:",
    options: [
      { label: 'a', text: 'Sell A$ to increase supply and reduce excess demand' },
      { label: 'b', text: 'Buy A$ using foreign reserves to absorb the excess supply' },
      { label: 'c', text: 'Raise domestic interest rates to reduce money supply' },
      { label: 'd', text: 'Revalue the currency to bring it below the market rate' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch10-q003', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'short', difficulty: 3, marks: 6,
    question: "Explain how a fixed exchange rate system operates in Australia's historical context, and outline the risks associated with maintaining a fixed exchange rate.",
    keyPoints: [
      "Under a fixed system: RBA officially sets the rate (not market forces); must maintain it by buying or selling foreign currency",
      "Australia operated fixed rates before November 1976 (pegged to UK pound, US dollar, or TWI), then managed flexible peg Nov 1976 – Dec 1983",
      "If fixed rate set above market rate: excess supply of A$ → RBA must buy excess using foreign reserves",
      "Risk: RBA could exhaust foreign reserves if it must continuously buy A$ → could lead to collapse of trade in the currency",
      "Alternative: government devalues (officially lowers) or revalues (officially raises) the rate",
      "Australia's managed flexible peg: rate set at 9am each day; more flexible but still diverged from market; critics argued it was overvalued in early 1980s",
      "December 1983: switched to floating system — regarded as one of most important structural changes in Australia's economic history",
    ],
    modelAnswer: "Under a fixed exchange rate system, the value of the currency is set by the government or central bank — not by the forces of supply and demand. In Australia's case, before November 1976, the A$ was pegged at different times to the UK pound sterling, the US dollar, and the Trade Weighted Index. From November 1976 to December 1983, Australia used a managed flexible peg, under which the RBA would set the value of the A$ each morning at 9am, with that rate applying for the rest of the day. To maintain the fixed rate, the RBA must intervene in the forex market. If the official rate is set above what market forces would produce, an excess supply of A$ emerges — more sellers than buyers at the official price. The RBA must buy the excess supply using its foreign currency reserves. This creates a significant risk: the RBA's foreign reserves are finite. If the imbalance between the official rate and the market rate persists, the RBA will eventually exhaust its reserves and can no longer defend the peg, risking a complete collapse of trade in the currency. Alternatively, the government can 'devalue' the currency — officially lower the exchange rate to bring it closer to market levels. Many economists argued that Australia's managed flexible peg was overvalued in the early 1980s, contributing to the decision to move to a fully floating exchange rate in December 1983 — a change regarded as one of the most significant structural reforms in Australia's economic history.",
  },
  {
    id: 'ch10-q004', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'mcq', difficulty: 1, marks: 1,
    question: "What is a 'devaluation' under a fixed exchange rate system?",
    options: [
      { label: 'a', text: 'An automatic fall in the exchange rate driven by market forces' },
      { label: 'b', text: 'A deliberate official reduction of the fixed exchange rate by the government' },
      { label: 'c', text: 'An increase in the exchange rate announced by the RBA' },
      { label: 'd', text: 'A fall in the exchange rate caused by excess demand for A$' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch10-q005', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'mcq', difficulty: 1, marks: 1,
    question: "Which of the following correctly describes a 'revaluation' of a currency?",
    options: [
      { label: 'a', text: 'A market-driven rise in the exchange rate under a floating system' },
      { label: 'b', text: 'A deliberate official increase of the fixed exchange rate by the government' },
      { label: 'c', text: 'A fall in the exchange rate caused by excess supply of the currency' },
      { label: 'd', text: 'The RBA buying foreign currency to weaken the domestic currency' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch10-q006', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'mcq', difficulty: 2, marks: 1,
    question: "If the official fixed exchange rate is set BELOW the market equilibrium rate, the RBA must:",
    options: [
      { label: 'a', text: 'Buy A$ using foreign reserves to absorb the excess supply' },
      { label: 'b', text: 'Sell A$ into the market to meet the excess demand for A$' },
      { label: 'c', text: 'Raise domestic interest rates to attract foreign capital' },
      { label: 'd', text: 'Devalue the currency to bring it down to the market rate' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch10-q007', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'mcq', difficulty: 2, marks: 1,
    question: "What was the sequence of currencies/benchmarks that Australia pegged its exchange rate to before adopting a managed flexible peg in 1976?",
    options: [
      { label: 'a', text: 'US dollar → UK pound sterling → Trade Weighted Index' },
      { label: 'b', text: 'UK pound sterling → US dollar → Trade Weighted Index' },
      { label: 'c', text: 'Trade Weighted Index → UK pound sterling → US dollar' },
      { label: 'd', text: 'US dollar → Trade Weighted Index → UK pound sterling' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch10-q008', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'mcq', difficulty: 2, marks: 1,
    question: "Which of the following is a key advantage of a fixed exchange rate system for businesses?",
    options: [
      { label: 'a', text: 'Exchange rate adjusts automatically to correct BOP imbalances' },
      { label: 'b', text: 'Monetary policy is fully independent and can target domestic inflation' },
      { label: 'c', text: 'Provides certainty for traders and investors by eliminating exchange rate volatility' },
      { label: 'd', text: 'Requires no foreign currency reserves for the central bank to maintain' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch10-q009', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'mcq', difficulty: 2, marks: 1,
    question: "Critics of Australia's managed flexible peg in the early 1980s argued that the A$ was:",
    options: [
      { label: 'a', text: 'Undervalued, protecting exporters but harming importers' },
      { label: 'b', text: 'Correctly valued at its market equilibrium level' },
      { label: 'c', text: 'Overvalued, making Australian exports less competitive' },
      { label: 'd', text: 'Too volatile, creating uncertainty for international traders' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch10-q010', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'mcq', difficulty: 3, marks: 1,
    question: "Which of the following best explains why exhaustion of foreign reserves is the fundamental vulnerability of a fixed exchange rate system?",
    options: [
      { label: 'a', text: 'Without reserves, the RBA cannot raise interest rates to attract capital' },
      { label: 'b', text: 'Once reserves are depleted, the central bank can no longer buy excess currency supply and the fixed rate collapses' },
      { label: 'c', text: 'Depleted reserves prevent the government from devaluing the currency' },
      { label: 'd', text: 'Foreign reserve depletion always causes domestic inflation regardless of exchange rate system' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch10-q011', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'mcq', difficulty: 3, marks: 1,
    question: "Which of the following countries is an example of a nation that currently uses a currency pegged to the US dollar?",
    options: [
      { label: 'a', text: 'Japan' },
      { label: 'b', text: 'United Kingdom' },
      { label: 'c', text: 'UAE (United Arab Emirates)' },
      { label: 'd', text: 'New Zealand' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch10-q012', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'short', difficulty: 2, marks: 4,
    question: "Distinguish between a devaluation and a depreciation of a currency, and explain why this distinction matters.",
    keyPoints: [
      "Devaluation: deliberate official reduction of the exchange rate under a fixed system — a policy decision by government/central bank",
      "Depreciation: automatic fall in exchange rate driven by market forces (excess supply of currency) under a floating system",
      "Under fixed systems only governments can change rates; under floating systems the market adjusts continuously",
      "The distinction matters because devaluation is discretionary and may be delayed, causing sustained misalignment; depreciation is automatic and self-correcting",
    ],
    modelAnswer: "A devaluation occurs under a fixed exchange rate system when the government or central bank deliberately and officially lowers the exchange rate. It is a policy decision, not a market outcome. By contrast, a depreciation occurs under a floating exchange rate system when excess supply of the currency in the forex market causes its value to fall automatically — without any government intervention. The distinction is important because devaluations are political decisions that can be delayed, leading to periods of significant misalignment between the official rate and the market rate, as occurred in Australia in the early 1980s. Under a floating system, depreciation is continuous and self-correcting.",
  },
  {
    id: 'ch10-q013', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'short', difficulty: 2, marks: 4,
    question: "Explain what Australia's 'managed flexible peg' was and how it differed from a fully fixed exchange rate.",
    keyPoints: [
      "Managed flexible peg: operated November 1976 – December 1983; RBA set the A$ rate each morning at 9am",
      "Rate applied only for that trading day — more flexible than a rate fixed for extended periods",
      "Still an official rate set by the RBA, not determined by market supply and demand",
      "Could still diverge from the true market rate; critics argued the A$ was overvalued under this system in early 1980s",
    ],
    modelAnswer: "Australia's managed flexible peg, which operated from November 1976 to December 1983, was a hybrid between a fixed and floating exchange rate system. Each morning at 9am, the RBA would officially set the value of the A$, and that rate would apply for the remainder of the trading day. This made it more flexible than a traditional fixed exchange rate, where the rate might be held constant for months or years. However, it was still an officially determined rate rather than one set by market forces, meaning it could diverge from the level that supply and demand would have produced. Critics argued the A$ was overvalued under this system in the early 1980s, protecting importers at the expense of exporters and ultimately contributing to the decision to adopt a fully floating exchange rate in December 1983.",
  },
  {
    id: 'ch10-q014', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'short', difficulty: 3, marks: 6,
    question: "Evaluate the advantages and disadvantages of a fixed exchange rate system compared to a floating exchange rate system.",
    keyPoints: [
      "Advantage: provides certainty and stability for international traders and investors — eliminates exchange rate volatility",
      "Advantage: can prevent excessive speculation from distorting the currency",
      "Disadvantage: requires large foreign currency reserves to intervene and maintain the fixed rate",
      "Disadvantage: sacrifices monetary policy independence — cannot adjust interest rates freely without affecting the fixed rate",
      "Disadvantage: risk of reserve exhaustion if rate diverges significantly from market rate → currency crisis (e.g. Asia 1997)",
      "Floating rate: self-correcting (automatic adjustment), no reserve requirement, preserves monetary policy independence but creates volatility",
    ],
    modelAnswer: "A fixed exchange rate system offers important advantages, particularly for international businesses. By eliminating day-to-day exchange rate volatility, it provides traders and investors with certainty about future costs and revenues, reducing the risk of currency-related losses. It can also reduce the scope for destabilising currency speculation. However, these advantages come with significant costs. The central bank must hold large quantities of foreign currency reserves to intervene and maintain the official rate whenever market forces push it away from the fixed level. Critically, the country must also sacrifice monetary policy independence, as interest rate adjustments can conflict with the objective of defending the exchange rate. The most serious risk is reserve exhaustion: if the fixed rate diverges significantly from the market rate, the central bank may need to continuously buy excess currency supply, eventually depleting its reserves entirely — a vulnerability that has triggered major currency crises, including in Thailand in 1997 and Argentina in 2001. By contrast, a floating exchange rate requires no reserves to defend, preserves monetary policy independence, and adjusts automatically to correct BOP imbalances — though it introduces exchange rate volatility that can harm trade and investment planning.",
  },
  {
    id: 'ch10-q015', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', type: 'short', difficulty: 3, marks: 6,
    question: "Why did Australia move from a managed flexible peg to a floating exchange rate in December 1983, and what significance did this change have for the Australian economy?",
    keyPoints: [
      "Campbell Report recommended floating to align exchange rate with market forces and improve efficiency",
      "Managed flexible peg was criticised for being overvalued in early 1980s — hurt export competitiveness",
      "Under managed peg, RBA still had to intervene and hold reserves; speculation was also an issue",
      "December 1983: Hawke Labor government floated the A$ — market forces now determine the rate",
      "Regarded as one of the most significant structural reforms in Australia's economic history — part of broader deregulation",
    ],
    modelAnswer: "Australia moved to a floating exchange rate in December 1983 under the Hawke Labor government, following the recommendations of the Campbell Report. The managed flexible peg that had operated since November 1976 was increasingly criticised for producing an overvalued exchange rate in the early 1980s. An overvalued A$ protected importers but damaged the competitiveness of Australian exporters, creating distortions in the economy. Under the managed peg, the RBA still had to hold significant foreign reserves and intervene in the forex market each day, and the official rate continued to diverge from what market forces would have produced. The move to a float meant that the exchange rate would henceforth be determined entirely by the supply and demand of A$ in the global forex market, adjusting automatically to reflect Australia's trade and investment flows. This change was regarded as one of the most significant structural reforms in Australia's economic history, forming a core part of the broader financial deregulation of the 1980s that transformed Australia into a more open and internationally integrated economy.",
  },
];
