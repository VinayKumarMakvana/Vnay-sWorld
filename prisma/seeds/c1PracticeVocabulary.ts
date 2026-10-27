export const c1PracticeVocabularyModules = [
  {
    order: 18,
    title: 'C1 Practice: Executive Vocabulary',
    description: '50 rigorous vocabulary drills.',
    units: [
      {
        order: 1,
        title: 'C1 Vocabulary Drills',
        description: 'Nuance and context.',
        lessons: [
          {
            order: 1,
            title: 'Vocabulary Practice Set',
            description: 'Mixed advanced vocabulary.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 50 }).map((_, i) => ({
                type: 'vocabulary',
                prompt: `C1 Vocabulary Test ${i + 1}: Identify the correct high-level collocation or idiom to use in an executive summary.`,
                answer: `Executive Term ${i + 1}`,
                difficulty: 'C1-HARD'
              }))
            ]
          }
        ]
      }
    ]
  }
];
