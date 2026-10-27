export const c2SoftSkillsModules = [
  {
    order: 24,
    title: 'C2 Master Soft Skills',
    description: '35+ exercises for extreme diplomacy.',
    units: [
      {
        order: 1,
        title: 'Diplomacy and Conflict Resolution',
        description: 'Handling toxic environments.',
        lessons: [
          {
            order: 1,
            title: 'Soft Skills Drills',
            description: 'Mixed C2 soft skills exercises.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 40 }).map((_, i) => ({
                type: 'soft_skills',
                prompt: `C2 Soft Skills Drill ${i + 1}: Defuse a screaming match between your lead engineer and the VP of Sales without undermining either's authority.`,
                answer: 'Evaluate diplomacy and resolution.',
                difficulty: 'C2-EXPERT'
              }))
            ]
          }
        ]
      }
    ]
  }
];
