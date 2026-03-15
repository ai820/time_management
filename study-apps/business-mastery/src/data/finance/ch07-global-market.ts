import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch07-001', chapter: '10.5', topic: 'Global Market Influences', difficulty: 1,
    front: 'What are the three main global market influences on financial management?',
    back: `• **Economic outlook**: global growth or recession affects business confidence and investment decisions\n• **Availability of funds**: global capital flows determine how easily businesses can access finance\n• **Interest rates**: international interest rate movements affect the cost of borrowing`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch07-002', chapter: '10.5', topic: 'Global Market Influences', difficulty: 2,
    front: 'How does the global economic outlook influence financial management?',
    back: `• **Positive global outlook**: businesses borrow more to invest; consumer spending rises → revenue grows\n• **Recession or slowdown**: businesses reduce investment; lenders tighten credit conditions\n• **GFC example (2008–09)**: global recession → credit dried up → businesses couldn't access finance\n• Financial managers must adjust their **financial plans** to reflect economic conditions`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch07-003', chapter: '10.5', topic: 'Global Market Influences', difficulty: 2,
    front: 'How does the availability of funds in global capital markets affect businesses?',
    back: `• **Globalisation of finance**: businesses can borrow in international capital markets\n• When global funds are **abundant**: interest rates fall, terms are generous → cheap finance\n• When global funds are **scarce** (e.g. GFC): credit tightens, lenders demand higher collateral\n• Large Australian businesses can access **foreign debt markets** for cheaper finance`,
    detail: `Australia is a net capital importer — it borrows more from overseas than it lends. This means Australian businesses are significantly affected by changes in global capital availability. During periods of global financial expansion, funds flow freely and businesses can borrow at low rates. During crises — like the 2008 GFC — global credit markets freeze, foreign lenders withdraw, and even creditworthy businesses struggle to refinance existing debt. Financial managers must maintain relationships with multiple lenders across different markets to reduce vulnerability to any single source of capital drying up.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch07-004', chapter: '10.5', topic: 'Global Market Influences', difficulty: 2,
    front: 'How do changes in overseas interest rates affect Australian businesses?',
    back: `• Australian businesses that borrow in **overseas markets** face the interest rates of those markets\n• If US or EU interest rates rise, the **cost of overseas borrowing increases**\n• Australian banks fund themselves partly from global wholesale markets → rate rises flow through to Australian loan rates\n• Higher global rates → **more expensive debt** → reduces investment and profit margins`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch07-005', chapter: '10.5', topic: 'Global Market Influences', difficulty: 2,
    front: 'What is the relationship between exchange rates and overseas borrowing?',
    back: `• Businesses borrowing in foreign currency face **exchange rate risk**\n• If the AUD **depreciates** against the foreign currency → debt repayments become **more expensive in AUD**\n• A fall in the AUD against the USD → the cost of servicing USD-denominated debt rises\n• Businesses can use **hedging instruments** (forward contracts, swaps) to manage this risk`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch07-006', chapter: '10.5', topic: 'Global Market Influences', difficulty: 3,
    front: 'How did the Global Financial Crisis (GFC) of 2008–09 affect business financial management?',
    back: `• Credit markets **froze** — banks stopped lending to each other and to businesses\n• Many businesses could not **refinance short-term debt** → liquidity crisis → some collapsed\n• Even creditworthy businesses faced **higher borrowing costs** and stricter conditions\n• Financial managers learned: maintain **diversified funding sources** and adequate liquidity buffers`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch07-007', chapter: '10.5', topic: 'Global Market Influences', difficulty: 1,
    front: 'How does globalisation affect a business\'s access to finance?',
    back: `• **Globalisation** allows businesses to access capital from international markets, not just domestic ones\n• Large Australian companies can issue **bonds in foreign markets** (e.g. Eurobonds, US private placements)\n• Increases **competition among lenders** → can reduce borrowing costs for creditworthy businesses\n• Also increases **exposure to global financial volatility** — more interconnected, more vulnerable`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch07-008', chapter: '10.5', topic: 'Global Market Influences', difficulty: 2,
    front: 'How do rising US interest rates affect Australian financial management?',
    back: `• US rates are the **global benchmark** — affect pricing of all financial assets worldwide\n• Higher US rates → capital flows out of Australia to the US for higher returns → AUD may depreciate\n• Australian banks fund themselves from global wholesale markets → US rate rises **flow through** to Australian business loan rates\n• Financial managers may **fix interest rates** on debt to protect against rate rises`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch07-009', chapter: '10.5', topic: 'Global Market Influences', difficulty: 2,
    front: 'What is a "credit crunch" and how does it affect business financial management?',
    back: `• **Credit crunch**: sudden tightening of lending conditions — banks reduce lending, raise rates, demand more collateral\n• Caused by: financial crises, rising bad debts, lender risk aversion\n• Effect: businesses cannot access needed finance → defer investment, lay off staff\n• Example: **GFC 2008–09** — global credit crunch affected even profitable Australian businesses`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch07-010', chapter: '10.5', topic: 'Global Market Influences', difficulty: 2,
    front: 'Why do financial managers need to consider international factors when planning finance?',
    back: `• Australia is a **small, open economy** — highly exposed to global financial conditions\n• Overseas investors and lenders are **major sources of capital** for large Australian businesses\n• Global interest rates, exchange rates and economic conditions all **directly affect** borrowing costs\n• Ignoring global factors can lead to **unexpected cost increases** or sudden loss of access to finance`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch07-q001', chapter: '10.5', topic: 'Global Market Influences', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Which of the following is NOT one of the three main global market influences on financial management?',
    options: [
      { label: 'a', text: 'Economic outlook' },
      { label: 'b', text: 'Availability of funds' },
      { label: 'c', text: 'Interest rates' },
      { label: 'd', text: 'Government fiscal policy' },
    ],
    correctOption: 'd',
  },
  {
    id: 'biz-ch07-q002', chapter: '10.5', topic: 'Global Market Influences', type: 'mcq', difficulty: 2, marks: 1,
    question: 'During the Global Financial Crisis (2008–09), many businesses faced a financial crisis because:',
    options: [
      { label: 'a', text: 'Government increased company tax rates dramatically' },
      { label: 'b', text: 'Global credit markets froze, making it impossible or extremely costly to refinance debt' },
      { label: 'c', text: 'The Australian dollar appreciated sharply, increasing export competitiveness' },
      { label: 'd', text: 'ASIC tightened disclosure requirements, increasing compliance costs' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch07-q003', chapter: '10.5', topic: 'Global Market Influences', type: 'mcq', difficulty: 2, marks: 1,
    question: 'An Australian business that has borrowed in US dollars faces which additional financial risk?',
    options: [
      { label: 'a', text: 'Company tax payable in both countries simultaneously' },
      { label: 'b', text: 'Exchange rate risk — if the AUD depreciates against the USD, debt repayments become more expensive' },
      { label: 'c', text: 'ASIC disclosure obligations applying in the United States' },
      { label: 'd', text: 'Higher GST obligations on imported goods' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch07-q004', chapter: '10.5', topic: 'Global Market Influences', type: 'short', difficulty: 3, marks: 6,
    question: 'Explain how global market influences — specifically economic outlook and interest rates — affect the financial management decisions of an Australian business.',
    keyPoints: [
      'Economic outlook: positive global outlook → businesses confident to invest, lenders willing to lend → easier access to finance; recession → lenders tighten conditions, businesses defer investment',
      'Interest rates: global interest rates (especially US) affect borrowing costs for Australian businesses that access international capital markets',
      'Australian banks fund themselves from global wholesale markets → overseas rate rises flow through to Australian loan rates',
      'Rising interest rates increase debt servicing costs → reduce profit margins → financial managers may choose equity or fixed-rate debt to manage risk',
    ],
    modelAnswer: 'Global economic outlook and international interest rates both significantly affect the financial management decisions of Australian businesses. When the global economic outlook is positive, businesses have confidence to invest, lenders are willing to provide finance on favourable terms, and consumer spending supports revenue growth. Financial managers can plan ambitious capital expenditure in this environment. However, during a global recession or period of uncertainty — such as the GFC of 2008–09 — credit conditions tighten dramatically: lenders demand higher collateral, raise interest rates, and reduce lending volumes. Even creditworthy businesses find it difficult to refinance maturing debt, creating serious liquidity risks. Regarding interest rates: Australian banks and large corporations fund themselves partly from international wholesale capital markets. When overseas interest rates rise — particularly in the US — the cost of this wholesale funding increases, and banks pass higher rates on to Australian businesses. A business with significant variable-rate debt will face higher interest expenses, reducing profit margins. Financial managers responding to rising rate environments may lock in fixed interest rates on new borrowings, reduce gearing, or switch from overseas borrowing to domestic equity to manage this risk.',
  },
  {
    id: 'biz-ch07-q005', chapter: '10.5', topic: 'Global Market Influences', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Globalisation\'s impact on a business\'s access to finance is best described as:',
    options: [
      { label: 'a', text: 'Reducing access to finance by removing domestic government protections' },
      { label: 'b', text: 'Increasing access to a wider range of capital sources but also increasing exposure to global financial volatility' },
      { label: 'c', text: 'Replacing domestic capital markets entirely with foreign lenders' },
      { label: 'd', text: 'Eliminating exchange rate risk for businesses that borrow overseas' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch07-q006', chapter: '10.5', topic: 'Global Market Influences', type: 'mcq', difficulty: 2, marks: 1,
    question: 'A "credit crunch" most directly harms businesses by:',
    options: [
      { label: 'a', text: 'Reducing consumer demand for their products' },
      { label: 'b', text: 'Making it impossible or very costly to access the debt finance needed to fund operations and growth' },
      { label: 'c', text: 'Causing the Australian dollar to appreciate rapidly' },
      { label: 'd', text: 'Increasing the company tax rate on corporate profits' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch07-q007', chapter: '10.5', topic: 'Global Market Influences', type: 'short', difficulty: 2, marks: 4,
    question: 'Explain why changes in global interest rates affect the borrowing costs of Australian businesses.',
    keyPoints: [
      'Australian banks fund themselves partly from global wholesale money markets, not just domestic deposits',
      'When global interest rates rise (especially US rates), the cost of wholesale funding for Australian banks increases',
      'Banks pass higher funding costs on to business borrowers through higher loan interest rates',
      'Large Australian companies that borrow directly from overseas capital markets face the overseas rate directly',
    ],
    modelAnswer: 'Changes in global interest rates affect Australian businesses through two channels. First, Australian banks do not rely solely on domestic deposits to fund their lending — they also borrow large amounts from international wholesale money markets. When global interest rates rise (particularly in the US, which sets the global benchmark), the cost of this wholesale funding increases, and Australian banks pass these higher costs on to business borrowers in the form of higher loan rates. Second, large Australian companies can borrow directly from international bond markets. If US or European interest rates rise, the cost of issuing bonds in those markets rises directly, making overseas borrowing more expensive. In both cases, rising global interest rates translate into higher debt servicing costs for Australian businesses, reducing profit margins and potentially deterring investment.',
  },
];
