export interface Question {
  id: number;
  type: 'basic' | 'applied';
  category: string;
  question: string;
  answer: string;
  solution: string;
}

export const questions: Question[] = [
  // 1. 基礎問題（10問）
  {
    id: 1,
    type: 'basic',
    category: '行列の加算・減算',
    question: `次の行列の加算 $A + B$ を計算せよ。
$$A = \\begin{pmatrix} 2 & -3 \\\\ 1 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} -1 & 5 \\\\ 0 & -2 \\end{pmatrix}$$`,
    answer: `$$A + B = \\begin{pmatrix} 1 & 2 \\\\ 1 & 2 \\end{pmatrix}$$`,
    solution: `行列の加算は、同じ位置（行・列）にある各成分同士を足し合わせます。
$$A + B = \\begin{pmatrix} 2 + (-1) & -3 + 5 \\\\ 1 + 0 & 4 + (-2) \\end{pmatrix} = \\begin{pmatrix} 1 & 2 \\\\ 1 & 2 \\end{pmatrix}$$`
  },
  {
    id: 2,
    type: 'basic',
    category: '行列の加算・減算',
    question: `次の行列の減算 $A - B$ を計算せよ。
$$A = \\begin{pmatrix} 3 & 0 & -2 \\\\ 1 & 5 & 4 \\\\ -1 & -3 & 2 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 1 & -1 & 3 \\\\ 2 & 4 & 0 \\\\ -2 & 1 & -3 \\end{pmatrix}$$`,
    answer: `$$A - B = \\begin{pmatrix} 2 & 1 & -5 \\\\ -1 & 1 & 4 \\\\ 1 & -4 & 5 \\end{pmatrix}$$`,
    solution: `行列の減算は、同じ位置（行・列）にある各成分同士を引き算します。
$$A - B = \\begin{pmatrix} 3-1 & 0-(-1) & -2-3 \\\\ 1-2 & 5-4 & 4-0 \\\\ -1-(-2) & -3-1 & 2-(-3) \\end{pmatrix} = \\begin{pmatrix} 2 & 1 & -5 \\\\ -1 & 1 & 4 \\\\ 1 & -4 & 5 \\end{pmatrix}$$`
  },
  {
    id: 3,
    type: 'basic',
    category: '行列の掛け算',
    question: `次の行列の積 $AB$ を求めよ。
$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & -1 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 4 \\end{pmatrix}$$`,
    answer: `$$AB = \\begin{pmatrix} 4 & 8 \\\\ 5 & -4 \\end{pmatrix}$$`,
    solution: `積 $AB$ の $(i, j)$ 成分は、行列 $A$ の第 $i$ 行ベクトルと行列 $B$ の第 $j$ 列ベクトルの内積です。
- $(1, 1)$ 成分: $1 \\cdot 2 + 2 \\cdot 1 = 4$
- $(1, 2)$ 成分: $1 \\cdot 0 + 2 \\cdot 4 = 8$
- $(2, 1)$ 成分: $3 \\cdot 2 + (-1) \\cdot 1 = 5$
- $(2, 2)$ 成分: $3 \\cdot 0 + (-1) \\cdot 4 = -4$
よって、
$$AB = \\begin{pmatrix} 4 & 8 \\\\ 5 & -4 \\end{pmatrix}$$`
  },
  {
    id: 4,
    type: 'basic',
    category: '行列の掛け算',
    question: `次の行列の積 $AB$ を求めよ。
$$A = \\begin{pmatrix} 2 & -1 & 3 \\\\ 0 & 1 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 1 & 2 \\\\ -3 & 0 \\\\ 1 & -1 \\end{pmatrix}$$`,
    answer: `$$AB = \\begin{pmatrix} 8 & 1 \\\\ 1 & -4 \\end{pmatrix}$$`,
    solution: `$2 \\times 3$ 行列と $3 \\times 2$ 行列の積は $2 \\times 2$ 行列になります。
- $(1, 1)$ 成分: $2 \\cdot 1 + (-1) \\cdot (-3) + 3 \\cdot 1 = 2 + 3 + 3 = 8$
- $(1, 2)$ 成分: $2 \\cdot 2 + (-1) \\cdot 0 + 3 \\cdot (-1) = 4 - 3 = 1$
- $(2, 1)$ 成分: $0 \\cdot 1 + 1 \\cdot (-3) + 4 \\cdot 1 = -3 + 4 = 1$
- $(2, 2)$ 成分: $0 \\cdot 2 + 1 \\cdot 0 + 4 \\cdot (-1) = -4$
よって、
$$AB = \\begin{pmatrix} 8 & 1 \\\\ 1 & -4 \\end{pmatrix}$$`
  },
  {
    id: 5,
    type: 'basic',
    category: '行列の掛け算',
    question: `次の行列の積 $AB$ を求めよ。
$$A = \\begin{pmatrix} 1 & 2 \\\\ -1 & 0 \\\\ 3 & -2 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}$$`,
    answer: `$$AB = \\begin{pmatrix} 4 & 5 \\\\ -2 & 1 \\\\ 4 & -9 \\end{pmatrix}$$`,
    solution: `$3 \\times 2$ 行列と $2 \\times 2$ 行列の積は $3 \\times 2$ 行列になります。
- $(1, 1)$ 成分: $1 \\cdot 2 + 2 \\cdot 1 = 4$
- $(1, 2)$ 成分: $1 \\cdot (-1) + 2 \\cdot 3 = 5$
- $(2, 1)$ 成分: $(-1) \\cdot 2 + 0 \\cdot 1 = -2$
- $(2, 2)$ 成分: $(-1) \\cdot (-1) + 0 \\cdot 3 = 1$
- $(3, 1)$ 成分: $3 \\cdot 2 + (-2) \\cdot 1 = 4$
- $(3, 2)$ 成分: $3 \\cdot (-1) + (-2) \\cdot 3 = -9$
よって、
$$AB = \\begin{pmatrix} 4 & 5 \\\\ -2 & 1 \\\\ 4 & -9 \\end{pmatrix}$$`
  },
  {
    id: 6,
    type: 'basic',
    category: '行列式',
    question: `次の行列 $A$ の行列式 $\\det(A)$ を求めよ。
$$A = \\begin{pmatrix} 3 & 5 \\\\ 2 & 4 \\end{pmatrix}$$`,
    answer: `$$\\det(A) = 2$$`,
    solution: `$2 \\times 2$ 行列の行列式公式 $\\det(A) = ad - bc$ を用います。
$$\\det(A) = 3 \\cdot 4 - 5 \\cdot 2 = 12 - 10 = 2$$`
  },
  {
    id: 7,
    type: 'basic',
    category: '行列式',
    question: `次の行列 $A$ の行列式 $\\det(A)$ を求めよ。
$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 1 & 0 & 2 \\end{pmatrix}$$`,
    answer: `$$\\det(A) = 6$$`,
    solution: `第1列に関する余因子展開を用いて計算します。
$$\\det(A) = 1 \\cdot \\begin{vmatrix} 4 & 5 \\\\ 0 & 2 \\end{vmatrix} - 0 \\cdot \\begin{vmatrix} 2 & 3 \\\\ 0 & 2 \\end{vmatrix} + 1 \\cdot \\begin{vmatrix} 2 & 3 \\\\ 4 & 5 \\end{vmatrix}$$
$$= 1 \\cdot (4 \\cdot 2 - 5 \\cdot 0) + 1 \\cdot (2 \\cdot 5 - 3 \\cdot 4)$$
$$= 1 \\cdot 8 + 1 \\cdot (10 - 12) = 8 - 2 = 6$$
（サラスの公式を用いても同様に $1 \\cdot 4 \\cdot 2 + 2 \\cdot 5 \\cdot 1 + 3 \\cdot 0 \\cdot 0 - (3 \\cdot 4 \\cdot 1 + 1 \\cdot 5 \\cdot 0 + 2 \\cdot 0 \\cdot 2) = 18 - 12 = 6$ と求まります）`
  },
  {
    id: 8,
    type: 'basic',
    category: '逆行列',
    question: `次の行列 $A$ の逆行列 $A^{-1}$ を求めよ。
$$A = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}$$`,
    answer: `$$A^{-1} = \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$$`,
    solution: `$2 \\times 2$ 行列の逆行列の公式 $A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$ を用います。
$$\\det(A) = 2 \\cdot 3 - 5 \\cdot 1 = 1$$
行列式が 1 なので、逆行列は公式より直接以下のようになります。
$$A^{-1} = \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$$`
  },
  {
    id: 9,
    type: 'basic',
    category: '逆行列',
    question: `次の行列 $A$ の逆行列 $A^{-1}$ が存在するか判定し、存在する場合は求めよ。
$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 1 & 2 & 4 \\end{pmatrix}$$`,
    answer: `逆行列は存在し、
$$A^{-1} = \\begin{pmatrix} 0 & -2 & 1 \\\\ 2 & 1 & -2 \\\\ -1 & 0 & 1 \\end{pmatrix}$$`,
    solution: `まず行列式 $\\det(A)$ を求めます。
$$\\det(A) = 1 \\cdot (4 - 4) - 2 \\cdot (0 - 2) + 3 \\cdot (0 - 1) = 0 + 4 - 3 = 1 \\neq 0$$
$\\det(A) \\neq 0$ であるため、逆行列は存在します。
掃き出し法 $[A \\mid I] \\to [I \\mid A^{-1}]$ を用いて計算します。
$$\\begin{pmatrix} 1 & 2 & 3 & \\mid & 1 & 0 & 0 \\\\ 0 & 1 & 2 & \\mid & 0 & 1 & 0 \\\\ 1 & 2 & 4 & \\mid & 0 & 0 & 1 \\end{pmatrix}$$
第3行から第1行を引きます。
$$\\begin{pmatrix} 1 & 2 & 3 & \\mid & 1 & 0 & 0 \\\\ 0 & 1 & 2 & \\mid & 0 & 1 & 0 \\\\ 0 & 0 & 1 & \\mid & -1 & 0 & 1 \\end{pmatrix}$$
第2行から第3行の2倍を引き、第1行から第3行の3倍を引きます。
$$\\begin{pmatrix} 1 & 2 & 0 & \\mid & 4 & 0 & -3 \\\\ 0 & 1 & 0 & \\mid & 2 & 1 & -2 \\\\ 0 & 0 & 1 & \\mid & -1 & 0 & 1 \\end{pmatrix}$$
最後に第1行から第2行の2倍を引きます。
$$\\begin{pmatrix} 1 & 0 & 0 & \\mid & 0 & -2 & 1 \\\\ 0 & 1 & 0 & \\mid & 2 & 1 & -2 \\\\ 0 & 0 & 1 & \\mid & -1 & 0 & 1 \\end{pmatrix}$$
右半分の行列が逆行列となります。
$$A^{-1} = \\begin{pmatrix} 0 & -2 & 1 \\\\ 2 & 1 & -2 \\\\ -1 & 0 & 1 \\end{pmatrix}$$`
  },
  {
    id: 10,
    type: 'basic',
    category: 'ランク算出',
    question: `次の行列 $A$ のランク（階数） $\\text{rank}(A)$ を求めよ。
$$A = \\begin{pmatrix} 1 & -1 & 2 \\\\ 2 & 1 & -1 \\\\ 1 & 2 & -3 \\end{pmatrix}$$`,
    answer: `$$\\text{rank}(A) = 2$$`,
    solution: `行基本変形を行い、階段行列に変形します。
$$\\begin{pmatrix} 1 & -1 & 2 \\\\ 2 & 1 & -1 \\\\ 1 & 2 & -3 \\end{pmatrix}$$
第2行から第1行の2倍を引き、第3行から第1行を引きます。
$$\\begin{pmatrix} 1 & -1 & 2 \\\\ 0 & 3 & -5 \\\\ 0 & 3 & -5 \\end{pmatrix}$$
第3行から第2行を引きます。
$$\\begin{pmatrix} 1 & -1 & 2 \\\\ 0 & 3 & -5 \\\\ 0 & 0 & 0 \\end{pmatrix}$$
ゼロ行でない行（主成分を持つ行）の数は 2つ です。
よって、行列 $A$ のランクは 2 になります。
$$\\text{rank}(A) = 2$$`
  },

  // 2. 応用問題（10問）
  {
    id: 11,
    type: 'applied',
    category: '固有値・固有ベクトル',
    question: `次の行列 $A$ の固有値 $\\lambda$ と、それぞれの固有値に対応する固有ベクトルを求めよ。
$$A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 2 \\end{pmatrix}$$`,
    answer: `固有値 $\\lambda = 4, 1$
固有ベクトル:
- $\\lambda = 4$ のとき、 $c_1 \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} \\quad (c_1 \\neq 0)$
- $\\lambda = 1$ のとき、 $c_2 \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\quad (c_2 \\neq 0)$`,
    solution: `固有多項式 $\\det(\\lambda I - A) = 0$ を解きます。
$$\\det \\begin{pmatrix} \\lambda-3 & -2 \\\\ -1 & \\lambda-2 \\end{pmatrix} = 0$$
$$(\\lambda-3)(\\lambda-2) - 2 = \\lambda^2 - 5\\lambda + 4 = (\\lambda-4)(\\lambda-1) = 0$$
よって、固有値は $\\lambda = 4, 1$ です。

- $\\lambda = 4$ のとき:
$A - 4I = \\begin{pmatrix} -1 & 2 \\\\ 1 & -2 \\end{pmatrix}$
$(A - 4I)v = 0 \\implies -x + 2y = 0 \\implies x = 2y$
固有ベクトルは $c_1 \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} \\quad (c_1 \\neq 0)$

- $\\lambda = 1$ のとき:
$A - I = \\begin{pmatrix} 2 & 2 \\\\ 1 & 1 \\end{pmatrix}$
$(A - I)v = 0 \\implies x + y = 0 \\implies x = -y$
固有ベクトルは $c_2 \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\quad (c_2 \\neq 0)$`
  },
  {
    id: 12,
    type: 'applied',
    category: '固有値・固有ベクトル',
    question: `次の行列 $A$ の固有値 $\\lambda$ （重解を含む）と、対応する固有ベクトルを求めよ。
$$A = \\begin{pmatrix} 3 & 1 \\\\ -1 & 1 \\end{pmatrix}$$`,
    answer: `固有値 $\\lambda = 2$ （重複度 2）
固有ベクトル:
- $c \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\quad (c \\neq 0)$`,
    solution: `固有多項式 $\\det(\\lambda I - A) = 0$ を解きます。
$$\\det \\begin{pmatrix} \\lambda-3 & -1 \\\\ 1 & \\lambda-1 \\end{pmatrix} = 0$$
$$(\\lambda-3)(\\lambda-1) - (-1) = \\lambda^2 - 4\\lambda + 4 = (\\lambda-2)^2 = 0$$
よって、固有値は $\\lambda = 2$（重解）です。

- $\\lambda = 2$ のとき:
$A - 2I = \\begin{pmatrix} 1 & 1 \\\\ -1 & -1 \\end{pmatrix}$
$(A - 2I)v = 0 \\implies x + y = 0 \\implies x = -y$
固有ベクトルは $c \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\quad (c \\neq 0)$ となります。`
  },
  {
    id: 13,
    type: 'applied',
    category: '固有値・固有ベクトル',
    question: `次の対称行列 $A$ の固有値 $\\lambda$ と、それぞれの固有値に対応する固有ベクトルを求めよ。
$$A = \\begin{pmatrix} 0 & 2 \\\\ 2 & 3 \\end{pmatrix}$$`,
    answer: `固有値 $\\lambda = 4, -1$
固有ベクトル:
- $\\lambda = 4$ のとき、 $c_1 \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} \\quad (c_1 \\neq 0)$
- $\\lambda = -1$ のとき、 $c_2 \\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} \\quad (c_2 \\neq 0)$`,
    solution: `固有多項式 $\\det(\\lambda I - A) = 0$ を解きます。
$$\\det \\begin{pmatrix} \\lambda & -2 \\\\ -2 & \\lambda-3 \\end{pmatrix} = 0$$
$$\\lambda(\\lambda-3) - 4 = \\lambda^2 - 3\\lambda - 4 = (\\lambda-4)(\\lambda+1) = 0$$
よって、固有値は $\\lambda = 4, -1$ です。

- $\\lambda = 4$ のとき:
$A - 4I = \\begin{pmatrix} -4 & 2 \\\\ 2 & -1 \\end{pmatrix}$
$(A - 4I)v = 0 \\implies 2x - y = 0 \\implies y = 2x$
固有ベクトルは $c_1 \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} \\quad (c_1 \\neq 0)$

- $\\lambda = -1$ のとき:
$A + I = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$
$(A + I)v = 0 \\implies x + 2y = 0 \\implies x = -2y$
固有ベクトルは $c_2 \\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} \\quad (c_2 \\neq 0)$
（対称行列なので、異なる固有値に対応する固有ベクトル $\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ と $\\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix}$ は互いに直交します）`
  },
  {
    id: 14,
    type: 'applied',
    category: '対角化判定',
    question: `次の行列 $A$ が対角化可能であるか判定せよ。対角化可能である場合は、対角化を行う行列 $P$ と対角化後の行列 $D$ を求めよ。
$$A = \\begin{pmatrix} 3 & 1 \\\\ -1 & 1 \\end{pmatrix}$$`,
    answer: `対角化不可能`,
    solution: `行列の対角化可能性は、固有値の重複度（代数的重複度）と固有空間の次元（幾何学的重複度）が一致するかどうかで判定できます。
固有値問題（問題12）より、固有値は $\\lambda = 2$ (重解、重複度 2) です。
固有空間 $V_2 = \\ker(A - 2I)$ の次元を調べます。
$$A - 2I = \\begin{pmatrix} 1 & 1 \\\\ -1 & -1 \\end{pmatrix}$$
この行列のランク（階数）は 1 です。
固有空間の次元は $n - \\text{rank}(A - 2I) = 2 - 1 = 1$ となります。
代数的重複度 (2) に対して幾何学的重複度 (1) が小さいため、一次独立な固有ベクトルを2本取ることができず、**対角化不可能**です。`
  },
  {
    id: 15,
    type: 'applied',
    category: '対角化判定',
    question: `次の行列 $A$ が対角化可能であるか判定せよ。対角化可能である場合は、対角化を行う行列 $P$ と対角化後の行列 $D$ を求めよ。
$$A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 2 \\end{pmatrix}$$`,
    answer: `対角化可能。
$$P = \\begin{pmatrix} 1 & 3 \\\\ 1 & -2 \\end{pmatrix}, \\quad D = \\begin{pmatrix} 4 & 0 \\\\ 0 & -1 \\end{pmatrix}$$
（※ $P$ や $D$ の列・成分の順序は任意）`,
    solution: `まず固有値を求めます。
$$\\det(\\lambda I - A) = \\det \\begin{pmatrix} \\lambda-1 & -3 \\\\ -2 & \\lambda-2 \\end{pmatrix} = 0$$
$$(\\lambda-1)(\\lambda-2) - 6 = \\lambda^2 - 3\\lambda - 4 = (\\lambda-4)(\\lambda+1) = 0$$
固有値は $\\lambda = 4, -1$ です。
$2 \\times 2$ 行列が異なる 2つの実数固有値を持つため、この時点で**対角化可能**です。

それぞれの固有ベクトルを求めます。
- $\\lambda = 4$ のとき:
$A - 4I = \\begin{pmatrix} -3 & 3 \\\\ 2 & -2 \\end{pmatrix} \\implies -x + y = 0 \\implies v_1 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$
- $\\lambda = -1$ のとき:
$A + I = \\begin{pmatrix} 2 & 3 \\\\ 2 & 3 \\end{pmatrix} \\implies 2x + 3y = 0 \\implies v_2 = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$

これらを並べて対角化行列 $P$ とし、対応する固有値を対角成分に並べた行列 $D$ を作ります。
$$P = \\begin{pmatrix} 1 & 3 \\\\ 1 & -2 \\end{pmatrix}, \\quad D = \\begin{pmatrix} 4 & 0 \\\\ 0 & -1 \\end{pmatrix}$$
このとき $P^{-1}AP = D$ が成り立ちます。`
  },
  {
    id: 16,
    type: 'applied',
    category: '連立方程式 Ax=b を行列で解く',
    question: `次の連立一次方程式を、行列形式 $Ax=b$ の逆行列を用いて解け。
$$\\begin{cases} 2x + 5y = 3 \\\\ x + 3y = 2 \\end{cases}$$`,
    answer: `$$x = -1, \\quad y = 1$$`,
    solution: `連立一次方程式を行列形式で表すと、以下のようになります。
$$\\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$$
係数行列 $A = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}$ の逆行列 $A^{-1}$ を左から掛けます。
逆行列は問題8より、
$$A^{-1} = \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$$
です。よって解は、
$$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = A^{-1} b = \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 3\\cdot3 + (-5)\\cdot2 \\\\ (-1)\\cdot3 + 2\\cdot2 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 1 \\end{pmatrix}$$
したがって、 $x = -1, y = 1$ となります。`
  },
  {
    id: 17,
    type: 'applied',
    category: '連立方程式 Ax=b を行列で解く',
    question: `次の連立一次方程式を解け。
$$\\begin{cases} x + 2y + 3z = 2 \\\\ y + 2z = 1 \\\\ x + 2y + 4z = 3 \\end{cases}$$`,
    answer: `$$x = 1, \\quad y = -1, \\quad z = 1$$`,
    solution: `行列形式 $Ax = b$ とおくと、
$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 1 & 2 & 4 \\end{pmatrix}, \\quad b = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}, \\quad x = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$$
係数行列 $A$ の逆行列 $A^{-1}$ を用いて解きます。
問題9より、逆行列は、
$$A^{-1} = \\begin{pmatrix} 0 & -2 & 1 \\\\ 2 & 1 & -2 \\\\ -1 & 0 & 1 \\end{pmatrix}$$
です。両辺に左から $A^{-1}$ を掛けます。
$$\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} 0 & -2 & 1 \\\\ 2 & 1 & -2 \\\\ -1 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 0\\cdot2 + (-2)\\cdot1 + 1\\cdot3 \\\\ 2\\cdot2 + 1\\cdot1 + (-2)\\cdot3 \\\\ (-1)\\cdot2 + 0\\cdot1 + 1\\cdot3 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix}$$
よって、 $x = 1, y = -1, z = 1$ です。`
  },
  {
    id: 18,
    type: 'applied',
    category: '射影・直交成分',
    question: `ベクトル $x = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ の、ベクトル $v = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ 方向への射影ベクトル $p$ と、その直交成分 $w$ を求めよ。`,
    answer: `射影ベクトル $$p = \\begin{pmatrix} 11/5 \\\\ 22/5 \\end{pmatrix}$$, 直交成分 $$w = \\begin{pmatrix} 4/5 \\\\ -2/5 \\end{pmatrix}$$`,
    solution: `射影ベクトル $p$ は次の公式で求められます。
$$p = \\frac{x \\cdot v}{\\|v\\|^2} v$$
- 内積 $x \\cdot v = 3 \\cdot 1 + 4 \\cdot 2 = 3 + 8 = 11$
- ノルムの2乗 $\\|v\\|^2 = 1^2 + 2^2 = 5$
よって、
$$p = \\frac{11}{5} \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 11/5 \\\\ 22/5 \\end{pmatrix}$$

直交成分 $w$ は元のベクトルから射影ベクトルを引くことで求まります。
$$w = x - p = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} - \\begin{pmatrix} 11/5 \\\\ 22/5 \\end{pmatrix} = \\begin{pmatrix} 15/5 - 11/5 \\\\ 20/5 - 22/5 \\end{pmatrix} = \\begin{pmatrix} 4/5 \\\\ -2/5 \\end{pmatrix}$$
（確認: $p \\cdot w = \\frac{11}{5} \\cdot \\frac{4}{5} + \\frac{22}{5} \\cdot \\left(-\\frac{2}{5}\\right) = \\frac{44}{25} - \\frac{44}{25} = 0$ より、射影ベクトルと直交成分は直交しています）`
  },
  {
    id: 19,
    type: 'applied',
    category: '射影・直交成分',
    question: `ベクトル $x = \\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$ の、ベクトル $v = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$ 方向への射影ベクトル $p$ と、その直交成分 $w$ を求めよ。`,
    answer: `射影ベクトル $$p = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$$, 直交成分 $$w = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$$`,
    solution: `射影ベクトル $p$ を求めます。
- 内積 $x \\cdot v = 4 \\cdot 3 + 2 \\cdot (-1) = 12 - 2 = 10$
- ノルムの2乗 $\\|v\\|^2 = 3^2 + (-1)^2 = 9 + 1 = 10$
よって、
$$p = \\frac{10}{10} v = v = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$$

直交成分 $w$ は:
$$w = x - p = \\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix} - \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$$
（確認: $p \\cdot w = 3 \\cdot 1 + (-1) \\cdot 3 = 3 - 3 = 0$ より直交しています）`
  },
  {
    id: 20,
    type: 'applied',
    category: 'Gram-Schmidt',
    question: `次の一次独立なベクトルの組 $u_1, u_2$ をグラム・シュミットの直交化法により正規直交化し、正規直交基底 $q_1, q_2$ を求めよ。
$$u_1 = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}, \\quad u_2 = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$$`,
    answer: `$$q_1 = \\begin{pmatrix} 3/5 \\\\ 4/5 \\end{pmatrix}, \\quad q_2 = \\begin{pmatrix} -4/5 \\\\ 3/5 \\end{pmatrix}$$`,
    solution: `グラム・シュミットの直交化の手順に従って計算します。

1. **第1のベクトル $q_1$ を求める**
$u_1$ をそのまま用いて正規化します。
$$\\|u_1\\| = \\sqrt{3^2 + 4^2} = 5$$
$$q_1 = \\frac{u_1}{\\|u_1\\|} = \\begin{pmatrix} 3/5 \\\\ 4/5 \\end{pmatrix}$$

2. **第2のベクトル $q_2$ を求める**
$u_2$ から $q_1$ 方向の射影成分を引きます。
$$v_2 = u_2 - (u_2 \\cdot q_1)q_1$$
- 内積 $u_2 \\cdot q_1 = 1 \\cdot \\frac{3}{5} + 3 \\cdot \\frac{4}{5} = \\frac{15}{5} = 3$
$$v_2 = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} - 3 \\begin{pmatrix} 3/5 \\\\ 4/5 \\end{pmatrix} = \\begin{pmatrix} 1 - 9/5 \\\\ 3 - 12/5 \\end{pmatrix} = \\begin{pmatrix} -4/5 \\\\ 3/5 \\end{pmatrix}$$
$v_2$ のノルム（長さ）を計算します。
$$\\|v_2\\| = \\sqrt{\\left(-\\frac{4}{5}\\right)^2 + \\left(\\frac{3}{5}\\right)^2} = \\sqrt{\\frac{16+9}{25}} = 1$$
すでにノルムが 1 になっているので、正規化は不要で $q_2 = v_2$ です。
$$q_2 = \\begin{pmatrix} -4/5 \\\\ 3/5 \\end{pmatrix}$$

よって、求める正規直交基底は、
$$q_1 = \\begin{pmatrix} 3/5 \\\\ 4/5 \\end{pmatrix}, \\quad q_2 = \\begin{pmatrix} -4/5 \\\\ 3/5 \\end{pmatrix}$$`
  }
];
