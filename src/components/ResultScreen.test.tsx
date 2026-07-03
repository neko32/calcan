import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ResultScreen } from './ResultScreen';

describe('ResultScreen Component', () => {
  it('should render congrats header, stats, and restart button', () => {
    const handleRestart = vi.fn();
    
    render(
      <ResultScreen
        totalQuestions={20}
        selectedType="all"
        onRestart={handleRestart}
      />
    );

    expect(screen.getByText('お疲れ様まる！')).toBeInTheDocument();
    expect(screen.getByText(/学習レポート/)).toBeInTheDocument();
    expect(screen.getByText('フルコース (全20問)')).toBeInTheDocument();
    expect(screen.getByText('20 問')).toBeInTheDocument();
    expect(screen.getByText(/コバトン/)).toBeInTheDocument();

    const restartBtn = screen.getByRole('button', { name: 'もう一度チャレンジする' });
    expect(restartBtn).toBeInTheDocument();

    fireEvent.click(restartBtn);
    expect(handleRestart).toHaveBeenCalled();
  });

  it('should display correct course types', () => {
    const handleRestart = vi.fn();
    
    const { rerender } = render(
      <ResultScreen
        totalQuestions={10}
        selectedType="basic"
        onRestart={handleRestart}
      />
    );
    expect(screen.getByText('基礎ドリル (10問)')).toBeInTheDocument();

    rerender(
      <ResultScreen
        totalQuestions={10}
        selectedType="applied"
        onRestart={handleRestart}
      />
    );
    expect(screen.getByText('応用ドリル (10問)')).toBeInTheDocument();
  });
});
