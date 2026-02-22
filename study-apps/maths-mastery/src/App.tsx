import { useState, useEffect } from 'react';
import { BookOpen, PenTool, Clock, AlertCircle, BarChart3, Flame } from 'lucide-react';
import { View, Subject } from './types';
import { loadState, initializeData, getStreak } from './utils/storage';
import { allFormulas, allProblems } from './data';
import FlashcardDeck from './components/FlashcardDeck';
import ProblemGenerator from './components/ProblemGenerator';
import TimedPractice from './components/TimedPractice';
import ErrorLog from './components/ErrorLog';
import ProgressDashboard from './components/ProgressDashboard';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>(['advanced', 'ext1', 'ext2']);
  const [dueCount, setDueCount] = useState(0);
  const [streak, setStreak] = useState(0);

  // Initialize data on first load
  useEffect(() => {
    initializeData(allFormulas, allProblems);
    updateStats();
  }, []);

  // Update stats when returning home
  const updateStats = () => {
    const state = loadState();
    const now = Date.now();
    const due = state.flashcards.filter(c => c.nextReview <= now).length;
    setDueCount(due);
    setStreak(getStreak());
  };

  const handleBack = () => {
    updateStats();
    setView('home');
  };

  // Render current view
  if (view === 'flashcards') {
    return <FlashcardDeck subjects={selectedSubjects} onBack={handleBack} />;
  }

  if (view === 'practice') {
    return <ProblemGenerator onBack={handleBack} />;
  }

  if (view === 'timed') {
    return <TimedPractice onBack={handleBack} />;
  }

  if (view === 'errors') {
    return <ErrorLog onBack={handleBack} />;
  }

  if (view === 'progress') {
    return <ProgressDashboard onBack={handleBack} />;
  }

  // Home view
  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-1">Maths Mastery Hub</h1>
            <p className="text-slate-400">HSC Mathematics Study System</p>
          </div>

          {/* Subject toggles */}
          <div className="flex gap-2">
            {(['advanced', 'ext1', 'ext2'] as Subject[]).map(subject => (
              <button
                key={subject}
                onClick={() => {
                  if (selectedSubjects.includes(subject)) {
                    if (selectedSubjects.length > 1) {
                      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
                    }
                  } else {
                    setSelectedSubjects([...selectedSubjects, subject]);
                  }
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedSubjects.includes(subject)
                    ? subject === 'advanced' ? 'bg-blue-600 shadow-lg shadow-blue-600/30' :
                      subject === 'ext1' ? 'bg-purple-600 shadow-lg shadow-purple-600/30' :
                      'bg-orange-600 shadow-lg shadow-orange-600/30'
                    : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                }`}
              >
                {subject === 'advanced' ? 'Adv' : subject === 'ext1' ? 'E1' : 'E2'}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto">
        {/* Quick stats */}
        <div className="flex items-center gap-6 mb-8 text-sm">
          <div className="flex items-center gap-2">
            <Flame className="text-orange-400" size={20} />
            <span>
              <strong>{streak}</strong> day{streak !== 1 ? 's' : ''} streak
            </span>
          </div>
          {dueCount > 0 && (
            <div className="flex items-center gap-2 text-yellow-400">
              <AlertCircle size={20} />
              <span>
                <strong>{dueCount}</strong> cards due today
              </span>
            </div>
          )}
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Flashcards */}
          <button
            onClick={() => setView('flashcards')}
            className="card text-left hover:border-blue-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-600/30 transition-colors">
                <BookOpen className="text-blue-400" size={28} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Formula Cards</h2>
                <p className="text-sm text-slate-400">Spaced Repetition</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Master formulas with smart flashcards that adapt to your learning.
            </p>
            {dueCount > 0 ? (
              <div className="inline-block px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm">
                {dueCount} due
              </div>
            ) : (
              <div className="inline-block px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                All caught up!
              </div>
            )}
          </button>

          {/* Practice */}
          <button
            onClick={() => setView('practice')}
            className="card text-left hover:border-purple-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-purple-600/20 rounded-xl group-hover:bg-purple-600/30 transition-colors">
                <PenTool className="text-purple-400" size={28} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Practice</h2>
                <p className="text-sm text-slate-400">Problem Generator</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Random problems with step-by-step solutions and hints.
            </p>
            <div className="inline-block px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
              {allProblems.length} problems
            </div>
          </button>

          {/* Timed */}
          <button
            onClick={() => setView('timed')}
            className="card text-left hover:border-orange-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-orange-600/20 rounded-xl group-hover:bg-orange-600/30 transition-colors">
                <Clock className="text-orange-400" size={28} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Timed Mode</h2>
                <p className="text-sm text-slate-400">Exam Simulation</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Practice under exam conditions with time pressure.
            </p>
            <div className="inline-block px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
              15-60 min sessions
            </div>
          </button>

          {/* Errors */}
          <button
            onClick={() => setView('errors')}
            className="card text-left hover:border-red-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-red-600/20 rounded-xl group-hover:bg-red-600/30 transition-colors">
                <AlertCircle className="text-red-400" size={28} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Error Log</h2>
                <p className="text-sm text-slate-400">Track Mistakes</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Log and analyze your errors to target weak areas.
            </p>
            <div className="inline-block px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
              View patterns
            </div>
          </button>

          {/* Progress */}
          <button
            onClick={() => setView('progress')}
            className="card text-left hover:border-green-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-green-600/20 rounded-xl group-hover:bg-green-600/30 transition-colors">
                <BarChart3 className="text-green-400" size={28} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Progress</h2>
                <p className="text-sm text-slate-400">Analytics</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Track your learning progress and performance trends.
            </p>
            <div className="inline-block px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
              View stats
            </div>
          </button>
        </div>

        {/* Tips */}
        <div className="mt-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
          <h3 className="font-semibold mb-3">Study Tips for HSC Maths</h3>
          <ul className="text-sm text-slate-400 space-y-2">
            <li>• Review formula cards daily — even 10 minutes helps retention</li>
            <li>• Log every error and categorize it — patterns reveal what to focus on</li>
            <li>• Use timed mode weekly to build exam stamina</li>
            <li>• Focus on understanding <em>when</em> to use each formula, not just memorizing it</li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-slate-500">
          <p>HSC Mathematics: Advanced, Extension 1, Extension 2</p>
          <p className="mt-1">Data stored locally in your browser</p>
        </footer>
      </main>
    </div>
  );
}
