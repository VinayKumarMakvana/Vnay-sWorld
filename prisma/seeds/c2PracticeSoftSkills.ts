export const c2PracticeSoftSkillsModules = [
  {
    order: 38,
    title: 'C2 Practice: Soft Skills',
    description: '40 advanced soft skills practice entities.',
    units: [ { order: 1, title: 'Soft Skills Practice', description: 'Practice', lessons: [ { order: 1, title: 'Practice Set', description: 'Mixed', concepts: [], exercises: Array.from({ length: 40 }).map((_, i) => ({ type: 'soft_skills', prompt: `C2 Soft Skills Practice ${i + 1}: Diplomatically challenge a toxic leadership decision.`, answer: 'Resolution approach', difficulty: 'C2-EXPERT' })) } ] } ]
  }
];
