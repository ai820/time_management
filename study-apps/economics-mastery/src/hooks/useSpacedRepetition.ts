import { useState, useCallback, useEffect } from 'react';
import { FlashCard, ChapterId } from '../types';
import { loadState, saveFlashcards, updateStreak, updateDailyStats } from '../utils/storage';

function sm2(card: FlashCard, quality: number): FlashCard {
  const now = Date.now();
  if (quality < 3) {
    return {
      ...card,
      lastReviewed: now,
      nextReview: now + 24 * 60 * 60 * 1000,
      correctStreak: 0,
      interval: 1,
      easeFactor: Math.max(1.3, card.easeFactor - 0.2),
    };
  }
  const streak = card.correctStreak + 1;
  const interval =
    streak === 1 ? 1 :
    streak === 2 ? 3 :
    Math.round(card.interval * card.easeFactor);
  const easeFactor = Math.max(
    1.3,
    card.easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
  );
  return {
    ...card,
    lastReviewed: now,
    nextReview: now + interval * 24 * 60 * 60 * 1000,
    correctStreak: streak,
    interval,
    easeFactor,
  };
}

export function useSpacedRepetition(filterChapters?: ChapterId[]) {
  const [cards, setCards] = useState<FlashCard[]>([]);
  const [currentCard, setCurrentCard] = useState<FlashCard | null>(null);
  const [dueCount, setDueCount] = useState(0);

  const loadCards = useCallback(() => {
    const state = loadState();
    let filtered = state.flashcards;
    if (filterChapters && filterChapters.length > 0) {
      filtered = filtered.filter(c => filterChapters.includes(c.chapter));
    }
    setCards(filtered);
    const now = Date.now();
    const due = filtered.filter(c => c.nextReview <= now);
    setDueCount(due.length);
    if (due.length > 0) {
      const sorted = [...due].sort((a, b) =>
        a.nextReview !== b.nextReview
          ? a.nextReview - b.nextReview
          : b.difficulty - a.difficulty
      );
      setCurrentCard(sorted[0]);
    } else {
      setCurrentCard(null);
    }
  }, [filterChapters]);

  useEffect(() => { loadCards(); }, [loadCards]);

  const answerCard = useCallback((quality: number) => {
    if (!currentCard) return;
    const state = loadState();
    const updated = sm2(currentCard, quality);
    const idx = state.flashcards.findIndex(c => c.id === currentCard.id);
    if (idx >= 0) {
      state.flashcards[idx] = updated;
      saveFlashcards(state.flashcards);
    }
    updateStreak();
    const today = state.dailyStats.find(s => s.date === new Date().toISOString().split('T')[0]);
    updateDailyStats({
      cardsReviewed: (today?.cardsReviewed || 0) + 1,
      correctAnswers: quality >= 3 ? (today?.correctAnswers || 0) + 1 : (today?.correctAnswers || 0),
    });
    loadCards();
  }, [currentCard, loadCards]);

  const getTopicsWithDueCounts = useCallback(() => {
    const now = Date.now();
    const counts: Record<string, { total: number; due: number }> = {};
    cards.forEach(c => {
      if (!counts[c.topic]) counts[c.topic] = { total: 0, due: 0 };
      counts[c.topic].total++;
      if (c.nextReview <= now) counts[c.topic].due++;
    });
    return counts;
  }, [cards]);

  return { cards, currentCard, dueCount, answerCard, getTopicsWithDueCounts, reload: loadCards };
}
