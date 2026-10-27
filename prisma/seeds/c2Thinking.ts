export const c2ThinkingModules = [
  {
    order: 22,
    title: 'C2 Master Thinking',
    description: '45+ exercises for instantaneous abstract reasoning.',
    units: [
      {
        order: 1,
        title: 'Spontaneous Abstract Reasoning',
        description: 'Deep thought and immediate synthesis.',
        lessons: [
          {
            order: 1,
            title: 'Thinking Drills',
            description: 'Mixed C2 thinking exercises.',
            concepts: [],
            exercises: [
              ...Array.from({ length: 50 }).map((_, i) => ({
                type: 'thinking',
                prompt: `C2 Thinking Drill ${i + 1}: Mentally construct a bulletproof counterargument to the premise that "all software will eventually be written by AI".`,
                answer: 'Evaluate speed and logical soundness.',
                difficulty: 'C2-EXPERT'
              }))
            ]
          }
        ]
      }
    ]
  }
];
