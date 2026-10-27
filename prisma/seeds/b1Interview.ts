export const b1InterviewModules = [
  {
    order: 3,
    title: 'B1 Interview Mastery',
    description: '20 advanced behavioral and situational interview questions.',
    units: [
      {
        order: 1,
        title: 'Behavioral Deep Dives (STAR Method)',
        description: 'Situation, Task, Action, Result.',
        lessons: [
          {
            order: 1,
            title: 'Conflict and Failure',
            description: 'The hard questions.',
            concepts: [],
            exercises: [
              { type: 'interview', prompt: 'Tell me about a time you had a major conflict with a coworker. How did you resolve it?', answer: 'We disagreed on the architecture. I scheduled a 1-on-1, listened to their concerns, and we compromised by using a hybrid approach.', difficulty: 'B1-HARD' },
              { type: 'interview', prompt: 'Describe a project that failed completely. What did you learn?', answer: 'We built a feature users didn\'t want. I learned the importance of validating ideas with user research before writing code.', difficulty: 'B1-HARD' },
              { type: 'interview', prompt: 'Tell me about a time you missed a deadline.', answer: 'I underestimated the complexity of an API integration. I communicated the delay early and worked extra hours to finish it.', difficulty: 'B1-HARD' },
              { type: 'interview', prompt: 'How do you handle receiving negative feedback?', answer: 'I try to detach my ego from the code. I view negative feedback as an opportunity to learn and improve my skills.', difficulty: 'B1-MEDIUM' },
              { type: 'interview', prompt: 'Tell me about a time you had to learn something completely new under pressure.', answer: 'In my last job, we needed to use Docker, which I didn\'t know. I spent the weekend reading documentation and successfully containerized the app.', difficulty: 'B1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Leadership and Initiative',
            description: 'Showing your value.',
            concepts: [],
            exercises: [
              { type: 'interview', prompt: 'Give an example of a time you took the initiative to improve a process.', answer: 'I noticed our deployment process was manual and error-prone. I wrote a CI/CD script that automated it, saving the team hours every week.', difficulty: 'B1-HARD' },
              { type: 'interview', prompt: 'Tell me about a time you had to lead a project.', answer: 'I led the redesign of our landing page. I coordinated between design and backend, ensuring we met the deadline.', difficulty: 'B1-MEDIUM' },
              { type: 'interview', prompt: 'Describe a time you had to persuade someone to see things your way.', answer: 'My manager wanted to use a heavy framework. I built a quick prototype with a lighter tool to prove it was faster, and they agreed.', difficulty: 'B1-HARD' },
              { type: 'interview', prompt: 'How do you prioritize tasks when you have multiple urgent deadlines?', answer: 'I communicate with stakeholders to understand the true business impact of each task, and tackle the highest-impact items first.', difficulty: 'B1-HARD' },
              { type: 'interview', prompt: 'Tell me about a time you went above and beyond for a client.', answer: 'A client had a critical bug on a Friday night. Even though I was off the clock, I logged in and fixed it because it was affecting their sales.', difficulty: 'B1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Situational and Career Questions',
        description: 'Looking forward.',
        lessons: [
          {
            order: 1,
            title: 'The Future',
            description: 'Goals and fit.',
            concepts: [],
            exercises: [
              { type: 'interview', prompt: 'Why do you want to leave your current job?', answer: 'I have learned a lot there, but I am looking for a role that offers more complex technical challenges.', difficulty: 'B1-MEDIUM' },
              { type: 'interview', prompt: 'Where do you see your career in 5 years?', answer: 'In 5 years, I aim to be a senior developer who architect systems and mentors junior engineers.', difficulty: 'B1-MEDIUM' },
              { type: 'interview', prompt: 'What kind of work environment do you thrive in?', answer: 'I thrive in collaborative environments where communication is open and knowledge sharing is encouraged.', difficulty: 'B1-MEDIUM' },
              { type: 'interview', prompt: 'What are you most proud of in your career?', answer: 'I am most proud of reducing our application\'s load time by 50%, which directly increased user retention.', difficulty: 'B1-HARD' },
              { type: 'interview', prompt: 'If we hire you, what will you accomplish in your first 30 days?', answer: 'I will familiarize myself with the codebase, close my first few tickets, and integrate fully with the team\'s workflow.', difficulty: 'B1-HARD' },
              { type: 'interview', prompt: 'Describe a time you disagreed with a manager.', answer: 'My manager wanted to push an untested feature. I expressed my concerns about bugs, and we agreed to release it as a beta to a small group instead.', difficulty: 'B1-HARD' },
              { type: 'interview', prompt: 'How do you stay updated with the latest technology trends?', answer: 'I read engineering blogs, follow industry leaders on Twitter, and build small side projects to test new tools.', difficulty: 'B1-MEDIUM' },
              { type: 'interview', prompt: 'What is your preferred tech stack and why?', answer: 'I prefer the MERN stack because JavaScript allows me to seamlessly transition between frontend and backend logic.', difficulty: 'B1-MEDIUM' },
              { type: 'interview', prompt: 'Tell me about a time you helped a teammate succeed.', answer: 'A junior dev was struggling with Redux. I sat with them for an hour and explained the core concepts until it clicked for them.', difficulty: 'B1-MEDIUM' },
              { type: 'interview', prompt: 'Do you have any questions for us?', answer: 'Yes. What is the biggest technical challenge your engineering team is facing right now?', difficulty: 'B1-MEDIUM' }
            ]
          }
        ]
      }
    ]
  }
];
