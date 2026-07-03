import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { StartScreen } from './StartScreen';

describe('StartScreen Component', () => {
  it('should render header elements and instructions', () => {
    const handleStart = vi.fn();
    render(<StartScreen onStart={handleStart} />);

    expect(screen.getByText('calcan')).toBeInTheDocument();
    expect(screen.getByText(/線形代数計算ドリル/)).toBeInTheDocument();
    expect(screen.getByText('フルコース')).toBeInTheDocument();
    expect(screen.getByText('基礎ドリル')).toBeInTheDocument();
    expect(screen.getByText('応用ドリル')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ドリルを開始するまる/ })).toBeInTheDocument();
  });

  it('should allow changing option and trigger start callback with the selection', () => {
    const handleStart = vi.fn();
    render(<StartScreen onStart={handleStart} />);

    // 最初は 'all' が選択されている
    fireEvent.click(screen.getByRole('button', { name: /ドリルを開始するまる/ }));
    expect(handleStart).toHaveBeenCalledWith('all');

    // 基礎ドリルをクリック
    fireEvent.click(screen.getByText('基礎ドリル'));
    fireEvent.click(screen.getByRole('button', { name: /ドリルを開始するまる/ }));
    expect(handleStart).toHaveBeenCalledWith('basic');

    // 応用ドリルをクリック
    fireEvent.click(screen.getByText('応用ドリル'));
    fireEvent.click(screen.getByRole('button', { name: /ドリルを開始するまる/ }));
    expect(handleStart).toHaveBeenCalledWith('applied');
  });
});
