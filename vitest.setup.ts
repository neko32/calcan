import '@testing-library/jest-dom';

// KaTeX のモック (テスト環境でのエラー回避およびレンダリング確認のため)
// jsdom環境下でKaTeXが正常動作しない、あるいはフォント・スタイルが無いためのモック化
vi.mock('katex', () => ({
  default: {
    render: (math: string, el: HTMLElement, options?: any) => {
      el.innerHTML = `<span data-testid="katex-mock" data-display="${!!options?.displayMode}">${math}</span>`;
    }
  }
}));
