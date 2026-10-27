export const a2ListeningModules = [
  {
    order: 5,
    title: 'A2 Listening Coach',
    description: '20 conversational listening exercises.',
    units: [
      {
        order: 1,
        title: 'Daily Life (Normal Speed)',
        description: 'Everyday situations.',
        lessons: [
          {
            order: 1,
            title: 'Social and Travel',
            description: 'Conversations with strangers.',
            concepts: [],
            exercises: [
              { type: 'listening', prompt: 'TRANSCRIPT: A: Have you seen my keys? B: Did you check the kitchen table? A: Yes, they aren\'t there. Oh wait, they are in my jacket pocket. QUESTION: Where were the keys?', answer: 'In the jacket pocket.', difficulty: 'A2-EASY' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I\'d like a ticket to Manchester, please. B: Single or return? A: Return, coming back on Sunday. QUESTION: When is the person coming back?', answer: 'On Sunday.', difficulty: 'A2-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: How was the movie? B: It was okay, but the ending was a bit confusing. A: Really? I thought it was a masterpiece. QUESTION: Did Person B love the movie?', answer: 'No, they thought the ending was confusing.', difficulty: 'A2-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Do you know what time the library closes? B: Usually at 8 PM, but today is a holiday so it closed at 5. QUESTION: What time did the library close today?', answer: 'At 5 PM.', difficulty: 'A2-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Are you ready to order? B: Yes, I\'ll have the vegetarian pasta, but no onions, please. QUESTION: What restriction did the customer request?', answer: 'No onions.', difficulty: 'A2-EASY' }
            ]
          },
          {
            order: 2,
            title: 'Phone Calls and Problems',
            description: 'Over the phone.',
            concepts: [],
            exercises: [
              { type: 'listening', prompt: 'TRANSCRIPT: A: Hello, I bought a blender here yesterday but it won\'t turn on. B: I apologize. Do you have your receipt? We can replace it. QUESTION: What is wrong with the blender?', answer: 'It won\'t turn on.', difficulty: 'A2-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Hi, I am calling to cancel my dentist appointment for tomorrow morning. B: Okay, would you like to reschedule for next week? A: Yes, Thursday at 2 PM. QUESTION: When is the new appointment?', answer: 'Thursday at 2 PM.', difficulty: 'A2-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Can you pick up some milk on your way home? B: Sure, do we need bread too? A: No, we have plenty of bread. QUESTION: What does person B need to buy?', answer: 'Milk.', difficulty: 'A2-EASY' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Emergency services, what is your location? B: There has been a car accident on Main Street, near the post office. QUESTION: Where is the accident?', answer: 'On Main Street, near the post office.', difficulty: 'A2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I can\'t find the meeting link in my email. B: I\'ll send it to you again on Slack right now. QUESTION: How will B send the link?', answer: 'On Slack.', difficulty: 'A2-MEDIUM' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Workplace (Normal Speed)',
        description: 'Office and Tech.',
        lessons: [
          {
            order: 1,
            title: 'Meetings and Teamwork',
            description: 'Collaborating.',
            concepts: [],
            exercises: [
              { type: 'listening', prompt: 'TRANSCRIPT: Manager: We are falling behind schedule. We need to finish the testing phase by Friday. Team: We can do it if we work late on Thursday. Manager: Approved. QUESTION: When must the testing phase be finished?', answer: 'By Friday.', difficulty: 'A2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Can you review my pull request? B: I am in a meeting for the next hour. I\'ll look at it after lunch. QUESTION: When will B review the pull request?', answer: 'After lunch.', difficulty: 'A2-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I think we should use AWS for hosting. B: I disagree. It is too expensive for our budget. Let\'s use Vercel. QUESTION: Why does B disagree with using AWS?', answer: 'It is too expensive.', difficulty: 'A2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Are you joining the all-hands meeting? B: Yes, I just need to grab a coffee first. I will be there in two minutes. QUESTION: What is B doing before the meeting?', answer: 'Grabbing a coffee.', difficulty: 'A2-EASY' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: The client wants to add a chat feature. B: That wasn\'t in the original scope. We need to charge them extra for that. QUESTION: What does the client want to add?', answer: 'A chat feature.', difficulty: 'A2-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Tech Discussions',
            description: 'Bugs and Updates.',
            concepts: [],
            exercises: [
              { type: 'listening', prompt: 'TRANSCRIPT: Dev: The server crashed because of a memory leak in the new background job. I am rolling back the deployment. QUESTION: Why did the server crash?', answer: 'Because of a memory leak.', difficulty: 'A2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: How do I center this div? B: Just use flexbox. Add display flex and justify content center. QUESTION: What CSS tool did B suggest?', answer: 'Flexbox.', difficulty: 'A2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I pushed the changes, but the build failed on GitHub Actions. B: Check the logs, it might be a linting error. QUESTION: Where did the build fail?', answer: 'On GitHub Actions.', difficulty: 'A2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: This database query is too slow. It takes 5 seconds. B: We should add an index to the email column. QUESTION: What is the solution to the slow query?', answer: 'Add an index to the email column.', difficulty: 'A2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Good morning, for my standup: Yesterday I wrote unit tests. Today I will fix the header styling. No blockers. QUESTION: What will A do today?', answer: 'Fix the header styling.', difficulty: 'A2-MEDIUM' }
            ]
          }
        ]
      }
    ]
  }
];
