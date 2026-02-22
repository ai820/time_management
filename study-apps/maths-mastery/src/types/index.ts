// Subject types
export type Subject = 'advanced' | 'ext1' | 'ext2';

// Flashcard types
export interface FlashCard {
  id: string;
  subject: Subject;
  topic: string;
  front: string;
  back: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  // Spaced repetition fields
  lastReviewed: number | null;
  nextReview: number;
  correctStreak: number;
  easeFactor: number; // SM-2 ease factor
  interval: number; // days until next review
}

// Problem types
export interface Problem {
  id: string;
  subject: Subject;
  topic: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  question: string;
  hints: string[];
  solution: {
    steps: string[];
    finalAnswer: string;
  };
  relatedFormulas: string[];
}

// Error log types
export type ErrorType = 'silly' | 'conceptual' | 'method' | 'time';

export interface ErrorEntry {
  id: string;
  date: number;
  problemId: string;
  problemQuestion: string;
  errorType: ErrorType;
  notes: string;
  relatedFormulas: string[];
  topic: string;
}

// Timed practice types
export interface TimedSession {
  id: string;
  date: number;
  duration: number; // in minutes
  topics: string[];
  subjects: Subject[];
  problems: {
    problemId: string;
    correct: boolean | null;
    timeSpent: number; // seconds
    skipped: boolean;
  }[];
  completed: boolean;
}

// Progress stats
export interface DailyStats {
  date: string; // YYYY-MM-DD
  cardsReviewed: number;
  problemsSolved: number;
  correctAnswers: number;
  timeStudied: number; // minutes
}

// App state
export interface AppState {
  flashcards: FlashCard[];
  problems: Problem[];
  errors: ErrorEntry[];
  sessions: TimedSession[];
  dailyStats: DailyStats[];
  streak: number;
  lastStudyDate: string | null;
}

// View types
export type View = 'home' | 'flashcards' | 'practice' | 'timed' | 'errors' | 'progress';
