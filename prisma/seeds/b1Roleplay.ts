export const b1RoleplayModules = [
  {
    order: 10,
    title: 'B1 Interactive Roleplay',
    description: '20 dynamic scenarios for practical communication.',
    units: [
      {
        order: 1,
        title: 'Workplace Conflicts and Delays',
        description: 'Managing expectations.',
        lessons: [
          {
            order: 1,
            title: 'Handling Managers',
            description: 'Upward communication.',
            concepts: [],
            exercises: [
              { type: 'roleplay', prompt: 'ROLEPLAY: Your manager asks you to finish a 5-day task by tomorrow. Explain why it\'s impossible and propose an alternative.', answer: 'I understand this is urgent, but the database migration alone takes two days. If we drop the secondary feature, I can deliver the core functionality by Friday.', difficulty: 'B1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You broke the production server. Confess to your manager.', answer: 'I made a mistake during the deployment and the server is down. I have already identified the issue and am reverting the commit right now.', difficulty: 'B1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Ask your manager for a budget to buy a new software tool.', answer: 'I would like to request a license for Tool X. It costs $50 a month, but it will save the team at least five hours a week in manual testing.', difficulty: 'B1-MEDIUM' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Your manager gives you negative feedback that you think is unfair. Respond.', answer: 'I appreciate the feedback, but I want to clarify that the delay was caused by the third-party API being down, not my code.', difficulty: 'B1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Request time off during a busy sprint.', answer: 'I know we are in the middle of a sprint, but I need to take two days off next week for personal reasons. I have already asked John to cover my tickets.', difficulty: 'B1-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Colleague Interactions',
            description: 'Team dynamics.',
            concepts: [],
            exercises: [
              { type: 'roleplay', prompt: 'ROLEPLAY: A colleague\'s code is very messy. Ask them to fix it during a code review.', answer: 'Your logic works perfectly, but the code is a bit hard to read. Could you refactor it into smaller functions before we merge?', difficulty: 'B1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You need a colleague\'s help, but they look busy.', answer: 'I\'m sorry to interrupt. Are you busy right now? I am stuck on a React error and could really use a second pair of eyes.', difficulty: 'B1-MEDIUM' },
              { type: 'roleplay', prompt: 'ROLEPLAY: A teammate missed their deadline, which is blocking your work.', answer: 'Hey, just checking in on the API endpoint. I am blocked until it is finished. Do you know when it will be ready?', difficulty: 'B1-MEDIUM' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Disagree with a senior developer\'s technical decision.', answer: 'I see why you chose this architecture, but I am worried it won\'t scale well. Have we considered using a microservice instead?', difficulty: 'B1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Apologize to a colleague for snapping at them when you were stressed.', answer: 'I want to apologize for my tone earlier today. I was stressed about the deadline, but that is no excuse. I am sorry.', difficulty: 'B1-MEDIUM' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Clients and External Communication',
        description: 'Customer-facing.',
        lessons: [
          {
            order: 1,
            title: 'Managing Clients',
            description: 'Expectations and support.',
            concepts: [],
            exercises: [
              { type: 'roleplay', prompt: 'ROLEPLAY: A client is angry about a bug. De-escalate.', answer: 'I am very sorry for the inconvenience this bug has caused you. Our team is actively working on a fix right now, and I will update you in one hour.', difficulty: 'B1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Tell a client that a feature they want will cost extra.', answer: 'That is a great feature idea. However, since it is outside the original scope, it will require an additional budget of $500.', difficulty: 'B1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: A client keeps changing their mind. Politely lock down the requirements.', answer: 'To ensure we meet the deadline, we need to finalize these requirements today. Any further changes will have to wait for the next phase.', difficulty: 'B1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Explain a highly technical problem to a non-technical client.', answer: 'Our server ran out of memory, which is like a computer trying to hold too many files open at once. We have upgraded the memory, so it is fixed.', difficulty: 'B1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Lead a kickoff meeting with a new client.', answer: 'Welcome everyone! Today we will discuss the project goals, establish our communication channels, and agree on the timeline for the first milestone.', difficulty: 'B1-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Networking and Social',
            description: 'Small talk.',
            concepts: [],
            exercises: [
              { type: 'roleplay', prompt: 'ROLEPLAY: You meet a recruiter at a tech conference. Pitch yourself.', answer: 'Hi, I am a full-stack developer with 2 years of experience in React and Node. I am currently looking for opportunities in the fintech space.', difficulty: 'B1-MEDIUM' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You are at an office party and don\'t know anyone. Start a conversation.', answer: 'Hi, I don\'t think we\'ve met. I\'m John from the engineering team. What department are you in?', difficulty: 'B1-EASY' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You want to end a networking conversation politely.', answer: 'It was great talking to you! I am going to grab another coffee, but let\'s connect on LinkedIn.', difficulty: 'B1-MEDIUM' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Ask someone about their career journey at a meetup.', answer: 'Your presentation was great. How did you get started in machine learning?', difficulty: 'B1-MEDIUM' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You forgot someone\'s name halfway through a conversation.', answer: 'I am so sorry, I am terrible with names. Could you remind me of your name again?', difficulty: 'B1-MEDIUM' }
            ]
          }
        ]
      }
    ]
  }
];
