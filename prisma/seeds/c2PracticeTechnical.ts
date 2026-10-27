export const c2PracticeTechnicalModules = [
  {
    order: 41,
    title: 'C2 Practice: Technical English',
    description: '45 advanced technical practice entities.',
    units: [ { order: 1, title: 'Technical Practice', description: 'Practice', lessons: [ { order: 1, title: 'Practice Set', description: 'Mixed', concepts: [], exercises: Array.from({ length: 45 }).map((_, i) => ({ type: 'tech', prompt: `C2 Technical Practice ${i + 1}: Explain a deep architectural tradeoff.`, answer: 'Explanation outline', difficulty: 'C2-EXPERT' })) } ] } ]
  }
];
