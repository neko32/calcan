import React, { useState } from 'react';
import { Play, BookOpen, Layers, Award } from 'lucide-react';

interface StartScreenProps {
  onStart: (type: 'all' | 'basic' | 'applied') => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [selectedType, setSelectedType] = useState<'all' | 'basic' | 'applied'>('all');

  const handleStart = () => {
    onStart(selectedType);
  };

  return (
    <div className="pop-in text-center" style={{ padding: '20px 10px' }}>
      {/* キャットフード缶(カルカン)と計算機をモチーフにしたプレミアムなヘッダー */}
      <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
        <div 
          style={{ 
            fontSize: '84px', 
            lineHeight: '1',
            filter: 'drop-shadow(0 8px 16px rgba(91, 40, 122, 0.15))' 
          }}
        >
          🐱🎨
        </div>
        <div 
          style={{ 
            position: 'absolute', 
            bottom: '-5px', 
            right: '-10px', 
            background: 'var(--kalkan-pink)',
            color: '#fff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          +
        </div>
      </div>

      <h1 
        style={{ 
          fontSize: '48px', 
          fontWeight: '800', 
          margin: '0 0 10px 0', 
          background: 'linear-gradient(135deg, var(--kalkan-purple) 0%, var(--kalkan-pink) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-1px'
        }}
      >
        calcan
      </h1>
      
      <p 
        style={{ 
          fontSize: '18px', 
          color: 'var(--text-muted)', 
          fontWeight: '500',
          margin: '0 0 35px 0' 
        }}
      >
        線形代数計算ドリル ➔ サクサク解けるフラッシュカードまる！
      </p>

      {/* コース選択カード */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          maxWidth: '460px', 
          margin: '0 auto 40px auto' 
        }}
      >
        <div 
          onClick={() => setSelectedType('all')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '20px',
            borderRadius: '16px',
            background: 'var(--card-bg)',
            border: `2px solid ${selectedType === 'all' ? 'var(--kalkan-pink)' : 'var(--border-color)'}`,
            boxShadow: selectedType === 'all' ? '0 10px 25px rgba(255, 117, 151, 0.15)' : 'var(--card-shadow)',
            cursor: 'pointer',
            transform: selectedType === 'all' ? 'scale(1.02)' : 'scale(1)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div 
            style={{ 
              background: 'rgba(91, 40, 122, 0.1)', 
              borderRadius: '12px', 
              padding: '12px',
              color: 'var(--kalkan-purple)'
            }}
          >
            <BookOpen size={24} />
          </div>
          <div style={{ textAlign: 'left', flex: 1 }}>
            <div style={{ fontWeight: '700', fontSize: '18px', color: 'var(--text-main)' }}>
              フルコース
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
              基礎から応用まで全20問をシャッフル出題
            </div>
          </div>
          <div 
            style={{ 
              width: '20px', 
              height: '20px', 
              borderRadius: '50%', 
              border: `2px solid ${selectedType === 'all' ? 'var(--kalkan-pink)' : 'var(--text-muted)'}`,
              background: selectedType === 'all' ? 'var(--kalkan-pink)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {selectedType === 'all' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
          </div>
        </div>

        <div 
          onClick={() => setSelectedType('basic')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '20px',
            borderRadius: '16px',
            background: 'var(--card-bg)',
            border: `2px solid ${selectedType === 'basic' ? 'var(--kalkan-pink)' : 'var(--border-color)'}`,
            boxShadow: selectedType === 'basic' ? '0 10px 25px rgba(255, 117, 151, 0.15)' : 'var(--card-shadow)',
            cursor: 'pointer',
            transform: selectedType === 'basic' ? 'scale(1.02)' : 'scale(1)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div 
            style={{ 
              background: 'rgba(76, 175, 80, 0.1)', 
              borderRadius: '12px', 
              padding: '12px',
              color: 'var(--color-kobaton)'
            }}
          >
            <Layers size={24} />
          </div>
          <div style={{ textAlign: 'left', flex: 1 }}>
            <div style={{ fontWeight: '700', fontSize: '18px', color: 'var(--text-main)' }}>
              基礎ドリル
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
              行列の加算減算、掛け算、行列式、逆行列、ランク（10問）
            </div>
          </div>
          <div 
            style={{ 
              width: '20px', 
              height: '20px', 
              borderRadius: '50%', 
              border: `2px solid ${selectedType === 'basic' ? 'var(--kalkan-pink)' : 'var(--text-muted)'}`,
              background: selectedType === 'basic' ? 'var(--kalkan-pink)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {selectedType === 'basic' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
          </div>
        </div>

        <div 
          onClick={() => setSelectedType('applied')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '20px',
            borderRadius: '16px',
            background: 'var(--card-bg)',
            border: `2px solid ${selectedType === 'applied' ? 'var(--kalkan-pink)' : 'var(--border-color)'}`,
            boxShadow: selectedType === 'applied' ? '0 10px 25px rgba(255, 117, 151, 0.15)' : 'var(--card-shadow)',
            cursor: 'pointer',
            transform: selectedType === 'applied' ? 'scale(1.02)' : 'scale(1)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div 
            style={{ 
              background: 'rgba(255, 183, 3, 0.1)', 
              borderRadius: '12px', 
              padding: '12px',
              color: 'var(--color-tochimaru)'
            }}
          >
            <Award size={24} />
          </div>
          <div style={{ textAlign: 'left', flex: 1 }}>
            <div style={{ fontWeight: '700', fontSize: '18px', color: 'var(--text-main)' }}>
              応用ドリル
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
              固有値、対角化判定、連立方程式、射影、Gram-Schmidt（10問）
            </div>
          </div>
          <div 
            style={{ 
              width: '20px', 
              height: '20px', 
              borderRadius: '50%', 
              border: `2px solid ${selectedType === 'applied' ? 'var(--kalkan-pink)' : 'var(--text-muted)'}`,
              background: selectedType === 'applied' ? 'var(--kalkan-pink)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {selectedType === 'applied' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
          </div>
        </div>
      </div>

      <button className="btn btn-primary" onClick={handleStart} style={{ padding: '16px 40px', fontSize: '18px' }}>
        <Play size={20} fill="#fff" />
        ドリルを開始するまる！
      </button>

      {/* キーボード操作ヘルプ */}
      <div 
        style={{ 
          marginTop: '40px', 
          fontSize: '13px', 
          color: 'var(--text-muted)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        <span>💻 <b>[Space]</b> または <b>[Enter]</b> キーでも操作できるまる</span>
      </div>
    </div>
  );
};
