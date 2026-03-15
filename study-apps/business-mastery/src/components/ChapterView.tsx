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
    <div className="min-h-screen p-4 sm:p-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors">
        <ChevronLeft size={20} /> Back to Topics
      </button>

      {/* Chapter header */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className={`w-12 h-1.5 rounded-full ${chapter.color} mb-4`} />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{chapter.title}</h1>
        <p className="text-gray-400">{chapter.subtitle}</p>
      </div>

      {/* Stats row */}
      {chapterCards.length > 0 && (
        <div className="max-w-3xl mx-auto mb-6 grid grid-cols-3 gap-3">
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-gray-900">{dueCards.length}</div>
            <div className="text-xs text-gray-400 mt-0.5">Due today</div>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-gray-900">{masteredCards.length}/{chapterCards.length}</div>
            <div className="text-xs text-gray-400 mt-0.5">Mastered</div>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-gray-900">{questions.length}</div>
            <div className="text-xs text-gray-400 mt-0.5">Practice Qs</div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Flashcards */}
        <button
          onClick={() => onFlashcards([chapter.id])}
          className="card text-left hover:border-emerald-400 hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
              <BookOpen className="text-emerald-700" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Flashcards</h2>
              <p className="text-sm text-gray-400">Spaced Repetition</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-3">
            Master key definitions, concepts and equations with smart spaced repetition.
          </p>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">{cards.length} cards</span>
            {dueCards.length > 0 && (
              <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs">
                {dueCards.length} due
              </span>
            )}
          </div>
        </button>

        {/* Quiz */}
        <button
          onClick={() => onQuiz([chapter.id])}
          className="card text-left hover:border-blue-400 hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
              <HelpCircle className="text-blue-700" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Practice Quiz</h2>
              <p className="text-sm text-gray-400">HSC-style Questions</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-3">
            Multiple choice and short answer questions in HSC exam format.
          </p>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">{mcqCount} MCQ</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">{shortCount} short answer</span>
          </div>
        </button>
      </div>

      {/* Key topics in this chapter */}
      <div className="max-w-3xl mx-auto mt-8">
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 size={18} className="text-gray-400" />
            <h3 className="font-semibold text-gray-900">Flashcard Topics</h3>
          </div>
          <div className="space-y-2">
            {Array.from(new Set(cards.map(c => c.topic))).map(topic => {
              const topicCards = state.flashcards.filter(c => c.chapter === chapter.id && c.topic === topic);
              const due = topicCards.filter(c => c.nextReview <= now).length;
              return (
                <div key={topic} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-gray-700">{topic}</span>
                  <div className="flex items-center gap-2">
                    {due > 0 && <span className="text-xs text-amber-600">{due} due</span>}
                    <span className="text-xs text-gray-400">{topicCards.length} cards</span>
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
