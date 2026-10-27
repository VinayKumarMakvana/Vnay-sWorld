export const c1PracticeTechnicalModules = [
  {
    order: 29,
    title: 'C1 Practice: Technical English',
    description: '25 advanced technical english exercises.',
    units: [
      {
        order: 1,
        title: 'C1 Technical Drills',
        description: 'System design communication.',
        lessons: [
          {
            order: 1,
            title: 'Technical Practice Set',
            description: 'Mixed technical.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 25 }).map((_, i) => ({
                type: 'tech',
                prompt: `C1 Technical Test ${i + 1}: Explain how to resolve a split-brain scenario in a distributed database cluster.`,
                answer: `Explanation ${i + 1}`,
                difficulty: 'C1-HARD'
              }))
            ]
          }
        ]
      }
    ]
  }
];
