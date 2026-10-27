export const a1CommunicationModules = [
  {
    order: 20,
    title: 'A1 Communication - Social Situations',
    description: 'Everyday conversations with people.',
    units: [
      {
        order: 1,
        title: 'Meeting and Introducing',
        description: 'Building relationships.',
        lessons: [
          {
            order: 1,
            title: 'Introducing Yourself deeply',
            description: 'Beyond just your name.',
            concepts: [
              {
                order: 1,
                title: 'Name, Origin, and Job',
                explanation: 'Combine 3 pieces of info: I am [Name]. I am from [Place]. I work as a [Job].',
                hindiSupport: 'Apna naam, jagah, aur kaam ek sath batayein.',
                examples: [
                  { english: 'Hi, I am Rohan. I am from Delhi, and I work as a frontend developer.', hindi: 'Namaste, main Rohan hoon. Main Delhi se hoon aur frontend developer hoon.' }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'Introduce yourself to a new team member.', answer: null }
            ]
          },
          {
            order: 2,
            title: 'Introducing Another Person',
            description: 'Connecting people.',
            concepts: [
              {
                order: 1,
                title: 'This is...',
                explanation: 'Use "This is [Name]" to introduce someone. Do not use "He is / She is" for first introductions.',
                hindiSupport: 'Kisi ko milwate waqt hamesha "This is..." bolein.',
                examples: [
                  { english: 'Sarah, this is John. He is our new designer.', hindi: 'Sarah, yeh John hain. Yeh hamare naye designer hain.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Introduce your friend Amit to your manager.', answer: 'Manager, this is my friend Amit.' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Talking about Life',
        description: 'Family, Education, and Hobbies.',
        lessons: [
          {
            order: 1,
            title: 'Talking About Family',
            description: 'Who is in your family?',
            concepts: [
              {
                order: 1,
                title: 'Family Structure',
                explanation: 'I live with my [parents/wife/husband]. I have [number] siblings (brothers/sisters).',
                hindiSupport: 'Main apne parivar ke sath rehta hoon. Mere do bhai/behen hain.',
                examples: [
                  { english: 'I live with my parents and I have one older brother.', hindi: 'Main apne mata-pita ke sath rehta hoon aur mera ek bada bhai hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Talk about your family in 2 sentences.', answer: null }
            ]
          },
          {
            order: 2,
            title: 'Talking About Education',
            description: 'What did you study?',
            concepts: [
              {
                order: 1,
                title: 'Degree and Major',
                explanation: 'I graduated in [Subject] from [University].',
                hindiSupport: 'Maine [Vishay] mein padhai ki hai.',
                examples: [
                  { english: 'I graduated in Computer Science from XYZ University.', hindi: 'Maine XYZ University se Computer Science kiya hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'What is your educational background?', answer: null }
            ]
          },
          {
            order: 3,
            title: 'Talking About Hobbies',
            description: 'What do you do for fun?',
            concepts: [
              {
                order: 1,
                title: 'In my free time...',
                explanation: 'Use "In my free time, I like to [verb] or I enjoy [verb+ing]."',
                hindiSupport: 'Khali samay mein mujhe [kaam] karna pasand hai.',
                examples: [
                  { english: 'In my free time, I like to read books and play cricket.', hindi: 'Khali samay mein mujhe kitabein padhna aur cricket khelna pasand hai.' },
                  { english: 'I enjoy coding personal projects.', hindi: 'Mujhe personal projects code karna pasand hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'english_thinking', prompt: 'List 3 hobbies you enjoy, without translating in your head.', answer: null }
            ]
          }
        ]
      }
    ]
  },
  {
    order: 21,
    title: 'A1 Communication - Survival & Travel',
    description: 'Shopping, Restaurants, and Directions.',
    units: [
      {
        order: 1,
        title: 'Asking and Giving Directions',
        description: 'Navigating the world.',
        lessons: [
          {
            order: 1,
            title: 'Excuse me, where is...?',
            description: 'Finding places.',
            concepts: [
              {
                order: 1,
                title: 'Asking Politely',
                explanation: 'Always start with "Excuse me". Then ask "How do I get to [Place]?"',
                hindiSupport: 'Kahin ka rasta puchne se pehle hamesha "Excuse me" bolein.',
                examples: [
                  { english: 'Excuse me, how do I get to the nearest metro station?', hindi: 'Suniye, yahan se sabse paas metro station ka rasta kya hai?' }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'Ask a stranger where the restroom is.', answer: 'Excuse me, where is the restroom?' }
            ]
          },
          {
            order: 2,
            title: 'Giving Directions',
            description: 'Straight, Left, Right.',
            concepts: [
              {
                order: 1,
                title: 'Action Verbs for Directions',
                explanation: 'Go straight. Turn left. Turn right. It is on your left.',
                hindiSupport: 'Sidhe jao. Bayein mudo. Dayein mudo.',
                examples: [
                  { english: 'Go straight for two blocks, then turn right.', hindi: 'Do block sidhe jao, fir dayein mud jana.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Give directions from your desk to the office door.', answer: null }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Restaurants and Shopping',
        description: 'Buying things and ordering food.',
        lessons: [
          {
            order: 1,
            title: 'Ordering Food',
            description: 'I would like...',
            concepts: [
              {
                order: 1,
                title: 'Polite Requests',
                explanation: 'Instead of "I want", say "I would like" or "Can I have...?"',
                hindiSupport: '"Mujhe chahiye" bolne ke bajaye "I would like" bolna zyada vinamra (polite) hai.',
                examples: [
                  { english: 'I would like a coffee, please.', hindi: 'Mujhe ek coffee chahiye, please.' },
                  { english: 'Can I have the bill, please?', hindi: 'Kya mujhe bill mil sakta hai?' }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'Order a sandwich and a water at a cafe.', answer: 'I would like a sandwich and a water, please.' }
            ]
          },
          {
            order: 2,
            title: 'Shopping',
            description: 'How much is this?',
            concepts: [
              {
                order: 1,
                title: 'Asking about Price',
                explanation: 'Use "How much is this?" for one item, or "How much are these?" for plural.',
                hindiSupport: 'Keemat puchne ke liye "How much is this?" bolein.',
                examples: [
                  { english: 'How much is this shirt?', hindi: 'Yeh shirt kitne ki hai?' },
                  { english: 'Do you have this in a smaller size?', hindi: 'Kya aapke paas iska chhota size hai?' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Ask the shopkeeper for the price of a laptop bag.', answer: 'How much is this laptop bag?' }
            ]
          }
        ]
      }
    ]
  },
  {
    order: 22,
    title: 'A1 Communication - Conversation Management',
    description: 'Controlling the flow of conversation.',
    units: [
      {
        order: 1,
        title: 'Clarification and Help',
        description: 'When you do not understand.',
        lessons: [
          {
            order: 1,
            title: 'Asking to Repeat or Slow Down',
            description: 'Pardon?',
            concepts: [
              {
                order: 1,
                title: 'Polite Interruption',
                explanation: 'If you didn\'t hear, say "Could you please repeat that?" If they are too fast, say "Could you speak a little slower, please?"',
                hindiSupport: 'Agar kuch sunai na de toh "repeat" karne bole, aur agar tej bol rahe ho toh "speak slower" bolein.',
                examples: [
                  { english: 'I am sorry, could you please repeat that?', hindi: 'Maaf kijiye, kya aap isko dohra sakte hain?' },
                  { english: 'English is my second language, could you speak a little slower?', hindi: 'English meri dusri bhasha hai, kya aap thoda dheere bol sakte hain?' }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'The interviewer speaks very fast. Ask them to repeat slowly.', answer: 'Sorry, could you speak a little slower and repeat the question please?' }
            ]
          },
          {
            order: 2,
            title: 'Agreeing and Disagreeing Basics',
            description: 'Yes and No.',
            concepts: [
              {
                order: 1,
                title: 'Simple Agreement',
                explanation: 'I agree. / That is true. / Absolutely.',
                hindiSupport: 'Sehmat hone ke liye I agree bolein.',
                examples: [
                  { english: 'I agree with you.', hindi: 'Main aapse sehmat hoon.' }
                ]
              },
              {
                order: 2,
                title: 'Simple Disagreement',
                explanation: 'I disagree. / I am not sure about that. / I don\'t think so.',
                hindiSupport: 'Asehmat hone ke liye vinamrata se "I don\'t think so" bolein.',
                examples: [
                  { english: 'I am not sure about that. I think we should test it first.', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'A colleague says HTML is a programming language. Disagree politely.', answer: 'I don\'t think so. It is a markup language.' }
            ]
          }
        ]
      }
    ]
  }
];
