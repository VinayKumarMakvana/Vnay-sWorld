export const c1AssessmentModules = [
  {
    order: 16,
    title: 'C1 Level Assessment',
    description: 'Foundation for C1 Advanced certification. Tests all C1 categories.',
    units: [
      {
        order: 1,
        title: 'C1 Core Knowledge Assessment',
        description: 'Testing grammar, vocabulary, reading, and listening.',
        lessons: [
          {
            order: 1,
            title: 'Grammar and Vocabulary',
            description: 'Written precision.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 5 }).map((_, i) => ({ type: 'grammar', prompt: `ASSESSMENT Grammar ${i+1}: Correct the advanced structural error.`, answer: 'Criteria: Correct inversion/participle used.', difficulty: 'C1-HARD' })),
              ...Array.from({ length: 5 }).map((_, i) => ({ type: 'vocabulary', prompt: `ASSESSMENT Vocab ${i+1}: Provide the most precise executive synonym.`, answer: 'Criteria: Accurate collocation.', difficulty: 'C1-HARD' }))
            ]
          },
          {
            order: 2,
            title: 'Reading and Listening',
            description: 'Comprehension of complex material.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 5 }).map((_, i) => ({ type: 'reading', prompt: `ASSESSMENT Reading ${i+1}: Infer the unstated business risk from the technical memo.`, answer: 'Criteria: Identifies implicit risk.', difficulty: 'C1-HARD' })),
              ...Array.from({ length: 5 }).map((_, i) => ({ type: 'listening', prompt: `ASSESSMENT Listening ${i+1}: Identify the subtle disagreement in the audio transcript.`, answer: 'Criteria: Detects hedging.', difficulty: 'C1-HARD' }))
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'C1 Professional Communication Assessment',
        description: 'Speaking, writing, and interpersonal skills.',
        lessons: [
          {
            order: 1,
            title: 'Output and Delivery',
            description: 'Speaking, Writing, Pronunciation, Shadowing.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 5 }).map((_, i) => ({ type: 'speaking', prompt: `ASSESSMENT Speaking ${i+1}: Speak for 5 minutes explaining a complex architectural choice.`, answer: 'Criteria: Fluency, structure, vocabulary.', difficulty: 'C1-HARD' })),
              ...Array.from({ length: 5 }).map((_, i) => ({ type: 'writing', prompt: `ASSESSMENT Writing ${i+1}: Draft a high-stakes incident report.`, answer: 'Criteria: Clarity, tone, lack of blame.', difficulty: 'C1-HARD' })),
              ...Array.from({ length: 5 }).map((_, i) => ({ type: 'pronunciation', prompt: `ASSESSMENT Pronunciation ${i+1}: Read this technical paragraph with perfect stress.`, answer: 'Criteria: No hesitation, correct word stress.', difficulty: 'C1-HARD' })),
              ...Array.from({ length: 5 }).map((_, i) => ({ type: 'shadowing', prompt: `ASSESSMENT Shadowing ${i+1}: Shadow this executive response.`, answer: 'Criteria: Match rhythm and intonation.', difficulty: 'C1-HARD' }))
            ]
          },
          {
            order: 2,
            title: 'High-Stakes Scenarios',
            description: 'Thinking, Soft Skills, Confidence, Interview, Technical, Roleplay.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 3 }).map((_, i) => ({ type: 'thinking', prompt: `ASSESSMENT Thinking ${i+1}: Mentally outline a crisis strategy.`, answer: 'Criteria: Logical structure.', difficulty: 'C1-HARD' })),
              ...Array.from({ length: 3 }).map((_, i) => ({ type: 'soft_skills', prompt: `ASSESSMENT Soft Skills ${i+1}: Address a toxic senior developer.`, answer: 'Criteria: Diplomacy and firmness.', difficulty: 'C1-HARD' })),
              ...Array.from({ length: 3 }).map((_, i) => ({ type: 'confidence', prompt: `ASSESSMENT Confidence ${i+1}: Recover from a hostile interruption.`, answer: 'Criteria: Composure.', difficulty: 'C1-HARD' })),
              ...Array.from({ length: 3 }).map((_, i) => ({ type: 'interview', prompt: `ASSESSMENT Interview ${i+1}: Answer a Staff-level behavioral question.`, answer: 'Criteria: STAR method, executive presence.', difficulty: 'C1-HARD' })),
              ...Array.from({ length: 3 }).map((_, i) => ({ type: 'tech', prompt: `ASSESSMENT Tech ${i+1}: Explain CQRS to a product manager.`, answer: 'Criteria: Non-technical analogies.', difficulty: 'C1-HARD' })),
              ...Array.from({ length: 3 }).map((_, i) => ({ type: 'roleplay', prompt: `ASSESSMENT Roleplay ${i+1}: Negotiate a timeline extension with a furious client.`, answer: 'Criteria: De-escalation.', difficulty: 'C1-HARD' }))
            ]
          }
        ]
      }
    ]
  }
];
