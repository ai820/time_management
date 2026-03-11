import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch06-001', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 1,
    front: "When does the IMF consider a current account deficit 'too high'?",
    back: `• IMF considers a CAD **'too high'** if it averages over **4% of GDP** in the medium to long term\n• OR above **6% of GDP** in the short term\n• Australia's record CAD: **6.6% of GDP** in 2007-08`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-002', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 2,
    front: "What is the first consequence of a sustained high CAD? (growth of foreign liabilities)",
    back: `• A sustained high CAD → increased **foreign liabilities** (debt and equity)\n• CA deficit is financed by KFA inflows: **foreign debt** or **selling equity** in Australian assets\n• If CAD remains high for many years → foreign liabilities **accumulate to very large levels**\n• Overseas lenders may become **reluctant to lend** to or invest in Australia`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-003', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 2,
    front: "How does a high CAD lead to increased servicing costs?",
    back: `• High foreign liabilities → larger **outflows of interest and dividends** on the NPY account → worsens CAD\n• Foreign lenders may demand a **'risk premium'** on loans to Australia\n• Forces up **interest rates** → further widening the NPY deficit\n• Servicing costs can become self-reinforcing`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-004', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 2,
    front: "How can a high CAD increase exchange rate volatility?",
    back: `• High CAD may **undermine confidence** of overseas investors in the Australian economy\n• If confidence falls, demand for the A$ decreases → possible **depreciation**\n• Exchange rate volatility creates **uncertainty for businesses**\n• Depreciation also **worsens the NPY deficit** by increasing A$ value of foreign-currency-denominated debt`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-005', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 2,
    front: "How does a high CAD create a constraint on economic growth?",
    back: `• In the longer term, a high CAD may become a **'balance of payments constraint'** — a speed limit on growth\n• Higher economic growth → more imports → **worsens the CAD**\n• Economies with a CAD problem are **forced to limit growth** to the level at which CAD is sustainable\n• Cannot grow as fast as productive capacity otherwise allows`,
    detail: `The balance of payments constraint operates because domestic demand growth inevitably spills into import demand. If Australia grows too fast relative to its trading partners, imports surge faster than exports, widening the CAD. Lenders or investors may then reduce capital inflows, putting downward pressure on the currency and forcing tighter monetary or fiscal policy. This effectively imposes a growth "speed limit" below the economy's productive potential.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-006', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 2,
    front: "How does a high CAD lead to more contractionary economic policy?",
    back: `• Governments may respond to a high CAD with **tighter macroeconomic policies** (higher interest rates, tighter fiscal policy)\n• And by accelerating **microeconomic reform** to improve competitiveness\n• In the short run, tighter fiscal and monetary policies **reduce economic growth** and living standards\n• The medicine for a high CAD can itself **impose economic costs**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-007', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 3,
    front: "What is the 'loss of international investor confidence' risk from a sustained high CAD?",
    back: `• Economic crises can be triggered by a **sudden shift** in global financial market attitudes toward a country\n• Countries with high CADs and high foreign debt are **more vulnerable** to such sentiment shifts\n• Investor confidence can change **suddenly and rapidly**\n• **Argentina** has experienced recurrent economic crises since 2018 as an example of this risk`,
    detail: `Market sentiment can be self-fulfilling. If global investors collectively decide a country's external imbalance is unsustainable, they begin selling its assets and currency. This depreciation increases debt-servicing costs, worsening the CAD and validating the initial concern. The resulting capital flight can trigger a full-blown balance of payments crisis — as seen in Argentina (2001, 2018), Thailand (1997), and other emerging markets. Australia's strong institutions and natural resource wealth provide some protection, but this risk cannot be dismissed.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-008', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 3,
    front: "What argument do some economists make that a high CAD may NOT be harmful?",
    back: `• If the government is **not contributing** to the CAD, external imbalances simply reflect **normal market transactions** between private agents\n• A CAD and foreign debt can be **beneficial** if borrowing from overseas **increases investment** and helps the economy grow faster\n• CAD is simply the result of **rational private-sector decisions** and does not require policy intervention`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-009', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 2,
    front: "Why has Australia's sustained high CAD not caused significant problems in recent years?",
    back: `• CAD improved significantly during 2010s; **first surplus since 1973** in 2019-20\n• Financial markets tolerated it because **natural resource wealth** underpins strong export growth\n• Era of globalisation: markets more willing to accept **external imbalances**\n• IMF (Feb 2018) identified: reduced import expenditure; increased post-GFC savings; tighter regulations; **sustained low global interest rates**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-010', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 2,
    front: "What level of CAD does the IMF consider sustainable for Australia in the medium term?",
    back: `• IMF: if Australia keeps CAD at average **2.5–3% of GDP**, foreign liabilities would stabilise at ~**55% of GDP**\n• This is **'broadly consistent with medium-term fundamentals and desirable policies'**\n• Above 4% medium-term: risks become **significant**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-011', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 3,
    front: "What warning did Brain and Manning (2017) issue about Australia's CAD?",
    back: `• **Brain and Manning** in **'Credit Code Red'** (2017) warned that Australia's high CAD may re-emerge as a **long-term risk**\n• A country may sustain an external imbalance for **many years** before it suddenly becomes a **major problem**\n• Apparent stability does **not guarantee** indefinite sustainability`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-012', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 2,
    front: "What are the potential future vulnerabilities that could re-open Australia's CAD problem?",
    back: `• **Adverse Chinese economic developments** (China = 36.1% of exports; any slowdown heavily impacts commodity demand)\n• A **fall in commodity prices** (especially iron ore — Australia's largest export)\n• **Rising global interest rates** → increase interest servicing costs on foreign debt → widen NPY deficit\n• **Changes in global credit conditions** → reduced willingness of foreign lenders to fund external imbalances`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-013', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 3,
    front: "Identify and explain all six consequences of a sustained high CAD.",
    back: `• **1. Growth of foreign liabilities**: accumulation of debt and equity; lenders may become reluctant\n• **2. Increased servicing costs**: larger NPY outflows; risk premium demanded raises interest rates\n• **3. Increased exchange rate volatility**: loss of investor confidence → depreciation → uncertainty\n• **4. Constraint on economic growth**: 'balance of payments constraint' limits growth\n• **5. More contractionary economic policy**: fiscal/monetary tightening → reduces short-term growth\n• **6. Loss of international investor confidence**: sudden shift in sentiment can trigger economic crisis (e.g. Argentina since 2018)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch06-014', chapter: '4.6', topic: "Consequences of High CAD", difficulty: 2,
    front: "How did the four IMF factors (February 2018) explain the improvement in Australia's CAD in the 2010s?",
    back: `• **Import expenditure decreased** (domestic demand contracted more than in major trading partners)\n• **Increased saving** by households and businesses since the GFC → reduced need to borrow overseas\n• **Tighter regulatory requirements** + changed international lending conditions → banks held more funds in reserves\n• **Servicing costs lower** due to sustained low global interest rates`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch06-q001', chapter: '4.6', topic: "Consequences of High CAD", type: 'mcq', difficulty: 1, marks: 1,
    question: "The IMF considers a current account deficit 'too high' if it averages over what percentage of GDP in the medium to long term?",
    options: [
      { label: 'a', text: '2% of GDP' },
      { label: 'b', text: '3% of GDP' },
      { label: 'c', text: '4% of GDP' },
      { label: 'd', text: '6% of GDP' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch06-q002', chapter: '4.6', topic: "Consequences of High CAD", type: 'mcq', difficulty: 2, marks: 1,
    question: "A 'balance of payments constraint' means that:",
    options: [
      { label: 'a', text: 'The BOP must always equal zero under a floating exchange rate' },
      { label: 'b', text: 'An economy must limit its growth to the level at which the CAD remains sustainable' },
      { label: 'c', text: 'Foreign liabilities cannot exceed 55% of GDP' },
      { label: 'd', text: 'The government must maintain a budget surplus to offset the CAD' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch06-q003', chapter: '4.6', topic: "Consequences of High CAD", type: 'mcq', difficulty: 2, marks: 1,
    question: "According to the IMF, if Australia maintains a CAD of 2.5–3% of GDP, foreign liabilities would stabilise at approximately:",
    options: [
      { label: 'a', text: '35% of GDP' },
      { label: 'b', text: '45% of GDP' },
      { label: 'c', text: '55% of GDP' },
      { label: 'd', text: '70% of GDP' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch06-q004', chapter: '4.6', topic: "Consequences of High CAD", type: 'short', difficulty: 3, marks: 8,
    question: "Discuss four potential consequences of a sustained high current account deficit for the Australian economy.",
    keyPoints: [
      "Growth of foreign liabilities: CAD financed by KFA inflows → accumulation of debt and equity; lenders may become reluctant",
      "Increased servicing costs: high liabilities → larger NPY outflows; risk premium raises interest rates → worsens CAD further",
      "Exchange rate volatility: loss of investor confidence → depreciation → uncertainty for businesses; valuation effect worsens NPY",
      "Constraint on economic growth: higher growth → more imports → worse CAD → 'speed limit' on growth",
      "Contractionary policy: government tightens fiscal/monetary policy in response → reduces short-term growth",
      "Loss of investor confidence: sudden shift in market sentiment → economic crisis; Argentina example since 2018",
      "IMF: CAD 'too high' if over 4% of GDP medium term; record 6.6% in 2007-08",
    ],
    modelAnswer: "A sustained high current account deficit creates four key risks for the Australian economy. First, it leads to the growth of foreign liabilities. Each year's CAD must be financed by a KFA surplus — foreign debt or sales of equity in Australian assets. Over time these liabilities accumulate. If they grow very large, overseas lenders may become reluctant to lend to Australia, creating a potential funding crisis. Second, it increases servicing costs. Larger foreign liabilities generate larger interest and dividend outflows on the net primary income account, worsening the current account deficit itself. Foreign lenders may also demand a risk premium, raising Australian interest rates and compounding the problem. Third, a high CAD can cause exchange rate volatility. If international investors lose confidence in the sustainability of Australia's external position, demand for the A$ may fall, causing depreciation. While depreciation can help improve the BOGS, it also increases the A$ value of foreign-currency-denominated debt, worsening servicing costs. Fourth, a high CAD can become a constraint on economic growth. Higher economic growth generally increases imports and worsens the CAD. An economy with a CAD problem is therefore forced to limit its growth to the level at which the deficit remains sustainable — effectively imposing a 'speed limit' on the economy's growth rate relative to what its productive capacity might otherwise allow.",
  },
  {
    id: 'ch06-q005', chapter: '4.6', topic: "Consequences of High CAD", type: 'short', difficulty: 3, marks: 6,
    question: "Some economists argue that a high current account deficit is not necessarily harmful. Evaluate this view in the context of Australia's experience.",
    keyPoints: [
      "Argument for: if government not contributing, CAD reflects rational private market transactions; borrowing can fund investment and growth",
      "Argument for: Australia's high CAD not caused major crisis — natural resource wealth underpins export growth; era of globalisation",
      "Four IMF factors (2018) explain 2010s improvement; 2019-20 first surplus since 1973",
      "Counter: risks are real — Argentina example (recurring crises since 2018); investor confidence can change suddenly",
      "Brain and Manning ('Credit Code Red', 2017): country can sustain imbalance for many years before it suddenly becomes a problem",
      "Future vulnerabilities: adverse China developments; commodity price falls; rising global interest rates; changed credit conditions",
      "Balanced view: a CAD is manageable if kept at 2.5-3% of GDP (foreign liabilities ~55% of GDP per IMF); becomes risky if persistently above 4-6%",
    ],
    modelAnswer: "Some economists argue that a high CAD is not inherently harmful. If the government is not contributing to the deficit, external imbalances simply reflect private agents making rational decisions to borrow and invest. Moreover, borrowing from overseas can fund productive investment, boosting long-run growth — the CAD may be the price of a higher standard of living. Australia's experience lends some support to this view: despite decades of high CADs, Australia has not experienced the kind of balance of payments crisis seen in other countries, largely because natural resource wealth underpins strong export prospects and because the era of globalisation has made financial markets more willing to accept external imbalances. The CAD improved significantly during the 2010s, and Australia achieved its first current account surplus since 1973 in 2019-20. However, the view that a high CAD is harmless is incomplete. The risks are real: Argentina's recurrent crises since 2018 demonstrate that investor confidence can shift suddenly, triggering an economic crisis for heavily indebted economies. Brain and Manning's 2017 report 'Credit Code Red' warned that a country may sustain an external imbalance for many years before it suddenly becomes a major problem. Australia faces potential future vulnerabilities — an adverse development in China, a fall in commodity prices, rising global interest rates, or tightening global credit conditions — any of which could rapidly re-open the CAD problem. The IMF's benchmark is useful: a CAD averaging 2.5–3% of GDP stabilises foreign liabilities at around 55% of GDP, which is broadly sustainable. Persistently above 4–6% of GDP, the risks become significant.",
  },
  {
    id: 'ch06-q006', chapter: '4.6', topic: "Consequences of High CAD", type: 'mcq', difficulty: 1, marks: 1,
    question: "The IMF considers a current account deficit 'too high' in the short term if it exceeds:",
    options: [
      { label: 'a', text: '2% of GDP' },
      { label: 'b', text: '4% of GDP' },
      { label: 'c', text: '6% of GDP' },
      { label: 'd', text: '8% of GDP' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch06-q007', chapter: '4.6', topic: "Consequences of High CAD", type: 'mcq', difficulty: 1, marks: 1,
    question: "Which country is cited as an example of the risks of loss of international investor confidence for a heavily indebted economy?",
    options: [
      { label: 'a', text: 'Japan' },
      { label: 'b', text: 'Argentina' },
      { label: 'c', text: 'Germany' },
      { label: 'd', text: 'New Zealand' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch06-q008', chapter: '4.6', topic: "Consequences of High CAD", type: 'mcq', difficulty: 2, marks: 1,
    question: "A 'debt trap' in the context of the CAD occurs when:",
    options: [
      { label: 'a', text: 'The RBA raises interest rates to attract foreign capital' },
      { label: 'b', text: 'Australia must borrow overseas merely to pay the interest-servicing costs on its existing foreign debt' },
      { label: 'c', text: 'The government runs persistent budget deficits, forcing the central bank to print money' },
      { label: 'd', text: 'Foreign liabilities exceed 100% of GDP, triggering an IMF review' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch06-q009', chapter: '4.6', topic: "Consequences of High CAD", type: 'mcq', difficulty: 2, marks: 1,
    question: "Increased debt-servicing costs from a high CAD can become self-reinforcing because:",
    options: [
      { label: 'a', text: 'Rising exports increase corporate tax revenues, reducing the budget surplus' },
      { label: 'b', text: 'Foreign lenders may demand a risk premium, raising Australian interest rates and widening the NPY deficit further' },
      { label: 'c', text: 'Higher servicing costs encourage household saving, reducing import demand' },
      { label: 'd', text: 'The RBA is forced to appreciate the A$ to reduce import costs' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch06-q010', chapter: '4.6', topic: "Consequences of High CAD", type: 'mcq', difficulty: 2, marks: 1,
    question: "Which of the following is a policy response to a high CAD that works by reducing the government's contribution to the savings-investment gap?",
    options: [
      { label: 'a', text: 'Running persistent budget deficits to stimulate domestic demand' },
      { label: 'b', text: 'Fiscal consolidation — achieving budget surpluses to increase public savings' },
      { label: 'c', text: 'Lowering interest rates to discourage foreign capital inflows' },
      { label: 'd', text: 'Imposing import tariffs to directly restrict the BOGS deficit' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch06-q011', chapter: '4.6', topic: "Consequences of High CAD", type: 'mcq', difficulty: 2, marks: 1,
    question: "The 'balance of payments constraint' acts as a 'speed limit' on economic growth because:",
    options: [
      { label: 'a', text: 'The RBA must keep interest rates high to attract enough foreign capital' },
      { label: 'b', text: 'Faster growth increases import spending, worsening the CAD and forcing contractionary policy' },
      { label: 'c', text: 'Higher growth reduces productivity, making exports less competitive' },
      { label: 'd', text: 'The government must cut spending to maintain budget balance during growth periods' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch06-q012', chapter: '4.6', topic: "Consequences of High CAD", type: 'mcq', difficulty: 3, marks: 1,
    question: "Brain and Manning's 'Credit Code Red' (2017) warned that Australia's CAD situation is dangerous because:",
    options: [
      { label: 'a', text: 'Australia has never achieved a current account surplus and is unlikely to do so' },
      { label: 'b', text: 'A country can sustain an external imbalance for many years before it suddenly becomes a major problem' },
      { label: 'c', text: 'Australia\'s foreign liabilities already exceed 100% of GDP, past the IMF danger threshold' },
      { label: 'd', text: 'The compulsory superannuation system is insufficient to fund government debt repayments' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch06-q013', chapter: '4.6', topic: "Consequences of High CAD", type: 'short', difficulty: 2, marks: 4,
    question: "Explain how a sustained high current account deficit can lead to both increased foreign liabilities and higher debt-servicing costs, and why this relationship can become self-reinforcing.",
    keyPoints: [
      "CAD financed by KFA inflows (foreign debt or equity) → accumulation of foreign liabilities over time",
      "Higher foreign liabilities → larger interest and dividend outflows on NPY account → worsens CAD",
      "Foreign lenders may demand a risk premium on new loans → higher interest rates → further widening NPY deficit",
      "Self-reinforcing: rising liabilities → rising servicing costs → worsening CAD → more KFA inflows needed → more liabilities",
      "Extreme case: debt trap — borrowing purely to service existing interest obligations",
    ],
    modelAnswer: "A sustained high current account deficit must be financed by a matching capital and financial account surplus — Australia borrows from overseas or sells equity in Australian assets. Over time, these inflows accumulate as a growing stock of foreign liabilities (foreign debt plus foreign equity). The larger this stock becomes, the greater the annual outflows of interest and dividends on the net primary income account, which directly worsens the current account deficit. The relationship becomes self-reinforcing: a wider CAD requires an even larger KFA surplus, adding further to foreign liabilities, which in turn generates even greater servicing costs. Additionally, if foreign lenders perceive Australia's external position as increasingly risky, they may demand a risk premium on new loans, raising the effective interest rate on foreign borrowing and widening the NPY deficit further. In the most severe form, this creates a 'debt trap' in which Australia borrows simply to pay the interest on existing foreign debt, with the total debt burden spiralling upward.",
  },
  {
    id: 'ch06-q014', chapter: '4.6', topic: "Consequences of High CAD", type: 'short', difficulty: 3, marks: 6,
    question: "Identify and explain all six consequences of a sustained high current account deficit for the Australian economy.",
    keyPoints: [
      "1. Growth of foreign liabilities: accumulation of debt and equity; lenders may become reluctant to fund Australia",
      "2. Increased servicing costs: larger NPY outflows; risk premium raises interest rates → further widens CAD",
      "3. Exchange rate volatility: loss of investor confidence → A$ depreciation → business uncertainty; valuation effect worsens NPY",
      "4. Constraint on economic growth: BOP 'speed limit' — faster growth → more imports → worse CAD → contractionary policy response",
      "5. More contractionary economic policy: tighter fiscal/monetary policy in response → reduces short-term growth and living standards",
      "6. Loss of international investor confidence: sudden shift in sentiment → capital flight → A$ crisis → recession; Argentina example since 2018",
    ],
    modelAnswer: "A sustained high current account deficit creates six key consequences. First, it leads to the growth of foreign liabilities, as each year's CAD must be financed by a KFA surplus — foreign borrowing or equity sales. If foreign liabilities accumulate to very large levels, overseas lenders may become reluctant to fund Australia. Second, increased servicing costs result from larger interest and dividend outflows on the net primary income account; foreign lenders may also demand a risk premium, raising Australian interest rates and widening the CAD further. Third, exchange rate volatility is heightened as investor concerns about external sustainability reduce demand for the A$, causing depreciation and creating business uncertainty; depreciation also worsens the NPY through the valuation effect. Fourth, a high CAD creates a constraint on economic growth — a 'balance of payments speed limit' — because higher growth increases import spending, worsening the CAD and triggering contractionary policy responses that limit the economy's growth rate. Fifth, governments may respond with more contractionary economic policy, including fiscal austerity and higher interest rates, which reduces short-term economic growth and living standards. Sixth, a loss of international investor confidence represents the most severe risk: a sudden shift in global market sentiment toward Australia's external position could trigger rapid capital flight, a sharp A$ depreciation, and a potential economic crisis — as demonstrated by Argentina's recurrent crises since 2018.",
  },
  {
    id: 'ch06-q015', chapter: '4.6', topic: "Consequences of High CAD", type: 'short', difficulty: 2, marks: 4,
    question: "Outline two future vulnerabilities that economists have identified as potential triggers for a re-emergence of Australia's CAD problem.",
    keyPoints: [
      "Adverse Chinese economic developments: China accounts for 36.1% of Australian exports; any slowdown would sharply reduce commodity demand and worsen BOGS",
      "Fall in commodity prices: especially iron ore (Australia's largest export); lower commodity prices reduce export revenues and terms of trade",
      "Rising global interest rates: would increase interest servicing costs on foreign debt → widen NPY deficit",
      "Changed global credit conditions: reduced willingness of foreign lenders to fund external imbalances could trigger sudden capital withdrawal",
    ],
    modelAnswer: "Two major future vulnerabilities could re-open Australia's CAD problem. First, an adverse economic development in China poses a significant risk: China accounts for approximately 36.1% of Australian exports, and any slowdown in Chinese growth or reduction in demand for bulk commodities would sharply reduce Australia's export revenues and worsen the BOGS. A sustained fall in iron ore prices — Australia's largest single export earner — would also directly deteriorate the terms of trade and the BOGS. Second, rising global interest rates represent a structural risk to the net primary income account. Australia carries a large stock of foreign debt, much of it at variable or periodically refinanced rates. A sustained increase in global interest rates would raise Australia's debt-servicing costs, widening the NPY deficit and worsening the current account. Combined with potential tightening of global credit conditions — reducing foreign lenders' willingness to fund Australia's external imbalance — this could rapidly shift the current account back into a significant deficit and place downward pressure on the Australian dollar.",
  },
];
