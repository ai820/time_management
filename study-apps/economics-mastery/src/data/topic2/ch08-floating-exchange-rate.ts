import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch08-001', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 1,
    front: "Under a floating exchange rate system, what determines the value of the A$?",
    back: "Under a floating exchange rate system, the value of the A$ is determined by free market forces — supply and demand — not by government intervention. The equilibrium price changes regularly (minute by minute) as supply and demand conditions shift.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-002', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 1,
    front: "Who makes up the demand for A$?",
    back: "Demand for A$ comes from all those who wish to BUY A$:\n1. Foreign investors wishing to invest in Australia (need to convert their currency to A$)\n2. Speculators expecting the A$ to appreciate (buy now to profit later)\n3. Foreign buyers of Australian exports (need A$ to pay Australian exporters)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-003', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 1,
    front: "Who makes up the supply of A$?",
    back: "Supply of A$ comes from all those who wish to SELL A$:\n1. Australian investors wishing to invest overseas (sell A$ to buy foreign currency)\n2. Speculators expecting the A$ to depreciate (sell now before it falls)\n3. Australian importers buying from overseas (sell A$ to obtain foreign currencies)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-004', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "How do relative interest rates affect demand for A$?",
    back: "Relatively higher Australian interest rates make Australia more attractive for foreign savings → increase demand for A$ (financial inflows). Relatively lower Australian rates make saving overseas more attractive → increase supply of A$ (financial outflows). The level of Australian interest rates relative to overseas interest rates has a critical influence on the exchange rate.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-005', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "How do commodity prices and terms of trade affect the A$?",
    back: "A rise in commodity prices and an improvement in Australia's terms of trade → increase in the value of Australian exports → financial markets respond by increasing the value of the A$ (appreciation). This happens almost immediately, as commodity prices have a direct effect on the dollar. Falls in commodity prices → depreciation. The A$ is therefore known as a 'commodity currency'.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-006', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "What is an appreciation and what causes it?",
    back: "Appreciation = an increase in the value of the A$ (e.g. from US70c to US80c). Caused by an increase in demand for A$ (demand curve shifts right) OR a decrease in supply of A$ (supply curve shifts left). Key causes include: higher Australian interest rates, improved investment opportunities in Australia, rising commodity prices, improved international competitiveness, lower domestic inflation, increased demand for Australian exports, or expectations of future appreciation.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-007', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "What is a depreciation and what causes it?",
    back: "Depreciation = a decrease in the value of the A$ (e.g. from US70c to US60c). Caused by a decrease in demand for A$ (demand curve shifts left) OR an increase in supply of A$ (supply curve shifts right). Key causes include: lower Australian interest rates, deterioration in investment opportunities, falling commodity prices, deterioration in international competitiveness, higher domestic inflation, increased demand for imports, or expectations of future depreciation.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-008', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "How does the floating exchange rate act as an 'automatic stabiliser'?",
    back: "During the mining boom: increased demand for resources → pushed commodity prices up → A$ appreciated → industries not directly benefiting (e.g. manufacturing, tourism) saw costs increase and output fall → helped reallocate labour and capital to the booming mining sector → reduced inflationary pressures → maintained stable employment. The exchange rate automatically adjusted to balance the economy.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-009', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 1,
    front: "What is the Trade Weighted Index (TWI)?",
    back: "The TWI gives an indication of how the value of the A$ is moving against ALL currencies in general. It is the value of A$ against a basket of currencies of Australia's major trading partners, weighted according to their significance to Australia's trade flows. Countries more prominent in Australia's trade are given a higher weighting, so they have a greater influence on the TWI.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-010', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "What are the top TWI currency weightings for 2019-20?",
    back: "2019-20 TWI weightings:\n• Chinese renminbi: 30.0%\n• Japanese yen: 11.2%\n• US dollar: 9.6%\n• Euro: 9.4%\n• South Korean won: 5.2%\n• Singapore dollar: 4.2%\n• Indian rupee: 3.9%\n• NZ dollar: 3.9%\n• UK pound sterling: 3.9%\n• Thai baht: 3.2%\nThe TWI must cover at least 90% of Australian trade (~20-25 countries). Weightings are amended annually.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-011', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 3,
    front: "What is the key limitation of the TWI?",
    back: "The TWI weighting is based only on volumes of trade, regardless of the currency in which trade is actually invoiced. However, approximately two-thirds of Australia's exports and about half of imports are priced in US dollars — meaning the A$/US$ exchange rate is far more important than its TWI weight of 9.6% suggests. It is therefore useful to look at both the A$/US$ rate AND the TWI when analysing exchange rate movements.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-012', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "Describe the recent history of the A$ from its 2001 low to the COVID-19 pandemic.",
    back: "• 2001: low of US47 cents\n• 2003 onwards: strong appreciation as commodity prices rose\n• 2009: sharp fall during GFC — lost one-third of value against US$\n• 2011: peaked at US$1.10 and TWI 76.0\n• Mid-2010s: depreciated to US70–80 cent range\n• March 2020 (COVID-19): briefly fell to US55 cents → soon recovered to US70 cents",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-013', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 3,
    front: "What is the 'carry trade' and how has it affected the A$?",
    back: "The carry trade occurs when Australia's cash rate is higher than other advanced economies → foreign investors (especially from Japan and high-savings nations) are more likely to invest in Australia to earn higher returns → this creates strong demand for A$, supporting its value. When Australian interest rates have been low (since 2016), the carry trade effect reduces demand for A$.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-014', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 3,
    front: "According to RBA research (Rees and Kulish, 2015), what was the long-run impact of the 2000s resources boom on the A$?",
    back: "RBA research (Rees and Kulish, 2015) estimated that the legacy of the 2000s resources boom resulted in a 40% increase in commodity prices in the long run, leading to a 31% appreciation in the A$. The research concluded that the A$ will likely remain above its pre-2003 levels for the foreseeable future.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch08-q001', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 1, marks: 1,
    question: "Under Australia's floating exchange rate system, which of the following would most directly cause an appreciation of the A$?",
    options: [
      { label: 'a', text: 'A fall in Australian interest rates relative to overseas rates' },
      { label: 'b', text: 'An increase in Australian imports' },
      { label: 'c', text: 'A rise in commodity prices and improvement in the terms of trade' },
      { label: 'd', text: 'An increase in Australian inflation relative to overseas' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch08-q002', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 2, marks: 1,
    question: "The Chinese renminbi has the highest weighting in Australia's TWI. What is its 2019-20 weighting?",
    options: [
      { label: 'a', text: '9.6%' },
      { label: 'b', text: '19.5%' },
      { label: 'c', text: '30.0%' },
      { label: 'd', text: '36.1%' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch08-q003', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 2, marks: 1,
    question: "The A$ reached its lowest point in 2001 at approximately:",
    options: [
      { label: 'a', text: 'US47 cents' },
      { label: 'b', text: 'US55 cents' },
      { label: 'c', text: 'US60 cents' },
      { label: 'd', text: 'US65 cents' },
    ],
    correctOption: 'a',
  },
  {
    id: 'ch08-q004', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'short', difficulty: 3, marks: 8,
    question: "Analyse the factors that determine the supply and demand for A$ in the foreign exchange market, and explain how these factors can lead to either appreciation or depreciation.",
    keyPoints: [
      "Demand for A$: financial inflows (foreign investors), export earnings (foreigners buy A$ to pay exporters), expectations of appreciation",
      "Key demand driver: Australian interest rates relative to overseas — higher rates attract foreign savings → more demand for A$",
      "Commodity prices/TOT: rising commodity prices → increased export earnings → appreciation",
      "Supply of A$: financial outflows (Australians investing overseas), import payments (sell A$ for foreign currency), expectations of depreciation",
      "Appreciation = demand increase (right shift) or supply decrease (left shift); depreciation = demand decrease or supply increase",
      "Floating rate acts as automatic stabiliser — e.g. mining boom: commodity prices ↑ → A$ appreciated → reallocated resources away from other sectors",
      "TWI limitation: US dollar weight only 9.6% but ~89% of A$ sold used to buy US$ — bilateral rate more important than weight suggests",
    ],
    modelAnswer: "Under Australia's floating exchange rate system, the value of the A$ is determined by the interaction of supply and demand in the forex market. On the demand side, A$ are demanded by three main groups: foreign investors who wish to invest in Australia and must convert their currency into A$; foreign buyers of Australian exports who need A$ to pay Australian exporters; and speculators who expect the A$ to appreciate and buy now to profit later. The most critical influence on financial inflows — and hence demand — is the level of Australian interest rates relative to overseas rates. Higher Australian rates make Australia more attractive for foreign savings, boosting demand for the A$. Rising commodity prices and an improvement in the terms of trade also increase demand, as financial markets quickly price in higher export revenues.\n\nOn the supply side, A$ are supplied by Australian investors seeking to invest overseas (they must sell A$ for foreign currency); Australian importers who sell A$ to obtain foreign currencies; and speculators expecting the A$ to fall. Rising domestic incomes increase imports and therefore the supply of A$. Higher domestic inflation and lower international competitiveness also raise import demand and the supply of A$.\n\nAn appreciation occurs when demand for A$ increases (demand curve shifts right) or supply decreases (shifts left) — for example, a rise in commodity prices or higher Australian interest rates. A depreciation occurs when demand falls or supply rises — for example, lower interest rates, deteriorating terms of trade, or higher domestic inflation.\n\nThe floating exchange rate also functions as an automatic stabiliser. During the 2000s mining boom, rising commodity prices boosted the A$, which helped reallocate labour and capital into the booming mining sector and reduced inflationary pressures, demonstrating how exchange rate flexibility allows the economy to adjust to external shocks.",
  },
];
