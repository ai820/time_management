import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch06-001', chapter: '2.6', topic: 'BOP Links & Trends', difficulty: 2,
    front: "How are the Current Account and Capital & Financial Account linked?",
    back: "Under a floating exchange rate, the BOP must always balance to zero:\nCA balance + KFA balance + Net Errors & Omissions = 0\n\nTherefore: CA DEFICIT = KFA SURPLUS\n\nIf Australia imports more than it exports, it must receive more capital inflows than outflows to pay for those imports. The deficit on one account is financed by the surplus on the other.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-002', chapter: '2.6', topic: 'BOP Links & Trends', difficulty: 2,
    front: "Write the supply and demand equation for the Australian Dollar as it relates to the BOP.",
    back: "Supply of A$ = Imports (M) + Income debits (Y debits) + Capital outflow (K out)\nDemand for A$ = Exports (X) + Income credits (Y credits) + Capital inflow (K in)\n\nUnder floating exchange rate equilibrium:\nM + Y debits + K out = X + Y credits + K in\n\nRearranging: M – X + Y debits – Y credits = K inflow – K outflow\n→ Current Account deficit = KFA surplus",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-003', chapter: '2.6', topic: 'BOP Links & Trends', difficulty: 2,
    front: "What are 'servicing costs' and how do they affect the BOP?",
    back: "Servicing costs are the interest payments (and other returns) owed on foreign debt and foreign equity.\n• Interest on foreign DEBT → recorded as debit on Net Primary Income (current account)\n• Dividends/profits on foreign EQUITY → also recorded as debit on Net Primary Income\nServicing costs worsen the Net Primary Income deficit → worsen the CAD → require even more capital inflows → increases future servicing costs.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-004', chapter: '2.6', topic: 'BOP Links & Trends', difficulty: 3,
    front: "Explain the 'debt trap' scenario.",
    back: "The debt trap is a 'vicious cycle':\n1. CAD → borrow from overseas (KFA credit, increases foreign debt)\n2. Foreign debt must be serviced → interest payments → debits on Net Primary Income\n3. These debits worsen the CAD → need more foreign borrowing\n4. More borrowing → more future servicing costs → larger future CAD\n5. This undermines investor confidence, may cause AUD to depreciate rapidly, making existing foreign debt more expensive (valuation effect)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-005', chapter: '2.6', topic: 'BOP Links & Trends', difficulty: 3,
    front: "Explain why a KFA surplus will eventually lead to a LARGER CAD in the future.",
    back: "A KFA surplus brings capital inflows (foreign investment and borrowing). These must earn returns for their owners:\n• Foreign debt → interest payments flow out (debit on Net Primary Income)\n• Foreign equity → dividends, profits flow out (debit on Net Primary Income)\nThese increasing income debits worsen the Net Primary Income balance → worsen the CAD → require even larger KFA surpluses in the future → more servicing costs. This is the self-reinforcing link between the two BOP accounts.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-006', chapter: '2.6', topic: 'BOP Links & Trends', difficulty: 2,
    front: "What is the 'cyclical' component of the Current Account and what factors affect it?",
    back: "The cyclical component is the BOGS (Balance on Goods and Services) — it fluctuates with economic activity:\n• Strong domestic growth → more imports (higher consumer and capital goods demand) → worse BOGS\n• Strong global growth → greater demand for Australia's exports (commodities) → better BOGS\n• Higher interest rates → slow economy → reduce imports → improve BOGS\n• Exchange rate appreciation → imports cheaper (more), exports dearer (fewer) → worse BOGS\n• Terms of Trade improvement → export prices rise relative to import prices → better BOGS",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-007', chapter: '2.6', topic: 'BOP Links & Trends', difficulty: 2,
    front: "What is the 'structural' component of the Current Account and what affects it?",
    back: "The structural component is Net Primary Income — it is relatively persistent and doesn't fluctuate with the economic cycle (though it changes slowly over time).\nAffected by:\n• Level of foreign investment in Australia (accumulated over years)\n• Global interest rates (affects cost of servicing foreign debt)\n• Profitability of foreign-owned Australian businesses (affects dividend payments)\n• Exchange rate (depreciation increases AUD cost of foreign debt payments)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-008', chapter: '2.6', topic: 'BOP Links & Trends', difficulty: 2,
    front: "How is the CAD typically measured and why is this method used?",
    back: "The CAD is measured as a PERCENTAGE OF GDP.\nReason: This allows:\n1. Comparison across time (the economy grows, so absolute $ values are less meaningful)\n2. Comparison between countries (different economy sizes)\n3. Assessment of sustainability — a CAD of 6%+ of GDP is generally considered unsustainable; 2–4% is manageable.\n\nAustralia's historical range: typically 2–6% of GDP.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-009', chapter: '2.6', topic: 'BOP Links & Trends', difficulty: 3,
    front: "Why is foreign equity preferred over foreign debt to finance the CAD?",
    back: "Foreign equity (FDI, shares) is preferred over foreign debt because:\n1. No compulsory repayments — equity doesn't need to be 'repaid' like debt\n2. 'Servicing costs' are flexible — dividends/profits only paid when business is profitable; in a downturn, these payments fall automatically\n3. Debt must be serviced regardless of economic performance → debt trap risk\n4. However, equity means foreigners gain ownership/control of Australian assets\n5. Both increase Net Primary Income debits, but equity is more flexible in downturns",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-010', chapter: '2.6', topic: 'BOP Links & Trends', difficulty: 3,
    front: "How do rising global interest rates affect the Current Account and KFA?",
    back: "Rising global interest rates:\n1. Increase servicing costs on Australia's foreign debt → larger Net Primary Income deficit → larger CAD\n2. Higher cost of borrowing overseas → less capital inflow on KFA (fewer loans)\n3. May attract more portfolio equity investment (foreign investors seek higher returns)\n4. May force Australia to prefer equity financing over debt financing\n5. May force contractionary domestic policy to reduce imports and improve BOGS\nOverall: Rising rates worsen the structural CAD but may reduce the KFA surplus as less foreign debt is attracted.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-011', chapter: '2.6', topic: 'BOP Links & Trends', difficulty: 2,
    front: "What are the savings-investment and trade imbalance perspectives on Australia's CAD?",
    back: "Two perspectives:\n1. Trade imbalance view (1980s–90s): CAD caused by lack of international competitiveness → led to microeconomic reforms (trade liberalisation, labour market reforms) to improve BOGS\n2. Savings-investment view (more recent): CAD caused by gap between low domestic savings and high investment demand → need to increase national savings or reduce investment to reduce CAD\nBoth perspectives have policy implications: the savings-investment gap makes the CAD a capital account issue, not just a trade issue.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch06-q001', chapter: '2.6', topic: 'BOP Links & Trends', type: 'mcq', difficulty: 2, marks: 1,
    question: "A surplus on the Capital and Financial Account will eventually lead to:",
    options: [
      { label: 'a', text: 'A reduction in the Current Account Deficit due to greater foreign investment' },
      { label: 'b', text: 'A larger Current Account Deficit due to increased servicing costs on foreign liabilities' },
      { label: 'c', text: 'No change in the Current Account as the accounts are independent' },
      { label: 'd', text: 'A Current Account surplus as capital inflows increase export capacity' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch06-q002', chapter: '2.6', topic: 'BOP Links & Trends', type: 'mcq', difficulty: 3, marks: 1,
    question: "The 'debt trap' occurs when:",
    options: [
      { label: 'a', text: 'A CAD leads to foreign borrowing, which creates servicing costs, which worsen the CAD, requiring more borrowing' },
      { label: 'b', text: 'A KFA surplus eliminates the need for further borrowing' },
      { label: 'c', text: 'High commodity prices create a temporary current account surplus' },
      { label: 'd', text: 'Australia imports too many consumer goods from China' },
    ],
    correctOption: 'a',
  },
  {
    id: 'ch06-q003', chapter: '2.6', topic: 'BOP Links & Trends', type: 'short', difficulty: 3, marks: 5,
    question: "Explain the relationship between the balance of the Capital and Financial Account and the Net Primary Income balance. Use the term 'servicing costs' in your response.",
    keyPoints: [
      "KFA surplus brings capital inflows (debt and equity) into Australia",
      "Foreign debt → must pay interest = 'servicing costs' → debits on Net Primary Income",
      "Foreign equity → must pay dividends/profits → also debits on Net Primary Income",
      "Higher KFA surplus → more foreign liabilities → more servicing costs → larger Net Primary Income deficit",
      "Larger Net Primary Income deficit → larger CAD → requires larger future KFA surplus",
      "This is a self-reinforcing relationship",
    ],
    modelAnswer: "There is a direct and self-reinforcing relationship between the Capital and Financial Account (KFA) surplus and the Net Primary Income balance. A surplus on the KFA means that capital inflows to Australia exceed capital outflows — Australia is borrowing from overseas or receiving foreign investment. These financial inflows must earn returns for their overseas owners. In the case of foreign debt, Australia must pay interest payments, often referred to as 'servicing costs', which are recorded as debits on the Net Primary Income section of the Current Account. For foreign equity investment, dividends and profits paid to overseas investors are also debits on Net Primary Income.\n\nAs the KFA surplus grows over time, the accumulated foreign liabilities increase, generating larger and larger servicing costs. These servicing costs worsen the Net Primary Income deficit, which in turn worsens the Current Account Deficit. A larger CAD then requires even greater capital inflows (a larger KFA surplus) to finance it, which increases future servicing costs further. This self-reinforcing cycle highlights the structural link between Australia's persistent reliance on foreign capital and its ongoing Net Primary Income deficit.",
  },
];
