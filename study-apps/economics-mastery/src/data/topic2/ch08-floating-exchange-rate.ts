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
  {
    id: 'ch08-q005', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 1, marks: 1,
    question: "Which of the following is a source of DEMAND for Australian dollars in the foreign exchange market?",
    options: [
      { label: 'a', text: 'Australian investors purchasing assets overseas' },
      { label: 'b', text: 'Australian importers paying for goods from overseas' },
      { label: 'c', text: 'Foreign buyers of Australian exports needing A$ to pay Australian exporters' },
      { label: 'd', text: 'Speculators who expect the A$ to fall in value' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch08-q006', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 1, marks: 1,
    question: "Which of the following would cause a DEPRECIATION of the A$?",
    options: [
      { label: 'a', text: 'A rise in Australian commodity export prices' },
      { label: 'b', text: 'An increase in Australian interest rates relative to overseas rates' },
      { label: 'c', text: 'An increase in Australian imports, leading to a greater supply of A$ in the forex market' },
      { label: 'd', text: 'Foreign speculators buying A$ in anticipation of future appreciation' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch08-q007', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 2, marks: 1,
    question: "What is the 'carry trade', and how does it affect the A$?",
    options: [
      { label: 'a', text: 'The transport of physical currency across borders, which reduces forex market liquidity' },
      { label: 'b', text: 'Borrowing in a low-interest-rate currency and investing in a higher-interest-rate currency such as the A$, increasing demand for A$ and supporting its value' },
      { label: 'c', text: 'The RBA buying A$ in the forex market to prevent excessive depreciation' },
      { label: 'd', text: 'The practice of Australian exporters invoicing trade in US dollars instead of A$' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch08-q008', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 2, marks: 1,
    question: "How does the floating exchange rate act as an automatic stabiliser during an economic boom?",
    options: [
      { label: 'a', text: 'It causes the A$ to depreciate, boosting inflation and stimulating growth further' },
      { label: 'b', text: 'It causes the A$ to appreciate, making imports cheaper and dampening inflationary pressures' },
      { label: 'c', text: 'The RBA fixes the exchange rate during booms to provide certainty to businesses' },
      { label: 'd', text: 'It has no effect on inflation, only on the current account balance' },
    ],
    correctOption: 'b',
  },
  {
    id: 'ch08-q009', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 2, marks: 1,
    question: "According to RBA research by Rees and Kulish (2015), the legacy of the 2000s resources boom resulted in a 40% increase in commodity prices, leading to an approximate long-run appreciation of the A$ of:",
    options: [
      { label: 'a', text: '10%' },
      { label: 'b', text: '20%' },
      { label: 'c', text: '31%' },
      { label: 'd', text: '45%' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch08-q010', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 3, marks: 1,
    question: "During the 2011 mining boom peak, the A$ reached approximately:",
    options: [
      { label: 'a', text: 'US80 cents' },
      { label: 'b', text: 'US95 cents' },
      { label: 'c', text: 'US$1.10' },
      { label: 'd', text: 'US$1.25' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch08-q011', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'mcq', difficulty: 3, marks: 1,
    question: "A key limitation of the TWI as an indicator of Australia's exchange rate position is that:",
    options: [
      { label: 'a', text: 'It includes too many currencies to be practically useful' },
      { label: 'b', text: 'It only measures the A$/US$ rate and ignores other currencies' },
      { label: 'c', text: 'It is weighted by trade volumes, not by the currency in which trade is invoiced, understating the importance of the US dollar' },
      { label: 'd', text: 'It is updated only once every five years, making it outdated' },
    ],
    correctOption: 'c',
  },
  {
    id: 'ch08-q012', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'short', difficulty: 2, marks: 4,
    question: "Explain the concept of the 'carry trade' and how it affects the demand for Australian dollars.",
    keyPoints: [
      "Carry trade = borrowing in a low-interest-rate currency and investing in a higher-interest-rate currency",
      "When Australian interest rates are higher than overseas rates, foreign investors convert funds into A$ to earn higher returns",
      "This increases demand for A$, supporting or appreciating its value",
      "As Australian rates have fallen toward global lows since 2016, carry trade incentive has diminished, reducing this demand source",
    ],
    modelAnswer: "The carry trade involves borrowing in a low-interest-rate currency — such as the Japanese yen — and converting those funds into a higher-yielding currency such as the A$. When Australian interest rates are significantly above those abroad, foreign investors are attracted by the higher returns available in Australian financial markets, and must buy A$ to invest there, increasing demand for the currency and pushing its value up. Historically, when Australia's cash rate was well above zero, carry-trade flows were a significant source of A$ demand. As Australian rates converged toward global lows from 2016 onwards, the interest rate differential narrowed, reducing the carry-trade incentive and lessening this source of A$ demand.",
  },
  {
    id: 'ch08-q013', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'short', difficulty: 2, marks: 4,
    question: "Explain how rising commodity prices affect the value of the Australian dollar and why the A$ is described as a 'commodity currency'.",
    keyPoints: [
      "Rising commodity prices → Australia earns more export revenue → increased demand for A$",
      "Financial markets respond almost immediately, pricing in higher export earnings",
      "A$ is labelled a 'commodity currency' because its value closely tracks global commodity prices",
      "Example: A$ rose to US$1.10 during 2011 mining boom as iron ore and coal prices peaked",
      "Commodity price falls cause depreciation — e.g. GFC fall in commodity prices contributed to A$ decline",
    ],
    modelAnswer: "When global commodity prices rise, Australian export revenues increase, as buyers of iron ore, coal, LNG, and other commodities must convert more foreign currency into A$ to pay Australian exporters. This increases demand for the A$ in the forex market, pushing its value up. Financial markets tend to respond almost immediately, as traders anticipate the effect of higher export earnings on Australia's terms of trade and balance of payments. The A$ is described as a 'commodity currency' because its value closely tracks movements in global commodity prices — during the 2000s mining boom, the A$ appreciated sharply, reaching US$1.10 in 2011, while falls in commodity prices (such as during the GFC) contributed to significant depreciation.",
  },
  {
    id: 'ch08-q014', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'short', difficulty: 3, marks: 6,
    question: "Explain how a floating exchange rate acts as an automatic stabiliser for the Australian economy, using the 2000s mining boom as an example.",
    keyPoints: [
      "Automatic stabiliser = exchange rate adjusts automatically to moderate the impact of economic shocks",
      "Mining boom: rising commodity prices → demand for A$ increased → A$ appreciated",
      "Appreciation → imports became cheaper, reducing inflationary pressure from the boom",
      "Appreciation → other export sectors (manufacturing, tourism, education) faced reduced competitiveness → labour and capital reallocated to mining",
      "Depreciation in a downturn has the reverse effect — boosts export competitiveness and economic activity",
    ],
    modelAnswer: "A floating exchange rate acts as an automatic stabiliser because it adjusts to moderate the impact of external economic shocks without requiring direct government intervention. During the 2000s mining boom, surging global commodity prices boosted demand for Australian exports, increasing demand for the A$ and causing it to appreciate significantly — peaking at US$1.10 in 2011. The appreciation made imports cheaper, which helped contain inflationary pressures that would otherwise have built up from the resource sector. At the same time, the stronger dollar reduced the competitiveness of other sectors such as manufacturing, tourism, and international education, encouraging labour and capital to shift into the booming mining sector. When the mining boom subsided and commodity prices fell, the subsequent depreciation of the A$ improved the competitiveness of non-mining exporters, helping the economy adjust to the changed conditions. This self-correcting mechanism is one of the key advantages of a floating exchange rate system.",
  },
  {
    id: 'ch08-q015', chapter: '5.2', topic: "Australia's Floating Exchange Rate", type: 'short', difficulty: 3, marks: 6,
    question: "Explain how relative interest rates influence the value of the A$ and assess the significance of this factor compared with commodity prices.",
    keyPoints: [
      "Higher Australian interest rates → attract foreign savings via carry trade → increased demand for A$ → appreciation",
      "Lower rates → outflow of capital → increased supply of A$ → depreciation",
      "Commodity prices are also a major driver — Australia's A$ closely tracks terms of trade movements",
      "Both factors operate through the same mechanism: shifting demand and supply of A$ in the forex market",
      "Interest rates more relevant short-run; commodity prices can drive sustained, longer-run trends",
    ],
    modelAnswer: "Relative interest rates are one of the most important drivers of the Australian dollar's value. When Australian interest rates are higher than those overseas, foreign investors earn a better return by converting their funds into A$ and investing in Australian financial markets — this carry-trade effect increases demand for A$ and tends to appreciate the currency. Conversely, if Australian rates fall relative to overseas, capital flows out, increasing the supply of A$ and depressing its value. Commodity prices are another major driver: when global commodity prices rise, Australia's export revenues increase, boosting demand for A$ and appreciating the currency. Both factors shift the supply and demand curves in the forex market, but they tend to operate on different timescales. Interest rate effects can be immediate and volatile, while commodity price movements can drive sustained, multi-year trends in the exchange rate — as demonstrated by the decade-long appreciation of the A$ during the 2000s resources boom. A comprehensive analysis of the A$ must therefore consider both factors together.",
  },
];
