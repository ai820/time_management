import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch14-001', chapter: '11.8', topic: 'Ethical Issues in Financial Management', difficulty: 1,
    front: 'What are the key ethical issues in financial management?',
    back: `• **Accurate financial reporting**: presenting financial statements honestly and without manipulation\n• **Audited accounts**: independent verification that statements are true and fair\n• **Record keeping**: maintaining complete, accurate financial records\n• **Reporting practices**: ethical disclosure — not misleading investors or stakeholders\n• Underpinned by: **corporate governance** and **director accountability**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch14-002', chapter: '11.8', topic: 'Ethical Issues in Financial Management', difficulty: 1,
    front: 'What is an audit and why is it ethically important?',
    back: `• **Audit**: independent examination of a business's financial records and statements\n• Conducted by: an **independent external auditor** (must be a registered company auditor)\n• Purpose: verify that statements are **true and fair** and comply with accounting standards\n• Ethical importance: prevents fraudulent reporting; provides confidence to investors and creditors\n• Required by: Corporations Act for all public companies`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch14-003', chapter: '11.8', topic: 'Ethical Issues in Financial Management', difficulty: 2,
    front: 'What are unethical financial reporting practices and what harm can they cause?',
    back: `• **Creative accounting**: using accounting flexibility to present misleading results\n• **Window dressing**: timing transactions to make the balance sheet look better at year-end\n• **Earnings management**: manipulating revenue or expense recognition to meet targets\n• Harm: **investors make poor decisions**; creditors extend unwarranted credit; collapses destroy jobs and retirement savings\n• Examples: Enron (USA), HIH Insurance (Australia)`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch14-004', chapter: '11.8', topic: 'Ethical Issues in Financial Management', difficulty: 2,
    front: 'What is "window dressing" in financial reporting?',
    back: `• **Window dressing**: manipulating the timing of transactions to make financial statements appear healthier at year-end\n• Example: delaying payments to suppliers until after balance sheet date → temporarily improves current ratio\n• Example: accelerating cash receipts from customers before year-end → improves reported cash balance\n• Result: financials look better than the **underlying reality** — misleads stakeholders`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch14-005', chapter: '11.8', topic: 'Ethical Issues in Financial Management', difficulty: 2,
    front: 'What ethical obligations do directors have in financial management?',
    back: `• Directors have a **duty of care**: must act in good faith in the best interests of the company\n• Must ensure financial statements are **accurate and not misleading** — can face personal liability\n• Cannot engage in **insider trading** — using non-public financial information to trade shares\n• Required by Corporations Act to **sign off** on annual financial statements as accurate`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch14-006', chapter: '11.8', topic: 'Ethical Issues in Financial Management', difficulty: 2,
    front: 'What is insider trading and why is it unethical?',
    back: `• **Insider trading**: using **material, non-public information** to buy or sell securities\n• Gives the insider an unfair advantage over other investors who don't have the information\n• Undermines **market integrity** and investor confidence in the fairness of the market\n• Illegal under Corporations Act — ASIC actively investigates; penalties include imprisonment\n• Example: a CFO buying shares before announcing strong profit results is inside information`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch14-007', chapter: '11.8', topic: 'Ethical Issues in Financial Management', difficulty: 2,
    front: 'Why is accurate record keeping an ethical obligation?',
    back: `• Accurate records form the **foundation** of all financial reporting — errors or omissions cascade into statements\n• **Tax obligations**: ATO requires accurate records to ensure correct tax payment\n• **Legal obligation**: Corporations Act requires businesses to keep financial records for 7 years\n• Fraudulent record keeping: falsifying records is a **criminal offence** — penalties include imprisonment`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch14-008', chapter: '11.8', topic: 'Ethical Issues in Financial Management', difficulty: 2,
    front: 'What is corporate governance and how does it support ethical financial management?',
    back: `• **Corporate governance**: the system by which companies are directed and controlled\n• Includes: independent board members, audit committees, internal controls, code of conduct\n• An **audit committee** (independent directors) oversees financial reporting and auditor independence\n• Strong governance reduces the risk of fraud, earnings manipulation and conflicts of interest`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch14-009', chapter: '11.8', topic: 'Ethical Issues in Financial Management', difficulty: 3,
    front: 'What lessons were learned from major corporate collapses like HIH Insurance about financial ethics?',
    back: `• **HIH Insurance (2001)**: Australia's largest corporate collapse — $5.3 billion failure\n• Causes included: **misleading financial reporting**, inadequate reserves, related-party transactions, poor governance\n• Lesson: auditors must be **truly independent** — not compromised by consulting fee conflicts\n• Lesson: boards need **independent directors** to challenge management and protect stakeholders\n• Result: strengthened ASIC powers, enhanced corporate governance requirements in Australia`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch14-010', chapter: '11.8', topic: 'Ethical Issues in Financial Management', difficulty: 2,
    front: 'How does the requirement for an independent audit support ethical financial reporting?',
    back: `• **Independence**: auditor has no financial interest in the company → can provide objective opinion\n• Checks: compliance with accounting standards, accuracy of records, adequacy of disclosures\n• Issues an **audit opinion**: unqualified (clean) vs qualified (reservations about accuracy)\n• Provides **assurance** to investors, creditors and regulators that reports are reliable`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch14-011', chapter: '11.8', topic: 'Ethical Issues in Financial Management', difficulty: 2,
    front: 'What are the consequences for a business found to have engaged in unethical financial reporting?',
    back: `• **ASIC investigation** and potential civil or criminal proceedings against directors\n• **Director disqualification** and personal financial liability\n• **Criminal penalties**: fraud, false accounting → fines and imprisonment\n• **Market loss**: share price collapse when fraud is revealed; investor confidence destroyed\n• **Business collapse**: inability to refinance as creditors withdraw → liquidation`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch14-q001', chapter: '11.8', topic: 'Ethical Issues in Financial Management', type: 'mcq', difficulty: 1, marks: 1,
    question: 'The primary purpose of an independent external audit is to:',
    options: [
      { label: 'a', text: 'Prepare the financial statements on behalf of the company' },
      { label: 'b', text: 'Verify that financial statements present a true and fair view and comply with accounting standards' },
      { label: 'c', text: 'Set the company\'s accounting policies and depreciation methods' },
      { label: 'd', text: 'Calculate the company\'s tax obligations for the financial year' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch14-q002', chapter: '11.8', topic: 'Ethical Issues in Financial Management', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Window dressing in financial reporting refers to:',
    options: [
      { label: 'a', text: 'Presenting financial results in an attractive visual format for the annual report' },
      { label: 'b', text: 'Manipulating the timing of transactions to make financial statements appear healthier than the underlying reality at year-end' },
      { label: 'c', text: 'Using different accounting standards in different subsidiaries to reduce tax' },
      { label: 'd', text: 'Disclosing all related-party transactions in the notes to accounts' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch14-q003', chapter: '11.8', topic: 'Ethical Issues in Financial Management', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Insider trading is unethical because it:',
    options: [
      { label: 'a', text: 'Results in a company paying less tax by timing asset sales to minimise gains' },
      { label: 'b', text: 'Gives certain investors an unfair advantage using information not available to the public, undermining market integrity' },
      { label: 'c', text: 'Allows directors to avoid preparing audited financial statements' },
      { label: 'd', text: 'Prevents small investors from participating in IPOs on the ASX' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch14-q004', chapter: '11.8', topic: 'Ethical Issues in Financial Management', type: 'short', difficulty: 3, marks: 6,
    question: 'Discuss the importance of ethical financial reporting practices for businesses, investors and the broader economy.',
    keyPoints: [
      'Businesses: ethical reporting builds trust with investors and creditors, lowering cost of capital; unethical reporting risks ASIC investigation, director liability, reputational damage and collapse',
      'Investors: rely on accurate financial reports to make informed investment decisions; inaccurate reports lead to poor decisions and financial losses',
      'Broader economy: financial system depends on trust in information; corporate collapses (HIH, Enron) destroy jobs, retirement savings and investor confidence in markets',
      'Regulation: ASIC, Corporations Act and mandatory audits are responses to past ethical failures — designed to prevent recurrence',
    ],
    modelAnswer: 'Ethical financial reporting practices are essential for businesses, investors and the broader economy. For businesses, ethical reporting establishes trust with investors, lenders and suppliers — reducing the cost of capital (lenders and investors accept lower returns when they have confidence in the information). Unethical reporting creates severe risks: ASIC investigation, director disqualification, criminal prosecution, and eventual business collapse when fraud is discovered. For investors, financial reports are the primary source of information on which investment decisions are based. If those reports are misleading — through earnings manipulation, capitalised expenses, or window dressing — investors allocate capital to companies that do not deserve it, incurring financial losses when the truth emerges. For the broader economy, trust in financial reporting is a foundation of an efficient capital market. Major corporate collapses caused by unethical reporting — such as HIH Insurance in Australia and Enron in the US — not only destroyed shareholder and creditor value but also damaged public confidence in financial markets, increased borrowing costs for all businesses, and resulted in thousands of job losses. These consequences explain why the regulatory framework — mandatory independent audits, continuous disclosure, and ASIC oversight — exists: to prevent individual ethical failures from cascading into systemic economic damage.',
  },
  {
    id: 'biz-ch14-q005', chapter: '11.8', topic: 'Ethical Issues in Financial Management', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Under the Corporations Act 2001, financial records must be kept for at least:',
    options: [
      { label: 'a', text: '3 years' },
      { label: 'b', text: '5 years' },
      { label: 'c', text: '7 years' },
      { label: 'd', text: '10 years' },
    ],
    correctOption: 'c',
  },
  {
    id: 'biz-ch14-q006', chapter: '11.8', topic: 'Ethical Issues in Financial Management', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Corporate governance structures that support ethical financial management include:',
    options: [
      { label: 'a', text: 'A board composed entirely of executive directors who also manage the company' },
      { label: 'b', text: 'Independent directors on an audit committee who oversee financial reporting and auditor independence' },
      { label: 'c', text: 'Allowing the CFO to also serve as the company\'s external auditor' },
      { label: 'd', text: 'Restricting financial report access to senior management only' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch14-q007', chapter: '11.8', topic: 'Ethical Issues in Financial Management', type: 'short', difficulty: 2, marks: 4,
    question: 'Explain why auditor independence is essential for ethical financial reporting and what can compromise it.',
    keyPoints: [
      'Auditor independence: auditor must have no financial interest in the company — provides objective, unbiased opinion on whether statements are true and fair',
      'Without independence: auditor may be unwilling to issue a qualified opinion if doing so risks losing lucrative consulting or audit fees',
      'What compromises independence: long tenure with same client, auditor also provides consulting services, personal relationships with management',
      'Safeguards: mandatory audit rotation, prohibiting auditors from providing certain non-audit services, ASIC oversight of auditor conduct',
    ],
    modelAnswer: 'Auditor independence is essential because the audit\'s value lies entirely in the auditor\'s ability to provide an objective, unbiased assessment of whether financial statements are true and fair. If the auditor has a financial interest in the company — through shareholdings, consulting fee arrangements, or personal relationships with management — they may be reluctant to issue a qualified opinion (one that flags concerns) for fear of losing that relationship. Independence is compromised in several ways: when an audit firm also provides significant non-audit consulting services to the same client, the firm has a financial incentive to maintain the client relationship by being accommodating rather than critical; when the same partner has audited a company for many years, familiarity may reduce professional scepticism; when auditors are nominated or compensated by management rather than by the independent audit committee. Safeguards include mandatory audit partner rotation every five years, restrictions on auditors providing non-audit services to audit clients, and ASIC oversight of auditor registration and conduct. Without these protections, corporate collapses like HIH Insurance — where auditors failed to identify catastrophic financial mismanagement — can occur.',
  },
];
