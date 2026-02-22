// Subchapter identifiers for Topic 2
export type ChapterId =
  | '2.1' | '2.2' | '2.3' | '2.4' | '2.5'
  | '2.6' | '2.7' | '2.8' | '2.9' | '2.10';

export interface Chapter {
  id: ChapterId;
  title: string;
  subtitle: string;
  color: string; // tailwind bg color class
  accent: string; // tailwind text color class
}

// Flashcard
export interface FlashCard {
  id: string;
  chapter: ChapterId;
  topic: string; // topic 2 subchapter name
  front: string;
  back: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  // SM-2 spaced repetition fields
  lastReviewed: number | null;
  nextReview: number;
  correctStreak: number;
  easeFactor: number;
  interval: number; // days
}

// Practice question (short answer / MCQ)
export type QuestionType = 'mcq' | 'short';

export interface MCQOption {
  label: string;
  text: string;
}

export interface PracticeQuestion {
  id: string;
  chapter: ChapterId;
  topic: string;
  type: QuestionType;
  difficulty: 1 | 2 | 3 | 4 | 5;
  question: string;
  // For MCQ
  options?: MCQOption[];
  correctOption?: string; // 'a', 'b', 'c', 'd'
  // For short answer
  keyPoints?: string[];
  modelAnswer?: string;
  // Marks (HSC style)
  marks?: number;
}

// App state (stored in localStorage)
export interface AppState {
  flashcards: FlashCard[];
  streak: number;
  lastStudyDate: string | null;
  dailyStats: DailyStats[];
}

export interface DailyStats {
  date: string; // YYYY-MM-DD
  cardsReviewed: number;
  correctAnswers: number;
}

// View routing
export type View =
  | 'home'
  | 'chapter'
  | 'flashcards'
  | 'quiz'
  | 'hsc-mode';
