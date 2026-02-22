import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch04-001', chapter: '2.4', topic: 'Current Account', difficulty: 1,
    front: "What is the Balance of Payments (BOP)?",
    back: "The BOP is the record of ALL transactions between Australia and the rest of the world during a given period (usually one year). It consists of two accounts:\n1. Current Account — trade in goods, services, income and transfers\n2. Capital and Financial Account — financial asset transactions",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-002', chapter: '2.4', topic: 'Current Account', difficulty: 1,
    front: "What is a 'credit' on the BOP? What is a 'debit'?",
    back: "Credit (+): Money flowing INTO Australia — inflow. Examples: export revenue, foreign investment income credits, capital inflows.\nDebit (–): Money flowing OUT of Australia — outflow. Examples: import payments, interest paid on foreign debt, dividends paid to overseas investors.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-003', chapter: '2.4', topic: 'Current Account', difficulty: 1,
    front: "What is the Current Account?",
    back: "The part of the BOP that records all NON-REVERSIBLE transactions:\n• Net Goods (merchandise trade)\n• Net Services\n• Net Primary Income (investment returns)\n• Net Secondary Income (transfers)\nThese transactions cannot be undone — exports are made, services rendered, income earned.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-004', chapter: '2.4', topic: 'Current Account', difficulty: 1,
    front: "What is 'Net Goods' on the current account?",
    back: "Net Goods = Export revenue from goods (credits) MINUS Import payments for goods (debits)\nAlso called the Balance on Merchandise Trade.\nIn 2019–20: Net Goods = $382.6bn – $312.1bn = +$70.5bn surplus.\nA surplus means Australia earned more from goods exports than it spent on goods imports.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-005', chapter: '2.4', topic: 'Current Account', difficulty: 1,
    front: "What is the Balance on Goods and Services (BOGS)?",
    back: "BOGS = Net Goods + Net Services\nThe BOGS is the 'cyclical' component of the current account — it rises and falls with economic activity.\nIn 2019–20: BOGS = +$70.5bn + $6.9bn = +$77.4bn surplus.\nA BOGS surplus means Australia earned more from exports of goods and services than it spent on imports.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-006', chapter: '2.4', topic: 'Current Account', difficulty: 2,
    front: "What is 'Net Primary Income'?",
    back: "Net Primary Income = Income earned on investments from a factor of production:\n• Interest on foreign debt\n• Profits from foreign-owned companies in Australia\n• Dividends, rent on foreign-owned assets\nTypically a large DEFICIT for Australia because more foreign investment in Australia means more income flows OUT (debits) than comes in.\n2019–20: Net Primary Income = –$40.2bn deficit.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-007', chapter: '2.4', topic: 'Current Account', difficulty: 2,
    front: "What is 'Net Secondary Income'?",
    back: "Net Secondary Income = Non-market transfers — income NOT earned from a factor of production:\n• Workers' remittances (foreigners sending money home)\n• Unconditional foreign aid given to developing nations\n• Insurance payouts from overseas\n• Pensions received from foreign governments\nThis is a small account. In 2019–20: –$1.4bn.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-008', chapter: '2.4', topic: 'Current Account', difficulty: 1,
    front: "Write the equation for the Balance on Current Account.",
    back: "Balance on Current Account = BOGS + Net Primary Income + Net Secondary Income\n\nOr expanded:\n= (Net Goods + Net Services) + Net Primary Income + Net Secondary Income\n\n2019–20 example:\n= $77.4bn + (–$40.2bn) + (–$1.4bn) = +$35.8bn (surplus)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-009', chapter: '2.4', topic: 'Current Account', difficulty: 1,
    front: "What is a Current Account Deficit (CAD)?",
    back: "A CAD occurs when the financial OUTFLOWS on the current account (e.g. import payments, income paid to foreigners) EXCEED the financial INFLOWS (e.g. export revenue). The CAD must be financed by a surplus on the Capital and Financial Account — i.e. by borrowing from overseas or selling assets to foreigners.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-010', chapter: '2.4', topic: 'Current Account', difficulty: 2,
    front: "Where is Australia's Current Account primarily explained and what are its historic trends?",
    back: "The CAD is measured as % of GDP for comparison.\n• 1970s avg: 1.1% of GDP\n• 1980s avg: 4.0% of GDP\n• 1990s avg: 4.1% of GDP\n• 2000s avg: 4.9% of GDP\n• 2010s avg: 2.5% of GDP\n• 2019–20: First Current Account SURPLUS since 1973 (+$35.8bn)\nThe 'sustainable' range is typically considered 2–4% of GDP; 6%+ is seen as unsustainable.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-011', chapter: '2.4', topic: 'Current Account', difficulty: 3,
    front: "Classify each transaction as Net Goods, Net Services, Net Primary Income, or Net Secondary Income AND credit or debit:\n\n(a) Australia exports iron ore to China\n(b) A foreign investor receives dividends from an Australian company\n(c) Australia imports a Japanese TV\n(d) A Malaysian student pays tuition at an Australian university",
    back: "(a) Net Goods — CREDIT (export revenue flows into Australia)\n(b) Net Primary Income — DEBIT (income flows out to foreign investor)\n(c) Net Goods — DEBIT (import payment flows out of Australia)\n(d) Net Services — CREDIT (education service sold to overseas student; money flows into Australia)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch04-012', chapter: '2.4', topic: 'Current Account', difficulty: 3,
    front: "Why does Australia typically record a Net Primary Income deficit?",
    back: "Australia is a net capital importer — there is more foreign investment in Australia than Australian investment overseas. Foreign investors own Australian assets (shares, property, companies) and lend money to Australia. As a result:\n• Interest on foreign debt flows OUT (debit)\n• Profits, dividends on foreign equity flow OUT (debit)\n• These outflows typically exceed income Australia earns on its smaller overseas investments\n→ Persistent Net Primary Income deficit (structural component of CAD)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch04-q001', chapter: '2.4', topic: 'Current Account', type: 'mcq', difficulty: 2, marks: 1,
    question: "Using the data: Net Goods = +$5bn, Net Services = –$10bn, Net Primary Income = –$20bn, Net Secondary Income = –$2bn. The balance on the current account is:",
    options: [
      { label: 'a', text: 'A deficit of $5bn' },
      { label: 'b', text: 'A deficit of $27bn' },
      { label: 'c', text: 'A surplus of $5bn' },
      { label: 'd', text: 'A deficit of $15bn' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch04-q002', chapter: '2.4', topic: 'Current Account', type: 'mcq', difficulty: 2, marks: 1,
    question: "An Australian company pays interest on a loan from a Japanese bank. This would be recorded as a:",
    options: [
      { label: 'a', text: 'Credit on Net Services' },
      { label: 'b', text: 'Debit on Net Primary Income' },
      { label: 'c', text: 'Credit on Net Secondary Income' },
      { label: 'd', text: 'Debit on Net Goods' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch04-q003', chapter: '2.4', topic: 'Current Account', type: 'mcq', difficulty: 2, marks: 1,
    question: "Australia provides unconditional foreign aid to an African nation. This is recorded as a:",
    options: [
      { label: 'a', text: 'Credit on Net Primary Income' },
      { label: 'b', text: 'Debit on Net Secondary Income' },
      { label: 'c', text: 'Debit on Net Services' },
      { label: 'd', text: 'Debit on Net Goods' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch04-q004', chapter: '2.4', topic: 'Current Account', type: 'short', difficulty: 3, marks: 5,
    question: "Outline what it means if Australia has a 'Current Account Deficit' and explain why Australia typically has a Net Primary Income deficit.",
    keyPoints: [
      "CAD = outflows on current account exceed inflows (imports + income debits > exports + income credits)",
      "Must be financed by KFA surplus (borrowing / selling assets to foreigners)",
      "Net Primary Income deficit = more income flows out (interest, dividends, profits to foreign investors) than flows in",
      "Australia is a net capital importer → more foreign investment in Australia than vice versa",
      "Foreign investors earn returns (interest, dividends) that flow out as debits",
      "This is a structural component of the CAD — persistent",
    ],
    modelAnswer: "A Current Account Deficit (CAD) occurs when the total financial outflows on the current account — such as import payments, interest on foreign debt and dividends to foreign investors — exceed the total financial inflows from export revenue and investment income received from overseas. The CAD must be financed by a surplus on the Capital and Financial Account, meaning Australia must either borrow from overseas or sell assets to foreigners.\n\nAustralia typically has a Net Primary Income deficit because it is a net capital importer — there is significantly more foreign investment in Australia than Australian investment abroad. Foreign investors who own Australian assets (shares, property, companies) or lend to Australian businesses receive returns in the form of interest, dividends, and profits. These income payments flow out of Australia as debits on the Net Primary Income account, typically exceeding the income Australians earn from their smaller overseas investments, resulting in a persistent deficit.",
  },
];
