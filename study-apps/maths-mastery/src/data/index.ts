import advancedFormulas from './formulas-advanced';
import ext1Formulas from './formulas-ext1';
import ext2Formulas from './formulas-ext2';
import problems from './problems';
import { FlashCard, Problem } from '../types';

// Combine all formulas
export const allFormulas: FlashCard[] = [
  ...advancedFormulas,
  ...ext1Formulas,
  ...ext2Formulas,
];

// Export problems
export const allProblems: Problem[] = problems;

// Get unique topics
export function getTopics(subject?: 'advanced' | 'ext1' | 'ext2'): string[] {
  const formulas = subject
    ? allFormulas.filter(f => f.subject === subject)
    : allFormulas;

  return [...new Set(formulas.map(f => f.topic))];
}

// Get formulas by topic
export function getFormulasByTopic(topic: string): FlashCard[] {
  return allFormulas.filter(f => f.topic === topic);
}

// Get problems by topic
export function getProblemsByTopic(topic: string): Problem[] {
  return allProblems.filter(p => p.topic === topic);
}

// Get problems by difficulty
export function getProblemsByDifficulty(min: number, max: number): Problem[] {
  return allProblems.filter(p => p.difficulty >= min && p.difficulty <= max);
}

export { advancedFormulas, ext1Formulas, ext2Formulas, problems };
