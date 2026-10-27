export const c2PracticeVocabularyModules = [
  {
    order: 30,
    title: 'C2 Practice: Vocabulary',
    description: '80 advanced vocabulary practice entities.',
    units: [ { order: 1, title: 'Vocabulary Practice', description: 'Practice', lessons: [ { order: 1, title: 'Practice Set', description: 'Mixed', concepts: [], exercises: Array.from({ length: 80 }).map((_, i) => ({ type: 'vocabulary', prompt: `C2 Vocabulary Practice ${i + 1}: Select the precise nuance word.`, answer: `C2 Vocab Answer ${i + 1}`, difficulty: 'C2-EXPERT' })) } ] } ]
  }
];
