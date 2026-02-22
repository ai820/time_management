import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch09-001', chapter: '2.9', topic: 'Borrowing & Investment', difficulty: 2,
    front: "What is Net Foreign Debt (NFD)?",
    back: "Net Foreign Debt = the total amount Australia OWES to overseas (foreign debt held by Australian residents and government) MINUS the foreign debt that overseas entities owe TO Australia.\n\nKey points:\n• NFD is Australia's largest component of Net Foreign Liabilities\n• Has grown significantly as a % of GDP over recent decades\n• Creates servicing costs (interest payments) → debits on Net Primary Income\n• Most common form of foreign capital inflow",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-002', chapter: '2.9', topic: 'Borrowing & Investment', difficulty: 2,
    front: "What is Net Foreign Liabilities (NFL)?",
    back: "Net Foreign Liabilities = the total overseas claims on Australia.\nNFL = Net Foreign Debt + Net Foreign Equity\n\nNFL represents the total amount that foreigners have invested in or lent to Australia, minus what Australia has invested in or lent to overseas. It measures the overall external liability position of the economy.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-003', chapter: '2.9', topic: 'Borrowing & Investment', difficulty: 2,
    front: "What is Net Foreign Equity (NFE)?",
    back: "Net Foreign Equity = overseas ownership of Australian assets (shares, companies, property) MINUS Australian ownership of overseas assets.\n\nNFE is part of Net Foreign Liabilities. Unlike foreign debt:\n• Does not require repayment\n• 'Servicing costs' only arise when profitable (dividends/profits)\n• But means foreigners own Australian productive assets\n• Reduces domestic control over the economy",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-004', chapter: '2.9', topic: 'Borrowing & Investment', difficulty: 2,
    front: "What is the Debt Servicing Ratio (DSR)?",
    back: "Debt Servicing Ratio = Net interest payments as a proportion of export earnings.\n\nDSR = (Net interest payments ÷ Export earnings) × 100\n\nIndicates what proportion of export revenue is needed just to pay interest on foreign debt. A high DSR is concerning as it means a large share of export income is consumed by servicing foreign debt rather than funding imports or investment.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-005', chapter: '2.9', topic: 'Borrowing & Investment', difficulty: 3,
    front: "Why has Net Foreign Debt and Net Foreign Liabilities grown significantly over recent decades?",
    back: "1. Deregulation of global financial markets (1980s) → fewer restrictions on capital movement\n2. Floating of AUD (1983) → enabled greater international financial integration\n3. Technological improvements → instantaneous global fund movements\n4. Australia's persistent Current Account Deficits require capital inflows → accumulate as foreign liabilities\n5. Low domestic savings relative to investment needs → sustained reliance on foreign capital",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-006', chapter: '2.9', topic: 'Borrowing & Investment', difficulty: 3,
    front: "What are the BENEFITS of using Foreign Investment (equity) instead of Foreign Debt to finance the CAD?",
    back: "Benefits of equity over debt:\n1. No mandatory repayment — principal never needs to be returned\n2. 'Servicing costs' are flexible — dividends/profits only paid when businesses are profitable; in downturns, payments automatically reduce\n3. Reduces 'debt trap' risk — debt must be serviced regardless of economic conditions\n4. Brings job creation and technology transfer (FDI)\n\nCosts:\n• Foreigners gain ownership and control of Australian assets\n• Income outflows (dividends) still worsen Net Primary Income",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-007', chapter: '2.9', topic: 'Borrowing & Investment', difficulty: 3,
    front: "What are the COSTS of relying on Foreign Investment (equity) to finance the CAD?",
    back: "Costs of equity financing:\n1. Loss of control — foreigners own Australian productive assets (mines, companies, property)\n2. Reduced domestic decision-making power over strategic industries\n3. May lead to unsustainable CADs: selling income-generating assets means more future income debits (dividends)\n4. Still creates Net Primary Income debits (profits, dividends flowing overseas)\n5. May cause problems if foreign owners withdraw investment rapidly (capital flight)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-008', chapter: '2.9', topic: 'Borrowing & Investment', difficulty: 3,
    front: "How does international borrowing affect the Balance of Payments?",
    back: "Effect on KFA: Borrowing from overseas = capital INFLOW → credit on Financial Account (Portfolio Investment) → contributes to KFA surplus.\n\nEffect on Current Account: Borrowed funds must be repaid with interest. Interest payments = servicing costs → recorded as debits on Net Primary Income → worsen the Net Primary Income deficit → worsen the CAD.\n\nOnly the INTEREST PAYMENTS appear on the Current Account (not repayment of principal). The principal repayment appears on the Financial Account.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-009', chapter: '2.9', topic: 'Borrowing & Investment', difficulty: 2,
    front: "What is the trend in Australia's Net Foreign Debt over recent decades?",
    back: "NFD has grown steadily over recent decades:\n• Both NFD and Net Foreign Equity (NFE) have increased significantly as a % of GDP\n• NFD is the largest component of Net Foreign Liabilities\n• Growth driven by: persistent CADs, deregulation of financial markets, technological improvements, low domestic savings\n• Student responses should use current ABS/RBA data (check abs.gov.au for latest figures)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-010', chapter: '2.9', topic: 'Borrowing & Investment', difficulty: 3,
    front: "Explain the valuation effect of AUD depreciation on Net Foreign Debt.",
    back: "When the AUD depreciates:\n1. Foreign debt is denominated in foreign currencies (USD, etc.)\n2. A weaker AUD means it costs MORE AUD to repay the same foreign currency debt\n3. The AUD value of outstanding foreign debt increases even if no new borrowing occurs\n4. This is the 'valuation effect' — depreciation effectively increases the real burden of NFD\n5. Also increases the AUD cost of interest payments → worsens Net Primary Income deficit",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch09-q001', chapter: '2.9', topic: 'Borrowing & Investment', type: 'mcq', difficulty: 2, marks: 1,
    question: "Net Foreign Liabilities (NFL) is composed of:",
    options: [
      { label: 'a', text: 'Only Net Foreign Debt' },
      { label: 'b', text: 'Net Foreign Debt plus Net Foreign Equity' },
      { label: 'c', text: 'Only direct investment into Australia' },
      { label: 'd', text: 'The Current Account Deficit plus the KFA surplus' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch09-q002', chapter: '2.9', topic: 'Borrowing & Investment', type: 'mcq', difficulty: 3, marks: 1,
    question: "Foreign equity is preferred over foreign debt to finance the CAD because:",
    options: [
      { label: 'a', text: 'Equity inflows never create any income debits on the current account' },
      { label: 'b', text: 'Equity requires mandatory annual payments that stabilise the BOP' },
      { label: 'c', text: 'Equity servicing costs fall automatically in economic downturns, reducing the debt trap risk' },
      { label: 'd', text: 'Equity gives Australia greater control over its productive assets' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch09-q003', chapter: '2.9', topic: 'Borrowing & Investment', type: 'short', difficulty: 3, marks: 5,
    question: "Discuss the costs and benefits of using foreign investment (equity) to finance the Current Account Deficit instead of foreign debt.",
    keyPoints: [
      "Benefit: No mandatory repayment of principal",
      "Benefit: Servicing costs (dividends) flexible — fall in downturns, reducing debt trap risk",
      "Benefit: FDI brings job creation and technology transfer",
      "Cost: Foreigners gain ownership/control over Australian assets",
      "Cost: May lead to sustained income debits as profits/dividends flow overseas",
      "Cost: Selling income-generating assets means more future income debits",
      "Both create Net Primary Income debits (interest vs dividends/profits)",
    ],
    modelAnswer: "Using foreign investment (equity) rather than foreign debt has both advantages and disadvantages for Australia's Balance of Payments.\n\nBenefits: Unlike debt, equity does not require mandatory repayment of the principal — Australia does not need to 'return' the investment. More importantly, the servicing costs of equity (dividends and profits) are flexible — they only need to be paid when businesses are profitable. During economic downturns, lower profits mean lower dividend payments, reducing the strain on the Net Primary Income account and lowering the risk of falling into a 'debt trap'. Foreign Direct Investment also brings the additional benefits of job creation and technology transfer.\n\nCosts: However, equity financing means foreigners gain ownership and control over Australian productive assets such as mines, companies and real estate, reducing domestic economic control. Additionally, when these foreign-owned assets are profitable, income flows out as dividends and profits, creating debits on the Net Primary Income account that worsen the Current Account Deficit. In the long run, selling a large proportion of income-generating assets to foreigners may lead to unsustainable increases in the Net Primary Income deficit.",
  },
];
