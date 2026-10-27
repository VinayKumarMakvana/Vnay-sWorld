export const c2PracticeReadingModules = [
  {
    order: 32,
    title: 'C2 Practice: Reading',
    description: '55 advanced reading practice entities.',
    units: [ { order: 1, title: 'Reading Practice', description: 'Practice', lessons: [ { order: 1, title: 'Practice Set', description: 'Mixed', concepts: [], exercises: Array.from({ length: 55 }).map((_, i) => ({ type: 'reading', prompt: `C2 Reading Practice ${i + 1}: Infer meaning from this complex text.`, answer: `C2 Reading Answer ${i + 1}`, difficulty: 'C2-EXPERT' })) } ] } ]
  }
];
