export const c1PracticeRoleplayModules = [
  {
    order: 30,
    title: 'C1 Practice: Roleplay',
    description: '25 advanced roleplay exercises.',
    units: [
      {
        order: 1,
        title: 'C1 Roleplay Drills',
        description: 'Complex scenarios.',
        lessons: [
          {
            order: 1,
            title: 'Roleplay Practice Set',
            description: 'Mixed roleplay.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 25 }).map((_, i) => ({
                type: 'roleplay',
                prompt: `C1 Roleplay Test ${i + 1}: ROLEPLAY: You are mediating a conflict between the Design team and Engineering team over a feature deadline. Go.`,
                answer: `Roleplay outline ${i + 1}`,
                difficulty: 'C1-HARD'
              }))
            ]
          }
        ]
      }
    ]
  }
];
