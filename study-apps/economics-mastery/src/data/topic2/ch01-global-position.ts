import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch01-001', chapter: '4.1', topic: "Australia's Global Position", difficulty: 1,
    front: "Where does Australia rank in the world by economy size?",
    back: `• **Australia** ranks **14th largest economy** in the world\n• Similar size to **Spain**; larger than ~200 countries\n• But small compared to **US, EU, China, Japan**\n• In 2019, ranked **6th in quality of life** (UN Human Development Index)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-002', chapter: '4.1', topic: "Australia's Global Position", difficulty: 1,
    front: "What was Australia's ranking in quality of life according to the UN Human Development Index in 2019?",
    back: `• Ranked **6th in the world** in quality of life (2019)\n• Measured by the **UN Human Development Index**\n• Reflects a **very high level of economic development**\n• High incomes, health outcomes, and education levels`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-003', chapter: '4.1', topic: "Australia's Global Position", difficulty: 2,
    front: "What does it mean that Australia is a 'small, open economy'?",
    back: `• **Small**: produces only ~**2% of Gross World Product** → little influence on global developments\n• **Open**: exports ~**one-quarter of GDP**; imports ~**one-quarter of GDP**\n• World economic developments have a **very significant impact** on Australia despite Australia having little influence globally`,
    detail: `Australia is called a "small, open economy" because it produces only around 2% of Gross World Product — meaning it is too small to significantly influence global prices or events. Yet trade is central to the economy, with exports and imports each representing approximately one-quarter of GDP. The consequence is that Australia is highly exposed to global developments (e.g. a slowdown in China reduces demand for Australian iron ore) even though Australia itself has little power to shape those developments.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-004', chapter: '4.1', topic: "Australia's Global Position", difficulty: 2,
    front: "What share of Gross World Product does Australia produce?",
    back: `• Australia produces approximately **2% of Gross World Product**\n• Makes it a **"small"** economy with little global influence\n• Cannot significantly affect global prices or economic conditions\n• Described as a **"price taker"** in international markets`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-005', chapter: '4.1', topic: "Australia's Global Position", difficulty: 2,
    front: "What is the key implication of Australia being a 'small' economy?",
    back: `• World economic developments have a **very significant impact** on Australia\n• Yet Australia has **little influence** on those developments\n• Australia is a **"price taker"** in global markets\n• Example: **Chinese slowdown** → less demand for iron ore → slower Australian growth`,
    detail: `Because Australia produces only ~2% of Gross World Product, it cannot influence global commodity prices, interest rates, or economic cycles. However, as an open economy exporting roughly one-quarter of GDP, global developments directly affect Australian export revenues and growth. A slowdown in China — Australia's largest trading partner at 36.1% of exports — can significantly reduce demand for Australian iron ore and coal, slowing growth at home. Australia must adapt to these shocks rather than control them.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-006', chapter: '4.1', topic: "Australia's Global Position", difficulty: 2,
    front: "Why must Australia trade with the rest of the world?",
    back: `• Overseas markets provide demand for **primary commodities** (minerals, agriculture)\n• **Small population** means Australia cannot efficiently produce all technology and manufactured goods\n• **High level of development** makes it an exporter of services (tourism, education)\n• Trade is essential to Australia's **economic prosperity**`,
    detail: `Australia must trade for three structural reasons. First, overseas markets absorb Australia's vast primary commodity production — iron ore, coal, and agricultural products far exceed domestic demand. Second, Australia's small population (~26 million) means it lacks the scale to efficiently produce all the capital goods and consumer technology it needs, so it imports these from larger economies. Third, Australia's advanced economy has developed high-quality education and tourism that attract international spending. Together, these factors make trade indispensable.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-007', chapter: '4.1', topic: "Australia's Global Position", difficulty: 2,
    front: "Approximately what share of its production does Australia export?",
    back: `• Australia exports roughly **one-quarter of what it produces** (~25% of GDP)\n• Imports equivalent to **~one-quarter of GDP**\n• **Trade is central** to the Australian economy — not a side activity\n• Reflects Australia's status as an **"open"** economy`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-008', chapter: '4.1', topic: "Australia's Global Position", difficulty: 3,
    front: "Explain the tension created by Australia being both 'small' and 'open'.",
    back: `• **Open** → heavily dependent on trade → closely integrated with the global economy\n• **Small** → little power to influence global developments\n• External shocks (e.g. **commodity price falls**, **China slowdown**) can severely impact Australia\n• Australia cannot control or counter those developments — must **simply adapt**`,
    detail: `The core tension is that openness creates vulnerability while smallness removes the power to respond. Australia's exports and imports each represent roughly a quarter of GDP, meaning trade disruptions directly affect growth. Yet because Australia produces only ~2% of Gross World Product, it cannot influence global commodity prices, exchange rates, or trading partner growth. When external conditions deteriorate — a fall in iron ore prices, a Chinese recession — Australia must adjust through exchange rate movements and domestic policy rather than influencing the external environment itself.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-009', chapter: '4.1', topic: "Australia's Global Position", difficulty: 1,
    front: "What types of commodities does Australia export due to its comparative advantage?",
    back: `• Exports **primary commodities**: minerals and agricultural products\n• Key minerals: **iron ore, coal, LNG** (liquefied natural gas)\n• Vast **natural resources** give comparative advantage in primary industries\n• Also exports **services**: education, tourism`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-010', chapter: '4.1', topic: "Australia's Global Position", difficulty: 2,
    front: "Why does Australia's level of development make it an exporter of services?",
    back: `• Advanced economies develop **service industries** as workforce becomes more skilled\n• Rising incomes create demand for quality services\n• Australia's **universities** attract large numbers of international students\n• **Natural environment** and lifestyle attract tourists → significant service export income`,
    detail: `As an economy develops, it transitions from primary industries toward manufacturing and then services. Australia's high standard of living, world-class universities, and attractive natural environment have created significant service exports. International education is Australia's fourth-largest export; tourism is also significant. These exports reflect comparative advantage in human capital and natural amenity rather than raw resources — a feature of high-income economies.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-011', chapter: '4.1', topic: "Australia's Global Position", difficulty: 3,
    front: "How does Australia's small population create both a need to trade and a need to import?",
    back: `• **Small population** limits domestic market size → primary commodity producers must **export** to find sufficient demand\n• Small population means **insufficient scale** to efficiently produce all technology and manufactures\n• Must **import** capital goods and consumer technology from larger economies\n• This **dual dependency** makes trade central to Australia's prosperity`,
    detail: `Australia's population of around 26 million is too small to absorb the output of its vast mining and agricultural industries — exports are essential for viability. At the same time, a small population means Australia cannot develop the manufacturing scale achieved by larger economies like Germany, Japan, or South Korea. Without the scale to produce competitive capital goods (e.g. heavy machinery, semiconductors), Australia must import them. This dual logic — too small to consume its own output, too small to produce everything it needs — makes trade structurally necessary.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch01-012', chapter: '4.1', topic: "Australia's Global Position", difficulty: 1,
    front: "Which major economies is Australia small compared to?",
    back: `• Small compared to: **United States, European Union, China, Japan**\n• These economies have **much larger GDPs** and **significantly more global influence**\n• Australia produces only **~2%** of Gross World Product\n• Similar size to **Spain** — a mid-tier global economy`,
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
  {
    id: 'ch01-q006', chapter: '4.1', topic: "Australia's Global Position", type: 'mcq', difficulty: 1, marks: 1,
    question: "Which of the following best describes Australia's comparative advantage in international trade?",
    options: [
      { label: 'a', text: 'Advanced manufacturing and electronics' },
      { label: 'b', text: 'Primary commodities such as iron ore, coal and LNG' },
      { label: 'c', text: 'High-technology consumer goods' },
      { label: 'd', text: 'Financial services and banking' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch01-q007', chapter: '4.1', topic: "Australia's Global Position", type: 'mcq', difficulty: 2, marks: 1,
    question: "Australia is described as a 'price taker' in global markets. This means:",
    options: [
      { label: 'a', text: 'Australia negotiates prices with its major trading partners' },
      { label: 'b', text: 'Australia sets the benchmark price for global commodities' },
      { label: 'c', text: 'Australia must accept prices determined by global supply and demand rather than influencing them' },
      { label: 'd', text: 'Australia imports goods at prices set by foreign governments' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch01-q008', chapter: '4.1', topic: "Australia's Global Position", type: 'mcq', difficulty: 2, marks: 1,
    question: "Which of the following best illustrates the vulnerability of Australia's 'small' economy status?",
    options: [
      { label: 'a', text: 'A slowdown in China reduces global demand for Australian iron ore, hurting Australian growth' },
      { label: 'b', text: 'Australia raises interest rates and global commodity prices fall' },
      { label: 'c', text: 'Australia increases tariffs and reduces imports from major trading partners' },
      { label: 'd', text: 'The Australian dollar appreciates and reduces the cost of imports' },
    ],
    correctOption: 'a',
  },
  {
    id: 'ch01-q009', chapter: '4.1', topic: "Australia's Global Position", type: 'mcq', difficulty: 2, marks: 1,
    question: "Why does Australia's small population (~26 million) create a need to import capital goods and technology?",
    options: [
      { label: 'a', text: 'Australia lacks the technical skills to operate machinery' },
      { label: 'b', text: 'Australia does not have access to sufficient natural resources' },
      { label: 'c', text: 'Australia lacks the population scale to efficiently produce high-technology goods domestically' },
      { label: 'd', text: 'Australian workers prefer to buy foreign goods over domestic ones' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch01-q010', chapter: '4.1', topic: "Australia's Global Position", type: 'mcq', difficulty: 1, marks: 1,
    question: "Australia's economy is most similar in size to which of the following countries?",
    options: [
      { label: 'a', text: 'Germany' },
      { label: 'b', text: 'Spain' },
      { label: 'c', text: 'Brazil' },
      { label: 'd', text: 'India' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch01-q011', chapter: '4.1', topic: "Australia's Global Position", type: 'mcq', difficulty: 2, marks: 1,
    question: "Approximately what share of GDP do Australia's exports represent, reflecting its status as an 'open' economy?",
    options: [
      { label: 'a', text: 'Around 5%' },
      { label: 'b', text: 'Around 10%' },
      { label: 'c', text: 'Around 25%' },
      { label: 'd', text: 'Around 50%' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch01-q012', chapter: '4.1', topic: "Australia's Global Position", type: 'mcq', difficulty: 3, marks: 1,
    question: "Which of the following statements about Australia's service exports is most accurate?",
    options: [
      { label: 'a', text: 'Service exports are negligible because Australia has no comparative advantage in services' },
      { label: 'b', text: 'Australia\'s high level of development has given it comparative advantage in services such as education and tourism' },
      { label: 'c', text: 'Service exports only grew after Australia signed bilateral free trade agreements' },
      { label: 'd', text: 'Service exports exceed goods exports as a share of total exports' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch01-q013', chapter: '4.1', topic: "Australia's Global Position", type: 'short', difficulty: 2, marks: 4,
    question: "Explain why Australia must rely on overseas markets to sell its primary commodity exports.",
    keyPoints: [
      "Australia's domestic population (~26 million) is too small to absorb commodity output",
      "Vast iron ore, coal, and LNG deposits can only be economically viable if sold to larger overseas markets",
      "Without export markets, mining and agricultural industries could not operate at efficient scale",
      "Overseas demand — especially from China — is essential to the viability of Australia's resource sector",
    ],
    modelAnswer: "Australia must export its primary commodities because its domestic market of approximately 26 million people is far too small to absorb the output of its large-scale mining and agricultural industries. Exports of iron ore ($132 billion in 2019-20), LNG, coal, and agricultural products vastly exceed what Australian consumers and businesses could use domestically. Without access to large overseas markets — particularly China, which takes 36.1% of Australian exports — these industries would not be economically viable at their current scale. Trade is therefore structurally necessary, not optional, for Australia's resource-based industries.",
  },
  {
    id: 'ch01-q014', chapter: '4.1', topic: "Australia's Global Position", type: 'short', difficulty: 3, marks: 6,
    question: "Explain the concept of Australia being a 'small, open economy' and analyse how this creates both opportunity and risk for Australia.",
    keyPoints: [
      "Small = produces ~2% of Gross World Product; little ability to influence global prices or economic conditions",
      "Open = exports and imports each roughly one-quarter of GDP; deeply integrated into world trade",
      "Opportunity: overseas markets allow primary commodity industries to operate at viable scale; imports improve living standards via access to technology and diverse goods",
      "Risk: highly exposed to external shocks (e.g. China slowdown, commodity price falls) with limited ability to influence or counteract them",
      "Being a 'price taker' means Australia cannot protect export revenues when global prices fall",
    ],
    modelAnswer: "Australia is a 'small' economy because it produces approximately 2% of Gross World Product, giving it little power to influence global commodity prices, exchange rates, or economic cycles. It is 'open' because exports and imports each represent roughly one-quarter of GDP, meaning trade is central rather than peripheral to the economy. This combination creates genuine opportunities: overseas markets allow Australia's mining and agricultural industries to operate at economically viable scales, and imports give Australians access to high-quality technology and goods that cannot be efficiently produced domestically. However, the same combination creates significant risk: because Australia is deeply integrated into the global economy but cannot influence it, external shocks — such as a slowdown in China reducing demand for iron ore, or a fall in global commodity prices — directly harm Australian growth. As a price taker, Australia must absorb these shocks through exchange rate adjustment and domestic policy, rather than shaping global conditions.",
  },
  {
    id: 'ch01-q015', chapter: '4.1', topic: "Australia's Global Position", type: 'short', difficulty: 2, marks: 4,
    question: "Using two examples, explain how Australia's level of economic development has shaped the types of goods and services it exports.",
    keyPoints: [
      "High level of development → world-class university system → international education is a major service export",
      "Natural environment + high incomes → tourism services are significant export earner",
      "Advanced economy also means less reliance on low-value-added goods and more on services with higher value",
      "Development has not shifted Australia away from primary goods exports due to natural resource abundance",
    ],
    modelAnswer: "Australia's high level of economic development has shaped two significant export categories. First, an advanced university system and high quality of life have made international education a major export — attracting hundreds of thousands of international students who pay tuition fees that count as an export of services. Second, Australia's natural environment and lifestyle have made tourism a major service export, earning $58 billion in 2019-20 before COVID-19 border closures. These examples show that economic development generates comparative advantage in services that complement Australia's traditional strength in primary commodity exports.",
  },
];
