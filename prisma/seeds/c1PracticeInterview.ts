export const c1PracticeInterviewModules = [
  {
    order: 28,
    title: 'C1 Practice: Interview',
    description: '25 advanced interview exercises.',
    units: [
      {
        order: 1,
        title: 'C1 Interview Drills',
        description: 'Staff engineer interviews.',
        lessons: [
          {
            order: 1,
            title: 'Interview Practice Set',
            description: 'Mixed interview.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 25 }).map((_, i) => ({
                type: 'interview',
                prompt: `C1 Interview Test ${i + 1}: Explain a situation where you had to push back on the CEO for a technical decision.`,
                answer: `Behavioral response ${i + 1}`,
                difficulty: 'C1-HARD'
              }))
            ]
          }
        ]
      }
    ]
  }
];
