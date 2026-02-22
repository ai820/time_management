import { AppState, FlashCard, Problem, ErrorEntry, TimedSession, DailyStats } from '../types';

const STORAGE_KEY = 'maths-mastery-hub';

// Default empty state
const defaultState: AppState = {
  flashcards: [],
  problems: [],
  errors: [],
  sessions: [],
  dailyStats: [],
  streak: 0,
  lastStudyDate: null,
};

// Load state from localStorage
export function loadState(): AppState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultState;
    return JSON.parse(saved) as AppState;
  } catch {
    return defaultState;
  }
}

// Save state to localStorage
export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state:', e);
  }
}

// Update flashcards
export function saveFlashcards(cards: FlashCard[]): void {
  const state = loadState();
  state.flashcards = cards;
  saveState(state);
}

// Update problems
export function saveProblems(problems: Problem[]): void {
  const state = loadState();
  state.problems = problems;
  saveState(state);
}

// Add error entry
export function addError(error: ErrorEntry): void {
  const state = loadState();
  state.errors.push(error);
  saveState(state);
}

// Update errors
export function saveErrors(errors: ErrorEntry[]): void {
  const state = loadState();
  state.errors = errors;
  saveState(state);
}

// Add timed session
export function addSession(session: TimedSession): void {
  const state = loadState();
  state.sessions.push(session);
  saveState(state);
}

// Update daily stats
export function updateDailyStats(stats: Partial<DailyStats>): void {
  const state = loadState();
  const today = new Date().toISOString().split('T')[0];

  const existingIndex = state.dailyStats.findIndex(s => s.date === today);

  if (existingIndex >= 0) {
    state.dailyStats[existingIndex] = {
      ...state.dailyStats[existingIndex],
      ...stats,
    };
  } else {
    state.dailyStats.push({
      date: today,
      cardsReviewed: 0,
      problemsSolved: 0,
      correctAnswers: 0,
      timeStudied: 0,
      ...stats,
    });
  }

  saveState(state);
}

// Update streak
export function updateStreak(): void {
  const state = loadState();
  const today = new Date().toISOString().split('T')[0];

  if (state.lastStudyDate === today) {
    // Already studied today
    return;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  if (state.lastStudyDate === yesterdayStr) {
    // Consecutive day
    state.streak += 1;
  } else if (state.lastStudyDate !== today) {
    // Streak broken
    state.streak = 1;
  }

  state.lastStudyDate = today;
  saveState(state);
}

// Get current streak
export function getStreak(): number {
  const state = loadState();
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  // If last study was today or yesterday, streak is valid
  if (state.lastStudyDate === today || state.lastStudyDate === yesterdayStr) {
    return state.streak;
  }

  // Streak is broken
  return 0;
}

// Initialize with default data if empty
export function initializeData(defaultCards: FlashCard[], defaultProblems: Problem[]): void {
  const state = loadState();

  if (state.flashcards.length === 0) {
    state.flashcards = defaultCards;
  }

  if (state.problems.length === 0) {
    state.problems = defaultProblems;
  }

  saveState(state);
}
