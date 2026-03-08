import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch04-001', chapter: '4.4', topic: "Balance of Payments", difficulty: 1,
    front: "What is the balance of payments (BOP)?",
    back: "The balance of payments is the record of all transactions between Australia and the rest of the world over a given period. It is regarded as the single most important economic indicator of the relationship between Australia and the global economy. It consists of the current account and the capital and financial account.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-002', chapter: '4.4', topic: "Balance of Payments", difficulty: 1,
    front: "What is the difference between a credit (inflow) and a debit (outflow) in the BOP?",
    back: "An inflow = credit (positive entry): money flows into Australia (e.g. export of goods, foreign investment in Australia).\nAn outflow = debit (negative entry): money flows out of Australia (e.g. import of goods, Australian investment overseas, interest payments to foreign lenders).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-003', chapter: '4.4', topic: "Balance of Payments", difficulty: 1,
    front: "What does the current account record?",
    back: "The current account records money flows from all exports and imports of goods and services, income flows, and non-market transfers for one year. These are 'non-reversible' transactions — once commenced, they cannot be undone. It has four components: net goods, net services, net primary income, and net secondary income.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-004', chapter: '4.4', topic: "Balance of Payments", difficulty: 2,
    front: "What is the Balance on Goods and Services (BOGS) and what was it in 2019-20?",
    back: "BOGS = Net goods + Net services.\nIn 2019-20:\n• Exports of goods: $382.6bn; imports: -$312.1bn → Net goods: +$70.5bn surplus\n• Service credits: $94.0bn; debits: -$87.1bn → Net services: +$6.9bn\n• BOGS = $77.4bn surplus (2019-20)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-005', chapter: '4.4', topic: "Balance of Payments", difficulty: 2,
    front: "What is net primary income (NPY) and what was it in 2019-20?",
    back: "Net primary income records earnings on investments: interest payments on borrowings and returns on foreign equity (rents, profits, dividends).\nIn 2019-20: credits $69.0bn, debits -$109.2bn → NPY deficit = -$40.2bn.\nAustralia consistently runs a deficit on NPY because it is a net capital importer — more is paid out to foreign investors than received from overseas investments.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-006', chapter: '4.4', topic: "Balance of Payments", difficulty: 1,
    front: "What is net secondary income (NSY)?",
    back: "Net secondary income records non-market transfers — transactions with no corresponding economic value received in return. Examples: workers' remittances, unconditional foreign aid, insurance claims, pensions from foreign governments.\nIn 2019-20: NSY = -$1.4bn (small deficit).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-007', chapter: '4.4', topic: "Balance of Payments", difficulty: 2,
    front: "What was the balance on current account in 2019-20 and why was it significant?",
    back: "In 2019-20, Australia recorded a current account SURPLUS of +$35.8bn (+1.8% of GDP). This was the first current account surplus since 1973 — a landmark result after nearly five decades of persistent deficits.\nFormula: BOGS ($77.4bn) + NPY (-$40.2bn) + NSY (-$1.4bn) = +$35.8bn",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
    },
  {
    id: 'ch04-008', chapter: '4.4', topic: "Balance of Payments", difficulty: 2,
    front: "What does the capital and financial account record?",
    back: "The capital and financial account records borrowing, lending, sales and purchases of assets. These transactions ARE reversible — borrowings can be repaid and assets that are sold can be bought back. It consists of the capital account (capital transfers and non-produced non-financial assets) and the financial account (direct investment, portfolio investment, financial derivatives, reserve assets, and other investment).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-009', chapter: '4.4', topic: "Balance of Payments", difficulty: 2,
    front: "What are the five components of the financial account and what were their 2019-20 values?",
    back: "1. Direct investment: +$27.6bn surplus\n2. Portfolio investment: -$29.7bn deficit (Australian portfolio overseas > foreign portfolio in Australia)\n3. Financial derivatives: +$4.8bn\n4. Reserve assets: +$18.5bn (foreign assets controlled by RBA for managing payment imbalances)\n5. Other investment (residual — trade credits, loans, deposits): -$55.8bn\nTotal financial account: -$34.6bn",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-010', chapter: '4.4', topic: "Balance of Payments", difficulty: 1,
    front: "What are reserve assets in the financial account?",
    back: "Reserve assets are foreign financial assets available to and controlled by central authorities (the RBA) for financing or regulating payment imbalances. They include monetary gold, Special Drawing Rights (SDRs), IMF reserve positions, and foreign exchange held by the RBA. In 2019-20: +$18.5bn.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-011', chapter: '4.4', topic: "Balance of Payments", difficulty: 2,
    front: "What is the capital account in the BOP and what does it contain?",
    back: "The capital account (a sub-component of the capital and financial account) contains two items:\n1. Capital transfers: conditional foreign aid grants linked to specific capital projects; debt forgiveness\n2. Non-produced non-financial assets: mainly intellectual property rights (patents, copyrights, trademarks, franchises)\nIn 2019-20: total capital account = -$1.1bn.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-012', chapter: '4.4', topic: "Balance of Payments", difficulty: 3,
    front: "Why must the balance of payments always equal zero under a floating exchange rate?",
    back: "Under a floating exchange rate system, the exchange rate automatically adjusts to equilibrate supply and demand for a currency. If there is a current account deficit, there must be a corresponding capital and financial account surplus (net capital inflow) to balance it. Any remaining statistical discrepancy is captured by 'net errors and omissions'. Therefore: CA + KFA + net errors and omissions = 0.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-013', chapter: '4.4', topic: "Balance of Payments", difficulty: 3,
    front: "How are the current account and capital and financial account linked?",
    back: "A current account deficit (CAD) must be matched by a capital and financial account surplus (KFA surplus) — they must balance under the floating exchange rate.\nMechanism: Australia borrows from or sells assets to overseas investors (KFA credit) → these investors receive interest or dividends → recorded as debits on net primary income (current account). Over time, high KFA surpluses → wider CAD (via growing servicing costs). A 'debt trap' occurs if Australia borrows merely to pay interest on existing foreign debt.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-014', chapter: '4.4', topic: "Balance of Payments", difficulty: 3,
    front: "What is the savings-investment perspective on the current account deficit?",
    back: "Australia's historically low savings level means it must attract large financial inflows on the financial account to fund investment. This savings-investment gap is a key cause of the CAD — not just a trade imbalance (BOGS) problem. Mid-1980s to mid-1990s, economists focused on lack of international competitiveness (BOGS) → microeconomic reforms. More recently, economists focus on the savings-investment gap as the fundamental structural cause.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-015', chapter: '4.4', topic: "Balance of Payments", difficulty: 1,
    front: "State the BOP formula.",
    back: "BOP = Current Account (CA) + Capital and Financial Account (KFA) + Net errors and omissions = 0\n\nCurrent account = (Net goods + Net services) + Net primary income + Net secondary income\nCapital and financial account = capital account + direct investment + portfolio investment + other investment + reserve assets + financial derivatives",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch04-q001', chapter: '4.4', topic: "Balance of Payments", type: 'mcq', difficulty: 1, marks: 1,
    question: "The balance of payments always equals zero under a floating exchange rate because:",
    options: [
      { label: 'a', text: 'The government ensures equal exports and imports each year' },
      { label: 'b', text: 'A current account deficit is automatically offset by a capital and financial account surplus' },
      { label: 'c', text: 'The RBA uses reserve assets to fill any gaps' },
      { label: 'd', text: 'Net errors and omissions are always positive' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch04-q002', chapter: '4.4', topic: "Balance of Payments", type: 'mcq', difficulty: 2, marks: 1,
    question: "In 2019-20, Australia's current account balance was:",
    options: [
      { label: 'a', text: 'A deficit of $35.8 billion' },
      { label: 'b', text: 'A surplus of $77.4 billion' },
      { label: 'c', text: 'A surplus of $35.8 billion — the first surplus since 1973' },
      { label: 'd', text: 'A deficit of $40.2 billion' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch04-q003', chapter: '4.4', topic: "Balance of Payments", type: 'mcq', difficulty: 2, marks: 1,
    question: "Which of the following is recorded as a DEBIT on the current account?",
    options: [
      { label: 'a', text: 'An Australian company exporting iron ore to China' },
      { label: 'b', text: 'Interest paid to foreign lenders on Australia\'s foreign debt' },
      { label: 'c', text: 'A foreign company purchasing a stake in an Australian mine' },
      { label: 'd', text: 'An international student paying fees to an Australian university' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch04-q004', chapter: '4.4', topic: "Balance of Payments", type: 'short', difficulty: 3, marks: 6,
    question: "Explain the relationship between the current account and the capital and financial account, and describe the 'debt trap' mechanism.",
    keyPoints: [
      "CA deficit must be matched by KFA surplus — they must balance under floating exchange rate",
      "Australia borrows from overseas (KFA credit) to finance CAD",
      "Interest and dividend payments on these liabilities are recorded as debits on NPY (current account)",
      "Over time, growing foreign liabilities → larger NPY debits → wider CAD",
      "Debt trap: economy borrows merely to pay interest-servicing costs on existing foreign debt",
      "Savings-investment gap is the fundamental cause — low domestic savings must be supplemented by overseas borrowing",
    ],
    modelAnswer: "The current account (CA) and capital and financial account (KFA) must always balance to zero under a floating exchange rate. When Australia runs a current account deficit, it must attract a corresponding capital and financial account surplus — i.e. foreign capital must flow in to fund the shortfall. This occurs through borrowing from overseas lenders or selling equity stakes in Australian assets. The linkage works in both directions: the initial KFA surplus creates future CA debits because foreign debt requires ongoing interest payments, and foreign equity generates dividend outflows, both of which are recorded as debits on the net primary income account, widening the current account deficit further. This can create a 'debt trap': if Australia's foreign liabilities grow large enough, it may need to borrow overseas merely to cover the interest-servicing costs on its existing foreign debt, creating a self-reinforcing cycle. The fundamental cause is Australia's historically low domestic savings — insufficient savings to meet domestic investment needs forces reliance on foreign capital inflows.",
  },
  {
    id: 'ch04-q005', chapter: '4.4', topic: "Balance of Payments", type: 'short', difficulty: 2, marks: 4,
    question: "Outline the four components of the current account and explain why Australia consistently recorded a deficit on net primary income.",
    keyPoints: [
      "Net goods: exports minus imports of goods (2019-20: +$70.5bn surplus)",
      "Net services: services bought/sold including tourism, transport, education (2019-20: +$6.9bn)",
      "Net primary income: earnings on investments — interest, dividends, rent (2019-20: -$40.2bn deficit)",
      "Net secondary income: non-market transfers — remittances, unconditional aid (2019-20: -$1.4bn)",
      "NPY deficit because Australia is a net capital importer → more paid out in interest/dividends to foreign investors than received from Australian overseas investments",
    ],
    modelAnswer: "The current account has four components. Net goods (exports minus imports of goods) recorded a surplus of $70.5 billion in 2019-20. Net services (transport, tourism, education, insurance) recorded a surplus of $6.9 billion. Net primary income records earnings on investments — interest payments on borrowings and returns on foreign equity — and recorded a deficit of $40.2 billion. Net secondary income covers non-market transfers such as workers' remittances and unconditional foreign aid, recording a deficit of $1.4 billion. Australia consistently records a deficit on net primary income because it is a net capital importer: the stock of foreign investment in Australia ($4 trillion) substantially exceeds Australian investment abroad ($3.1 trillion). The interest and dividend payments on these foreign liabilities flow out as debits, consistently outweighing the income received from Australia's smaller overseas investment portfolio.",
  },
];
