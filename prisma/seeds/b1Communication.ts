export const b1CommunicationModules = [
  {
    order: 2,
    title: 'B1 Independent Communication',
    description: 'Explaining, reasoning, and discussing.',
    units: [
      {
        order: 1,
        title: 'Opinions and Discussions',
        description: 'Participating in complex conversations.',
        lessons: [
          {
            order: 1,
            title: 'Expressing Strong Opinions',
            description: 'Moving beyond "I think".',
            concepts: [
              {
                order: 1,
                title: 'Stating your case',
                explanation: 'Use phrases like "I strongly believe that...", "From my perspective...", or "To be honest, I feel that..."',
                hindiSupport: 'Apni baat mazbooti se rakhne ke liye in shabdo ka upyog karein.',
                examples: [
                  { english: 'From my perspective, remote work increases productivity.', hindi: 'Mera manna hai ki remote work se productivity badhti hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Give your opinion on artificial intelligence replacing developers (1 min).', answer: null, difficulty: 'B1-MEDIUM' },
              { type: 'speaking', prompt: 'Do you think college degrees are necessary for software engineers? Explain why.', answer: null, difficulty: 'B1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Polite Disagreement',
            description: 'Professional conflict.',
            concepts: [
              {
                order: 1,
                title: 'Acknowledging then disagreeing',
                explanation: 'Always validate the other person\'s point before introducing your disagreement. "I see what you mean, however..."',
                hindiSupport: 'Pehle samne wale ki baat ko samjhein, fir apna virodh jatayein.',
                examples: [
                  { english: 'I understand your concern, but I look at it differently.', hindi: 'Main aapki chinta samajhta hoon, par mera nazariya alag hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'Your manager wants to release an untested feature to meet a deadline. Disagree politely.', answer: 'I understand the deadline is strict, but releasing without testing might cause severe bugs.', difficulty: 'B1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Problem Solving and Explanations',
        description: 'Handling workplace challenges.',
        lessons: [
          {
            order: 1,
            title: 'Explaining Complex Problems',
            description: 'Background, problem, impact.',
            concepts: [
              {
                order: 1,
                title: 'The Problem Framework',
                explanation: 'State the context, the exact problem, and how it impacts the business or project.',
                hindiSupport: 'Pehle sthiti batayein, fir samasya, aur uska kya asar pad raha hai.',
                examples: [
                  { english: 'The database is overloaded. As a result, users cannot log in, which is costing us sales.', hindi: 'Database overload hai. Natijatan, users log in nahi kar pa rahe hain, jisse sales ka nuksan ho raha hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Explain a technical problem you recently faced and its impact (1 min).', answer: null, difficulty: 'B1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Proposing Solutions',
            description: 'What we should do next.',
            concepts: [
              {
                order: 1,
                title: 'Suggesting Action',
                explanation: 'Use phrases like "I propose that we...", "One solution could be to...", or "Why don\'t we try..."',
                hindiSupport: 'Samadhan batane ke tarike.',
                examples: [
                  { english: 'I propose that we temporarily disable the feature until we fix the bug.', hindi: 'Mera prastav hai ki hum bug theek hone tak feature ko disable kar dein.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Your project is delayed by a week. Propose a solution to your team.', answer: null, difficulty: 'B1-MEDIUM' }
            ]
          }
        ]
      }
    ]
  }
];
