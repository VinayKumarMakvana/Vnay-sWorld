export const c2PracticePronunciationModules = [
  {
    order: 35,
    title: 'C2 Practice: Pronunciation',
    description: '45 advanced pronunciation practice entities.',
    units: [ { order: 1, title: 'Pronunciation Practice', description: 'Practice', lessons: [ { order: 1, title: 'Practice Set', description: 'Mixed', concepts: [], exercises: Array.from({ length: 45 }).map((_, i) => ({ type: 'pronunciation', prompt: `C2 Pronunciation Practice ${i + 1}: Read aloud with absolute clarity.`, answer: 'Pronunciation focus', difficulty: 'C2-EXPERT' })) } ] } ]
  }
];
