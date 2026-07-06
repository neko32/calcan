import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Integration', () => {
  it('should run the entire drill flow using mouse clicks', () => {
    render(<App />);

    // 1. スタート画面が最初に出る
    expect(screen.getByText('calcan')).toBeInTheDocument();
    
    // 基礎ドリル（10問）を選んでスタートする
    fireEvent.click(screen.getByText('基礎ドリル'));
    fireEvent.click(screen.getByRole('button', { name: /ドリルを開始するまる/ }));

    // 2. プレイ画面に遷移する（最初の問題）
    expect(screen.getByText(/\/ 10/)).toBeInTheDocument();
    expect(screen.getByText(/Q\./)).toBeInTheDocument();
    
    // まだ解答は表示されていないはず
    expect(screen.getByTestId('flip-container')).not.toHaveClass('flipped');

    // 3. カードをクリックして解答表示
    const flipper = screen.getByText(/Q\./).closest('.flipper');
    expect(flipper).toBeInTheDocument();
    if (flipper) {
      fireEvent.click(flipper);
    }
    expect(screen.getByText('【正解】')).toBeInTheDocument();

    // 4. 「次の問題」ボタンをクリックして問題 2 に進む
    fireEvent.click(screen.getByRole('button', { name: '次の問題' }));
    expect(screen.getByText(/\/ 10/)).toBeInTheDocument();
    expect(screen.getByTestId('flip-container')).not.toHaveClass('flipped');

    // 5. 残り9問分、クリック➔次へを繰り返してリザルトへ行く
    for (let i = 2; i <= 10; i++) {
      const currentFlipper = screen.getByText(/Q\./).closest('.flipper');
      if (currentFlipper) {
        fireEvent.click(currentFlipper);
      }
      const nextBtnName = i === 10 ? '結果を見る' : '次の問題';
      fireEvent.click(screen.getByRole('button', { name: nextBtnName }));
    }

    // 6. リザルト画面
    expect(screen.getByText('お疲れ様まる！')).toBeInTheDocument();
    expect(screen.getByText(/基礎ドリル/)).toBeInTheDocument();

    // 7. リスタートボタンでスタート画面に戻る
    fireEvent.click(screen.getByRole('button', { name: 'もう一度チャレンジする' }));
    expect(screen.getByText('calcan')).toBeInTheDocument();
  });

  it('should navigate components via Space / Enter keys in play screen', () => {
    render(<App />);

    // 開始
    fireEvent.click(screen.getByText('基礎ドリル'));
    fireEvent.click(screen.getByRole('button', { name: /ドリルを開始するまる/ }));

    expect(screen.getByText(/\/ 10/)).toBeInTheDocument();

    // Spaceキーでカードを裏返す
    fireEvent.keyDown(window, { code: 'Space' });
    expect(screen.getByText('【正解】')).toBeInTheDocument();

    // Enterキーで次の問題へ
    fireEvent.keyDown(window, { code: 'Enter' });
    expect(screen.getByText(/\/ 10/)).toBeInTheDocument();
    expect(screen.getByTestId('flip-container')).not.toHaveClass('flipped');

    // 戻るボタンでスタートに戻る
    fireEvent.click(screen.getByRole('button', { name: '最初に戻る' }));
    expect(screen.getByText('calcan')).toBeInTheDocument();
  });

  it('should flip card back via Backspace key when flipped', () => {
    render(<App />);

    // 開始
    fireEvent.click(screen.getByText('基礎ドリル'));
    fireEvent.click(screen.getByRole('button', { name: /ドリルを開始するまる/ }));

    // Spaceキーでカードを裏返す
    fireEvent.keyDown(window, { code: 'Space' });
    expect(screen.getByTestId('flip-container')).toHaveClass('flipped');

    // Backspaceキーでカードを元に戻す
    fireEvent.keyDown(window, { code: 'Backspace' });
    expect(screen.getByTestId('flip-container')).not.toHaveClass('flipped');
  });

  it('should ignore keyboard events when not on play screen', () => {
    render(<App />);
    
    // スタート画面でSpaceキーを押しても何も起きないことを確認
    fireEvent.keyDown(window, { code: 'Space' });
    expect(screen.getByText('calcan')).toBeInTheDocument();
  });
});
