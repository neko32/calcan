import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathTextProps {
  text: string;
}

interface MathPart {
  type: 'text' | 'inline' | 'block';
  content: string;
}

const parseText = (text: string): MathPart[] => {
  const parts: MathPart[] = [];
  // $$...$$ (ブロック数式) または $...$ (インライン数式) をキャプチャする正規表現
  const regex = /(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/g;
  
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    const matchText = match[0];
    
    // マッチより前の通常のテキストを保存
    if (matchIndex > lastIndex) {
      parts.push({
        type: 'text',
        content: text.substring(lastIndex, matchIndex),
      });
    }
    
    // 数式タイプを識別して保存 (前後の中括弧等を除去)
    if (matchText.startsWith('$$') && matchText.endsWith('$$')) {
      parts.push({
        type: 'block',
        content: matchText.substring(2, matchText.length - 2).trim(),
      });
    } else if (matchText.startsWith('$') && matchText.endsWith('$')) {
      parts.push({
        type: 'inline',
        content: matchText.substring(1, matchText.length - 1).trim(),
      });
    }
    
    lastIndex = regex.lastIndex;
  }
  
  // 残った通常テキストを保存
  if (lastIndex < text.length) {
    parts.push({
      type: 'text',
      content: text.substring(lastIndex),
    });
  }
  
  return parts;
};

const MathElement: React.FC<{ content: string; displayMode: boolean }> = ({ content, displayMode }) => {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (elRef.current) {
      try {
        katex.render(content, elRef.current, {
          displayMode,
          throwOnError: false,
        });
      } catch (err) {
        console.error('KaTeX rendering error:', err);
        elRef.current.textContent = content;
      }
    }
  }, [content, displayMode]);

  return <span ref={elRef} />;
};

export const MathText: React.FC<MathTextProps> = ({ text }) => {
  const parts = parseText(text);

  return (
    <div style={{ lineHeight: '1.6', margin: '8px 0' }}>
      {parts.map((part, index) => {
        if (part.type === 'text') {
          // 改行を <br /> に置換してレンダリング
          return (
            <span key={index}>
              {part.content.split('\n').map((line, lineIndex, array) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  {lineIndex < array.length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
          );
        }
        
        const isBlock = part.type === 'block';
        return (
          <span 
            key={index} 
            style={{ 
              display: isBlock ? 'block' : 'inline-block', 
              margin: isBlock ? '12px 0' : '0 2px',
              textAlign: isBlock ? 'center' : 'inherit'
            }}
          >
            <MathElement content={part.content} displayMode={isBlock} />
          </span>
        );
      })}
    </div>
  );
};
