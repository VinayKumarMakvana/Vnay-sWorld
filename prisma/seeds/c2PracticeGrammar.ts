export const c2PracticeGrammarModules = [
  {
    order: 29,
    title: 'C2 Practice: Grammar',
    description: '85 advanced grammar practice entities.',
    units: [ { order: 1, title: 'Grammar Practice', description: 'Practice', lessons: [ { order: 1, title: 'Practice Set', description: 'Mixed', concepts: [], exercises: Array.from({ length: 85 }).map((_, i) => ({ type: 'grammar', prompt: `C2 Grammar Practice ${i + 1}: Rewrite the sentence with advanced nuance.`, answer: `C2 Grammar Answer ${i + 1}`, difficulty: 'C2-EXPERT' })) } ] } ]
  }
];
