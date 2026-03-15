import { FlashCard, PracticeQuestion } from '../../types';

const now = Date.now();

export const flashcards: FlashCard[] = [
  {
    id: 'biz-ch13-001', chapter: '11.7', topic: 'Limitations of Financial Reports', difficulty: 1,
    front: 'What are the main limitations of financial reports?',
    back: `• **Normalised earnings**: adjustments to remove one-off items can obscure true performance\n• **Capitalising expenses**: treating expenses as assets to inflate profit\n• **Valuing assets**: different valuation methods give different balance sheet figures\n• **Timing issues**: reporting period may not reflect underlying trends\n• **Debt repayments**: ignores off-balance-sheet obligations\n• **Notes to accounts**: key information buried in complex footnotes`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch13-002', chapter: '11.7', topic: 'Limitations of Financial Reports', difficulty: 2,
    front: 'What is "normalised earnings" and why can it mislead?',
    back: `• **Normalised earnings**: adjusted profit figures that remove "unusual" or "one-off" items\n• Companies may exclude: restructuring costs, asset write-downs, legal settlements\n• Creates risk: recurring costs may be presented as "one-off" to **inflate underlying earnings**\n• Investors need to compare **reported (GAAP) earnings vs normalised earnings** to assess reliability`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch13-003', chapter: '11.7', topic: 'Limitations of Financial Reports', difficulty: 2,
    front: 'What is "capitalising expenses" and how does it affect financial reports?',
    back: `• **Capitalising an expense**: recording a cost as an asset (balance sheet) rather than an expense (income statement)\n• Effect: profit is **overstated** in the current period (cost not immediately expensed)\n• Example: treating marketing costs as an "intangible asset" rather than expensing them\n• Asset is then depreciated over years — **smoothing and deferring** the true cost impact`,
    detail: `Capitalising expenses involves recording what should be an operating expense as a long-term asset. For example, a company might capitalise $10 million in software development costs — instead of expensing all $10 million in the current year (reducing profit by $10 million), it records a $10 million "asset" and depreciates it over 5 years at $2 million per year. This makes current-year profit look $8 million higher than it would under full expensing. Financial statement users must scrutinise notes about capitalised costs and compare to industry standards to assess whether the treatment is appropriate or inflating profits.`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch13-004', chapter: '11.7', topic: 'Limitations of Financial Reports', difficulty: 2,
    front: 'How does asset valuation create limitations in financial reports?',
    back: `• Assets can be valued using different methods:\n  - **Historical cost**: original purchase price (conservative, reliable but outdated)\n  - **Fair value (market value)**: current market price (more relevant but subjective)\n  - **Net realisable value**: what asset would sell for today\n• Different methods produce **different balance sheet values** → ratio results vary\n• **Intangible assets** (brands, goodwill, IP) are especially difficult to value reliably`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch13-005', chapter: '11.7', topic: 'Limitations of Financial Reports', difficulty: 2,
    front: 'What are "timing issues" in financial reporting and why do they matter?',
    back: `• Financial reports cover a **fixed period** (e.g. annual, half-year) — may not reflect current conditions\n• A business may have had a very strong December quarter but poor first 9 months\n• Annual report gives a **blended** result that obscures the poor period\n• Seasonal businesses particularly affected: annual results may hide peak/trough patterns`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch13-006', chapter: '11.7', topic: 'Limitations of Financial Reports', difficulty: 2,
    front: 'How can debt repayments be obscured in financial reports?',
    back: `• **Off-balance-sheet financing**: some obligations (e.g. operating leases under old standards) not shown as liabilities\n• Long-term debt repayment schedules may be buried in **notes to accounts**\n• A business might show low reported debt but have large upcoming repayment obligations\n• Analysts must read **full notes and footnotes** to understand true debt burden`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch13-007', chapter: '11.7', topic: 'Limitations of Financial Reports', difficulty: 1,
    front: 'What are "notes to accounts" and why are they important but also a limitation?',
    back: `• **Notes to accounts**: supplementary disclosures attached to financial statements\n• Contain: details on accounting policies, contingent liabilities, debt repayment schedules, related-party transactions\n• Important: provide critical context not visible in headline figures\n• Limitation: notes are **voluminous, technical and difficult** for non-expert readers to interpret`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch13-008', chapter: '11.7', topic: 'Limitations of Financial Reports', difficulty: 3,
    front: 'Why do different accounting standards create comparability problems in financial analysis?',
    back: `• Different businesses may use different **depreciation methods** (straight-line vs diminishing balance)\n• Different **inventory valuation methods** (FIFO vs weighted average) give different COGS\n• Some industries have different **accounting standards** for recognising revenue\n• Makes **cross-company ratio comparisons** unreliable without adjusting for methodology differences`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch13-009', chapter: '11.7', topic: 'Limitations of Financial Reports', difficulty: 2,
    front: 'How do non-financial factors limit the usefulness of financial reports?',
    back: `• Financial reports only capture **quantitative (measurable) information**\n• They do NOT capture: management quality, brand reputation, employee morale, customer loyalty\n• A business with strong financial ratios may be in **serious long-term decline** if key staff are leaving\n• Financial analysis must be **supplemented** with qualitative (non-financial) information`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
  {
    id: 'biz-ch13-010', chapter: '11.7', topic: 'Limitations of Financial Reports', difficulty: 2,
    front: 'What is the difference between historical cost and fair value accounting?',
    back: `• **Historical cost**: records asset at its **original purchase price** — no revaluation\n  - Advantage: objective, verifiable; Disadvantage: quickly becomes outdated\n• **Fair value**: records asset at current **market value** — updated regularly\n  - Advantage: more relevant; Disadvantage: can be subjective and volatile\n• The choice affects: **balance sheet totals**, **asset ratios**, and **reported equity**`,
    lastReviewed: null, nextReview: now, correctStreak: 0, easeFactor: 2.5, interval: 0,
  },
];

export const questions: PracticeQuestion[] = [
  {
    id: 'biz-ch13-q001', chapter: '11.7', topic: 'Limitations of Financial Reports', type: 'mcq', difficulty: 1, marks: 1,
    question: 'Which of the following is a recognised limitation of financial reports?',
    options: [
      { label: 'a', text: 'Financial reports are produced too frequently to be useful for management decisions' },
      { label: 'b', text: 'Normalised earnings adjustments may hide recurring costs, overstating underlying profit' },
      { label: 'c', text: 'Financial reports always include qualitative information about management quality' },
      { label: 'd', text: 'Financial ratios are too complex for most business managers to calculate' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch13-q002', chapter: '11.7', topic: 'Limitations of Financial Reports', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Capitalising expenses rather than expensing them immediately affects financial reports by:',
    options: [
      { label: 'a', text: 'Reducing profit in the current period and increasing total assets' },
      { label: 'b', text: 'Overstating profit in the current period by recording the cost as an asset rather than an expense' },
      { label: 'c', text: 'Reducing the business\'s debt-to-equity ratio immediately' },
      { label: 'd', text: 'Increasing current liabilities and reducing working capital' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch13-q003', chapter: '11.7', topic: 'Limitations of Financial Reports', type: 'mcq', difficulty: 2, marks: 1,
    question: 'The historical cost method of asset valuation is considered a limitation because:',
    options: [
      { label: 'a', text: 'It records assets at their current market value, which is too volatile' },
      { label: 'b', text: 'Assets are recorded at their original purchase price, which may significantly understate their current value' },
      { label: 'c', text: 'It prevents businesses from claiming depreciation on their assets' },
      { label: 'd', text: 'ASIC prohibits its use in financial reporting for public companies' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch13-q004', chapter: '11.7', topic: 'Limitations of Financial Reports', type: 'short', difficulty: 3, marks: 6,
    question: 'Explain THREE limitations of financial reports and why each makes it difficult to accurately assess a business\'s true financial performance.',
    keyPoints: [
      'Normalised earnings: companies remove "one-off" items from profit → recurring costs may be wrongly excluded → overstated underlying earnings',
      'Capitalising expenses: recording costs as assets rather than expenses inflates current-year profit and overstates the asset base',
      'Asset valuation: different methods (historical cost vs fair value) give very different balance sheet figures → ratio comparisons between businesses or periods unreliable',
      'Timing: annual reports blend strong and weak quarters → disguise seasonal patterns or recent deterioration',
      'Non-financial factors: reports don\'t capture management quality, staff morale, brand reputation → good figures can coexist with underlying strategic problems',
    ],
    modelAnswer: 'Three important limitations of financial reports are normalised earnings, capitalising expenses, and asset valuation. Normalised earnings present an "adjusted" profit figure that removes supposedly one-off items such as restructuring costs, legal settlements or asset write-downs. This can mislead investors if these costs are actually recurring — a company might claim something is a one-off for several consecutive years, systematically overstating its underlying profitability. Capitalising expenses refers to recording what would normally be an operating expense as a long-term asset on the balance sheet. For example, treating $5 million in marketing costs as an "intangible asset" means the income statement shows $5 million less in expenses, inflating profit. The asset is then depreciated over years, smoothing the cost but obscuring its true nature. Asset valuation presents a third limitation: assets can be valued at historical cost (original price) or fair value (current market price). A property purchased 20 years ago may be worth five times its recorded value on the balance sheet, understating total assets and owners\' equity. Conversely, fair value during a market downturn may understate the asset\'s long-run productive value. These different methods make cross-company comparisons unreliable without adjusting for methodological differences.',
  },
  {
    id: 'biz-ch13-q005', chapter: '11.7', topic: 'Limitations of Financial Reports', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Financial reports fail to capture non-financial information, which means they cannot reveal:',
    options: [
      { label: 'a', text: 'The current ratio or debt-to-equity ratio' },
      { label: 'b', text: 'Management quality, employee morale, brand strength and customer loyalty' },
      { label: 'c', text: 'Net profit and gross profit figures for the period' },
      { label: 'd', text: 'The book value of non-current assets on the balance sheet' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch13-q006', chapter: '11.7', topic: 'Limitations of Financial Reports', type: 'mcq', difficulty: 2, marks: 1,
    question: 'Notes to accounts are considered both important and a limitation because:',
    options: [
      { label: 'a', text: 'They contain mandatory disclosures required by ASIC but are often too brief to be useful' },
      { label: 'b', text: 'They contain critical details about accounting policies and obligations, but are voluminous and technically complex, making them difficult for non-experts to interpret' },
      { label: 'c', text: 'They replace the need for an independent audit of financial statements' },
      { label: 'd', text: 'They are only required for listed companies with more than $100 million in revenue' },
    ],
    correctOption: 'b',
  },
  {
    id: 'biz-ch13-q007', chapter: '11.7', topic: 'Limitations of Financial Reports', type: 'short', difficulty: 2, marks: 4,
    question: 'Explain how the valuation of assets creates limitations in interpreting a business\'s balance sheet.',
    keyPoints: [
      'Assets can be valued at historical cost (original purchase price), fair value (market price), or net realisable value',
      'Historical cost is objective and verifiable but can become severely outdated — a building bought 30 years ago may be worth much more',
      'Fair value is more relevant but subjective — depends on market conditions and can introduce volatility into balance sheet figures',
      'Different methods mean two businesses with identical assets can show very different balance sheet values → ratio comparisons are unreliable without adjusting for methodology',
    ],
    modelAnswer: 'Asset valuation creates significant limitations in interpreting a business\'s balance sheet because different methods — historical cost, fair value, or net realisable value — produce very different figures. Under historical cost accounting, assets are recorded at their original purchase price and not subsequently revalued (except through depreciation). A commercial property purchased 20 years ago for $1 million might now be worth $5 million, but the balance sheet records only $1 million (minus accumulated depreciation). This means total assets are understated, owners\' equity is understated, and ratios such as return on equity appear inflated. Fair value accounting uses current market prices, providing more relevant information but introducing subjectivity — market prices fluctuate and valuers can disagree. This creates volatility in reported equity and assets between periods even if nothing fundamental has changed. Because different businesses may use different valuation methods for the same type of asset, comparing ratio results across businesses becomes unreliable without first adjusting for these methodological differences.',
  },
];
