import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch03-001', chapter: '9.4', topic: 'Interdependence with Other Functions', difficulty: 1,
    front: 'How is financial management interdependent with marketing?',
    back: `• Marketing needs **budgets** for advertising, promotions and market research — funded by finance\n• Successful marketing → **increased sales** → improved cash flow and profitability\n• Finance sets **pricing limits** that marketing must work within\n• Finance evaluates the **ROI of marketing campaigns** to allocate future budgets`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch03-002', chapter: '9.4', topic: 'Interdependence with Other Functions', difficulty: 1,
    front: 'How is financial management interdependent with operations?',
    back: `• Operations requires **capital investment** for equipment, technology and facilities\n• Finance must approve and fund **capital expenditure** for plant and machinery\n• Operations efficiency improvements directly **reduce costs** → improve profit margins\n• Finance monitors **production costs** to ensure operations remain within budget`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch03-003', chapter: '9.4', topic: 'Interdependence with Other Functions', difficulty: 1,
    front: 'How is financial management interdependent with human resources?',
    back: `• HR requires finance for **wages, salaries, training and recruitment** programs\n• Workforce productivity (HR outcome) directly affects **revenue and profit** (financial outcome)\n• Finance allocates HR budgets — determines **staffing levels** and training investment\n• HR manages employee costs — labour costs are often a business's **largest expense**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch03-004', chapter: '9.4', topic: 'Interdependence with Other Functions', difficulty: 2,
    front: 'What is interdependence between business functions and why does it matter?',
    back: `• **Interdependence**: each business function relies on and affects the others\n• No function can operate independently — all require coordination\n• Financial decisions affect marketing, operations and HR; and vice versa\n• Poor interdependence leads to **resource conflicts**, inefficiency and strategic misalignment`,
    detail: `Interdependence means that decisions in one function inevitably ripple through the others. If finance cuts the marketing budget, marketing cannot run campaigns, reducing sales and ultimately harming financial results. If operations fails to control production costs, financial margins deteriorate. If HR overspends on wages, the business's largest cost line expands and profitability falls. This mutual dependency means financial managers must work closely with all other business functions to coordinate resource allocation, understand cost drivers, and ensure the financial plan supports the overall business strategy.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch03-005', chapter: '9.4', topic: 'Interdependence with Other Functions', difficulty: 2,
    front: 'How does a marketing decision to expand sales on credit affect financial management?',
    back: `• Credit sales increase **accounts receivable** on the balance sheet\n• May boost **revenue** but reduces **cash on hand** short-term\n• Creates **credit risk** — if customers don't pay, debts become bad debts\n• Finance must manage credit policy carefully to balance growth with **cash flow stability**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch03-006', chapter: '9.4', topic: 'Interdependence with Other Functions', difficulty: 2,
    front: 'How does an operations decision to upgrade technology affect financial management?',
    back: `• Technology upgrade = **capital expenditure** — requires financial approval and funding\n• May be funded via debt (loan or lease) → increases **liabilities** and interest costs\n• Long-term: improved technology → **lower per-unit costs** → better profit margins\n• Finance must assess the **payback period** and ROI before approving the investment`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch03-007', chapter: '9.4', topic: 'Interdependence with Other Functions', difficulty: 2,
    front: 'How does an HR decision to increase staff training affect financial management?',
    back: `• Training is a **direct cost** to the business — reduces short-term profit\n• Finance must **budget for training** and approve the expense\n• Long-term: better-trained staff → **higher productivity** → increased revenue and lower error costs\n• Finance evaluates the **return on investment** of training programs`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch03-008', chapter: '9.4', topic: 'Interdependence with Other Functions', difficulty: 3,
    front: 'Explain how financial management affects ALL three other key business functions simultaneously.',
    back: `• **Marketing**: finance sets promotion budgets → determines marketing scope and reach\n• **Operations**: finance funds capital investment → determines technology and capacity\n• **HR**: finance determines staffing and training budgets → shapes workforce capability\n• Finance is the **enabling function** — it controls the resource envelope available to all others`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch03-009', chapter: '9.4', topic: 'Interdependence with Other Functions', difficulty: 2,
    front: 'Give an example of how poor interdependence between finance and operations can harm a business.',
    back: `• Finance cuts the operations budget → **deferred maintenance** of equipment\n• Equipment failures → **production shutdowns** → lost revenue and customer dissatisfaction\n• Operations may then need **emergency repairs** that cost far more than planned maintenance\n• Short-term cost saving creates **larger long-term financial damage** — poor interdependence`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch03-010', chapter: '9.4', topic: 'Interdependence with Other Functions', difficulty: 1,
    front: 'Why are labour costs particularly important in the interdependence between HR and finance?',
    back: `• Labour costs are typically a business's **largest single expense category**\n• HR decisions on wages, headcount, overtime directly **impact profit margins**\n• Finance monitors **labour cost as a % of revenue** (expense ratio)\n• Mismanagement of labour costs can quickly erode profitability → financial distress`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch03-q001', chapter: '9.4', topic: 'Interdependence with Other Functions', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Interdependence between business functions means that:',
    options: [
      { label: 'a', text: 'Each function operates independently to avoid resource conflicts' },
      { label: 'b', text: 'Each function relies on and affects the performance of other functions' },
      { label: 'c', text: 'Finance controls all decisions made by other business functions' },
      { label: 'd', text: 'Marketing, operations and HR report directly to the finance department' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch03-q002', chapter: '9.4', topic: 'Interdependence with Other Functions', type: 'mcq', difficulty: 2, marks: 1,
    question: 'A business\'s marketing department decides to offer 90-day credit terms to all customers. The most likely financial management consequence is:',
    options: [
      { label: 'a', text: 'Immediate improvement in net profit ratio' },
      { label: 'b', text: 'Increase in accounts receivable and potential reduction in short-term cash flow' },
      { label: 'c', text: 'Reduction in total liabilities on the balance sheet' },
      { label: 'd', text: 'Increase in long-term borrowings' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch03-q003', chapter: '9.4', topic: 'Interdependence with Other Functions', type: 'short', difficulty: 3, marks: 6,
    question: 'Explain how financial management is interdependent with TWO other key business functions. Use specific examples in your answer.',
    keyPoints: [
      'Finance & Marketing: finance sets advertising/promotion budgets; marketing spending drives sales and revenue which feed back into financial results',
      'Finance & Operations: finance funds capital expenditure (machinery, technology); operations efficiency reduces production costs and improves margins',
      'Finance & HR: finance sets wage and training budgets; labour is typically the largest cost, and trained staff improve productivity and revenue',
      'Decisions in each function have direct financial consequences — poor coordination leads to resource conflicts and strategic misalignment',
    ],
    modelAnswer: 'Financial management is interdependent with marketing and operations. Regarding marketing: the finance function sets the marketing budget, determining the scale and reach of advertising campaigns. At the same time, successful marketing generates increased sales, boosting revenue and cash flow — which in turn gives finance more resources to allocate. If finance cuts the marketing budget without understanding its revenue-generating role, sales may fall and the business loses more than it saves. For example, a business that halves its digital marketing spend may see online sales drop by 20%, creating a net financial loss. Regarding operations: finance must approve and fund capital expenditure for new equipment and technology. Operations decisions to invest in automation, for example, require financial evaluation of the payback period and ROI. In return, more efficient operations reduce per-unit production costs, directly improving profit margins. If finance refuses to fund a necessary machinery upgrade, operations may face breakdowns that cost far more in lost production than the original investment would have cost.',
  },
  {
    id: 'biz-ch03-q004', chapter: '9.4', topic: 'Interdependence with Other Functions', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Which of the following best illustrates interdependence between financial management and human resources?',
    options: [
      { label: 'a', text: 'Finance sets the price for a new product line' },
      { label: 'b', text: 'Finance sets the training budget which shapes the skill level of the workforce, affecting productivity and revenue' },
      { label: 'c', text: 'HR determines the depreciation method for machinery' },
      { label: 'd', text: 'HR decides which suppliers to use for raw materials' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch03-q005', chapter: '9.4', topic: 'Interdependence with Other Functions', type: 'short', difficulty: 2, marks: 4,
    question: 'Explain why labour costs create a strong interdependence between financial management and human resources.',
    keyPoints: [
      'Labour is typically the largest single operating expense — any HR decision on wages, headcount or overtime directly impacts the expense ratio and profit margins',
      'Finance monitors labour costs as a % of revenue to assess whether they are controlled',
      'HR decisions to hire more staff or increase training have direct short-term cost consequences that finance must plan for',
      'Conversely, poorly managed HR (e.g. high turnover, low productivity) increases HR costs and damages financial results',
    ],
    modelAnswer: 'Labour costs create strong interdependence between HR and financial management because wages and salaries typically represent a business\'s largest single operating expense. Any HR decision — whether to hire additional staff, offer pay rises, increase training investment or allow overtime — directly affects the business\'s expense ratio and profit margins. Financial managers closely monitor labour costs as a percentage of revenue; if this ratio rises, profitability falls. Conversely, HR practices that improve workforce retention and productivity (such as training programs or performance incentives) reduce costs associated with turnover and errors, directly improving financial results. This mutual influence means financial and HR managers must closely coordinate: finance must understand the business implications of workforce decisions, and HR must understand the cost constraints set by financial targets.',
  },
  {
    id: 'biz-ch03-q006', chapter: '9.4', topic: 'Interdependence with Other Functions', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Which of the following best explains why finance is described as the "enabling function" for all other business functions?',
    options: [
      { label: 'a', text: 'Finance generates the most revenue of all business functions' },
      { label: 'b', text: 'Finance controls the resource envelope — without funding, no other function can operate' },
      { label: 'c', text: 'Finance is legally required to approve all business decisions' },
      { label: 'd', text: 'Finance replaces the role of management in large businesses' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch03-q007', chapter: '9.4', topic: 'Interdependence with Other Functions', type: 'mcq', difficulty: 2, marks: 1,
    question: 'A business defers maintenance of its production equipment to reduce operating costs this quarter. What is the most likely long-term financial consequence?',
    options: [
      { label: 'a', text: 'Improved profitability due to lower costs' },
      { label: 'b', text: 'Equipment failure leading to production shutdowns and higher emergency repair costs' },
      { label: 'c', text: 'Improved current ratio due to lower current liabilities' },
      { label: 'd', text: 'Increased depreciation expense on the income statement' },
    ],
    correctOption: 'b',
  },
];
