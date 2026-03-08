import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch01-001', chapter: '4.1', topic: "Australia's Global Position", difficulty: 1,
    front: "Where does Australia rank in the world by economy size?",
    back: "Australia ranks 14th in the world by economy size. It is similar in size to Spain and larger than almost 200 countries, but small compared to the USA, EU, China, and Japan.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-002', chapter: '4.1', topic: "Australia's Global Position", difficulty: 1,
    front: "What was Australia's ranking in quality of life according to the UN Human Development Index in 2019?",
    back: "In 2019, Australia ranked 6th in the world in quality of life according to the UN Human Development Index, indicating a very high level of economic development.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-003', chapter: '4.1', topic: "Australia's Global Position", difficulty: 1,
    front: "What does it mean that Australia is a 'small, open economy'?",
    back: "Small: Australia produces approximately 2% of Gross World Product and has little influence on global economic developments.\nOpen: Australia exports roughly one-quarter of what it produces and imports the equivalent of roughly one-quarter of GDP — trade is central to the Australian economy.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-004', chapter: '4.1', topic: "Australia's Global Position", difficulty: 2,
    front: "What share of Gross World Product does Australia produce?",
    back: "Australia produces approximately 2% of Gross World Product, which is why it is described as a 'small' economy with little influence on global economic developments.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-005', chapter: '4.1', topic: "Australia's Global Position", difficulty: 2,
    front: "What is the key implication of Australia being a 'small' economy?",
    back: "Because Australia is small, world economic developments can have a very significant impact on Australia — even though Australia has little influence on those developments. Australia is a 'price taker' in global markets.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-006', chapter: '4.1', topic: "Australia's Global Position", difficulty: 2,
    front: "Why must Australia trade with the rest of the world?",
    back: "Three main reasons:\n1. Overseas markets provide demand for Australia's primary commodities (minerals, agricultural products)\n2. Australia's small population means it needs to import technology and goods not produced domestically\n3. Australia's high level of development makes it an exporter of services such as tourism and education",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-007', chapter: '4.1', topic: "Australia's Global Position", difficulty: 2,
    front: "Approximately what share of its production does Australia export?",
    back: "Australia exports roughly one-quarter of what it produces (approximately 25% of GDP), and imports the equivalent of roughly one-quarter of GDP, reflecting the openness of the Australian economy.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-008', chapter: '4.1', topic: "Australia's Global Position", difficulty: 3,
    front: "Explain the tension created by Australia being both 'small' and 'open'.",
    back: "Because Australia is open, it is heavily dependent on international trade and is therefore closely integrated with the global economy. Because it is small, however, it has little power to influence global economic developments. This means external shocks (e.g. slowdown in China, fall in commodity prices) can severely impact Australia, yet Australia cannot control or counter those developments — it must simply adapt to them.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-009', chapter: '4.1', topic: "Australia's Global Position", difficulty: 1,
    front: "What types of commodities does Australia export due to its comparative advantage?",
    back: "Australia exports primary commodities — mainly minerals (e.g. iron ore, coal, LNG) and agricultural products — because it has vast natural resources that give it a comparative advantage in primary industries.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-010', chapter: '4.1', topic: "Australia's Global Position", difficulty: 2,
    front: "Why does Australia's level of development make it an exporter of services?",
    back: "Advanced economies tend to develop service industries (education, tourism, financial services, professional services) as their workforce becomes more skilled and incomes rise. Australia's high standard of living and educational institutions attract international students and tourists, making services a significant export category.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-011', chapter: '4.1', topic: "Australia's Global Position", difficulty: 3,
    front: "How does Australia's small population create both a need to trade and a need to import?",
    back: "A small population limits the size of the domestic market, so Australian producers of primary commodities (minerals, agriculture) must export to find sufficient demand. Simultaneously, a small population means Australia does not have sufficient scale to efficiently produce all the technology and manufactured goods it needs — so it must import these from larger economies. This dual dependency makes trade central to Australia's prosperity.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-012', chapter: '4.1', topic: "Australia's Global Position", difficulty: 1,
    front: "Which major economies is Australia small compared to?",
    back: "Australia is small compared to the United States, the European Union, China, and Japan — all of which have much larger economies and significantly more influence over global economic developments.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch01-q001', chapter: '4.1', topic: "Australia's Global Position", type: 'mcq', difficulty: 1, marks: 1,
    question: "Australia ranks approximately what position in the world by economy size?",
    options: [
      { label: 'a', text: '5th' },
      { label: 'b', text: '10th' },
      { label: 'c', text: '14th' },
      { label: 'd', text: '20th' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch01-q002', chapter: '4.1', topic: "Australia's Global Position", type: 'mcq', difficulty: 2, marks: 1,
    question: "Australia is described as a 'small' economy because it:",
    options: [
      { label: 'a', text: 'Has fewer than 30 million people' },
      { label: 'b', text: 'Produces approximately 2% of Gross World Product and has little influence on global developments' },
      { label: 'c', text: 'Exports less than 10% of its GDP' },
      { label: 'd', text: 'Ranks below 20th in the world by economy size' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch01-q003', chapter: '4.1', topic: "Australia's Global Position", type: 'short', difficulty: 2, marks: 4,
    question: "Explain what economists mean when they describe Australia as a 'small, open economy' and outline two implications of this for Australia.",
    keyPoints: [
      "Small = produces ~2% of Gross World Product; little influence on global developments",
      "Open = exports/imports roughly one-quarter of GDP; trade is central to the economy",
      "Implication 1: global developments can significantly impact Australia (e.g. slowdown in China, commodity price falls)",
      "Implication 2: Australia must trade to access overseas markets for primary commodities and import technology/goods it cannot efficiently produce",
    ],
    modelAnswer: "Australia is described as a 'small' economy because it produces approximately 2% of Gross World Product and therefore has little influence on global economic developments. It is 'open' because it exports roughly one-quarter of what it produces and imports the equivalent of roughly one-quarter of GDP, making trade central to the economy. Two key implications follow: first, because Australia is small, world economic developments can significantly impact Australia even though Australia cannot influence them — for example, a slowdown in China directly reduces demand for Australian exports. Second, being open means Australia must rely on overseas markets to absorb its primary commodity exports and must import technology and sophisticated goods its small population cannot efficiently produce domestically.",
  },
  {
    id: 'ch01-q004', chapter: '4.1', topic: "Australia's Global Position", type: 'short', difficulty: 3, marks: 6,
    question: "Why must Australia trade with the rest of the world? Discuss three reasons.",
    keyPoints: [
      "Overseas markets provide demand for primary commodities (minerals, agriculture) that exceed domestic demand",
      "Small population means Australia cannot efficiently produce all technology and goods domestically → must import",
      "High level of economic development → exporter of services (tourism, education)",
      "Comparative advantage in primary industries means specialising and trading generates greater national income",
    ],
    modelAnswer: "Australia must trade for three main reasons. First, overseas markets provide demand for Australia's vast primary commodities — minerals such as iron ore and coal, and agricultural products — that far exceeds domestic consumption. Without export markets, these industries could not operate at their current scale. Second, Australia's small population means it lacks the scale to efficiently produce all the technology, capital goods, and manufactured consumer goods it needs, so it must import these from larger economies. Third, Australia's high level of economic development has created significant service exports — its universities attract large numbers of international students and its natural environment attracts tourists — generating export income from services. Together, these factors make international trade indispensable to Australia's economic prosperity.",
  },
  {
    id: 'ch01-q005', chapter: '4.1', topic: "Australia's Global Position", type: 'mcq', difficulty: 1, marks: 1,
    question: "In 2019, Australia ranked what position in the UN Human Development Index (quality of life)?",
    options: [
      { label: 'a', text: '1st' },
      { label: 'b', text: '3rd' },
      { label: 'c', text: '6th' },
      { label: 'd', text: '12th' },
    ],
    correctOption: 'c',
  },
];
