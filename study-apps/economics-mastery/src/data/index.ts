import { Chapter, FlashCard, PracticeQuestion } from '../types';
import { flashcards as ch01cards, questions as ch01qs } from './topic2/ch01-global-position';
import { flashcards as ch02cards, questions as ch02qs } from './topic2/ch02-trade-patterns';
import { flashcards as ch03cards, questions as ch03qs } from './topic2/ch03-financial-flows';
import { flashcards as ch04cards, questions as ch04qs } from './topic2/ch04-balance-of-payments';
import { flashcards as ch05cards, questions as ch05qs } from './topic2/ch05-bop-trends';
import { flashcards as ch06cards, questions as ch06qs } from './topic2/ch06-consequences-cad';
import { flashcards as ch07cards, questions as ch07qs } from './topic2/ch07-exchange-rate-intro';
import { flashcards as ch08cards, questions as ch08qs } from './topic2/ch08-floating-exchange-rate';
import { flashcards as ch09cards, questions as ch09qs } from './topic2/ch09-rba-intervention';
import { flashcards as ch10cards, questions as ch10qs } from './topic2/ch10-fixed-exchange-rate';
import { flashcards as ch11cards, questions as ch11qs } from './topic2/ch11-exchange-rate-bop';

export const chapters: Chapter[] = [
  {
    id: '4.1',
    title: '4.1 Understanding Australia\'s Global Position',
    subtitle: 'Small open economy & Australia\'s global position',
    color: 'bg-blue-600',
    accent: 'text-blue-400',
  },
  {
    id: '4.2',
    title: '4.2 Trends in Australia\'s Trade Patterns',
    subtitle: 'Direction & composition of Australia\'s trade',
    color: 'bg-purple-600',
    accent: 'text-purple-400',
  },
  {
    id: '4.3',
    title: '4.3 Trends in Australia\'s Financial Flows',
    subtitle: 'Direct vs portfolio investment & financial flows',
    color: 'bg-pink-600',
    accent: 'text-pink-400',
  },
  {
    id: '4.4',
    title: '4.4 The Balance of Payments',
    subtitle: 'Current account, capital & financial account',
    color: 'bg-orange-600',
    accent: 'text-orange-400',
  },
  {
    id: '4.5',
    title: '4.5 Trends in Australia\'s Balance of Payments',
    subtitle: 'BOGS, terms of trade, primary income & savings gap',
    color: 'bg-teal-600',
    accent: 'text-teal-400',
  },
  {
    id: '4.6',
    title: '4.6 The Consequences of a High CAD',
    subtitle: 'Foreign liabilities, servicing costs & growth constraint',
    color: 'bg-red-600',
    accent: 'text-red-400',
  },
  {
    id: '5.1',
    title: '5.1 Introduction to Exchange Rates',
    subtitle: "Definition, forex market & Australia's global role",
    color: 'bg-sky-600',
    accent: 'text-sky-400',
  },
  {
    id: '5.2',
    title: "5.2 Australia's Floating Exchange Rate",
    subtitle: "Supply & demand, TWI & recent A$ movements",
    color: 'bg-violet-600',
    accent: 'text-violet-400',
  },
  {
    id: '5.3',
    title: '5.3 Reserve Bank Intervention',
    subtitle: 'Dirtying the float & monetary policy',
    color: 'bg-emerald-600',
    accent: 'text-emerald-400',
  },
  {
    id: '5.4',
    title: '5.4 Fixed Exchange Rate Systems',
    subtitle: 'Fixed rates, devaluation & managed flexible peg',
    color: 'bg-amber-600',
    accent: 'text-amber-400',
  },
  {
    id: '5.5',
    title: '5.5 Exchange Rates & the Balance of Payments',
    subtitle: 'BOP ↔ exchange rate, appreciation & depreciation effects',
    color: 'bg-rose-600',
    accent: 'text-rose-400',
  },
];

export const allFlashcards: FlashCard[] = [
  ...ch01cards, ...ch02cards, ...ch03cards, ...ch04cards, ...ch05cards, ...ch06cards,
  ...ch07cards, ...ch08cards, ...ch09cards, ...ch10cards, ...ch11cards,
];

export const allQuestions: PracticeQuestion[] = [
  ...ch01qs, ...ch02qs, ...ch03qs, ...ch04qs, ...ch05qs, ...ch06qs,
  ...ch07qs, ...ch08qs, ...ch09qs, ...ch10qs, ...ch11qs,
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
