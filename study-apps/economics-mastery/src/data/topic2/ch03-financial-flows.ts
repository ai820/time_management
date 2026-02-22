import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch03-001', chapter: '2.3', topic: 'Financial Flows', difficulty: 2,
    front: "What is Foreign Direct Investment (FDI)?",
    back: "FDI involves the purchase of assets (land, buildings, companies) or ≥10% of shares in an existing company with the intention of playing a role in management/control. It is long-term in nature. Examples: IBM building a new factory in Melbourne; a Japanese company building a motorway in Sydney.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-002', chapter: '2.3', topic: 'Financial Flows', difficulty: 2,
    front: "What is portfolio investment?",
    back: "Portfolio investment refers to shorter-term financial investments: loans, other securities, and shareholdings of <10% in companies. Investors generally do not intend to play a role in management. Examples: buying shares on the ASX, lending money to an Australian company. Recorded on the Financial Account of the BOP.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-003', chapter: '2.3', topic: 'Financial Flows', difficulty: 2,
    front: "What does it mean that Australia is a 'net capital importer'?",
    back: "Australia receives MORE foreign investment (capital inflows) than it invests overseas (capital outflows). In 2019–20: ~$4 trillion invested in Australia vs. ~$3.1 trillion invested overseas by Australians. This has been a persistent feature reflecting low domestic savings and high investment demand.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-004', chapter: '2.3', topic: 'Financial Flows', difficulty: 2,
    front: "Why is Australia a net capital importer?",
    back: "1. Historically low domestic savings rate relative to investment demand\n2. Small population → limited domestic savings pool\n3. High standards of living requiring significant investment in infrastructure\n4. Lucrative investment opportunities (e.g. mining boom)\n5. Australia must attract foreign capital to fund the gap between savings and investment",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-005', chapter: '2.3', topic: 'Financial Flows', difficulty: 2,
    front: "What caused the rapid growth in Australia's financial flows from the 1980s?",
    back: "1. Deregulation of financial markets (early 1980s) — removal of restrictions on capital flows\n2. Floating of the Australian dollar in 1983 — enabled greater financial market integration\n3. Technological improvements — enabled instantaneous large-scale movements of funds\n4. End of the Bretton Woods fixed exchange rate system (early 1970s) → capital could flow more freely",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-006', chapter: '2.3', topic: 'Financial Flows', difficulty: 3,
    front: "What happened to the composition of financial flows (direct vs portfolio) after deregulation?",
    back: "Before deregulation: direct investment dominated (governments preferred it for job creation and technology transfer).\nAfter deregulation (1980s onwards): portfolio investment grew much faster than direct investment and became the dominant form of financial flow. This is because deregulation and technology made short-term financial transactions easier and more profitable.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-007', chapter: '2.3', topic: 'Financial Flows', difficulty: 2,
    front: "Why did governments historically prefer direct investment over portfolio investment?",
    back: "Governments preferred FDI because it brings:\n• Job creation — new factories, businesses employ local workers\n• Technology transfer — foreign companies bring new technologies and management practices\n• Long-term commitment to the economy\nPortfolio investment is more speculative and short-term with fewer of these economic benefits.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-008', chapter: '2.3', topic: 'Financial Flows', difficulty: 1,
    front: "What is the Bretton Woods system?",
    back: "The Bretton Woods system was the international post-WWII system of fixed exchange rates. It ended in the early 1970s. Its end led to exchange rates being floated worldwide and the removal of restrictions on capital movements, initiating the growth of global financial flows.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-009', chapter: '2.3', topic: 'Financial Flows', difficulty: 3,
    front: "How large are Australia's financial flows compared to its trade flows?",
    back: "Financial flows have grown at a much faster rate than trade flows.\nIn 2019–20: Foreign investment in Australia = ~$3.98 trillion; Australian investment abroad = ~$3.07 trillion.\nFor comparison, total exports in 2019–20 were only $470 billion. Financial flows are roughly 8× the size of trade flows.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-010', chapter: '2.3', topic: 'Financial Flows', difficulty: 3,
    front: "Describe TWO positive and TWO negative impacts of high financial flows on Australia.",
    back: "Positive:\n1. Access to capital funds infrastructure projects (hospitals, roads), supporting living standards\n2. Job creation and technology transfer from FDI\nNegative:\n1. Accumulation of foreign debt → servicing costs (interest payments) increase Net Primary Income deficit → worsen CAD\n2. Foreign ownership of assets → outflow of profits, dividends (income debits on BOP), reduces domestic control",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch03-011', chapter: '2.3', topic: 'Financial Flows', difficulty: 2,
    front: "What role do Australian superannuation funds play in financial flows?",
    back: "As overseas capital markets have opened, Australia's large superannuation funds have increasingly pursued investment opportunities overseas. This has grown Australian investment abroad, partially offsetting the gap between foreign investment in Australia and Australian investment overseas.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch03-q001', chapter: '2.3', topic: 'Financial Flows', type: 'mcq', difficulty: 2, marks: 1,
    question: "Which of the following is an example of Foreign Direct Investment (FDI)?",
    options: [
      { label: 'a', text: 'An Australian buying 5% of shares in a German company' },
      { label: 'b', text: 'An American bank lending $50 million to an Australian company' },
      { label: 'c', text: 'A Japanese company building a new car factory in Melbourne' },
      { label: 'd', text: 'An Australian superannuation fund buying French government bonds' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch03-q002', chapter: '2.3', topic: 'Financial Flows', type: 'mcq', difficulty: 2, marks: 1,
    question: "After the deregulation of Australian financial markets in the 1980s, the dominant form of financial inflow became:",
    options: [
      { label: 'a', text: 'Foreign direct investment' },
      { label: 'b', text: 'Portfolio investment' },
      { label: 'c', text: 'Reserve asset accumulation' },
      { label: 'd', text: 'Official development assistance' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch03-q003', chapter: '2.3', topic: 'Financial Flows', type: 'short', difficulty: 3, marks: 4,
    question: "Describe how Australia's financial flows have changed over the last 25 years and give reasons for these changes.",
    keyPoints: [
      "Both inflows and outflows have increased dramatically",
      "Portfolio investment became dominant over direct investment",
      "Australia remains a net capital importer (inflows > outflows)",
      "Deregulation of financial markets reduced restrictions on capital movement",
      "Floating of AUD in 1983 enabled greater integration",
      "Technological improvements enabled instantaneous global fund movements",
      "Growth of superannuation funds increased Australian investment abroad",
    ],
    modelAnswer: "Over the last 25 years, Australia's financial flows have increased dramatically in both scale and complexity. In 2019–20, foreign investment in Australia reached nearly $4 trillion, while Australian investment abroad was approximately $3.1 trillion. The rate of growth of portfolio investment has significantly exceeded direct investment — the opposite of the situation before financial deregulation in the 1980s. These changes have been driven by the deregulation of global financial markets and the floating of the Australian dollar in 1983, which removed restrictions on capital movements. Technological improvements have also enabled instantaneous movement of large amounts of funds globally.",
  },
];
