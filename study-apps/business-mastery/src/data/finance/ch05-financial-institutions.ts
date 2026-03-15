import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch05-001', chapter: '10.3', topic: 'Financial Institutions', difficulty: 1,
    front: 'What are the main types of financial institutions that provide finance to businesses?',
    back: `• **Banks**: deposits and loans — primary lenders to business\n• **Investment banks**: large debt/equity transactions; mergers & acquisitions advice\n• **Finance companies**: consumer and business loans; often higher risk lending\n• **Life insurance companies**: invest premiums; provide long-term capital to markets\n• **Superannuation funds**: pool retirement savings → invest in shares, bonds, property\n• **Unit trusts (managed funds)**: pool investor money → invest in diversified assets\n• **ASX (Australian Securities Exchange)**: platform for trading shares and bonds`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch05-002', chapter: '10.3', topic: 'Financial Institutions', difficulty: 1,
    front: 'What is the role of banks in providing finance to businesses?',
    back: `• Accept **deposits** from savers and lend to businesses and individuals\n• Provide: **overdrafts**, term loans, mortgages, trade finance\n• Charge **interest** on loans — their primary revenue source\n• Australia's "Big Four": Commonwealth, NAB, ANZ, Westpac — dominate business lending`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch05-003', chapter: '10.3', topic: 'Financial Institutions', difficulty: 2,
    front: 'What is the role of investment banks in financial markets?',
    back: `• Assist companies with **large-scale capital raisings** (share issues, bond issues)\n• Advise on **mergers and acquisitions (M&A)**\n• Underwrite securities: guarantee a minimum price for new share issues\n• Do NOT accept deposits like retail banks — focus on **wholesale/corporate finance**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch05-004', chapter: '10.3', topic: 'Financial Institutions', difficulty: 2,
    front: 'What is the role of finance companies?',
    back: `• Provide loans to consumers and businesses that may not qualify for bank finance\n• Typically charge **higher interest rates** than banks due to higher-risk lending\n• Specialise in: **vehicle finance**, personal loans, equipment hire-purchase\n• Funded by borrowing from wholesale money markets rather than deposits`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch05-005', chapter: '10.3', topic: 'Financial Institutions', difficulty: 2,
    front: 'How do superannuation funds provide finance to businesses?',
    back: `• Compulsory super contributions create a **large pool of long-term savings**\n• Funds invest in **shares, bonds, property and infrastructure** to grow members' retirement savings\n• Major **buyers of corporate shares and bonds** — provide significant long-term equity and debt capital\n• Australia's super system (~$3 trillion) makes super funds some of the largest institutional investors`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch05-006', chapter: '10.3', topic: 'Financial Institutions', difficulty: 2,
    front: 'What is the role of the ASX (Australian Securities Exchange)?',
    back: `• **ASX**: marketplace for buying and selling shares, bonds and other securities\n• Enables businesses to **raise equity capital** through IPOs and rights issues\n• Provides **liquidity** — investors can sell shares easily, making equity investment attractive\n• ASX listing requires **disclosure obligations** — audited accounts, continuous disclosure\n• Around 2,000+ companies listed; market cap > $2 trillion`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch05-007', chapter: '10.3', topic: 'Financial Institutions', difficulty: 2,
    front: 'How do unit trusts (managed funds) channel savings into business investment?',
    back: `• **Unit trusts**: pool money from many small investors into a single diversified fund\n• Managed by professional fund managers who invest in shares, bonds, property\n• Investors buy **units** — their share of the fund's total value\n• Businesses benefit because unit trusts are major **buyers of corporate securities**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch05-008', chapter: '10.3', topic: 'Financial Institutions', difficulty: 1,
    front: 'What is the difference between a retail bank and an investment bank?',
    back: `• **Retail bank**: accepts deposits from public → lends to individuals and businesses; regulated by APRA\n• **Investment bank**: does not take retail deposits; focuses on corporate finance, M&A, securities underwriting\n• Retail banks serve **everyday banking** needs; investment banks serve **large corporate transactions**\n• Investment banks are paid advisory and underwriting **fees** rather than interest margins`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch05-009', chapter: '10.3', topic: 'Financial Institutions', difficulty: 3,
    front: 'How do life insurance companies act as financial intermediaries that provide capital to businesses?',
    back: `• Collect **premium payments** from policyholders\n• Must invest premiums to ensure they can pay future **claims**\n• Invest in: **corporate bonds, shares, mortgages, government securities**\n• Act as a major source of **long-term debt and equity** for businesses\n• Long-term investment horizon suits long-term business finance needs`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch05-010', chapter: '10.3', topic: 'Financial Institutions', difficulty: 2,
    front: 'Why are institutional investors (super funds, insurance companies) important for business finance?',
    back: `• They control **very large pools of capital** — far larger than individual investors\n• They are major **buyers of corporate shares and bonds** when businesses need to raise finance\n• Their long investment horizon matches **long-term business capital needs**\n• Without institutional investors, businesses would struggle to raise large amounts of equity/debt quickly`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch05-q001', chapter: '10.3', topic: 'Financial Institutions', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Which of the following best describes the role of the Australian Securities Exchange (ASX)?',
    options: [
      { label: 'a', text: 'It provides short-term loans to businesses with insufficient collateral' },
      { label: 'b', text: 'It is a marketplace for buying and selling shares and other securities, enabling businesses to raise equity capital' },
      { label: 'c', text: 'It regulates the interest rates charged by Australian banks' },
      { label: 'd', text: 'It manages Australia\'s compulsory superannuation contributions' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch05-q002', chapter: '10.3', topic: 'Financial Institutions', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Investment banks differ from retail banks because investment banks:',
    options: [
      { label: 'a', text: 'Accept deposits from the general public and lend to households' },
      { label: 'b', text: 'Focus on corporate finance, mergers and acquisitions, and underwriting securities rather than retail deposits' },
      { label: 'c', text: 'Are regulated by the RBA rather than ASIC' },
      { label: 'd', text: 'Only provide finance to small and medium businesses' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch05-q003', chapter: '10.3', topic: 'Financial Institutions', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Superannuation funds are significant providers of finance to businesses because:',
    options: [
      { label: 'a', text: 'They lend directly to businesses at below-market interest rates' },
      { label: 'b', text: 'Compulsory contributions create very large pools of capital that are invested in corporate shares and bonds' },
      { label: 'c', text: 'They are funded by government grants and invest only in public infrastructure' },
      { label: 'd', text: 'They provide equity finance exclusively to small start-up businesses' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch05-q004', chapter: '10.3', topic: 'Financial Institutions', type: 'short', difficulty: 2, marks: 4,
    question: 'Explain the role of TWO financial institutions in providing finance to businesses.',
    keyPoints: [
      'Banks: accept deposits and lend to businesses via overdrafts, term loans and mortgages; primary source of debt finance',
      'Superannuation funds: pool compulsory retirement savings and invest in corporate shares and bonds, providing major long-term equity and debt capital',
      'Investment banks: assist large companies with IPOs, bond issues and M&A — underwrite securities',
      'Finance companies: lend to higher-risk borrowers at higher rates; specialise in vehicle and equipment finance',
    ],
    modelAnswer: 'Banks play the most direct role in business finance by accepting deposits from the public and lending to businesses. They provide a range of products including overdrafts for short-term cash flow, term loans for medium-term needs, and mortgages for property purchases. The Big Four Australian banks — Commonwealth, NAB, ANZ and Westpac — dominate this sector. Superannuation funds play a less direct but equally important role. Australia\'s compulsory superannuation system has created a pool of over $3 trillion in retirement savings that fund managers must invest. They do this by buying corporate shares and bonds on the ASX and in private markets. This means every listed company or bond-issuing corporation benefits from super funds as major buyers — making these funds critical providers of long-term capital.',
  },
  {
    id: 'biz-ch05-q005', chapter: '10.3', topic: 'Financial Institutions', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Unit trusts (managed funds) benefit businesses because:',
    options: [
      { label: 'a', text: 'They lend directly to businesses at fixed interest rates set by the RBA' },
      { label: 'b', text: 'They pool individual investor savings and use them to buy corporate securities, channelling capital to businesses' },
      { label: 'c', text: 'They accept deposits from the public and provide cheap short-term finance to businesses' },
      { label: 'd', text: 'They guarantee the share price of newly listed companies on the ASX' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch05-q006', chapter: '10.3', topic: 'Financial Institutions', type: 'short', difficulty: 3, marks: 5,
    question: 'Explain how the ASX enables businesses to raise equity finance and the obligations this creates.',
    keyPoints: [
      'ASX provides a marketplace where businesses can sell shares to the public through an IPO or rights issue',
      'Listing on the ASX raises large amounts of equity — no obligation to repay capital',
      'Creates obligations: continuous disclosure (must immediately inform ASX of material information), audited annual reports, compliance with ASX Listing Rules',
      'Loss of control: new shareholders gain voting rights; management may face pressure from activist shareholders',
      'The ASX\'s secondary market (share trading) provides liquidity, making shares attractive to investors and thus enabling lower-cost equity raising',
    ],
    modelAnswer: 'The ASX enables businesses to raise equity finance primarily through an Initial Public Offering (IPO), where shares in the company are sold to the public for the first time. Once listed, businesses can raise further equity through rights issues (offering new shares to existing shareholders at a discount). This equity is permanent capital — there is no obligation to repay it, making it valuable for long-term growth. However, listing creates significant obligations. Companies must comply with ASX Listing Rules including continuous disclosure, requiring immediate notification to the ASX of any information that might affect the share price. They must also produce audited annual financial reports and hold annual general meetings. Additionally, new shareholders gain voting rights, potentially diluting the founders\' control of the business. Despite these costs, the ASX is crucial for capital-intensive businesses needing large amounts of long-term funding.',
  },
  {
    id: 'biz-ch05-q007', chapter: '10.3', topic: 'Financial Institutions', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Finance companies differ from banks because finance companies typically:',
    options: [
      { label: 'a', text: 'Are owned by the government and charge lower interest rates' },
      { label: 'b', text: 'Accept retail deposits and offer offset accounts to homeowners' },
      { label: 'c', text: 'Lend to higher-risk borrowers and fund themselves through wholesale markets rather than retail deposits' },
      { label: 'd', text: 'Only finance the government\'s public sector borrowings' },
    ],
    correctOption: 'c',
  },
];
