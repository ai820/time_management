import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch03-001', chapter: '4.3', topic: "Financial Flows", difficulty: 2,
    front: "What is foreign direct investment (FDI)?",
    back: "Direct investment is the establishment of a new company OR purchase of 10% or more of an existing company's shares. It is longer-term in nature and the investor intends to play a role in management. Examples from the textbook: a Japanese company building a motorway in Sydney; BHP Billiton sending funds to build a copper mine in Indonesia.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-002', chapter: '4.3', topic: "Financial Flows", difficulty: 2,
    front: "What is portfolio investment?",
    back: "Portfolio investment is the buying of land, shares and other marketable securities in existing companies; loans, other securities, and smaller shareholdings. Investors do NOT intend to play a role in running the business. Portfolio investment is often the largest item on the capital and financial account.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-003', chapter: '4.3', topic: "Financial Flows", difficulty: 2,
    front: "Why did governments historically prefer direct investment over portfolio investment?",
    back: "Before deregulation, governments preferred FDI because it brings job creation and technology transfer — foreign companies bring new technologies, management practices, and employ local workers with long-term commitment. Portfolio investment is more speculative and short-term with fewer direct economic benefits.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-004', chapter: '4.3', topic: "Financial Flows", difficulty: 2,
    front: "How did the composition of financial flows change after deregulation in the 1980s?",
    back: "Before deregulation: direct investment dominated (governments preferred it).\nAfter deregulation (1980s onwards): portfolio investment grew much faster than direct investment and became the dominant form. Deregulation and technology made short-term financial transactions easier and more profitable. Portfolio investment is now growing much faster than long-term FDI.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-005', chapter: '4.3', topic: "Financial Flows", difficulty: 2,
    front: "What caused the rapid growth in Australia's financial flows from the 1970s–1980s?",
    back: "Two key causes:\n1. The Bretton Woods fixed exchange rate system ended in the early 1970s → exchange rates floated → restrictions on capital movement removed → financial flows grew rapidly globally\n2. Australia floated the dollar and deregulated its financial sector in the 1980s → foreign investment inflows grew rapidly; this trend was sustained for four decades",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-006', chapter: '4.3', topic: "Financial Flows", difficulty: 1,
    front: "What was the Bretton Woods system and when did it end?",
    back: "The Bretton Woods system was the international post-WWII system of fixed exchange rates. It ended in the early 1970s. Its end led to exchange rates being floated worldwide and the removal of restrictions on capital movements, initiating the growth of global financial flows.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-007', chapter: '4.3', topic: "Financial Flows", difficulty: 2,
    front: "What does it mean that Australia is a 'net capital importer'?",
    back: "Australia is a net capital importer because foreign investment in Australia is consistently well above the level of Australian investment abroad. In 2019-20: foreign investment in Australia = $3,980,251 million (~$4 trillion); Australian investment abroad = $3,069,660 million (~$3.1 trillion). Australia receives more capital than it sends overseas.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-008', chapter: '4.3', topic: "Financial Flows", difficulty: 2,
    front: "Why is Australia a net capital importer?",
    back: "The fundamental reason is Australia's historically low level of domestic savings. Because domestic savings are insufficient to fund investment needs, Australia must rely on financial flows from overseas to bridge the savings-investment gap. This has been a persistent structural feature of the Australian economy.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-009', chapter: '4.3', topic: "Financial Flows", difficulty: 1,
    front: "What was the total value of foreign investment in Australia in 2019-20?",
    back: "In 2019-20: total foreign investment in Australia = $3,980,251 million (approximately $4 trillion), comprising $1,087,936 million in direct investment and $1,898,068 million in portfolio investment.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-010', chapter: '4.3', topic: "Financial Flows", difficulty: 1,
    front: "What was the total value of Australian investment abroad in 2019-20?",
    back: "In 2019-20: total Australian investment abroad = $3,069,660 million (approximately $3.1 trillion), comprising $862,115 million in direct investment and $1,234,346 million in portfolio investment — roughly three-quarters as much as foreign investment in Australia.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-011', chapter: '4.3', topic: "Financial Flows", difficulty: 2,
    front: "What are financial derivatives and why are they significant?",
    back: "Financial derivatives are a category of complex financial assets whose value is derived from the performance of specific assets, interest rates, exchange rates or indices. They have become increasingly significant in recent years and are recorded as a separate category on the financial account of the balance of payments.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-012', chapter: '4.3', topic: "Financial Flows", difficulty: 2,
    front: "What role do Australian superannuation funds play in financial flows?",
    back: "Australia's large superannuation funds have increasingly pursued investment opportunities overseas as capital markets opened. This has driven significant growth in Australian investment abroad — Australian overseas investment is approximately 6 times what it was in 2000. This growth partially offsets the net capital importer status.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-013', chapter: '4.3', topic: "Financial Flows", difficulty: 3,
    front: "How do financial flows compare in size to trade flows for Australia?",
    back: "Financial flows have grown at a faster rate than trade flows. In 2019-20: total foreign investment in Australia was approximately $4 trillion, while total exports were only $470 billion. Financial flows are roughly 8 times the size of trade flows, illustrating the enormous scale of cross-border capital movements relative to goods and services trade.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-014', chapter: '4.3', topic: "Financial Flows", difficulty: 1,
    front: "What does 'net errors and omissions' represent in the balance of payments?",
    back: "Net errors and omissions represents statistical discrepancies in balance of payments data. Under the floating exchange rate system, the BOP always balances to zero — net errors and omissions is the residual item that ensures the accounts balance.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch03-q001', chapter: '4.3', topic: "Financial Flows", type: 'mcq', difficulty: 2, marks: 1,
    question: "Which of the following is an example of foreign direct investment (FDI) as defined in the textbook?",
    options: [
      { label: 'a', text: 'An Australian superannuation fund buying 3% of shares in a US company' },
      { label: 'b', text: 'A Japanese company building a motorway in Sydney' },
      { label: 'c', text: 'A foreign bank lending money to an Australian mining company' },
      { label: 'd', text: 'A foreign investor buying Australian government bonds' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch03-q002', chapter: '4.3', topic: "Financial Flows", type: 'mcq', difficulty: 2, marks: 1,
    question: "After the deregulation of Australian financial markets in the 1980s, the dominant form of financial inflow became:",
    options: [
      { label: 'a', text: 'Foreign direct investment' },
      { label: 'b', text: 'Reserve asset accumulation' },
      { label: 'c', text: 'Portfolio investment' },
      { label: 'd', text: 'Official development assistance' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch03-q003', chapter: '4.3', topic: "Financial Flows", type: 'mcq', difficulty: 1, marks: 1,
    question: "Australia is a 'net capital importer' primarily because:",
    options: [
      { label: 'a', text: 'Australia has a large trade deficit requiring foreign funding' },
      { label: 'b', text: 'Australian interest rates are always higher than overseas rates' },
      { label: 'c', text: 'Australia has a historically low level of domestic savings relative to investment needs' },
      { label: 'd', text: 'The Australian government borrows heavily from overseas lenders' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch03-q004', chapter: '4.3', topic: "Financial Flows", type: 'short', difficulty: 3, marks: 5,
    question: "Describe how Australia's financial flows have changed since the early 1970s and explain the causes of these changes.",
    keyPoints: [
      "Bretton Woods fixed exchange rate system ended early 1970s → capital restrictions removed → global financial flows grew",
      "Australia floated dollar and deregulated financial sector in 1980s → rapid growth in financial flows",
      "Composition shifted: portfolio investment grew much faster than direct investment; portfolio now dominant",
      "Australia remains a net capital importer (in 2019-20: ~$4 trillion invested in Australia vs ~$3.1 trillion Australian investment abroad)",
      "Growth of superannuation funds increased Australian investment overseas (6x what it was in 2000)",
      "Financial flows now far larger than trade flows",
    ],
    modelAnswer: "Australia's financial flows have grown dramatically since the early 1970s. The collapse of the Bretton Woods fixed exchange rate system in the early 1970s led to floating exchange rates and the removal of restrictions on capital movement globally. Australia then floated its dollar and deregulated its financial sector in the 1980s, causing a sustained four-decade rise in foreign investment inflows. In terms of composition, the change is striking: before deregulation, direct investment dominated because governments preferred it for job creation and technology transfer. After deregulation, portfolio investment grew much faster and became the dominant form of financial flow. In 2019-20, total foreign investment in Australia reached approximately $4 trillion, while Australian investment abroad was approximately $3.1 trillion. Growth in Australian overseas investment has been partly driven by large superannuation funds, which now invest at roughly 6 times their 2000 level overseas.",
  },
  {
    id: 'ch03-q005', chapter: '4.3', topic: "Financial Flows", type: 'short', difficulty: 2, marks: 4,
    question: "Distinguish between direct investment and portfolio investment. Why did portfolio investment grow faster than direct investment after financial deregulation?",
    keyPoints: [
      "Direct investment: establishing or buying ≥10% of a company; investor intends to manage; long-term",
      "Portfolio investment: buying land, shares (<10%), securities, loans; investor does not manage; often short-term",
      "After deregulation: removal of capital restrictions + technology made portfolio transactions easier and cheaper",
      "Speculators and institutional investors prefer portfolio for liquidity and flexibility",
      "Direct investment requires physical presence and commitment; slower to respond to opportunities",
    ],
    modelAnswer: "Direct investment involves establishing a new company or purchasing 10% or more of an existing company's shares, with the investor intending to play a management role — it is long-term in nature. Portfolio investment covers the buying of land, shares in smaller stakes, and other marketable securities, where investors have no intention of managing the business — it is typically more short-term. After financial deregulation in the 1980s, portfolio investment grew much faster for two reasons: first, the removal of restrictions on capital movement and advances in technology made it far easier and cheaper to execute large financial transactions across borders rapidly; second, institutional investors such as superannuation funds and investment banks find portfolio investment more flexible and liquid than direct investment, which requires physical presence and long-term commitment.",
  },
];
