import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  // --- Direction of Trade ---
  {
    id: 'ch02-001', chapter: '4.2', topic: "Trade Patterns", difficulty: 1,
    front: "What is the 'direction of trade'?",
    back: "The direction of trade refers to the nations with which Australia trades — i.e. which countries Australia exports to and imports from.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-002', chapter: '4.2', topic: "Trade Patterns", difficulty: 2,
    front: "What happened when the UK joined the EEC in 1973, and why was it significant for Australia's trade?",
    back: "When the UK joined the EEC (now EU) in 1973, the UK had to impose the same trade barriers on Australia as on other non-EU countries. Australia lost its preferential access to UK agricultural markets. This was a historic shift — the UK had been Australia's major trading partner — and forced Australia to redirect its trade towards Asia.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-003', chapter: '4.2', topic: "Trade Patterns", difficulty: 2,
    front: "What role did Japan play in Australia's export direction from the 1960s to the 1990s?",
    back: "Japan was Australia's largest export market from the 1960s until approximately 1990, driven by strong Japanese demand for Australian minerals and energy. Japan's share of Australian exports declined from around 1990 as Japan's economy stagnated.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-004', chapter: '4.2', topic: "Trade Patterns", difficulty: 2,
    front: "When did China become Australia's largest trading partner, and what share of exports did it hold in 2019?",
    back: "China became Australia's largest trading partner (by exports + imports combined) since 2007. By 2016, China also became Australia's largest source of imports. In 2019, China accounted for 36.1% of Australia's exports and 24.5% of imports. Annual exports to China exceeded $100 billion since 2017.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-005', chapter: '4.2', topic: "Trade Patterns", difficulty: 2,
    front: "What were Australia's other key trading partners by export share in 2019?",
    back: "In 2019: Japan 13.1% of exports; South Korea 6.9%; ASEAN 11.1% (16.0% of imports); EU 5.5% exports (17.6% imports); USA 3.9% exports (10.6% imports); New Zealand 2.7% exports. India had become a larger export market than the USA.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-006', chapter: '4.2', topic: "Trade Patterns", difficulty: 2,
    front: "What is the key contrast between Australia's export and import directions?",
    back: "Exports are heavily focused on East Asia (especially China) for resources (minerals and agriculture). Imports also come from the EU and USA in the form of capital goods and sophisticated consumer goods, with China and ASEAN growing as import sources for manufactured consumer goods.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  // --- Composition of Trade (Exports) ---
  {
    id: 'ch02-007', chapter: '4.2', topic: "Trade Patterns", difficulty: 1,
    front: "What is the 'composition of trade'?",
    back: "The composition of trade refers to the types of goods and services that Australia exports and imports — i.e. what Australia trades, as opposed to with whom.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-008', chapter: '4.2', topic: "Trade Patterns", difficulty: 1,
    front: "What is Australia's largest single goods export category and how much did it earn in 2019-20?",
    back: "Metal ores and minerals (mainly iron ore) is Australia's largest single goods export category, earning $132 billion in 2019-20 (up from $110 billion the previous year).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-009', chapter: '4.2', topic: "Trade Patterns", difficulty: 2,
    front: "What were Australia's total exports in 2019-20 and what were the values of key export categories?",
    back: "Total exports = $470 billion (2019-20). Key categories:\n• Metal ores & minerals (iron ore): $132bn\n• LNG: $59bn (double three years prior)\n• Coal: $55bn (down from $70bn in 2018-19)\n• Tourism (largest services export): $58bn (down from $63bn due to COVID-19)\n• Agriculture: $47bn\nServices exports overall: $94bn",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-010', chapter: '4.2', topic: "Trade Patterns", difficulty: 3,
    front: "How has the composition of Australia's exports changed from 1989-90 to 2019-20?",
    back: "1989-90 → 2019-20:\n• Minerals & metals: 33% → 54% (increased significantly)\n• Rural (agriculture): 23% → 10% (declined)\n• Manufacturing: 13% → 9% (declined)\n• Services: 20% → 20% (stable)\nThis shows Australia has become more reliant on mineral and metal exports and less reliant on agriculture and manufacturing.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-011', chapter: '4.2', topic: "Trade Patterns", difficulty: 2,
    front: "What are Elaborately Transformed Manufactures (ETMs)?",
    back: "ETMs are technologically advanced manufactured goods with a high value-added component — in contrast to raw commodity exports. Some economists argue Australia should develop ETMs to diversify its export base away from its heavy reliance on primary commodities and to achieve higher value-added export earnings.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-012', chapter: '4.2', topic: "Trade Patterns", difficulty: 3,
    front: "What are the key risks in Australia's current export composition?",
    back: "1. Over-reliance on commodity exports (minerals & metals = 54% of exports) whose prices are volatile and historically trend downward\n2. Over-reliance on one major export market (China = 36.1% of exports)\n3. Coal demand may fall as the world transitions away from carbon-intensive fossil fuels\n4. Services exports (tourism, education) were devastated by COVID-19 border closures",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  // --- Composition of Trade (Imports) ---
  {
    id: 'ch02-013', chapter: '4.2', topic: "Trade Patterns", difficulty: 1,
    front: "What is the composition of Australia's imports in 2019-20?",
    back: "Total imports = $399 billion (2019-20). Breakdown:\n• Intermediate goods: $120bn (31.8%)\n• Consumer goods: $97bn (27.9%)\n• Capital goods: $77bn (18.4%)\n• Services: 22.2%\nManufactured goods — capital and consumer goods — form the bulk of imports.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-014', chapter: '4.2', topic: "Trade Patterns", difficulty: 2,
    front: "What trend has occurred in the share of capital goods in Australia's imports over time?",
    back: "The share of capital goods in Australia's imports has remained largely unchanged at approximately one-fifth (around 18-20%). Consumer goods have been increasing as a share, while intermediate goods have been slightly falling.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch02-015', chapter: '4.2', topic: "Trade Patterns", difficulty: 3,
    front: "Why has Australia's manufacturing export competitiveness declined, and what does this mean for imports?",
    back: "Australia is less competitive in manufacturing because other advanced economies developed manufacturing industries during the 20th century with greater scale and specialisation. Australia relied on primary exports instead. This means Australia must import expensive high-value-added goods — capital equipment and consumer goods — from countries with stronger manufacturing sectors, contributing to the import bill and structural trade patterns.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch02-q001', chapter: '4.2', topic: "Trade Patterns", type: 'mcq', difficulty: 1, marks: 1,
    question: "What share of Australia's exports did China account for in 2019?",
    options: [
      { label: 'a', text: '24.5%' },
      { label: 'b', text: '13.1%' },
      { label: 'c', text: '36.1%' },
      { label: 'd', text: '11.1%' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch02-q002', chapter: '4.2', topic: "Trade Patterns", type: 'mcq', difficulty: 2, marks: 1,
    question: "How did the UK's entry into the EEC in 1973 affect Australia's trade?",
    options: [
      { label: 'a', text: 'Australia gained new preferential access to European markets' },
      { label: 'b', text: 'Australia lost preferential access to UK agricultural markets and was forced to redirect trade towards Asia' },
      { label: 'c', text: 'The UK became Australia\'s largest trading partner for the next two decades' },
      { label: 'd', text: 'Australia formed a free trade agreement with the EEC' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch02-q003', chapter: '4.2', topic: "Trade Patterns", type: 'mcq', difficulty: 2, marks: 1,
    question: "Australia's largest single goods export category in 2019-20 was:",
    options: [
      { label: 'a', text: 'Coal ($55 billion)' },
      { label: 'b', text: 'LNG ($59 billion)' },
      { label: 'c', text: 'Tourism ($58 billion)' },
      { label: 'd', text: 'Metal ores and minerals — mainly iron ore ($132 billion)' },
    ],
    correctOption: 'd',
  },
  {
    id: 'ch02-q004', chapter: '4.2', topic: "Trade Patterns", type: 'short', difficulty: 2, marks: 4,
    question: "Describe two significant trends in the direction of Australia's trade over the past 50 years.",
    keyPoints: [
      "Shift away from UK/Europe after UK joined EEC in 1973; lost preferential access to UK agricultural markets",
      "Japan became largest export market from 1960s until ~1990; stagnation reduced Japan's share",
      "Rapid growth in China — largest trading partner since 2007; 36.1% of exports in 2019",
      "India growing to become larger export market than USA",
      "Ongoing shift towards Asian economies (ASEAN, India)",
    ],
    modelAnswer: "Two significant trends stand out. First, Australia shifted away from the UK and Europe as its primary trading partner following the UK's entry into the EEC in 1973, which stripped Australia of preferential access to UK agricultural markets. This forced a reorientation of trade towards Asia. Second, the direction of trade has progressively shifted towards East Asia — from Japan (largest export market from the 1960s until around 1990) to China (Australia's largest trading partner since 2007, accounting for 36.1% of exports in 2019). This Asian focus has deepened with India growing to overtake the USA as an export destination and ASEAN becoming increasingly important.",
  },
  {
    id: 'ch02-q005', chapter: '4.2', topic: "Trade Patterns", type: 'short', difficulty: 3, marks: 6,
    question: "Analyse the composition of Australia's exports and discuss the risks associated with Australia's current export base.",
    keyPoints: [
      "Primary commodities dominate: minerals & metals 54% (up from 33% in 1989-90), agriculture 10%",
      "Total exports $470bn (2019-20); iron ore $132bn, LNG $59bn, coal $55bn",
      "Services exports $94bn but COVID-19 devastated tourism and education exports",
      "Risk 1: over-reliance on volatile commodity prices (historically trend downward in long run)",
      "Risk 2: over-reliance on China (36.1%) — any deterioration in relationship or China's growth poses major risk",
      "Risk 3: coal faces declining long-term demand as global shift to lower carbon energy",
      "Need to diversify into ETMs and services to reduce vulnerability",
    ],
    modelAnswer: "Australia's export base is heavily weighted towards primary commodities — minerals and metals alone account for 54% of exports in 2019-20, up from 33% in 1989-90. Iron ore is the single largest category ($132 billion), followed by LNG ($59 billion) and coal ($55 billion), with agriculture contributing $47 billion. Services exports of $94 billion, led by tourism ($58 billion) and education, were significantly impacted by COVID-19 border closures. This composition creates three key risks. First, commodity prices are highly volatile and subject to long-term downward pressure, causing large fluctuations in export earnings year to year. Second, Australia's heavy reliance on China (36.1% of exports) means any deterioration in the bilateral relationship or slowdown in China's growth could severely reduce export revenues. Third, coal faces structural decline in demand as the world transitions to lower-carbon energy sources. To reduce these vulnerabilities, economists argue Australia needs to develop elaborately transformed manufactures and expand services exports.",
  },
];
