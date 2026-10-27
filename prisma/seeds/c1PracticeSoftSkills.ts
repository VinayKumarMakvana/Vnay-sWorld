export const c1PracticeSoftSkillsModules = [
  {
    order: 26,
    title: 'C1 Practice: Soft Skills',
    description: '25 advanced soft skills exercises.',
    units: [
      {
        order: 1,
        title: 'C1 Soft Skills Drills',
        description: 'Diplomacy and conflict.',
        lessons: [
          {
            order: 1,
            title: 'Soft Skills Practice Set',
            description: 'Mixed soft skills.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 25 }).map((_, i) => ({
                type: 'soft_skills',
                prompt: `C1 Soft Skills Test ${i + 1}: Navigate a situation where a key stakeholder is openly hostile to your team's work.`,
                answer: `Diplomatic resolution ${i + 1}`,
                difficulty: 'C1-HARD'
              }))
            ]
          }
        ]
      }
    ]
  }
];
