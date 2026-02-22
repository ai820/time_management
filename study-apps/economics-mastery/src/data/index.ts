import { Chapter, FlashCard, PracticeQuestion } from '../types';
import { flashcards as ch01cards, questions as ch01qs } from './topic2/ch01-direction-trade';
import { flashcards as ch02cards, questions as ch02qs } from './topic2/ch02-composition-trade';
import { flashcards as ch03cards, questions as ch03qs } from './topic2/ch03-financial-flows';
import { flashcards as ch04cards, questions as ch04qs } from './topic2/ch04-current-account';
import { flashcards as ch05cards, questions as ch05qs } from './topic2/ch05-capital-financial-account';
import { flashcards as ch06cards, questions as ch06qs } from './topic2/ch06-bop-links';
import { flashcards as ch07cards, questions as ch07qs } from './topic2/ch07-int-competitiveness';
import { flashcards as ch08cards, questions as ch08qs } from './topic2/ch08-terms-of-trade';
import { flashcards as ch09cards, questions as ch09qs } from './topic2/ch09-borrowing-investment';
import { flashcards as ch10cards, questions as ch10qs } from './topic2/ch10-consequences-cad';

export const chapters: Chapter[] = [
  {
    id: '2.1',
    title: '2.1 Direction of Trade',
    subtitle: 'Trading partners & geographic shifts',
    color: 'bg-blue-600',
    accent: 'text-blue-400',
  },
  {
    id: '2.2',
    title: '2.2 Composition of Trade',
    subtitle: 'What Australia exports & imports',
    color: 'bg-purple-600',
    accent: 'text-purple-400',
  },
  {
    id: '2.3',
    title: '2.3 Financial Flows',
    subtitle: 'Direct & portfolio investment',
    color: 'bg-pink-600',
    accent: 'text-pink-400',
  },
  {
    id: '2.4',
    title: '2.4 Current Account',
    subtitle: 'Net goods, services, income & CAD',
    color: 'bg-orange-600',
    accent: 'text-orange-400',
  },
  {
    id: '2.5',
    title: '2.5 Capital & Financial Account',
    subtitle: 'KFA, FDI, portfolio & reserve assets',
    color: 'bg-yellow-600',
    accent: 'text-yellow-400',
  },
  {
    id: '2.6',
    title: '2.6 BOP Links & Trends',
    subtitle: 'CA–KFA relationship & debt trap',
    color: 'bg-green-600',
    accent: 'text-green-400',
  },
  {
    id: '2.7',
    title: '2.7 International Competitiveness',
    subtitle: 'Export base, cost & non-cost factors',
    color: 'bg-teal-600',
    accent: 'text-teal-400',
  },
  {
    id: '2.8',
    title: '2.8 Terms of Trade',
    subtitle: 'TOT index, effects of changes',
    color: 'bg-cyan-600',
    accent: 'text-cyan-400',
  },
  {
    id: '2.9',
    title: '2.9 Borrowing & Investment',
    subtitle: 'NFD, NFL, NFE & servicing costs',
    color: 'bg-indigo-600',
    accent: 'text-indigo-400',
  },
  {
    id: '2.10',
    title: '2.10 Consequences of High CAD',
    subtitle: 'Debt trap, exchange rate & confidence',
    color: 'bg-red-600',
    accent: 'text-red-400',
  },
];

export const allFlashcards: FlashCard[] = [
  ...ch01cards, ...ch02cards, ...ch03cards, ...ch04cards, ...ch05cards,
  ...ch06cards, ...ch07cards, ...ch08cards, ...ch09cards, ...ch10cards,
];

export const allQuestions: PracticeQuestion[] = [
  ...ch01qs, ...ch02qs, ...ch03qs, ...ch04qs, ...ch05qs,
  ...ch06qs, ...ch07qs, ...ch08qs, ...ch09qs, ...ch10qs,
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
