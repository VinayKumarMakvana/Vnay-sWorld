export const a1SoftSkillsModules = [
  {
    order: 30, // Fits into Level 2
    title: 'A1 Soft Skills Foundation',
    description: 'Professional behavior and communication.',
    units: [
      {
        order: 1,
        title: 'Active Listening & Empathy',
        description: 'Showing you care.',
        lessons: [
          {
            order: 1,
            title: 'Non-Verbal Listening',
            description: 'Nodding and eye contact.',
            concepts: [
              {
                order: 1,
                title: 'Showing you are listening',
                explanation: 'Use words like "I see", "Right", "Okay", or simply nod to show you are paying attention.',
                hindiSupport: 'Samne wale ko ahsas dilayein ki aap unhe sun rahe hain.',
                examples: [
                  { english: 'Right. I understand.', hindi: 'Theek. Main samajh raha hoon.' }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'Your colleague is complaining about a bug. Respond actively.', answer: 'I see. That sounds frustrating.' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Feedback',
        description: 'Giving and receiving.',
        lessons: [
          {
            order: 1,
            title: 'Receiving Feedback Gracefully',
            description: 'Do not get defensive.',
            concepts: [
              {
                order: 1,
                title: 'Thank you for the feedback',
                explanation: 'Even if you disagree, always start by thanking the person for their time and input.',
                hindiSupport: 'Chahe aap sehmat na ho, sabse pehle feedback ke liye dhanyawad bolein.',
                examples: [
                  { english: 'Thank you for the feedback. I will work on that.', hindi: 'Pratikriya ke liye dhanyawad. Main is par kaam karunga.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Your manager says your code needs better comments. Respond.', answer: 'Thank you for the feedback. I will add more comments.' }
            ]
          }
        ]
      }
    ]
  }
];
