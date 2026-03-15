import { useState, useEffect } from 'react';
import { BookOpen, HelpCircle, Flame, AlertCircle, TrendingUp, ChevronRight, Briefcase, BarChart2, Settings2 } from 'lucide-react';
import { View, ChapterId } from './types';
import { chapters, allFlashcards, allQuestions } from './data';
import { loadState, initializeCards, getStreak } from './utils/storage';
import FlashcardDeck from './components/FlashcardDeck';
import QuizMode from './components/QuizMode';
import ChapterView from './components/ChapterView';

const SECTIONS = [
  {
    label: 'Role of Financial Management',
    description: 'Chapter 9 — strategic role, objectives & interdependence',
    icon: Briefcase,
    color: 'blue',
    ids: ['9.2', '9.3', '9.4'] as ChapterId[],
  },
  {
    label: 'Influences on Financial Management',
    description: 'Chapter 10 — sources of finance, institutions & market factors',
    icon: BarChart2,
    color: 'orange',
    ids: ['10.2', '10.3', '10.4', '10.5'] as ChapterId[],
  },
  {
    label: 'Processes of Financial Management',
    description: 'Chapter 11 — planning, ratios, reporting & ethics',
    icon: Settings2,
    color: 'violet',
    ids: ['11.2', '11.3', '11.4', '11.5', '11.6', '11.7', '11.8'] as ChapterId[],
  },
];

export default function App() {
  const [view, setView] = useState<View>('home');
  const [activeChapterIds, setActiveChapterIds] = useState<ChapterId[]>([]);
  const [activeChapterId, setActiveChapterId] = useState<ChapterId | null>(null);
  const [streak, setStreak] = useState(0);
  const [totalDue, setTotalDue] = useState(0);

  useEffect(() => {
    initializeCards(allFlashcards);
    refresh();
  }, []);

  const refresh = () => {
    setStreak(getStreak());
    const state = loadState();
    const now = Date.now();
    setTotalDue(state.flashcards.filter(c => c.nextReview <= now).length);
  };

  const handleBack = () => {
    refresh();
    if (view === 'flashcards' || view === 'quiz') {
      if (activeChapterId && activeChapterIds.length === 1 && activeChapterIds[0] === activeChapterId) {
        setView('chapter');
      } else {
        setView('home');
      }
    } else {
      setView('home');
      setActiveChapterId(null);
    }
  };

  const openFlashcards = (ids: ChapterId[]) => {
    setActiveChapterIds(ids);
    setView('flashcards');
  };

  const openQuiz = (ids: ChapterId[]) => {
    setActiveChapterIds(ids);
    setView('quiz');
  };

  const openChapter = (id: ChapterId) => {
    setActiveChapterId(id);
    setView('chapter');
  };

  if (view === 'flashcards') {
    return <FlashcardDeck chapterIds={activeChapterIds} onBack={handleBack} />;
  }
  if (view === 'quiz') {
    return <QuizMode chapterIds={activeChapterIds} onBack={handleBack} />;
  }
  if (view === 'chapter' && activeChapterId) {
    const chapter = chapters.find(c => c.id === activeChapterId)!;
    return (
      <ChapterView
        chapter={chapter}
        onBack={() => { setView('home'); setActiveChapterId(null); }}
        onFlashcards={openFlashcards}
        onQuiz={openQuiz}
      />
    );
  }

  const state = loadState();
  const now = Date.now();

  return (
    <div className="min-h-screen p-4 sm:p-6">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Business Mastery</h1>
            <p className="text-gray-400 text-sm sm:text-base">HSC Business Studies — Topic 3: Finance</p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            {streak > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 rounded-full text-orange-600 border border-orange-200">
                <Flame size={16} />
                <span><strong>{streak}</strong> day streak</span>
              </div>
            )}
            {totalDue > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 rounded-full text-amber-700 border border-amber-200">
                <AlertCircle size={16} />
                <span><strong>{totalDue}</strong> cards due</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        {/* HSC Study Mode — all chapters */}
        <section>
          <div className="card border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl">
                  <TrendingUp className="text-emerald-700" size={28} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">HSC Study Mode</h2>
                  <p className="text-gray-400 text-sm">Random questions from ALL chapters — full exam prep</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                    <span>{allFlashcards.length} flashcards</span>
                    <span>·</span>
                    <span>{allQuestions.length} practice questions</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => openFlashcards(chapters.map(c => c.id))}
                  className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-colors text-sm"
                >
                  <BookOpen size={16} /> All Flashcards
                  {totalDue > 0 && <span className="bg-yellow-500 text-black text-xs px-1.5 py-0.5 rounded-full">{totalDue}</span>}
                </button>
                <button
                  onClick={() => openQuiz(chapters.map(c => c.id))}
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors text-sm"
                >
                  <HelpCircle size={16} /> Full Quiz
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Three assessment sections */}
        {SECTIONS.map(section => {
          const sectionChapters = chapters.filter(c => section.ids.includes(c.id));
          const sectionCards = state.flashcards.filter(c => section.ids.includes(c.chapter as ChapterId));
          const sectionDue = sectionCards.filter(c => c.nextReview <= now).length;
          const sectionQs = allQuestions.filter(q => section.ids.includes(q.chapter as ChapterId)).length;
          const Icon = section.icon;
          const colorMap: Record<string, string> = {
            blue: 'bg-blue-600 hover:bg-blue-700',
            orange: 'bg-orange-600 hover:bg-orange-700',
            violet: 'bg-violet-600 hover:bg-violet-700',
          };
          const borderMap: Record<string, string> = {
            blue: 'border-blue-200 bg-blue-50/30',
            orange: 'border-orange-200 bg-orange-50/30',
            violet: 'border-violet-200 bg-violet-50/30',
          };
          const iconBgMap: Record<string, string> = {
            blue: 'bg-blue-100 text-blue-700',
            orange: 'bg-orange-100 text-orange-700',
            violet: 'bg-violet-100 text-violet-700',
          };
          const headingMap: Record<string, string> = {
            blue: 'text-blue-900',
            orange: 'text-orange-900',
            violet: 'text-violet-900',
          };

          return (
            <section key={section.label}>
              {/* Section header card */}
              <div className={`card border ${borderMap[section.color]} mb-3`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${iconBgMap[section.color]}`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h2 className={`font-bold ${headingMap[section.color]}`}>{section.label}</h2>
                      <p className="text-gray-400 text-xs mt-0.5">{section.description}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                        <span>{sectionCards.length} flashcards</span>
                        <span>·</span>
                        <span>{sectionQs} questions</span>
                        {sectionDue > 0 && (
                          <>
                            <span>·</span>
                            <span className="text-amber-600 font-medium">{sectionDue} due</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => openFlashcards(section.ids)}
                      className={`flex items-center gap-1.5 px-3 py-2 ${colorMap[section.color]} text-white rounded-xl font-medium transition-colors text-xs`}
                    >
                      <BookOpen size={14} /> Flashcards
                    </button>
                    <button
                      onClick={() => openQuiz(section.ids)}
                      className="flex items-center gap-1.5 px-3 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-xl font-medium transition-colors text-xs"
                    >
                      <HelpCircle size={14} /> Quiz
                    </button>
                  </div>
                </div>
              </div>

              {/* Chapters within section */}
              <div className="grid gap-2 ml-2">
                {sectionChapters.map(chapter => {
                  const chCards = state.flashcards.filter(c => c.chapter === chapter.id);
                  const due = chCards.filter(c => c.nextReview <= now).length;
                  const mastered = chCards.filter(c => c.correctStreak >= 3).length;
                  const progress = chCards.length > 0 ? Math.round((mastered / chCards.length) * 100) : 0;
                  const qCount = allQuestions.filter(q => q.chapter === chapter.id).length;

                  return (
                    <button
                      key={chapter.id}
                      onClick={() => openChapter(chapter.id)}
                      className="card text-left hover:border-blue-300 hover:shadow-md transition-all group flex items-center gap-4"
                    >
                      <div className={`w-1 self-stretch rounded-full ${chapter.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm">{chapter.title}</h3>
                            <p className="text-gray-400 text-xs mt-0.5">{chapter.subtitle}</p>
                          </div>
                          <div className="flex items-center gap-2 text-xs shrink-0">
                            {due > 0 && (
                              <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                                {due} due
                              </span>
                            )}
                            <span className="text-gray-400">{qCount} Qs</span>
                          </div>
                        </div>
                        {chCards.length > 0 && (
                          <div className="mt-2 flex items-center gap-2">
                            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${chapter.color} transition-all`}
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-400">{progress}%</span>
                          </div>
                        )}
                      </div>
                      <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-500 transition-colors shrink-0" />
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Study tips */}
        <section>
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-3">HSC Business Studies Study Tips</h3>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Always <strong className="text-gray-700">define key terms</strong> before explaining or discussing — examiners expect BizWORD definitions</li>
              <li>• For financial ratios: state the <strong className="text-gray-700">formula → calculate → interpret</strong> in context</li>
              <li>• Know all 7 ratios: current ratio, debt-to-equity, gross profit, net profit, return on equity, expense ratio, AR turnover</li>
              <li>• "Discuss" = consider <strong className="text-gray-700">both advantages and disadvantages</strong> with a concluding judgement</li>
              <li>• Accounting equation: <strong className="text-gray-700">Assets = Liabilities + Owners' Equity</strong> (must balance)</li>
              <li>• Match finance term to purpose: <strong className="text-gray-700">short-term finance for short-term assets</strong>, long-term for long-term assets</li>
            </ul>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-400 pb-4">
          <p>HSC Business Studies · Topic 3: Finance</p>
          <p className="mt-1">Data stored locally in your browser</p>
        </footer>
      </main>
    </div>
  );
}
