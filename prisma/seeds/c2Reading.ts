export const c2ReadingModules = [
  {
    order: 19,
    title: 'C2 Master Reading',
    description: '45+ exercises for critical interpretation and synthesis.',
    units: [
      {
        order: 1,
        title: 'Critical Interpretation',
        description: 'Analyzing complex rhetoric and subtext.',
        lessons: [
          {
            order: 1,
            title: 'Reading Drills',
            description: 'Mixed C2 reading exercises.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 50 }).map((_, i) => ({
                type: 'reading',
                prompt: `C2 Reading Drill ${i + 1}: Analyze this highly dense academic paper on consensus algorithms and infer the author's unspoken bias against Proof-of-Work.`,
                answer: 'Evaluate synthesis and inference.',
                difficulty: 'C2-EXPERT'
              }))
            ]
          }
        ]
      }
    ]
  }
];
