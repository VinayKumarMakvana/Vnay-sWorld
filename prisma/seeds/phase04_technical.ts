export const phase04TechnicalModules = [
  {
    order: 2, // Fits into Level 8
    title: 'Beginner Technical English (Phase 4)',
    description: '10 exercises to explain code simply.',
    units: [
      {
        order: 1,
        title: 'Tech Exercises 1-5',
        description: 'Basic explanations.',
        lessons: [
          {
            order: 1,
            title: 'Explaining Architecture',
            description: 'Frontend vs Backend vs Database.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain the difference between frontend and backend in simple words.', answer: 'Frontend is what the user sees and clicks on. Backend is the server that processes the data behind the scenes.', difficulty: 'A1-MEDIUM' },
              { type: 'tech', prompt: 'What is a database?', answer: 'A database is a secure place to store and organize information, like user passwords and product details.', difficulty: 'A1-MEDIUM' },
              { type: 'tech', prompt: 'What is an API?', answer: 'An API is like a waiter in a restaurant. It takes a request from the frontend, goes to the backend, and brings the data back.', difficulty: 'A1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Daily Developer Talk',
            description: 'Projects and Standups.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Introduce yourself as a developer in 1 sentence.', answer: 'Hi, I am a junior frontend developer working mostly with React.', difficulty: 'A1-EASY' },
              { type: 'tech', prompt: 'Give a 2-sentence standup update.', answer: 'Yesterday I built the login form. Today I will connect it to the database API.', difficulty: 'A1-MEDIUM' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Tech Exercises 6-10',
        description: 'Features and Bugs.',
        lessons: [
          {
            order: 1,
            title: 'Explaining Features',
            description: 'How things work.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain a simple feature you built.', answer: 'I built a dark mode toggle. When you click it, the background turns black and the text turns white.', difficulty: 'A1-MEDIUM' },
              { type: 'tech', prompt: 'Explain how your code solution works.', answer: 'I used a loop to go through the array and find the matching ID.', difficulty: 'A1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Bugs and Help',
            description: 'Fixing problems.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain a bug you found.', answer: 'There is a bug on the checkout page. The price is showing as zero when you add an item.', difficulty: 'A1-MEDIUM' },
              { type: 'tech', prompt: 'Ask a senior developer for help with a Git conflict.', answer: 'Hi, I have a merge conflict in my branch and I don\'t want to break the code. Can you help me resolve it?', difficulty: 'A1-HARD' },
              { type: 'tech', prompt: 'Tell QA that a bug is fixed.', answer: 'Hi QA team, I fixed the checkout bug. I pushed the changes. It is ready for testing.', difficulty: 'A1-MEDIUM' }
            ]
          }
        ]
      }
    ]
  }
];
