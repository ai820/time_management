import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch10-001', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 1,
    front: "When did Australia introduce a floating exchange rate system, and what system did it use before?",
    back: "Australia switched to a floating exchange rate system in December 1983. Prior to November 1976, Australia had a fixed exchange rate system (pegged at different times to the UK pound sterling, US dollar, and TWI). From November 1976 to December 1983, it used a managed flexible peg.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-002', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 1,
    front: "How is the exchange rate set under a fixed exchange rate system?",
    back: "Under a fixed exchange rate system, the government or central bank (RBA) officially sets the exchange rate — it is NOT left up to the forces of supply and demand. The RBA then attempts to maintain that fixed rate by buying or selling foreign currency in exchange for A$.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-003', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 2,
    front: "What happens when the official fixed exchange rate is set ABOVE the market rate?",
    back: "If the official fixed rate is set above the market equilibrium rate, there is an EXCESS SUPPLY of A$ (more people want to sell A$ at the official price than want to buy them). The RBA must buy that excess supply using its foreign currency reserves to maintain the fixed price. Risk: if the excess supply persists, the RBA could exhaust its foreign reserves, potentially leading to a complete collapse of trade in the currency.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-004', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 2,
    front: "What is the difference between a devaluation and a revaluation?",
    back: "Under a fixed exchange rate system, if the official rate drifts away from the market rate:\n• DEVALUATION: the government officially lowers the exchange rate (brings it closer to the lower market equilibrium)\n• REVALUATION: the government officially raises the exchange rate\nThese are deliberate policy decisions, unlike the automatic depreciation/appreciation under a floating system.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-005', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 2,
    front: "How did the RBA obtain foreign reserves under Australia's fixed exchange rate system?",
    back: "When Australia operated under a fixed exchange rate system, the RBA obtained the necessary foreign reserves by insisting that all foreign exchange holdings be lodged with the RBA. This gave the RBA control over the country's total stock of foreign currency, which it needed to intervene in the market and maintain the fixed rate.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-006', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 1,
    front: "What is a managed flexible peg?",
    back: "A managed flexible peg is a variation of the fixed exchange rate system. Under Australia's version (November 1976 to December 1983), the RBA would 'peg' (set) the value of the A$ at 9am each day, and that price would operate for the rest of that day. This provides more flexibility than a fully fixed rate, but the official rate can still drift away from what free market forces would determine.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-007', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 2,
    front: "What criticism was made of Australia's managed flexible peg in the early 1980s?",
    back: "Many economists argued that Australia had an overvalued exchange rate under the managed flexible peg system in the early 1980s. This meant the official rate was higher than what market forces would have set, creating distortions in the economy. This was one of the arguments used to justify the move to a fully floating exchange rate in December 1983.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-008', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 3,
    front: "What is the key risk of a fixed exchange rate system if the official rate diverges significantly from the market rate?",
    back: "If the official rate is set significantly above the market rate, a large excess supply of the currency will emerge. The RBA must continuously buy the excess supply using foreign reserves. Since the RBA's reserves are finite, it could exhaust them completely. Once reserves are depleted, the RBA can no longer defend the fixed rate → the currency collapses. This is the mechanism behind many historical currency crises (e.g. Asia 1997, Argentina 2001).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-009', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 2,
    front: "What currencies was the A$ pegged to under the fixed exchange rate system before 1976?",
    back: "Prior to November 1976, Australia's fixed exchange rate was pegged at different times to: (1) the UK pound sterling, (2) the US dollar, and (3) the Trade Weighted Index — reflecting Australia's shifting trade and financial relationships over those decades.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-010', chapter: '5.4', topic: 'Fixed Exchange Rate Systems', difficulty: 3,
    front: "Compare the key features of a fixed exchange rate system and a managed flexible peg.",
    back: "Fixed exchange rate:\n• Rate set by government/RBA for an extended period\n• Does not change unless officially devalued or revalued\n• Requires large foreign reserves to defend against persistent disequilibrium\n• Maximum stability but least responsiveness to market forces\n\nManaged flexible peg:\n• Rate set daily (e.g. at 9am in Australia's case)\n• More flexible — can adjust each day\n• Still official, not market-determined\n• Can still be overvalued (as critics argued in Australia's early 1980s case)",
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
];
