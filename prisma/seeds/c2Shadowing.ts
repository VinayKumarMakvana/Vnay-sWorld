export const c2ShadowingModules = [
  {
    order: 23,
    title: 'C2 Master Shadowing',
    description: '35+ exercises for mastering executive rhythm.',
    units: [
      {
        order: 1,
        title: 'Executive Rhythm',
        description: 'Pacing and emphasis.',
        lessons: [
          {
            order: 1,
            title: 'Shadowing Drills',
            description: 'Mixed C2 shadowing exercises.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 40 }).map((_, i) => ({
                type: 'shadowing',
                prompt: `C2 Shadowing Drill ${i + 1}: Shadow this highly intense 3-minute executive monologue, matching the exact rhythm and micro-pauses.`,
                answer: 'Shadowing key provided.',
                difficulty: 'C2-EXPERT'
              }))
            ]
          }
        ]
      }
    ]
  }
];
