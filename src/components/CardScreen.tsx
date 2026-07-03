import React from 'react';
import type { Question } from '../data/questions';
import { MathText } from './MathText';
import { ChevronRight, ArrowLeft, RefreshCw } from 'lucide-react';

interface CardScreenProps {
  question: Question;
  currentIndex: number;
  totalCount: number;
  isFlipped: boolean;
  onToggleFlip: () => void;
  onNext: () => void;
  onBackToStart: () => void;
}

export const CardScreen: React.FC<CardScreenProps> = ({
  question,
  currentIndex,
  totalCount,
  isFlipped,
  onToggleFlip,
  onNext,
  onBackToStart
}) => {
  const isLast = currentIndex === totalCount - 1;

  const handleCardClick = () => {
    if (!isFlipped) {
      onToggleFlip();
    } else {
      onNext();
    }
  };

  return (
    <div className="pop-in" style={{ width: '100%' }}>
      {/* 上部ヘッダー（戻るボタンと進行度） */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '20px',
          padding: '0 10px'
        }}
      >
        <button 
          onClick={onBackToStart} 
          className="btn btn-outline"
          style={{ padding: '8px 16px', fontSize: '14px', borderRadius: '10px' }}
        >
          <ArrowLeft size={16} />
          最初に戻る
        </button>
        
        <div style={{ fontWeight: '700', color: 'var(--text-muted)' }}>
          問題 <span style={{ color: 'var(--accent-color)', fontSize: '20px' }}>{currentIndex + 1}</span> / {totalCount}
        </div>
      </div>

      {/* 3Dカードコンテナ */}
      <div data-testid="flip-container" className={`flip-container ${isFlipped ? 'flipped' : ''}`}>
        <div className="flipper" onClick={handleCardClick}>
          {/* フロント面 (問題面) */}
          <div className="card-front">
            {/* 猫耳 */}
            <div className="card-header-ears">
              <div className="ear left"></div>
              <div className="ear right"></div>
            </div>

            <div>
              {/* カテゴリバッジ */}
              <span className={`badge ${question.type === 'basic' ? 'badge-basic' : 'badge-applied'}`}>
                {question.type === 'basic' ? '基礎' : '応用'} • {question.category}
              </span>
              
              <h2 style={{ fontSize: '22px', fontWeight: '800', marginTop: '16px', color: 'var(--text-main)' }}>
                Q. {question.id}
              </h2>
              
              <div style={{ fontSize: '18px', marginTop: '20px', overflowWrap: 'break-word' }}>
                <MathText text={question.question} />
              </div>
            </div>

            {/* 下部ガイダンス */}
            <div 
              style={{ 
                textAlign: 'center', 
                borderTop: '1px dashed var(--border-color)', 
                paddingTop: '20px',
                fontSize: '14px',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <RefreshCw size={14} className="animate-spin" />
              <span>カードをクリック、または <b>Space / Enter</b> で答えを表示</span>
            </div>
          </div>

          {/* バック面 (解答・ヒント面) */}
          <div className="card-back">
            {/* 猫耳 */}
            <div className="card-header-ears">
              <div className="ear left" style={{ transform: 'rotate(20deg) skewX(-10deg) scaleX(-1)' }}></div>
              <div className="ear right" style={{ transform: 'rotate(70deg) skewX(10deg) scaleX(-1)' }}></div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span className={`badge ${question.type === 'basic' ? 'badge-basic' : 'badge-applied'}`}>
                A. 正解と解説
              </span>
              
              {/* 正解の表示 */}
              <div 
                style={{ 
                  background: 'rgba(255, 117, 151, 0.05)', 
                  border: '1.5px solid rgba(255, 117, 151, 0.2)',
                  borderRadius: '16px',
                  padding: '20px',
                  marginTop: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--kalkan-pink)', marginBottom: '8px' }}>
                  【正解】
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600' }}>
                  <MathText text={question.answer} />
                </div>
              </div>

              {/* ヒント・解説の表示 */}
              <div style={{ marginTop: '20px', overflowY: 'auto', flex: 1, paddingRight: '4px' }}>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--kalkan-purple)', marginBottom: '8px' }}>
                  【解法・ヒント】
                </div>
                <div style={{ fontSize: '15px', color: 'var(--text-main)', lineHeight: '1.6' }}>
                  <MathText text={question.solution} />
                </div>
              </div>
            </div>

            {/* 下部ボタンとガイダンス */}
            <div 
              style={{ 
                borderTop: '1px solid var(--border-color)', 
                paddingTop: '20px',
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                クリック、または <b>Space / Enter</b> で次へ進む
              </span>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // flipperの親要素クリックイベント発火を防ぐ
                  onNext();
                }}
                className="btn btn-primary"
                style={{ padding: '10px 20px', fontSize: '15px', borderRadius: '10px' }}
              >
                {isLast ? '結果を見る' : '次の問題'}
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
