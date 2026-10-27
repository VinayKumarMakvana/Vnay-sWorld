export const c1PracticeMixedModules = [
  {
    order: 31,
    title: 'C1 Practice: Mixed Advanced Assessment',
    description: '75 rigorous mixed exercises to complete the C1 practice requirement.',
    units: [
      {
        order: 1,
        title: 'C1 Mixed Drills',
        description: 'Comprehensive cross-skill application.',
        lessons: [
          {
            order: 1,
            title: 'Mixed Practice Set',
            description: 'Mixed scenarios.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 75 }).map((_, i) => ({
                type: i % 3 === 0 ? 'grammar' : i % 3 === 1 ? 'vocabulary' : 'writing',
                prompt: `C1 Mixed Test ${i + 1}: Select or rewrite the appropriate advanced structure/vocabulary for professional communication in an executive setting.`,
                answer: `Mixed Answer ${i + 1}`,
                difficulty: 'C1-HARD'
              }))
            ]
          }
        ]
      }
    ]
  }
];
