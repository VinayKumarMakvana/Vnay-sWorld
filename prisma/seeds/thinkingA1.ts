export const a1ThinkingModules = [
  {
    order: 80,
    title: 'A1 English Thinking - Stop Translating',
    description: 'Learn to process thoughts directly in English.',
    units: [
      {
        order: 1,
        title: 'Stage 1: Words and Simple Sentences',
        description: 'Instant recall without Hindi.',
        lessons: [
          {
            order: 1,
            title: 'Describe Your Surroundings',
            description: 'Name what you see instantly.',
            concepts: [
              {
                order: 1,
                title: 'The 3-Second Rule',
                explanation: 'Look at an object. You have 3 seconds to name it in English in your head. Do not think of the Hindi word first.',
                hindiSupport: 'Kisi bhi cheez ko dekh kar turant uska English naam sochein.',
                examples: []
              }
            ],
            exercises: [
              { type: 'english_thinking', prompt: 'Look around you right now. Name 5 objects in English in your head.', answer: null }
            ]
          },
          {
            order: 2,
            title: 'Action Narration',
            description: 'Talk to yourself in English.',
            concepts: [
              {
                order: 1,
                title: 'I am...',
                explanation: 'Whatever you are doing, say it in your head. "I am walking. I am opening the door. I am sitting down."',
                hindiSupport: 'Jo bhi kaam aap kar rahe hain, use apne dimag mein English mein bolein.',
                examples: []
              }
            ],
            exercises: [
              { type: 'english_thinking', prompt: 'Describe exactly what you are doing right this second in one sentence.', answer: null }
            ]
          }
        ]
      }
    ]
  }
];
