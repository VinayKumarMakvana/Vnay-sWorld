export const c2PracticeListeningModules = [
  {
    order: 33,
    title: 'C2 Practice: Listening',
    description: '55 advanced listening practice entities.',
    units: [ { order: 1, title: 'Listening Practice', description: 'Practice', lessons: [ { order: 1, title: 'Practice Set', description: 'Mixed', concepts: [], exercises: Array.from({ length: 55 }).map((_, i) => ({ type: 'listening', prompt: `C2 Listening Practice ${i + 1}: Identify the speaker's true intent.`, answer: `C2 Listening Answer ${i + 1}`, difficulty: 'C2-EXPERT' })) } ] } ]
  }
];
