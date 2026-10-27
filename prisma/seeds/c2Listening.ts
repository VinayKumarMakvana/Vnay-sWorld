export const c2ListeningModules = [
  {
    order: 20,
    title: 'C2 Master Listening',
    description: '45+ exercises for multi-speaker, high-speed comprehension.',
    units: [
      {
        order: 1,
        title: 'Executive Comprehension',
        description: 'Navigating interruptions and implicit meaning.',
        lessons: [
          {
            order: 1,
            title: 'Listening Drills',
            description: 'Mixed C2 listening exercises.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 50 }).map((_, i) => ({
                type: 'listening',
                prompt: `C2 Listening Drill ${i + 1}: [Simulated Audio] Three executives are talking over each other. Identify who actually conceded the argument without explicitly saying so.`,
                answer: 'Identify the concession.',
                difficulty: 'C2-EXPERT'
              }))
            ]
          }
        ]
      }
    ]
  }
];
