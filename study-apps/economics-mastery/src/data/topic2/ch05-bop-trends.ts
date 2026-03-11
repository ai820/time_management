import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  // --- Historical CA Trends ---
  {
    id: 'ch05-001', chapter: '4.5', topic: "BOP Trends", difficulty: 1,
    front: "What was the average current account deficit (CAD) as a % of GDP in each decade from the 1970s to the 2010s?",
    back: `• **1970s**: 1.1% of GDP\n• **1980s**: 4.0% (alarmed economists → major structural reforms)\n• **1990s**: 4.1%\n• **2000s**: 4.9%\n• **2010s**: 2.5%\n• **2019-20**: first current account **SURPLUS** since 1973 (+**1.8%** of GDP = **+$35.8bn**)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-002', chapter: '4.5', topic: "BOP Trends", difficulty: 1,
    front: "When was Australia's record current account deficit, and how large was it?",
    back: `• Record CAD was in **2007-08**, at **6.6% of GDP** (= **-$78.0 billion**)\n• The 2019-20 surplus of **$35.8 billion** (+**1.8%** of GDP) was the first current account surplus since **1973**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  // --- BOGS Trends ---
  {
    id: 'ch05-003', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "What was the BOGS trend in the 2010s and what drove the record 2019-20 BOGS surplus?",
    back: `• BOGS improved significantly during the 2010s; surpluses from **2016-17**\n• **2019-20 BOGS surplus: $77.4bn** — highest on record\n• Driven by: (1) sustained **high commodity prices** (iron ore, coal); (2) **weaker import spending** due to lower household demand\n• **COVID-19** border closures reduced services imports more than services exports`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  // --- Cyclical Factors: BOGS ---
  {
    id: 'ch05-004', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "How does the exchange rate affect the BOGS?",
    back: `• **Depreciation** of A$:\n• Decreases the foreign currency price of exports → **more competitive** → increases export volumes\n• Increases the A$ price of imports → **discourages imports**\n• Both effects **improve BOGS**\n• A$ fell from US91c (2013-14) to US67c (2019-20) → contributed to record BOGS surplus`,
    detail: `The exchange rate is a key cyclical determinant of the BOGS. When the A$ depreciates, Australian exports become cheaper in foreign currency — a Chinese buyer pays fewer renminbi for Australian iron ore — boosting competitiveness and export volumes. Simultaneously, imports become more expensive in A$ terms, discouraging consumer and business spending on imported goods. Together these effects improve the trade balance. The depreciation from US91c to US67c over 2013-19 was a major contributor to the BOGS moving into surplus.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-005', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "What is the terms of trade (TOT) and how does it affect the BOGS?",
    back: `• **TOT** = Export Price Index / Import Price Index × 100\n• An **improvement** (export prices rising faster) → same volume of exports buys more imports → **improves BOGS**\n• Largest sustained TOT boom in history: **2003–2011** (TOT doubled; peaked at **85% above 20th-century average** in 2011)\n• Low point: **March 2016**; then recovered due to rising commodity prices`,
    detail: `The terms of trade is crucial for Australia because it measures the purchasing power of exports. When the TOT improves — export prices rise faster than import prices — Australia earns more foreign currency per unit exported, allowing it to import more without worsening the BOGS. The 2003-2011 commodity boom drove the most dramatic TOT improvement in Australian history, though the subsequent fall from 2011 to 2016 reversed much of this gain.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-006', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "How does the international business cycle affect Australia's BOGS?",
    back: `• A **slowdown in global growth** or weaker growth in key trading partners → reduced demand for Australian exports → **worsens BOGS**\n• Australia more closely integrated with **faster-growing Asian economies** than many developed countries\n• Strong Asian growth → boosts demand for Australian **commodity exports**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-007', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "How does the domestic economic cycle affect the BOGS?",
    back: `• Domestic **upturn** → increased business investment + higher disposable income → **more imports** → worsens BOGS\n• Example: during the commodities boom, high business investment and household income **worsened the BOGS** despite rising terms of trade\n• Import spending **surged** as the domestic economy expanded`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  // --- Structural Factors: BOGS ---
  {
    id: 'ch05-008', chapter: '4.5', topic: "BOP Trends", difficulty: 3,
    front: "What structural factors explain the ongoing BOGS challenges for Australia?",
    back: `• **Narrow export base**: heavily weighted to bulk commodities (minerals + agriculture ≈ two-thirds of earnings); commodity prices are **volatile** with long-run downward trend\n• **Lack of manufacturing competitiveness**: must import expensive high-value capital and consumer goods\n• Need to **diversify into ETMs** and services; coal faces **structural decline** as world moves away from fossil fuels\n• **Infrastructure constraints**: early 2000s revealed port/road/rail bottlenecks; investment in 2010s eased these`,
    detail: `Structural BOGS challenges reflect deep features of Australia's economy. Australia's comparative advantage lies in bulk commodities, but commodity prices are cyclical and historically decline in real terms over the long run. Meanwhile, Australia's underdeveloped manufacturing sector forces it to import capital goods at high cost. Diversification is frequently recommended — ETMs (like medical devices, food processing) and services (education, professional services) offer higher value-added potential. Infrastructure investment in the 2010s (ports, rail) helped ease supply bottlenecks that had constrained export volumes during the 2000s boom.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  // --- NPY Trends ---
  {
    id: 'ch05-009', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "What is the primary income account and what is its structural significance?",
    back: `• **Net primary income (NPY)** records interest on foreign debt and dividends on foreign equity\n• Tends to record a deficit of **2–3% of GDP**; in 2019-20: **-2.0% of GDP**\n• **Structural cause** of Australia's ongoing CAD — even when BOGS improves, NPY deficit means overall CA can still show a deficit`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-010', chapter: '4.5', topic: "BOP Trends", difficulty: 1,
    front: "What were Australia's net interest payments in 2019-20?",
    back: `• **$19.6 billion** in net interest payments in 2019-20\n• Interest and dividends together form the **NPY deficit of -$40.2 billion**\n• Credits: **$69.0bn**; Debits: **-$109.2bn**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-011', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "How does the exchange rate affect the net primary income (NPY) account? (valuation effect)",
    back: `• **Depreciation** increases the A$ value of debt denominated in foreign currencies → **worsens NPY deficit** (valuation effect)\n• Effect is **small in the short term** because:\n• A large amount of foreign debt is **'hedged'** (lender and borrower fix the exchange rate over the loan period)\n• A significant portion of Australia's foreign debt is **denominated in A$** → immune from exchange rate movements`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-012', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "How do interest rates affect the NPY account?",
    back: `• **Lower interest rates** → reduced debt servicing costs → **narrows the NPY deficit**\n• Decline in A$ and global interest rates to record lows has reduced the cost of debt servicing\n• Increase in the share of foreign liabilities owed by the **government sector** (lower default risk → lower interest rate) also narrowed NPY deficit`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-013', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "How does the domestic business cycle affect the NPY account (equity servicing)?",
    back: `• Strong domestic growth → higher company profits → **more dividends paid to foreign shareholders** → worsens NPY\n• Approximately **40% of the Australian share market is foreign-owned**\n• Australia's **mining sector** is mostly foreign-owned → high mining profits generate significant dividend outflows, worsening the NPY deficit`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-014', chapter: '4.5', topic: "BOP Trends", difficulty: 3,
    front: "What is the 'savings-investment gap' and why is it a structural cause of the NPY deficit?",
    back: `• Australia's **historically low domestic savings** + high investment needs → must **borrow overseas** or sell Australian assets\n• **Borrowing** raises foreign debt → **interest outflows** (NPY debit)\n• **Selling assets** raises foreign equity → **dividend outflows** (NPY debit)\n• Both create future NPY obligations\n• This gap is the **fundamental structural cause** of Australia's persistent CAD`,
    detail: `The savings-investment gap explains why Australia cannot escape its NPY deficit without fundamental changes to savings behaviour. When domestic savings fall short of investment requirements, Australia must either borrow (creating interest obligations) or sell equity (creating dividend obligations). Both appear as NPY debits. Compulsory superannuation was introduced partly to address this gap by raising mandatory savings over time, but Australia still runs one of the highest levels of household debt in the industrialised world.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch05-015', chapter: '4.5', topic: "BOP Trends", difficulty: 2,
    front: "What policy responses has Australia used to address the savings-investment gap?",
    back: `• **Compulsory superannuation**: mandated employer contributions raise national savings over time\n• **Tax incentives** encouraging private savings\n• **Fiscal consolidation**: budget surpluses = positive public savings contribution (reducing government's call on foreign capital)\n• Post-COVID debate: how quickly to reduce the budget deficit to reduce pressure on national savings`,
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
  {
    id: 'ch05-q006', chapter: '4.5', topic: "BOP Trends", type: 'mcq', difficulty: 1, marks: 1,
    question: "The 2019-20 current account surplus of +$35.8 billion was significant because it was:",
    options: [
      { label: 'a', text: 'The first current account surplus since 1989' },
      { label: 'b', text: 'The first current account surplus since 1973' },
      { label: 'c', text: 'The largest current account surplus in Australian history' },
      { label: 'd', text: 'The first time the BOGS had been in surplus' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch05-q007', chapter: '4.5', topic: "BOP Trends", type: 'mcq', difficulty: 1, marks: 1,
    question: "Australia's compulsory superannuation system (introduced 1992) was partly designed to address the CAD by:",
    options: [
      { label: 'a', text: 'Reducing government expenditure on social welfare' },
      { label: 'b', text: 'Raising domestic savings, reducing reliance on overseas borrowing' },
      { label: 'c', text: 'Increasing the supply of Australian dollars in the forex market' },
      { label: 'd', text: 'Funding infrastructure investment to boost export volumes' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch05-q008', chapter: '4.5', topic: "BOP Trends", type: 'mcq', difficulty: 2, marks: 1,
    question: "During the mining boom of 2003–2011, Australia's terms of trade:",
    options: [
      { label: 'a', text: 'Fell steadily as commodity prices declined' },
      { label: 'b', text: 'Remained broadly stable as export and import prices rose at similar rates' },
      { label: 'c', text: 'Doubled, peaking at approximately 85% above the 20th-century average in 2011' },
      { label: 'd', text: 'Improved modestly by around 20%, driven by services exports' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch05-q009', chapter: '4.5', topic: "BOP Trends", type: 'mcq', difficulty: 2, marks: 1,
    question: "A depreciation of the Australian dollar is most likely to have which effect on the net primary income (NPY) account?",
    options: [
      { label: 'a', text: 'Improve the NPY balance by reducing overseas borrowing costs' },
      { label: 'b', text: 'Worsen the NPY deficit through the valuation effect on foreign-currency-denominated debt' },
      { label: 'c', text: 'Have no effect because most foreign debt is denominated in A$' },
      { label: 'd', text: 'Improve the NPY balance by making Australian exports cheaper' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch05-q010', chapter: '4.5', topic: "BOP Trends", type: 'mcq', difficulty: 2, marks: 1,
    question: "Which of the following BEST explains why strong domestic economic growth tends to worsen the BOGS?",
    options: [
      { label: 'a', text: 'Higher growth reduces export competitiveness through currency appreciation' },
      { label: 'b', text: 'Higher incomes and business investment increase spending on imports' },
      { label: 'c', text: 'The RBA raises interest rates during booms, attracting capital inflows' },
      { label: 'd', text: 'Export volumes fall during booms as firms focus on the domestic market' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch05-q011', chapter: '4.5', topic: "BOP Trends", type: 'mcq', difficulty: 2, marks: 1,
    question: "Australia's average current account deficit as a percentage of GDP was highest during which decade?",
    options: [
      { label: 'a', text: '1970s (1.1% of GDP)' },
      { label: 'b', text: '1980s (4.0% of GDP)' },
      { label: 'c', text: '1990s (4.1% of GDP)' },
      { label: 'd', text: '2000s (4.9% of GDP)' },
    ],
    correctOption: 'd',
  },
  {
    id: 'ch05-q012', chapter: '4.5', topic: "BOP Trends", type: 'mcq', difficulty: 3, marks: 1,
    question: "Why does approximately 40% foreign ownership of the Australian share market create a structural challenge for the BOP?",
    options: [
      { label: 'a', text: 'It reduces the amount of tax revenue collected by the Australian government' },
      { label: 'b', text: 'It means strong company profits generate large dividend outflows recorded as NPY debits, widening the CAD' },
      { label: 'c', text: 'It forces the RBA to hold more foreign exchange reserves to stabilise the A$' },
      { label: 'd', text: 'It reduces domestic investment by crowding out Australian shareholders' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch05-q013', chapter: '4.5', topic: "BOP Trends", type: 'short', difficulty: 2, marks: 4,
    question: "Explain how the exchange rate affects both the BOGS and the NPY account, referring to the A$ depreciation from US91c to US67c between 2013 and 2019.",
    keyPoints: [
      "Depreciation → lower foreign currency price of Australian exports → more competitive → higher export volumes → improves BOGS",
      "Depreciation → higher A$ price of imports → discourages consumer/business import spending → improves BOGS",
      "A$ fell from US91c (2013-14) to US67c (2019-20), contributing to the record BOGS surplus of $77.4bn",
      "Valuation effect: depreciation raises the A$ value of foreign-currency-denominated debt → increases interest servicing costs → worsens NPY deficit",
      "Effect on NPY is limited by hedging and A$-denominated debt, so net impact on CA is positive",
    ],
    modelAnswer: "A depreciation of the Australian dollar has a dual effect on the balance of payments. For the BOGS, depreciation lowers the foreign currency price of Australian exports, making them more competitive in global markets and boosting export volumes. At the same time, it raises the A$ price of imports, discouraging household and business import spending. Both effects improve the BOGS. The A$'s fall from US91 cents in 2013-14 to US67 cents by 2019-20 was a major contributor to the record BOGS surplus of $77.4 billion that year. However, depreciation also worsens the net primary income account through the valuation effect: the A$ value of foreign-currency-denominated debt rises, increasing interest servicing costs and widening the NPY deficit. This effect is partially offset because a significant portion of Australia's foreign debt is either denominated in A$ or hedged, meaning the overall impact of depreciation on the current account is typically positive.",
  },
  {
    id: 'ch05-q014', chapter: '4.5', topic: "BOP Trends", type: 'short', difficulty: 3, marks: 6,
    question: "Explain the concept of the 'savings-investment gap' and assess two policy responses the Australian government has used to address it.",
    keyPoints: [
      "Savings-investment gap: domestic investment > domestic savings → must borrow overseas or sell assets to fund the shortfall",
      "Borrowing raises foreign debt (→ interest outflows on NPY); selling assets raises foreign equity (→ dividend outflows on NPY)",
      "Both widen the NPY deficit and contribute to a structural CAD",
      "Policy 1: Compulsory superannuation (introduced 1992, now 9.5%) mandates employer contributions → raises national savings over time → reduces need for overseas borrowing",
      "Policy 2: Fiscal consolidation — budget surpluses = positive public savings → reduces government's call on foreign capital → narrows CAD",
      "Limitation: household debt remains among highest in industrialised world; structural savings gap persists",
    ],
    modelAnswer: "The savings-investment gap arises because Australia's domestic investment consistently exceeds its domestic savings. To bridge this gap, Australia must either borrow from overseas — creating foreign debt with associated interest payments recorded as NPY debits — or sell equity in Australian assets to foreign investors, generating dividend outflows also recorded as NPY debits. Both widen the net primary income deficit and contribute to a structural current account deficit. Australia has used two main policy responses. First, compulsory superannuation — introduced in 1992 and raised to 9.5% of wages — mandates employer contributions to retirement accounts, accumulating a large pool of national savings over time. This reduces Australia's reliance on overseas borrowing by gradually closing the domestic savings shortfall. Second, fiscal consolidation involves the government running budget surpluses, which constitute positive public savings and reduce the government sector's contribution to the savings-investment gap, lessening Australia's need for foreign capital inflows. While both policies have helped moderate the CAD — contributing to the 2010s improvement — Australia's household debt remains among the highest in the industrialised world, and the structural savings gap persists.",
  },
  {
    id: 'ch05-q015', chapter: '4.5', topic: "BOP Trends", type: 'short', difficulty: 2, marks: 4,
    question: "Describe two structural factors that have contributed to persistent challenges in improving Australia's BOGS.",
    keyPoints: [
      "Narrow export base: two-thirds of export earnings from bulk commodities (minerals, agriculture) — commodity prices are volatile and trend downward in real terms",
      "Lack of manufacturing competitiveness: Australia must import high-value capital and consumer goods, creating structural import demand",
      "Infrastructure constraints: port/road/rail bottlenecks constrained export volumes during 2000s boom (eased by 2010s investment)",
      "Structural coal decline: global shift away from fossil fuels threatens a major export category",
    ],
    modelAnswer: "Two structural factors have persistently challenged Australia's BOGS. First, Australia's narrow and commodity-dependent export base: minerals and agriculture account for roughly two-thirds of export earnings, but commodity prices are highly volatile and have historically declined in real terms over the long run. This exposes Australia's BOGS to sharp deteriorations when global commodity demand weakens or prices fall — as occurred after the mining boom peaked in 2011. Second, Australia's lack of manufacturing competitiveness creates a structural import dependency. Because Australia's manufacturing sector is underdeveloped relative to most advanced economies, it must import high-value capital goods and consumer goods at significant cost, creating persistent demand for imports that is difficult to reduce without microeconomic structural change. Diversification into elaborately transformed manufactures (ETMs) and services exports is frequently recommended as a long-run solution.",
  },
];
