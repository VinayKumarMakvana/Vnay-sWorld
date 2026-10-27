export const c1PracticeReadingModules = [
  {
    order: 20,
    title: 'C1 Practice: Reading',
    description: '40 advanced reading exercises.',
    units: [
      {
        order: 1,
        title: 'C1 Reading Drills',
        description: 'Technical document analysis.',
        lessons: [
          {
            order: 1,
            title: 'Reading Practice Set',
            description: 'Mixed reading.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 40 }).map((_, i) => ({
                type: 'reading',
                prompt: `C1 Reading Test ${i + 1}: Analyze this deeply technical post-mortem and infer the unspoken executive tension causing the delay.`,
                answer: `Inferred answer ${i + 1}`,
                difficulty: 'C1-HARD'
              }))
            ]
          }
        ]
      }
    ]
  }
];
