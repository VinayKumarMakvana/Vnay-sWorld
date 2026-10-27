export const b2ListeningModules = [
  {
    order: 6,
    title: 'B2 Listening Coach',
    description: '30 advanced listening exercises.',
    units: [
      {
        order: 1,
        title: 'High-Stakes Workplace Audio',
        description: 'Fast, natural, implicit meanings.',
        lessons: [
          {
            order: 1,
            title: 'Nuanced Conversations',
            description: 'Reading between the lines.',
            concepts: [],
            exercises: [
              { type: 'listening', prompt: 'TRANSCRIPT: A: I see you proposed using Angular for the new frontend. It\'s an interesting choice, considering the team just spent six months mastering React. B: Well, I thought Angular\'s strict architecture might prevent the messy codebase we ended up with last time. A: Perhaps, but the learning curve will push the launch back by at least a month. QUESTION: How does speaker A actually feel about using Angular?', answer: 'They are against it because it will delay the launch and ignore the team\'s current skills.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Did you get a chance to look at the pull request I sent over? B: I skimmed it. The logic seems mostly fine, but we might want to have a quick chat about the naming conventions you used for those helper functions. QUESTION: What does B imply about the naming conventions?', answer: 'They are not good and need to be changed.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: Manager: I appreciate your dedication, John, but staying until midnight every night is not sustainable. I need you here and sharp for the long haul, not burning out before we even hit beta. QUESTION: What is the manager\'s main concern?', answer: 'That John will burn out before the beta launch.', difficulty: 'B2-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: Client: We love the direction you\'re taking, but we were wondering if it might be possible to incorporate a machine learning recommendation engine by next week? Developer: I appreciate your enthusiasm. While machine learning is definitely on our roadmap, integrating it securely requires a significant data training phase that extends well beyond our current sprint timeline. QUESTION: How does the developer handle the client\'s request?', answer: 'They reject the timeline politely by explaining the technical requirements.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: So, if I understand correctly, the API is rate-limiting our requests, which is why the frontend is throwing 429 errors. B: Spot on. We either need to implement exponential backoff on our end, or pay them to increase our API quota. QUESTION: What are the two proposed solutions?', answer: 'Implement exponential backoff or pay to increase the API quota.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: The candidate\'s technical skills were impeccable. He solved the algorithm in five minutes. B: I agree, but did you notice how he reacted when you questioned his approach? He became quite defensive. I\'m not sure he\'d take code reviews well. QUESTION: Why is speaker B hesitant to hire the candidate?', answer: 'The candidate was defensive when questioned, suggesting poor reaction to feedback.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I\'m afraid I won\'t be able to make the 10 AM standup. I\'m still resolving that production issue from last night. B: Understood. Just drop a quick summary in Slack so the team knows what you\'re working on. QUESTION: What does B ask A to do?', answer: 'Leave a summary of their work in Slack.', difficulty: 'B2-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Technical and Business Podcasts',
            description: 'Longer audio tracking.',
            concepts: [],
            exercises: [
              { type: 'listening', prompt: 'TRANSCRIPT: Podcast Host: Today we\'re discussing the shift from monolithic architectures to microservices. While microservices offer incredible scalability, they introduce severe operational complexity. Many startups adopt them prematurely, resulting in a distributed monolith where independent deployment is impossible and debugging is a nightmare. QUESTION: What happens when startups adopt microservices prematurely?', answer: 'They create a distributed monolith where independent deployment is impossible and debugging is difficult.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: (From previous passage) QUESTION: What is the main benefit of microservices mentioned by the host?', answer: 'Incredible scalability.', difficulty: 'B2-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: Tech Lead: The core issue here is technical debt. We took shortcuts three years ago to hit the market quickly. It was the right business decision at the time, but now, those shortcuts are strangling our velocity. We spend 80% of our time putting out fires and only 20% building new features. We need a dedicated refactoring sprint. QUESTION: Why did they take shortcuts three years ago?', answer: 'To hit the market quickly.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: (From previous passage) QUESTION: What is the current consequence of that technical debt?', answer: 'They spend 80% of their time fixing bugs instead of building new features.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: Interviewer: So, why do you want to transition from a technical role into management? Candidate: I love writing code, but over the last year, I found that my biggest impact wasn\'t the code I wrote, but the processes I improved and the junior developers I mentored. I want to multiply my impact by empowering a whole team. QUESTION: Why does the candidate want to be a manager?', answer: 'They want to multiply their impact by empowering a team and improving processes.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: The security audit came back. We failed on three critical points. The most glaring issue is that we are storing API keys in plaintext in our repository. B: Wow. That\'s a massive oversight. We need to move those to environment variables immediately before we tackle anything else. QUESTION: What is the most critical security failure mentioned?', answer: 'Storing API keys in plaintext in the repository.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I\'m completely swamped. I have three tickets due tomorrow, and the design team just changed the UI specs again. B: You need to push back. Tell them the UI changes will have to go into the next sprint, or ask the project manager to reprioritize your tickets. QUESTION: What advice does B give to A?', answer: 'Push back on the UI changes or ask the project manager to reprioritize the tickets.', difficulty: 'B2-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Endurance Listening',
        description: 'Maintaining focus.',
        lessons: [
          {
            order: 1,
            title: 'Rapid Fire and Accents',
            description: 'Listening to 16 diverse snippets.',
            concepts: [],
            exercises: [
              // Padding to 30 total
              { type: 'listening', prompt: 'TRANSCRIPT: A: Look, I\'m not saying it\'s a bad idea, I\'m just saying the timing is terrible given the upcoming audit. Let\'s table this until next quarter. QUESTION: What does "table this" mean in this context?', answer: 'To postpone the discussion or decision until later.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Our churn rate spiked by 5% last month. We need to figure out if it\'s a pricing issue or if the recent UI update frustrated our core users. QUESTION: What two potential causes is the speaker investigating?', answer: 'A pricing issue or frustration from the recent UI update.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: If you run into a CORS error, you probably just need to update the whitelist on the backend server to include localhost during development. QUESTION: How do you fix the CORS error mentioned?', answer: 'Update the whitelist on the backend server to include localhost.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I was let go during the restructuring. It was a shock initially, but they gave us a decent severance package, and honestly, the culture had been deteriorating for a while. QUESTION: How does the speaker feel about losing their job now?', answer: 'They are somewhat okay with it because of the severance and the poor company culture.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Can you walk me through the logic here? It seems like this loop is O(n squared), which is going to be a massive bottleneck as our dataset grows. QUESTION: What is the technical concern raised?', answer: 'The loop is O(n squared), which will cause a performance bottleneck with large datasets.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: The client is threatening to pull the contract if we don\'t hit the milestone on Friday. We need all hands on deck. No non-essential meetings until this is shipped. QUESTION: What does "all hands on deck" mean here?', answer: 'Everyone needs to help with the project.', difficulty: 'B2-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I negotiated a 15% raise, but it took three months of documenting my achievements and presenting a solid business case to the leadership team. It wasn\'t easy. QUESTION: How did the speaker secure a raise?', answer: 'By documenting achievements and presenting a solid business case over three months.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: The beauty of React is its component-based architecture. You build a button once, and you can reuse it across the entire application, ensuring UI consistency and saving development time. QUESTION: What are the two benefits of component-based architecture mentioned?', answer: 'Ensuring UI consistency and saving development time.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I think you\'re micromanaging the team. They are senior engineers; you need to give them the requirements and let them figure out the implementation details. QUESTION: What criticism is being leveled against the person?', answer: 'They are micromanaging senior engineers instead of letting them handle implementation.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Despite the widespread media hype, quantum computing is still largely in the research phase and is unlikely to disrupt our specific industry within the next five years. QUESTION: Does the speaker think quantum computing is an immediate threat to their industry?', answer: 'No, they believe it won\'t disrupt their industry within the next five years.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I don\'t disagree with the premise, but the execution was flawless. They managed to migrate ten million records with zero downtime. QUESTION: How does the speaker feel about the execution of the migration?', answer: 'They think the execution was flawless.', difficulty: 'B2-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: We are pivoting from a B2C model to B2B. The consumer market is just too saturated, and the enterprise clients are where the real recurring revenue is. QUESTION: Why is the company pivoting to B2B?', answer: 'The consumer market is saturated, and enterprise clients provide recurring revenue.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: You need to learn how to say no. If you keep saying yes to every small request from the sales team, your own engineering work will suffer. QUESTION: What advice is the speaker giving?', answer: 'Learn to say no to small requests to protect your own engineering work.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: The documentation is completely outdated. I spent three hours yesterday trying to configure the environment because the setup instructions are from two versions ago. QUESTION: Why did the speaker waste three hours?', answer: 'Because the setup instructions in the documentation were outdated.', difficulty: 'B2-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Let\'s wrap this up. We have a hard stop in five minutes. Sarah, can you send out the meeting minutes and action items by the end of the day? QUESTION: What does "hard stop" mean?', answer: 'The meeting must end exactly at that time, with no exceptions.', difficulty: 'B2-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: He\'s a brilliant coder, arguably the best on the team, but he is a nightmare to work with. He lacks empathy and dismisses anyone else\'s ideas out of hand. QUESTION: What is the main problem with the coder?', answer: 'He is a nightmare to work with because he lacks empathy and dismisses others\' ideas.', difficulty: 'B2-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
