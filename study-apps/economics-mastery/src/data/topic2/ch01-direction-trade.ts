import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch01-001', chapter: '2.1', topic: 'Direction of Trade', difficulty: 1,
    front: "What is the 'direction of trade'?",
    back: "The nations with which Australia trades — i.e. which countries are Australia's trading partners (e.g. China, Japan, USA, EU).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-002', chapter: '2.1', topic: 'Direction of Trade', difficulty: 2,
    front: "Why did Australia's trade shift away from the United Kingdom after 1973?",
    back: "The UK joined the European Economic Community (EEC) in 1973. The UK was then required to impose the same trade barriers on Australia as on non-EU countries, removing Australia's preferential access to UK agricultural markets.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-003', chapter: '2.1', topic: 'Direction of Trade', difficulty: 1,
    front: "Who is Australia's dominant trading partner today?",
    back: "China — Australia's largest trading partner since 2007. China accounts for ~33–37% of export earnings and ~24% of imports (2019). China is Australia's #1 in both exports and imports.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-004', chapter: '2.1', topic: 'Direction of Trade', difficulty: 2,
    front: "Describe the trend in Australia–Japan trade over recent decades.",
    back: "Japan was Australia's #1 export market from the 1960s until ~1990, driven by Japan's industrial demand for minerals. Japan's weak growth since the 1990s and Australia's focus on other Asian markets has caused Japan's share to decline, though Japan remains a key partner (2nd largest export destination at ~13–16%).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-005', chapter: '2.1', topic: 'Direction of Trade', difficulty: 2,
    front: "Give THREE reasons why trade with the Asian region has increased.",
    back: "1. Asia's rapid industrialisation → increased demand for Australia's resources (coal, iron ore)\n2. Geographic proximity → lower transport costs\n3. Free Trade Agreements (FTAs) signed with Asian nations reduced trade barriers\n4. China's rise as a global manufacturing power increased demand for raw materials",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-006', chapter: '2.1', topic: 'Direction of Trade', difficulty: 1,
    front: "Approximately what proportion of Australia's trade is with the Asian region?",
    back: "Approximately 60% of Australia's trade is with the Asian region (exports and imports combined).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-007', chapter: '2.1', topic: 'Direction of Trade', difficulty: 2,
    front: "When did China become Australia's largest trading partner and largest source of imports?",
    back: "Largest trading partner (by total trade): since 2007.\nLargest source of imports: since 2016.\nChina's exports to Australia were only 4.4% in 1990; by 2019 they reached 24.5%.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-008', chapter: '2.1', topic: 'Direction of Trade', difficulty: 3,
    front: "Why is Australia described as a 'small, open economy'?",
    back: "Small: produces ~2% of Gross World Product — little influence on global developments.\nOpen: Trade is central to the economy — exports ~25% of GDP, imports equivalent of ~25% of GDP.\nConsequence: world economic developments have a very significant impact on Australia even though Australia has little influence on the global economy.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-009', chapter: '2.1', topic: 'Direction of Trade', difficulty: 2,
    front: "Identify Australia's top 5 trading partners (exports + imports combined).",
    back: "1. China (~33% of exports, ~24% of imports)\n2. Japan (~13–16% of exports)\n3. South Korea (~6–7% of exports)\n4. USA (~5% exports, ~10–12% imports)\n5. EU (~5–7% exports, ~17–19% imports)\nNote: ASEAN as a bloc is also highly significant.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-010', chapter: '2.1', topic: 'Direction of Trade', difficulty: 3,
    front: "What are the risks of Australia being so dependent on China as a trading partner?",
    back: "1. Vulnerability to Chinese economic slowdowns → sharp falls in export revenue\n2. Diplomatic tensions can lead to trade disruptions (e.g. 2020–21 trade sanctions on Australian goods including barley, wine, coal)\n3. Commodity price volatility affects export income\n4. Difficulty finding alternative markets for large-volume commodity exports at short notice",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-011', chapter: '2.1', topic: 'Direction of Trade', difficulty: 2,
    front: "How has Australia's import direction differed from its export direction?",
    back: "Exports: heavily focused on China and East Asia (resources).\nImports: more diverse — still significant from EU (~17–19%) and USA (~10–12%) for capital goods and sophisticated consumer goods. China and ASEAN are growing import sources for manufactured consumer goods.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-012', chapter: '2.1', topic: 'Direction of Trade', difficulty: 3,
    front: "What does Australia's trade 'pattern' refer to? What are its two components?",
    back: "Australia's pattern of trade refers to:\n1. Direction of trade — the nations Australia trades with (e.g. China, Japan)\n2. Composition of trade — the types of goods and services traded (e.g. iron ore, education services)\nBoth have changed significantly over recent decades.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch01-q001', chapter: '2.1', topic: 'Direction of Trade', type: 'mcq', difficulty: 1, marks: 1,
    question: "Australia's largest trading partner is:",
    options: [
      { label: 'a', text: 'Japan' },
      { label: 'b', text: 'United States' },
      { label: 'c', text: 'China' },
      { label: 'd', text: 'European Union' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch01-q002', chapter: '2.1', topic: 'Direction of Trade', type: 'mcq', difficulty: 2, marks: 1,
    question: "The main reason Australia's trade links with the UK declined after 1973 was:",
    options: [
      { label: 'a', text: 'Australia imposed tariffs on British goods' },
      { label: 'b', text: 'The UK joined the European Economic Community, imposing barriers on Australian exports' },
      { label: 'c', text: 'Australia focused entirely on Asian markets' },
      { label: 'd', text: 'The UK economy declined dramatically' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch01-q003', chapter: '2.1', topic: 'Direction of Trade', type: 'short', difficulty: 3, marks: 4,
    question: "Account for changes to Australia's direction of trade over the last 30 years.",
    keyPoints: [
      "UK joined EEC in 1973 → Australia lost preferential UK market access",
      "Japan emerged as major partner in 1960s-80s due to industrial demand for minerals",
      "China's rapid industrialisation since 2000 → became #1 trading partner from 2007",
      "ASEAN and South Korea growing in importance",
      "Free Trade Agreements facilitated increased Asian trade",
      "Geographic proximity and lower transport costs favoured Asian trade",
    ],
    modelAnswer: "Over the last 30 years, Australia's direction of trade has shifted significantly towards Asia. The most significant change was when the UK joined the European Economic Community in 1973, which reduced Australia's preferential access to British markets. Australia then focused on Asian markets, first Japan (1960s–90s) and then China, which became Australia's largest trading partner in 2007. Today approximately 60% of Australia's trade is with the Asian region, driven by Asia's industrialisation, geographic proximity, and Free Trade Agreements.",
  },
  {
    id: 'ch01-q004', chapter: '2.1', topic: 'Direction of Trade', type: 'short', difficulty: 2, marks: 3,
    question: "Why is Australia described as a 'small, open economy'? Explain ONE consequence of this.",
    keyPoints: [
      "Small: produces only ~2% of Gross World Product; limited influence on global prices/events",
      "Open: exports and imports each represent ~25% of GDP; trade is central",
      "Consequence: global developments have a large impact on Australia (e.g. China slowdown reduces demand for iron ore, depressing export revenue and economic growth)",
    ],
    modelAnswer: "Australia is a 'small, open economy' because it produces only around 2% of Gross World Product (small), yet trade represents approximately 25% of GDP on both the export and import side (open). One consequence is that Australia is highly vulnerable to changes in the global economy — for example, a slowdown in Chinese economic growth would reduce demand for Australian iron ore and coal, significantly affecting export revenue and domestic economic growth.",
  },
];
