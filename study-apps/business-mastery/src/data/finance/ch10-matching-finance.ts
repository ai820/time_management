import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch10-001', chapter: '11.4', topic: 'Matching Finance to Purpose', difficulty: 1,
    front: 'What is the "matching principle" in financial management?',
    back: `• The **matching principle**: match the type of finance to the nature and time horizon of the asset or need\n• **Short-term assets** → funded by **short-term finance** (overdraft, trade credit)\n• **Long-term assets** → funded by **long-term finance** (mortgage, shares, debentures)\n• Mismatching creates **cash flow risk** — e.g. funding a 20-year building with a 1-year overdraft`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch10-002', chapter: '11.4', topic: 'Matching Finance to Purpose', difficulty: 2,
    front: 'Why must short-term assets be matched with short-term finance?',
    back: `• Short-term assets (inventory, receivables) **turn into cash quickly** — within 12 months\n• Short-term finance (overdraft, trade credit) is **repaid from the cash flow** those assets generate\n• Example: buy inventory using trade credit → sell inventory → receive cash → repay credit\n• Using long-term finance for short-term assets is **inefficient** — paying interest for longer than needed`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch10-003', chapter: '11.4', topic: 'Matching Finance to Purpose', difficulty: 2,
    front: 'Why must long-term assets be matched with long-term finance?',
    back: `• Long-term assets (property, machinery) generate returns **over many years**\n• Long-term finance (mortgage, debentures, equity) gives the business **time to generate returns** before repaying\n• Using short-term finance for long-term assets creates **refinancing risk** — must repeatedly rollover debt\n• Example: funding a factory with an overdraft → bank demands repayment → factory hasn't earned back its cost yet`,
    detail: `The logic of matching long-term assets with long-term finance is about cash flow alignment. A factory might generate a steady cash return of $200,000 per year, but if it cost $2 million, a business funded it with a 1-year loan would need to refinance $2 million 10 times before the asset had paid for itself. Each refinancing creates risk — if credit conditions tighten or the lender withdraws, the business faces a crisis. A 25-year mortgage aligns repayments with the asset's productive life, making cash flows more predictable and manageable.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch10-004', chapter: '11.4', topic: 'Matching Finance to Purpose', difficulty: 2,
    front: 'Match the following: what finance is appropriate for purchasing inventory?',
    back: `• **Inventory** is a short-term current asset — converts to cash within weeks/months\n• Appropriate finance: **trade credit** (30–90 day supplier terms) or **bank overdraft**\n• Trade credit is preferred — **interest-free** if paid within terms\n• Logic: sell inventory → collect cash → repay supplier before terms expire`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch10-005', chapter: '11.4', topic: 'Matching Finance to Purpose', difficulty: 2,
    front: 'Match the following: what finance is appropriate for purchasing commercial property?',
    back: `• **Commercial property** is a long-term non-current asset — useful life of 20–50 years\n• Appropriate finance: **commercial mortgage** (15–30 year term)\n• Mortgage is secured against the property itself — lower interest rate\n• Long repayment period aligns with the property's income-generating life`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch10-006', chapter: '11.4', topic: 'Matching Finance to Purpose', difficulty: 2,
    front: 'Match the following: what finance is appropriate for day-to-day working capital gaps?',
    back: `• **Working capital gaps**: short-term, temporary mismatches between cash inflows and outflows\n• Appropriate finance: **bank overdraft** — flexible, short-term, charged only on amount used\n• Alternative: **commercial bills** (30–180 day) for slightly larger or more predictable short-term needs\n• NOT appropriate: long-term debt (over-engineering a temporary need)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch10-007', chapter: '11.4', topic: 'Matching Finance to Purpose', difficulty: 2,
    front: 'Match the following: what finance is appropriate for funding a major business expansion?',
    back: `• **Major expansion**: long-term investment in new capacity, markets or technology\n• Appropriate finance: **share issue (equity)** or **long-term debt** (debentures, term loans)\n• Equity preferred if: high risk, wanting to maintain solvency, no obligation to repay\n• Debt preferred if: owner wants to retain control, business has stable cash flows`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch10-008', chapter: '11.4', topic: 'Matching Finance to Purpose', difficulty: 3,
    front: 'What risks arise from mismatching finance to purpose?',
    back: `• **Funding long-term assets with short-term finance**: refinancing risk — must repeatedly renew debt; if bank withdraws → crisis\n• **Funding short-term assets with long-term finance**: inefficient — paying interest for assets already converted to cash\n• Both mismatches increase **cash flow vulnerability** and potentially **reduce solvency**\n• Correct matching = stable, predictable financing that **reduces financial risk**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch10-009', chapter: '11.4', topic: 'Matching Finance to Purpose', difficulty: 1,
    front: 'What is refinancing risk and how does mismatching create it?',
    back: `• **Refinancing risk**: the risk that short-term debt cannot be renewed when it matures\n• If a long-term asset is funded by short-term loans → business must **repeatedly roll over** the loan\n• If credit conditions tighten or lender withdraws → business **cannot repay** and asset is stranded\n• Matching finance to asset duration **eliminates** repeated refinancing needs`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch10-010', chapter: '11.4', topic: 'Matching Finance to Purpose', difficulty: 2,
    front: 'How does leasing represent an application of the matching principle?',
    back: `• **Operating lease**: pays for use of asset over its useful period → no ownership needed\n• Monthly lease payments are matched to the **revenue generated** by using the asset\n• Particularly good for assets that **depreciate rapidly** or become obsolete (computers, vehicles)\n• Avoids mismatching — business pays only for the period of use, not forever`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch10-011', chapter: '11.4', topic: 'Matching Finance to Purpose', difficulty: 2,
    front: 'Provide a summary matching finance type to asset type.',
    back: `• **Overdraft** → day-to-day cash flow gaps (short-term)\n• **Trade credit** → inventory and supplies purchases (short-term)\n• **Factoring** → converting receivables to immediate cash (short-term)\n• **Commercial bill** → short/medium-term working capital (30–180 days)\n• **Mortgage** → commercial property purchase (long-term)\n• **Lease** → use of equipment or vehicles (matched to useful life)\n• **Debentures/unsecured notes** → long-term corporate investment\n• **Share issue** → permanent long-term equity for major expansion`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch10-q001', chapter: '11.4', topic: 'Matching Finance to Purpose', type: 'mcq', difficulty: 1, marks: 1,
    question: 'The matching principle in financial management states that:',
    options: [
      { label: 'a', text: 'Debt and equity should always be used in equal proportions' },
      { label: 'b', text: 'Short-term assets should be financed with short-term finance, and long-term assets with long-term finance' },
      { label: 'c', text: 'Revenue should always exceed expenses by a minimum of 10%' },
      { label: 'd', text: 'All business assets should be financed using equity rather than debt' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch10-q002', chapter: '11.4', topic: 'Matching Finance to Purpose', type: 'mcq', difficulty: 2, marks: 1,
    question: 'A business purchases a new factory (useful life 30 years). Which of the following financing options best applies the matching principle?',
    options: [
      { label: 'a', text: 'Bank overdraft' },
      { label: 'b', text: 'Trade credit from a supplier' },
      { label: 'c', text: 'Commercial mortgage over 25 years' },
      { label: 'd', text: 'Factoring its accounts receivable' },
    ],
    correctOption: 'c',
  },
  {
    id: 'biz-ch10-q003', chapter: '11.4', topic: 'Matching Finance to Purpose', type: 'mcq', difficulty: 2, marks: 1,
    question: 'A business funds its $2 million warehouse with a 12-month bank overdraft. The main risk of this arrangement is:',
    options: [
      { label: 'a', text: 'The business will pay too little interest compared with a mortgage' },
      { label: 'b', text: 'Refinancing risk — if the bank withdraws the overdraft, the business cannot repay it without selling the warehouse' },
      { label: 'c', text: 'The warehouse will depreciate faster due to the short-term financing' },
      { label: 'd', text: 'ASIC will require additional disclosure due to the overdraft structure' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch10-q004', chapter: '11.4', topic: 'Matching Finance to Purpose', type: 'short', difficulty: 3, marks: 6,
    question: 'Explain the principle of "matching finance to purpose" and analyse the risks of failing to apply it. Use specific examples.',
    keyPoints: [
      'Matching principle: align finance duration with the life of the asset or need being funded',
      'Short-term assets (inventory, receivables) generate cash quickly → match with short-term finance (trade credit, overdraft)',
      'Long-term assets (property, equipment) generate returns over years → match with long-term finance (mortgage, equity)',
      'Mismatch 1: funding a factory with overdraft → refinancing risk — bank may not renew; business cannot repay from factory returns in one year',
      'Mismatch 2: funding inventory with a 20-year mortgage → inefficient; paying interest long after the inventory has been sold',
    ],
    modelAnswer: 'The matching principle holds that the type of finance used should align with the nature and duration of the asset or need being funded. Short-term assets, such as inventory or accounts receivable, convert to cash within months — making short-term finance (trade credit, overdraft) appropriate, as repayment will naturally flow from the asset\'s liquidation. Long-term assets, such as commercial property or manufacturing equipment, generate returns over many years — making long-term finance (mortgage, equity) appropriate, as repayment periods are aligned with the income the asset produces. Failing to apply this principle creates two distinct risks. First, funding long-term assets with short-term finance creates refinancing risk. If a business buys a $5 million factory using a 12-month overdraft, it must renew the overdraft every year. If the bank withdraws facilities during a credit crunch, the business cannot repay from the factory\'s annual returns and faces forced asset sales or insolvency. Second, funding short-term assets with long-term finance is inefficient: a business that takes out a 15-year loan to buy inventory that sells within 90 days will pay interest on that debt for 15 years even though the inventory has long been converted to cash. Correct matching ensures repayment aligns with when the asset generates returns — reducing both cash flow risk and unnecessary interest costs.',
  },
  {
    id: 'biz-ch10-q005', chapter: '11.4', topic: 'Matching Finance to Purpose', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Trade credit is best matched to which type of business need?',
    options: [
      { label: 'a', text: 'Purchasing commercial property for a new office' },
      { label: 'b', text: 'Funding a 10-year research and development program' },
      { label: 'c', text: 'Purchasing inventory that will be sold within 60 days' },
      { label: 'd', text: 'Funding a major acquisition of a competitor' },
    ],
    correctOption: 'c',
  },
  {
    id: 'biz-ch10-q006', chapter: '11.4', topic: 'Matching Finance to Purpose', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Leasing a company vehicle fleet best demonstrates the matching principle because:',
    options: [
      { label: 'a', text: 'It removes the vehicles from the balance sheet, improving the current ratio' },
      { label: 'b', text: 'Lease payments are matched to the period of use — the business pays only while using the assets' },
      { label: 'c', text: 'Leasing is the cheapest financing option and minimises interest costs' },
      { label: 'd', text: 'ASIC requires listed companies to lease rather than own vehicle fleets' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch10-q007', chapter: '11.4', topic: 'Matching Finance to Purpose', type: 'short', difficulty: 2, marks: 4,
    question: 'A business is considering two investments: purchasing $50,000 in inventory and purchasing a $500,000 delivery fleet. Explain the most appropriate source of finance for each and why.',
    keyPoints: [
      'Inventory ($50,000, short-term current asset): trade credit or overdraft — inventory will be sold within 30–90 days; repayment flows naturally from sales revenue',
      'Delivery fleet ($500,000, long-term asset, useful life 5–8 years): finance lease or term loan over 5+ years — repayments spread over the productive life of the vehicles',
      'Applying the matching principle: short-term asset → short-term finance; long-term asset → long-term finance',
      'Using overdraft for the fleet creates refinancing risk; using a long-term loan for inventory is costly and inefficient',
    ],
    modelAnswer: 'For the $50,000 inventory purchase, trade credit or a bank overdraft is most appropriate. Inventory is a short-term current asset that will be converted to cash within 30–90 days once sold. Trade credit — 30 to 90 day payment terms from the supplier — aligns perfectly with this timeline: the business receives and sells the inventory, then uses the proceeds to pay the supplier before terms expire. No interest is incurred if paid on time. For the $500,000 delivery fleet, a finance lease or term loan over 5–7 years is most appropriate, matching the vehicles\' productive life. The fleet generates value over years, and spreading repayments over the same period ensures the business is paying for the asset while it is generating returns. Using an overdraft for the fleet would create refinancing risk — the business must renew the overdraft annually, but the vehicles won\'t have generated enough return in one year to repay $500,000. Conversely, using a 7-year loan for inventory would be inefficient: the inventory will be sold in 90 days but interest would accumulate for 7 years on those funds.',
  },
];
