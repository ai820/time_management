import { useState, useCallback, useEffect } from 'react';
import { FlashCard, Subject } from '../types';
import { loadState, saveFlashcards, updateStreak, updateDailyStats } from '../utils/storage';

// SM-2 Algorithm implementation
// Quality: 0-5 (0-2 = incorrect, 3-5 = correct with varying ease)

function calculateNextReview(card: FlashCard, quality: number): FlashCard {
  const now = Date.now();

  // Quality < 3 means incorrect answer
  if (quality < 3) {
    return {
      ...card,
      lastReviewed: now,
      nextReview: now + 1 * 24 * 60 * 60 * 1000, // 1 day
      correctStreak: 0,
      interval: 1,
      easeFactor: Math.max(1.3, card.easeFactor - 0.2),
    };
  }

  // Correct answer
  let newInterval: number;
  const newStreak = card.correctStreak + 1;

  if (newStreak === 1) {
    newInterval = 1;
  } else if (newStreak === 2) {
    newInterval = 3;
  } else {
    newInterval = Math.round(card.interval * card.easeFactor);
  }

  // Update ease factor based on quality
  const newEaseFactor = Math.max(
    1.3,
    card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  return {
    ...card,
    lastReviewed: now,
    nextReview: now + newInterval * 24 * 60 * 60 * 1000,
    correctStreak: newStreak,
    interval: newInterval,
    easeFactor: newEaseFactor,
  };
}

export function useSpacedRepetition(filterSubjects?: Subject[]) {
  const [cards, setCards] = useState<FlashCard[]>([]);
  const [currentCard, setCurrentCard] = useState<FlashCard | null>(null);
  const [dueCount, setDueCount] = useState(0);

  // Load cards from storage
  const loadCards = useCallback(() => {
    const state = loadState();
    let filtered = state.flashcards;

    if (filterSubjects && filterSubjects.length > 0) {
      filtered = filtered.filter(c => filterSubjects.includes(c.subject));
    }

    setCards(filtered);

    // Count due cards
    const now = Date.now();
    const due = filtered.filter(c => c.nextReview <= now);
    setDueCount(due.length);

    // Set current card (prioritize due cards)
    if (due.length > 0) {
      // Sort by next review (oldest first) then by difficulty (harder first)
      const sorted = [...due].sort((a, b) => {
        if (a.nextReview !== b.nextReview) return a.nextReview - b.nextReview;
        return b.difficulty - a.difficulty;
      });
      setCurrentCard(sorted[0]);
    } else {
      setCurrentCard(null);
    }
  }, [filterSubjects]);

  useEffect(() => {
    loadCards();
  }, [loadCards]);

  // Answer a card
  const answerCard = useCallback((quality: number) => {
    if (!currentCard) return;

    const state = loadState();
    const updatedCard = calculateNextReview(currentCard, quality);

    const cardIndex = state.flashcards.findIndex(c => c.id === currentCard.id);
    if (cardIndex >= 0) {
      state.flashcards[cardIndex] = updatedCard;
      saveFlashcards(state.flashcards);
    }

    // Update stats
    updateStreak();
    const todayStats = state.dailyStats.find(
      s => s.date === new Date().toISOString().split('T')[0]
    );
    updateDailyStats({
      cardsReviewed: (todayStats?.cardsReviewed || 0) + 1,
      correctAnswers: quality >= 3
        ? (todayStats?.correctAnswers || 0) + 1
        : (todayStats?.correctAnswers || 0),
    });

    // Reload cards to get next one
    loadCards();
  }, [currentCard, loadCards]);

  // Get cards by topic
  const getCardsByTopic = useCallback((topic: string) => {
    return cards.filter(c => c.topic === topic);
  }, [cards]);

  // Get due cards
  const getDueCards = useCallback(() => {
    const now = Date.now();
    return cards.filter(c => c.nextReview <= now);
  }, [cards]);

  // Get topics with due counts
  const getTopicsWithDueCounts = useCallback(() => {
    const now = Date.now();
    const topicCounts: Record<string, { total: number; due: number }> = {};

    cards.forEach(card => {
      if (!topicCounts[card.topic]) {
        topicCounts[card.topic] = { total: 0, due: 0 };
      }
      topicCounts[card.topic].total++;
      if (card.nextReview <= now) {
        topicCounts[card.topic].due++;
      }
    });

    return topicCounts;
  }, [cards]);

  return {
    cards,
    currentCard,
    dueCount,
    answerCard,
    getCardsByTopic,
    getDueCards,
    getTopicsWithDueCounts,
    reload: loadCards,
  };
}
