export const c2WritingModules = [
  {
    order: 21,
    title: 'C2 Master Writing',
    description: '45+ exercises for executive and analytical writing.',
    units: [
      {
        order: 1,
        title: 'Analytical Writing',
        description: 'Writing complex reports and persuasive memos.',
        lessons: [
          {
            order: 1,
            title: 'Writing Drills',
            description: 'Mixed C2 writing exercises.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 50 }).map((_, i) => ({
                type: 'writing',
                prompt: `C2 Writing Drill ${i + 1}: Draft a highly formal legal addendum summarizing the liability constraints of the new API endpoints.`,
                answer: 'Evaluate structure, tone, and legal/technical precision.',
                difficulty: 'C2-EXPERT'
              }))
            ]
          }
        ]
      }
    ]
  }
];
