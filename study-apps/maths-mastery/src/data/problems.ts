import { Problem } from '../types';

export const problems: Problem[] = [
  // Advanced - Calculus
  {
    id: 'prob-adv-c1-001',
    subject: 'advanced',
    topic: 'Calculus',
    difficulty: 2,
    question: 'Find $\\frac{dy}{dx}$ if $y = (3x^2 + 1)^5$',
    hints: [
      'This is a composite function - use the chain rule',
      'Let u = 3x² + 1, find dy/du and du/dx',
    ],
    solution: {
      steps: [
        'Let $u = 3x^2 + 1$, so $y = u^5$',
        '$\\frac{dy}{du} = 5u^4$',
        '$\\frac{du}{dx} = 6x$',
        '$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} = 5u^4 \\cdot 6x$',
        '$= 5(3x^2 + 1)^4 \\cdot 6x$',
      ],
      finalAnswer: '$\\frac{dy}{dx} = 30x(3x^2 + 1)^4$',
    },
    relatedFormulas: ['adv-c1-003'],
  },
  {
    id: 'prob-adv-c1-002',
    subject: 'advanced',
    topic: 'Calculus',
    difficulty: 3,
    question: 'Differentiate $y = \\frac{x^2}{\\sin x}$',
    hints: [
      'This is a quotient - use the quotient rule',
      'Remember: (low d-high minus high d-low) over low squared',
    ],
    solution: {
      steps: [
        'Using quotient rule: $\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u\'v - uv\'}{v^2}$',
        'Let $u = x^2$, $v = \\sin x$',
        '$u\' = 2x$, $v\' = \\cos x$',
        '$\\frac{dy}{dx} = \\frac{2x \\cdot \\sin x - x^2 \\cdot \\cos x}{\\sin^2 x}$',
      ],
      finalAnswer: '$\\frac{dy}{dx} = \\frac{2x\\sin x - x^2\\cos x}{\\sin^2 x}$ or $\\frac{x(2\\sin x - x\\cos x)}{\\sin^2 x}$',
    },
    relatedFormulas: ['adv-c1-005', 'adv-c1-006'],
  },
  {
    id: 'prob-adv-c1-003',
    subject: 'advanced',
    topic: 'Calculus',
    difficulty: 2,
    question: 'Find the derivative of $y = e^{3x}\\cos x$',
    hints: [
      'This is a product of two functions',
      'Use the product rule: (uv)\' = u\'v + uv\'',
    ],
    solution: {
      steps: [
        'Using product rule: $\\frac{d}{dx}[uv] = u\'v + uv\'$',
        'Let $u = e^{3x}$, $v = \\cos x$',
        '$u\' = 3e^{3x}$, $v\' = -\\sin x$',
        '$\\frac{dy}{dx} = 3e^{3x}\\cos x + e^{3x}(-\\sin x)$',
        '$= e^{3x}(3\\cos x - \\sin x)$',
      ],
      finalAnswer: '$\\frac{dy}{dx} = e^{3x}(3\\cos x - \\sin x)$',
    },
    relatedFormulas: ['adv-c1-004', 'adv-c1-006', 'adv-e1-003'],
  },
  {
    id: 'prob-adv-c2-001',
    subject: 'advanced',
    topic: 'Calculus',
    difficulty: 3,
    question: 'Find the stationary points of $f(x) = x^3 - 6x^2 + 9x + 1$ and determine their nature.',
    hints: [
      'Find where f\'(x) = 0',
      'Use the second derivative test to determine if each point is a max, min, or inflection',
    ],
    solution: {
      steps: [
        '$f\'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$',
        'Stationary points when $f\'(x) = 0$: $x = 1$ or $x = 3$',
        '$f(1) = 1 - 6 + 9 + 1 = 5$, so $(1, 5)$ is a stationary point',
        '$f(3) = 27 - 54 + 27 + 1 = 1$, so $(3, 1)$ is a stationary point',
        '$f\'\'(x) = 6x - 12$',
        '$f\'\'(1) = 6 - 12 = -6 < 0$ → local maximum at $(1, 5)$',
        '$f\'\'(3) = 18 - 12 = 6 > 0$ → local minimum at $(3, 1)$',
      ],
      finalAnswer: 'Local maximum at $(1, 5)$, local minimum at $(3, 1)$',
    },
    relatedFormulas: ['adv-c2-001'],
  },
  {
    id: 'prob-adv-c4-001',
    subject: 'advanced',
    topic: 'Calculus',
    difficulty: 2,
    question: 'Evaluate $\\int_0^2 (3x^2 - 2x + 1)\\,dx$',
    hints: [
      'Integrate term by term using the power rule',
      'Then apply the definite integral: F(b) - F(a)',
    ],
    solution: {
      steps: [
        '$\\int (3x^2 - 2x + 1)\\,dx = x^3 - x^2 + x + C$',
        'Evaluating from 0 to 2:',
        '$[x^3 - x^2 + x]_0^2$',
        '$= (8 - 4 + 2) - (0 - 0 + 0)$',
        '$= 6 - 0$',
      ],
      finalAnswer: '$\\int_0^2 (3x^2 - 2x + 1)\\,dx = 6$',
    },
    relatedFormulas: ['adv-c4-001', 'adv-c4-003'],
  },
  {
    id: 'prob-adv-c4-002',
    subject: 'advanced',
    topic: 'Calculus',
    difficulty: 3,
    question: 'Find the area enclosed between $y = x^2$ and $y = 2x$.',
    hints: [
      'First find the intersection points',
      'Then integrate (top curve - bottom curve)',
    ],
    solution: {
      steps: [
        'Find intersections: $x^2 = 2x$',
        '$x^2 - 2x = 0 \\Rightarrow x(x-2) = 0$',
        '$x = 0$ or $x = 2$',
        'Between $x = 0$ and $x = 2$: $2x > x^2$ (line is above parabola)',
        'Area $= \\int_0^2 (2x - x^2)\\,dx$',
        '$= [x^2 - \\frac{x^3}{3}]_0^2$',
        '$= (4 - \\frac{8}{3}) - (0)$',
        '$= \\frac{12 - 8}{3} = \\frac{4}{3}$',
      ],
      finalAnswer: 'Area $= \\frac{4}{3}$ square units',
    },
    relatedFormulas: ['adv-c4-004'],
  },

  // Advanced - Trigonometry
  {
    id: 'prob-adv-t1-001',
    subject: 'advanced',
    topic: 'Trigonometry',
    difficulty: 2,
    question: 'Solve $2\\sin^2\\theta - \\sin\\theta - 1 = 0$ for $0 \\leq \\theta \\leq 2\\pi$.',
    hints: [
      'Let u = sin θ to make it a quadratic',
      'Factorize and solve for sin θ, then find θ',
    ],
    solution: {
      steps: [
        'Let $u = \\sin\\theta$: $2u^2 - u - 1 = 0$',
        '$(2u + 1)(u - 1) = 0$',
        '$u = -\\frac{1}{2}$ or $u = 1$',
        '$\\sin\\theta = -\\frac{1}{2}$: $\\theta = \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$',
        '$\\sin\\theta = 1$: $\\theta = \\frac{\\pi}{2}$',
      ],
      finalAnswer: '$\\theta = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$',
    },
    relatedFormulas: ['adv-t1-001'],
  },
  {
    id: 'prob-adv-t2-001',
    subject: 'advanced',
    topic: 'Trigonometry',
    difficulty: 3,
    question: 'Simplify $\\cos 2\\theta + \\sin^2\\theta$.',
    hints: [
      'Use a form of the double angle formula for cos 2θ',
      'Choose the form that involves sin²θ',
    ],
    solution: {
      steps: [
        'Use $\\cos 2\\theta = 1 - 2\\sin^2\\theta$',
        '$\\cos 2\\theta + \\sin^2\\theta = (1 - 2\\sin^2\\theta) + \\sin^2\\theta$',
        '$= 1 - 2\\sin^2\\theta + \\sin^2\\theta$',
        '$= 1 - \\sin^2\\theta$',
        '$= \\cos^2\\theta$',
      ],
      finalAnswer: '$\\cos 2\\theta + \\sin^2\\theta = \\cos^2\\theta$',
    },
    relatedFormulas: ['adv-t2-002', 'adv-t1-001'],
  },

  // Advanced - Exponentials and Logs
  {
    id: 'prob-adv-e1-001',
    subject: 'advanced',
    topic: 'Exponentials & Logs',
    difficulty: 2,
    question: 'Solve $2^{x+1} = 8^{x-1}$.',
    hints: [
      'Express both sides with the same base',
      '8 = 2³',
    ],
    solution: {
      steps: [
        'Write $8 = 2^3$: $2^{x+1} = (2^3)^{x-1}$',
        '$2^{x+1} = 2^{3(x-1)}$',
        '$2^{x+1} = 2^{3x-3}$',
        'Equate exponents: $x + 1 = 3x - 3$',
        '$1 + 3 = 3x - x$',
        '$4 = 2x$',
      ],
      finalAnswer: '$x = 2$',
    },
    relatedFormulas: ['adv-e1-001'],
  },
  {
    id: 'prob-adv-e1-002',
    subject: 'advanced',
    topic: 'Exponentials & Logs',
    difficulty: 3,
    question: 'Find $\\int \\frac{2x + 1}{x^2 + x - 1}\\,dx$.',
    hints: [
      'Check if the numerator is related to the derivative of the denominator',
      'Use the ln form of integration',
    ],
    solution: {
      steps: [
        'Let $u = x^2 + x - 1$',
        '$\\frac{du}{dx} = 2x + 1$',
        'So $du = (2x + 1)\\,dx$',
        '$\\int \\frac{2x + 1}{x^2 + x - 1}\\,dx = \\int \\frac{1}{u}\\,du$',
        '$= \\ln|u| + C$',
      ],
      finalAnswer: '$\\int \\frac{2x + 1}{x^2 + x - 1}\\,dx = \\ln|x^2 + x - 1| + C$',
    },
    relatedFormulas: ['adv-e1-005'],
  },

  // Extension 1 - Inverse Trig
  {
    id: 'prob-ext1-t1-001',
    subject: 'ext1',
    topic: 'Inverse Trig',
    difficulty: 3,
    question: 'Differentiate $y = \\tan^{-1}(3x)$.',
    hints: [
      'Use the chain rule with the inverse tan derivative',
      'd/dx(tan⁻¹x) = 1/(1+x²)',
    ],
    solution: {
      steps: [
        'Using chain rule with $\\frac{d}{dx}\\tan^{-1}u = \\frac{1}{1+u^2} \\cdot \\frac{du}{dx}$',
        'Let $u = 3x$, so $\\frac{du}{dx} = 3$',
        '$\\frac{dy}{dx} = \\frac{1}{1+(3x)^2} \\cdot 3$',
        '$= \\frac{3}{1+9x^2}$',
      ],
      finalAnswer: '$\\frac{dy}{dx} = \\frac{3}{1+9x^2}$',
    },
    relatedFormulas: ['ext1-t1-002'],
  },
  {
    id: 'prob-ext1-t1-002',
    subject: 'ext1',
    topic: 'Inverse Trig',
    difficulty: 3,
    question: 'Evaluate $\\int_0^1 \\frac{1}{\\sqrt{4-x^2}}\\,dx$.',
    hints: [
      'This is of the form ∫1/√(a²-x²) dx',
      'The answer involves sin⁻¹(x/a)',
    ],
    solution: {
      steps: [
        'Using $\\int \\frac{1}{\\sqrt{a^2-x^2}}\\,dx = \\sin^{-1}\\frac{x}{a} + C$',
        'Here $a^2 = 4$, so $a = 2$',
        '$\\int_0^1 \\frac{1}{\\sqrt{4-x^2}}\\,dx = [\\sin^{-1}\\frac{x}{2}]_0^1$',
        '$= \\sin^{-1}\\frac{1}{2} - \\sin^{-1}0$',
        '$= \\frac{\\pi}{6} - 0$',
      ],
      finalAnswer: '$\\int_0^1 \\frac{1}{\\sqrt{4-x^2}}\\,dx = \\frac{\\pi}{6}$',
    },
    relatedFormulas: ['ext1-t1-003'],
  },

  // Extension 1 - Polynomials
  {
    id: 'prob-ext1-f2-001',
    subject: 'ext1',
    topic: 'Polynomials',
    difficulty: 3,
    question: 'If the roots of $x^3 - 2x^2 - 5x + 6 = 0$ are $\\alpha, \\beta, \\gamma$, find $\\alpha^2 + \\beta^2 + \\gamma^2$.',
    hints: [
      'Use the identity (α + β + γ)² = α² + β² + γ² + 2(αβ + αγ + βγ)',
      'Find the sums from the coefficients',
    ],
    solution: {
      steps: [
        'From the polynomial: $\\alpha + \\beta + \\gamma = 2$, $\\alpha\\beta + \\alpha\\gamma + \\beta\\gamma = -5$',
        'Use $(\\alpha + \\beta + \\gamma)^2 = \\alpha^2 + \\beta^2 + \\gamma^2 + 2(\\alpha\\beta + \\alpha\\gamma + \\beta\\gamma)$',
        '$4 = \\alpha^2 + \\beta^2 + \\gamma^2 + 2(-5)$',
        '$4 = \\alpha^2 + \\beta^2 + \\gamma^2 - 10$',
        '$\\alpha^2 + \\beta^2 + \\gamma^2 = 14$',
      ],
      finalAnswer: '$\\alpha^2 + \\beta^2 + \\gamma^2 = 14$',
    },
    relatedFormulas: ['ext1-f2-004'],
  },

  // Extension 1 - Integration
  {
    id: 'prob-ext1-c2-001',
    subject: 'ext1',
    topic: 'Integration',
    difficulty: 4,
    question: 'Find $\\int x\\cos(x^2)\\,dx$.',
    hints: [
      'Use substitution with u = x²',
      'Notice that du/dx = 2x, which is similar to the x in the integral',
    ],
    solution: {
      steps: [
        'Let $u = x^2$, so $\\frac{du}{dx} = 2x$, i.e., $du = 2x\\,dx$',
        '$x\\,dx = \\frac{1}{2}du$',
        '$\\int x\\cos(x^2)\\,dx = \\int \\cos u \\cdot \\frac{1}{2}\\,du$',
        '$= \\frac{1}{2}\\int \\cos u\\,du$',
        '$= \\frac{1}{2}\\sin u + C$',
      ],
      finalAnswer: '$\\int x\\cos(x^2)\\,dx = \\frac{1}{2}\\sin(x^2) + C$',
    },
    relatedFormulas: ['ext1-c2-001'],
  },
  {
    id: 'prob-ext1-c2-002',
    subject: 'ext1',
    topic: 'Integration',
    difficulty: 4,
    question: 'Find the volume when $y = \\sqrt{x}$ is rotated about the x-axis from $x = 0$ to $x = 4$.',
    hints: [
      'Use V = π∫[f(x)]² dx',
      'The curve is y = √x, so y² = x',
    ],
    solution: {
      steps: [
        'Volume $= \\pi \\int_0^4 [\\sqrt{x}]^2\\,dx$',
        '$= \\pi \\int_0^4 x\\,dx$',
        '$= \\pi [\\frac{x^2}{2}]_0^4$',
        '$= \\pi (\\frac{16}{2} - 0)$',
        '$= 8\\pi$',
      ],
      finalAnswer: 'Volume $= 8\\pi$ cubic units',
    },
    relatedFormulas: ['ext1-c2-003'],
  },

  // Extension 1 - Proof by Induction
  {
    id: 'prob-ext1-p1-001',
    subject: 'ext1',
    topic: 'Proof',
    difficulty: 4,
    question: 'Prove by induction that $1 + 2 + 3 + ... + n = \\frac{n(n+1)}{2}$ for all positive integers $n$.',
    hints: [
      'Base case: check n = 1',
      'Assume true for n = k, prove for n = k + 1',
    ],
    solution: {
      steps: [
        'Base case: $n = 1$. LHS $= 1$. RHS $= \\frac{1(2)}{2} = 1$. ✓',
        'Assume true for $n = k$: $1 + 2 + ... + k = \\frac{k(k+1)}{2}$',
        'Prove for $n = k + 1$:',
        '$1 + 2 + ... + k + (k+1) = \\frac{k(k+1)}{2} + (k+1)$',
        '$= \\frac{k(k+1) + 2(k+1)}{2}$',
        '$= \\frac{(k+1)(k+2)}{2}$',
        '$= \\frac{(k+1)((k+1)+1)}{2}$ ✓',
        'By induction, true for all $n \\geq 1$.',
      ],
      finalAnswer: 'Proven by mathematical induction.',
    },
    relatedFormulas: ['ext1-p1-001'],
  },

  // Extension 1 - Combinatorics
  {
    id: 'prob-ext1-a1-001',
    subject: 'ext1',
    topic: 'Combinatorics',
    difficulty: 3,
    question: 'Find the coefficient of $x^3$ in the expansion of $(2 + x)^5$.',
    hints: [
      'Use the binomial theorem',
      'Find the term where the power of x is 3',
    ],
    solution: {
      steps: [
        'Using binomial theorem: $(a+b)^n = \\sum \\binom{n}{r}a^{n-r}b^r$',
        'For $(2+x)^5$: $T_{r+1} = \\binom{5}{r}2^{5-r}x^r$',
        'For $x^3$, need $r = 3$',
        '$T_4 = \\binom{5}{3}2^{5-3}x^3$',
        '$= \\binom{5}{3} \\cdot 4 \\cdot x^3$',
        '$= 10 \\times 4 \\times x^3 = 40x^3$',
      ],
      finalAnswer: 'Coefficient of $x^3$ is $40$',
    },
    relatedFormulas: ['ext1-a1-003'],
  },

  // Extension 2 - Complex Numbers
  {
    id: 'prob-ext2-n1-001',
    subject: 'ext2',
    topic: 'Complex Numbers',
    difficulty: 3,
    question: 'Express $z = 1 + i\\sqrt{3}$ in polar form.',
    hints: [
      'Find the modulus |z| = √(a² + b²)',
      'Find the argument using tan θ = b/a, checking the quadrant',
    ],
    solution: {
      steps: [
        '$|z| = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$',
        '$\\tan\\theta = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$',
        'Since both parts positive (first quadrant): $\\theta = \\frac{\\pi}{3}$',
        '$z = 2(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3})$',
        '$= 2\\text{cis}\\frac{\\pi}{3}$',
      ],
      finalAnswer: '$z = 2\\text{cis}\\frac{\\pi}{3}$ or $z = 2e^{i\\pi/3}$',
    },
    relatedFormulas: ['ext2-n1-002', 'ext2-n1-003'],
  },
  {
    id: 'prob-ext2-n2-001',
    subject: 'ext2',
    topic: 'Complex Numbers',
    difficulty: 4,
    question: 'Find all cube roots of $-8$.',
    hints: [
      'Express -8 in polar form first',
      'Use the formula for nth roots',
    ],
    solution: {
      steps: [
        '$-8 = 8\\text{cis}\\pi$ (modulus 8, argument π)',
        'Cube roots: $z_k = \\sqrt[3]{8}\\text{cis}\\frac{\\pi + 2k\\pi}{3}$ for $k = 0, 1, 2$',
        '$k = 0$: $z_0 = 2\\text{cis}\\frac{\\pi}{3} = 2(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}) = 1 + i\\sqrt{3}$',
        '$k = 1$: $z_1 = 2\\text{cis}\\pi = -2$',
        '$k = 2$: $z_2 = 2\\text{cis}\\frac{5\\pi}{3} = 2(\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}) = 1 - i\\sqrt{3}$',
      ],
      finalAnswer: 'The cube roots are $-2$, $1 + i\\sqrt{3}$, $1 - i\\sqrt{3}$',
    },
    relatedFormulas: ['ext2-n2-003'],
  },
  {
    id: 'prob-ext2-n2-002',
    subject: 'ext2',
    topic: 'Complex Numbers',
    difficulty: 4,
    question: 'Use De Moivre\'s theorem to show that $\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$.',
    hints: [
      'Start with (cos θ + i sin θ)³',
      'Expand using binomial and equate real parts',
    ],
    solution: {
      steps: [
        'By De Moivre: $(\\cos\\theta + i\\sin\\theta)^3 = \\cos 3\\theta + i\\sin 3\\theta$',
        'Expand LHS: $(c + is)^3$ where $c = \\cos\\theta$, $s = \\sin\\theta$',
        '$= c^3 + 3c^2(is) + 3c(is)^2 + (is)^3$',
        '$= c^3 + 3c^2si - 3cs^2 - is^3$',
        '$= (c^3 - 3cs^2) + i(3c^2s - s^3)$',
        'Real part: $\\cos 3\\theta = c^3 - 3cs^2 = c^3 - 3c(1-c^2)$',
        '$= c^3 - 3c + 3c^3 = 4c^3 - 3c$',
      ],
      finalAnswer: '$\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$ ✓',
    },
    relatedFormulas: ['ext2-n2-001'],
  },

  // Extension 2 - Vectors
  {
    id: 'prob-ext2-v1-001',
    subject: 'ext2',
    topic: 'Vectors',
    difficulty: 3,
    question: 'Find $\\vec{a} \\times \\vec{b}$ where $\\vec{a} = (2, -1, 3)$ and $\\vec{b} = (1, 4, -2)$.',
    hints: [
      'Use the determinant formula for cross product',
      'Or use the component formula: (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁)',
    ],
    solution: {
      steps: [
        '$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 2 & -1 & 3 \\\\ 1 & 4 & -2 \\end{vmatrix}$',
        '$\\vec{i}$ component: $(-1)(-2) - (3)(4) = 2 - 12 = -10$',
        '$\\vec{j}$ component: $-[(2)(-2) - (3)(1)] = -[-4 - 3] = 7$',
        '$\\vec{k}$ component: $(2)(4) - (-1)(1) = 8 + 1 = 9$',
      ],
      finalAnswer: '$\\vec{a} \\times \\vec{b} = (-10, 7, 9)$',
    },
    relatedFormulas: ['ext2-v1-002'],
  },
  {
    id: 'prob-ext2-v1-002',
    subject: 'ext2',
    topic: 'Vectors',
    difficulty: 4,
    question: 'Find the distance from the point $(1, 2, 3)$ to the plane $2x - y + 2z = 9$.',
    hints: [
      'Use the point-to-plane distance formula',
      'd = |ax₀ + by₀ + cz₀ - d| / √(a² + b² + c²)',
    ],
    solution: {
      steps: [
        'Distance formula: $d = \\frac{|ax_0 + by_0 + cz_0 - d|}{\\sqrt{a^2 + b^2 + c^2}}$',
        'Here: $a=2, b=-1, c=2, d=9$ and point $(1, 2, 3)$',
        'Numerator: $|2(1) + (-1)(2) + 2(3) - 9| = |2 - 2 + 6 - 9| = |-3| = 3$',
        'Denominator: $\\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$',
        '$d = \\frac{3}{3} = 1$',
      ],
      finalAnswer: 'Distance $= 1$ unit',
    },
    relatedFormulas: ['ext2-v1-006'],
  },

  // Extension 2 - Integration
  {
    id: 'prob-ext2-c1-001',
    subject: 'ext2',
    topic: 'Integration',
    difficulty: 4,
    question: 'Evaluate $\\int x\\ln x\\,dx$.',
    hints: [
      'Use integration by parts',
      'Choose u = ln x (L in LIATE) and dv = x dx',
    ],
    solution: {
      steps: [
        'Using IBP: $\\int u\\,dv = uv - \\int v\\,du$',
        'Let $u = \\ln x$, $dv = x\\,dx$',
        '$du = \\frac{1}{x}dx$, $v = \\frac{x^2}{2}$',
        '$\\int x\\ln x\\,dx = \\frac{x^2}{2}\\ln x - \\int \\frac{x^2}{2} \\cdot \\frac{1}{x}\\,dx$',
        '$= \\frac{x^2}{2}\\ln x - \\frac{1}{2}\\int x\\,dx$',
        '$= \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$',
      ],
      finalAnswer: '$\\int x\\ln x\\,dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$ or $\\frac{x^2}{4}(2\\ln x - 1) + C$',
    },
    relatedFormulas: ['ext2-c1-001'],
  },
  {
    id: 'prob-ext2-c1-002',
    subject: 'ext2',
    topic: 'Integration',
    difficulty: 4,
    question: 'Find $\\int \\frac{1}{x^2 - 4}\\,dx$.',
    hints: [
      'Factor the denominator',
      'Use partial fractions',
    ],
    solution: {
      steps: [
        '$\\frac{1}{x^2 - 4} = \\frac{1}{(x-2)(x+2)}$',
        'Partial fractions: $\\frac{1}{(x-2)(x+2)} = \\frac{A}{x-2} + \\frac{B}{x+2}$',
        '$1 = A(x+2) + B(x-2)$',
        'Let $x = 2$: $1 = 4A$, so $A = \\frac{1}{4}$',
        'Let $x = -2$: $1 = -4B$, so $B = -\\frac{1}{4}$',
        '$\\int \\frac{1}{x^2-4}\\,dx = \\frac{1}{4}\\int \\frac{1}{x-2}\\,dx - \\frac{1}{4}\\int \\frac{1}{x+2}\\,dx$',
        '$= \\frac{1}{4}\\ln|x-2| - \\frac{1}{4}\\ln|x+2| + C$',
      ],
      finalAnswer: '$\\int \\frac{1}{x^2-4}\\,dx = \\frac{1}{4}\\ln\\left|\\frac{x-2}{x+2}\\right| + C$',
    },
    relatedFormulas: ['ext2-c1-002'],
  },

  // Extension 2 - Mechanics
  {
    id: 'prob-ext2-m1-001',
    subject: 'ext2',
    topic: 'Mechanics',
    difficulty: 3,
    question: 'A particle moves so that $v = 4t - 3$ m/s. Find the displacement from $t = 1$ to $t = 3$ s.',
    hints: [
      'Displacement is the integral of velocity',
      'Use definite integral from t = 1 to t = 3',
    ],
    solution: {
      steps: [
        '$s = \\int_1^3 v\\,dt = \\int_1^3 (4t - 3)\\,dt$',
        '$= [2t^2 - 3t]_1^3$',
        '$= (2(9) - 9) - (2(1) - 3)$',
        '$= (18 - 9) - (2 - 3)$',
        '$= 9 - (-1) = 10$',
      ],
      finalAnswer: 'Displacement $= 10$ m',
    },
    relatedFormulas: ['ext2-m1-002'],
  },
  {
    id: 'prob-ext2-m1-002',
    subject: 'ext2',
    topic: 'Mechanics',
    difficulty: 4,
    question: 'A projectile is launched at 50 m/s at 30° to the horizontal. Find the maximum height.',
    hints: [
      'Use H = V²sin²θ / 2g',
      'Or: find when vertical velocity = 0',
    ],
    solution: {
      steps: [
        'Using $H = \\frac{V^2\\sin^2\\theta}{2g}$',
        '$V = 50$ m/s, $\\theta = 30°$, $g = 10$ m/s²',
        '$\\sin 30° = 0.5$',
        '$H = \\frac{50^2 \\times 0.5^2}{2 \\times 10}$',
        '$= \\frac{2500 \\times 0.25}{20}$',
        '$= \\frac{625}{20} = 31.25$',
      ],
      finalAnswer: 'Maximum height $= 31.25$ m',
    },
    relatedFormulas: ['ext2-m1-003'],
  },
  {
    id: 'prob-ext2-m1-003',
    subject: 'ext2',
    topic: 'Mechanics',
    difficulty: 5,
    question: 'A particle moves with SHM with $\\ddot{x} = -16x$. If $x = 3$ when $t = 0$ and the amplitude is 5, find $x$ as a function of $t$.',
    hints: [
      'General solution is x = A cos(nt + φ)',
      'Use initial conditions to find φ',
    ],
    solution: {
      steps: [
        'From $\\ddot{x} = -16x$, we have $n^2 = 16$, so $n = 4$',
        'General solution: $x = A\\cos(4t + \\phi)$',
        'Given $A = 5$: $x = 5\\cos(4t + \\phi)$',
        'At $t = 0$, $x = 3$: $3 = 5\\cos\\phi$',
        '$\\cos\\phi = \\frac{3}{5}$',
        '$\\phi = \\cos^{-1}(\\frac{3}{5})$',
      ],
      finalAnswer: '$x = 5\\cos(4t + \\cos^{-1}\\frac{3}{5})$ or $x = 5\\cos(4t + 0.927)$',
    },
    relatedFormulas: ['ext2-m1-006'],
  },
];

export default problems;
