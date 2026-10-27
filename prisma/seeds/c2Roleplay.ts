export const c2RoleplayModules = [
  {
    order: 28,
    title: 'C2 Master Roleplay',
    description: '35+ extreme roleplay scenarios.',
    units: [
      {
        order: 1,
        title: 'Executive Roleplay',
        description: 'Complex simulations.',
        lessons: [
          {
            order: 1,
            title: 'Roleplay Drills',
            description: 'Mixed C2 roleplay exercises.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 40 }).map((_, i) => ({
                type: 'roleplay',
                prompt: `C2 Roleplay Drill ${i + 1}: ROLEPLAY: You are the CTO. The board is demanding you fire your best engineer for a highly publicized mistake. Defend them and save their job without getting fired yourself.`,
                answer: 'Evaluate negotiation and persuasion.',
                difficulty: 'C2-EXPERT'
              }))
            ]
          }
        ]
      }
    ]
  }
];
