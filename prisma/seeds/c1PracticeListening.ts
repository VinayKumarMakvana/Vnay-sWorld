export const c1PracticeListeningModules = [
  {
    order: 21,
    title: 'C1 Practice: Listening',
    description: '40 advanced listening exercises.',
    units: [
      {
        order: 1,
        title: 'C1 Listening Drills',
        description: 'Meeting subtext.',
        lessons: [
          {
            order: 1,
            title: 'Listening Practice Set',
            description: 'Mixed listening.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 40 }).map((_, i) => ({
                type: 'listening',
                prompt: `TRANSCRIPT ${i + 1}: [Complex Audio Simulation] Interpret the true underlying meaning of the client's polite refusal.`,
                answer: `Interpretation ${i + 1}`,
                difficulty: 'C1-HARD'
              }))
            ]
          }
        ]
      }
    ]
  }
];
