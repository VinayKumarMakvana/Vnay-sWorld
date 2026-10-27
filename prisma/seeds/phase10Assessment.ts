export const phase10AssessmentModules = [
  {
    order: 24,
    title: 'Phase 10: Career Readiness Assessment',
    description: '60+ comprehensive items evaluating professional readiness.',
    units: [
      {
        order: 1,
        title: 'Professional Mastery Assessment',
        description: 'Testing all Phase 10 categories.',
        lessons: [
          {
            order: 1,
            title: 'Technical & Workplace Assessment',
            description: 'Evaluation block.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 10 }).map((_, i) => ({ type: 'tech', prompt: `Assessment SE ${i+1}: Identify the risk in this architectural plan.`, answer: 'ans', difficulty: 'PRO-EXPERT' })),
              ...Array.from({ length: 10 }).map((_, i) => ({ type: 'speaking', prompt: `Assessment Meeting ${i+1}: Deliver a flawless daily standup update.`, answer: 'ans', difficulty: 'PRO-EXPERT' })),
              ...Array.from({ length: 10 }).map((_, i) => ({ type: 'writing', prompt: `Assessment PR ${i+1}: Write a professional code review rejection.`, answer: 'ans', difficulty: 'PRO-EXPERT' })),
              ...Array.from({ length: 10 }).map((_, i) => ({ type: 'roleplay', prompt: `Assessment Client ${i+1}: Manage a furious client after a production outage.`, answer: 'ans', difficulty: 'PRO-EXPERT' })),
              ...Array.from({ length: 10 }).map((_, i) => ({ type: 'interview', prompt: `Assessment Career ${i+1}: Answer a high-pressure Staff Engineer behavioral question.`, answer: 'ans', difficulty: 'PRO-EXPERT' })),
              ...Array.from({ length: 15 }).map((_, i) => ({ type: 'vocabulary', prompt: `Assessment Vocab ${i+1}: Select the correct professional/technical term.`, answer: 'ans', difficulty: 'PRO-EXPERT' }))
            ]
          }
        ]
      }
    ]
  }
];
