export const b1TechnicalModules = [
  {
    order: 4,
    title: 'B1 Technical English',
    description: '20 exercises for explaining architecture, code, and systems.',
    units: [
      {
        order: 1,
        title: 'Explaining Systems',
        description: 'Frontend, Backend, and Infrastructure.',
        lessons: [
          {
            order: 1,
            title: 'High-Level Architecture',
            description: 'The big picture.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain the difference between a monolithic architecture and microservices.', answer: 'A monolith has all code in one application. Microservices split the application into smaller, independent services that communicate via APIs.', difficulty: 'B1-HARD' },
              { type: 'tech', prompt: 'How does caching improve performance?', answer: 'Caching stores frequently accessed data in memory, so the server doesn\'t have to query the database every time, which speeds up response times.', difficulty: 'B1-HARD' },
              { type: 'tech', prompt: 'Explain what a REST API is.', answer: 'A REST API is an architectural style that allows systems to communicate over HTTP using standard methods like GET, POST, PUT, and DELETE.', difficulty: 'B1-MEDIUM' },
              { type: 'tech', prompt: 'What is the purpose of Docker?', answer: 'Docker packages an application and its dependencies into a container, ensuring it runs exactly the same way in any environment.', difficulty: 'B1-HARD' },
              { type: 'tech', prompt: 'Explain continuous integration (CI) to a junior developer.', answer: 'CI is when developers merge their code changes frequently into a central repository, where automated tests run to catch bugs early.', difficulty: 'B1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Security and Data',
            description: 'Protecting information.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain the difference between authentication and authorization.', answer: 'Authentication verifies who you are (like logging in). Authorization determines what you are allowed to do (like admin privileges).', difficulty: 'B1-HARD' },
              { type: 'tech', prompt: 'What is SQL Injection and how do you prevent it?', answer: 'SQL Injection is when malicious SQL code is inserted into input fields. It is prevented by using parameterized queries or prepared statements.', difficulty: 'B1-HARD' },
              { type: 'tech', prompt: 'Explain JWT (JSON Web Tokens).', answer: 'A JWT is a secure, encrypted token used for authentication. After logging in, the server sends a JWT, which the client uses for future requests.', difficulty: 'B1-HARD' },
              { type: 'tech', prompt: 'Why is it bad practice to store plaintext passwords?', answer: 'If the database is hacked, attackers can easily read plaintext passwords. Passwords must always be hashed and salted.', difficulty: 'B1-MEDIUM' },
              { type: 'tech', prompt: 'What is Cross-Site Scripting (XSS)?', answer: 'XSS is a vulnerability where an attacker injects malicious scripts into a web page viewed by other users.', difficulty: 'B1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Workflows and Code Review',
        description: 'Collaborating on code.',
        lessons: [
          {
            order: 1,
            title: 'Git and Version Control',
            description: 'Managing changes.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain how to resolve a merge conflict.', answer: 'You open the conflicted file, manually choose which changes to keep, save the file, and then commit the resolution.', difficulty: 'B1-MEDIUM' },
              { type: 'tech', prompt: 'What is the difference between git merge and git rebase?', answer: 'Merge creates a new commit that combines histories. Rebase rewrites history by moving your branch to the tip of the target branch.', difficulty: 'B1-HARD' },
              { type: 'tech', prompt: 'Why should you create a new branch for a feature?', answer: 'Creating a branch keeps your changes isolated from the main codebase until they are finished and tested.', difficulty: 'B1-MEDIUM' },
              { type: 'tech', prompt: 'Explain what a Pull Request is used for.', answer: 'A Pull Request is a request to merge your code. It allows teammates to review your changes and discuss them before they are integrated.', difficulty: 'B1-MEDIUM' },
              { type: 'tech', prompt: 'How do you revert a bad commit?', answer: 'You use the git revert command, which creates a new commit that undoes the changes made in the bad commit.', difficulty: 'B1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Code Quality and Debugging',
            description: 'Writing good code.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain why unit testing is important.', answer: 'Unit tests ensure individual parts of the code work correctly. They catch bugs early and make refactoring safer.', difficulty: 'B1-MEDIUM' },
              { type: 'tech', prompt: 'What is Technical Debt?', answer: 'Technical debt is the cost of choosing a fast, poor-quality solution now, which will require more time to fix later.', difficulty: 'B1-HARD' },
              { type: 'tech', prompt: 'How do you track down a performance issue?', answer: 'I use profiling tools to monitor CPU and memory usage, check database query times, and look for unnecessary loops in the code.', difficulty: 'B1-HARD' },
              { type: 'tech', prompt: 'What does "DRY" mean in programming?', answer: 'DRY stands for Don\'t Repeat Yourself. It means avoiding duplicate code by extracting logic into reusable functions or components.', difficulty: 'B1-MEDIUM' },
              { type: 'tech', prompt: 'Explain the concept of asynchronous programming.', answer: 'Asynchronous programming allows the code to continue running while waiting for a long task, like a network request, to finish.', difficulty: 'B1-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
