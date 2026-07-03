import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CardScreen } from './CardScreen';
import type { Question } from '../data/questions';

const mockQuestion: Question = {
  id: 1,
  type: 'basic',
  category: 'テストカテゴリ',
  question: '問題文 $x$',
  answer: '解答 $y$',
  solution: '解説 $z$'
};

describe('CardScreen Component', () => {
  it('should render front side of the card when not flipped', () => {
    const toggleFlip = vi.fn();
    const handleNext = vi.fn();
    const backToStart = vi.fn();

    render(
      <CardScreen
        question={mockQuestion}
        currentIndex={0}
        totalCount={10}
        isFlipped={false}
        onToggleFlip={toggleFlip}
        onNext={handleNext}
        onBackToStart={backToStart}
      />
    );

    expect(screen.getByText(/Q\. 1/)).toBeInTheDocument();
    expect(screen.getByText(/基礎/)).toBeInTheDocument();
    expect(screen.getByText(/テストカテゴリ/)).toBeInTheDocument();
    expect(screen.getByText(/\/ 10/)).toBeInTheDocument();
    
    // 問題文（モックKaTeX）が存在することを確認
    expect(screen.getAllByTestId('katex-mock')[0]).toHaveTextContent('x');
    
    // 戻るボタンが機能することを確認
    fireEvent.click(screen.getByText(/最初に戻る/));
    expect(backToStart).toHaveBeenCalled();
  });

  it('should call onToggleFlip when clicking the unflipped card', () => {
    const toggleFlip = vi.fn();
    const handleNext = vi.fn();
    const backToStart = vi.fn();

    render(
      <CardScreen
        question={mockQuestion}
        currentIndex={0}
        totalCount={10}
        isFlipped={false}
        onToggleFlip={toggleFlip}
        onNext={handleNext}
        onBackToStart={backToStart}
      />
    );

    // カード本体（flipper）をクリック
    const card = screen.getByText('Q. 1').closest('.flipper');
    expect(card).toBeInTheDocument();
    
    if (card) {
      fireEvent.click(card);
      expect(toggleFlip).toHaveBeenCalled();
    }
  });

  it('should render back side of the card when flipped', () => {
    const toggleFlip = vi.fn();
    const handleNext = vi.fn();
    const backToStart = vi.fn();

    render(
      <CardScreen
        question={mockQuestion}
        currentIndex={0}
        totalCount={10}
        isFlipped={true}
        onToggleFlip={toggleFlip}
        onNext={handleNext}
        onBackToStart={backToStart}
      />
    );

    // 解答と解説が表示されているか
    expect(screen.getByText('【正解】')).toBeInTheDocument();
    expect(screen.getByText('【解法・ヒント】')).toBeInTheDocument();
    
    // 正解（モックKaTeX）が存在すること
    const mathElements = screen.getAllByTestId('katex-mock');
    // 問題文 (x), 正解 (y), 解説 (z) が入っているはず
    const mathTexts = mathElements.map(el => el.textContent);
    expect(mathTexts).toContain('y');
    expect(mathTexts).toContain('z');

    // 「次の問題」ボタンをクリックした時
    fireEvent.click(screen.getByRole('button', { name: '次の問題' }));
    expect(handleNext).toHaveBeenCalled();
  });

  it('should call onNext when clicking the flipped card flipper', () => {
    const toggleFlip = vi.fn();
    const handleNext = vi.fn();
    const backToStart = vi.fn();

    render(
      <CardScreen
        question={mockQuestion}
        currentIndex={0}
        totalCount={10}
        isFlipped={true}
        onToggleFlip={toggleFlip}
        onNext={handleNext}
        onBackToStart={backToStart}
      />
    );

    const card = screen.getByText('【正解】').closest('.flipper');
    if (card) {
      fireEvent.click(card);
      expect(handleNext).toHaveBeenCalled();
    }
  });
});
