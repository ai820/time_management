import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch11-001', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "How does the BOP influence the exchange rate under a floating system?",
    back: `• Under a floating exchange rate, quantity of A$ supplied must **always equal** the quantity demanded\n• Any BOP disequilibrium is therefore only **temporary** — automatically corrected by a movement in the exchange rate\n• Example: if imports increase (more A$ supplied) → **depreciation of A$** → KFA surplus increases in A$ terms to match the larger CAD`,
    detail: `The floating exchange rate is the mechanism that automatically equilibrates the BOP. If the CA moves into deeper deficit (more A$ supplied as importers pay overseas), the exchange rate depreciates until either exports become cheaper and increase, imports become more expensive and decrease, or foreign investment becomes more attractive and KFA inflows rise. This self-correcting mechanism means the BOP always balances — unlike fixed exchange rate systems where intervention is required.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-002', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "What is the relationship between the current account and the capital and financial account under a floating exchange rate?",
    back: `• Net outflow of funds on the CA (**supply of A$**) must equal net inflow of funds on the KFA (**demand for A$**)\n• If there is a **CAD**, there must be an equal **KFA surplus**, and vice versa\n• The **exchange rate adjusts automatically** to maintain this equality`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-003', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "How does a deterioration in the current account deficit affect the exchange rate?",
    back: `• Deterioration in CAD (e.g. increased imports, increased income outflows) → **increased supply of A$** (importers sell A$ to buy foreign currency) → **depreciation of A$**\n• Depreciated A$ → foreign investors can buy more A$ for the same amount of foreign currency → **KFA surplus increases in A$ terms** to match the larger CAD`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-004', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "How does an improvement in the current account affect the exchange rate?",
    back: `• Improvement in CAD (e.g. export boom, reduced income outflows) → **reduced supply of A$ / increased demand for A$** → **appreciation of A$**\n• As A$ appreciates → a given level of KFA inflows in foreign currency translates into **fewer A$** → **KFA surplus decreases** in A$ terms to match the smaller CAD`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-005', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 3,
    front: "How do financial market perceptions affect the BOP–exchange rate relationship?",
    back: `• If markets believe the CAD is **UNSUSTAINABLE** → less willing to buy Australian assets → demand for A$ falls → **dollar depreciates further**\n• If markets **believe the CAD is sustainable** + have confidence in Australia → dollar may **APPRECIATE despite a large CAD**\n• Example: A$ appreciated to over **US95 cents** in mid-2008 despite a large CAD, because investors believed high commodity prices would eventually reduce it`,
    detail: `Market sentiment can override fundamental BOP analysis in the short run. In 2008, despite a large CAD, investor confidence in Australia's commodity-driven export outlook kept the A$ high above US95 cents. Conversely, in 2019-20, the A$ depreciated even as the current account moved into surplus — markets were reacting to global uncertainty from COVID-19 rather than the improving BOP data. This illustrates that financial market perceptions, not just the BOP data itself, drive short-term exchange rate movements.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-006', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 3,
    front: "What apparent paradox occurred between the current account and exchange rate in 2019-2020?",
    back: `• In 2019-2020: CA moved into **surplus** for the first time in almost half a century\n• Yet the exchange rate was **DEPRECIATING** — at one point dipping below **US60 cents**\n• Illustrates that the most significant influence on exchange rate movements is how **financial markets REACT** to developments, not the developments themselves\n• **Market sentiment** can change quickly and is **difficult to predict**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-007', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "List the negative effects of an APPRECIATION of the A$ on the Australian economy.",
    back: `• Exports **more expensive** in foreign currencies → lower export income → worsens CAD\n• Imports **cheaper** → more import spending → worsens CAD; import-substitutes fall\n• Reduced export revenue + higher import spending → **lower economic growth**\n• Foreign investment in Australia **more expensive** → lower financial inflows → worsens KFA\n• A$ value of **foreign income** from Australian overseas investments falls → worsens NPY`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-008', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "List the positive effects of an APPRECIATION of the A$ on the Australian economy.",
    back: `• **Greater purchasing power** for consumers — can buy more overseas goods with same A$\n• Decreases **interest servicing cost** on foreign debt (buy more foreign currency with A$) → reduces NPY outflow\n• Reduces A$ value of **foreign currency-denominated debt** (valuation effect) → lowers debt and servicing costs\n• **Inflationary pressures reduced** (imports cheaper) → reduces pressure on RBA to raise interest rates`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-009', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "List the negative effects of a DEPRECIATION of the A$ on the Australian economy.",
    back: `• **Reduced purchasing power** for consumers — can buy fewer overseas goods\n• Increases **interest servicing cost** on foreign debt (A$ buys less foreign currency) → increases NPY outflow → worsens CAD\n• **Raises A$ value** of foreign currency-denominated debt (valuation effect) → increases debt in A$ terms\n• **Inflationary pressures increase** (imports more expensive) → may pressure RBA to raise interest rates`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-010', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "List the positive effects of a DEPRECIATION of the A$ on the Australian economy.",
    back: `• Exports **cheaper in foreign currencies** → more competitive → higher export income → improves CAD\n• Imports **more expensive** → discourages import spending → potentially improves CAD; import-substitutes rise\n• Higher export revenue + lower import spending → **higher economic growth**\n• Investing in Australia **cheaper for foreigners** → greater financial inflows (unless currency expected to keep falling)\n• Increases A$ value of **foreign income** earned on overseas investments (valuation effect on assets) → improves NPY`,
    detail: `The post-mining-boom depreciation of the A$ from its 2011 peak of US$1.10 to the US70–75 cent range through the mid-2010s demonstrated these positive effects in practice. The weaker currency helped Australian tourism, international education, agriculture, and other trade-exposed sectors regain competitiveness after suffering during the high-dollar era. This adjustment illustrated how the floating exchange rate acts as an automatic stabiliser for the non-mining economy.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-011', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "What is the 'valuation effect' of exchange rate movements?",
    back: `• **Valuation effect** = appreciation or depreciation causes an immediate change in the A$ value of foreign debt or assets:\n• **Appreciation**: reduces A$ value of **foreign currency-denominated debt** (positive) AND reduces A$ value of **Australian overseas assets**\n• **Depreciation**: raises A$ value of foreign currency-denominated debt (negative) AND raises A$ value of Australian overseas assets`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-012', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 3,
    front: "Why do economists view speculation in the forex market negatively?",
    back: `• Economists favour an exchange rate that reflects **'true' forces** of supply and demand from real trade and investment flows\n• Speculators **DISTORT** the exchange rate and **INCREASE volatility** by exaggerating upward and downward cycles\n• Australia is especially vulnerable — a **'hot money' currency**: small economy relying on substantial financial inflows\n• Excessive speculation has become a **major global economic issue** during the era of globalisation`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-013', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 3,
    front: "What ten economic outcomes can be affected by movements in the exchange rate? (textbook summary point 10)",
    back: `• **1.** Level of **inflation**\n• **2.** International **competitiveness**\n• **3.** Level of **exports**\n• **4.** Level of **imports**\n• **5.** Foreign debt **servicing costs**\n• **6.** The **current account deficit**\n• **7.** Rate of **economic growth**\n• **8.** A$ value of **foreign assets** held by Australians (valuation)\n• **9.** A$ value of **foreign debt** (valuation)\n• **10.** **Purchasing power** of consumers`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-014', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 2,
    front: "Why is Australia described as a 'hot money' currency?",
    back: `• Australia is a **small economy** that relies on **substantial financial inflows** to deal with large external imbalances\n• This reliance makes the A$ **more vulnerable to speculators** than many other advanced economies\n• Investors move large sums quickly **in and out** of the currency in response to short-term factors\n• Excessive speculation **increases exchange rate volatility** → creates economic uncertainty`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch11-015', chapter: '5.5', topic: 'Exchange Rates & the Balance of Payments', difficulty: 3,
    front: "Explain why financial market sentiment is the most significant influence on exchange rate movements.",
    back: `• While fundamental factors (CAD, commodity prices, interest rates) influence the exchange rate, the **MOST significant influence** is how markets **CHOOSE TO REACT** to those developments\n• **2008 paradox**: despite large CAD, A$ appreciated to over US95 cents — markets were confident about Australia's economic prospects\n• **2019-20 paradox**: A$ depreciated despite CA moving into surplus\n• **Speculators**, influenced by short-term factors, add further volatility`,
    detail: `Financial market sentiment operates faster than the real economy. Markets price in expected future outcomes rather than current data — if investors believe commodity prices will rise, they buy A$ before export revenues actually improve. Conversely, global risk aversion (as in March 2020) can trigger A$ selling regardless of Australia's fundamentals. This dominance of sentiment over fundamentals creates exchange rate volatility that affects business investment decisions and can amplify economic cycles.`,
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
