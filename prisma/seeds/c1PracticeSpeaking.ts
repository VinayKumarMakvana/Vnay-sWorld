export const c1PracticeSpeakingModules = [
  {
    order: 19,
    title: 'C1 Practice: Speaking',
    description: '45 advanced speaking exercises.',
    units: [
      {
        order: 1,
        title: 'C1 Speaking Drills',
        description: 'Strategic presentations.',
        lessons: [
          {
            order: 1,
            title: 'Speaking Practice Set',
            description: 'Mixed speaking.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 45 }).map((_, i) => ({
                type: 'speaking',
                prompt: `C1 Speaking Test ${i + 1}: Defend a controversial architectural decision for 3 minutes without hesitation.`,
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
