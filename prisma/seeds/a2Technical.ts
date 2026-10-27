export const a2TechnicalModules = [
  {
    order: 3,
    title: 'A2 Technical English',
    description: '15 exercises for developers.',
    units: [
      {
        order: 1,
        title: 'Explaining Architecture and Code',
        description: 'How things work.',
        lessons: [
          {
            order: 1,
            title: 'System Design Basics',
            description: 'Explaining the stack.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain how a user logs into a website (Frontend to Backend).', answer: 'The user enters their details on the frontend. The frontend sends an API request to the backend. The backend checks the database and returns a success token.', difficulty: 'A2-HARD' },
              { type: 'tech', prompt: 'What is the purpose of a database?', answer: 'A database is used to store, organize, and retrieve data efficiently.', difficulty: 'A2-MEDIUM' },
              { type: 'tech', prompt: 'Explain the difference between a GET and POST request.', answer: 'GET is used to fetch data, while POST is used to send new data to the server.', difficulty: 'A2-HARD' },
              { type: 'tech', prompt: 'What does an API do?', answer: 'An API allows two different software applications to talk to each other.', difficulty: 'A2-MEDIUM' },
              { type: 'tech', prompt: 'Explain what Git is to a non-technical person.', answer: 'Git is like a save-game feature for code. It lets developers save versions of their work and go back if they make a mistake.', difficulty: 'A2-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Debugging and Errors',
            description: 'Talking about bugs.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'How do you debug a problem?', answer: 'First, I read the error message. Then, I check the logs. Finally, I isolate the code causing the issue.', difficulty: 'A2-HARD' },
              { type: 'tech', prompt: 'Explain a 404 error.', answer: 'A 404 error means the server cannot find the requested page or resource.', difficulty: 'A2-MEDIUM' },
              { type: 'tech', prompt: 'Explain a 500 error.', answer: 'A 500 error means there is a problem on the server side, like a crashed backend process.', difficulty: 'A2-MEDIUM' },
              { type: 'tech', prompt: 'Report a bug to your team.', answer: 'I found a bug on the checkout page. The submit button is not working on mobile devices.', difficulty: 'A2-HARD' },
              { type: 'tech', prompt: 'Ask a colleague for help with a specific error message.', answer: 'Hey, I am getting a "CORS" error when I try to fetch data. Have you seen this before?', difficulty: 'A2-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Project Workflow',
        description: 'Agile and collaboration.',
        lessons: [
          {
            order: 1,
            title: 'Agile and Standups',
            description: 'Daily communication.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Give a comprehensive standup update (Past, Present, Blockers).', answer: 'Yesterday I finished the API integration. Today I will write tests. I have no blockers.', difficulty: 'A2-HARD' },
              { type: 'tech', prompt: 'Explain what a pull request is.', answer: 'A pull request is a way to ask the team to review your code before it is merged into the main project.', difficulty: 'A2-HARD' },
              { type: 'tech', prompt: 'Ask someone to review your code.', answer: 'Could you please review my pull request for the new login feature when you have time?', difficulty: 'A2-MEDIUM' },
              { type: 'tech', prompt: 'Explain a feature you are working on.', answer: 'I am working on a search bar that filters users by their name and email.', difficulty: 'A2-MEDIUM' },
              { type: 'tech', prompt: 'Tell your manager that a task will take longer than expected.', answer: 'The database migration is more complex than I thought. I will need one more day to finish it.', difficulty: 'A2-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
