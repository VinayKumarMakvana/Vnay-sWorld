export const c2PronunciationModules = [
  {
    order: 18,
    title: 'C2 Master Pronunciation',
    description: '40+ exercises for ultimate intelligibility and rhythm.',
    units: [
      {
        order: 1,
        title: 'Intelligibility and Connected Speech',
        description: 'Sounding clear and commanding.',
        lessons: [
          {
            order: 1,
            title: 'Pronunciation Drills',
            description: 'Mixed C2 pronunciation exercises.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 45 }).map((_, i) => ({
                type: 'pronunciation',
                prompt: `C2 Pronunciation Drill ${i + 1}: Read this complex legal clause aloud with perfect thought groups and natural pausing.`,
                answer: 'Evaluate stress on key modifiers.',
                difficulty: 'C2-EXPERT'
              }))
            ]
          }
        ]
      }
    ]
  }
];
