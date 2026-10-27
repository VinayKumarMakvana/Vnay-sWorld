export const c1PracticeThinkingModules = [
  {
    order: 25,
    title: 'C1 Practice: Thinking',
    description: '30 advanced thinking exercises.',
    units: [
      {
        order: 1,
        title: 'C1 Thinking Drills',
        description: 'Abstract reasoning.',
        lessons: [
          {
            order: 1,
            title: 'Thinking Practice Set',
            description: 'Mixed thinking.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 30 }).map((_, i) => ({
                type: 'thinking',
                prompt: `C1 Thinking Test ${i + 1}: Mentally outline a strategy to handle a catastrophic data center failure.`,
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
