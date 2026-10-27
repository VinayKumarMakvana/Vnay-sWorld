export const b1GrammarModules = [
  {
    order: 1, // Will be offset in Level 4 (B1)
    title: 'B1 Intermediate Grammar',
    description: 'Complex structures for independent communication.',
    units: [
      {
        order: 1,
        title: 'Advanced Narrative Tenses',
        description: 'Telling stories and explaining backgrounds.',
        lessons: [
          {
            order: 1,
            title: 'Past Perfect vs Past Simple',
            description: 'The past of the past.',
            concepts: [
              {
                order: 1,
                title: 'Had + Past Participle (V3)',
                explanation: 'Use Past Perfect when you are already talking about the past, and want to refer to an action that happened even earlier.',
                hindiSupport: 'Jab hum beete hue samay ki baat kar rahe hon aur usse bhi pehle ki kisi ghatna ko batana ho.',
                examples: [
                  { english: 'When I arrived at the office, the meeting had already started.', hindi: 'Jab main office pahuncha, meeting pehle hi shuru ho chuki thi.' },
                  { english: 'I couldn\'t deploy because someone had changed the database password.', hindi: 'Main deploy nahi kar saka kyunki kisi ne database ka password badal diya tha.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: By the time I fixed the bug, everyone (go) ___ home.', answer: 'had gone', difficulty: 'B1-MEDIUM' },
              { type: 'grammar', prompt: 'Fill in: I realized that I (leave) ___ my laptop at home.', answer: 'had left', difficulty: 'B1-EASY' },
              { type: 'grammar', prompt: 'Choose correct: We (had finished / finished) the project before the deadline.', answer: 'had finished', difficulty: 'B1-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Present Perfect Continuous',
            description: 'Actions continuing up to now.',
            concepts: [
              {
                order: 1,
                title: 'Have/Has + Been + Verb-ing',
                explanation: 'Focus on the duration of an activity that started in the past and is still happening, or just recently stopped with visible results.',
                hindiSupport: 'Jo kaam pehle se chal raha hai aur abhi tak jaari hai, ya abhi khatm hua aur uska asar dikh raha hai.',
                examples: [
                  { english: 'I have been debugging this code for three hours.', hindi: 'Main teen ghante se is code ko debug kar raha hoon.' },
                  { english: 'You look tired. Have you been working late?', hindi: 'Tum thake hue lag rahe ho. Kya tum der tak kaam kar rahe the?' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: She (work) ___ here since January.', answer: 'has been working', difficulty: 'B1-MEDIUM' },
              { type: 'grammar', prompt: 'Fill in: How long (you / study) ___ React?', answer: 'have you been studying', difficulty: 'B1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Conditionals and Modals',
        description: 'Speculation and imaginary situations.',
        lessons: [
          {
            order: 1,
            title: 'Second Conditional',
            description: 'Unreal present or future.',
            concepts: [
              {
                order: 1,
                title: 'If + Past Simple, would + Verb',
                explanation: 'Use for imaginary, impossible, or unlikely situations in the present or future.',
                hindiSupport: 'Aisi kalpnik sthiti jo sach nahi hai, "agar aisa hota, toh main waisa karta".',
                examples: [
                  { english: 'If I were the manager, I would hire more developers.', hindi: 'Agar main manager hota, toh main aur developers rakhta.' },
                  { english: 'If we had more time, we could add that feature.', hindi: 'Agar hamare paas aur samay hota, toh hum woh feature daal sakte the.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: If I (know) ___ the answer, I would tell you.', answer: 'knew', difficulty: 'B1-MEDIUM' },
              { type: 'grammar', prompt: 'Fill in: I (quit) ___ my job if I won the lottery.', answer: 'would quit', difficulty: 'B1-EASY' }
            ]
          },
          {
            order: 2,
            title: 'Modals of Deduction',
            description: 'Must be, Might be, Can\'t be.',
            concepts: [
              {
                order: 1,
                title: 'Certainty and Possibility',
                explanation: 'Use "must be" when 99% sure it\'s true. Use "might be" for 50%. Use "can\'t be" when 99% sure it\'s false.',
                hindiSupport: 'Pakka yakeen (must be), shayad (might be), bilkul nahi ho sakta (can\'t be).',
                examples: [
                  { english: 'The server is down. It must be a database error.', hindi: 'Server band hai. Pakka database ki error hogi.' },
                  { english: 'That can\'t be right. I checked it yesterday.', hindi: 'Yeh sahi nahi ho sakta. Maine kal hi check kiya tha.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: He has been coding for 12 hours. He (must / might) ___ be exhausted.', answer: 'must', difficulty: 'B1-MEDIUM' },
              { type: 'grammar', prompt: 'Fill in: The bug is gone, but I don\'t know why. It (must / might) ___ have been a caching issue.', answer: 'might', difficulty: 'B1-HARD' }
            ]
          }
        ]
      },
      {
        order: 3,
        title: 'Complex Sentences',
        description: 'Connecting ideas smoothly.',
        lessons: [
          {
            order: 1,
            title: 'Linking Words (Contrast)',
            description: 'Although, However, Despite.',
            concepts: [
              {
                order: 1,
                title: 'Although vs Despite',
                explanation: '"Although" is followed by a subject + verb. "Despite" is followed by a noun or noun phrase.',
                hindiSupport: '"Although" ke baad pura vakya aata hai. "Despite" ke baad sirf noun aata hai.',
                examples: [
                  { english: 'Although the API is slow, we are still using it.', hindi: 'Halanki API slow hai, hum fir bhi ise use kar rahe hain.' },
                  { english: 'Despite the delay, we launched the app on time.', hindi: 'Deri ke bawajood, humne app samay par launch ki.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: (Although / Despite) ___ it was raining, we went out.', answer: 'Although', difficulty: 'B1-MEDIUM' },
              { type: 'grammar', prompt: 'Fill in: We continued the project (although / despite) ___ the lack of budget.', answer: 'despite', difficulty: 'B1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Relative Clauses',
            description: 'Who, Which, That, Whose.',
            concepts: [
              {
                order: 1,
                title: 'Defining Relative Clauses',
                explanation: 'Use relative clauses to identify exactly which person or thing you are talking about.',
                hindiSupport: 'Kis insaan ya cheez ki baat ho rahi hai, yeh batane ke liye.',
                examples: [
                  { english: 'The developer who wrote this code is no longer here.', hindi: 'Jis developer ne yeh code likha tha, woh ab yahan nahi hai.' },
                  { english: 'I fixed the bug that was crashing the app.', hindi: 'Maine woh bug theek kiya jo app ko crash kar raha tha.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: That is the company (who / which) ___ offered me a job.', answer: 'which', difficulty: 'B1-MEDIUM' },
              { type: 'grammar', prompt: 'Fill in: I have a colleague (whose / who\'s) ___ code is always perfect.', answer: 'whose', difficulty: 'B1-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
