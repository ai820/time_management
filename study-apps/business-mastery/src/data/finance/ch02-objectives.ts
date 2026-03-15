import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch02-001', chapter: '9.3', topic: 'Objectives of Financial Management', difficulty: 1,
    front: 'What are the five key objectives of financial management?',
    back: `• **Profitability**: maximising returns relative to costs\n• **Growth**: increasing the size and scale of the business over time\n• **Efficiency**: minimising costs and maximising resource productivity\n• **Liquidity**: ensuring sufficient cash to meet short-term obligations\n• **Solvency**: ability to pay all debts (short and long-term) as they fall due`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch02-002', chapter: '9.3', topic: 'Objectives of Financial Management', difficulty: 1,
    front: 'What is the objective of profitability in financial management?',
    back: `• **Profitability**: earning returns that exceed the cost of capital\n• Measured by: **gross profit ratio**, **net profit ratio**, **return on equity**\n• Essential for **rewarding shareholders**, funding growth and reinvestment\n• A business can be profitable but still fail if it lacks cash (liquidity)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch02-003', chapter: '9.3', topic: 'Objectives of Financial Management', difficulty: 1,
    front: 'What is the objective of growth in financial management?',
    back: `• **Growth**: increasing revenue, market share, asset base and business scale\n• Short-term growth strategies may **sacrifice profitability** (e.g. investing in new markets)\n• Financial management must **fund growth** through retained profits, debt or equity\n• Growth is a long-term objective; can conflict with short-term liquidity`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch02-004', chapter: '9.3', topic: 'Objectives of Financial Management', difficulty: 2,
    front: 'What is the objective of efficiency in financial management?',
    back: `• **Efficiency**: maximising output relative to inputs; minimising waste\n• Financial efficiency = generating maximum revenue per dollar of assets\n• Measured by: **accounts receivable turnover ratio**, **expense ratio**\n• Efficient businesses have lower costs → higher profit margins`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch02-005', chapter: '9.3', topic: 'Objectives of Financial Management', difficulty: 1,
    front: 'What is the objective of liquidity in financial management?',
    back: `• **Liquidity**: ability to convert assets to cash quickly to meet short-term obligations\n• A business can be profitable but still fail if it runs out of cash\n• Measured by: **current ratio** = Current Assets ÷ Current Liabilities\n• Adequate liquidity avoids defaulting on debts and maintaining supplier relationships`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch02-006', chapter: '9.3', topic: 'Objectives of Financial Management', difficulty: 1,
    front: 'What is the objective of solvency in financial management?',
    back: `• **Solvency**: the ability to pay ALL debts as they fall due (both short and long-term)\n• A solvent business has **total assets > total liabilities**\n• Measured by: **debt-to-equity ratio** — lower ratio = more solvent\n• Insolvency → administration or liquidation; **financial management must prevent this**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch02-007', chapter: '9.3', topic: 'Objectives of Financial Management', difficulty: 2,
    front: 'How can the objective of profitability conflict with liquidity?',
    back: `• Maximising profit often involves **extending credit to customers** → reduces cash on hand\n• Holding large inventory → ties up cash that could be used to pay debts\n• Investing profits in growth → reduces **cash reserves** for unexpected obligations\n• A firm can be **profitable but illiquid** → at risk of insolvency despite positive earnings`,
    detail: `The profitability–liquidity conflict is one of the most important tensions in financial management. A business that extends generous credit terms to boost sales may show high revenue and profit on the income statement, yet struggle to pay wages or suppliers if those receivables haven't been collected. Similarly, purchasing a large inventory to avoid stockouts ties up cash. Financial managers must balance the drive to maximise profit with maintaining sufficient cash buffers to meet short-term obligations.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch02-008', chapter: '9.3', topic: 'Objectives of Financial Management', difficulty: 2,
    front: 'How can the objective of growth conflict with profitability?',
    back: `• Growth often requires **heavy upfront investment** (new stores, markets, R&D) → reduces short-term profits\n• Entering new markets → increased costs, uncertain revenues → **lower margins** initially\n• Growing businesses often accept **lower prices** to build market share → lower profit ratios\n• Long-term growth may **justify** short-term profit sacrifices if strategy succeeds`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch02-009', chapter: '9.3', topic: 'Objectives of Financial Management', difficulty: 2,
    front: 'What is the difference between liquidity and solvency?',
    back: `• **Liquidity**: ability to pay **short-term** obligations (within 12 months) using current assets\n• **Solvency**: ability to pay **all** debts (short and long-term) — total assets exceed total liabilities\n• A business can be **solvent but illiquid** (owns property but no cash)\n• A business that is **insolvent** has liabilities exceeding assets — severe financial distress`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch02-010', chapter: '9.3', topic: 'Objectives of Financial Management', difficulty: 3,
    front: 'What is the difference between short-term and long-term financial objectives?',
    back: `• **Short-term** objectives (≤1 year): maintaining liquidity, meeting payroll, paying suppliers\n• **Long-term** objectives (>1 year): growth, capital investment, building market share, solvency\n• Short and long-term objectives can **conflict** — e.g. retaining cash for liquidity vs investing for growth\n• Financial managers must **balance both** within a coherent financial plan`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch02-011', chapter: '9.3', topic: 'Objectives of Financial Management', difficulty: 2,
    front: 'How does efficiency contribute to profitability?',
    back: `• Efficiency reduces **operating costs** (expense ratio) → wider profit margins\n• Faster accounts receivable collection improves **cash flow** and reduces bad debts\n• Efficient inventory management reduces **holding costs** and wastage\n• Overall: efficiency improvements allow a business to generate **more profit per dollar of assets**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch02-012', chapter: '9.3', topic: 'Objectives of Financial Management', difficulty: 3,
    front: 'Why might a business prioritise solvency over profitability in difficult economic conditions?',
    back: `• In a recession, **cash flow uncertainty** makes solvency risk the primary concern\n• Insolvency means **business failure** — unprofitability does not\n• Cutting costs and preserving cash to meet debt obligations takes priority\n• Even loss-making businesses can survive if they remain **solvent** — but not if insolvent`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch02-q001', chapter: '9.3', topic: 'Objectives of Financial Management', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Which of the following correctly identifies the five key objectives of financial management?',
    options: [
      { label: 'a', text: 'Revenue, profit, market share, customer service, sustainability' },
      { label: 'b', text: 'Profitability, growth, efficiency, liquidity, solvency' },
      { label: 'c', text: 'Budgeting, reporting, tax compliance, auditing, forecasting' },
      { label: 'd', text: 'Cost control, revenue growth, debt reduction, asset management, cash flow' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch02-q002', chapter: '9.3', topic: 'Objectives of Financial Management', type: 'mcq', difficulty: 1, marks: 1,
    question: 'A business that can meet all its short-term obligations as they fall due is said to have adequate:',
    options: [
      { label: 'a', text: 'Solvency' },
      { label: 'b', text: 'Profitability' },
      { label: 'c', text: 'Liquidity' },
      { label: 'd', text: 'Efficiency' },
    ],
    correctOption: 'c',
  },
  {
    id: 'biz-ch02-q003', chapter: '9.3', topic: 'Objectives of Financial Management', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Which of the following best describes a conflict between profitability and liquidity?',
    options: [
      { label: 'a', text: 'A business invests in new equipment which reduces profit but increases output' },
      { label: 'b', text: 'A business extends generous credit to customers, boosting sales but reducing available cash' },
      { label: 'c', text: 'A business cuts prices to grow market share, reducing gross profit margins' },
      { label: 'd', text: 'A business takes on more debt to fund expansion, increasing interest expenses' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch02-q004', chapter: '9.3', topic: 'Objectives of Financial Management', type: 'mcq', difficulty: 2, marks: 1,
    question: 'The difference between liquidity and solvency is that:',
    options: [
      { label: 'a', text: 'Liquidity refers to long-term debt repayment; solvency refers to short-term cash availability' },
      { label: 'b', text: 'Liquidity refers to the ability to meet short-term obligations; solvency refers to total assets exceeding total liabilities' },
      { label: 'c', text: 'Liquidity measures profitability; solvency measures growth' },
      { label: 'd', text: 'They are the same concept measured over different time periods' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch02-q005', chapter: '9.3', topic: 'Objectives of Financial Management', type: 'short', difficulty: 3, marks: 6,
    question: 'Explain TWO conflicts that can arise between the objectives of financial management. In each case, explain how a financial manager might resolve the conflict.',
    keyPoints: [
      'Conflict 1: Profitability vs Liquidity — maximising profit (e.g. extending credit, holding inventory) reduces cash → risk of insolvency',
      'Resolution 1: balance credit terms and cash collection; maintain minimum cash reserves as a buffer',
      'Conflict 2: Growth vs Profitability — investing in expansion increases costs and reduces short-term profits',
      'Resolution 2: use retained profits or debt to fund growth; project future returns to justify reduced current profits',
    ],
    modelAnswer: 'Two key conflicts arise between financial management objectives. First, profitability and liquidity can conflict: maximising profit often involves extending credit to customers or holding large inventories, both of which reduce cash on hand. A business can be profitable on paper but unable to pay wages or suppliers — risking insolvency. A financial manager can resolve this by maintaining minimum cash reserves, tightening collection times for accounts receivable, and carefully managing inventory levels. Second, growth and profitability can conflict: investing in expansion — opening new stores, entering new markets, increasing R&D — requires large upfront costs that reduce short-term profits. A financial manager can resolve this by using retained profits or debt specifically for growth initiatives, carefully projecting future returns to justify the short-term sacrifice, and ensuring the growth strategy does not compromise solvency.',
  },
  {
    id: 'biz-ch02-q006', chapter: '9.3', topic: 'Objectives of Financial Management', type: 'mcq', difficulty: 2, marks: 1,
    question: 'A business that has total assets greater than total liabilities is described as:',
    options: [
      { label: 'a', text: 'Profitable' },
      { label: 'b', text: 'Liquid' },
      { label: 'c', text: 'Efficient' },
      { label: 'd', text: 'Solvent' },
    ],
    correctOption: 'd',
  },
  {
    id: 'biz-ch02-q007', chapter: '9.3', topic: 'Objectives of Financial Management', type: 'short', difficulty: 2, marks: 4,
    question: 'Distinguish between the objectives of liquidity and solvency, and explain why both are important to a business.',
    keyPoints: [
      'Liquidity: ability to meet short-term obligations (≤12 months) using current assets; measured by current ratio',
      'Solvency: ability to pay all debts (short and long-term); requires total assets > total liabilities',
      'Liquidity is critical for day-to-day survival — running out of cash leads to immediate default',
      'Solvency is critical for long-term survival — a business with more liabilities than assets will eventually fail',
    ],
    modelAnswer: 'Liquidity refers to a business\'s ability to meet its short-term financial obligations as they fall due, typically within 12 months. It is measured by the current ratio (current assets ÷ current liabilities) and relates to cash flow management. Solvency refers to the broader ability to pay all debts — both short and long-term — and requires total assets to exceed total liabilities. Both are important: a business without sufficient liquidity may fail to pay wages or suppliers this week, causing immediate crisis, even if it is technically solvent. A business without solvency has liabilities exceeding assets and is on a path to failure regardless of its short-term cash position. Financial managers must maintain both: adequate liquidity to function day-to-day, and long-term solvency to sustain operations over time.',
  },
  {
    id: 'biz-ch02-q008', chapter: '9.3', topic: 'Objectives of Financial Management', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Which financial ratio is primarily used to measure the efficiency of a business\'s operations?',
    options: [
      { label: 'a', text: 'Current ratio' },
      { label: 'b', text: 'Debt-to-equity ratio' },
      { label: 'c', text: 'Accounts receivable turnover ratio' },
      { label: 'd', text: 'Gross profit ratio' },
    ],
    correctOption: 'c',
  },
];
