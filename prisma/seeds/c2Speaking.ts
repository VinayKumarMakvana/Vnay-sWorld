export const c2SpeakingModules = [
  {
    order: 17,
    title: 'C2 Master Speaking',
    description: '50+ exercises for near-native, spontaneous expression.',
    units: [
      {
        order: 1,
        title: 'Spontaneous Executive Speaking',
        description: 'Handling ambiguity under pressure.',
        lessons: [
          {
            order: 1,
            title: 'Speaking Drills',
            description: 'Mixed C2 speaking exercises.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 55 }).map((_, i) => ({
                type: 'speaking',
                prompt: `C2 Speaking Drill ${i + 1}: Defend a deeply unpopular architectural shift to a hostile engineering team. Focus on coherence and register.`,
                answer: null,
                difficulty: 'C2-EXPERT'
              }))
            ]
          }
        ]
      }
    ]
  }
];
