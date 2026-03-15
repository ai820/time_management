import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch12-001', chapter: '11.6', topic: 'Financial Ratios', difficulty: 1,
    front: 'What are the seven key financial ratios in HSC Business Studies?',
    back: `• **Current ratio** (liquidity)\n• **Debt-to-equity ratio** (gearing/solvency)\n• **Gross profit ratio** (profitability)\n• **Net profit ratio** (profitability)\n• **Return on equity** (profitability)\n• **Expense ratio** (efficiency)\n• **Accounts receivable turnover ratio** (efficiency)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch12-002', chapter: '11.6', topic: 'Financial Ratios', difficulty: 1,
    front: 'What is the current ratio formula and what does it measure?',
    back: `• **Formula**: Current Assets ÷ Current Liabilities\n• **Measures**: ability to pay short-term obligations (liquidity)\n• **Benchmark**: generally 2:1 or 2.0 considered healthy\n• **<1**: liabilities exceed assets → liquidity problem; **>2**: possibly holding too much cash (inefficient)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch12-003', chapter: '11.6', topic: 'Financial Ratios', difficulty: 1,
    front: 'What is the debt-to-equity ratio formula and what does it measure?',
    back: `• **Formula**: Total Liabilities ÷ Owners' Equity\n• **Measures**: gearing — the proportion of debt vs equity in the capital structure\n• **High ratio** (>1): more debt than equity → higher financial risk\n• **Low ratio** (<1): mostly equity funded → lower risk, more financial flexibility`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch12-004', chapter: '11.6', topic: 'Financial Ratios', difficulty: 1,
    front: 'What is the gross profit ratio formula and what does it measure?',
    back: `• **Formula**: Gross Profit ÷ Net Sales × 100 (expressed as %)\n• **Measures**: profitability of core trading activity before overheads\n• **Gross Profit** = Net Sales − Cost of Goods Sold (COGS)\n• Higher % = greater margin from selling goods → better pricing or lower production costs`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch12-005', chapter: '11.6', topic: 'Financial Ratios', difficulty: 1,
    front: 'What is the net profit ratio formula and what does it measure?',
    back: `• **Formula**: Net Profit (before tax) ÷ Net Sales × 100 (expressed as %)\n• **Measures**: overall profitability after deducting ALL operating expenses\n• Accounts for operating costs (wages, rent, depreciation) that the gross profit ratio ignores\n• Falling net profit ratio despite stable gross profit → **operating expenses rising**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch12-006', chapter: '11.6', topic: 'Financial Ratios', difficulty: 2,
    front: 'What is the return on equity (ROE) formula and what does it measure?',
    back: `• **Formula**: Net Profit (after tax) ÷ Owners' Equity × 100 (expressed as %)\n• **Measures**: return generated for shareholders on their investment\n• Should exceed: bank deposit rate + risk premium (compensate for business risk)\n• Falling ROE may indicate: falling profits, or equity base growing faster than profits`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch12-007', chapter: '11.6', topic: 'Financial Ratios', difficulty: 2,
    front: 'What is the expense ratio formula and what does it measure?',
    back: `• **Formula**: Total Expenses ÷ Net Sales × 100 (expressed as %)\n• **Measures**: what percentage of revenue is consumed by expenses — efficiency indicator\n• **Lower %** = more efficient; **Higher %** = costs eating more of revenue\n• A rising expense ratio is a **warning sign** that costs are growing faster than revenue`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch12-008', chapter: '11.6', topic: 'Financial Ratios', difficulty: 2,
    front: 'What is the accounts receivable turnover ratio formula and what does it measure?',
    back: `• **Formula**: Net Sales ÷ Accounts Receivable\n• **Measures**: how many times receivables are "turned over" (collected) per year\n• **Higher ratio** = receivables collected quickly → better cash flow\n• **Lower ratio** = slow collection → cash tied up; risk of bad debts`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch12-009', chapter: '11.6', topic: 'Financial Ratios', difficulty: 2,
    front: 'How are financial ratios used and interpreted?',
    back: `• Calculate ratio → compare to: **previous periods** (trend), **industry benchmarks**, or **competitors**\n• A single ratio in isolation tells you little — context is essential\n• Process: **state formula → calculate → interpret in context** of business and industry\n• Trends over time more meaningful than a single year's result`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch12-010', chapter: '11.6', topic: 'Financial Ratios', difficulty: 3,
    front: 'If a business\'s gross profit ratio is 40% but net profit ratio is 5%, what does this suggest?',
    back: `• Large gap between gross and net profit → **very high operating expenses**\n• COGS is well-controlled (40% gross margin) but **overhead costs** are consuming most of the gross profit\n• Investigate: are wages, rent, or other overheads disproportionately large?\n• Action: review operating cost structure → find efficiency savings`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch12-011', chapter: '11.6', topic: 'Financial Ratios', difficulty: 3,
    front: 'How does the debt-to-equity ratio link to the risk profile of a business?',
    back: `• **High D/E ratio** (e.g. 3:1): business is heavily debt-financed → large interest burden\n• In a downturn, revenue falls but interest obligations remain → insolvency risk rises\n• **Low D/E ratio** (e.g. 0.3:1): mostly equity → more resilient in downturns but may be under-leveraging\n• Lenders and investors use D/E to assess **creditworthiness** and **investment risk**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch12-012', chapter: '11.6', topic: 'Financial Ratios', difficulty: 1,
    front: 'Provide the complete financial ratio summary (formula and what it measures).',
    back: `• **Current ratio**: CA ÷ CL → liquidity\n• **Debt-to-equity**: Total Liabilities ÷ OE → gearing/solvency\n• **Gross profit ratio**: GP ÷ Sales × 100 → trading profitability\n• **Net profit ratio**: NP ÷ Sales × 100 → overall profitability\n• **Return on equity**: NP(AT) ÷ OE × 100 → shareholder return\n• **Expense ratio**: Total Expenses ÷ Sales × 100 → efficiency\n• **AR turnover**: Sales ÷ AR → receivables efficiency`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch12-q001', chapter: '11.6', topic: 'Financial Ratios', type: 'mcq', difficulty: 1, marks: 1,
    question: 'The current ratio is calculated as:',
    options: [
      { label: 'a', text: 'Net Profit ÷ Net Sales × 100' },
      { label: 'b', text: 'Current Assets ÷ Current Liabilities' },
      { label: 'c', text: 'Total Liabilities ÷ Owners\' Equity' },
      { label: 'd', text: 'Gross Profit ÷ Net Sales × 100' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch12-q002', chapter: '11.6', topic: 'Financial Ratios', type: 'mcq', difficulty: 1, marks: 1,
    question: 'A business has a current ratio of 0.8. This indicates:',
    options: [
      { label: 'a', text: 'The business is highly profitable' },
      { label: 'b', text: 'The business cannot meet all its short-term liabilities with its current assets — a liquidity concern' },
      { label: 'c', text: 'The business has too much cash and is operating inefficiently' },
      { label: 'd', text: 'The business has a healthy debt-to-equity ratio' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch12-q003', chapter: '11.6', topic: 'Financial Ratios', type: 'mcq', difficulty: 2, marks: 1,
    question: 'A business has net sales of $500,000, cost of goods sold of $300,000, and total operating expenses of $150,000. The net profit ratio is:',
    options: [
      { label: 'a', text: '40%' },
      { label: 'b', text: '30%' },
      { label: 'c', text: '10%' },
      { label: 'd', text: '60%' },
    ],
    correctOption: 'c',
  },
  {
    id: 'biz-ch12-q004', chapter: '11.6', topic: 'Financial Ratios', type: 'short', difficulty: 3, marks: 8,
    question: 'A business reports the following data: Net Sales $800,000 | COGS $480,000 | Operating Expenses $240,000 | Net Profit after tax $48,000 | Total Assets $600,000 | Total Liabilities $360,000 | Accounts Receivable $80,000. Calculate the gross profit ratio, net profit ratio, debt-to-equity ratio, and accounts receivable turnover ratio. Interpret each.',
    keyPoints: [
      'Gross profit ratio: ($800,000 − $480,000) ÷ $800,000 × 100 = $320,000 ÷ $800,000 × 100 = 40%',
      'Net profit ratio: ($800,000 − $480,000 − $240,000) ÷ $800,000 × 100 = $80,000 ÷ $800,000 × 100 = 10%',
      'Debt-to-equity: $360,000 ÷ $240,000 = 1.5 (OE = $600,000 − $360,000 = $240,000)',
      'AR turnover: $800,000 ÷ $80,000 = 10 times',
      'Interpretation: 40% gross margin reasonable; 10% net margin means expenses consume 30% of revenue; D/E of 1.5 means more debt than equity — moderate gearing risk; AR turnover of 10 means receivables collected ~every 36 days',
    ],
    modelAnswer: 'Gross profit ratio: Gross Profit ÷ Net Sales × 100 = ($800,000 − $480,000) ÷ $800,000 × 100 = $320,000 ÷ $800,000 × 100 = 40%. This indicates that for every dollar of sales, 40 cents remains after covering the direct cost of goods sold — a reasonable trading margin. Net profit ratio: Net Profit before tax ÷ Net Sales × 100 = $80,000 ÷ $800,000 × 100 = 10%. After covering operating expenses of $240,000, only 10 cents of every dollar of sales is profit. The 30 percentage point gap between gross and net profit ratios indicates that operating expenses are significant, warranting review. Debt-to-equity ratio: Owners\' Equity = $600,000 − $360,000 = $240,000. D/E = $360,000 ÷ $240,000 = 1.5. The business has $1.50 of debt for every $1 of equity — moderately geared. While manageable, a ratio above 1 means creditors have a greater claim than owners, and in a downturn, debt servicing costs could create financial stress. Accounts receivable turnover: $800,000 ÷ $80,000 = 10 times per year, meaning receivables are collected approximately every 36 days (365 ÷ 10). This is reasonable for a 30-day credit business but should be compared to the business\'s credit terms to confirm customers are paying on time.',
  },
  {
    id: 'biz-ch12-q005', chapter: '11.6', topic: 'Financial Ratios', type: 'mcq', difficulty: 2, marks: 1,
    question: 'The expense ratio measures:',
    options: [
      { label: 'a', text: 'The return generated for shareholders on their equity investment' },
      { label: 'b', text: 'The proportion of revenue consumed by total expenses — a measure of operational efficiency' },
      { label: 'c', text: 'The ability of the business to meet its short-term obligations' },
      { label: 'd', text: 'The number of times accounts receivable are collected per year' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch12-q006', chapter: '11.6', topic: 'Financial Ratios', type: 'mcq', difficulty: 2, marks: 1,
    question: 'If a business\'s return on equity (ROE) falls from 18% to 9% while net profit remains unchanged, the most likely explanation is:',
    options: [
      { label: 'a', text: 'The business\'s revenue has fallen significantly' },
      { label: 'b', text: 'The owners\' equity base has doubled due to a major new share issue' },
      { label: 'c', text: 'The business has taken on more debt, reducing shareholders\' claims' },
      { label: 'd', text: 'The business\'s accounts receivable turnover has increased' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch12-q007', chapter: '11.6', topic: 'Financial Ratios', type: 'short', difficulty: 2, marks: 4,
    question: 'Explain what the accounts receivable turnover ratio measures and why it is an important indicator of business efficiency.',
    keyPoints: [
      'Formula: Net Sales ÷ Accounts Receivable — measures how many times receivables are collected per year',
      'A higher ratio = faster collection = better cash flow efficiency',
      'A low or falling ratio = customers are taking longer to pay = cash is tied up in receivables = increased bad debt risk',
      'Efficiency indicator: directly affects operating cash flow — slow collection can create cash shortfalls even for profitable businesses',
    ],
    modelAnswer: 'The accounts receivable turnover ratio is calculated as Net Sales ÷ Accounts Receivable. It measures how many times the business collects its outstanding receivables during a period. A higher ratio indicates that the business is efficiently collecting payments from customers, converting sales into cash quickly. For example, a ratio of 12 means receivables are collected roughly every 30 days. A low or declining ratio indicates that customers are taking longer to pay — cash is tied up in receivables and not available for operations. This is significant because even a highly profitable business can face cash flow problems if receivables are slow to convert to cash. A falling receivables turnover ratio may also signal increasing credit risk — some customers may be unable to pay, eventually leading to bad debts. Financial managers monitor this ratio to identify the need for tighter credit policies, more aggressive debt collection, or factoring arrangements to accelerate cash inflows.',
  },
];
