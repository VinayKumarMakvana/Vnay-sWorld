export const a1TechModules = [
  {
    order: 1, // Fits into Level 8
    title: 'Technical English Foundation',
    description: 'Talking about code and technology.',
    units: [
      {
        order: 1,
        title: 'Explaining Concepts',
        description: 'How to explain tech simply.',
        lessons: [
          {
            order: 1,
            title: 'Explaining a Bug',
            description: 'What went wrong?',
            concepts: [
              {
                order: 1,
                title: 'Expected vs Actual',
                explanation: 'The system was supposed to [Expected], but instead it [Actual].',
                hindiSupport: 'Kya hona chahiye tha vs Kya hua.',
                examples: [
                  { english: 'The button was supposed to submit the form, but it crashed the app.', hindi: 'Button ko form submit karna tha, par usne app crash kar diya.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Explain a bug where the login page is not loading.', answer: 'The login page is supposed to load the form, but it is showing a blank screen.' }
            ]
          },
          {
            order: 2,
            title: 'Asking a Developer for Help',
            description: 'When you are stuck.',
            concepts: [
              {
                order: 1,
                title: 'Context + Attempt + Request',
                explanation: 'I am trying to [Task]. I tried [Solution], but it didn\'t work. Can you help me?',
                hindiSupport: 'Pehle context dein, fir batayein kya try kiya, fir madad mangein.',
                examples: [
                  { english: 'I am trying to fix this CSS. I tried changing the flexbox, but it didn\'t work. Can you take a look?', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'Ask a senior dev for help with an API error.', answer: 'Hi, I am trying to fetch data but getting a 404 error. Can you help me?' }
            ]
          }
        ]
      }
    ]
  }
];
