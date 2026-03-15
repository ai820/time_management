import { Chapter, FlashCard, PracticeQuestion } from '../types';
import { flashcards as ch01cards, questions as ch01qs } from './finance/ch01-strategic-role';
import { flashcards as ch02cards, questions as ch02qs } from './finance/ch02-objectives';
import { flashcards as ch03cards, questions as ch03qs } from './finance/ch03-interdependence';
import { flashcards as ch04cards, questions as ch04qs } from './finance/ch04-sources-finance';
import { flashcards as ch05cards, questions as ch05qs } from './finance/ch05-financial-institutions';
import { flashcards as ch06cards, questions as ch06qs } from './finance/ch06-govt-influence';
import { flashcards as ch07cards, questions as ch07qs } from './finance/ch07-global-market';
import { flashcards as ch08cards, questions as ch08qs } from './finance/ch08-planning';
import { flashcards as ch09cards, questions as ch09qs } from './finance/ch09-debt-equity';
import { flashcards as ch10cards, questions as ch10qs } from './finance/ch10-matching-finance';
import { flashcards as ch11cards, questions as ch11qs } from './finance/ch11-monitoring';
import { flashcards as ch12cards, questions as ch12qs } from './finance/ch12-financial-ratios';
import { flashcards as ch13cards, questions as ch13qs } from './finance/ch13-limitations';
import { flashcards as ch14cards, questions as ch14qs } from './finance/ch14-ethics';

export const chapters: Chapter[] = [
  {
    id: '9.2',
    title: '9.2 Strategic Role of Financial Management',
    subtitle: 'Finance as a strategic function & financial needs',
    color: 'bg-blue-600',
    accent: 'text-blue-400',
  },
  {
    id: '9.3',
    title: '9.3 Objectives of Financial Management',
    subtitle: 'Profitability, growth, efficiency, liquidity & solvency',
    color: 'bg-purple-600',
    accent: 'text-purple-400',
  },
  {
    id: '9.4',
    title: '9.4 Interdependence with Other Functions',
    subtitle: 'Finance linked to marketing, operations & HR',
    color: 'bg-pink-600',
    accent: 'text-pink-400',
  },
  {
    id: '10.2',
    title: '10.2 Sources of Finance',
    subtitle: 'Internal & external finance — debt and equity',
    color: 'bg-orange-600',
    accent: 'text-orange-400',
  },
  {
    id: '10.3',
    title: '10.3 Financial Institutions',
    subtitle: 'Banks, investment banks, super funds & ASX',
    color: 'bg-teal-600',
    accent: 'text-teal-400',
  },
  {
    id: '10.4',
    title: '10.4 Influence of Government',
    subtitle: 'ASIC regulation & company tax effects',
    color: 'bg-red-600',
    accent: 'text-red-400',
  },
  {
    id: '10.5',
    title: '10.5 Global Market Influences',
    subtitle: 'Economic outlook, fund availability & interest rates',
    color: 'bg-sky-600',
    accent: 'text-sky-400',
  },
  {
    id: '11.2',
    title: '11.2 Financial Planning & Implementation',
    subtitle: 'Budgets, record systems, risk & financial controls',
    color: 'bg-violet-600',
    accent: 'text-violet-400',
  },
  {
    id: '11.3',
    title: '11.3 Debt & Equity Financing',
    subtitle: 'Gearing, advantages & disadvantages of debt vs equity',
    color: 'bg-emerald-600',
    accent: 'text-emerald-400',
  },
  {
    id: '11.4',
    title: '11.4 Matching Finance to Purpose',
    subtitle: 'Short-term vs long-term finance matched to assets',
    color: 'bg-amber-600',
    accent: 'text-amber-400',
  },
  {
    id: '11.5',
    title: '11.5 Monitoring & Controlling',
    subtitle: 'Cash flow, income statement & balance sheet',
    color: 'bg-rose-600',
    accent: 'text-rose-400',
  },
  {
    id: '11.6',
    title: '11.6 Financial Ratios',
    subtitle: 'Liquidity, profitability, efficiency & gearing ratios',
    color: 'bg-cyan-600',
    accent: 'text-cyan-400',
  },
  {
    id: '11.7',
    title: '11.7 Limitations of Financial Reports',
    subtitle: 'Normalised earnings, asset valuation & timing issues',
    color: 'bg-lime-600',
    accent: 'text-lime-400',
  },
  {
    id: '11.8',
    title: '11.8 Ethical Issues in Financial Management',
    subtitle: 'Audits, record keeping & reporting practices',
    color: 'bg-indigo-600',
    accent: 'text-indigo-400',
  },
];

export const allFlashcards: FlashCard[] = [
  ...ch01cards, ...ch02cards, ...ch03cards, ...ch04cards, ...ch05cards, ...ch06cards, ...ch07cards,
  ...ch08cards, ...ch09cards, ...ch10cards, ...ch11cards, ...ch12cards, ...ch13cards, ...ch14cards,
];

export const allQuestions: PracticeQuestion[] = [
  ...ch01qs, ...ch02qs, ...ch03qs, ...ch04qs, ...ch05qs, ...ch06qs, ...ch07qs,
  ...ch08qs, ...ch09qs, ...ch10qs, ...ch11qs, ...ch12qs, ...ch13qs, ...ch14qs,
];

export function getChapter(id: string): Chapter | undefined {
  return chapters.find(c => c.id === id);
}

export function getCardsForChapter(chapterId: string): FlashCard[] {
  return allFlashcards.filter(c => c.chapter === chapterId);
}

export function getQuestionsForChapter(chapterId: string): PracticeQuestion[] {
  return allQuestions.filter(q => q.chapter === chapterId);
}
