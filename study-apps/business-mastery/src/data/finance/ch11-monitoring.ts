import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch11-001', chapter: '11.5', topic: 'Monitoring and Controlling', difficulty: 1,
    front: 'What are the three main financial statements used to monitor business performance?',
    back: `• **Cash flow statement**: tracks actual cash inflows and outflows over a period\n• **Income statement (profit & loss)**: shows revenue, expenses and profit/loss over a period\n• **Balance sheet**: snapshot of assets, liabilities and owners' equity at a point in time\n• Together these provide a **comprehensive picture** of financial health and performance`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch11-002', chapter: '11.5', topic: 'Monitoring and Controlling', difficulty: 1,
    front: 'What does the income statement (profit & loss statement) show?',
    back: `• **Revenue (sales)**: total income from selling goods/services\n• **Less: Cost of Goods Sold (COGS)** → gives **Gross Profit**\n• **Less: Operating expenses** (wages, rent, marketing) → gives **Net Profit (before tax)**\n• **Less: Tax** → gives **Net Profit after tax**\n• Shows whether the business is **profitable** over a given period`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch11-003', chapter: '11.5', topic: 'Monitoring and Controlling', difficulty: 1,
    front: 'What does the balance sheet show?',
    back: `• A **snapshot** of financial position at a specific date\n• **Assets** = Liabilities + Owners' Equity (the accounting equation — must always balance)\n• **Current assets**: cash, inventory, receivables (≤12 months)\n• **Non-current assets**: property, equipment, intangibles (>12 months)\n• **Liabilities**: current (≤12 months) and non-current (>12 months)\n• **Owners' equity**: paid-up capital + retained profits`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch11-004', chapter: '11.5', topic: 'Monitoring and Controlling', difficulty: 2,
    front: 'What does the cash flow statement show and why does it differ from the income statement?',
    back: `• **Cash flow statement**: records actual cash received and paid — divided into operating, investing and financing activities\n• Differs from income statement: **accrual accounting** records revenue when earned, not when cash received\n• A business can show **profit but negative cash flow** (e.g. large credit sales unpaid)\n• Cash flow statement reveals **liquidity** — whether cash is sufficient to meet obligations`,
    detail: `The income statement uses accrual accounting: revenue is recorded when a sale is made, even if payment is not yet received. A business that books $500,000 in sales in December may not receive cash until February. The income statement shows $500,000 revenue and likely a profit; the cash flow statement shows no cash received in December. This gap is why a profitable business can still face a liquidity crisis. The cash flow statement is the only document that shows whether the business actually has the cash to pay its bills.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch11-005', chapter: '11.5', topic: 'Monitoring and Controlling', difficulty: 2,
    front: 'What are the three sections of a cash flow statement?',
    back: `• **Operating activities**: cash flows from core business operations — cash sales, payments to suppliers, wages\n• **Investing activities**: cash used to buy or sell long-term assets — equipment, property, investments\n• **Financing activities**: cash from raising or repaying finance — borrowings, share issues, dividends paid\n• Net change in cash = operating + investing + financing cash flows`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch11-006', chapter: '11.5', topic: 'Monitoring and Controlling', difficulty: 2,
    front: 'What is the accounting equation and why must it always balance?',
    back: `• **Accounting equation**: **Assets = Liabilities + Owners' Equity**\n• Every transaction has a **dual effect** that keeps the equation balanced\n• Buy asset with cash → asset increases, cash (asset) decreases → net asset change = zero\n• Take a loan → asset (cash) increases, liability increases → equation still balances`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch11-007', chapter: '11.5', topic: 'Monitoring and Controlling', difficulty: 2,
    front: 'What is depreciation and how does it appear in financial statements?',
    back: `• **Depreciation**: systematic allocation of the cost of a non-current asset over its useful life\n• Appears in the **income statement** as an operating expense — reduces profit\n• Reduces the **book value** of the asset on the balance sheet each year\n• NON-CASH expense: reduces profit but does **NOT reduce cash flow**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch11-008', chapter: '11.5', topic: 'Monitoring and Controlling', difficulty: 1,
    front: 'What is owners\' equity and how is it calculated?',
    back: `• **Owners' equity** = Total Assets − Total Liabilities\n• Represents the **residual claim** of the business's owners\n• Includes: **paid-up capital** (money invested by owners) + **retained profits** (accumulated profits kept in business)\n• Grows when: profits are earned and retained; shrinks when losses occur or dividends exceed profits`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch11-009', chapter: '11.5', topic: 'Monitoring and Controlling', difficulty: 2,
    front: 'How is the income statement used to monitor business performance?',
    back: `• Compares **actual revenue and expenses** against budget targets\n• Identifies trends in **gross profit margin** and **net profit margin** over time\n• Highlights areas where **costs are growing faster than revenue** — efficiency issues\n• Provides the data for financial ratio analysis (profit ratios, expense ratio)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch11-010', chapter: '11.5', topic: 'Monitoring and Controlling', difficulty: 2,
    front: 'How does monitoring the balance sheet help financial management?',
    back: `• Reveals changes in the **asset and liability structure** over time\n• Growing liabilities → increasing debt burden; assess if solvency is at risk\n• Changes in **working capital** indicate improving or deteriorating liquidity\n• Compares to industry benchmarks → identifies structural weaknesses (e.g. over-geared)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch11-q001', chapter: '11.5', topic: 'Monitoring and Controlling', type: 'mcq', difficulty: 1, marks: 1,
    question: 'The accounting equation states that:',
    options: [
      { label: 'a', text: 'Revenue = Expenses + Profit' },
      { label: 'b', text: 'Assets = Liabilities + Owners\' Equity' },
      { label: 'c', text: 'Current Assets − Current Liabilities = Working Capital' },
      { label: 'd', text: 'Gross Profit = Revenue − Cost of Goods Sold' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch11-q002', chapter: '11.5', topic: 'Monitoring and Controlling', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Which of the following is a key difference between the income statement and the cash flow statement?',
    options: [
      { label: 'a', text: 'The income statement shows assets and liabilities; the cash flow statement shows revenue and expenses' },
      { label: 'b', text: 'The income statement records revenue when earned (accrual); the cash flow statement records only actual cash received and paid' },
      { label: 'c', text: 'The cash flow statement is only required by public companies; private companies only produce an income statement' },
      { label: 'd', text: 'The income statement shows whether the business is solvent; the cash flow statement shows whether it is profitable' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch11-q003', chapter: '11.5', topic: 'Monitoring and Controlling', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Depreciation is described as a "non-cash expense" because:',
    options: [
      { label: 'a', text: 'It does not appear anywhere in the financial statements' },
      { label: 'b', text: 'It reduces profit on the income statement but does not involve an actual outflow of cash in the period' },
      { label: 'c', text: 'It is only applicable to financial assets such as shares and bonds' },
      { label: 'd', text: 'It increases cash flow by reducing the tax payable on assets' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch11-q004', chapter: '11.5', topic: 'Monitoring and Controlling', type: 'short', difficulty: 2, marks: 4,
    question: 'Explain the difference between the cash flow statement and the income statement, and why a business needs both.',
    keyPoints: [
      'Income statement (accrual): records revenue when earned and expenses when incurred — shows profitability',
      'Cash flow statement: records actual cash inflows and outflows — shows liquidity (can the business pay its bills?)',
      'A business can be profitable but cash-poor (e.g. large credit sales not yet collected)',
      'Need both: income statement shows performance; cash flow shows survival ability',
    ],
    modelAnswer: 'The income statement is prepared on an accrual basis — revenue is recorded when a sale is made and expenses when they are incurred, regardless of when cash is actually exchanged. This shows whether the business is generating profit from its operations. The cash flow statement records only actual cash received and paid, divided into operating, investing and financing activities. This shows whether the business has sufficient cash to meet its day-to-day obligations. A business needs both documents because they answer different questions. A business can be profitable (revenue exceeds expenses on the income statement) but still run out of cash if customers are slow to pay. For example, a retailer that extends 90-day credit terms may show strong profit but have very little cash on hand to pay wages. Without a cash flow statement, management might not anticipate the coming shortfall. The income statement measures financial performance; the cash flow statement measures financial survival.',
  },
  {
    id: 'biz-ch11-q005', chapter: '11.5', topic: 'Monitoring and Controlling', type: 'mcq', difficulty: 1, marks: 1,
    question: 'The balance sheet is best described as:',
    options: [
      { label: 'a', text: 'A record of all cash transactions during a financial year' },
      { label: 'b', text: 'A statement of revenue and expenses over a period' },
      { label: 'c', text: 'A snapshot of a business\'s assets, liabilities and owners\' equity at a specific date' },
      { label: 'd', text: 'A forecast of future cash inflows and outflows' },
    ],
    correctOption: 'c',
  },
  {
    id: 'biz-ch11-q006', chapter: '11.5', topic: 'Monitoring and Controlling', type: 'mcq', difficulty: 2, marks: 1,
    question: 'A business has total assets of $800,000 and total liabilities of $500,000. Owners\' equity is:',
    options: [
      { label: 'a', text: '$1,300,000' },
      { label: 'b', text: '$500,000' },
      { label: 'c', text: '$300,000' },
      { label: 'd', text: '$800,000' },
    ],
    correctOption: 'c',
  },
  {
    id: 'biz-ch11-q007', chapter: '11.5', topic: 'Monitoring and Controlling', type: 'short', difficulty: 3, marks: 6,
    question: 'Explain the role of the three key financial statements in monitoring and controlling a business\'s financial performance.',
    keyPoints: [
      'Income statement: measures profitability — gross profit and net profit margins; compared to budget and prior periods to identify cost/revenue trends',
      'Cash flow statement: measures liquidity — operating, investing and financing cash flows; identifies cash shortfalls before they become crises',
      'Balance sheet: shows financial position — asset/liability structure; measures solvency and working capital; compared over time to detect growing debt burden',
      'Together: provide a complete picture — performance (income), survival (cash flow), position (balance sheet)',
    ],
    modelAnswer: 'The three key financial statements each serve distinct monitoring purposes in financial management. The income statement measures profitability by reporting revenue, cost of goods sold, and operating expenses to arrive at gross and net profit. By comparing actual results against budgeted figures and prior periods, managers identify whether profit margins are improving or deteriorating and which cost categories are growing disproportionately. The cash flow statement measures liquidity — whether the business can pay its obligations. It shows actual cash movements from operating activities (core business), investing activities (asset purchases and sales), and financing activities (loans and dividends). Negative operating cash flow is a warning sign even if the income statement shows profit. The balance sheet provides a snapshot of financial position at a point in time, showing total assets, liabilities, and owners\' equity. Monitoring balance sheets over time reveals whether debt is growing (increased liabilities), solvency is at risk, or working capital is deteriorating. Together, the three statements provide a comprehensive picture of financial health: the income statement answers "are we making money?", the cash flow statement answers "do we have the cash to survive?", and the balance sheet answers "what is our financial position?".',
  },
];
