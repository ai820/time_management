import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch10-001', chapter: '2.10', topic: 'Consequences of High CAD', difficulty: 2,
    front: "What are the 5 main consequences of a sustained high Current Account Deficit?",
    back: "1. Growth of Net Foreign Liabilities (foreign debt + equity)\n2. Increased servicing costs (interest, dividends flowing overseas)\n3. Volatile/depreciating exchange rate\n4. Constrained economic growth (contractionary policy reduces imports but also slows growth)\n5. Loss of international investor confidence (concerns about external instability)\n\nA CAD of 6%+ of GDP is generally considered unsustainable.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-002', chapter: '2.10', topic: 'Consequences of High CAD', difficulty: 2,
    front: "How does a sustained high CAD lead to growth in Net Foreign Liabilities?",
    back: "1. High CAD requires financing via KFA surplus\n2. KFA surplus means capital inflows — either borrowing (debt) or selling assets to foreigners (equity)\n3. Accumulated borrowings increase Net Foreign Debt (NFD)\n4. Accumulated asset sales to foreigners increase Net Foreign Equity (NFE)\n5. Both increase Net Foreign Liabilities (NFL = NFD + NFE)\n6. Growing NFL means increasing future servicing costs → worsens future CAD",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-003', chapter: '2.10', topic: 'Consequences of High CAD', difficulty: 2,
    front: "How does a sustained high CAD lead to increased servicing costs?",
    back: "1. High CAD → more borrowing from overseas → larger Net Foreign Debt\n2. Larger NFD → more interest payments → recorded as debits on Net Primary Income\n3. More foreign equity → more dividends/profits flowing overseas → also debits on Net Primary Income\n4. These servicing costs worsen the Net Primary Income deficit\n5. They in turn increase the CAD → more borrowing needed → even more servicing costs\n= The debt trap / vicious cycle",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-004', chapter: '2.10', topic: 'Consequences of High CAD', difficulty: 3,
    front: "How does a sustained high CAD create exchange rate volatility and potential depreciation?",
    back: "High CAD → persistent supply of AUD > demand for AUD (more flows out than in for trade and income):\n1. Import payments increase supply of AUD (sold for foreign currency)\n2. Income payments (interest, dividends) increase supply of AUD\n3. Reduced confidence in the economy → capital flight → foreign investors sell AUD assets → more AUD supply\n4. AUD depreciates → makes existing foreign debt MORE expensive in AUD terms (valuation effect)\n5. Worsening debt → further loss of confidence → further depreciation risk",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-005', chapter: '2.10', topic: 'Consequences of High CAD', difficulty: 3,
    front: "How does a sustained high CAD constrain economic growth?",
    back: "Government/RBA must use CONTRACTIONARY policy to reduce import demand:\n• Raise interest rates → reduces consumer spending and business investment → less imports\n• Reduce government spending (fiscal austerity) → reduces domestic demand → less imports\nBut these policies also slow economic growth, increasing unemployment.\n\nAlso: High foreign debt creates servicing costs that 'drain' income from the economy.\nResult: Policymakers face a dilemma — reduce CAD OR support growth, not always both at once.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-006', chapter: '2.10', topic: 'Consequences of High CAD', difficulty: 3,
    front: "How does a high CAD affect investor confidence?",
    back: "If the CAD is high and persistent (especially >6% of GDP):\n1. International investors may question Australia's ability to service its debts\n2. Credit rating agencies may downgrade Australia's debt rating → higher interest costs on future borrowing\n3. Foreign investors may withdraw investments → capital flight → exchange rate falls\n4. Reduced investment in Australia → slower economic growth, higher unemployment\n5. Loss of confidence can create a self-fulfilling crisis (seen in Asian Financial Crisis 1997)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-007', chapter: '2.10', topic: 'Consequences of High CAD', difficulty: 2,
    front: "What CAD level is considered 'unsustainable' and what were Australia's historic CAD figures?",
    back: "Unsustainable: generally >6% of GDP\nSustainable: 2–4% of GDP\n\nAustralia's history:\n• Averaged 1.1% in 1970s\n• 4.0% in 1980s; 4.1% in 1990s; 4.9% in 2000s\n• Peaked at 6.6% of GDP in 2007–08\n• Improved to 2.5% avg in 2010s\n• 2019–20: First SURPLUS since 1973 (+$35.8bn, ~+1.8% of GDP)\n→ Driven by: strong commodity prices, low global interest rates, COVID-reduced imports",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-008', chapter: '2.10', topic: 'Consequences of High CAD', difficulty: 3,
    front: "What factors allowed Australia to achieve a Current Account Surplus in 2019–20?",
    back: "Australia's first CA surplus since 1973 (+$35.8bn) was achieved due to:\n1. Strong commodity prices (particularly iron ore) → large BOGS surplus ($77.4bn)\n2. Low global interest rates → reduced servicing costs on foreign debt → smaller Net Primary Income deficit\n3. COVID-19 reduced imports (travel, services) → improved BOGS\n4. Strong Asian demand for resources maintained export revenue\nNote: These were largely cyclical factors; structural CAD was expected to return.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-009', chapter: '2.10', topic: 'Consequences of High CAD', difficulty: 3,
    front: "How does a depreciating AUD resulting from a high CAD create a 'double negative'?",
    back: "1. High CAD → AUD depreciates\n2. Depreciation → valuation effect: foreign debt (denominated in USD etc.) is worth MORE in AUD\n3. Higher AUD value of debt → more interest payments in AUD → bigger Net Primary Income deficit\n4. Bigger Net Primary Income deficit → larger CAD → puts more downward pressure on AUD\n5. Also: AUD depreciation makes imports more expensive → inflation rises → may require higher interest rates\n= Double negative: depreciation worsens both the debt burden AND inflation",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch10-010', chapter: '2.10', topic: 'Consequences of High CAD', difficulty: 2,
    front: "Why is external stability an important macroeconomic goal?",
    back: "External stability = the ability to finance obligations to the rest of the world without major disruptions.\nImportant because:\n• A high CAD and large NFD can undermine investor confidence → capital flight\n• Excessive debt → debt trap → constrains government policy options\n• Volatile exchange rate → uncertainty for businesses → reduced investment and trade\n• Australia is particularly vulnerable as a small, open economy reliant on commodity exports\nGovernments monitor BOP carefully as a key indicator of macroeconomic health.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch10-q001', chapter: '2.10', topic: 'Consequences of High CAD', type: 'mcq', difficulty: 2, marks: 1,
    question: "A sustained Current Account Deficit of 6% or more of GDP is considered:",
    options: [
      { label: 'a', text: 'Beneficial as it attracts large amounts of foreign investment' },
      { label: 'b', text: 'Sustainable as long as interest rates remain low' },
      { label: 'c', text: 'Generally unsustainable and a concern for economic policymakers' },
      { label: 'd', text: 'Not a concern as it is automatically corrected by the floating exchange rate' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch10-q002', chapter: '2.10', topic: 'Consequences of High CAD', type: 'mcq', difficulty: 3, marks: 1,
    question: "A depreciation of the AUD can worsen the Current Account Deficit through the 'valuation effect' because:",
    options: [
      { label: 'a', text: 'A lower AUD makes Australian exports less competitive overseas' },
      { label: 'b', text: 'A lower AUD increases the AUD value of foreign debt, raising interest servicing costs' },
      { label: 'c', text: 'A lower AUD automatically reduces the trade deficit' },
      { label: 'd', text: 'A lower AUD increases foreign direct investment inflows' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch10-q003', chapter: '2.10', topic: 'Consequences of High CAD', type: 'short', difficulty: 4, marks: 6,
    question: "Describe the consequences of a high, sustained Current Account Deficit on the Australian economy.",
    keyPoints: [
      "Growth of Net Foreign Liabilities (NFD + NFE increases)",
      "Increased servicing costs → larger Net Primary Income deficit → reinforces CAD (debt trap)",
      "Exchange rate: AUD depreciation risk → valuation effect on foreign debt",
      "Constrained economic growth: need contractionary policy to reduce imports → slower growth, higher unemployment",
      "Loss of investor confidence: credit rating risks, capital flight, higher borrowing costs",
      "Link between consequences (self-reinforcing nature of the CAD)",
    ],
    modelAnswer: "A sustained high Current Account Deficit (CAD) has several significant consequences for the Australian economy.\n\nFirstly, it leads to the growth of Net Foreign Liabilities (NFL). A CAD must be financed by a Capital and Financial Account surplus — meaning Australia must either borrow from overseas (increasing Net Foreign Debt) or sell assets to foreign investors (increasing Net Foreign Equity). Over time, this accumulation of NFL grows.\n\nSecondly, increased servicing costs arise. Higher NFD means larger interest payments overseas; greater foreign equity means more dividends and profits flowing out. These are recorded as debits on Net Primary Income, worsening the CAD further. In extreme cases, this creates a 'debt trap' where Australia borrows simply to service existing debt.\n\nThirdly, a high CAD can cause exchange rate volatility and depreciation. Persistent outflows of AUD (for imports and income payments) increase AUD supply, potentially depreciating the currency. This depreciation then makes foreign debt more expensive in AUD terms through the 'valuation effect', further worsening the debt position.\n\nFourthly, the government may need to use contractionary macroeconomic policies (higher interest rates, reduced spending) to reduce import demand and narrow the CAD. This slows economic growth and may increase unemployment.\n\nFinally, a high sustained CAD can undermine international investor confidence. Investors may question Australia's ability to service its external obligations, potentially leading to capital flight, credit rating downgrades, and higher borrowing costs, further constraining economic performance.",
  },
];
