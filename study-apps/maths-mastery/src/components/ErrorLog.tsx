import { useState, useMemo } from 'react';
import { ChevronLeft, Trash2, Filter, BarChart3, AlertTriangle, Brain, Clock, Calculator } from 'lucide-react';
import { ErrorEntry, ErrorType } from '../types';
import { loadState, saveErrors } from '../utils/storage';
import katex from 'katex';

interface Props {
  onBack: () => void;
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

const errorTypeInfo: Record<ErrorType, { label: string; color: string; icon: typeof AlertTriangle; description: string }> = {
  silly: {
    label: 'Silly Mistake',
    color: 'bg-yellow-600',
    icon: AlertTriangle,
    description: 'Careless errors like sign mistakes, arithmetic errors',
  },
  conceptual: {
    label: 'Conceptual Gap',
    color: 'bg-red-600',
    icon: Brain,
    description: 'Missing understanding of the underlying concept',
  },
  method: {
    label: 'Wrong Method',
    color: 'bg-purple-600',
    icon: Calculator,
    description: 'Used an incorrect approach or formula',
  },
  time: {
    label: 'Time Pressure',
    color: 'bg-orange-600',
    icon: Clock,
    description: 'Ran out of time or rushed the solution',
  },
};

export default function ErrorLog({ onBack }: Props) {
  const [errors, setErrors] = useState<ErrorEntry[]>(() => loadState().errors);
  const [filterType, setFilterType] = useState<ErrorType | 'all'>('all');
  const [filterTopic, setFilterTopic] = useState<string>('all');
  const [view, setView] = useState<'list' | 'analytics'>('list');

  // Get unique topics
  const topics = useMemo(() => {
    return [...new Set(errors.map(e => e.topic))].sort();
  }, [errors]);

  // Filter errors
  const filteredErrors = useMemo(() => {
    return errors.filter(e => {
      if (filterType !== 'all' && e.errorType !== filterType) return false;
      if (filterTopic !== 'all' && e.topic !== filterTopic) return false;
      return true;
    }).sort((a, b) => b.date - a.date);
  }, [errors, filterType, filterTopic]);

  // Analytics
  const analytics = useMemo(() => {
    const byType: Record<ErrorType, number> = { silly: 0, conceptual: 0, method: 0, time: 0 };
    const byTopic: Record<string, number> = {};

    errors.forEach(e => {
      byType[e.errorType]++;
      byTopic[e.topic] = (byTopic[e.topic] || 0) + 1;
    });

    return { byType, byTopic };
  }, [errors]);

  // Delete error
  const deleteError = (id: string) => {
    const newErrors = errors.filter(e => e.id !== id);
    setErrors(newErrors);
    saveErrors(newErrors);
  };

  // Clear all
  const clearAll = () => {
    if (confirm('Delete all error entries? This cannot be undone.')) {
      setErrors([]);
      saveErrors([]);
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
            onClick={() => setView(view === 'list' ? 'analytics' : 'list')}
            className="btn-secondary flex items-center gap-2"
          >
            {view === 'list' ? <BarChart3 size={18} /> : <Filter size={18} />}
            {view === 'list' ? 'Analytics' : 'List View'}
          </button>

          {errors.length > 0 && (
            <button
              onClick={clearAll}
              className="text-red-400 hover:text-red-300 text-sm"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Error Log</h1>

        {errors.length === 0 ? (
          <div className="card text-center">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-xl font-semibold mb-2">No errors logged yet</h2>
            <p className="text-slate-400">
              When you make mistakes in practice, log them here to track patterns and improve.
            </p>
          </div>
        ) : view === 'analytics' ? (
          // Analytics view
          <div className="space-y-6">
            {/* Error type breakdown */}
            <div className="card">
              <h3 className="font-semibold mb-4">Errors by Type</h3>
              <div className="space-y-3">
                {(Object.entries(analytics.byType) as [ErrorType, number][])
                  .sort((a, b) => b[1] - a[1])
                  .map(([type, count]) => {
                    const info = errorTypeInfo[type];
                    const percentage = errors.length > 0 ? (count / errors.length) * 100 : 0;
                    const Icon = info.icon;

                    return (
                      <div key={type}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <Icon size={16} className="text-slate-400" />
                            <span>{info.label}</span>
                          </div>
                          <span className="text-slate-400">{count} ({Math.round(percentage)}%)</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${info.color} transition-all`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Topic breakdown */}
            <div className="card">
              <h3 className="font-semibold mb-4">Errors by Topic</h3>
              <div className="space-y-3">
                {Object.entries(analytics.byTopic)
                  .sort((a, b) => b[1] - a[1])
                  .map(([topic, count]) => {
                    const percentage = errors.length > 0 ? (count / errors.length) * 100 : 0;

                    return (
                      <div key={topic}>
                        <div className="flex items-center justify-between mb-1">
                          <span>{topic}</span>
                          <span className="text-slate-400">{count} ({Math.round(percentage)}%)</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 transition-all"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Insights */}
            <div className="card bg-blue-900/20 border-blue-800/30">
              <h3 className="font-semibold mb-3 text-blue-400">Insights</h3>
              <ul className="space-y-2 text-sm">
                {analytics.byType.conceptual > analytics.byType.silly && (
                  <li>• Most errors are conceptual - consider reviewing core concepts before more practice.</li>
                )}
                {analytics.byType.silly > errors.length * 0.4 && (
                  <li>• Many silly mistakes - try slowing down and double-checking your work.</li>
                )}
                {analytics.byType.time > errors.length * 0.3 && (
                  <li>• Time pressure is a factor - practice more timed sessions to build speed.</li>
                )}
                {Object.entries(analytics.byTopic).length > 0 && (
                  <li>
                    • Focus area: {Object.entries(analytics.byTopic).sort((a, b) => b[1] - a[1])[0]?.[0]}
                    has the most errors.
                  </li>
                )}
              </ul>
            </div>
          </div>
        ) : (
          // List view
          <>
            {/* Filters */}
            <div className="card mb-6">
              <div className="flex flex-wrap gap-4">
                {/* Type filter */}
                <div>
                  <label className="text-sm text-slate-400 block mb-2">Error Type</label>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as ErrorType | 'all')}
                    className="bg-slate-700 rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="all">All Types</option>
                    {Object.entries(errorTypeInfo).map(([type, info]) => (
                      <option key={type} value={type}>{info.label}</option>
                    ))}
                  </select>
                </div>

                {/* Topic filter */}
                <div>
                  <label className="text-sm text-slate-400 block mb-2">Topic</label>
                  <select
                    value={filterTopic}
                    onChange={(e) => setFilterTopic(e.target.value)}
                    className="bg-slate-700 rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="all">All Topics</option>
                    {topics.map(topic => (
                      <option key={topic} value={topic}>{topic}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Error list */}
            <div className="space-y-4">
              {filteredErrors.length === 0 ? (
                <p className="text-center text-slate-400 py-8">
                  No errors match the current filters.
                </p>
              ) : (
                filteredErrors.map(error => {
                  const info = errorTypeInfo[error.errorType];
                  const Icon = info.icon;

                  return (
                    <div key={error.id} className="card">
                      <div className="flex items-start gap-4">
                        <div className={`${info.color} p-2 rounded-lg`}>
                          <Icon size={20} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-0.5 rounded text-xs ${info.color}`}>
                              {info.label}
                            </span>
                            <span className="text-slate-400 text-sm">{error.topic}</span>
                            <span className="text-slate-500 text-sm ml-auto">
                              {new Date(error.date).toLocaleDateString()}
                            </span>
                          </div>

                          <div
                            className="text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: renderMath(error.problemQuestion) }}
                          />

                          {error.notes && (
                            <p className="text-sm text-slate-400 mt-2">
                              Notes: {error.notes}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={() => deleteError(error.id)}
                          className="text-slate-500 hover:text-red-400 p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
