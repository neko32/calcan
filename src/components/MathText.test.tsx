import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MathText } from './MathText';

describe('MathText Component', () => {
  it('should render plain text correctly', () => {
    render(<MathText text="これは普通のテキストです。" />);
    expect(screen.getByText(/これは普通のテキストです。/)).toBeInTheDocument();
  });

  it('should parse and render inline math correctly', () => {
    render(<MathText text="行列 $A$ の加算" />);
    expect(screen.getByText(/行列/)).toBeInTheDocument();
    expect(screen.getByText(/の加算/)).toBeInTheDocument();
    
    // KaTeXモックの属性を確認
    const mathEl = screen.getByTestId('katex-mock');
    expect(mathEl).toBeInTheDocument();
    expect(mathEl).toHaveAttribute('data-display', 'false');
    expect(mathEl.textContent).toBe('A');
  });

  it('should parse and render block math correctly', () => {
    render(<MathText text={`次の式：
$$x + y = z$$`} />);
    expect(screen.getByText(/次の式：/)).toBeInTheDocument();
    
    const mathEl = screen.getByTestId('katex-mock');
    expect(mathEl).toBeInTheDocument();
    expect(mathEl).toHaveAttribute('data-display', 'true');
    expect(mathEl.textContent).toBe('x + y = z');
  });

  it('should handle multiline text and replace newlines with br tags', () => {
    const { container } = render(<MathText text={`1行目
2行目`} />);
    expect(screen.getByText(/1行目/)).toBeInTheDocument();
    expect(screen.getByText(/2行目/)).toBeInTheDocument();
    expect(container.querySelector('br')).toBeInTheDocument();
  });
});
