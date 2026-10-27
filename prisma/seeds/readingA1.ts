export const a1ReadingModules = [
  {
    order: 50,
    title: 'A1 Reading - Comprehension Ladder',
    description: 'Read and understand simple passages.',
    units: [
      {
        order: 1,
        title: 'Stage 1 & 2: Sentences to Paragraphs',
        description: 'Building reading stamina.',
        lessons: [
          {
            order: 1,
            title: 'Passage 1: A New Programmer',
            description: 'Reading a simple profile.',
            concepts: [
              {
                order: 1,
                title: 'Read the Passage',
                explanation: 'My name is Ali. I am 24 years old. I live in Hyderabad. I work as a junior developer at a small tech company. I write code in JavaScript and Python. I start work at 9 AM and finish at 6 PM. In the evening, I like to play video games and read technology blogs.',
                hindiSupport: 'Is passage ko dhyan se padhein aur samjhein.',
                examples: []
              }
            ],
            exercises: [
              { type: 'reading', prompt: 'Where does Ali live?', answer: 'Hyderabad' },
              { type: 'reading', prompt: 'What languages does he code in?', answer: 'JavaScript and Python' },
              { type: 'reading', prompt: 'What does he do in the evening?', answer: 'He plays video games and reads tech blogs.' }
            ]
          },
          {
            order: 2,
            title: 'Passage 2: The Daily Standup',
            description: 'Reading workplace context.',
            concepts: [
              {
                order: 1,
                title: 'Read the Passage',
                explanation: 'Every morning at 10 AM, our team has a standup meeting. The manager asks everyone three questions. What did you do yesterday? What will you do today? Do you have any blockers? Yesterday, I fixed a bug on the login page. Today, I will build the user dashboard. I have no blockers. The meeting is usually 15 minutes long.',
                hindiSupport: 'Workplace context ko samjhein.',
                examples: []
              }
            ],
            exercises: [
              { type: 'reading', prompt: 'What time is the meeting?', answer: '10 AM' },
              { type: 'reading', prompt: 'How long is the meeting usually?', answer: '15 minutes' },
              { type: 'reading', prompt: 'What will the person build today?', answer: 'The user dashboard' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Stage 3: Dialogues',
        description: 'Reading conversations.',
        lessons: [
          {
            order: 1,
            title: 'Passage 3: Asking for Leave',
            description: 'Reading a chat transcript.',
            concepts: [
              {
                order: 1,
                title: 'Read the Chat',
                explanation: 'John: Hi Sarah, do you have a minute?\nSarah: Hi John, sure. What is it?\nJohn: I need to take tomorrow off. I have a doctor\'s appointment.\nSarah: That is fine. Is your current task finished?\nJohn: Yes, I pushed the code to the repository yesterday.\nSarah: Great. Take care and see you on Thursday.',
                hindiSupport: 'Is batchit ko samjhein.',
                examples: []
              }
            ],
            exercises: [
              { type: 'reading', prompt: 'Why does John need tomorrow off?', answer: 'He has a doctor\'s appointment.' },
              { type: 'reading', prompt: 'Did John finish his task?', answer: 'Yes, he pushed the code yesterday.' }
            ]
          }
        ]
      }
    ]
  }
];
