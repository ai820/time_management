import { useState, useEffect } from 'react';
import { ChevronLeft, RotateCcw, Check, X, ChevronRight, List } from 'lucide-react';
import { ChapterId } from '../types';
import { useSpacedRepetition } from '../hooks/useSpacedRepetition';
import { getChapter } from '../data';

interface Props {
  chapterIds: ChapterId[];
  onBack: () => void;
}

export default function FlashcardDeck({ chapterIds, onBack }: Props) {
  const { currentCard, dueCount, answerCard, getTopicsWithDueCounts } = useSpacedRepetition(chapterIds);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const topicCounts = getTopicsWithDueCounts();

  useEffect(() => { setIsFlipped(false); }, [currentCard?.id]);

  const chapterInfo = currentCard ? getChapter(currentCard.chapter) : null;

  const handleAnswer = (quality: number) => {
    answerCard(quality);
    setIsFlipped(false);
  };

  if (!currentCard && dueCount === 0) {
    return (
      <div className="min-h-screen p-6">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-8">
          <ChevronLeft size={20} /> Back
        </button>
        <div className="max-w-2xl mx-auto text-center">
          <div className="card">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold mb-2">All caught up!</h2>
            <p className="text-slate-400 mb-6">
              You've reviewed all due cards. Come back later for more reviews.
            </p>
            <button onClick={onBack} className="btn-primary">Return Home</button>
          </div>
          {Object.entries(topicCounts).length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Cards by Topic</h3>
              <div className="grid gap-2">
                {Object.entries(topicCounts).map(([topic, counts]) => (
                  <div key={topic} className="bg-slate-800 rounded-lg p-3 flex justify-between">
                    <span className="text-sm">{topic}</span>
                    <span className="text-slate-400 text-sm">{counts.total} cards</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white">
          <ChevronLeft size={20} /> Back
        </button>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 text-sm">{dueCount} cards remaining</span>
          <button onClick={() => setShowTopics(!showTopics)} className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
            <List size={16} /> Topics
          </button>
        </div>
      </div>

      {/* Topic breakdown */}
      {showTopics && (
        <div className="max-w-2xl mx-auto mb-6 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <p className="text-xs text-slate-400 mb-2 font-semibold uppercase tracking-wide">Due by topic</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(topicCounts)
              .filter(([, c]) => c.due > 0)
              .map(([topic, c]) => (
                <span key={topic} className="px-2 py-1 bg-slate-700 rounded text-xs">
                  {topic}: <strong>{c.due}</strong>
                </span>
              ))}
          </div>
        </div>
      )}

      {/* Flashcard */}
      {currentCard && (
        <div className="max-w-2xl mx-auto">
          <div
            className={`flip-card cursor-pointer ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ minHeight: '320px' }}
          >
            <div className="flip-card-inner relative w-full" style={{ minHeight: '320px' }}>
              {/* Front */}
              <div className="flip-card-front absolute inset-0 card flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`badge-chapter ${chapterInfo ? chapterInfo.color.replace('bg-', 'bg-') + '/20 ' + chapterInfo.accent : ''}`}>
                    {currentCard.chapter}
                  </span>
                  <span className="text-slate-400 text-sm">{currentCard.topic}</span>
                  <span className="ml-auto text-slate-500 text-xs">
                    {'★'.repeat(currentCard.difficulty)}{'☆'.repeat(5 - currentCard.difficulty)}
                  </span>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-xl font-medium text-center leading-relaxed whitespace-pre-line">
                    {currentCard.front}
                  </p>
                </div>
                <p className="text-center text-slate-500 text-sm mt-4">Click to reveal answer</p>
              </div>

              {/* Back */}
              <div className="flip-card-back absolute inset-0 card flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge-chapter">{currentCard.chapter}</span>
                  <span className="text-slate-400 text-sm">{currentCard.topic}</span>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <p className="text-base leading-relaxed whitespace-pre-line text-slate-100">
                    {currentCard.back}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Answer quality buttons */}
          {isFlipped && (
            <div className="mt-6 flex justify-center gap-3">
              <button onClick={() => handleAnswer(1)} className="flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-medium transition-colors">
                <X size={18} /> Again
              </button>
              <button onClick={() => handleAnswer(3)} className="flex items-center gap-2 px-5 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-xl font-medium transition-colors">
                <RotateCcw size={18} /> Hard
              </button>
              <button onClick={() => handleAnswer(4)} className="flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-medium transition-colors">
                <Check size={18} /> Good
              </button>
              <button onClick={() => handleAnswer(5)} className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition-colors">
                <ChevronRight size={18} /> Easy
              </button>
            </div>
          )}

          <div className="mt-6 text-center text-slate-500 text-xs space-y-1">
            <p><strong>Again:</strong> Forgot — show tomorrow &nbsp;|&nbsp; <strong>Hard:</strong> Difficult — shorter interval</p>
            <p><strong>Good:</strong> Remembered — normal interval &nbsp;|&nbsp; <strong>Easy:</strong> Too easy — longer interval</p>
          </div>
        </div>
      )}
    </div>
  );
}
