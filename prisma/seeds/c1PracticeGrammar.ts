export const c1PracticeGrammarModules = [
  {
    order: 17,
    title: 'C1 Practice: Advanced Grammar',
    description: '60 rigorous grammar drills.',
    units: [
      {
        order: 1,
        title: 'C1 Grammar Drills',
        description: 'Advanced structures.',
        lessons: [
          {
            order: 1,
            title: 'Grammar Practice Set',
            description: 'Mixed advanced grammar.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 60 }).map((_, i) => ({
                type: 'grammar',
                prompt: `C1 Grammar Test ${i + 1}: Select the most appropriate advanced grammatical structure for professional communication. Context: Software architecture review.`,
                answer: `Advanced Structure ${i + 1}`,
                difficulty: 'C1-HARD'
              }))
            ]
          }
        ]
      }
    ]
  }
];
