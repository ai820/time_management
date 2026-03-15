import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch09-001', chapter: '11.3', topic: 'Debt and Equity Financing', difficulty: 1,
    front: 'What is gearing and why is it important?',
    back: `• **Gearing**: the proportion of a business's finance that comes from debt vs equity\n• **Highly geared**: high debt relative to equity → higher financial risk but potentially higher returns\n• **Low gearing**: mostly equity funded → lower risk, more financial flexibility\n• Measured by: **debt-to-equity ratio** = Total Liabilities ÷ Owners' Equity`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch09-002', chapter: '11.3', topic: 'Debt and Equity Financing', difficulty: 2,
    front: 'What are the advantages of debt financing?',
    back: `• **Tax deductible interest**: reduces effective cost of borrowing\n• **No dilution of ownership**: owner retains full control and profit share\n• **Flexible**: can choose loan type, term and amount to match needs\n• **Leveraging effect**: using borrowed funds to amplify returns when business performs well`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch09-003', chapter: '11.3', topic: 'Debt and Equity Financing', difficulty: 2,
    front: 'What are the disadvantages of debt financing?',
    back: `• **Repayment obligation**: must repay principal + interest regardless of profit or cash flow\n• **Insolvency risk**: failure to service debt → creditor can force liquidation\n• **Covenants**: lenders may impose conditions (maintain certain ratios, restrict dividends)\n• **Higher gearing increases risk**: in downturns, interest payments are a fixed burden`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch09-004', chapter: '11.3', topic: 'Debt and Equity Financing', difficulty: 2,
    front: 'What are the advantages of equity financing?',
    back: `• **No repayment obligation**: no fixed principal or interest payments → less cash flow pressure\n• **Improved solvency**: more equity → lower debt-to-equity ratio → better financial position\n• **Dividends are discretionary**: can reduce or skip dividends in difficult periods\n• **Permanent capital**: equity does not need to be refinanced or repaid`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch09-005', chapter: '11.3', topic: 'Debt and Equity Financing', difficulty: 2,
    front: 'What are the disadvantages of equity financing?',
    back: `• **Dilution of ownership**: new shareholders get a share of profit and voting rights\n• **Loss of control**: existing owners\' decision-making power reduced\n• **Dividend expectations**: shareholders expect returns → pressure to maintain dividends\n• **No tax advantage**: dividends are NOT tax deductible (unlike debt interest)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch09-006', chapter: '11.3', topic: 'Debt and Equity Financing', difficulty: 2,
    front: 'What is the leveraging effect of debt financing?',
    back: `• **Financial leverage**: using debt to amplify returns on equity\n• If borrowed funds earn a return **greater than the interest rate**, profit to equity owners increases\n• Example: borrow at 5%, invest at 10% → equity owners gain the **5% spread** on borrowed amount\n• Leverage works in **both directions**: amplifies losses when returns < interest rate`,
    detail: `Financial leverage is powerful but risky. If a business borrows $1 million at 5% interest and earns 10% on the investment, the profit is $100,000. After paying $50,000 interest, $50,000 flows to equity owners who may have only invested $200,000 — a 25% return on their equity. Without debt, the same $200,000 invested at 10% returns only $20,000 — a 10% return. But if the investment earns only 3%, the business pays 5% interest and makes a net loss on the borrowed portion. This is why high gearing amplifies both gains and losses.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch09-007', chapter: '11.3', topic: 'Debt and Equity Financing', difficulty: 3,
    front: 'Why might a business choose equity over debt during an economic downturn?',
    back: `• Economic downturn → **revenue falls** → debt repayments become harder to meet\n• Insolvency risk increases with high debt levels when cash flow is uncertain\n• Equity has **no fixed repayment obligation** → more financial flexibility in difficult periods\n• Dividends can be reduced; interest cannot → equity is **safer when income is uncertain**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch09-008', chapter: '11.3', topic: 'Debt and Equity Financing', difficulty: 2,
    front: 'What factors influence a business\'s decision to use debt vs equity?',
    back: `• **Cost**: interest rate on debt vs dividend yield on equity\n• **Control**: owner wants to retain control → prefers debt\n• **Risk**: high uncertainty → prefers equity (no fixed repayments)\n• **Tax position**: profitable business with high taxable income → debt tax shield more valuable\n• **Business life stage**: start-up → equity preferred; established business → debt manageable`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch09-009', chapter: '11.3', topic: 'Debt and Equity Financing', difficulty: 1,
    front: 'What does it mean for a business to be "highly geared"?',
    back: `• **Highly geared**: debt represents a large proportion of total capital (high debt-to-equity ratio)\n• Implies: large interest obligations, higher insolvency risk\n• Acceptable in **stable industries** with predictable cash flows (e.g. utilities, property)\n• Dangerous in **volatile industries** (mining, retail) where revenues can fall sharply`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch09-010', chapter: '11.3', topic: 'Debt and Equity Financing', difficulty: 2,
    front: 'What is a "loan covenant" and how does it restrict financial management?',
    back: `• **Loan covenant**: a condition imposed by a lender in the loan agreement\n• Examples: maintain a minimum current ratio, restrict dividends, limit further borrowing\n• If covenant is **breached**, lender can demand immediate repayment or impose penalties\n• Limits financial flexibility — financial manager must **monitor ratios** to avoid breach`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch09-011', chapter: '11.3', topic: 'Debt and Equity Financing', difficulty: 3,
    front: 'How does the capital structure decision affect a business\'s risk and return profile?',
    back: `• **More debt** → higher interest burden → higher financial risk; but potential for higher equity returns via leverage\n• **More equity** → lower risk; but potentially **lower returns** for existing equity holders (profits shared more broadly)\n• Optimal structure: **balances risk and return** given the business's industry, profitability, and cash flow stability\n• No single correct answer — depends on **business-specific circumstances**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch09-q001', chapter: '11.3', topic: 'Debt and Equity Financing', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Gearing refers to:',
    options: [
      { label: 'a', text: 'The speed at which a business converts inventory to cash' },
      { label: 'b', text: 'The proportion of a business\'s finance that comes from debt relative to equity' },
      { label: 'c', text: 'The ratio of current assets to current liabilities' },
      { label: 'd', text: 'The total amount of dividends paid to shareholders in a year' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch09-q002', chapter: '11.3', topic: 'Debt and Equity Financing', type: 'mcq', difficulty: 2, marks: 1,
    question: 'A key advantage of equity financing over debt financing is that:',
    options: [
      { label: 'a', text: 'Equity interest is tax deductible, reducing taxable income' },
      { label: 'b', text: 'Equity does not need to be repaid and dividends are discretionary' },
      { label: 'c', text: 'Equity financing allows the owner to retain complete control of the business' },
      { label: 'd', text: 'Equity is always cheaper than debt because there are no interest payments' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch09-q003', chapter: '11.3', topic: 'Debt and Equity Financing', type: 'mcq', difficulty: 2, marks: 1,
    question: 'The financial leverage effect means that:',
    options: [
      { label: 'a', text: 'Businesses using equity have higher returns because they avoid interest payments' },
      { label: 'b', text: 'Using borrowed funds can amplify returns to equity owners when investment returns exceed the interest rate, but also amplifies losses when they don\'t' },
      { label: 'c', text: 'A higher gearing ratio always leads to higher profit margins' },
      { label: 'd', text: 'Debt financing reduces financial risk by spreading obligations over many creditors' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch09-q004', chapter: '11.3', topic: 'Debt and Equity Financing', type: 'short', difficulty: 3, marks: 8,
    question: 'Discuss the advantages and disadvantages of debt and equity as sources of finance. In your answer, refer to cost, risk, control and the tax treatment of each.',
    keyPoints: [
      'Debt advantages: interest is tax deductible (lowers effective cost); owner retains control; leveraging effect when returns > interest rate',
      'Debt disadvantages: must repay regardless of profit; failure to pay → insolvency; loan covenants restrict financial flexibility',
      'Equity advantages: no repayment obligation; dividends discretionary; improves solvency; reduces insolvency risk',
      'Equity disadvantages: dilutes ownership and control; dividends not tax deductible; shareholders expect returns',
      'Conclusion: choice depends on business stage, industry risk, tax position and desire to retain control',
    ],
    modelAnswer: 'Debt and equity each have distinct advantages and disadvantages across cost, risk, control and tax treatment. Debt finance advantages: interest payments are tax deductible, creating a tax shield that reduces the effective borrowing cost (e.g. at 30% tax, $100,000 interest effectively costs only $70,000). Debt also preserves the owner\'s control — creditors receive interest but not voting rights. The leveraging effect means borrowed funds can amplify equity returns when the business earns more than the interest rate. Debt disadvantages: repayments of principal and interest are legally required regardless of profitability, creating serious cash flow risk. Failure to repay can trigger insolvency and liquidation. Loan covenants may restrict dividends, further borrowing or asset sales, limiting financial flexibility. Equity finance advantages: no repayment obligation means less cash flow pressure. Dividends are discretionary — they can be reduced in difficult periods without triggering default. Equity improves solvency (higher assets relative to liabilities) and is appropriate for uncertain periods. Equity disadvantages: issuing new shares dilutes ownership, giving new shareholders voting rights and a share of profits. Dividends are not tax deductible, making equity more expensive on an after-tax basis. In conclusion, the optimal financing structure balances risk and return given the business\'s circumstances: a stable, profitable business may comfortably carry more debt to benefit from the tax shield, while a business in a volatile industry should favour equity to reduce insolvency risk.',
  },
  {
    id: 'biz-ch09-q005', chapter: '11.3', topic: 'Debt and Equity Financing', type: 'mcq', difficulty: 2, marks: 1,
    question: 'High gearing is most dangerous for a business when:',
    options: [
      { label: 'a', text: 'The business operates in a stable industry with predictable cash flows' },
      { label: 'b', text: 'Revenue falls significantly, making it difficult to service fixed interest obligations' },
      { label: 'c', text: 'The business wants to raise equity through an ASX listing' },
      { label: 'd', text: 'Interest rates fall, reducing the cost of existing variable-rate debt' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch09-q006', chapter: '11.3', topic: 'Debt and Equity Financing', type: 'short', difficulty: 2, marks: 4,
    question: 'Explain why a business owner might prefer debt over equity even though debt carries more risk.',
    keyPoints: [
      'Control: debt preserves the owner\'s full control — creditors have no voting rights or profit share',
      'Tax advantage: interest is tax deductible, lowering the effective cost of debt',
      'Leverage: if investment returns exceed the interest rate, equity owners receive amplified returns',
      'No dilution: the owner keeps 100% of profit after interest is paid; equity sharing reduces the owner\'s share',
    ],
    modelAnswer: 'A business owner might prefer debt over equity for three main reasons. First, control: debt finance gives the lender no ownership stake or voting rights. The owner retains full authority over business decisions, whereas issuing equity shares decision-making with new shareholders. Second, tax efficiency: interest on debt is tax deductible, reducing taxable income and the effective cost of borrowing. Dividends on equity shares are not deductible, making equity more expensive on an after-tax basis. Third, leverage: if the business earns a return on borrowed funds that exceeds the interest rate, the surplus flows entirely to the equity owner, amplifying their return. These advantages mean a confident owner with stable cash flows will often rationally prefer debt — particularly when they want to fund growth without sharing future profits.',
  },
  {
    id: 'biz-ch09-q007', chapter: '11.3', topic: 'Debt and Equity Financing', type: 'mcq', difficulty: 1, marks: 1,
    question: 'A loan covenant that requires a business to maintain a current ratio of at least 1.5 is best described as:',
    options: [
      { label: 'a', text: 'A legal requirement imposed by ASIC on all public companies' },
      { label: 'b', text: 'A condition imposed by the lender to protect against default risk by limiting the borrower\'s financial flexibility' },
      { label: 'c', text: 'A government regulation requiring minimum liquidity standards' },
      { label: 'd', text: 'A voluntary target set by the business\'s board of directors' },
    ],
    correctOption: 'b',
  },
];
