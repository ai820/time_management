// file: src/components/FlashcardDeck.tsx
import { useState, useEffect } from 'react';
import { ChevronLeft, RotateCcw, Check, X, ChevronRight, List, ChevronDown } from 'lucide-react';
import { ChapterId } from '../types';
import { useSpacedRepetition } from '../hooks/useSpacedRepetition';

interface Props {
  chapterIds: ChapterId[];
  onBack: () => void;
}

// Renders **bold** and • bullet lines from a plain string
function RichText({ text }: { text: string }) {
  const lines = text.split('\n');
  const elements: JSX.Element[] = [];
  let bulletBuffer: string[] = [];

  const renderLine = (line: string, key: number) => {
    // Parse **bold** spans
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={key}>
        {parts.map((p, i) =>
          p.startsWith('**') && p.endsWith('**')
            ? <strong key={i} className="font-semibold text-blue-700">{p.slice(2, -2)}</strong>
            : <span key={i}>{p}</span>
        )}
      </span>
    );
  };

  const flushBullets = (idx: number) => {
    if (bulletBuffer.length === 0) return;
    elements.push(
      <ul key={`ul-${idx}`} className="space-y-2 my-1">
        {bulletBuffer.map((b, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="text-blue-500 font-bold mt-0.5 shrink-0 text-base leading-snug">•</span>
            <span className="text-gray-700 leading-snug">{renderLine(b, i)}</span>
          </li>
        ))}
      </ul>
    );
    bulletBuffer = [];
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushBullets(idx);
      return;
    }
    if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
      bulletBuffer.push(trimmed.slice(2));
    } else {
      flushBullets(idx);
      elements.push(
        <p key={idx} className="text-gray-700 leading-snug">{renderLine(trimmed, idx)}</p>
      );
    }
  });
  flushBullets(lines.length);

  return <div className="space-y-1.5">{elements}</div>;
}

export default function FlashcardDeck({ chapterIds, onBack }: Props) {
  const { currentCard, dueCount, answerCard, getTopicsWithDueCounts } = useSpacedRepetition(chapterIds);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const topicCounts = getTopicsWithDueCounts();

  useEffect(() => {
    setIsFlipped(false);
    setShowDetail(false);
  }, [currentCard?.id]);

  const handleAnswer = (quality: number) => {
    answerCard(quality);
    setIsFlipped(false);
  };

  const difficultyDots = (d: number) => (
    <span className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={`w-1.5 h-1.5 rounded-full ${i <= d ? 'bg-blue-500' : 'bg-gray-200'}`} />
      ))}
    </span>
  );

  if (!currentCard && dueCount === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ChevronLeft size={20} /> Back
        </button>
        <div className="max-w-2xl mx-auto text-center">
          <div className="card">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">All caught up!</h2>
            <p className="text-gray-500 mb-6">You've reviewed all due cards. Come back later for more reviews.</p>
            <button onClick={onBack} className="btn-primary">Return Home</button>
          </div>
          {Object.entries(topicCounts).length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Cards by Topic</h3>
              <div className="grid gap-2">
                {Object.entries(topicCounts).map(([topic, counts]) => (
                  <div key={topic} className="bg-white border border-gray-200 rounded-lg p-3 flex justify-between shadow-sm">
                    <span className="text-sm text-gray-700">{topic}</span>
                    <span className="text-gray-400 text-sm">{counts.total} cards</span>
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
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
          <ChevronLeft size={20} /> Back
        </button>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">{dueCount} cards remaining</span>
          <button onClick={() => setShowTopics(!showTopics)} className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors">
            <List size={16} /> Topics
          </button>
        </div>
      </div>

      {/* Topic breakdown */}
      {showTopics && (
        <div className="max-w-2xl mx-auto mb-5 bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wide">Due by topic</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(topicCounts)
              .filter(([, c]) => c.due > 0)
              .map(([topic, c]) => (
                <span key={topic} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                  {topic}: <strong className="text-blue-700">{c.due}</strong>
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
            onClick={() => !isFlipped && setIsFlipped(true)}
            style={{ minHeight: '340px' }}
          >
            <div className="flip-card-inner relative w-full" style={{ minHeight: '340px' }}>
              {/* Front */}
              <div className="flip-card-front absolute inset-0 card flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge-chapter">{currentCard.chapter}</span>
                  <span className="text-gray-400 text-sm">{currentCard.topic}</span>
                  <span className="ml-auto">{difficultyDots(currentCard.difficulty)}</span>
                </div>
                <div className="flex-1 flex items-center justify-center px-2">
                  <p className="text-xl font-semibold text-center text-gray-900 leading-relaxed">
                    {currentCard.front}
                  </p>
                </div>
                <p className="text-center text-gray-400 text-sm mt-4">Tap to reveal answer</p>
              </div>

              {/* Back — stop click propagation so clicking inside doesn't re-flip */}
              <div
                className="flip-card-back absolute inset-0 card flex flex-col"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge-chapter">{currentCard.chapter}</span>
                  <span className="text-gray-400 text-sm">{currentCard.topic}</span>
                  <button
                    onClick={() => setIsFlipped(false)}
                    className="ml-auto text-xs text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ← flip back
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <RichText text={currentCard.back} />

                  {/* Expandable full explanation */}
                  {(currentCard as any).detail && (
                    <div className="mt-4 border-t border-gray-100 pt-3">
                      <button
                        onClick={() => setShowDetail(!showDetail)}
                        className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                      >
                        <ChevronDown size={15} className={`transition-transform ${showDetail ? 'rotate-180' : ''}`} />
                        {showDetail ? 'Hide' : 'Show'} full explanation
                      </button>
                      {showDetail && (
                        <div className="mt-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
                          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                            {(currentCard as any).detail}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Answer quality buttons */}
          {isFlipped && (
            <div className="mt-5 flex justify-center gap-3">
              <button onClick={() => handleAnswer(1)} className="flex items-center gap-2 px-5 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors shadow-sm">
                <X size={17} /> Again
              </button>
              <button onClick={() => handleAnswer(3)} className="flex items-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium transition-colors shadow-sm">
                <RotateCcw size={17} /> Hard
              </button>
              <button onClick={() => handleAnswer(4)} className="flex items-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-colors shadow-sm">
                <Check size={17} /> Good
              </button>
              <button onClick={() => handleAnswer(5)} className="flex items-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors shadow-sm">
                <ChevronRight size={17} /> Easy
              </button>
            </div>
          )}

          <div className="mt-4 text-center text-gray-400 text-xs space-y-0.5">
            <p><strong className="text-gray-500">Again</strong> — forgot &nbsp;·&nbsp; <strong className="text-gray-500">Hard</strong> — struggled &nbsp;·&nbsp; <strong className="text-gray-500">Good</strong> — remembered &nbsp;·&nbsp; <strong className="text-gray-500">Easy</strong> — too easy</p>
          </div>
        </div>
      )}
    </div>
  );
}
