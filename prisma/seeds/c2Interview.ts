export const c2InterviewModules = [
  {
    order: 26,
    title: 'C2 Master Interview',
    description: '35+ exercises for Staff Engineer and Executive interviews.',
    units: [
      {
        order: 1,
        title: 'Executive Interviews',
        description: 'Handling ambiguity and deep dives.',
        lessons: [
          {
            order: 1,
            title: 'Interview Drills',
            description: 'Mixed C2 interview exercises.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 40 }).map((_, i) => ({
                type: 'interview',
                prompt: `C2 Interview Drill ${i + 1}: "Tell me about a time you led a project that fundamentally failed, but you successfully pivoted the engineering strategy to save the business."`,
                answer: 'Evaluate narrative flow, ownership, and strategic thinking.',
                difficulty: 'C2-EXPERT'
              }))
            ]
          }
        ]
      }
    ]
  }
];
