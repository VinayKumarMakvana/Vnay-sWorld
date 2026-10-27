export const c1PracticeShadowingModules = [
  {
    order: 24,
    title: 'C1 Practice: Shadowing',
    description: '25 advanced shadowing exercises.',
    units: [
      {
        order: 1,
        title: 'C1 Shadowing Drills',
        description: 'Executive rhythm.',
        lessons: [
          {
            order: 1,
            title: 'Shadowing Practice Set',
            description: 'Mixed shadowing.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 25 }).map((_, i) => ({
                type: 'shadowing',
                prompt: `C1 Shadowing Test ${i + 1}: Shadow this complex executive statement matching the speaker's exact intonation.`,
                answer: 'Shadowing text provided.',
                difficulty: 'C1-HARD'
              }))
            ]
          }
        ]
      }
    ]
  }
];
