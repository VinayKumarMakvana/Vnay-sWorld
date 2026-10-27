export const c2PracticeSpeakingModules = [
  {
    order: 31,
    title: 'C2 Practice: Speaking',
    description: '65 advanced speaking practice entities.',
    units: [ { order: 1, title: 'Speaking Practice', description: 'Practice', lessons: [ { order: 1, title: 'Practice Set', description: 'Mixed', concepts: [], exercises: Array.from({ length: 65 }).map((_, i) => ({ type: 'speaking', prompt: `C2 Speaking Practice ${i + 1}: Spontaneously answer this complex prompt.`, answer: null, difficulty: 'C2-EXPERT' })) } ] } ]
  }
];
