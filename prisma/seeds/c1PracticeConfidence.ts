export const c1PracticeConfidenceModules = [
  {
    order: 27,
    title: 'C1 Practice: Confidence',
    description: '25 advanced confidence exercises.',
    units: [
      {
        order: 1,
        title: 'C1 Confidence Drills',
        description: 'Hostile questioning.',
        lessons: [
          {
            order: 1,
            title: 'Confidence Practice Set',
            description: 'Mixed confidence.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 25 }).map((_, i) => ({
                type: 'confidence',
                prompt: `C1 Confidence Test ${i + 1}: Recover instantly after making a massive factual error during a live presentation.`,
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
