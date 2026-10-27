export const c2PracticeRoleplayModules = [
  {
    order: 42,
    title: 'C2 Practice: Roleplay',
    description: '45 advanced roleplay practice entities.',
    units: [ { order: 1, title: 'Roleplay Practice', description: 'Practice', lessons: [ { order: 1, title: 'Practice Set', description: 'Mixed', concepts: [], exercises: Array.from({ length: 45 }).map((_, i) => ({ type: 'roleplay', prompt: `C2 Roleplay Practice ${i + 1}: Navigate a simulated high-stakes executive board meeting.`, answer: 'Roleplay simulation', difficulty: 'C2-EXPERT' })) } ] } ]
  }
];
