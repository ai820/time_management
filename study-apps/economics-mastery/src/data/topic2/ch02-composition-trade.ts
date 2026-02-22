import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch02-001', chapter: '2.2', topic: 'Composition of Trade', difficulty: 1,
    front: "What is the 'composition of trade'?",
    back: "The types of goods and services that Australia exports and imports (e.g. iron ore, coal, education services as exports; consumer electronics, capital goods as imports).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-002', chapter: '2.2', topic: 'Composition of Trade', difficulty: 2,
    front: "What is Australia's comparative advantage and how does it shape exports?",
    back: "Australia has a comparative advantage in primary industries — vast natural resources (iron ore, coal, gold) and agricultural land (wheat, wool, beef). This means Australia specialises in exporting these commodities, which account for ~64% of export earnings (minerals & metals ~54%, agriculture ~10%).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-003', chapter: '2.2', topic: 'Composition of Trade', difficulty: 1,
    front: "Rank Australia's top export categories by value (2019–20).",
    back: "1. Metal ores and minerals (iron ore) — $132bn (~54% of goods exports)\n2. LNG and mineral fuels — $59bn\n3. Coal — $55bn\n4. Tourism/travel services — $58bn (COVID-impacted)\n5. Agriculture (wheat, beef, wool) — $47bn",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-004', chapter: '2.2', topic: 'Composition of Trade', difficulty: 2,
    front: "What are 'Elaborately Transformed Manufactures' (ETMs)?",
    back: "ETMs are highly processed, high value-added manufactured goods (e.g. cars, computers, TVs, aircraft). Most industrialised nations export large quantities of ETMs. Australia exports very few ETMs — manufacturing makes up only ~13% of exports (2019–20), down from higher levels historically.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-005', chapter: '2.2', topic: 'Composition of Trade', difficulty: 3,
    front: "Why has the share of agricultural exports declined relative to minerals?",
    back: "1. Trade protection by other countries makes it hard to access their markets (e.g. EU agricultural subsidies)\n2. Commodity items have low value-added compared to manufactured goods\n3. World commodity price volatility\n4. More extreme weather patterns reducing output and productivity\n5. Rapid growth of mineral exports outpacing agricultural growth",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-006', chapter: '2.2', topic: 'Composition of Trade', difficulty: 2,
    front: "What are Australia's main imports and their composition?",
    back: "Imports totalled $399bn (2019–20):\n• Intermediate goods: $120bn (~32%) — semi-finished inputs\n• Consumer goods: $97bn (~28%) — electronics, clothing, cars\n• Capital goods: $77bn (~18%) — machinery, equipment\n• Services: ~22% — personal travel, transport, financial services\nManufactured goods dominate imports.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-007', chapter: '2.2', topic: 'Composition of Trade', difficulty: 2,
    front: "What are Australia's main service exports?",
    back: "Tourism (travel) and education are Australia's most important service exports.\nIn 2018–19, tourism earned ~$63bn and education is a top export earner.\nServices overall represent ~20% of Australia's exports — a relatively narrow service export base.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-008', chapter: '2.2', topic: 'Composition of Trade', difficulty: 2,
    front: "What is a 'narrow export base' and why is it a risk for Australia?",
    back: "A narrow export base = reliance on a small range of exports.\nAustralia relies heavily on iron ore, coal, and LNG. This creates risks:\n• Vulnerability to commodity price falls\n• Vulnerability to demand shocks (e.g. China slowdown)\n• Risks if global demand for coal falls as energy transitions occur\n• Over-reliance on a single market (China) amplifies risk",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-009', chapter: '2.2', topic: 'Composition of Trade', difficulty: 3,
    front: "How has the composition of Australia's exports changed from 1989–90 to 2019–20?",
    back: "1989–90: Minerals & metals 33%, Services 20%, Rural 23%, Manufacturing 13%\n2019–20: Minerals & metals 54%, Services 20%, Rural 10%, Manufacturing 8%\nKey trends: Minerals & metals doubled in share (mining boom); agriculture and manufacturing declined in share; services maintained at ~20%.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-010', chapter: '2.2', topic: 'Composition of Trade', difficulty: 2,
    front: "Why is manufacturing not a major part of Australia's exports?",
    back: "1. Higher labour costs than Asian competitors\n2. Small domestic market → limited economies of scale\n3. Reduction of tariffs and local content rules → domestic manufacturers face more competition\n4. The mining boom raised the AUD, making manufacturing exports uncompetitive\n5. Manufacturing hub shifted to Asia (China, SE Asia)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-011', chapter: '2.2', topic: 'Composition of Trade', difficulty: 3,
    front: "Why do services hold the greatest long-term export potential for Australia?",
    back: "1. Fastest growing export category globally\n2. ~75% of Australia's workforce is employed in services → skilled service workforce\n3. Growing Asian middle class demands financial, education, health, tourism services\n4. Technology enables services to be traded globally (e.g. online education)\n5. COVID-19 highlighted fragility of goods exports; services diversification reduces risk",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-012', chapter: '2.2', topic: 'Composition of Trade', difficulty: 2,
    front: "What percentage of Australia's workforce is employed in the services sector?",
    back: "Approximately 75% of Australia's workforce is employed in service industries. Despite this, services only account for ~20% of exports — indicating Australia's service export base is relatively narrow compared to its domestic service economy.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch02-q001', chapter: '2.2', topic: 'Composition of Trade', type: 'mcq', difficulty: 1, marks: 1,
    question: "Australia's imports are mainly composed of:",
    options: [
      { label: 'a', text: 'Primary goods such as iron ore and coal' },
      { label: 'b', text: 'Manufactured goods including consumer and capital goods' },
      { label: 'c', text: 'Agricultural products such as wheat and wool' },
      { label: 'd', text: 'Service imports only' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch02-q002', chapter: '2.2', topic: 'Composition of Trade', type: 'mcq', difficulty: 2, marks: 1,
    question: "ETMs (Elaborately Transformed Manufactures) make up what proportion of Australia's exports?",
    options: [
      { label: 'a', text: 'A large proportion — Australia is a major ETM exporter' },
      { label: 'b', text: 'About half of Australia\'s exports' },
      { label: 'c', text: 'A small proportion — manufacturing is not a key export sector' },
      { label: 'd', text: 'ETMs are not traded by Australia at all' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch02-q003', chapter: '2.2', topic: 'Composition of Trade', type: 'short', difficulty: 3, marks: 4,
    question: "Discuss the risks and benefits of Australia's reliance on commodity exports.",
    keyPoints: [
      "Benefit: comparative advantage → high export revenue, strong BOGS when prices high",
      "Benefit: strong Asian demand for resources supported Australian growth (e.g. during GFC)",
      "Risk: commodity prices are volatile → sudden falls reduce export revenue and worsen CAD",
      "Risk: narrow export base → over-exposed to single sector/market",
      "Risk: global energy transition reduces long-term demand for coal",
      "Risk: diplomatic tensions with China can threaten export markets",
    ],
    modelAnswer: "Australia's reliance on commodity exports (mainly iron ore, coal and LNG) has both advantages and risks. The benefit is that Australia has a strong comparative advantage in primary production, earning substantial export revenue that has supported economic growth and trade surpluses. However, the risks include commodity price volatility — falls in iron ore or coal prices significantly worsen the Balance on Goods and Services and the Current Account Deficit. Additionally, over-reliance on one market (China) and one sector (mining) creates economic vulnerability. The global shift away from coal as energy transitions occur may also pose a long-term structural challenge.",
  },
  {
    id: 'ch02-q004', chapter: '2.2', topic: 'Composition of Trade', type: 'short', difficulty: 2, marks: 3,
    question: "Describe the composition of Australia's exports.",
    keyPoints: [
      "Primary goods dominate: minerals & metals (~54%), agriculture (~10%)",
      "Iron ore is single largest goods export (~$132bn in 2019-20)",
      "Services: ~20% of exports — mainly tourism and education",
      "Manufacturing/ETMs: small share (~8%) — declining trend",
      "Australia has a comparative advantage in primary production",
    ],
    modelAnswer: "Australia's exports are dominated by primary goods. In 2019–20, minerals and metals accounted for approximately 54% of export earnings, with iron ore alone worth $132 billion. Agricultural goods (wheat, beef, wool) contributed about 10%. Services represent around 20% of exports, with tourism and education as the largest service exports. Manufactured goods (including ETMs) account for only around 8% of exports — significantly less than most other advanced economies. This reflects Australia's comparative advantage in primary production.",
  },
];
