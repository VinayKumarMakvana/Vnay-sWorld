export const c2PracticeInterviewModules = [
  {
    order: 40,
    title: 'C2 Practice: Interview',
    description: '45 advanced interview practice entities.',
    units: [ { order: 1, title: 'Interview Practice', description: 'Practice', lessons: [ { order: 1, title: 'Practice Set', description: 'Mixed', concepts: [], exercises: Array.from({ length: 45 }).map((_, i) => ({ type: 'interview', prompt: `C2 Interview Practice ${i + 1}: Answer an unexpected, high-level behavioral question.`, answer: 'STAR response', difficulty: 'C2-EXPERT' })) } ] } ]
  }
];
