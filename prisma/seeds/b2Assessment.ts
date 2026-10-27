export const b2AssessmentModules = [
  {
    order: 16,
    title: 'B2 Level Assessment',
    description: 'Foundation for B2 Upper-Intermediate certification.',
    units: [
      {
        order: 1,
        title: 'B2 Core Skills Assessment',
        description: 'Testing grammar, vocabulary, and listening.',
        lessons: [
          {
            order: 1,
            title: 'Grammar and Vocabulary Test',
            description: '50-question mock test.',
            concepts: [],
            exercises: [
              { type: 'grammar', prompt: 'ASSESSMENT: Select the correct advanced tense to complete the paragraph.', answer: 'will have been working', difficulty: 'B2-HARD' },
              { type: 'vocabulary', prompt: 'ASSESSMENT: Identify the correct collocation for "risk".', answer: 'mitigate', difficulty: 'B2-MEDIUM' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'B2 Professional Communication Assessment',
        description: 'Speaking and writing evaluation.',
        lessons: [
          {
            order: 1,
            title: 'Spontaneous Speaking Test',
            description: 'Unprepared prompt response.',
            concepts: [],
            exercises: [
              { type: 'speaking', prompt: 'ASSESSMENT: Speak for 5 minutes explaining a complex technical system you have built. You have 30 seconds to prepare.', answer: null, difficulty: 'B2-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
