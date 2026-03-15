import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch06-001', chapter: '10.4', topic: 'Influence of Government', difficulty: 1,
    front: 'How does the government influence financial management decisions?',
    back: `• Through **ASIC** (Australian Securities and Investments Commission) — regulates corporate behaviour and financial reporting\n• Through **company tax** — reduces after-tax profit available for reinvestment\n• Through **interest rate policy** (RBA) — affects borrowing costs\n• Through **legislation** — Corporations Act 2001 governs business conduct and reporting`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch06-002', chapter: '10.4', topic: 'Influence of Government', difficulty: 1,
    front: 'What is ASIC and what role does it play in financial management?',
    back: `• **ASIC**: Australian Securities and Investments Commission — independent government regulator\n• Enforces the **Corporations Act 2001** governing company behaviour\n• Requires businesses to: maintain proper financial records, produce audited reports, disclose material information\n• Investigates **fraud, insider trading, misleading financial statements**\n• Protects investors and ensures **market integrity**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch06-003', chapter: '10.4', topic: 'Influence of Government', difficulty: 2,
    front: 'How does company tax affect a business\'s financial management?',
    back: `• **Company tax rate**: 30% for large companies; 25% for base-rate entities (turnover < $50m)\n• Tax is levied on **taxable profit** — reduces after-tax profit available for reinvestment or dividends\n• Influences the **choice between debt and equity**: interest on debt is **tax deductible**, dividends are not\n• Financial managers structure financing to **minimise tax legally** (tax minimisation)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch06-004', chapter: '10.4', topic: 'Influence of Government', difficulty: 2,
    front: 'Why does the tax deductibility of interest make debt finance attractive?',
    back: `• Interest paid on debt is **deductible from taxable income** — reduces tax payable\n• Dividends paid to shareholders are **NOT tax deductible**\n• This creates a **"tax shield"** that lowers the effective cost of debt financing\n• Example: 30% tax rate → interest cost effectively reduced by 30% → debt is cheaper after tax`,
    detail: `The tax deductibility of interest is a key reason why many businesses prefer some level of debt over pure equity financing. If a company pays $100,000 in interest and the company tax rate is 30%, the tax saving is $30,000 — meaning the effective cost of the $100,000 interest is only $70,000. This "interest tax shield" makes debt financing cheaper than its face interest rate suggests. Financial managers must weigh this tax advantage against the risk of taking on debt obligations.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch06-005', chapter: '10.4', topic: 'Influence of Government', difficulty: 2,
    front: 'What is the Corporations Act 2001 and how does it affect financial management?',
    back: `• **Corporations Act 2001**: primary legislation governing Australian companies\n• Requires: preparation of **annual financial reports**, disclosure of material information\n• Directors have legal duty of care: must act in the **best interests of shareholders**\n• Mandates **auditing** of financial statements by independent auditors\n• Non-compliance → **ASIC investigation**, fines, director disqualification or criminal charges`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch06-006', chapter: '10.4', topic: 'Influence of Government', difficulty: 2,
    front: 'How does ASIC\'s requirement for financial disclosure affect businesses?',
    back: `• Public companies must lodge **annual reports** with ASIC: income statement, balance sheet, cash flow\n• **Continuous disclosure**: ASX-listed companies must immediately release material information\n• Creates **compliance costs** (audit fees, legal fees, reporting staff)\n• Increases **transparency** for investors, creditors and the public\n• Failure to disclose → ASIC penalties, legal liability, reputational damage`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch06-007', chapter: '10.4', topic: 'Influence of Government', difficulty: 2,
    front: 'How do RBA interest rate decisions affect business financial management?',
    back: `• RBA sets the **cash rate** — the rate at which banks borrow overnight\n• Changes flow through to **business loan rates** and mortgage rates\n• **Higher interest rates** → increased borrowing costs → reduces investment and spending\n• **Lower interest rates** → cheaper debt finance → encourages business investment and growth\n• Financial managers must factor **interest rate risk** into financing decisions`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch06-008', chapter: '10.4', topic: 'Influence of Government', difficulty: 3,
    front: 'What government regulations apply specifically to financial reporting by businesses?',
    back: `• **GAAP** (Generally Accepted Accounting Principles): standards governing how financial statements are prepared\n• **AASB** (Australian Accounting Standards Board): issues Australian accounting standards\n• **IFRS** (International Financial Reporting Standards): global standards adopted in Australia for large companies\n• All listed companies must comply with AASB standards when preparing financial reports`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch06-009', chapter: '10.4', topic: 'Influence of Government', difficulty: 1,
    front: 'What is the difference between tax avoidance and tax evasion?',
    back: `• **Tax avoidance**: legal strategies to minimise tax payable (e.g. deducting interest, depreciation)\n• **Tax evasion**: illegal concealment of income or falsification of records to reduce tax\n• ASIC and the ATO investigate tax evasion → criminal penalties, fines, imprisonment\n• Financial managers must ensure tax strategies are **legal** and comply with ATO requirements`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch06-010', chapter: '10.4', topic: 'Influence of Government', difficulty: 2,
    front: 'How does government regulation through ASIC protect investors?',
    back: `• Requires businesses to produce **accurate, audited financial statements** → investors can trust the data\n• **Continuous disclosure rules** ensure investors receive material information promptly\n• Prohibits **insider trading** — using non-public information to trade shares\n• Investigates **market manipulation** and misleading financial conduct\n• Creates a **level playing field** where all investors access the same information`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch06-q001', chapter: '10.4', topic: 'Influence of Government', type: 'mcq', difficulty: 1, marks: 1,
    question: 'ASIC\'s primary role in relation to financial management is to:',
    options: [
      { label: 'a', text: 'Set interest rates for business loans' },
      { label: 'b', text: 'Regulate company behaviour, enforce financial reporting obligations and protect investors' },
      { label: 'c', text: 'Collect company tax on behalf of the Australian Taxation Office' },
      { label: 'd', text: 'Set the minimum wage and conditions for financial sector employees' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch06-q002', chapter: '10.4', topic: 'Influence of Government', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Interest on business debt is tax deductible. This means that:',
    options: [
      { label: 'a', text: 'Businesses do not need to pay interest on government-backed loans' },
      { label: 'b', text: 'The effective cost of debt financing is lower than the face interest rate because it reduces taxable income' },
      { label: 'c', text: 'Dividends paid to shareholders are also deductible from taxable income' },
      { label: 'd', text: 'Businesses with debt have lower equity obligations than businesses with shares' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch06-q003', chapter: '10.4', topic: 'Influence of Government', type: 'mcq', difficulty: 2, marks: 1,
    question: 'The Corporations Act 2001 affects financial management by:',
    options: [
      { label: 'a', text: 'Limiting the amount of profit a company can distribute as dividends' },
      { label: 'b', text: 'Requiring directors to act in the best interests of shareholders and mandating audited financial reports' },
      { label: 'c', text: 'Setting a maximum interest rate that banks can charge on business loans' },
      { label: 'd', text: 'Requiring all businesses to list on the Australian Securities Exchange' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch06-q004', chapter: '10.4', topic: 'Influence of Government', type: 'short', difficulty: 3, marks: 6,
    question: 'Explain TWO ways in which government influences financial management decisions in Australian businesses.',
    keyPoints: [
      'ASIC regulation: requires audited financial reports, continuous disclosure for listed companies, enforces Corporations Act → creates compliance obligations and costs for businesses',
      'Company tax: levied on taxable profit at 30%/25%; reduces after-tax profit; interest on debt is tax deductible but dividends are not → influences debt vs equity financing choices',
      'RBA interest rates: cash rate changes affect borrowing costs → rising rates increase debt servicing costs; financial managers must account for interest rate risk',
      'Accounting standards (AASB/IFRS): govern how financial statements are prepared → ensures consistency and comparability',
    ],
    modelAnswer: 'Two key ways government influences financial management are through ASIC regulation and company taxation. ASIC enforces the Corporations Act 2001, requiring businesses to prepare accurate, audited annual financial reports and mandating continuous disclosure for ASX-listed companies. These obligations create compliance costs — audit fees, legal fees and reporting staff — but they protect investors by ensuring financial information is reliable. Directors who fail to meet these obligations face penalties, disqualification or criminal charges. Company tax has an equally significant impact: it is levied on taxable profit (30% for large companies), directly reducing the after-tax profit available for reinvestment or dividends. Crucially, interest paid on debt is tax deductible whereas dividends are not, creating a tax incentive to use debt finance over equity. This influences financial managers to structure their capital with some level of debt to take advantage of the interest tax shield, provided the associated risk remains manageable.',
  },
  {
    id: 'biz-ch06-q005', chapter: '10.4', topic: 'Influence of Government', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Tax evasion differs from tax avoidance because tax evasion:',
    options: [
      { label: 'a', text: 'Uses legal deductions and structures to minimise tax payable' },
      { label: 'b', text: 'Involves illegal concealment of income or falsification of records' },
      { label: 'c', text: 'Only applies to businesses with annual turnover above $50 million' },
      { label: 'd', text: 'Is permitted by the Corporations Act for small businesses' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch06-q006', chapter: '10.4', topic: 'Influence of Government', type: 'mcq', difficulty: 2, marks: 1,
    question: 'When the Reserve Bank of Australia raises the cash rate, the most likely immediate effect on a highly geared business is:',
    options: [
      { label: 'a', text: 'Reduced compliance costs due to lower ASIC reporting requirements' },
      { label: 'b', text: 'Increased interest expenses, putting pressure on profitability and cash flow' },
      { label: 'c', text: 'An increase in the value of its share price on the ASX' },
      { label: 'd', text: 'An automatic reduction in company tax payable' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch06-q007', chapter: '10.4', topic: 'Influence of Government', type: 'short', difficulty: 2, marks: 4,
    question: 'Explain how ASIC\'s financial disclosure requirements affect businesses and protect investors.',
    keyPoints: [
      'ASIC requires audited annual financial statements (income statement, balance sheet, cash flow statement)',
      'Continuous disclosure: ASX-listed companies must immediately release material information that could affect share price',
      'Effect on businesses: compliance costs (audit fees, legal costs); management time diverted to reporting',
      'Protection for investors: accurate, audited information allows informed investment decisions; prevents misleading statements and insider trading',
    ],
    modelAnswer: 'ASIC\'s financial disclosure requirements mean that companies — particularly publicly listed ones — must produce accurate, audited annual financial statements including an income statement, balance sheet and cash flow statement. ASX-listed companies must also comply with continuous disclosure obligations, immediately releasing any information that could materially affect their share price. For businesses, these obligations create real costs: audit fees, legal and compliance staff, and management time devoted to reporting. However, these requirements exist to protect investors: by requiring independent auditors to verify financial statements, ASIC ensures that investors receive reliable, truthful information on which to base their decisions. Continuous disclosure prevents insider trading by ensuring all investors receive material information simultaneously. Together, these requirements maintain market integrity and public confidence in Australia\'s financial system.',
  },
];
