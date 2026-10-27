export const c2ConfidenceModules = [
  {
    order: 25,
    title: 'C2 Master Confidence',
    description: '35+ exercises for maintaining authority under severe stress.',
    units: [
      {
        order: 1,
        title: 'Authority and Crisis',
        description: 'Recovering from disastrous scenarios.',
        lessons: [
          {
            order: 1,
            title: 'Confidence Drills',
            description: 'Mixed C2 confidence exercises.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 40 }).map((_, i) => ({
                type: 'confidence',
                prompt: `C2 Confidence Drill ${i + 1}: You just accidentally leaked the company's Q3 earnings early on a live stream. Manage the immediate aftermath without breaking composure.`,
                answer: 'Evaluate composure and immediate crisis management.',
                difficulty: 'C2-EXPERT'
              }))
            ]
          }
        ]
      }
    ]
  }
];
