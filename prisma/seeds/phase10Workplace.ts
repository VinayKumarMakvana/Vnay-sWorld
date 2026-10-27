export const phase10WorkplaceModules = [
  ...Array.from({ length: 10 }).map((_, mIdx) => ({
    order: mIdx + 13,
    title: `International Workplace Module ${mIdx + 1}: ${
      ['Meeting Mastery', 'Client Communication', 'Manager & Team Communication', 'Cross-Cultural Comm',
       'Professional Writing', 'Remote Work Communication', 'Negotiation & Deadlines', 'Conflict Resolution',
       'Professional Boundaries', 'Workplace Etiquette'][mIdx]
    }`,
    description: 'Advanced workplace communication skills.',
    units: [
      {
        order: 1,
        title: `Workplace Dynamics`,
        description: 'Handling complex human interactions.',
        lessons: Array.from({ length: 5 }).map((_, lIdx) => ({
          order: lIdx + 1,
          title: `Workplace Lesson ${mIdx * 5 + lIdx + 1}`,
          description: 'Workplace scenario drills.',
          concepts: [],
          exercises: [
            { type: 'soft_skills', prompt: `Workplace Drill ${mIdx * 5 + lIdx + 1}: Navigate a sensitive workplace scenario.`, answer: 'Evaluate diplomacy.', difficulty: 'PRO-EXPERT' }
          ]
        }))
      }
    ]
  }))
];
