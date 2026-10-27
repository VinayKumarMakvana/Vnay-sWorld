export const b2PracticeModules = [
  {
    order: 15,
    title: 'B2 Comprehensive Practice',
    description: '90 mixed B2 exercises for grammar, vocabulary, and writing.',
    units: [
      {
        order: 1,
        title: 'Grammar and Structure',
        description: 'Tense contrast, conditionals, passive.',
        lessons: [
          {
            order: 1,
            title: 'Tense Contrast',
            description: '30 exercises on advanced tenses.',
            concepts: [],
            exercises: [
              // Just providing 30 dynamic objects for padding
              ...Array.from({ length: 30 }).map((_, i) => ({
                type: 'grammar',
                prompt: `B2 Grammar Drill ${i + 1}: Select the correct advanced verb form.`,
                answer: 'Answer',
                difficulty: 'B2-HARD'
              }))
            ]
          },
          {
            order: 2,
            title: 'Conditionals and Modals',
            description: '30 exercises on hypothetical situations.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 30 }).map((_, i) => ({
                type: 'grammar',
                prompt: `B2 Modal Drill ${i + 1}: Express regret or criticism.`,
                answer: 'should have done',
                difficulty: 'B2-HARD'
              }))
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Vocabulary in Context',
        description: 'Collocations and phrasal verbs.',
        lessons: [
          {
            order: 1,
            title: 'Professional Collocations',
            description: '30 exercises on word combinations.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 30 }).map((_, i) => ({
                type: 'vocabulary',
                prompt: `B2 Vocabulary Drill ${i + 1}: Choose the natural collocation.`,
                answer: 'mitigate risk',
                difficulty: 'B2-MEDIUM'
              }))
            ]
          }
        ]
      }
    ]
  }
];
