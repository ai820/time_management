import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch05-001', chapter: '2.5', topic: 'Capital & Financial Account', difficulty: 1,
    front: "What is the Capital and Financial Account (KFA)?",
    back: "The KFA records all REVERSIBLE financial transactions between Australia and the rest of the world involving financial assets and liabilities. 'Reversible' means transactions can be undone (e.g. borrowings can be repaid, shares can be sold). It has two sub-accounts:\n1. Capital Account\n2. Financial Account",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-002', chapter: '2.5', topic: 'Capital & Financial Account', difficulty: 2,
    front: "What is the Capital Account (within the KFA)?",
    back: "The Capital Account records:\n1. Conditional capital transfers (e.g. foreign aid grants linked to specific infrastructure projects like building a bridge)\n2. Purchase and sale of non-produced, non-financial assets — mainly intellectual property: patents, copyrights, trademarks, franchises (e.g. Australian company buying Subway franchise rights from USA)\nIn 2019–20: Capital Account = –$1.1bn (small deficit).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-003', chapter: '2.5', topic: 'Capital & Financial Account', difficulty: 2,
    front: "What are the five components of the Financial Account?",
    back: "1. Direct Investment (≥10% share purchase or new business establishment)\n2. Portfolio Investment (<10% shares, bonds, loans — most foreign debt here)\n3. Financial Derivatives (complex financial instruments: options, futures)\n4. Reserve Assets (RBA's foreign currency, gold, SDRs, IMF positions)\n5. Other Investment (trade credits, loans not classified above, deposits)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-004', chapter: '2.5', topic: 'Capital & Financial Account', difficulty: 2,
    front: "Distinguish between FDI and Foreign Debt.",
    back: "FDI (Foreign Direct Investment):\n• Purchase of assets or ≥10% shares with management/control intent\n• Long-term in nature\n• Investor has control over the asset\n\nForeign Debt:\n• Borrowing of funds from overseas investors\n• Form of portfolio investment\n• Short-term in nature\n• Must be repaid with interest (servicing costs)\n• No control over asset management",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-005', chapter: '2.5', topic: 'Capital & Financial Account', difficulty: 2,
    front: "Distinguish between 'equity' and 'debt' as forms of foreign investment.",
    back: "Equity: Investment into a company/asset to gain ownership and derive income (e.g. shares, company purchase). The investor shares in profits AND losses. Does not require repayment.\n\nDebt: Borrowing of funds to be repaid over a set period with interest. Must be repaid regardless of economic performance. Creates servicing costs (interest payments).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-006', chapter: '2.5', topic: 'Capital & Financial Account', difficulty: 2,
    front: "What is a credit and debit on the KFA?",
    back: "Credit (+) on KFA: An INFLOW of funds to Australia\n• Foreign investment INTO Australia (e.g. IBM building a factory in Melbourne = Direct Investment credit)\n• Australia BORROWING from overseas (e.g. Australian company borrows from Japanese bank = Portfolio Investment credit)\n\nDebit (–) on KFA: An OUTFLOW of funds from Australia\n• Australians investing OVERSEAS (e.g. Australians buying shares in a German company = Portfolio Investment debit)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-007', chapter: '2.5', topic: 'Capital & Financial Account', difficulty: 2,
    front: "What are Reserve Assets?",
    back: "Reserve assets are foreign financial assets held by the Reserve Bank of Australia (RBA) — the central bank. They include:\n• Monetary gold\n• Special Drawing Rights (SDRs from the IMF)\n• Reserve positions in the IMF\n• Foreign exchange held by the RBA\nUsed to finance or regulate payment imbalances (e.g. stabilise the exchange rate). 2019–20: +$18.5bn surplus.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-008', chapter: '2.5', topic: 'Capital & Financial Account', difficulty: 2,
    front: "What is the purpose of 'Net Errors and Omissions'?",
    back: "Net Errors and Omissions is a balancing item to account for statistical discrepancies in the BOP calculations. Under a floating exchange rate, the BOP should always balance to zero — the CA deficit must equal the KFA surplus. Any discrepancy is placed in Net Errors and Omissions to ensure the accounts balance. In 2019–20: –$0.1bn.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-009', chapter: '2.5', topic: 'Capital & Financial Account', difficulty: 2,
    front: "Write the equation for the KFA balance.",
    back: "Balance on KFA = Capital Account + Financial Account + Net Errors & Omissions\n\nFinancial Account = Direct Investment + Portfolio Investment + Financial Derivatives + Reserve Assets + Other Investment\n\nThe KFA balance ≈ Current Account balance (opposite sign) under floating exchange rates:\nCA deficit = KFA surplus",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-010', chapter: '2.5', topic: 'Capital & Financial Account', difficulty: 3,
    front: "Why does Australia consistently have a KFA surplus?",
    back: "Australia consistently has a KFA surplus because it must finance its Current Account Deficit:\n• CA deficit requires capital inflows\n• Foreign capital flows into Australia to fund investment\n• Low domestic savings → not enough domestic funds for investment → need foreign capital\n• CA deficit = KFA surplus (under floating exchange rate, they must offset)\nKFA surplus means foreign liabilities grow → increases future Net Primary Income debits",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-011', chapter: '2.5', topic: 'Capital & Financial Account', difficulty: 3,
    front: "Classify each transaction on the KFA:\n(a) IBM builds a factory in Melbourne\n(b) Australian company borrows $20m from a Japanese bank\n(c) Australians buy 9% of a German car company\n(d) RBA sells gold reserves to a foreign central bank",
    back: "(a) Direct Investment — CREDIT (foreign investment into Australia)\n(b) Portfolio Investment — CREDIT (capital inflow; borrowing from overseas)\n(c) Portfolio Investment — DEBIT (capital outflow; Australian investment overseas; <10% so portfolio not FDI)\n(d) Reserve Assets — CREDIT (sale of gold = reduction in reserve asset held by RBA = inflow)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch05-q001', chapter: '2.5', topic: 'Capital & Financial Account', type: 'mcq', difficulty: 2, marks: 1,
    question: "An Australian music group sells the rights to their music to a British company for distribution in the UK. This is recorded on the:",
    options: [
      { label: 'a', text: 'Current Account — Net Services (debit)' },
      { label: 'b', text: 'Capital Account — credit' },
      { label: 'c', text: 'Financial Account — Direct Investment (credit)' },
      { label: 'd', text: 'Current Account — Net Secondary Income (credit)' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch05-q002', chapter: '2.5', topic: 'Capital & Financial Account', type: 'mcq', difficulty: 2, marks: 1,
    question: "Portfolio investment differs from direct investment because portfolio investment:",
    options: [
      { label: 'a', text: 'Involves the purchase of more than 10% of shares' },
      { label: 'b', text: 'Is longer-term and involves management control' },
      { label: 'c', text: 'Is generally shorter-term and does not involve management control' },
      { label: 'd', text: 'Always involves physical assets like factories' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch05-q003', chapter: '2.5', topic: 'Capital & Financial Account', type: 'short', difficulty: 3, marks: 4,
    question: "Explain why a country may consistently achieve a surplus on its Capital and Financial Account.",
    keyPoints: [
      "KFA surplus = capital inflows > capital outflows",
      "Arises to finance a Current Account Deficit (CA deficit = KFA surplus)",
      "Australia: small population, low savings → insufficient domestic funds for investment",
      "Requires foreign capital inflows to fund investment needs",
      "Under floating exchange rates, CA deficit and KFA surplus must offset each other",
    ],
    modelAnswer: "A country consistently achieves a surplus on its Capital and Financial Account when capital inflows exceed capital outflows. This typically occurs because the country has a Current Account Deficit (CAD) which must be financed. Under a floating exchange rate system, the CA deficit must equal the KFA surplus. For Australia, the persistent KFA surplus arises because of historically low domestic savings relative to high investment demand. Australia's small population means there is insufficient domestic saving to fund infrastructure and business investment, requiring the economy to attract foreign capital through borrowing and asset sales to overseas investors.",
  },
];
