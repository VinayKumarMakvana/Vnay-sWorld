export const c1PracticePronunciationModules = [
  {
    order: 23,
    title: 'C1 Practice: Pronunciation',
    description: '30 advanced pronunciation exercises.',
    units: [
      {
        order: 1,
        title: 'C1 Pronunciation Drills',
        description: 'Fluency and rhythm.',
        lessons: [
          {
            order: 1,
            title: 'Pronunciation Practice Set',
            description: 'Mixed pronunciation.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 30 }).map((_, i) => ({
                type: 'pronunciation',
                prompt: `C1 Pronunciation Test ${i + 1}: Read aloud emphasizing the contrastive stress.`,
                answer: 'Emphasis key provided.',
                difficulty: 'C1-HARD'
              }))
            ]
          }
        ]
      }
    ]
  }
];
