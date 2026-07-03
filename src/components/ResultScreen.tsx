import React from 'react';
import { RotateCcw, Award, CheckCircle } from 'lucide-react';

interface ResultScreenProps {
  totalQuestions: number;
  selectedType: 'all' | 'basic' | 'applied';
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  totalQuestions,
  selectedType,
  onRestart
}) => {
  const getTypeText = () => {
    switch (selectedType) {
      case 'all': return 'フルコース (全20問)';
      case 'basic': return '基礎ドリル (10問)';
      case 'applied': return '応用ドリル (10問)';
    }
  };

  return (
    <div className="pop-in text-center" style={{ padding: '30px 10px' }}>
      {/* クラウン/アワードの可愛い猫ちゃん演出 */}
      <div style={{ position: 'relative', display: 'inline-block', marginBottom: '24px' }}>
        <div 
          style={{ 
            fontSize: '96px', 
            lineHeight: '1',
            filter: 'drop-shadow(0 12px 24px rgba(91, 40, 122, 0.2))' 
          }}
        >
          🎓😸✨
        </div>
      </div>

      <h1 
        style={{ 
          fontSize: '36px', 
          fontWeight: '800', 
          margin: '0 0 16px 0',
          color: 'var(--kalkan-purple)'
        }}
      >
        お疲れ様まる！
      </h1>
      
      <p 
        style={{ 
          fontSize: '18px', 
          color: 'var(--text-main)', 
          fontWeight: '500',
          maxWidth: '500px',
          margin: '0 auto 30px auto',
          lineHeight: '1.6'
        }}
      >
        電卓で解ける線形代数の計算ドリルを無事にクリアしたまる！<br />
        これで計算の基礎体力はばっちりアップしたまるね！🐾
      </p>

      {/* サマリーカード */}
      <div 
        style={{ 
          background: 'var(--card-bg)',
          border: '2px solid var(--border-color)',
          boxShadow: 'var(--card-shadow)',
          borderRadius: '20px',
          padding: '30px',
          maxWidth: '440px',
          margin: '0 auto 40px auto',
          textAlign: 'left'
        }}
      >
        <h3 
          style={{ 
            margin: '0 0 20px 0', 
            fontSize: '18px', 
            fontWeight: '700', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            color: 'var(--kalkan-purple)'
          }}
        >
          <Award size={20} />
          学習レポートまる
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '15px' }}>挑戦したドリル:</span>
            <span style={{ fontWeight: '700', color: 'var(--text-main)' }}>{getTypeText()}</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '15px' }}>解いた問題数:</span>
            <span style={{ fontWeight: '700', color: 'var(--kalkan-pink)', fontSize: '18px' }}>
              {totalQuestions} 問
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '15px' }}>完了ステータス:</span>
            <span 
              style={{ 
                fontWeight: '700', 
                color: 'var(--color-kobaton)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px',
                fontSize: '15px'
              }}
            >
              <CheckCircle size={16} fill="var(--color-kobaton)" color="#fff" />
              Completed!
            </span>
          </div>
        </div>
      </div>

      <button className="btn btn-primary" onClick={onRestart} style={{ padding: '16px 36px', fontSize: '16px' }}>
        <RotateCcw size={18} />
        もう一度チャレンジする
      </button>

      {/* チームエージェントからのひと言メッセージ (イースターエッグ的な楽しさ) */}
      <div 
        style={{ 
          marginTop: '50px', 
          padding: '20px', 
          background: 'rgba(91, 40, 122, 0.03)',
          borderRadius: '16px',
          border: '1px solid rgba(91, 40, 122, 0.05)',
          maxWidth: '560px',
          margin: '50px auto 0 auto',
          textAlign: 'left'
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '8px', color: 'var(--text-muted)' }}>
          📣 チームエージェントからの応援メッセージ:
        </div>
        <div style={{ fontSize: '14px', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: '1.5' }}>
          「計算ドリル全問クリア、すごいだトン！日々の計算練習が大切だトン。」— <span style={{ color: 'var(--color-kobaton)', fontWeight: 'bold' }}>コバトン</span>
        </div>
      </div>
    </div>
  );
};
