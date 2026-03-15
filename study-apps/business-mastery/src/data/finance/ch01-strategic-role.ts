import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch01-001', chapter: '9.2', topic: 'Strategic Role of Financial Management', difficulty: 1,
    front: 'What is the strategic role of financial management?',
    back: `• Financial management involves **planning and monitoring** a business's financial resources\n• Its strategic role: ensure the business has the **right funds at the right time** to achieve its goals\n• Underpins all other business functions — without finance, no operations, marketing or HR\n• Finance managers must **allocate, acquire and control** financial resources strategically`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch01-002', chapter: '9.2', topic: 'Strategic Role of Financial Management', difficulty: 1,
    front: 'What are the key functions of a financial manager?',
    back: `• **Planning**: determining short and long-term financial needs\n• **Acquiring**: sourcing funds through debt or equity\n• **Monitoring**: tracking financial performance via reports and ratios\n• **Controlling**: ensuring resources are used efficiently to meet objectives\n• **Decision-making**: advising on investments, expansion, cost management`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch01-003', chapter: '9.2', topic: 'Strategic Role of Financial Management', difficulty: 2,
    front: 'What is the difference between short-term and long-term financial needs?',
    back: `• **Short-term** (≤12 months): day-to-day operations — wages, stock, utilities, accounts payable\n• **Long-term** (>12 months): capital expenditure — plant, equipment, property, expansion\n• Short-term needs met by overdraft, trade credit, factoring\n• Long-term needs met by mortgages, debentures, share issues`,
    detail: `Short-term financial needs relate to working capital — the funds required to keep operations running on a daily basis. These include paying wages each fortnight, purchasing inventory, and settling accounts with suppliers. Short-term finance instruments (overdraft, trade credit) are appropriate here. Long-term financial needs relate to capital investment — buying land, buildings, machinery or technology that will generate returns over many years. Long-term instruments (mortgages, debentures, equity) are matched to these assets because the repayment period aligns with the life of the asset.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch01-004', chapter: '9.2', topic: 'Strategic Role of Financial Management', difficulty: 2,
    front: 'Why is financial management considered a "strategic" function rather than just administrative?',
    back: `• Finance links directly to **business strategy** — growth plans require capital; cost leadership requires efficiency\n• Financial decisions determine which **business goals are achievable**\n• Shapes competitive advantage: access to cheaper finance reduces costs vs rivals\n• Poor financial management can **threaten business survival**, not just profitability`,
    detail: `Financial management is strategic because financial decisions directly enable or constrain business strategy. A business wanting to expand requires capital — if that capital cannot be sourced on acceptable terms, expansion cannot occur. A business pursuing cost leadership must control its expense ratios and working capital to remain competitive. The financial manager's role is not merely to keep the books but to ensure financial resources are deployed in alignment with strategic objectives, to evaluate trade-offs between short and long-term financing, and to protect the business's long-term financial sustainability.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch01-005', chapter: '9.2', topic: 'Strategic Role of Financial Management', difficulty: 2,
    front: 'What are "financial needs" and how does a business determine them?',
    back: `• **Financial needs**: the amount and type of funds required to operate and grow\n• Determined by: size of business, growth stage, industry type, and business strategy\n• Include: working capital, capital expenditure, R&D investment, debt servicing\n• Financial manager matches **type of finance** to the nature and duration of each need`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch01-006', chapter: '9.2', topic: 'Strategic Role of Financial Management', difficulty: 1,
    front: 'What is working capital and why is it important?',
    back: `• **Working capital** = Current Assets − Current Liabilities\n• Represents the funds available for **day-to-day business operations**\n• Positive working capital: business can meet short-term obligations\n• Insufficient working capital → business may default on payments → insolvency risk`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch01-007', chapter: '9.2', topic: 'Strategic Role of Financial Management', difficulty: 3,
    front: 'How does financial management underpin the other key business functions?',
    back: `• **Marketing**: promotion budgets, market research funding — need financial approval\n• **Operations**: purchasing machinery, inventory, technology — all require capital allocation\n• **Human Resources**: wages, training, recruitment — all financial costs requiring planning\n• Without adequate finance, no other function can operate effectively`,
    detail: `Financial management is the enabling function for all others. The marketing department's campaigns need budget approval. The operations manager cannot purchase new equipment without capital. HR cannot hire without payroll funding. In this sense, finance underpins every business function: it determines what is feasible. Financial managers must coordinate with all departments to understand their funding needs, incorporate those needs into financial plans, and ensure adequate resources are allocated to each function in alignment with the overall business strategy.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch01-008', chapter: '9.2', topic: 'Strategic Role of Financial Management', difficulty: 2,
    front: 'What is the difference between capital expenditure and revenue expenditure?',
    back: `• **Capital expenditure (capex)**: spending on long-term assets (buildings, machinery, vehicles)\n• **Revenue expenditure**: day-to-day costs expensed immediately (wages, rent, utilities, stock)\n• Capex appears on the **balance sheet** as an asset\n• Revenue expenditure appears on the **income statement** in the period incurred`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch01-009', chapter: '9.2', topic: 'Strategic Role of Financial Management', difficulty: 1,
    front: 'What does it mean for a business to be "insolvent"?',
    back: `• **Insolvent**: unable to pay debts as they fall due\n• Results from insufficient cash flow or working capital\n• Can lead to **administration or liquidation** (winding up the business)\n• Financial management aims to **prevent insolvency** through careful cash flow planning`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch01-010', chapter: '9.2', topic: 'Strategic Role of Financial Management', difficulty: 2,
    front: 'What factors determine a business\'s financial needs?',
    back: `• **Size**: larger businesses have greater capital needs across all functions\n• **Stage of development**: start-ups need seed capital; established firms need expansion finance\n• **Industry**: capital-intensive industries (mining, manufacturing) need more long-term finance\n• **Business strategy**: growth strategy requires more capital than stability strategy\n• **Economic conditions**: recession may increase need for short-term liquidity`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch01-011', chapter: '9.2', topic: 'Strategic Role of Financial Management', difficulty: 3,
    front: 'How does financial management contribute to a business achieving a competitive advantage?',
    back: `• **Lower cost of capital** reduces expenses → price advantage over competitors\n• Strong cash flow enables **R&D investment** → product/process innovation\n• Good financial management supports **rapid response** to market opportunities (e.g. acquisitions)\n• Financially sound businesses attract better talent and supplier terms`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch01-q001', chapter: '9.2', topic: 'Strategic Role of Financial Management', type: 'mcq', difficulty: 1, marks: 1,
    question: 'The strategic role of financial management is best described as:',
    options: [
      { label: 'a', text: 'Preparing tax returns and complying with accounting standards' },
      { label: 'b', text: 'Planning, acquiring and monitoring financial resources to achieve business goals' },
      { label: 'c', text: 'Managing the day-to-day wages and salaries of employees' },
      { label: 'd', text: 'Setting prices for products and services' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch01-q002', chapter: '9.2', topic: 'Strategic Role of Financial Management', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Working capital is calculated as:',
    options: [
      { label: 'a', text: 'Total Assets − Total Liabilities' },
      { label: 'b', text: 'Current Assets − Current Liabilities' },
      { label: 'c', text: 'Non-current Assets + Owners\' Equity' },
      { label: 'd', text: 'Gross Profit − Operating Expenses' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch01-q003', chapter: '9.2', topic: 'Strategic Role of Financial Management', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Which of the following is a long-term financial need of a business?',
    options: [
      { label: 'a', text: 'Paying wages each fortnight' },
      { label: 'b', text: 'Purchasing inventory for resale' },
      { label: 'c', text: 'Buying new factory equipment to expand production' },
      { label: 'd', text: 'Settling a supplier invoice due next week' },
    ],
    correctOption: 'c',
  },
  {
    id: 'biz-ch01-q004', chapter: '9.2', topic: 'Strategic Role of Financial Management', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Capital expenditure differs from revenue expenditure because capital expenditure:',
    options: [
      { label: 'a', text: 'Is expensed immediately in the income statement' },
      { label: 'b', text: 'Is a long-term investment recorded as an asset on the balance sheet' },
      { label: 'c', text: 'Includes all wages and salaries paid during the year' },
      { label: 'd', text: 'Is only relevant to manufacturing businesses' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch01-q005', chapter: '9.2', topic: 'Strategic Role of Financial Management', type: 'short', difficulty: 2, marks: 4,
    question: 'Explain why financial management is considered a "strategic" function in a business.',
    keyPoints: [
      'Financial decisions determine which business strategies are achievable — expansion requires capital',
      'Finance underpins all other functions: marketing, operations and HR all depend on financial resources',
      'Access to cheaper finance can reduce costs and create competitive advantage',
      'Poor financial management can threaten business survival, not just reduce profits',
    ],
    modelAnswer: 'Financial management is considered strategic because financial decisions directly enable or constrain a business\'s strategic goals. For example, a business pursuing a growth strategy requires capital — if that capital cannot be sourced on acceptable terms, the strategy cannot be executed. Financial management also underpins every other business function: marketing campaigns require budget approval, operations cannot purchase equipment without capital allocation, and HR cannot hire staff without payroll funding. Additionally, access to lower-cost finance creates competitive advantage by reducing expenses. Because financial decisions shape what a business can and cannot do, financial management is inherently strategic rather than merely administrative.',
  },
  {
    id: 'biz-ch01-q006', chapter: '9.2', topic: 'Strategic Role of Financial Management', type: 'short', difficulty: 2, marks: 4,
    question: 'Distinguish between short-term and long-term financial needs, giving one example of each.',
    keyPoints: [
      'Short-term needs (≤12 months): working capital for day-to-day operations — wages, stock, utilities',
      'Long-term needs (>12 months): capital expenditure on assets — machinery, property, technology',
      'Short-term needs typically funded by overdraft, trade credit, or factoring',
      'Long-term needs funded by mortgages, debentures, or equity to match asset lifespan',
    ],
    modelAnswer: 'Short-term financial needs are those required within the next 12 months to maintain day-to-day operations. An example is paying employee wages each fortnight — a recurring cost that must be met from current cash flow. Long-term financial needs relate to capital expenditure on assets that generate returns over many years. An example is purchasing new manufacturing equipment — the cost is large and the asset will be used for 10 or more years. The principle is that short-term needs should be funded with short-term finance (e.g. bank overdraft), while long-term needs should be funded with long-term finance (e.g. a mortgage) so that repayments align with the productive life of the asset.',
  },
  {
    id: 'biz-ch01-q007', chapter: '9.2', topic: 'Strategic Role of Financial Management', type: 'mcq', difficulty: 1, marks: 1,
    question: 'A business that cannot pay its debts as they fall due is described as:',
    options: [
      { label: 'a', text: 'Illiquid' },
      { label: 'b', text: 'Unprofitable' },
      { label: 'c', text: 'Insolvent' },
      { label: 'd', text: 'Over-geared' },
    ],
    correctOption: 'c',
  },
  {
    id: 'biz-ch01-q008', chapter: '9.2', topic: 'Strategic Role of Financial Management', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Which of the following factors would most increase a business\'s long-term financial needs?',
    options: [
      { label: 'a', text: 'A decision to reduce the workforce' },
      { label: 'b', text: 'A decision to expand into new international markets' },
      { label: 'c', text: 'An improvement in accounts receivable collection times' },
      { label: 'd', text: 'A reduction in inventory holding levels' },
    ],
    correctOption: 'b',
  },
];
