export const c2AssessmentModules = [
  {
    order: 43,
    title: 'C2 Master Assessment',
    description: '85 comprehensive C2 assessment items covering all categories.',
    units: [
      {
        order: 1,
        title: 'C2 Assessment Battery',
        description: 'Testing 15 categories.',
        lessons: [
          {
            order: 1,
            title: 'Core & Output',
            description: 'Grammar, Vocab, Reading, Listening, Speaking, Writing, Pronunciation, Shadowing',
            concepts: [],
            exercises: [
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'grammar', prompt: `C2 Assess Grammar ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'vocabulary', prompt: `C2 Assess Vocab ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'reading', prompt: `C2 Assess Reading ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'listening', prompt: `C2 Assess Listening ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'speaking', prompt: `C2 Assess Speaking ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'writing', prompt: `C2 Assess Writing ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'pronunciation', prompt: `C2 Assess Pronunciation ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'shadowing', prompt: `C2 Assess Shadowing ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' }))
            ]
          },
          {
            order: 2,
            title: 'Applied Scenarios',
            description: 'Thinking, Soft Skills, Confidence, Interview, Tech, Roleplay, Professional',
            concepts: [],
            exercises: [
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'thinking', prompt: `C2 Assess Thinking ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'soft_skills', prompt: `C2 Assess Soft Skills ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'confidence', prompt: `C2 Assess Confidence ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'interview', prompt: `C2 Assess Interview ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'tech', prompt: `C2 Assess Tech ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'roleplay', prompt: `C2 Assess Roleplay ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })),
              ...Array.from({ length: 6 }).map((_, i) => ({ type: 'writing', prompt: `C2 Assess Professional Comm ${i+1}`, answer: 'ans', difficulty: 'C2-EXPERT' })) // Mapping professional comm to writing/speaking exercises
            ]
          }
        ]
      }
    ]
  }
];
