import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch04-001', chapter: '10.2', topic: 'Sources of Finance', difficulty: 1,
    front: 'What are the two main categories of finance sources?',
    back: `• **Internal finance**: generated within the business itself (retained profits)\n• **External finance**: sourced from outside — split into **debt** and **equity**\n• Debt: borrowed funds that must be repaid with interest\n• Equity: ownership funds raised by selling shares or using owner's funds`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-002', chapter: '10.2', topic: 'Sources of Finance', difficulty: 1,
    front: 'What are retained profits and how are they used as a source of finance?',
    back: `• **Retained profits**: profits kept in the business after dividends are paid to shareholders\n• The **cheapest source of finance** — no interest, no dilution of ownership\n• Used for: reinvestment in growth, R&D, technology upgrades, debt repayment\n• Limitation: restricted to **profitable businesses**; not available to start-ups`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-003', chapter: '10.2', topic: 'Sources of Finance', difficulty: 1,
    front: 'What is a bank overdraft and when is it used?',
    back: `• **Overdraft**: agreement allowing a business to withdraw more than its account balance\n• Short-term finance for **day-to-day cash flow gaps** (e.g. payroll before invoices are paid)\n• Interest charged on the **amount overdrawn** only\n• Flexible but typically **higher interest rate** than other forms of debt`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-004', chapter: '10.2', topic: 'Sources of Finance', difficulty: 2,
    front: 'What is a commercial bill and how does it work?',
    back: `• **Commercial bill (bill of exchange)**: short-term debt instrument (typically 30–180 days)\n• A business **borrows a lump sum** now and repays face value at maturity\n• Issued at a **discount** to face value — the discount represents the interest\n• Used for: short-term working capital needs; cheaper than overdraft for larger amounts`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-005', chapter: '10.2', topic: 'Sources of Finance', difficulty: 2,
    front: 'What is factoring and how does it help a business\'s cash flow?',
    back: `• **Factoring**: selling accounts receivable (debtors) to a finance company at a **discount**\n• Business receives **immediate cash** rather than waiting for customers to pay\n• Finance company collects debts from customers → charges a fee (~1–3% of invoice value)\n• Improves **short-term cash flow** but reduces total receivables revenue collected`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-006', chapter: '10.2', topic: 'Sources of Finance', difficulty: 1,
    front: 'What is a mortgage and when is it used as a source of finance?',
    back: `• **Mortgage**: long-term secured loan with **property as collateral**\n• Repaid over 10–30 years with regular principal + interest payments\n• Used to finance: purchase of **land, buildings, commercial property**\n• Lower interest rate than unsecured loans due to security provided by property`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-007', chapter: '10.2', topic: 'Sources of Finance', difficulty: 2,
    front: 'What are debentures and how do they differ from ordinary shares?',
    back: `• **Debentures**: long-term unsecured bonds issued by large public companies\n• Holders are **creditors** (not owners) — paid fixed interest regardless of profit\n• **Priority over shareholders** in receiving payment if the company is liquidated\n• Unlike shares: no ownership stake, no voting rights, fixed interest return`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-008', chapter: '10.2', topic: 'Sources of Finance', difficulty: 2,
    front: 'What are unsecured notes and how do they differ from debentures?',
    back: `• **Unsecured notes**: long-term debt with **no asset pledged as security**\n• Higher **risk for the lender** → typically carries **higher interest rate** than debentures\n• Can only be issued by companies with a strong credit reputation\n• Both debentures and unsecured notes are forms of **corporate bonds**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-009', chapter: '10.2', topic: 'Sources of Finance', difficulty: 2,
    front: 'What is leasing and what are its advantages as a source of finance?',
    back: `• **Leasing**: paying a regular fee to use an asset without purchasing it outright\n• **Operating lease**: short-term; asset returned at end of lease (e.g. car fleet, photocopiers)\n• **Finance lease**: long-term; business assumes most ownership risks and eventual purchase\n• Advantages: **preserves cash**, no large upfront cost, can upgrade assets easily`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-010', chapter: '10.2', topic: 'Sources of Finance', difficulty: 1,
    front: 'What are ordinary shares and how do they raise equity finance?',
    back: `• **Ordinary shares**: units of ownership in a company sold to investors (shareholders)\n• Equity raised by **issuing new shares** through a share float or rights issue\n• Shareholders receive **dividends** (variable, tied to profit) and capital gains\n• Advantage: no obligation to repay → **no interest costs**; improves solvency`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-011', chapter: '10.2', topic: 'Sources of Finance', difficulty: 2,
    front: 'What is private equity and how does it differ from a share float?',
    back: `• **Private equity**: equity finance sourced from private investors (not via stock exchange)\n• Investors provide capital in exchange for **ownership stake** in the business\n• Not traded publicly — company remains **private** (no ASX listing)\n• Used by: start-ups (venture capital), medium businesses wanting growth capital`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-012', chapter: '10.2', topic: 'Sources of Finance', difficulty: 2,
    front: 'What is an IPO (Initial Public Offering) and how does it raise finance?',
    back: `• **IPO**: first sale of shares to the public via the Australian Securities Exchange (ASX)\n• Business becomes a **public company (Ltd)** — shares freely traded on ASX\n• Raises large amounts of equity — **no obligation to repay**\n• Disadvantages: regulatory compliance costs, loss of control, public disclosure requirements`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-013', chapter: '10.2', topic: 'Sources of Finance', difficulty: 3,
    front: 'What are the key differences between debt and equity as sources of external finance?',
    back: `• **Debt**: must be **repaid** with interest; creditor has legal claim if unpaid; maintains ownership\n• **Equity**: no repayment obligation; shareholders are owners and may dilute control\n• **Debt advantage**: tax deductible interest; owner retains control\n• **Equity advantage**: no interest burden; improves solvency ratios; better for high-risk periods`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch04-014', chapter: '10.2', topic: 'Sources of Finance', difficulty: 1,
    front: 'What is trade credit and how does it support working capital?',
    back: `• **Trade credit**: agreement to buy goods/services now and pay later (e.g. 30/60/90 days)\n• Acts as **interest-free short-term finance** — supplier finances the buyer temporarily\n• Improves **working capital** by delaying cash outflows\n• Terms example: "2/10 net 30" = 2% discount if paid within 10 days, else full amount due in 30`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch04-q001', chapter: '10.2', topic: 'Sources of Finance', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Which of the following is an example of internal finance?',
    options: [
      { label: 'a', text: 'Bank overdraft' },
      { label: 'b', text: 'Issuing debentures' },
      { label: 'c', text: 'Retained profits' },
      { label: 'd', text: 'Ordinary share float' },
    ],
    correctOption: 'c',
  },
  {
    id: 'biz-ch04-q002', chapter: '10.2', topic: 'Sources of Finance', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Factoring involves:',
    options: [
      { label: 'a', text: 'Borrowing against the value of property' },
      { label: 'b', text: 'Selling accounts receivable to a finance company at a discount to receive immediate cash' },
      { label: 'c', text: 'Issuing shares to new investors to raise equity' },
      { label: 'd', text: 'Leasing assets rather than purchasing them outright' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch04-q003', chapter: '10.2', topic: 'Sources of Finance', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Which of the following describes a key advantage of using retained profits compared to debt finance?',
    options: [
      { label: 'a', text: 'Retained profits provide larger amounts of finance than debt' },
      { label: 'b', text: 'Retained profits have no interest cost and do not dilute ownership' },
      { label: 'c', text: 'Retained profits are available to all businesses including new start-ups' },
      { label: 'd', text: 'Retained profits improve the debt-to-equity ratio immediately' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch04-q004', chapter: '10.2', topic: 'Sources of Finance', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Debentures differ from ordinary shares because debenture holders:',
    options: [
      { label: 'a', text: 'Receive dividends that vary with company profit' },
      { label: 'b', text: 'Have voting rights at company general meetings' },
      { label: 'c', text: 'Are creditors who receive fixed interest and have priority in liquidation' },
      { label: 'd', text: 'Own a share of the business and benefit from capital gains' },
    ],
    correctOption: 'c',
  },
  {
    id: 'biz-ch04-q005', chapter: '10.2', topic: 'Sources of Finance', type: 'short', difficulty: 3, marks: 6,
    question: 'Compare and contrast debt and equity as sources of external finance. In your answer, refer to cost, risk and control.',
    keyPoints: [
      'Debt: must be repaid with interest — ongoing cost even in unprofitable years; interest is tax deductible',
      'Equity: no repayment or interest obligation — reduces cash flow pressure; dividends are discretionary',
      'Debt risk: failure to repay → creditor legal action → insolvency; gearing risk in downturns',
      'Equity risk: dilutes ownership and control; shareholders expect dividends and capital growth',
      'Control: debt allows owner to retain full control; equity issue gives new shareholders voting rights',
    ],
    modelAnswer: 'Debt and equity are the two main forms of external finance and differ significantly in cost, risk and control. Debt finance (e.g. bank loans, debentures) requires regular interest payments and eventual repayment of principal — an ongoing cash cost regardless of profitability. However, interest is tax deductible, reducing the effective cost. The risk of debt is that failure to meet repayments can result in creditor action and insolvency; this risk rises when revenue falls or interest rates increase. Equity finance (e.g. share issue) carries no repayment obligation, reducing cash flow pressure. Dividends are discretionary — the business can choose not to pay them. However, issuing shares dilutes the existing owners\' control over business decisions, as new shareholders gain voting rights. Equity is generally preferred in periods of uncertainty as it reduces insolvency risk, while debt is preferred when the business wants to retain full control and can confidently service the debt.',
  },
  {
    id: 'biz-ch04-q006', chapter: '10.2', topic: 'Sources of Finance', type: 'mcq', difficulty: 2, marks: 1,
    question: 'A business with strong short-term cash flow gaps but good long-term profitability would most likely use which source of finance?',
    options: [
      { label: 'a', text: 'Mortgage' },
      { label: 'b', text: 'Debentures' },
      { label: 'c', text: 'Ordinary share issue' },
      { label: 'd', text: 'Bank overdraft' },
    ],
    correctOption: 'd',
  },
  {
    id: 'biz-ch04-q007', chapter: '10.2', topic: 'Sources of Finance', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Trade credit is best described as:',
    options: [
      { label: 'a', text: 'Long-term debt secured by commercial property' },
      { label: 'b', text: 'Interest-free short-term finance where a supplier allows delayed payment' },
      { label: 'c', text: 'Selling accounts receivable to a third party at a discount' },
      { label: 'd', text: 'A form of equity raised through issuing new shares to suppliers' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch04-q008', chapter: '10.2', topic: 'Sources of Finance', type: 'short', difficulty: 2, marks: 4,
    question: 'Explain the difference between a mortgage and debentures as sources of long-term finance.',
    keyPoints: [
      'Mortgage: secured loan with property as collateral; used to purchase real estate; repaid over 10–30 years',
      'Debentures: unsecured corporate bonds issued by large public companies; fixed interest over a set term',
      'Mortgage: lower interest rate due to property security; available to most businesses with property',
      'Debentures: no collateral required but only available to large, creditworthy companies; holders are creditors',
    ],
    modelAnswer: 'A mortgage is a long-term secured loan where property is pledged as collateral. It is used specifically to finance the purchase of land, buildings, or commercial property, and is repaid over 10 to 30 years with regular principal and interest instalments. Because it is secured, interest rates are lower than unsecured debt. Debentures are long-term unsecured bonds issued by large public companies to raise capital. Unlike mortgages, no asset is pledged as security. Debenture holders are creditors — they receive fixed interest payments regardless of the company\'s profitability and have priority over shareholders in a liquidation. However, because debentures are unsecured, they typically carry a higher interest rate than mortgages. Only large, established companies with strong credit reputations can issue debentures.',
  },
];
