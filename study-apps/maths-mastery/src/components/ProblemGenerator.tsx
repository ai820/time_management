import { useState, useMemo } from 'react';
import { ChevronLeft, Lightbulb, Eye, Check, X, Filter, Shuffle } from 'lucide-react';
import { Subject, Problem, ErrorType } from '../types';
import { allProblems } from '../data';
import { addError, updateDailyStats, updateStreak, loadState } from '../utils/storage';
import katex from 'katex';

interface Props {
  onBack: () => void;
  onLogError?: (problem: Problem) => void;
}

function renderMath(content: string): string {
  return content.replace(/\$([^$]+)\$/g, (_, math) => {
    try {
      return katex.renderToString(math, { throwOnError: false });
    } catch {
      return math;
    }
  }).replace(/\\n/g, '<br/>');
}

export default function ProblemGenerator({ onBack, onLogError }: Props) {
  // Filters
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>(['advanced', 'ext1', 'ext2']);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [difficultyRange, setDifficultyRange] = useState<[number, number]>([1, 5]);
  const [showFilters, setShowFilters] = useState(false);

  // Problem state
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [stepsRevealed, setStepsRevealed] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  // Get available topics
  const availableTopics = useMemo(() => {
    const topics = new Set<string>();
    allProblems
      .filter(p => selectedSubjects.includes(p.subject))
      .forEach(p => topics.add(p.topic));
    return [...topics].sort();
  }, [selectedSubjects]);

  // Filter problems
  const filteredProblems = useMemo(() => {
    return allProblems.filter(p => {
      if (!selectedSubjects.includes(p.subject)) return false;
      if (selectedTopics.length > 0 && !selectedTopics.includes(p.topic)) return false;
      if (p.difficulty < difficultyRange[0] || p.difficulty > difficultyRange[1]) return false;
      return true;
    });
  }, [selectedSubjects, selectedTopics, difficultyRange]);

  // Generate new problem
  const generateProblem = () => {
    if (filteredProblems.length === 0) return;

    const randomIndex = Math.floor(Math.random() * filteredProblems.length);
    setCurrentProblem(filteredProblems[randomIndex]);
    setHintsRevealed(0);
    setStepsRevealed(0);
    setShowAnswer(false);
    setIsAnswered(false);
  };

  // Handle answer
  const handleAnswer = (correct: boolean) => {
    setIsAnswered(true);
    updateStreak();

    const state = loadState();
    const todayStats = state.dailyStats.find(
      s => s.date === new Date().toISOString().split('T')[0]
    );

    updateDailyStats({
      problemsSolved: (todayStats?.problemsSolved || 0) + 1,
      correctAnswers: correct
        ? (todayStats?.correctAnswers || 0) + 1
        : (todayStats?.correctAnswers || 0),
    });
  };

  // Log error
  const handleLogError = (errorType: ErrorType) => {
    if (!currentProblem) return;

    addError({
      id: `error-${Date.now()}`,
      date: Date.now(),
      problemId: currentProblem.id,
      problemQuestion: currentProblem.question,
      errorType,
      notes: '',
      relatedFormulas: currentProblem.relatedFormulas,
      topic: currentProblem.topic,
    });
  };

  const toggleSubject = (subject: Subject) => {
    if (selectedSubjects.includes(subject)) {
      if (selectedSubjects.length > 1) {
        setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
      }
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

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

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 btn-secondary"
          >
            <Filter size={18} />
            Filters
          </button>
          <button
            onClick={generateProblem}
            className="flex items-center gap-2 btn-primary"
          >
            <Shuffle size={18} />
            New Problem
          </button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="max-w-4xl mx-auto mb-6 card">
          <h3 className="font-semibold mb-4">Filter Problems</h3>

          {/* Subject toggles */}
          <div className="mb-4">
            <label className="text-sm text-slate-400 block mb-2">Subjects</label>
            <div className="flex gap-2">
              {(['advanced', 'ext1', 'ext2'] as Subject[]).map(subject => (
                <button
                  key={subject}
                  onClick={() => toggleSubject(subject)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedSubjects.includes(subject)
                      ? subject === 'advanced' ? 'bg-blue-600' :
                        subject === 'ext1' ? 'bg-purple-600' : 'bg-orange-600'
                      : 'bg-slate-700 text-slate-400'
                  }`}
                >
                  {subject === 'advanced' ? 'Advanced' : subject === 'ext1' ? 'Ext 1' : 'Ext 2'}
                </button>
              ))}
            </div>
          </div>

          {/* Topic toggles */}
          <div className="mb-4">
            <label className="text-sm text-slate-400 block mb-2">
              Topics {selectedTopics.length > 0 && `(${selectedTopics.length} selected)`}
            </label>
            <div className="flex flex-wrap gap-2">
              {availableTopics.map(topic => (
                <button
                  key={topic}
                  onClick={() => toggleTopic(topic)}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    selectedTopics.includes(topic)
                      ? 'bg-blue-600'
                      : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                  }`}
                >
                  {topic}
                </button>
              ))}
              {selectedTopics.length > 0 && (
                <button
                  onClick={() => setSelectedTopics([])}
                  className="px-3 py-1 text-sm text-red-400 hover:text-red-300"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          {/* Difficulty slider */}
          <div>
            <label className="text-sm text-slate-400 block mb-2">
              Difficulty: {difficultyRange[0]} - {difficultyRange[1]}
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="5"
                value={difficultyRange[0]}
                onChange={(e) => setDifficultyRange([parseInt(e.target.value), Math.max(parseInt(e.target.value), difficultyRange[1])])}
                className="flex-1"
              />
              <span className="text-slate-400">to</span>
              <input
                type="range"
                min="1"
                max="5"
                value={difficultyRange[1]}
                onChange={(e) => setDifficultyRange([Math.min(difficultyRange[0], parseInt(e.target.value)), parseInt(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-4">
            {filteredProblems.length} problems available
          </p>
        </div>
      )}

      {/* Problem display */}
      {!currentProblem ? (
        <div className="max-w-2xl mx-auto text-center">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Practice Problems</h2>
            <p className="text-slate-400 mb-6">
              Click "New Problem" to get a random practice problem based on your filters.
            </p>
            <button onClick={generateProblem} className="btn-primary">
              <Shuffle size={18} className="inline mr-2" />
              Generate Problem
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          {/* Problem card */}
          <div className="card mb-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                currentProblem.subject === 'advanced' ? 'badge-advanced' :
                currentProblem.subject === 'ext1' ? 'badge-ext1' : 'badge-ext2'
              }`}>
                {currentProblem.subject === 'advanced' ? 'Advanced' :
                 currentProblem.subject === 'ext1' ? 'Ext 1' : 'Ext 2'}
              </span>
              <span className="text-slate-400 text-sm">{currentProblem.topic}</span>
              <span className="ml-auto text-slate-500 text-sm">
                Difficulty: {'★'.repeat(currentProblem.difficulty)}{'☆'.repeat(5 - currentProblem.difficulty)}
              </span>
            </div>

            {/* Question */}
            <div
              className="text-lg mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderMath(currentProblem.question) }}
            />

            {/* Hints */}
            {currentProblem.hints.length > 0 && (
              <div className="mb-6">
                <button
                  onClick={() => setHintsRevealed(Math.min(hintsRevealed + 1, currentProblem.hints.length))}
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm"
                  disabled={hintsRevealed >= currentProblem.hints.length}
                >
                  <Lightbulb size={16} />
                  {hintsRevealed < currentProblem.hints.length
                    ? `Show hint (${hintsRevealed}/${currentProblem.hints.length})`
                    : 'All hints shown'}
                </button>
                {hintsRevealed > 0 && (
                  <div className="mt-3 space-y-2">
                    {currentProblem.hints.slice(0, hintsRevealed).map((hint, i) => (
                      <div key={i} className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-3 text-sm">
                        <span className="text-yellow-400 font-medium">Hint {i + 1}:</span>{' '}
                        <span dangerouslySetInnerHTML={{ __html: renderMath(hint) }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Solution steps */}
            {!showAnswer ? (
              <button
                onClick={() => setShowAnswer(true)}
                className="flex items-center gap-2 btn-secondary"
              >
                <Eye size={18} />
                Show Solution
              </button>
            ) : (
              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-semibold mb-3">Solution</h3>

                {/* Step by step reveal */}
                <div className="space-y-2 mb-4">
                  {currentProblem.solution.steps.slice(0, stepsRevealed).map((step, i) => (
                    <div
                      key={i}
                      className="bg-slate-700/50 rounded-lg p-3"
                      dangerouslySetInnerHTML={{ __html: renderMath(`${i + 1}. ${step}`) }}
                    />
                  ))}
                </div>

                {stepsRevealed < currentProblem.solution.steps.length ? (
                  <button
                    onClick={() => setStepsRevealed(stepsRevealed + 1)}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Show next step ({stepsRevealed}/{currentProblem.solution.steps.length})
                  </button>
                ) : (
                  <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4 mt-4">
                    <span className="text-green-400 font-medium">Final Answer:</span>
                    <div
                      className="text-lg mt-1"
                      dangerouslySetInnerHTML={{ __html: renderMath(currentProblem.solution.finalAnswer) }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Answer buttons */}
          {showAnswer && stepsRevealed >= currentProblem.solution.steps.length && !isAnswered && (
            <div className="card">
              <p className="text-center mb-4">Did you get it right?</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleAnswer(false)}
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium"
                >
                  <X size={20} />
                  Incorrect
                </button>
                <button
                  onClick={() => handleAnswer(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium"
                >
                  <Check size={20} />
                  Correct
                </button>
              </div>
            </div>
          )}

          {/* Error logging */}
          {isAnswered && (
            <div className="card">
              <p className="text-center mb-4">What type of error was it? (optional)</p>
              <div className="flex justify-center gap-2 flex-wrap mb-4">
                {[
                  { type: 'silly' as ErrorType, label: 'Silly Mistake', color: 'bg-yellow-600' },
                  { type: 'conceptual' as ErrorType, label: 'Conceptual Gap', color: 'bg-red-600' },
                  { type: 'method' as ErrorType, label: 'Wrong Method', color: 'bg-purple-600' },
                  { type: 'time' as ErrorType, label: 'Time Pressure', color: 'bg-orange-600' },
                ].map(({ type, label, color }) => (
                  <button
                    key={type}
                    onClick={() => handleLogError(type)}
                    className={`px-4 py-2 ${color} hover:opacity-80 rounded-lg text-sm`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={generateProblem}
                  className="btn-primary"
                >
                  <Shuffle size={18} className="inline mr-2" />
                  Next Problem
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
