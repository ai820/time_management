import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'ch08-001', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 1,
    front: "Under a floating exchange rate system, what determines the value of the A$?",
    back: `• Value determined by **free market forces** — **supply and demand** — not government intervention\n• Equilibrium price changes **regularly (minute by minute)** as supply and demand conditions shift\n• No government or RBA target rate`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-002', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 1,
    front: "Who makes up the demand for A$?",
    back: `• **Foreign investors** wishing to invest in Australia (need to convert their currency to A$)\n• **Speculators** expecting the A$ to appreciate (buy now to profit later)\n• **Foreign buyers** of Australian exports (need A$ to pay Australian exporters)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-003', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 1,
    front: "Who makes up the supply of A$?",
    back: `• **Australian investors** wishing to invest overseas (sell A$ to buy foreign currency)\n• **Speculators** expecting the A$ to depreciate (sell now before it falls)\n• **Australian importers** buying from overseas (sell A$ to obtain foreign currencies)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-004', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "How do relative interest rates affect demand for A$?",
    back: `• **Higher Australian interest rates** → Australia more attractive for foreign savings → **increase demand for A$** (financial inflows)\n• **Lower Australian rates** → saving overseas more attractive → **increase supply of A$** (financial outflows)\n• **Critical influence** on the exchange rate`,
    detail: `Interest rate differentials are one of the most important short-run drivers of exchange rates. When Australian interest rates are higher than those abroad, foreign investors earn a better return by converting their funds into A$ and investing in Australia — this is called the "carry trade." The resulting demand for A$ pushes the exchange rate up. Conversely, if Australian rates fall relative to overseas, funds flow out, increasing the supply of A$ and depressing its value.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-005', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "How do commodity prices and terms of trade affect the A$?",
    back: `• **Rise in commodity prices** + improvement in terms of trade → increase in value of Australian exports → **A$ appreciates**\n• This happens **almost immediately** as commodity prices have a direct effect on the dollar\n• **Falls in commodity prices** → depreciation\n• A$ is therefore known as a **'commodity currency'**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-006', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "What is an appreciation and what causes it?",
    back: `• **Appreciation** = increase in the value of the A$ (e.g. from US70c to US80c)\n• Caused by **increase in demand** for A$ (demand curve shifts right) OR **decrease in supply** (supply curve shifts left)\n• Key causes: higher Australian interest rates, rising commodity prices, improved competitiveness, lower inflation, increased export demand, **expectations of future appreciation**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-007', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "What is a depreciation and what causes it?",
    back: `• **Depreciation** = decrease in the value of the A$ (e.g. from US70c to US60c)\n• Caused by **decrease in demand** for A$ (demand curve shifts left) OR **increase in supply** (supply curve shifts right)\n• Key causes: lower Australian interest rates, falling commodity prices, higher domestic inflation, increased import demand, **expectations of future depreciation**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-008', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "How does the floating exchange rate act as an 'automatic stabiliser'?",
    back: `• During the **mining boom**: increased demand for resources → commodity prices up → A$ **appreciated**\n• Appreciation → industries not benefiting (manufacturing, tourism) saw **costs increase, output fall**\n• Helped **reallocate labour and capital** to the booming mining sector\n• Reduced **inflationary pressures** → maintained stable employment\n• Exchange rate automatically **adjusted to balance the economy**`,
    detail: `The automatic stabiliser function is one of the key advantages of a floating exchange rate. During the 2000s mining boom, the appreciating A$ dampened inflationary pressures from the commodity sector by making imports cheaper, while also encouraging resources to shift toward the high-demand mining sector. When the boom ended, the subsequent depreciation helped boost the competitiveness of non-mining sectors like tourism, agriculture, and education — demonstrating how the exchange rate facilitates economic adjustment without requiring direct policy intervention.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-009', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 1,
    front: "What is the Trade Weighted Index (TWI)?",
    back: `• **TWI** = value of A$ against a **basket of currencies** of Australia's major trading partners\n• Weighted according to **significance to Australia's trade flows**\n• Countries more prominent in trade are given a **higher weighting** → greater influence on the TWI\n• Gives an indication of how the A$ is moving against **ALL currencies in general**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-010', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "What are the top TWI currency weightings for 2019-20?",
    back: `• **Chinese renminbi**: 30.0%\n• **Japanese yen**: 11.2%; **US dollar**: 9.6%; **Euro**: 9.4%\n• **South Korean won**: 5.2%; **Singapore dollar**: 4.2%\n• TWI must cover at least **90% of Australian trade** (~20-25 countries)\n• Weightings are **amended annually**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-011', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 3,
    front: "What is the key limitation of the TWI?",
    back: `• TWI weighting is based only on **volumes of trade**, regardless of the **currency in which trade is invoiced**\n• ~**two-thirds** of Australia's exports and ~**half** of imports are priced in **US dollars**\n• A$/US$ exchange rate is far more important than its TWI weight of **9.6%** suggests\n• Useful to look at **both the A$/US$ rate AND the TWI** when analysing exchange rate movements`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-012', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 2,
    front: "Describe the recent history of the A$ from its 2001 low to the COVID-19 pandemic.",
    back: `• **2001**: low of **US47 cents**\n• **2003 onwards**: strong appreciation as commodity prices rose\n• **2009**: sharp fall during GFC — lost **one-third** of value against US$\n• **2011**: peaked at **US$1.10** and TWI 76.0\n• **Mid-2010s**: depreciated to US70–80 cent range\n• **March 2020** (COVID-19): briefly fell to **US55 cents** → soon recovered to US70 cents`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-013', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 3,
    front: "What is the 'carry trade' and how has it affected the A$?",
    back: `• **Carry trade**: when Australia's cash rate is **higher than other advanced economies** → foreign investors invest in Australia to earn higher returns\n• Creates strong **demand for A$**, supporting its value\n• When Australian interest rates have been **low** (since 2016), carry trade effect **reduces demand for A$**`,
    detail: `The carry trade involves borrowing in a low-interest-rate currency (e.g. Japanese yen) and investing in a higher-interest-rate currency (e.g. A$). When Australia's cash rate was significantly above zero (pre-2016), it attracted substantial carry-trade flows that supported the A$. As Australian and global rates converged toward zero post-2016, the carry trade incentive diminished, reducing this source of demand for the A$.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'ch08-014', chapter: '5.2', topic: "Australia's Floating Exchange Rate", difficulty: 3,
    front: "According to RBA research (Rees and Kulish, 2015), what was the long-run impact of the 2000s resources boom on the A$?",
    back: `• **RBA research** (Rees and Kulish, 2015): legacy of the 2000s resources boom resulted in a **40% increase in commodity prices** in the long run\n• Leading to a **31% appreciation** in the A$\n• A$ will likely remain **above its pre-2003 levels** for the foreseeable future`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'ch08-q001', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 1, marks: 1,
    question: "Under Australia's floating exchange rate system, which of the following would most directly cause an appreciation of the A$?",
    options: [
      { label: 'a', text: 'A fall in Australian interest rates relative to overseas rates' },
      { label: 'b', text: 'An increase in Australian imports' },
      { label: 'c', text: 'A rise in commodity prices and improvement in the terms of trade' },
      { label: 'd', text: 'An increase in Australian inflation relative to overseas' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch08-q002', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 2, marks: 1,
    question: "The Chinese renminbi has the highest weighting in Australia's TWI. What is its 2019-20 weighting?",
    options: [
      { label: 'a', text: '9.6%' },
      { label: 'b', text: '19.5%' },
      { label: 'c', text: '30.0%' },
      { label: 'd', text: '36.1%' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch08-q003', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 2, marks: 1,
    question: "The A$ reached its lowest point in 2001 at approximately:",
    options: [
      { label: 'a', text: 'US47 cents' },
      { label: 'b', text: 'US55 cents' },
      { label: 'c', text: 'US60 cents' },
      { label: 'd', text: 'US65 cents' },
    ],
    correctOption: 'a',
  },
  {
    id: 'ch08-q004', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'short', difficulty: 3, marks: 8,
    question: "Analyse the factors that determine the supply and demand for A$ in the foreign exchange market, and explain how these factors can lead to either appreciation or depreciation.",
    keyPoints: [
      "Demand for A$: financial inflows (foreign investors), export earnings (foreigners buy A$ to pay exporters), expectations of appreciation",
      "Key demand driver: Australian interest rates relative to overseas — higher rates attract foreign savings → more demand for A$",
      "Commodity prices/TOT: rising commodity prices → increased export earnings → appreciation",
      "Supply of A$: financial outflows (Australians investing overseas), import payments (sell A$ for foreign currency), expectations of depreciation",
      "Appreciation = demand increase (right shift) or supply decrease (left shift); depreciation = demand decrease or supply increase",
      "Floating rate acts as automatic stabiliser — e.g. mining boom: commodity prices ↑ → A$ appreciated → reallocated resources away from other sectors",
      "TWI limitation: US dollar weight only 9.6% but ~89% of A$ sold used to buy US$ — bilateral rate more important than weight suggests",
    ],
    modelAnswer: "Under Australia's floating exchange rate system, the value of the A$ is determined by the interaction of supply and demand in the forex market. On the demand side, A$ are demanded by three main groups: foreign investors who wish to invest in Australia and must convert their currency into A$; foreign buyers of Australian exports who need A$ to pay Australian exporters; and speculators who expect the A$ to appreciate and buy now to profit later. The most critical influence on financial inflows — and hence demand — is the level of Australian interest rates relative to overseas rates. Higher Australian rates make Australia more attractive for foreign savings, boosting demand for the A$. Rising commodity prices and an improvement in the terms of trade also increase demand, as financial markets quickly price in higher export revenues.\n\nOn the supply side, A$ are supplied by Australian investors seeking to invest overseas (they must sell A$ for foreign currency); Australian importers who sell A$ to obtain foreign currencies; and speculators expecting the A$ to fall. Rising domestic incomes increase imports and therefore the supply of A$. Higher domestic inflation and lower international competitiveness also raise import demand and the supply of A$.\n\nAn appreciation occurs when demand for A$ increases (demand curve shifts right) or supply decreases (shifts left) — for example, a rise in commodity prices or higher Australian interest rates. A depreciation occurs when demand falls or supply rises — for example, lower interest rates, deteriorating terms of trade, or higher domestic inflation.\n\nThe floating exchange rate also functions as an automatic stabiliser. During the 2000s mining boom, rising commodity prices boosted the A$, which helped reallocate labour and capital into the booming mining sector and reduced inflationary pressures, demonstrating how exchange rate flexibility allows the economy to adjust to external shocks.",
  },
];
