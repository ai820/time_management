import { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, Play, Pause, SkipForward, Clock, Check, X, AlertTriangle } from 'lucide-react';
import { Subject, Problem, TimedSession } from '../types';
import { allProblems } from '../data';
import { addSession, updateStreak, updateDailyStats, loadState } from '../utils/storage';
import katex from 'katex';

interface Props {
  onBack: () => void;
}

type SessionState = 'setup' | 'running' | 'paused' | 'finished';

function renderMath(content: string): string {
  return content.replace(/\$([^$]+)\$/g, (_, math) => {
    try {
      return katex.renderToString(math, { throwOnError: false });
    } catch {
      return math;
    }
  }).replace(/\\n/g, '<br/>');
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function TimedPractice({ onBack }: Props) {
  // Setup state
  const [duration, setDuration] = useState(15); // minutes
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>(['advanced']);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  // Session state
  const [sessionState, setSessionState] = useState<SessionState>('setup');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [sessionProblems, setSessionProblems] = useState<Problem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ problemId: string; correct: boolean | null; timeSpent: number; skipped: boolean }[]>([]);
  const [problemStartTime, setProblemStartTime] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  // Available topics
  const availableTopics = useMemo(() => {
    const topics = new Set<string>();
    allProblems
      .filter(p => selectedSubjects.includes(p.subject))
      .forEach(p => topics.add(p.topic));
    return [...topics].sort();
  }, [selectedSubjects]);

  // Timer effect
  useEffect(() => {
    if (sessionState !== 'running') return;

    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setSessionState('finished');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [sessionState]);

  // Start session
  const startSession = () => {
    // Filter and shuffle problems
    let problems = allProblems.filter(p => {
      if (!selectedSubjects.includes(p.subject)) return false;
      if (selectedTopics.length > 0 && !selectedTopics.includes(p.topic)) return false;
      return true;
    });

    // Shuffle
    problems = problems.sort(() => Math.random() - 0.5);

    // Take a reasonable number
    const numProblems = Math.min(problems.length, Math.ceil(duration / 3));
    problems = problems.slice(0, numProblems);

    setSessionProblems(problems);
    setCurrentIndex(0);
    setAnswers([]);
    setTimeRemaining(duration * 60);
    setProblemStartTime(Date.now());
    setShowSolution(false);
    setSessionState('running');
    updateStreak();
  };

  // Handle answer
  const handleAnswer = (correct: boolean) => {
    const timeSpent = Math.floor((Date.now() - problemStartTime) / 1000);
    const currentProblem = sessionProblems[currentIndex];

    setAnswers(prev => [
      ...prev,
      { problemId: currentProblem.id, correct, timeSpent, skipped: false }
    ]);

    moveToNext();
  };

  // Skip problem
  const handleSkip = () => {
    const timeSpent = Math.floor((Date.now() - problemStartTime) / 1000);
    const currentProblem = sessionProblems[currentIndex];

    setAnswers(prev => [
      ...prev,
      { problemId: currentProblem.id, correct: null, timeSpent, skipped: true }
    ]);

    moveToNext();
  };

  // Move to next problem
  const moveToNext = () => {
    if (currentIndex >= sessionProblems.length - 1) {
      setSessionState('finished');
    } else {
      setCurrentIndex(prev => prev + 1);
      setProblemStartTime(Date.now());
      setShowSolution(false);
    }
  };

  // Save session results
  useEffect(() => {
    if (sessionState !== 'finished') return;

    const session: TimedSession = {
      id: `session-${Date.now()}`,
      date: Date.now(),
      duration,
      topics: selectedTopics.length > 0 ? selectedTopics : availableTopics,
      subjects: selectedSubjects,
      problems: answers,
      completed: true,
    };

    addSession(session);

    // Update daily stats
    const state = loadState();
    const todayStats = state.dailyStats.find(
      s => s.date === new Date().toISOString().split('T')[0]
    );

    const correctCount = answers.filter(a => a.correct === true).length;
    updateDailyStats({
      problemsSolved: (todayStats?.problemsSolved || 0) + answers.length,
      correctAnswers: (todayStats?.correctAnswers || 0) + correctCount,
      timeStudied: (todayStats?.timeStudied || 0) + duration,
    });
  }, [sessionState]);

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

  const currentProblem = sessionProblems[currentIndex];

  // Setup screen
  if (sessionState === 'setup') {
    return (
      <div className="min-h-screen p-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-8"
        >
          <ChevronLeft size={20} />
          Back
        </button>

        <div className="max-w-2xl mx-auto">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock size={28} />
              Timed Practice
            </h2>

            {/* Duration */}
            <div className="mb-6">
              <label className="text-sm text-slate-400 block mb-2">Duration</label>
              <div className="flex gap-2">
                {[15, 30, 45, 60].map(mins => (
                  <button
                    key={mins}
                    onClick={() => setDuration(mins)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      duration === mins ? 'bg-blue-600' : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                    }`}
                  >
                    {mins} min
                  </button>
                ))}
              </div>
            </div>

            {/* Subjects */}
            <div className="mb-6">
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

            {/* Topics */}
            <div className="mb-6">
              <label className="text-sm text-slate-400 block mb-2">
                Topics (leave empty for all)
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
              </div>
            </div>

            <button
              onClick={startSession}
              className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2"
            >
              <Play size={24} />
              Start Practice
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Finished screen
  if (sessionState === 'finished') {
    const correctCount = answers.filter(a => a.correct === true).length;
    const incorrectCount = answers.filter(a => a.correct === false).length;
    const skippedCount = answers.filter(a => a.skipped).length;
    const totalTime = answers.reduce((sum, a) => sum + a.timeSpent, 0);
    const avgTime = answers.length > 0 ? Math.round(totalTime / answers.length) : 0;

    return (
      <div className="min-h-screen p-6">
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <h2 className="text-2xl font-bold mb-2">Session Complete!</h2>
            <p className="text-slate-400 mb-6">{duration} minute practice session</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-green-900/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400">{correctCount}</div>
                <div className="text-sm text-slate-400">Correct</div>
              </div>
              <div className="bg-red-900/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-400">{incorrectCount}</div>
                <div className="text-sm text-slate-400">Incorrect</div>
              </div>
              <div className="bg-yellow-900/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">{skippedCount}</div>
                <div className="text-sm text-slate-400">Skipped</div>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-bold mb-2">
                {answers.length > 0 ? Math.round((correctCount / answers.length) * 100) : 0}%
              </div>
              <div className="text-slate-400">Accuracy</div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4 mb-8">
              <div className="text-lg font-semibold">{formatTime(avgTime)}</div>
              <div className="text-sm text-slate-400">Average time per problem</div>
            </div>

            <div className="flex gap-4 justify-center">
              <button onClick={onBack} className="btn-secondary">
                Return Home
              </button>
              <button
                onClick={() => setSessionState('setup')}
                className="btn-primary"
              >
                New Session
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Running/Paused screen
  return (
    <div className="min-h-screen p-6">
      {/* Timer header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              if (confirm('End session early? Your progress will be saved.')) {
                setSessionState('finished');
              }
            }}
            className="text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>

          <div className={`text-3xl font-mono font-bold ${
            timeRemaining < 60 ? 'text-red-400' : timeRemaining < 300 ? 'text-yellow-400' : 'text-white'
          }`}>
            {formatTime(timeRemaining)}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-400">
            {currentIndex + 1} / {sessionProblems.length}
          </span>

          <button
            onClick={() => setSessionState(sessionState === 'running' ? 'paused' : 'running')}
            className="btn-secondary"
          >
            {sessionState === 'running' ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
      </div>

      {/* Pause overlay */}
      {sessionState === 'paused' && (
        <div className="fixed inset-0 bg-slate-900/90 flex items-center justify-center z-50">
          <div className="text-center">
            <Pause size={64} className="mx-auto mb-4 text-slate-400" />
            <h2 className="text-2xl font-bold mb-4">Paused</h2>
            <button
              onClick={() => setSessionState('running')}
              className="btn-primary"
            >
              <Play size={20} className="inline mr-2" />
              Resume
            </button>
          </div>
        </div>
      )}

      {/* Problem */}
      {currentProblem && (
        <div className="max-w-3xl mx-auto">
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
                {'★'.repeat(currentProblem.difficulty)}
              </span>
            </div>

            {/* Question */}
            <div
              className="text-lg mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderMath(currentProblem.question) }}
            />

            {/* Solution */}
            {showSolution && (
              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-semibold mb-3">Solution</h3>
                <div className="space-y-2 mb-4">
                  {currentProblem.solution.steps.map((step, i) => (
                    <div
                      key={i}
                      className="bg-slate-700/50 rounded-lg p-3"
                      dangerouslySetInnerHTML={{ __html: renderMath(`${i + 1}. ${step}`) }}
                    />
                  ))}
                </div>
                <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4">
                  <span className="text-green-400 font-medium">Answer:</span>
                  <div
                    className="mt-1"
                    dangerouslySetInnerHTML={{ __html: renderMath(currentProblem.solution.finalAnswer) }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleSkip}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg"
            >
              <SkipForward size={20} />
              Skip
            </button>

            {!showSolution ? (
              <button
                onClick={() => setShowSolution(true)}
                className="btn-secondary px-6 py-3"
              >
                Show Solution
              </button>
            ) : (
              <>
                <button
                  onClick={() => handleAnswer(false)}
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg"
                >
                  <X size={20} />
                  Incorrect
                </button>
                <button
                  onClick={() => handleAnswer(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg"
                >
                  <Check size={20} />
                  Correct
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
