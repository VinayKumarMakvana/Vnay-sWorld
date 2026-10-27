export const a1SpeakingModules = [
  {
    order: 30,
    title: 'A1 Speaking - Progressive Fluency Ladder',
    description: 'Build speaking stamina from 1 sentence to 2 minutes.',
    units: [
      {
        order: 1,
        title: 'Stage 1: Sentences & 15 Seconds',
        description: 'Short bursts of speech.',
        lessons: [
          {
            order: 1,
            title: '15 Seconds: My Hometown',
            description: 'Speak for 15 seconds without stopping.',
            concepts: [
              {
                order: 1,
                title: 'The 3-Sentence Rule',
                explanation: 'To speak for 15 seconds, just aim for 3 connected sentences. Fact 1, Fact 2, Opinion.',
                hindiSupport: '15 second bolne ke liye 3 lagatar vakya (sentences) banayein. 2 fact, 1 opinion.',
                examples: [
                  { english: 'I am from Mumbai. It is a very big and busy city. I love the food there.', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Speak for 15 seconds about your hometown. Record yourself.', answer: null }
            ]
          },
          {
            order: 2,
            title: '15 Seconds: Daily Routine',
            description: 'What do you do every day?',
            concepts: [
              {
                order: 1,
                title: 'Using "First", "Then", "After that"',
                explanation: 'Connect your routine using sequence words.',
                hindiSupport: 'Kaam ka kram batane ke liye First, Then, After that ka upyog karein.',
                examples: [
                  { english: 'First, I wake up at 7 AM. Then, I check my emails. After that, I start working.', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Describe your morning routine in 15 seconds.', answer: null }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Stage 2: 30 to 45 Seconds',
        description: 'Expanding your ideas.',
        lessons: [
          {
            order: 1,
            title: '30 Seconds: My Favorite Food',
            description: 'Adding descriptive details.',
            concepts: [
              {
                order: 1,
                title: 'What, Why, When',
                explanation: 'Structure: What is it? Why do you like it? When do you eat it?',
                hindiSupport: 'Bolte waqt 3 sawalon ke jawab sochein: Kya? Kyun? Kab?',
                examples: [
                  { english: 'My favorite food is Pizza. I like it because it is cheesy and delicious. I usually eat it on weekends with my friends.', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Talk about your favorite food for 30 seconds.', answer: null }
            ]
          },
          {
            order: 2,
            title: '45 Seconds: A Memorable Day',
            description: 'Telling a simple past story.',
            concepts: [
              {
                order: 1,
                title: 'Storytelling Framework',
                explanation: 'Set the scene (When/Where), Action (What happened), Feeling (How you felt).',
                hindiSupport: 'Kahani sunane ka tarika: Kab/Kahan -> Kya hua -> Kaisa laga.',
                examples: [
                  { english: 'Last year, I went to Goa with my friends. We visited the beach and ate seafood. It was a very relaxing and happy day.', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Talk about a memorable day in your life for 45 seconds.', answer: null }
            ]
          }
        ]
      },
      {
        order: 3,
        title: 'Stage 3: 1 to 2 Minutes',
        description: 'Sustained speaking.',
        lessons: [
          {
            order: 1,
            title: '1 Minute: My Career Goals',
            description: 'Talking about the future.',
            concepts: [
              {
                order: 1,
                title: 'Past, Present, Future Framework',
                explanation: 'Spend 20 seconds on what you did before, 20 seconds on what you are doing now, 20 seconds on what you will do next.',
                hindiSupport: 'Pehle kya kiya, ab kya kar rahe ho, aage kya karoge.',
                examples: [
                  { english: 'In college, I studied computer science and learned basic Java. Right now, I am working as a junior developer and learning React. In the future, I want to become a full-stack engineer and build my own applications.', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Speak for 1 minute about your career goals using Past-Present-Future.', answer: null }
            ]
          }
        ]
      }
    ]
  }
];
