import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  // --- Historical CA Trends ---
  {
    id: 'ch05-001', chapter: '4.5', topic: "BOP Trends", difficulty: 1,
    front: "What was the average current account deficit (CAD) as a % of GDP in each decade from the 1970s to the 2010s?",
    back: "Historical CAD averages as % of GDP:\n• 1970s: 1.1% of GDP\n• 1980s: 4.0% (alarmed economists → major structural reforms)\n• 1990s: 4.1%\n• 2000s: 4.9%\n• 2010s: 2.5%\n• 2019-20: first current account SURPLUS since 1973 (+1.8% of GDP = +$35.8bn)",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-002', chapter: '4.5', topic: "BOP Trends", difficulty: 1,
    front: "When was Australia's record current account deficit, and how large was it?",
    back: "Australia's record CAD was in 2007-08, at 6.6% of GDP (= -$78.0 billion). The 2019-20 surplus of $35.8 billion (+1.8% of GDP) was the first current account surplus since 1973.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  // --- BOGS Trends ---
  {
    id: 'ch05-003', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "What was the BOGS trend in the 2010s and what drove the record 2019-20 BOGS surplus?",
    back: "The BOGS improved significantly during the 2010s with surpluses from 2016-17. The 2019-20 BOGS surplus of $77.4bn was the highest on record.\nTwo main reasons: (1) sustained high commodity prices (especially iron ore, metallurgical coal, thermal coal); (2) weaker spending on imports due to lower household demand and business investment. COVID-19 border closures reduced services imports more than services exports.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  // --- Cyclical Factors: BOGS ---
  {
    id: 'ch05-004', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "How does the exchange rate affect the BOGS?",
    back: "A depreciation of the A$:\n• Decreases the foreign currency price of Australian exports → more internationally competitive → increases export volumes\n• Increases the A$ price of imports → discourages imports\n→ Both effects improve BOGS.\nExample: A$ fell from average US91c (2013-14) to US77c (2017-18) to US67c (2019-20), contributing to the record BOGS surplus.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-005', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "What is the terms of trade (TOT) and how does it affect the BOGS?",
    back: "Terms of trade (TOT) = Export Price Index / Import Price Index × 100.\nAn improvement (export prices rising faster than import prices) means the same volume of exports buys more imports → improves BOGS (unless export volumes fall significantly).\nLargest sustained TOT boom in history: 2003–2011 (TOT doubled; peaked at 85% above 20th-century average in 2011). Low point: March 2016. Then recovered due to rising commodity prices.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-006', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "How does the international business cycle affect Australia's BOGS?",
    back: "A slowdown in global growth or weaker growth in key regional trading partners → reduced demand for Australian exports → worsens BOGS. Australia is more closely integrated with faster-growing Asian economies than many developed countries, making it relatively more exposed to Asian cyclical conditions. Strong Asian growth, conversely, boosts demand for Australian commodity exports.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-007', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "How does the domestic economic cycle affect the BOGS?",
    back: "An upturn in the domestic business cycle → increased business investment + higher disposable income → higher consumption → more imports → worsens BOGS.\nExample: during the commodities boom, high business investment and household income worsened the BOGS despite rising terms of trade because import spending surged.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  // --- Structural Factors: BOGS ---
  {
    id: 'ch05-008', chapter: '4.5', topic: "BOP Trends", difficulty: 3,
    front: "What structural factors explain the ongoing BOGS challenges for Australia?",
    back: "1. Narrow export base: exports heavily weighted towards bulk commodities (minerals + agriculture ≈ two-thirds of export earnings); commodity prices are volatile; long-term downward trend historically.\n2. Lack of international manufacturing competitiveness: must import expensive high-value capital and consumer goods.\n3. Need to diversify: ETMs (elaborately transformed manufactures) and services (education, tourism) hold greatest potential; coal faces structural decline as world moves away from fossil fuels.\n4. Infrastructure constraints: early 2000s boom revealed port, road, rail bottlenecks; government and private investment in 2010s eased these.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  // --- NPY Trends ---
  {
    id: 'ch05-009', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "What is the primary income account and what is its structural significance?",
    back: "The net primary income (NPY) account records interest on foreign debt and dividends on foreign equity. It tends to record a deficit of 2–3% of GDP; in 2019-20 it was -2.0% of GDP. NPY is a structural cause of Australia's ongoing CAD — even when BOGS improves, the NPY deficit means Australia can still run an overall current account deficit.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-010', chapter: '4.5', topic: "BOP Trends", difficulty: 1,
    front: "What were Australia's net interest payments in 2019-20?",
    back: "$19.6 billion in net terms in 2019-20. Interest and dividends together form the NPY deficit of -$40.2 billion (credits $69.0bn, debits -$109.2bn).",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-011', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "How does the exchange rate affect the net primary income (NPY) account? (valuation effect)",
    back: "Depreciation increases the A$ value of debt denominated in foreign currencies → worsens NPY deficit (valuation effect). However, many economists note this effect is small in the short term because:\n(a) A large amount of foreign debt is 'hedged' (lender and borrower agree to fix the exchange rate over the loan period)\n(b) A significant portion of Australia's foreign debt is denominated in A$, making it immune from exchange rate movements",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-012', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "How do interest rates affect the NPY account?",
    back: "Lower Australian and global interest rates → reduced debt servicing costs → narrows the NPY deficit. The decline in A$ and global interest rates to record lows has reduced the cost of debt servicing. Also, the increase in the share of foreign liabilities owed by the government sector (which has a lower default risk → lower interest rate) contributed to narrowing the NPY deficit.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-013', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "How does the domestic business cycle affect the NPY account (equity servicing)?",
    back: "Strong domestic growth → higher company profits → more dividends paid to foreign shareholders → worsens NPY (equity servicing costs). Approximately 40% of the Australian share market is foreign-owned. Australia's mining sector is mostly foreign-owned, so high mining profits generate significant dividend outflows, worsening the NPY deficit.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-014', chapter: '4.5', topic: "BOP Trends", difficulty: 3,
    front: "What is the 'savings-investment gap' and why is it a structural cause of the NPY deficit?",
    back: "Australia's historically low domestic savings + high investment needs (especially mining) → must borrow overseas or sell Australian assets. Borrowing raises foreign debt → interest outflows (NPY debit). Selling assets raises foreign equity → dividend outflows (NPY debit). Both create future NPY obligations. This savings-investment gap is the fundamental structural cause of Australia's persistent CAD. Between 1970s–2000s, household and public savings declined; Australia has one of the highest levels of household debt in the industrialised world.",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-015', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "What policy responses has Australia used to address the savings-investment gap?",
    back: "1. Compulsory superannuation: mandated employer contributions raise national savings over time\n2. Tax incentives encouraging private savings\n3. Fiscal consolidation: budget surpluses = positive public savings contribution (reducing government's call on foreign capital)\n4. Post-COVID debate: how quickly to reduce the budget deficit to reduce pressure on national savings and limit reliance on overseas borrowing",
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch05-q001', chapter: '4.5', topic: "BOP Trends", type: 'mcq', difficulty: 1, marks: 1,
    question: "Australia's record current account deficit occurred in:",
    options: [
      { label: 'a', text: '1989-90, at 6.0% of GDP' },
      { label: 'b', text: '2007-08, at 6.6% of GDP (= -$78.0 billion)' },
      { label: 'c', text: '2000-01, at 5.9% of GDP' },
      { label: 'd', text: '2019-20, at 4.9% of GDP' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch05-q002', chapter: '4.5', topic: "BOP Trends", type: 'mcq', difficulty: 2, marks: 1,
    question: "The terms of trade is calculated as:",
    options: [
      { label: 'a', text: 'Value of exports / value of imports × 100' },
      { label: 'b', text: 'Export price index / import price index × 100' },
      { label: 'c', text: 'Volume of exports / volume of imports × 100' },
      { label: 'd', text: 'Import price index / export price index × 100' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch05-q003', chapter: '4.5', topic: "BOP Trends", type: 'mcq', difficulty: 2, marks: 1,
    question: "Approximately what share of the Australian share market is foreign-owned, contributing to equity servicing outflows?",
    options: [
      { label: 'a', text: '20%' },
      { label: 'b', text: '30%' },
      { label: 'c', text: '40%' },
      { label: 'd', text: '60%' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch05-q004', chapter: '4.5', topic: "BOP Trends", type: 'short', difficulty: 3, marks: 6,
    question: "Analyse four cyclical and/or structural factors that affect Australia's Balance on Goods and Services (BOGS), using specific data where possible.",
    keyPoints: [
      "Exchange rate: depreciation → lower foreign currency price of exports → more competitive; higher A$ price of imports → discourages imports; A$ fell from US91c (2013-14) to US67c (2019-20)",
      "Terms of trade: TOT = export price index / import price index × 100; 2003-2011 boom doubled TOT; peaked 85% above 20th-century average in 2011",
      "International business cycle: slowdown in trading partners → reduced export demand; Australia closely integrated with Asia",
      "Domestic business cycle: upturn → more imports → worsens BOGS; commodities boom saw high investment worsen BOGS despite rising TOT",
      "Structural: narrow export base in commodities (volatile prices); lack of manufacturing competitiveness; need to diversify into ETMs and services",
      "Infrastructure constraints: port/rail bottlenecks during 2000s boom; investment in 2010s eased constraints",
    ],
    modelAnswer: "Four key factors affect Australia's BOGS. First, the exchange rate: a depreciation of the A$ lowers the foreign currency price of Australian exports, making them more competitive and boosting export volumes, while making imports more expensive in A$ terms, discouraging imports. The A$ fell from an average of US91 cents in 2013-14 to US67 cents in 2019-20, contributing to the record BOGS surplus of $77.4 billion. Second, the terms of trade: an improvement in the TOT (export prices rising faster than import prices) means the same volume of exports can buy more imports, improving BOGS. Australia experienced the largest sustained TOT boom in history from 2003 to 2011, with the TOT doubling and peaking at 85% above its 20th-century average in 2011. Third, the international business cycle: a slowdown in global growth, particularly in key Asian trading partners, reduces demand for Australian commodity exports, worsening BOGS. Australia's closer integration with fast-growing Asian economies compared to most developed countries means it is especially exposed to Asian cycles. Fourth, structural factors: Australia's narrow export base — minerals and agriculture account for roughly two-thirds of export earnings — means commodity price volatility creates large BOGS fluctuations, while a lack of manufacturing competitiveness forces Australia to import expensive capital and consumer goods.",
  },
  {
    id: 'ch05-q005', chapter: '4.5', topic: "BOP Trends", type: 'short', difficulty: 3, marks: 6,
    question: "Explain the structural causes of Australia's persistent net primary income deficit and outline two policies to address the underlying savings-investment gap.",
    keyPoints: [
      "Australia is a net capital importer due to historically low domestic savings",
      "Low savings → must borrow from overseas (raises foreign debt → interest outflows on NPY) or sell assets (raises foreign equity → dividend outflows on NPY)",
      "NPY deficit tends to be 2-3% of GDP; in 2019-20: -2.0% of GDP (-$40.2bn)",
      "~40% of Australian share market foreign-owned; mining sector mostly foreign-owned → large dividend outflows when profits high",
      "Policy 1: compulsory superannuation raises national savings over time",
      "Policy 2: fiscal consolidation (budget surplus = positive public savings contribution) reduces government demand for foreign capital",
    ],
    modelAnswer: "Australia's persistent NPY deficit is structurally caused by the savings-investment gap. Australia's historically low level of domestic savings means it cannot fund its investment needs domestically. To bridge the gap, Australia must either borrow from overseas — raising foreign debt and creating ongoing interest payment obligations recorded as NPY debits — or sell equity stakes in Australian assets to foreign investors, generating dividend outflows also recorded as NPY debits. Since approximately 40% of the Australian share market is foreign-owned and Australia's mining sector is predominantly foreign-owned, strong economic growth generates significant dividend outflows that widen the NPY deficit. The NPY deficit has tended to run at 2-3% of GDP, amounting to -$40.2 billion in 2019-20. Two policy responses address the underlying savings gap: first, compulsory superannuation mandates employer contributions that accumulate over time, gradually raising national savings and reducing reliance on foreign capital; second, fiscal consolidation — running budget surpluses — increases public savings, reducing the government sector's contribution to the savings-investment gap and lessening the need for overseas borrowing.",
  },
];
