export const c2TechnicalModules = [
  {
    order: 27,
    title: 'C2 Master Technical English',
    description: '35+ exercises for deep technical architecture communication.',
    units: [
      {
        order: 1,
        title: 'System Design and Abstraction',
        description: 'Explaining complex systems.',
        lessons: [
          {
            order: 1,
            title: 'Technical Drills',
            description: 'Mixed C2 technical exercises.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 40 }).map((_, i) => ({
                type: 'tech',
                prompt: `C2 Technical Drill ${i + 1}: Verbally whiteboard the trade-offs between eventual consistency and strict serializability in a global, multi-region distributed database for a non-technical stakeholder.`,
                answer: 'Evaluate clarity, analogy use, and technical accuracy.',
                difficulty: 'C2-EXPERT'
              }))
            ]
          }
        ]
      }
    ]
  }
];
