export const a1ConfidenceModules = [
  {
    order: 40, // Fits into Level 2
    title: 'A1 Self-Confidence Foundation',
    description: 'Speaking without fear.',
    units: [
      {
        order: 1,
        title: 'Mistakes and Pauses',
        description: 'Handling imperfections.',
        lessons: [
          {
            order: 1,
            title: 'Recovering from a Mistake',
            description: 'What to do when you say the wrong word.',
            concepts: [
              {
                order: 1,
                title: 'I mean...',
                explanation: 'If you make a mistake, do not panic. Just say "I mean" or "Sorry" and correct it instantly. Do not stop.',
                hindiSupport: 'Galti hone par ghabraye nahi. "I mean" bol kar aage badhein.',
                examples: [
                  { english: 'I go to the... I mean, I went to the store yesterday.', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'You meant to say "I solved the bug", but you started with "I write". Fix it naturally.', answer: 'I write... I mean, I solved the bug.' }
            ]
          },
          {
            order: 2,
            title: 'Handling Pauses Confidently',
            description: 'Buying time to think.',
            concepts: [
              {
                order: 1,
                title: 'Fillers done right',
                explanation: 'Instead of saying "Ummm", use professional fillers like "Let me think about that," or "That is a good question."',
                hindiSupport: '"Umm" bolne ke bajaye, sochne ke liye samay mangein.',
                examples: [
                  { english: 'That is a good question. Let me think for a second.', hindi: 'Yeh accha sawal hai. Mujhe ek second sochne dijiye.' }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'Someone asks you a difficult technical question. Buy some time.', answer: 'That is a great question. Give me a second to think about it.' }
            ]
          }
        ]
      }
    ]
  }
];
