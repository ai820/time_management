import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch04-001', chapter: '4.4', topic: "Balance of Payments", difficulty: 1,
    front: "What is the balance of payments (BOP)?",
    back: `• **BOP** = record of ALL transactions between Australia and the rest of the world over a given period\n• Regarded as the **single most important economic indicator** of Australia's global relationship\n• Consists of the **current account** and the **capital and financial account**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-002', chapter: '4.4', topic: "Balance of Payments", difficulty: 1,
    front: "What is the difference between a credit (inflow) and a debit (outflow) in the BOP?",
    back: `• **Inflow = credit** (positive entry): money flows **into** Australia\n• Examples: export of goods, foreign investment in Australia\n• **Outflow = debit** (negative entry): money flows **out of** Australia\n• Examples: import of goods, Australian investment overseas, interest payments to foreign lenders`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-003', chapter: '4.4', topic: "Balance of Payments", difficulty: 1,
    front: "What does the current account record?",
    back: `• Records money flows from all **exports and imports of goods and services**, income flows, and non-market transfers for **one year**\n• These are **'non-reversible' transactions** — once commenced, cannot be undone\n• Four components: **net goods, net services, net primary income, net secondary income**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-004', chapter: '4.4', topic: "Balance of Payments", difficulty: 2,
    front: "What is the Balance on Goods and Services (BOGS) and what was it in 2019-20?",
    back: `• **BOGS** = Net goods + Net services\n• 2019-20: Goods exports **$382.6bn**; imports **-$312.1bn** → **Net goods: +$70.5bn surplus**\n• Service credits **$94.0bn**; debits **-$87.1bn** → **Net services: +$6.9bn**\n• **BOGS = $77.4bn surplus** (2019-20) — highest on record`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-005', chapter: '4.4', topic: "Balance of Payments", difficulty: 2,
    front: "What is net primary income (NPY) and what was it in 2019-20?",
    back: `• **NPY** = earnings on investments: **interest** on borrowings + **returns on foreign equity** (rents, profits, dividends)\n• 2019-20: credits **$69.0bn**, debits **-$109.2bn** → **NPY deficit = -$40.2bn**\n• Australia consistently runs a **deficit on NPY** because it is a net capital importer\n• More paid out to foreign investors than received from overseas investments`,
    detail: `Australia persistently records an NPY deficit because the stock of foreign investment in Australia (~$4 trillion) substantially exceeds Australian investment abroad (~$3.1 trillion). The interest payments on foreign debt and dividends paid to foreign equity holders consistently outweigh the income Australia earns from its smaller overseas investment portfolio. This structural NPY deficit means that even when the BOGS improves, the current account can still show a deficit.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-006', chapter: '4.4', topic: "Balance of Payments", difficulty: 1,
    front: "What is net secondary income (NSY)?",
    back: `• **NSY** = non-market transfers — transactions with **no corresponding economic value** received in return\n• Examples: workers' **remittances**, unconditional **foreign aid**, insurance claims, pensions from foreign governments\n• 2019-20: NSY = **-$1.4bn** (small deficit)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-007', chapter: '4.4', topic: "Balance of Payments", difficulty: 2,
    front: "What was the balance on current account in 2019-20 and why was it significant?",
    back: `• In 2019-20, Australia recorded a current account **SURPLUS of +$35.8bn** (+1.8% of GDP)\n• **First current account surplus since 1973** — a landmark after nearly five decades of deficits\n• Formula: **BOGS ($77.4bn) + NPY (-$40.2bn) + NSY (-$1.4bn) = +$35.8bn**`,
    detail: `The 2019-20 surplus was driven primarily by the record BOGS surplus of $77.4bn, itself reflecting high iron ore prices and weaker import spending. The NPY deficit of $40.2bn partially offset the BOGS surplus. Achieving a surplus for the first time since 1973 was economically significant — it demonstrated that the structural CAD, while persistent, can be overcome when commodity prices are sufficiently high and import demand is subdued.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-008', chapter: '4.4', topic: "Balance of Payments", difficulty: 2,
    front: "What does the capital and financial account record?",
    back: `• Records **borrowing, lending, sales and purchases of assets**\n• These transactions ARE **reversible** — borrowings can be repaid, assets resold\n• Consists of the **capital account** and the **financial account**\n• Financial account: direct investment, portfolio investment, derivatives, reserve assets, other investment`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-009', chapter: '4.4', topic: "Balance of Payments", difficulty: 2,
    front: "What are the five components of the financial account and what were their 2019-20 values?",
    back: `• **Direct investment**: +$27.6bn surplus\n• **Portfolio investment**: -$29.7bn deficit\n• **Financial derivatives**: +$4.8bn\n• **Reserve assets**: +$18.5bn (foreign assets controlled by RBA)\n• **Other investment** (trade credits, loans, deposits): -$55.8bn\n• **Total financial account**: -$34.6bn`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-010', chapter: '4.4', topic: "Balance of Payments", difficulty: 1,
    front: "What are reserve assets in the financial account?",
    back: `• **Reserve assets** = foreign financial assets available to and controlled by the **RBA**\n• Used for **financing or regulating payment imbalances**\n• Include: **monetary gold, SDRs, IMF reserve positions, foreign exchange** held by RBA\n• In 2019-20: **+$18.5bn**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-011', chapter: '4.4', topic: "Balance of Payments", difficulty: 2,
    front: "What is the capital account in the BOP and what does it contain?",
    back: `• **Capital account** (sub-component of KFA) contains two items:\n• **Capital transfers**: conditional foreign aid grants linked to capital projects; debt forgiveness\n• **Non-produced non-financial assets**: mainly intellectual property rights (patents, copyrights, trademarks, franchises)\n• In 2019-20: total capital account = **-$1.1bn**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-012', chapter: '4.4', topic: "Balance of Payments", difficulty: 3,
    front: "Why must the balance of payments always equal zero under a floating exchange rate?",
    back: `• Under a floating exchange rate, the exchange rate **automatically adjusts** to equilibrate supply and demand for the currency\n• A CA deficit → must be matched by a **corresponding KFA surplus** (net capital inflow)\n• Any remaining statistical discrepancy → captured by **'net errors and omissions'**\n• Therefore: **CA + KFA + net errors and omissions = 0**`,
    detail: `The BOP identity is not just an accounting rule — it reflects how floating exchange rates work. If Australia imports more than it exports (CA deficit), Australians are selling more A$ than foreigners are buying for trade purposes. The exchange rate adjusts downward until either exports increase, imports decrease, or foreign investors are attracted to buy Australian assets (KFA inflow). The system self-corrects, ensuring the BOP always balances at zero.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-013', chapter: '4.4', topic: "Balance of Payments", difficulty: 3,
    front: "How are the current account and capital and financial account linked?",
    back: `• A **CA deficit** must be matched by a **KFA surplus** — they must balance under the floating exchange rate\n• Australia borrows from or sells assets to overseas investors (KFA credit) → investors receive interest or dividends → recorded as debits on **NPY** (current account)\n• Over time, high KFA surpluses → **wider CAD** (via growing servicing costs)\n• **'Debt trap'**: if Australia borrows merely to pay interest on existing foreign debt`,
    detail: `The link between the CA and KFA works in both directions. A CA deficit requires a matching KFA surplus to finance it — Australia must attract foreign capital. But those foreign liabilities generate ongoing outflows (interest, dividends) recorded as NPY debits on the current account, potentially widening the future CAD. If foreign borrowing grows faster than export revenues, Australia may eventually need to borrow merely to service existing debts — the "debt trap." Australia's compulsory superannuation system was partly designed to increase national savings and reduce this dependence on foreign capital.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-014', chapter: '4.4', topic: "Balance of Payments", difficulty: 3,
    front: "What is the savings-investment perspective on the current account deficit?",
    back: `• Australia's **historically low savings** → must attract large financial inflows on the KFA to fund investment\n• This **savings-investment gap** is a key cause of the CAD — not just a trade imbalance (BOGS) problem\n• Mid-1980s to mid-1990s: economists focused on **lack of international competitiveness** (BOGS) → microeconomic reforms\n• More recently: economists focus on the **savings-investment gap** as the fundamental structural cause`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-015', chapter: '4.4', topic: "Balance of Payments", difficulty: 1,
    front: "State the BOP formula.",
    back: `• **BOP = CA + KFA + Net errors and omissions = 0**\n• **Current account** = (Net goods + Net services) + Net primary income + Net secondary income\n• **Capital and financial account** = capital account + direct investment + portfolio investment + other investment + reserve assets + financial derivatives`,
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
