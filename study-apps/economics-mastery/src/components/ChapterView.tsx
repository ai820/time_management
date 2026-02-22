import { ChevronLeft, BookOpen, HelpCircle, BarChart2 } from 'lucide-react';
import { Chapter, ChapterId } from '../types';
import { getCardsForChapter, getQuestionsForChapter } from '../data';
import { loadState } from '../utils/storage';

interface Props {
  chapter: Chapter;
  onBack: () => void;
  onFlashcards: (ids: ChapterId[]) => void;
  onQuiz: (ids: ChapterId[]) => void;
}

export default function ChapterView({ chapter, onBack, onFlashcards, onQuiz }: Props) {
  const cards = getCardsForChapter(chapter.id);
  const questions = getQuestionsForChapter(chapter.id);

  const state = loadState();
  const now = Date.now();
  const chapterCards = state.flashcards.filter(c => c.chapter === chapter.id);
  const dueCards = chapterCards.filter(c => c.nextReview <= now);
  const masteredCards = chapterCards.filter(c => c.correctStreak >= 3);

  const mcqCount = questions.filter(q => q.type === 'mcq').length;
  const shortCount = questions.filter(q => q.type === 'short').length;

  return (
    <div className="min-h-screen p-6">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-8">
        <ChevronLeft size={20} /> Back to Topics
      </button>

      {/* Chapter header */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className={`w-12 h-1.5 rounded-full ${chapter.color} mb-4`} />
        <h1 className="text-3xl font-bold mb-1">{chapter.title}</h1>
        <p className="text-slate-400">{chapter.subtitle}</p>
      </div>

      {/* Stats row */}
      {chapterCards.length > 0 && (
        <div className="max-w-3xl mx-auto mb-6 grid grid-cols-3 gap-3">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-white">{dueCards.length}</div>
            <div className="text-xs text-slate-400 mt-0.5">Due today</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-white">{masteredCards.length}/{chapterCards.length}</div>
            <div className="text-xs text-slate-400 mt-0.5">Mastered</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-white">{questions.length}</div>
            <div className="text-xs text-slate-400 mt-0.5">Practice Qs</div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Flashcards */}
        <button
          onClick={() => onFlashcards([chapter.id])}
          className="card text-left hover:border-emerald-500/50 transition-all group"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-emerald-600/20 rounded-xl group-hover:bg-emerald-600/30 transition-colors">
              <BookOpen className="text-emerald-400" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Flashcards</h2>
              <p className="text-sm text-slate-400">Spaced Repetition</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-3">
            Master key definitions, concepts and equations with smart spaced repetition.
          </p>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-slate-700 rounded-lg text-xs">{cards.length} cards</span>
            {dueCards.length > 0 && (
              <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded-lg text-xs">
                {dueCards.length} due
              </span>
            )}
          </div>
        </button>

        {/* Quiz */}
        <button
          onClick={() => onQuiz([chapter.id])}
          className="card text-left hover:border-blue-500/50 transition-all group"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-600/30 transition-colors">
              <HelpCircle className="text-blue-400" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Practice Quiz</h2>
              <p className="text-sm text-slate-400">HSC-style Questions</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-3">
            Multiple choice and short answer questions in HSC exam format.
          </p>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-slate-700 rounded-lg text-xs">{mcqCount} MCQ</span>
            <span className="px-2 py-1 bg-slate-700 rounded-lg text-xs">{shortCount} short answer</span>
          </div>
        </button>
      </div>

      {/* Key topics in this chapter */}
      <div className="max-w-3xl mx-auto mt-8">
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 size={18} className="text-slate-400" />
            <h3 className="font-semibold">Flashcard Topics</h3>
          </div>
          <div className="space-y-2">
            {Array.from(new Set(cards.map(c => c.topic))).map(topic => {
              const topicCards = state.flashcards.filter(c => c.chapter === chapter.id && c.topic === topic);
              const due = topicCards.filter(c => c.nextReview <= now).length;
              return (
                <div key={topic} className="flex items-center justify-between py-1.5 border-b border-slate-700/50 last:border-0">
                  <span className="text-sm text-slate-300">{topic}</span>
                  <div className="flex items-center gap-2">
                    {due > 0 && <span className="text-xs text-yellow-400">{due} due</span>}
                    <span className="text-xs text-slate-500">{topicCards.length} cards</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
