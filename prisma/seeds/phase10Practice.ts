export const phase10PracticeModules = [
  {
    order: 23,
    title: 'Phase 10: Career & Technical Practice Engine',
    description: '450+ dedicated practice entities for software engineers.',
    units: [
      {
        order: 1,
        title: 'Software Engineer English Practice',
        description: '150+ SE practice entities.',
        lessons: [ { order: 1, title: 'SE Drills', description: 'SE', concepts: [], exercises: Array.from({ length: 155 }).map((_, i) => ({ type: 'tech', prompt: `SE Practice Drill ${i + 1}: Explain the impact of a database migration to a stakeholder.`, answer: 'Evaluate clarity.', difficulty: 'PRO-EXPERT' })) } ]
      },
      {
        order: 2,
        title: 'International Workplace Practice',
        description: '150+ Workplace practice entities.',
        lessons: [ { order: 1, title: 'Workplace Drills', description: 'Workplace', concepts: [], exercises: Array.from({ length: 155 }).map((_, i) => ({ type: 'roleplay', prompt: `Workplace Practice Drill ${i + 1}: De-escalate a conflict in a cross-cultural remote team meeting.`, answer: 'Evaluate tone and resolution.', difficulty: 'PRO-EXPERT' })) } ]
      },
      {
        order: 3,
        title: 'Career Communication Practice',
        description: '100+ Career practice entities.',
        lessons: [ { order: 1, title: 'Career Drills', description: 'Career', concepts: [], exercises: Array.from({ length: 105 }).map((_, i) => ({ type: 'interview', prompt: `Career Practice Drill ${i + 1}: Navigate a complex salary negotiation with a senior recruiter.`, answer: 'Evaluate assertiveness and professionalism.', difficulty: 'PRO-EXPERT' })) } ]
      },
      {
        order: 4,
        title: 'Technical Explanation Practice',
        description: '50+ Tech Explanation practice entities.',
        lessons: [ { order: 1, title: 'Explanation Drills', description: 'Explanation', concepts: [], exercises: Array.from({ length: 55 }).map((_, i) => ({ type: 'speaking', prompt: `Tech Explanation Drill ${i + 1}: Explain Kubernetes to a non-technical product manager using an analogy.`, answer: 'Evaluate analogy and jargon reduction.', difficulty: 'PRO-EXPERT' })) } ]
      }
    ]
  }
];
