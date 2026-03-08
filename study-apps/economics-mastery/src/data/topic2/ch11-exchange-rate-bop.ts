import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch11-001', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "How does the BOP influence the exchange rate under a floating system?",
    back: "Under a floating exchange rate, the quantity of A$ supplied must always equal the quantity demanded. Any disequilibrium in the BOP is therefore only temporary — it is automatically corrected by a movement in the exchange rate. Example: if imports increase (more A$ supplied) → depreciation of A$ → KFA surplus increases in A$ terms to match the larger CAD.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-002', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "What is the relationship between the current account and the capital and financial account under a floating exchange rate?",
    back: "Under a floating exchange rate, the net outflow of funds on the current account (supply of A$) must equal the net inflow of funds on the capital and financial account (demand for A$). If there is a CAD, there must be an equal KFA surplus, and vice versa. The exchange rate adjusts automatically to maintain this equality.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-003', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "How does a deterioration in the current account deficit affect the exchange rate?",
    back: "A deterioration in the CAD (e.g. increased imports, increased income outflows) → increased supply of A$ (importers sell A$ to buy foreign currency) → depreciation of A$. In turn, given the level of financial inflows, the depreciated A$ allows foreign investors to buy more A$ for the same amount of foreign currency → KFA surplus increases in A$ terms to match the larger CAD.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-004', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "How does an improvement in the current account affect the exchange rate?",
    back: "An improvement in the CAD (e.g. export boom, reduced income outflows) → reduced supply of A$ / increased demand for A$ → appreciation of A$. As the A$ appreciates, a given level of KFA inflows in foreign currency translates into fewer A$ → KFA surplus decreases in A$ terms to match the smaller CAD.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-005', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 3,
    front: "How do financial market perceptions affect the BOP–exchange rate relationship?",
    back: "The effect of the BOP on the exchange rate depends on how financial markets perceive it:\n• If markets believe the CAD is UNSUSTAINABLE → less willing to buy Australian assets → demand for A$ falls → dollar depreciates further\n• If markets BELIEVE the CAD is sustainable + have confidence in Australia → dollar may APPRECIATE despite a large CAD\nExample: A$ appreciated to over US95 cents in mid-2008 when the CAD was large, because investors believed high commodity prices would eventually reduce it.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-006', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 3,
    front: "What apparent paradox occurred between the current account and exchange rate in 2019-2020?",
    back: "In 2019-2020, Australia's current account moved into surplus for the first time in almost half a century — yet the exchange rate was DEPRECIATING, at one point dipping below US60 cents. This apparent paradox illustrates that the most significant influence on exchange rate movements is how financial markets REACT to developments in economic indicators, not the developments themselves. Market sentiment can change quickly and is difficult to predict.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-007', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "List the negative effects of an APPRECIATION of the A$ on the Australian economy.",
    back: "Negative effects of appreciation:\n1. Exports more expensive in foreign currencies → lower export income → worsens CAD\n2. Imports cheaper → more import spending → worsens CAD; domestic import-substitutes fall\n3. Reduced export revenue + higher import spending → lower economic growth\n4. Foreign investment in Australia more expensive → lower financial inflows → worsens KFA\n5. A$ value of foreign income from Australian overseas investments falls → worsens NPY component of CAD\n6. Reduces A$ value of foreign assets held by Australians (valuation effect on assets)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-008', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "List the positive effects of an APPRECIATION of the A$ on the Australian economy.",
    back: "Positive effects of appreciation:\n1. Greater purchasing power for consumers — can buy more overseas goods with same A$\n2. Decreases interest servicing cost on foreign debt (buy more foreign currency with A$) → reduces NPY outflow → helps reduce CAD\n3. Reduces A$ value of foreign currency-denominated debt (valuation effect on debt) → lowers debt and servicing costs\n4. Inflationary pressures reduced (imports cheaper) → reduces pressure on RBA to raise interest rates",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-009', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "List the negative effects of a DEPRECIATION of the A$ on the Australian economy.",
    back: "Negative effects of depreciation:\n1. Reduced purchasing power for consumers — can buy fewer overseas goods\n2. Increases interest servicing cost on foreign debt (A$ buys less foreign currency) → increases NPY outflow → worsens CAD\n3. Raises A$ value of foreign currency-denominated debt (valuation effect) → increases debt in A$ terms\n4. Inflationary pressures increase (imports more expensive) → may pressure RBA to raise interest rates",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-010', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "List the positive effects of a DEPRECIATION of the A$ on the Australian economy.",
    back: "Positive effects of depreciation:\n1. Exports cheaper in foreign currencies → easier to sell → higher export income → improves CAD\n2. Imports more expensive → discourages import spending → potentially improves CAD; import-substitutes rise\n3. Higher export revenue + lower import spending → higher economic growth\n4. Investing in Australia cheaper for foreigners → greater financial inflows (unless currency expected to keep falling)\n5. Increases A$ value of foreign income earned on Australia's overseas investments (valuation effect on foreign assets) → improves NPY\n\nNote: the weaker A$ was largely credited with helping Australia adjust to reduced mining income by increasing competitiveness of other sectors.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-011', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "What is the 'valuation effect' of exchange rate movements?",
    back: "The valuation effect is where an appreciation or depreciation of the currency causes an immediate change in the A$ value of foreign debt borrowed in foreign currencies OR foreign assets held by Australians:\n• Appreciation: reduces A$ value of foreign currency-denominated debt (positive) AND reduces A$ value of Australian overseas assets\n• Depreciation: raises A$ value of foreign currency-denominated debt (negative) AND raises A$ value of Australian overseas assets",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-012', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 3,
    front: "Why do economists view speculation in the forex market negatively?",
    back: "Economists mostly favour an exchange rate that reflects the 'true' forces of supply and demand from real trade and investment flows. Speculators who buy or sell A$ in anticipation of currency movements DISTORT the exchange rate and INCREASE volatility by exaggerating upward and downward cycles. Australia is especially vulnerable because it is a 'hot money' currency: as a small economy relying on substantial financial inflows to fund large external imbalances, the A$ is more susceptible to speculators than many other advanced economies. Excessive speculation has become a major global economic issue during the era of globalisation.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-013', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 3,
    front: "What ten economic outcomes can be affected by movements in the exchange rate? (textbook summary point 10)",
    back: "Exchange rate movements can impact:\n1. Level of inflation\n2. International competitiveness\n3. Level of exports\n4. Level of imports\n5. Foreign debt servicing costs\n6. The current account deficit\n7. Rate of economic growth\n8. A$ value of foreign assets held by Australians (valuation)\n9. A$ value of foreign debt (valuation)\n10. Purchasing power of consumers",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-014', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "Why is Australia described as a 'hot money' currency?",
    back: "Australia is described as a 'hot money' currency because it is a small economy that relies on substantial financial inflows to deal with large external imbalances. This reliance on foreign capital makes the A$ more vulnerable to speculators — investors who move large sums quickly in and out of the currency in response to short-term factors — than many other advanced economies. Excessive speculation increases exchange rate volatility, which creates economic uncertainty.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-015', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 3,
    front: "Explain why financial market sentiment is the most significant influence on exchange rate movements.",
    back: "While fundamental economic factors (CAD, commodity prices, interest rates) influence the exchange rate, the MOST significant influence is how financial markets CHOOSE TO REACT to those developments. Markets can react in unexpected ways: despite Australia's CAD being large in mid-2008, the A$ appreciated to over US95 cents because markets were confident about Australia's economic prospects. Conversely, in 2019-2020 the A$ depreciated despite the current account moving into surplus. Market reactions are difficult to predict, leading to greater instability in forex markets. Speculators, who are often more influenced by short-term factors than long-term economic trends, add further volatility.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch11-q001', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', type: 'mcq', difficulty: 1, marks: 1,
    question: "Under a floating exchange rate, a deterioration in the current account deficit will most likely lead to:",
    options: [
      { label: 'a', text: 'An appreciation of the A$ as demand for A$ increases' },
      { label: 'b', text: 'A depreciation of the A$ as supply of A$ increases' },
      { label: 'c', text: 'No change in the exchange rate as the BOP always balances' },
      { label: 'd', text: 'A decrease in the KFA surplus as financial inflows fall' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch11-q002', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', type: 'mcq', difficulty: 2, marks: 1,
    question: "Which of the following is a POSITIVE effect of depreciation of the A$?",
    options: [
      { label: 'a', text: 'Increased purchasing power for Australian consumers' },
      { label: 'b', text: 'Reduced inflation as imports become cheaper' },
      { label: 'c', text: 'Higher export income as A$ exports become cheaper in foreign currencies' },
      { label: 'd', text: 'Reduced A$ value of foreign currency-denominated debt' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch11-q003', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', type: 'mcq', difficulty: 2, marks: 1,
    question: "The 'valuation effect' of an appreciation of the A$ means that:",
    options: [
      { label: 'a', text: 'The A$ value of foreign currency-denominated debt falls, reducing servicing costs' },
      { label: 'b', text: 'The A$ value of foreign currency-denominated debt rises, increasing servicing costs' },
      { label: 'c', text: 'Australian exports become more expensive in foreign currency terms' },
      { label: 'd', text: 'Foreign investors find it cheaper to invest in Australia' },
    ],
    correctOption: 'a',
  },
  {
    id: 'ch11-q004', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', type: 'short', difficulty: 3, marks: 8,
    question: "Using examples, analyse the effects of a depreciation of the Australian dollar on the current account deficit and the broader economy.",
    keyPoints: [
      "Depreciation makes A$ exports cheaper in foreign currencies → easier to sell → increases export income → improves BOGS/CAD",
      "Depreciation makes imports more expensive → discourages import spending → potentially improves BOGS/CAD; import-substitutes rise",
      "Net positive: lower imports + higher exports → increases real economic growth rate",
      "Increases A$ value of foreign income earned on overseas investments (valuation effect on foreign assets) → improves NPY component of CAD",
      "Negative: reduced consumer purchasing power — can buy fewer overseas goods",
      "Negative: increases interest servicing costs on foreign debt (A$ buys less foreign currency) → increases income outflow on NPY → worsens CAD",
      "Negative: raises A$ value of foreign currency-denominated debt (valuation effect on debt) → worsens foreign liabilities in A$ terms",
      "Negative: imports more expensive → inflationary pressures increase → may pressure RBA to raise interest rates",
      "Example: post-mining-boom depreciation helped boost international competitiveness of non-mining sectors",
      "Effect depends on market perceptions: sustained depreciation may reduce financial inflows if investors expect currency to keep falling",
    ],
    modelAnswer: "A depreciation of the Australian dollar has significant and complex effects on both the current account deficit and the broader economy. On the current account, depreciation generally produces improvement over the medium term. Australian exports become cheaper in foreign currency terms, making them more competitive internationally and boosting export income — improving the balance of goods and services component of the CAD. Simultaneously, imports become more expensive in A$ terms, discouraging domestic consumers from buying imported goods and potentially redirecting spending toward domestically produced substitutes. Both of these effects tend to improve the CAD. The weaker A$ also increases the A$ value of income earned on Australian investments abroad — a positive valuation effect on the net primary income account. This combination of higher export revenues and lower import spending also boosts real economic growth.\n\nHowever, depreciation also carries negative consequences. Australian consumers suffer reduced purchasing power and can purchase fewer overseas goods with the same amount of A$. More significantly, depreciation increases the cost of servicing Australia's foreign debt: Australians must now sell more A$ to obtain the foreign currency needed to pay interest. This worsens the net primary income account and can actually widen the CAD. Additionally, the A$ value of foreign currency-denominated debt rises — the valuation effect on debt — increasing Australia's foreign liabilities in A$ terms and magnifying servicing obligations. Depreciation also generates inflationary pressures as imported goods and inputs become more expensive, which may eventually prompt the RBA to raise interest rates.\n\nIn practice, the actual effect depends heavily on how financial markets perceive the depreciation. If markets expect the currency to continue falling, financial inflows may slow as foreign investors become reluctant to invest in Australia — potentially offsetting the trade benefits. Australia's experience following the mining boom illustrates the benefits: the depreciation of the A$ from its 2011 peak helped boost the international competitiveness of manufacturing, tourism, and education — sectors that had suffered during the high-dollar era.",
  },
];
