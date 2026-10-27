export const c1PracticeWritingModules = [
  {
    order: 22,
    title: 'C1 Practice: Writing',
    description: '40 advanced writing exercises.',
    units: [
      {
        order: 1,
        title: 'C1 Writing Drills',
        description: 'Executive documentation.',
        lessons: [
          {
            order: 1,
            title: 'Writing Practice Set',
            description: 'Mixed writing.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 40 }).map((_, i) => ({
                type: 'writing',
                prompt: `C1 Writing Test ${i + 1}: Draft a concise 150-word executive summary for a high-risk cloud migration.`,
                answer: null,
                difficulty: 'C1-HARD'
              }))
            ]
          }
        ]
      }
    ]
  }
];
