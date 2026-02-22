import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch07-001', chapter: '2.7', topic: 'International Competitiveness', difficulty: 1,
    front: "What is Australia's 'export base'?",
    back: "Australia's export base refers to the types and range of goods and services that Australians export to the rest of the world. Australia's export base is primarily composed of primary goods (iron ore, coal, LNG, agricultural products) and some services (tourism, education). A narrow export base = concentrated in few export types → vulnerable to price/demand shocks.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-002', chapter: '2.7', topic: 'International Competitiveness', difficulty: 2,
    front: "What are 'cost factors' of international competitiveness?",
    back: "Cost factors affect the PRICE competitiveness of Australian exports:\n• Price of the good/service itself\n• Labour costs (wages, productivity)\n• Exchange rate fluctuations (AUD appreciation = exports more expensive overseas)\n• Terms of Trade (export price relative to import price)\n• Government trade protection/tariffs (affect domestic prices and access to foreign markets)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-003', chapter: '2.7', topic: 'International Competitiveness', difficulty: 2,
    front: "What are 'non-cost factors' of international competitiveness?",
    back: "Non-cost factors affect competitiveness beyond just price:\n• Quality of output (e.g. clean food products, reliable resources)\n• Reliability of supply (can Australia deliver what it promises, on time?)\n• Skills of the workforce (technology, service quality)\n• Customer service and after-sales support\n• Government trade policies (e.g. FTAs that open markets)\n• Brand reputation and standards",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-004', chapter: '2.7', topic: 'International Competitiveness', difficulty: 2,
    front: "Why is Australia's narrow export base a problem for the CAD?",
    back: "A narrow export base creates problems because:\n1. Vulnerability to commodity price falls → sharp decline in export revenue → worsening BOGS and CAD\n2. Vulnerability to demand shocks from a single market (China)\n3. Agricultural exports face trade protection barriers in other countries (e.g. EU subsidies)\n4. Reliance on coal raises long-term structural risks as energy transition reduces demand\n5. Cannot easily diversify exports at short notice if one commodity falls",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-005', chapter: '2.7', topic: 'International Competitiveness', difficulty: 2,
    front: "Why are services the fastest growing area of Australia's potential exports?",
    back: "1. Services are the fastest growing export category globally (technology enables cross-border trade)\n2. ~75% of Australia's workforce is in services → sophisticated service capabilities\n3. Growing Asian middle class demands education, healthcare, financial and tourism services\n4. Technology (internet, digital platforms) makes services tradeable globally\n5. COVID-19 recovery will drive re-expansion of tourism and education services",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-006', chapter: '2.7', topic: 'International Competitiveness', difficulty: 2,
    front: "How does the exchange rate affect Australia's international competitiveness?",
    back: "AUD APPRECIATION (rises in value):\n→ Australian exports become MORE EXPENSIVE for overseas buyers → demand falls → export revenue falls → worse BOGS/CAD\n→ Imports become CHEAPER for Australians → import demand rises → worse BOGS/CAD\n\nAUD DEPRECIATION (falls in value):\n→ Australian exports become CHEAPER for overseas buyers → demand rises → better BOGS\n→ Imports become MORE EXPENSIVE → import demand falls → better BOGS\nDepreciation improves price competitiveness of exports.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-007', chapter: '2.7', topic: 'International Competitiveness', difficulty: 3,
    front: "How did the mining boom affect Australia's manufacturing competitiveness?",
    back: "The mining boom (2000s–2010s) caused:\n1. AUD to appreciate (high commodity export earnings pushed up AUD)\n2. Higher AUD made Australian manufactured goods MORE EXPENSIVE overseas → reduced competitiveness\n3. Increased competition from Asian manufacturers (China) who produce at lower cost\n4. Resources sector drew workers and investment away from manufacturing ('Dutch Disease' effect)\nResult: Manufacturing's share of exports declined further during the mining boom.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-008', chapter: '2.7', topic: 'International Competitiveness', difficulty: 2,
    front: "How does trade liberalisation affect Australia's international competitiveness?",
    back: "Trade liberalisation (reducing tariffs and trade barriers):\n• Positive: Opens new export markets via FTAs (e.g. ChAFTA — China-Australia Free Trade Agreement)\n• Positive: Forces domestic firms to become more competitive\n• Positive: Reduces cost of imported inputs (intermediate goods) for manufacturers\n• Negative: Exposes domestic industries to more import competition → manufacturing decline\n• Negative: Australia's agricultural exports still face barriers from other protected markets (e.g. EU)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-009', chapter: '2.7', topic: 'International Competitiveness', difficulty: 2,
    front: "What percentage of Australia's workforce is employed in services, and why is this significant?",
    back: "~75% of Australia's workforce is in services. This is significant because:\n• Australia has a large pool of skilled service workers\n• Yet services only account for ~20% of exports → untapped export potential\n• Australia's export base has not kept pace with its service economy\n• The growing Asian middle class creates demand for Australian services\n• Expanding service exports could diversify the export base and reduce CAD vulnerability",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch07-010', chapter: '2.7', topic: 'International Competitiveness', difficulty: 3,
    front: "Explain how a continual CAD can lead to even greater CADs in the future.",
    back: "1. Persistent CAD → requires capital inflows (KFA surplus) via borrowing or asset sales\n2. Foreign debt accumulates → servicing costs (interest) grow → debit on Net Primary Income\n3. Foreign equity accumulates → dividends/profits flow overseas → debit on Net Primary Income\n4. Larger Net Primary Income deficit → larger CAD\n5. Larger CAD → need even more capital inflows → more foreign liabilities → more servicing costs\n= Debt trap / self-reinforcing cycle",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch07-q001', chapter: '2.7', topic: 'International Competitiveness', type: 'mcq', difficulty: 2, marks: 1,
    question: "A narrow export base is a problem for Australia because:",
    options: [
      { label: 'a', text: 'It means Australia exports too many types of goods' },
      { label: 'b', text: 'It means Australia is vulnerable to commodity price fluctuations and demand shocks' },
      { label: 'c', text: 'It protects Australia from external economic shocks' },
      { label: 'd', text: 'It ensures Australia always achieves a Current Account surplus' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch07-q002', chapter: '2.7', topic: 'International Competitiveness', type: 'mcq', difficulty: 2, marks: 1,
    question: "Which of the following is a non-cost factor of international competitiveness?",
    options: [
      { label: 'a', text: 'The exchange rate' },
      { label: 'b', text: 'Domestic labour costs' },
      { label: 'c', text: 'Terms of Trade' },
      { label: 'd', text: 'Quality and reliability of supply' },
    ],
    correctOption: 'd',
  },
  {
    id: 'ch07-q003', chapter: '2.7', topic: 'International Competitiveness', type: 'short', difficulty: 3, marks: 4,
    question: "Identify cost and non-cost factors that affect Australia's international competitiveness, and explain how ONE cost factor affects the Current Account.",
    keyPoints: [
      "Cost factors: exchange rate, labour costs, terms of trade, government protection/trade policy, price",
      "Non-cost factors: quality, reliability of supply, workforce skills, customer service, government policy",
      "Exchange rate: AUD appreciation → exports more expensive → reduced demand → lower export revenue → worsened BOGS → larger CAD",
      "OR: Labour costs: higher wages → more expensive exports → less competitive → fewer exports → worsened BOGS",
    ],
    modelAnswer: "Cost factors affecting Australia's international competitiveness include: the exchange rate, domestic labour costs, the terms of trade, and government trade protection policies. Non-cost factors include: the quality of goods and services, the reliability of supply, the skills of the workforce, and customer service standards.\n\nOne important cost factor is the exchange rate. When the Australian dollar appreciates, Australian exports become more expensive for overseas buyers, reducing demand. This lowers export revenue, worsening the Balance on Goods and Services (BOGS) and therefore increasing the Current Account Deficit. Conversely, a depreciation of the AUD makes exports cheaper and more competitive overseas, improving the BOGS.",
  },
];
