import { describe, it, expect } from 'vitest';
import { questions } from './questions';

describe('questions data structure', () => {
  it('should contain exactly 20 questions', () => {
    expect(questions).toHaveLength(20);
  });

  it('should have correct fields in all questions', () => {
    questions.forEach((q) => {
      expect(q).toHaveProperty('id');
      expect(q).toHaveProperty('type');
      expect(q).toHaveProperty('category');
      expect(q).toHaveProperty('question');
      expect(q).toHaveProperty('answer');
      expect(q).toHaveProperty('solution');

      expect(typeof q.id).toBe('number');
      expect(['basic', 'applied']).toContain(q.type);
      expect(typeof q.category).toBe('string');
      expect(typeof q.question).toBe('string');
      expect(typeof q.answer).toBe('string');
      expect(typeof q.solution).toBe('string');
    });
  });

  it('should have 10 basic and 10 applied questions', () => {
    const basicCount = questions.filter(q => q.type === 'basic').length;
    const appliedCount = questions.filter(q => q.type === 'applied').length;
    expect(basicCount).toBe(10);
    expect(appliedCount).toBe(10);
  });

  it('should have unique IDs from 1 to 20', () => {
    const ids = questions.map(q => q.id);
    const uniqueIds = Array.from(new Set(ids));
    expect(uniqueIds).toHaveLength(20);
    expect(Math.min(...ids)).toBe(1);
    expect(Math.max(...ids)).toBe(20);
  });
});
