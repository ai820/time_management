import { AppState, FlashCard, DailyStats } from '../types';

const KEY = 'econ-mastery-v3';

const defaultState: AppState = {
  flashcards: [],
  streak: 0,
  lastStudyDate: null,
  dailyStats: [],
};

export function loadState(): AppState {
  try {
    const saved = localStorage.getItem(KEY);
    if (!saved) return defaultState;
    return JSON.parse(saved) as AppState;
  } catch {
    return defaultState;
  }
}

export function saveState(state: AppState): void {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function saveFlashcards(cards: FlashCard[]): void {
  const state = loadState();
  state.flashcards = cards;
  saveState(state);
}

export function initializeCards(defaults: FlashCard[]): void {
  const state = loadState();
  if (state.flashcards.length === 0) {
    state.flashcards = defaults;
  } else {
    // Merge: keep SRS state but always update content fields from source data
    const byId = new Map(state.flashcards.map(c => [c.id, c]));
    state.flashcards = defaults.map(def => {
      const saved = byId.get(def.id);
      if (!saved) return def;
      return { ...def, lastReviewed: saved.lastReviewed, nextReview: saved.nextReview, correctStreak: saved.correctStreak, easeFactor: saved.easeFactor, interval: saved.interval };
    });
  }
  saveState(state);
}

export function updateStreak(): void {
  const state = loadState();
  const today = new Date().toISOString().split('T')[0];
  if (state.lastStudyDate === today) return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yd = yesterday.toISOString().split('T')[0];

  state.streak = state.lastStudyDate === yd ? state.streak + 1 : 1;
  state.lastStudyDate = today;
  saveState(state);
}

export function getStreak(): number {
  const state = loadState();
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yd = yesterday.toISOString().split('T')[0];
  return state.lastStudyDate === today || state.lastStudyDate === yd
    ? state.streak
    : 0;
}

export function updateDailyStats(partial: Partial<DailyStats>): void {
  const state = loadState();
  const today = new Date().toISOString().split('T')[0];
  const idx = state.dailyStats.findIndex(s => s.date === today);
  if (idx >= 0) {
    state.dailyStats[idx] = { ...state.dailyStats[idx], ...partial };
  } else {
    state.dailyStats.push({ date: today, cardsReviewed: 0, correctAnswers: 0, ...partial });
  }
  saveState(state);
}
