import { useState, useMemo } from 'react';
import { ChevronLeft, Shuffle, Check, X, Lightbulb, ChevronDown } from 'lucide-react';
import { PracticeQuestion, ChapterId } from '../types';
import { allQuestions } from '../data';

interface Props {
  chapterIds: ChapterId[];
  onBack: () => void;
}

export default function QuizMode({ chapterIds, onBack }: Props) {
  const questions = useMemo(
    () => chapterIds.length > 0
      ? allQuestions.filter(q => chapterIds.includes(q.chapter))
      : allQuestions,
    [chapterIds]
  );

  const [current, setCurrent] = useState<PracticeQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [showKeyPoints, setShowKeyPoints] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const generate = () => {
    const q = questions[Math.floor(Math.random() * questions.length)];
    setCurrent(q);
    setSelectedOption(null);
    setRevealed(false);
    setShowKeyPoints(false);
    setShowModel(false);
  };

  const handleMCQ = (option: string) => {
    if (revealed) return;
    setSelectedOption(option);
    setRevealed(true);
    const correct = option === current?.correctOption;
    setScore(s => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
  };

  const optionClass = (label: string) => {
    if (!revealed) return 'bg-slate-700 hover:bg-slate-600 cursor-pointer border border-slate-600';
    if (label === current?.correctOption) return 'bg-green-700 border border-green-500';
    if (label === selectedOption && label !== current?.correctOption) return 'bg-red-700 border border-red-500';
    return 'bg-slate-700 border border-slate-600 opacity-60';
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white">
          <ChevronLeft size={20} /> Back
        </button>
        <div className="flex items-center gap-4">
          {score.total > 0 && (
            <span className="text-sm text-slate-400">
              Score: <strong className="text-white">{score.correct}/{score.total}</strong>
              <span className="text-slate-500 ml-1">({Math.round(100 * score.correct / score.total)}%)</span>
            </span>
          )}
          <button onClick={generate} className="btn-primary flex items-center gap-2">
            <Shuffle size={18} /> New Question
          </button>
        </div>
      </div>

      {!current ? (
        <div className="max-w-2xl mx-auto text-center">
          <div className="card">
            <h2 className="text-xl font-semibold mb-3">Practice Quiz</h2>
            <p className="text-slate-400 mb-6">
              Random HSC-style questions from {chapterIds.length > 0 ? `Chapter${chapterIds.length > 1 ? 's' : ''} ${chapterIds.join(', ')}` : 'all chapters'}.
              Includes multiple choice and short answer questions.
            </p>
            <button onClick={generate} className="btn-primary flex items-center gap-2 mx-auto">
              <Shuffle size={18} /> Start Quiz
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Question card */}
          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <span className={`badge-chapter`}>{current.chapter}</span>
              <span className="text-slate-400 text-sm">{current.topic}</span>
              <span className="ml-auto flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${current.type === 'mcq' ? 'bg-blue-600/20 text-blue-400' : 'bg-purple-600/20 text-purple-400'}`}>
                  {current.type === 'mcq' ? 'Multiple Choice' : `Short Answer`}
                </span>
                {current.marks && (
                  <span className="text-xs text-slate-500">{current.marks} mark{current.marks !== 1 ? 's' : ''}</span>
                )}
              </span>
            </div>

            <p className="text-lg font-medium mb-6 leading-relaxed">{current.question}</p>

            {/* MCQ options */}
            {current.type === 'mcq' && current.options && (
              <div className="space-y-2">
                {current.options.map(opt => (
                  <button
                    key={opt.label}
                    onClick={() => handleMCQ(opt.label)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${optionClass(opt.label)}`}
                  >
                    <span className="font-medium mr-3 text-slate-300">({opt.label})</span>
                    {opt.text}
                    {revealed && opt.label === current.correctOption && (
                      <Check size={16} className="inline ml-2 text-green-400" />
                    )}
                    {revealed && opt.label === selectedOption && opt.label !== current.correctOption && (
                      <X size={16} className="inline ml-2 text-red-400" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Short answer — key points and model answer */}
            {current.type === 'short' && (
              <div className="space-y-3">
                {/* Key points toggle */}
                <button
                  onClick={() => setShowKeyPoints(!showKeyPoints)}
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm"
                >
                  <Lightbulb size={16} />
                  {showKeyPoints ? 'Hide' : 'Show'} key points
                </button>
                {showKeyPoints && current.keyPoints && (
                  <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-4">
                    <p className="text-xs font-semibold text-yellow-400 mb-2 uppercase tracking-wide">Key Points to Include</p>
                    <ul className="space-y-1">
                      {current.keyPoints.map((kp, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-yellow-400 mt-0.5">•</span>
                          {kp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Model answer toggle */}
                <button
                  onClick={() => setShowModel(!showModel)}
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  <ChevronDown size={16} className={`transition-transform ${showModel ? 'rotate-180' : ''}`} />
                  {showModel ? 'Hide' : 'Show'} model answer
                </button>
                {showModel && current.modelAnswer && (
                  <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-xl p-4">
                    <p className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wide">Model Answer</p>
                    <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">{current.modelAnswer}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* MCQ result */}
          {current.type === 'mcq' && revealed && (
            <div className={`card border ${selectedOption === current.correctOption ? 'border-green-600/50 bg-green-900/10' : 'border-red-600/50 bg-red-900/10'}`}>
              <div className="flex items-center justify-between">
                <span className={`font-medium ${selectedOption === current.correctOption ? 'text-green-400' : 'text-red-400'}`}>
                  {selectedOption === current.correctOption ? '✓ Correct!' : '✗ Incorrect'}
                  {selectedOption !== current.correctOption && (
                    <span className="text-slate-400 ml-2 font-normal">
                      Answer: ({current.correctOption}) {current.options?.find(o => o.label === current.correctOption)?.text}
                    </span>
                  )}
                </span>
                <button onClick={generate} className="btn-primary text-sm py-2">
                  Next Question →
                </button>
              </div>
            </div>
          )}

          {/* Short answer next button */}
          {current.type === 'short' && (
            <div className="flex justify-end">
              <button onClick={generate} className="btn-primary flex items-center gap-2">
                <Shuffle size={18} /> Next Question
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
