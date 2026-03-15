import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch08-001', chapter: '11.2', topic: 'Financial Planning and Implementation', difficulty: 1,
    front: 'What are the key steps in financial planning and implementation?',
    back: `• **Identifying financial needs**: assessing short and long-term funding requirements\n• **Budgets**: cash flow, revenue, expense, and capital expenditure budgets\n• **Record systems**: maintaining accurate, reliable financial records\n• **Financial risks**: identifying and managing threats to financial stability\n• **Financial controls**: monitoring actual performance against planned targets`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch08-002', chapter: '11.2', topic: 'Financial Planning and Implementation', difficulty: 1,
    front: 'What is a budget and what is its purpose in financial management?',
    back: `• **Budget**: a financial plan that estimates expected revenues and expenditures over a period\n• Purpose: **coordinate** business activities; set financial targets; identify surpluses/shortfalls\n• Provides a **benchmark** to compare actual results against planned outcomes\n• Types: cash flow budget, operating budget, capital expenditure budget`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch08-003', chapter: '11.2', topic: 'Financial Planning and Implementation', difficulty: 2,
    front: 'What is a cash flow budget and why is it the most critical budget for short-term survival?',
    back: `• **Cash flow budget**: forecasts all cash inflows and outflows over a period (weekly/monthly)\n• Shows predicted **opening and closing cash balances** each period\n• Critical because: a business can be profitable but fail if it **runs out of cash**\n• Allows managers to identify **cash shortfalls in advance** and arrange overdraft or delay payments`,
    detail: `A cash flow budget is the most operationally critical financial planning tool because it maps the timing of actual cash movements — not just accounting profit. A business may book a large sale in March (revenue), but if the customer pays in June, the cash is not received until then. Meanwhile, wages, rent and supplier invoices must be paid in March. Without a cash flow budget, a business might not anticipate this gap and could run short of cash despite being profitable overall. By identifying shortfalls weeks in advance, financial managers can arrange overdraft facilities, delay capital expenditure, or accelerate collections.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch08-004', chapter: '11.2', topic: 'Financial Planning and Implementation', difficulty: 2,
    front: 'What is a capital expenditure budget?',
    back: `• **Capital expenditure (capex) budget**: plan for spending on long-term assets (equipment, vehicles, property)\n• Covers assets with a useful life of **more than 12 months**\n• Requires **justification**: expected ROI, payback period, strategic fit\n• Links to long-term financial planning — may require debt or equity funding`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch08-005', chapter: '11.2', topic: 'Financial Planning and Implementation', difficulty: 2,
    front: 'Why are accurate record systems essential for financial management?',
    back: `• Accurate records enable: **tax compliance** (ATO requirements), **ASIC reporting**, and business analysis\n• Provide the **data foundation** for financial statements and ratio analysis\n• Help identify: errors, fraud, unexplained variances from budget\n• Legal requirement: Corporations Act requires businesses to keep records for **7 years**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch08-006', chapter: '11.2', topic: 'Financial Planning and Implementation', difficulty: 2,
    front: 'What are the main financial risks a business faces and how can they be managed?',
    back: `• **Interest rate risk**: rising rates increase debt costs → manage by fixing interest rates\n• **Exchange rate risk**: AUD movements affect overseas transactions → hedge with forward contracts\n• **Credit risk**: customers not paying → manage by credit checks, shorter payment terms\n• **Liquidity risk**: insufficient cash → manage by maintaining cash reserves and overdraft facilities`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch08-007', chapter: '11.2', topic: 'Financial Planning and Implementation', difficulty: 2,
    front: 'What are financial controls and why are they important?',
    back: `• **Financial controls**: systems and processes ensuring financial resources are used as planned\n• Include: **budget variance analysis**, **internal audits**, approval limits for spending\n• Detect **fraud, waste and inefficiency** before they cause serious damage\n• Ensure **actual performance** aligns with planned targets — allows corrective action`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch08-008', chapter: '11.2', topic: 'Financial Planning and Implementation', difficulty: 3,
    front: 'What is a budget variance and what does it indicate?',
    back: `• **Budget variance**: difference between budgeted (planned) figures and actual figures\n• **Favourable variance**: actual revenue > budgeted, or actual costs < budgeted\n• **Unfavourable variance**: actual revenue < budgeted, or actual costs > budgeted\n• Large variances prompt investigation → identify causes (errors, changed conditions, poor planning)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch08-009', chapter: '11.2', topic: 'Financial Planning and Implementation', difficulty: 1,
    front: 'What is the difference between an operating budget and a capital expenditure budget?',
    back: `• **Operating budget**: covers revenue and expenses for **day-to-day operations** (≤12 months)\n• **Capital expenditure budget**: covers investment in **long-term assets** (>12 months)\n• Operating items appear on the **income statement**; capex items appear on the **balance sheet**\n• Capex budgets usually require **separate approval** due to their size and long-term impact`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch08-010', chapter: '11.2', topic: 'Financial Planning and Implementation', difficulty: 2,
    front: 'How does a business identify its financial needs in the planning process?',
    back: `• Analyse **past performance**: trends in revenue, costs, and cash flow\n• Assess **growth plans**: new products, markets, equipment needs\n• Identify **known upcoming obligations**: debt repayments, lease renewals, tax payments\n• Consider **contingency needs**: buffer for unexpected downturns or opportunities`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch08-011', chapter: '11.2', topic: 'Financial Planning and Implementation', difficulty: 2,
    front: 'What is the role of an internal audit in financial control?',
    back: `• **Internal audit**: independent review of financial processes and records by internal staff\n• Checks: **accuracy of records**, compliance with policies, effectiveness of controls\n• Identifies fraud, errors, and process weaknesses **before** external auditors find them\n• Supports **good governance** and management accountability`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch08-q001', chapter: '11.2', topic: 'Financial Planning and Implementation', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Which of the following is the most critical budget for a business\'s short-term survival?',
    options: [
      { label: 'a', text: 'Capital expenditure budget' },
      { label: 'b', text: 'Cash flow budget' },
      { label: 'c', text: 'Marketing budget' },
      { label: 'd', text: 'HR training budget' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch08-q002', chapter: '11.2', topic: 'Financial Planning and Implementation', type: 'mcq', difficulty: 1, marks: 1,
    question: 'A budget variance is best described as:',
    options: [
      { label: 'a', text: 'The total amount of debt a business holds relative to equity' },
      { label: 'b', text: 'The difference between budgeted (planned) figures and actual results' },
      { label: 'c', text: 'The gap between a business\'s current ratio and industry benchmarks' },
      { label: 'd', text: 'The amount by which actual profit exceeds tax obligations' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch08-q003', chapter: '11.2', topic: 'Financial Planning and Implementation', type: 'mcq', difficulty: 2, marks: 1,
    question: 'A business records actual wages of $120,000 against a budgeted amount of $100,000. This variance is:',
    options: [
      { label: 'a', text: 'Favourable — actual costs are higher than expected, improving quality' },
      { label: 'b', text: 'Unfavourable — actual costs exceeded budget, reducing profitability' },
      { label: 'c', text: 'Neutral — wages are a fixed cost that cannot vary' },
      { label: 'd', text: 'Favourable — actual revenue exceeded budgeted revenue' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch08-q004', chapter: '11.2', topic: 'Financial Planning and Implementation', type: 'short', difficulty: 3, marks: 6,
    question: 'Explain the role of budgets and financial controls in the financial planning and implementation process.',
    keyPoints: [
      'Budgets set financial targets for revenue and expenditure — provide a benchmark against which actual performance is measured',
      'Cash flow budget is most critical — maps timing of cash movements, identifies future shortfalls, allows advance action',
      'Financial controls include variance analysis, internal audits and spending approval limits',
      'Controls detect fraud, waste and inefficiency; ensure resources are used as planned',
      'Together, budgets and controls create a cycle: plan → implement → monitor → correct',
    ],
    modelAnswer: 'Budgets and financial controls work together to ensure that a business\'s financial resources are used efficiently to achieve its goals. Budgets set out expected revenues and expenditures for a period — a cash flow budget, for example, forecasts all cash inflows and outflows, allowing managers to identify potential shortfalls weeks in advance and arrange finance (such as an overdraft) before a crisis occurs. Capital expenditure budgets plan for long-term asset investment and require ROI justification. Financial controls are the mechanisms that ensure actual performance aligns with these plans. They include budget variance analysis — comparing actual figures to budgeted figures — to identify unfavourable variances (actual costs exceed budget or actual revenue falls short). Internal audits review financial records and processes to detect fraud, errors or inefficiencies. Spending approval limits prevent unauthorised expenditure. Together, budgets and controls create a continuous improvement cycle: plan → implement → monitor → identify deviations → correct → replan.',
  },
  {
    id: 'biz-ch08-q005', chapter: '11.2', topic: 'Financial Planning and Implementation', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Financial controls are important in a business because they:',
    options: [
      { label: 'a', text: 'Guarantee that financial targets will always be achieved' },
      { label: 'b', text: 'Eliminate all financial risk by diversifying the business\'s debt portfolio' },
      { label: 'c', text: 'Monitor actual performance against planned targets and detect fraud, waste and inefficiency' },
      { label: 'd', text: 'Replace the need for external auditing by ASIC-approved auditors' },
    ],
    correctOption: 'c',
  },
  {
    id: 'biz-ch08-q006', chapter: '11.2', topic: 'Financial Planning and Implementation', type: 'mcq', difficulty: 2, marks: 1,
    question: 'The key reason a cash flow budget is critical even for a profitable business is that:',
    options: [
      { label: 'a', text: 'It is required by ASIC for all public companies' },
      { label: 'b', text: 'Profit can be recorded before cash is received, so a profitable business can still run out of cash' },
      { label: 'c', text: 'It replaces the need for a balance sheet and income statement' },
      { label: 'd', text: 'It reduces the amount of company tax payable in the current period' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch08-q007', chapter: '11.2', topic: 'Financial Planning and Implementation', type: 'short', difficulty: 2, marks: 4,
    question: 'Explain what financial risks are and identify TWO strategies a business can use to manage them.',
    keyPoints: [
      'Financial risks: threats to financial stability — include interest rate risk, credit risk, exchange rate risk, liquidity risk',
      'Strategy 1: Fix interest rates on debt — locks in borrowing cost and protects against rising rates',
      'Strategy 2: Maintain cash reserves / overdraft facility — manages liquidity risk when cash inflows are delayed',
      'Other strategies: credit checks on customers (credit risk), forward contracts or hedging (exchange rate risk)',
    ],
    modelAnswer: 'Financial risks are threats to a business\'s financial stability. Common examples include interest rate risk (rising rates increase debt servicing costs), credit risk (customers failing to pay, creating bad debts), exchange rate risk (AUD movements making overseas transactions more expensive), and liquidity risk (running out of cash to meet short-term obligations). Two effective management strategies are: first, fixing the interest rate on debt borrowings — this locks in a known cost and protects the business from unexpected rate increases, making financial planning more reliable. Second, maintaining an adequate cash reserve or pre-arranged overdraft facility — this addresses liquidity risk by ensuring the business has immediate access to funds even when revenue is temporarily delayed, preventing it from defaulting on obligations.',
  },
];
