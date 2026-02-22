import { useMemo } from 'react';
import { ChevronLeft, TrendingUp, Calendar, Target, Clock, CheckCircle, XCircle } from 'lucide-react';
import { loadState, getStreak } from '../utils/storage';
import { allFormulas } from '../data';

interface Props {
  onBack: () => void;
}

export default function ProgressDashboard({ onBack }: Props) {
  const state = loadState();
  const streak = getStreak();

  // Calculate stats
  const stats = useMemo(() => {
    const now = Date.now();
    const today = new Date().toISOString().split('T')[0];
    const last7Days = state.dailyStats.filter(s => {
      const diff = (new Date(today).getTime() - new Date(s.date).getTime()) / (1000 * 60 * 60 * 24);
      return diff < 7;
    });

    // Card stats
    const totalCards = state.flashcards.length || allFormulas.length;
    const dueCards = state.flashcards.filter(c => c.nextReview <= now).length;
    const masteredCards = state.flashcards.filter(c => c.correctStreak >= 5).length;

    // Weekly stats
    const weeklyCardsReviewed = last7Days.reduce((sum, s) => sum + s.cardsReviewed, 0);
    const weeklyProblemsSolved = last7Days.reduce((sum, s) => sum + s.problemsSolved, 0);
    const weeklyCorrect = last7Days.reduce((sum, s) => sum + s.correctAnswers, 0);
    const weeklyTimeStudied = last7Days.reduce((sum, s) => sum + s.timeStudied, 0);

    // Accuracy
    const totalAttempts = weeklyCardsReviewed + weeklyProblemsSolved;
    const accuracy = totalAttempts > 0 ? Math.round((weeklyCorrect / totalAttempts) * 100) : 0;

    // Today's stats
    const todayStats = state.dailyStats.find(s => s.date === today);

    return {
      totalCards,
      dueCards,
      masteredCards,
      weeklyCardsReviewed,
      weeklyProblemsSolved,
      weeklyCorrect,
      weeklyTimeStudied,
      accuracy,
      todayStats,
      last7Days,
    };
  }, [state]);

  // Card mastery by subject
  const masteryBySubject = useMemo(() => {
    const subjects = ['advanced', 'ext1', 'ext2'] as const;
    return subjects.map(subject => {
      const cards = state.flashcards.filter(c => c.subject === subject);
      const total = cards.length || allFormulas.filter(f => f.subject === subject).length;
      const mastered = cards.filter(c => c.correctStreak >= 5).length;
      const learning = cards.filter(c => c.correctStreak > 0 && c.correctStreak < 5).length;

      return {
        subject,
        total,
        mastered,
        learning,
        new: total - mastered - learning,
      };
    });
  }, [state.flashcards]);

  // Topic breakdown
  const topicStats = useMemo(() => {
    const topics: Record<string, { total: number; mastered: number; due: number }> = {};
    const now = Date.now();

    state.flashcards.forEach(card => {
      if (!topics[card.topic]) {
        topics[card.topic] = { total: 0, mastered: 0, due: 0 };
      }
      topics[card.topic].total++;
      if (card.correctStreak >= 5) topics[card.topic].mastered++;
      if (card.nextReview <= now) topics[card.topic].due++;
    });

    return Object.entries(topics)
      .sort((a, b) => b[1].due - a[1].due)
      .slice(0, 8);
  }, [state.flashcards]);

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white"
        >
          <ChevronLeft size={20} />
          Back
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Progress Dashboard</h1>

        {/* Top stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="card text-center">
            <div className="text-4xl mb-2">🔥</div>
            <div className="text-3xl font-bold">{streak}</div>
            <div className="text-sm text-slate-400">Day Streak</div>
          </div>

          <div className="card text-center">
            <Target className="mx-auto mb-2 text-blue-400" size={32} />
            <div className="text-3xl font-bold">{stats.dueCards}</div>
            <div className="text-sm text-slate-400">Cards Due</div>
          </div>

          <div className="card text-center">
            <CheckCircle className="mx-auto mb-2 text-green-400" size={32} />
            <div className="text-3xl font-bold">{stats.masteredCards}</div>
            <div className="text-sm text-slate-400">Mastered</div>
          </div>

          <div className="card text-center">
            <TrendingUp className="mx-auto mb-2 text-purple-400" size={32} />
            <div className="text-3xl font-bold">{stats.accuracy}%</div>
            <div className="text-sm text-slate-400">This Week</div>
          </div>
        </div>

        {/* Weekly activity */}
        <div className="card mb-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Calendar size={20} />
            This Week
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-2xl font-bold">{stats.weeklyCardsReviewed}</div>
              <div className="text-sm text-slate-400">Cards Reviewed</div>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-2xl font-bold">{stats.weeklyProblemsSolved}</div>
              <div className="text-sm text-slate-400">Problems Solved</div>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-2xl font-bold">{stats.weeklyCorrect}</div>
              <div className="text-sm text-slate-400">Correct Answers</div>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-2xl font-bold">{stats.weeklyTimeStudied}m</div>
              <div className="text-sm text-slate-400">Time Studied</div>
            </div>
          </div>

          {/* Activity graph */}
          <div className="mt-6">
            <div className="flex items-end justify-between h-24 gap-1">
              {Array.from({ length: 7 }).map((_, i) => {
                const date = new Date();
                date.setDate(date.getDate() - (6 - i));
                const dateStr = date.toISOString().split('T')[0];
                const dayStats = stats.last7Days.find(s => s.date === dateStr);
                const activity = dayStats ? dayStats.cardsReviewed + dayStats.problemsSolved : 0;
                const maxActivity = Math.max(...stats.last7Days.map(s => s.cardsReviewed + s.problemsSolved), 1);
                const height = activity > 0 ? Math.max(20, (activity / maxActivity) * 100) : 4;

                return (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div
                      className={`w-full rounded-t ${activity > 0 ? 'bg-blue-600' : 'bg-slate-700'}`}
                      style={{ height: `${height}%` }}
                    />
                    <div className="text-xs text-slate-500 mt-1">
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][date.getDay()]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Subject breakdown */}
        <div className="card mb-8">
          <h3 className="font-semibold mb-4">Card Mastery by Subject</h3>

          <div className="space-y-4">
            {masteryBySubject.map(({ subject, total, mastered, learning }) => (
              <div key={subject}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    subject === 'advanced' ? 'badge-advanced' :
                    subject === 'ext1' ? 'badge-ext1' : 'badge-ext2'
                  }`}>
                    {subject === 'advanced' ? 'Advanced' : subject === 'ext1' ? 'Ext 1' : 'Ext 2'}
                  </span>
                  <span className="text-sm text-slate-400">
                    {mastered}/{total} mastered
                  </span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden flex">
                  <div
                    className="bg-green-600 transition-all"
                    style={{ width: `${total > 0 ? (mastered / total) * 100 : 0}%` }}
                  />
                  <div
                    className="bg-yellow-600 transition-all"
                    style={{ width: `${total > 0 ? (learning / total) * 100 : 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-600 rounded" />
              <span className="text-slate-400">Mastered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-600 rounded" />
              <span className="text-slate-400">Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-slate-700 rounded" />
              <span className="text-slate-400">New</span>
            </div>
          </div>
        </div>

        {/* Topics needing attention */}
        {topicStats.length > 0 && (
          <div className="card">
            <h3 className="font-semibold mb-4">Topics Overview</h3>

            <div className="space-y-3">
              {topicStats.map(([topic, data]) => (
                <div key={topic} className="flex items-center justify-between">
                  <span>{topic}</span>
                  <div className="flex items-center gap-4 text-sm">
                    {data.due > 0 && (
                      <span className="text-yellow-400">{data.due} due</span>
                    )}
                    <span className="text-slate-400">
                      {data.mastered}/{data.total} mastered
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Today's summary */}
        {stats.todayStats && (
          <div className="card mt-8 bg-blue-900/20 border-blue-800/30">
            <h3 className="font-semibold mb-3 text-blue-400">Today's Summary</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">{stats.todayStats.cardsReviewed}</div>
                <div className="text-sm text-slate-400">Cards</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.todayStats.problemsSolved}</div>
                <div className="text-sm text-slate-400">Problems</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.todayStats.timeStudied}m</div>
                <div className="text-sm text-slate-400">Time</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
