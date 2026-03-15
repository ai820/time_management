export type ChapterId =
  | '9.2' | '9.3' | '9.4'
  | '10.2' | '10.3' | '10.4' | '10.5'
  | '11.2' | '11.3' | '11.4' | '11.5' | '11.6' | '11.7' | '11.8';

export interface Chapter {
  id: ChapterId;
  title: string;
  subtitle: string;
  color: string;
  accent: string;
}

export interface FlashCard {
  id: string;
  chapter: ChapterId;
  topic: string;
  front: string;
  back: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  lastReviewed: number | null;
  nextReview: number;
  correctStreak: number;
  easeFactor: number;
  interval: number;
  detail?: string;
}

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
  options?: MCQOption[];
  correctOption?: string;
  keyPoints?: string[];
  modelAnswer?: string;
  marks?: number;
}

export interface AppState {
  flashcards: FlashCard[];
  streak: number;
  lastStudyDate: string | null;
  dailyStats: DailyStats[];
}

export interface DailyStats {
  date: string;
  cardsReviewed: number;
  correctAnswers: number;
}

export type View = 'home' | 'chapter' | 'flashcards' | 'quiz' | 'hsc-mode';
