import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch09-001', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 1,
    front: "Can the RBA permanently change the value of the A$ through intervention?",
    back: `• **No** — the RBA **cannot** change the value of the A$ in the **long term**\n• It can only **smooth out swings** relating to short-term factors\n• Long-term exchange rate movements are determined by **fundamental forces of supply and demand**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-002', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 1,
    front: "What are the two ways the RBA can influence the value of the A$?",
    back: `• **1. Dirtying the float**: RBA directly **buys or sells A$** in the forex market to stabilise the exchange rate\n• **2. Monetary policy decisions**: RBA adjusts **interest rates**, which indirectly influences the exchange rate by affecting financial flows into or out of Australia`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-003', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 1,
    front: "What is 'dirtying the float'?",
    back: `• **Dirtying the float** = when the RBA steps into the forex market as a **buyer or seller of A$** to stabilise the currency\n• Used when a large short-term change in the exchange rate will be **harmful to the domestic economy**\n• Does **NOT eliminate the float** — merely **'dirties'** it by adding an element of intervention`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-004', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 2,
    front: "What does the RBA do to curb rapid depreciation of the A$?",
    back: `• To curb rapid depreciation: RBA **BUYS A$** in the forex market, using its **foreign currency reserves**\n• Increases demand for A$ → puts **upward pressure** on the exchange rate\n• Example: in second half of 2008, RBA purchased **$3.3 billion** of A$ to moderate the depreciation`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-005', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 2,
    front: "What does the RBA do to prevent rapid appreciation of the A$?",
    back: `• To prevent rapid appreciation: RBA **SELLS A$** in the forex market\n• Increases the supply of A$ → puts **downward pressure** on the exchange rate\n• Example: RBA sold **$3.4 billion** of A$ in 2009 as the currency recovered strongly following the GFC`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-006', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 2,
    front: "What is the key limitation on the RBA's ability to 'dirty the float'?",
    back: `• RBA's ability to buy A$ is limited by the **SIZE of its foreign currency reserves**\n• Total value of RBA's foreign currency reserves is **relatively small** — not even equal to **ONE day's total transactions** in the currency\n• Therefore the RBA **cannot intervene for extended periods** to defend the exchange rate`,
    detail: `The scale of daily forex transactions in Australia (US$121 billion/day in April 2019) dwarfs the RBA's foreign currency reserves. If the RBA tried to defend a particular exchange rate level against sustained market pressure, it would exhaust its reserves rapidly — just as happened in many Asian economies during the 1997 crisis. This is why the RBA can only smooth short-term volatility, not permanently determine the exchange rate.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-007', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 2,
    front: "How can monetary policy be used to influence the exchange rate?",
    back: `• RBA **INCREASES interest rates** → attracts more foreign savings → savings must be converted into A$ → **increases demand for A$** → upward pressure on exchange rate\n• Higher rates make Australia a more attractive **destination for foreign capital**\n• However, this effect is generally only effective for a **limited time**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-008', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 2,
    front: "What is the primary focus of the RBA's monetary policy, and how does this relate to exchange rate management?",
    back: `• Primary focus of monetary policy: influence the **domestic economy** — particularly the **inflation rate** (targeting **2–3%** on average)\n• **Unusual** for RBA to change interest rates specifically in response to currency movements\n• However, if exchange rate movements are **large enough** to affect stability or inflation, they become a **RBA concern** even though not the primary target`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-009', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 3,
    front: "What is the quantified relationship between exchange rate movements and inflation, according to RBA (2014) research?",
    back: `• **RBA (2014)**: A **10% depreciation** of the A$ → leads to a **¼–½ percentage point increase** in inflation over two years\n• A **10% appreciation** → leads to a **0.3% annual decline** in inflation\n• This explains why large currency movements are a **RBA concern** — they can significantly affect the inflation rate, which IS the primary target`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch09-010', chapter: '5.3', topic: 'Reserve Bank Intervention', difficulty: 3,
    front: "Did the RBA's 2008 forex intervention generate any additional benefits?",
    back: `• **Yes** — beyond stabilising the exchange rate, the RBA's forex interventions in 2008-09 generated **profits**\n• Buying A$ at **depressed prices** and then **selling** as the currency recovered generated profits\n• Contributed to the RBA's **dividend payment to the government**\n• Made the intervention both **economically beneficial and fiscally productive**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch09-q001', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'mcq', difficulty: 1, marks: 1,
    question: "To moderate a rapid depreciation of the A$, the RBA would:",
    options: [
      { label: 'a', text: 'Sell A$ in the foreign exchange market' },
      { label: 'b', text: 'Buy A$ in the foreign exchange market' },
      { label: 'c', text: 'Lower the official cash rate' },
      { label: 'd', text: 'Increase the money supply' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch09-q002', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'mcq', difficulty: 2, marks: 1,
    question: "How much did the RBA spend buying A$ during the second half of 2008 to moderate the GFC depreciation?",
    options: [
      { label: 'a', text: '$1.1 billion' },
      { label: 'b', text: '$2.5 billion' },
      { label: 'c', text: '$3.3 billion' },
      { label: 'd', text: '$5.0 billion' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch09-q003', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'short', difficulty: 3, marks: 6,
    question: "Explain how the Reserve Bank of Australia can influence the value of the Australian dollar, and assess the limitations of each method.",
    keyPoints: [
      "Method 1 — dirtying the float: RBA buys A$ (to raise value) or sells A$ (to lower value) in the forex market",
      "Limitation: RBA's foreign currency reserves are limited — not even equal to one day's transactions; cannot intervene for extended periods",
      "Example: RBA bought $3.3bn A$ in 2H 2008; sold $3.4bn A$ in 2009",
      "Method 2 — monetary policy: raising interest rates → attracts foreign savings → increases demand for A$ → appreciates",
      "Limitation: rarely used specifically for exchange rate; primary focus is inflation; effective only for a limited time",
      "RBA (2014): 10% depreciation → ¼–½% increase in inflation over two years → explains why large currency moves are a concern",
      "Overall limitation: RBA cannot change the exchange rate in the long term; can only smooth short-term fluctuations",
    ],
    modelAnswer: "The Reserve Bank of Australia has two main methods to influence the value of the A$. The first is 'dirtying the float': the RBA enters the foreign exchange market as a buyer or seller of A$ when it believes a short-term movement will be harmful. To curb rapid depreciation, the RBA buys A$ (using foreign currency reserves), increasing demand and putting upward pressure on the exchange rate. To prevent rapid appreciation, it sells A$, increasing supply and pushing the value down. In practice, the RBA purchased $3.3 billion of A$ during the second half of 2008 to moderate the GFC-driven depreciation, and then sold $3.4 billion of A$ in 2009 as the currency recovered. The key limitation of this method is the size of the RBA's foreign currency reserves, which are relatively small — not even equal to one day's total transactions in the currency. The RBA therefore cannot sustain intervention for extended periods.\n\nThe second method is monetary policy. Raising the official cash rate attracts foreign savings into Australia, which must be converted into A$, increasing demand for the currency. This tends to appreciate the A$. However, the RBA rarely changes interest rates specifically to manage the exchange rate — its primary focus is influencing domestic inflation. Monetary policy is only effective for a limited time and can have significant side effects on the domestic economy. A 2014 RBA research publication found that a 10% depreciation leads to a ¼–½ percentage point increase in inflation over two years, which is why large currency movements remain a concern for the RBA even when they are not the primary policy target. In sum, the RBA can smooth short-term exchange rate volatility, but cannot fundamentally alter the exchange rate in the long run.",
  },
  {
    id: 'ch09-q004', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'mcq', difficulty: 1, marks: 1,
    question: "What is the term used to describe the RBA's practice of buying or selling A$ in the forex market to stabilise the currency?",
    options: [
      { label: 'a', text: 'Quantitative easing' },
      { label: 'b', text: 'Dirtying the float' },
      { label: 'c', text: 'Open market operations' },
      { label: 'd', text: 'Currency pegging' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch09-q005', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'mcq', difficulty: 1, marks: 1,
    question: "The RBA's primary objective when intervening in the forex market is to:",
    options: [
      { label: 'a', text: 'Permanently lower the exchange rate to boost exports' },
      { label: 'b', text: 'Smooth short-term volatility without permanently changing the exchange rate level' },
      { label: 'c', text: 'Fix the A$ to the US dollar at a government-determined rate' },
      { label: 'd', text: 'Prevent the A$ from ever appreciating above US80 cents' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch09-q006', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'mcq', difficulty: 2, marks: 1,
    question: "How much did the RBA raise by SELLING A$ in 2009 as the currency recovered following the GFC?",
    options: [
      { label: 'a', text: '$1.1 billion' },
      { label: 'b', text: '$2.0 billion' },
      { label: 'c', text: '$3.4 billion' },
      { label: 'd', text: '$5.5 billion' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch09-q007', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'mcq', difficulty: 2, marks: 1,
    question: "Which of the following best explains why the RBA's ability to 'dirty the float' is limited?",
    options: [
      { label: 'a', text: 'The RBA is legally prohibited from trading in the foreign exchange market' },
      { label: 'b', text: "The RBA's foreign currency reserves are relatively small compared with daily forex market turnover, so it cannot sustain intervention for extended periods" },
      { label: 'c', text: 'Buying A$ has no effect on demand because speculators always offset RBA purchases' },
      { label: 'd', text: 'The RBA can only intervene once per year under IMF rules' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch09-q008', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'mcq', difficulty: 2, marks: 1,
    question: "According to RBA (2014) research, a 10% appreciation of the A$ leads to approximately:",
    options: [
      { label: 'a', text: 'A 1% increase in inflation per year' },
      { label: 'b', text: 'A 0.3% decline in inflation per year' },
      { label: 'c', text: 'No change in inflation because the effect is offset by lower export revenues' },
      { label: 'd', text: 'A 0.5% increase in economic growth per year' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch09-q009', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'mcq', difficulty: 2, marks: 1,
    question: "How does raising the official cash rate indirectly influence the value of the A$?",
    options: [
      { label: 'a', text: 'Higher rates reduce inflation, which directly lowers the exchange rate' },
      { label: 'b', text: 'Higher rates attract foreign savings into Australia; investors must buy A$ to invest, increasing demand and appreciating the currency' },
      { label: 'c', text: 'Higher rates increase the supply of A$ by encouraging Australian investors to borrow and invest overseas' },
      { label: 'd', text: 'Higher rates have no effect on the exchange rate under a floating system' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch09-q010', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'mcq', difficulty: 3, marks: 1,
    question: "Which of the following statements about the RBA's 2008–09 forex interventions is CORRECT?",
    options: [
      { label: 'a', text: 'The RBA sold A$ in 2008 to prevent excessive appreciation during the GFC' },
      { label: 'b', text: 'The RBA bought $3.3 billion of A$ in 2008 to moderate depreciation, then sold $3.4 billion of A$ in 2009 as the currency recovered — generating profits for the government' },
      { label: 'c', text: 'The RBA permanently fixed the A$ to the US dollar during the GFC to provide economic stability' },
      { label: 'd', text: 'The RBA refused to intervene during the GFC, consistent with its strict non-intervention policy' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch09-q011', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'mcq', difficulty: 3, marks: 1,
    question: "According to RBA (2014) research, a 10% depreciation of the A$ leads to approximately what change in Australia's inflation rate over two years?",
    options: [
      { label: 'a', text: 'A decrease of 0.3 percentage points' },
      { label: 'b', text: 'No significant change' },
      { label: 'c', text: 'An increase of ¼–½ percentage points' },
      { label: 'd', text: 'An increase of 2–3 percentage points' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch09-q012', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'short', difficulty: 2, marks: 4,
    question: "Explain what 'dirtying the float' means and describe the circumstances in which the RBA uses this approach.",
    keyPoints: [
      "Dirtying the float = RBA enters the forex market as buyer or seller of A$ to stabilise short-term movements",
      "Buy A$: used when rapid depreciation is harmful to the economy (increases demand, puts upward pressure on rate)",
      "Sell A$: used when rapid appreciation is harmful (increases supply, puts downward pressure on rate)",
      "Used to smooth short-term volatility, not to permanently change the exchange rate",
      "Example: bought $3.3bn A$ in 2H 2008 during GFC depreciation; sold $3.4bn A$ in 2009 as currency recovered",
    ],
    modelAnswer: "'Dirtying the float' refers to the Reserve Bank of Australia stepping into the foreign exchange market as a buyer or seller of A$ to moderate short-term exchange rate movements that are considered harmful to the domestic economy. It does not eliminate the floating system — the exchange rate remains market-determined — but adds a limited element of intervention. When the A$ depreciates too rapidly, the RBA buys A$ using its foreign currency reserves, increasing demand and putting upward pressure on the exchange rate. When the A$ appreciates too sharply, the RBA sells A$, increasing supply and pushing the value down. The RBA used this approach during the GFC, purchasing $3.3 billion of A$ in the second half of 2008 to moderate the sharp depreciation, and selling $3.4 billion of A$ in 2009 as the currency recovered — with the intervention ultimately generating profits for the government.",
  },
  {
    id: 'ch09-q013', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'short', difficulty: 2, marks: 4,
    question: "Explain why large movements in the Australian dollar exchange rate are a concern for the Reserve Bank of Australia, even though the exchange rate is not its primary policy target.",
    keyPoints: [
      "RBA's primary focus is domestic inflation — targeting 2–3% on average",
      "Exchange rate movements affect inflation: depreciation → imports more expensive → inflation rises",
      "RBA (2014): 10% depreciation → ¼–½% inflation increase over 2 years; 10% appreciation → 0.3% annual inflation decline",
      "If exchange rate shifts are large enough, they affect the RBA's inflation target and become a legitimate concern",
      "RBA rarely changes interest rates solely because of exchange rate movements, but large currency swings force consideration",
    ],
    modelAnswer: "The Reserve Bank of Australia's primary objective is to maintain inflation within the 2–3% target band. Although the exchange rate is not directly targeted, large movements in the A$ affect domestic prices. When the A$ depreciates, imports become more expensive, and the cost of imported goods and inputs flows through to consumer prices — RBA research (2014) found that a 10% depreciation raises inflation by ¼–½ percentage points over two years. Conversely, a 10% appreciation reduces inflation by around 0.3% per year by making imports cheaper. Because exchange rate swings of this magnitude can push inflation outside the target band, they become a legitimate RBA concern even though the RBA rarely adjusts interest rates solely because of currency movements. The RBA monitors the exchange rate closely and factors it into its broader monetary policy assessments.",
  },
  {
    id: 'ch09-q014', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'short', difficulty: 3, marks: 6,
    question: "Evaluate the effectiveness of the Reserve Bank of Australia's two methods of influencing the exchange rate. In your response, consider both the purpose and limitations of each method.",
    keyPoints: [
      "Method 1 — dirtying the float: buy or sell A$ to smooth short-term volatility",
      "Limitation: RBA reserves are small relative to daily forex market turnover; cannot sustain prolonged intervention",
      "Method 2 — monetary policy: raise rates to attract foreign capital → demand for A$ increases → appreciation",
      "Limitation: monetary policy is aimed primarily at inflation; using it for exchange rate management creates trade-offs",
      "Neither method can permanently change the exchange rate — long-run value determined by fundamental supply and demand",
      "GFC example shows interventions can be profitable as well as stabilising",
    ],
    modelAnswer: "The Reserve Bank of Australia has two main methods of influencing the exchange rate, each with distinct purposes and limitations. The first is 'dirtying the float': the RBA buys A$ to moderate rapid depreciation or sells A$ to limit excessive appreciation. This is useful for smoothing short-term volatility — as demonstrated during the GFC, when the RBA purchased $3.3 billion of A$ in 2008 and sold $3.4 billion in 2009, both stabilising the currency and generating profits. However, the key limitation is scale: the RBA's foreign currency reserves are not even equal to one day's total forex transactions in Australia, meaning the RBA cannot defend a particular exchange rate level against sustained market pressure. Intervention must therefore be limited and strategic.\n\nThe second method is monetary policy. Raising the official cash rate attracts foreign savings into Australia — investors convert their funds into A$ to earn higher returns, increasing demand for the currency and appreciating its value. However, the RBA rarely changes interest rates specifically to manage the exchange rate, since its primary mandate is domestic inflation stability. Using monetary policy for exchange rate purposes creates trade-offs: for example, raising rates to support the currency might be contractionary for the domestic economy at an inopportune time.\n\nIn both cases, a critical overall limitation applies: the RBA cannot permanently change the value of the A$ through intervention. In the long run, the exchange rate is determined by the fundamental forces of supply and demand. The RBA's role is to smooth disruptive short-term volatility, not to override market-determined outcomes.",
  },
  {
    id: 'ch09-q015', chapter: '5.3', topic: 'Reserve Bank Intervention', type: 'short', difficulty: 3, marks: 4,
    question: "Explain how the RBA's 2008–09 forex interventions illustrate both the purpose and the constraints of 'dirtying the float'.",
    keyPoints: [
      "2008 GFC: A$ depreciated sharply → RBA bought $3.3bn A$ to moderate the fall (curb harmful volatility)",
      "2009 recovery: A$ appreciated strongly → RBA sold $3.4bn A$ to dampen excessive appreciation",
      "Interventions generated profits (bought low, sold higher) — contributed to RBA dividend to government",
      "Constraint illustrated: interventions were temporary and modest relative to daily market volumes",
      "RBA did not attempt to permanently fix the rate — demonstrates limits and purpose of dirtying the float",
    ],
    modelAnswer: "During the GFC, the A$ depreciated sharply as global risk aversion spiked and commodity prices fell. The RBA responded by purchasing $3.3 billion of A$ in the second half of 2008, increasing demand for the currency and moderating the pace of depreciation. This illustrates the core purpose of dirtying the float: the RBA does not attempt to fix the exchange rate or reverse a fundamental market trend, but steps in when short-term volatility is severe enough to cause economic harm. As the currency recovered strongly in 2009, the RBA then sold $3.4 billion of A$ to moderate the rapid appreciation. Notably, buying at depressed prices and selling at higher prices generated profits that contributed to the RBA's dividend to the Commonwealth government. However, the relatively modest size of these interventions — compared with daily forex turnover of around US$121 billion — highlights the key constraint: the RBA's reserves limit its capacity for sustained intervention, confirming that dirtying the float is a tool for short-term smoothing, not long-run exchange rate determination.",
  },
];
