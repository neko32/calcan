import { useState, useEffect } from 'react';
import { questions } from './data/questions';
import type { Question } from './data/questions';
import { StartScreen } from './components/StartScreen';
import { CardScreen } from './components/CardScreen';
import { ResultScreen } from './components/ResultScreen';

// フィッシャー–イェーツのシャッフルアルゴリズム
const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

function App() {
  const [screen, setScreen] = useState<'start' | 'play' | 'result'>('start');
  const [selectedType, setSelectedType] = useState<'all' | 'basic' | 'applied'>('all');
  const [playlist, setPlaylist] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // ドリル開始時の処理
  const handleStart = (type: 'all' | 'basic' | 'applied') => {
    setSelectedType(type);
    
    // フィルタリング
    let filteredQuestions = [...questions];
    if (type === 'basic') {
      filteredQuestions = questions.filter(q => q.type === 'basic');
    } else if (type === 'applied') {
      filteredQuestions = questions.filter(q => q.type === 'applied');
    }

    // シャッフルしてセット
    const shuffled = shuffleArray(filteredQuestions);
    setPlaylist(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setScreen('play');
  };

  // 次の問題へ進む処理
  const handleNext = () => {
    if (currentIndex < playlist.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    } else {
      setScreen('result');
    }
  };

  // トグルカード
  const handleToggleFlip = () => {
    setIsFlipped(prev => !prev);
  };

  // 最初に戻る
  const handleBackToStart = () => {
    setScreen('start');
  };

  // キーボードショートカットの監視 (Space / Enter)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (screen !== 'play') return;

      if (event.code === 'Space' || event.code === 'Enter') {
        // デフォルトのブラウザスクロールやボタン押下アクションを防ぐ
        event.preventDefault();
        
        if (!isFlipped) {
          setIsFlipped(true);
        } else {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [screen, isFlipped, currentIndex, playlist]);

  return (
    <>
      {screen === 'start' && (
        <StartScreen onStart={handleStart} />
      )}

      {screen === 'play' && playlist.length > 0 && (
        <CardScreen
          question={playlist[currentIndex]}
          currentIndex={currentIndex}
          totalCount={playlist.length}
          isFlipped={isFlipped}
          onToggleFlip={handleToggleFlip}
          onNext={handleNext}
          onBackToStart={handleBackToStart}
        />
      )}

      {screen === 'result' && (
        <ResultScreen
          totalQuestions={playlist.length}
          selectedType={selectedType}
          onRestart={handleBackToStart}
        />
      )}

      {/* フッター */}
      <footer className="footer-text">
        © {new Date().getFullYear()} calcan - Linear Algebra 計算ドリルまる 🐾
      </footer>
    </>
  );
}

export default App;
