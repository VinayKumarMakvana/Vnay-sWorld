export const b1ListeningModules = [
  {
    order: 6,
    title: 'B1 Listening Coach',
    description: '25 natural-speed listening exercises.',
    units: [
      {
        order: 1,
        title: 'Workplace and Meetings (Natural Speed)',
        description: 'Professional scenarios.',
        lessons: [
          {
            order: 1,
            title: 'Project Discussions',
            description: 'Tech and delays.',
            concepts: [],
            exercises: [
              { type: 'listening', prompt: 'TRANSCRIPT: A: I was looking at the timeline, and honestly, there is no way we can deliver the payment gateway by Tuesday. B: Really? What\'s the hold-up? A: We are still waiting for the API keys from the third-party provider, and integration will take at least three days. QUESTION: Why is the payment gateway delayed?', answer: 'They are waiting for API keys from a third-party provider.', difficulty: 'B1-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Hey, did you manage to fix that memory leak? B: Mostly, yes. I tracked it down to the image processing module. It wasn\'t clearing the cache after uploading. I\'ve pushed a patch, but I want QA to test it thoroughly. QUESTION: Where was the memory leak coming from?', answer: 'The image processing module.', difficulty: 'B1-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: Manager: So, I\'ve reviewed the proposals. I like the first one, but the budget is too high. The second one is cheaper, but it doesn\'t cover all our security requirements. Let\'s try to negotiate a better price for the first option. QUESTION: What does the manager want to do?', answer: 'Negotiate a better price for the first proposal.', difficulty: 'B1-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Are you attending the webinar at 3? B: I wanted to, but my manager just scheduled an urgent sync regarding the new client. A: No worries, I\'ll take notes and send you the summary. QUESTION: Why can\'t B attend the webinar?', answer: 'Because of an urgent meeting with their manager.', difficulty: 'B1-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: We need to decide on the tech stack. B: I strongly believe we should stick to React. Our team is already familiar with it, which means we can move much faster than if we try to learn Vue from scratch right now. QUESTION: Why does B want to use React?', answer: 'The team is familiar with it, so they can develop faster.', difficulty: 'B1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Client Conversations',
            description: 'Handling external requests.',
            concepts: [],
            exercises: [
              { type: 'listening', prompt: 'TRANSCRIPT: Client: The new dashboard looks great, but could we add a feature to export the data to PDF? Dev: We can certainly do that, but since it\'s out of the original scope, it will require an extra week of development. QUESTION: What is the developer\'s response to the client\'s request?', answer: 'It is possible but will take an extra week because it is out of scope.', difficulty: 'B1-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: Client: The website is incredibly slow today. We are losing customers. Dev: I sincerely apologize. We are currently experiencing a DDoS attack on our servers. The infrastructure team is mitigating it right now. QUESTION: What is causing the website to be slow?', answer: 'A DDoS attack on the servers.', difficulty: 'B1-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I sent over the contract yesterday. Have you had a chance to look it over? B: Yes, everything looks good except for section four. I need my legal team to review the liability clause before I can sign. QUESTION: What is preventing B from signing the contract?', answer: 'The legal team needs to review the liability clause in section four.', difficulty: 'B1-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: If we launch on Friday, we won\'t have anyone available for support over the weekend if something breaks. B: Good point. Let\'s push the launch to Monday morning so we have the full week to monitor it. QUESTION: Why did they change the launch date?', answer: 'To ensure team members are available for support if something breaks.', difficulty: 'B1-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: Client: I noticed the fonts on the mobile version are a bit too small. Dev: Good catch. That should be a quick CSS fix. I will update the media queries and have it ready for you to review by this afternoon. QUESTION: How will the developer fix the issue?', answer: 'By updating the media queries in the CSS.', difficulty: 'B1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Interviews and General Contexts',
        description: 'Complex listening.',
        lessons: [
          {
            order: 1,
            title: 'Interviews',
            description: 'Listening to responses.',
            concepts: [],
            exercises: [
              { type: 'listening', prompt: 'TRANSCRIPT: Interviewer: Tell me about a time you disagreed with a colleague. Candidate: In my last job, a senior dev wanted to use a complex architecture. I felt it was overkill. We sat down, compared the long-term maintenance costs, and eventually agreed on a simpler approach. QUESTION: How did the candidate resolve the disagreement?', answer: 'By comparing the long-term maintenance costs with the colleague.', difficulty: 'B1-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: Interviewer: Why are you leaving your current role? Candidate: I\'ve learned a lot there, but there is no room for upward mobility. I am looking for a company where I can take on more leadership responsibilities. QUESTION: Why is the candidate leaving?', answer: 'There is no room for upward mobility/promotion.', difficulty: 'B1-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: Interviewer: What is your biggest weakness? Candidate: I sometimes struggle to delegate tasks because I like to have control over the code quality. However, I have been using project management tools to better distribute work lately. QUESTION: How is the candidate addressing their weakness?', answer: 'By using project management tools to distribute work.', difficulty: 'B1-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: To sum up, we will migrate the database over the weekend, Sarah will handle client communication, and John will monitor the logs. Are we all aligned? B: Yes, sounds like a plan. QUESTION: What is John\'s role in the plan?', answer: 'To monitor the logs.', difficulty: 'B1-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I was wondering if you could give me some feedback on my presentation. B: Overall it was great, but you rushed through the technical slides. Next time, try to slow down and explain the diagrams more clearly. QUESTION: What was the critical feedback given?', answer: 'The person rushed through the technical slides.', difficulty: 'B1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Longer Audio Contexts',
            description: 'Following a story (10 exercises).',
            concepts: [],
            exercises: [
              // Padding out the remaining 10 exercises to hit 25 total
              { type: 'listening', prompt: 'TRANSCRIPT: Podcast Host: Today we are talking about burnout in the tech industry. It\'s not just about working long hours; it\'s often caused by a lack of clarity in your role, or constantly shifting priorities from management. QUESTION: According to the host, what is a cause of burnout besides long hours?', answer: 'Lack of clarity in the role or constantly shifting priorities.', difficulty: 'B1-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I missed my flight because the train to the airport broke down. By the time I arrived, the gate had closed. I had to pay $200 for a new ticket for the next day. QUESTION: Why did the person miss their flight?', answer: 'The train to the airport broke down.', difficulty: 'B1-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: The apartment is beautiful, but the rent is slightly over my budget, and it doesn\'t include utilities. I think I will keep looking for a place closer to the subway. QUESTION: Why is the person rejecting the apartment?', answer: 'It is over budget, excludes utilities, and is not close to the subway.', difficulty: 'B1-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I started learning guitar last month. It\'s incredibly frustrating because my fingers hurt and I can\'t switch chords fast enough. But I practice 20 minutes a day, and I\'m slowly seeing progress. QUESTION: What is frustrating about learning the guitar for the speaker?', answer: 'Fingers hurt and switching chords is too slow.', difficulty: 'B1-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Do you think we should invest in this marketing campaign? B: Honestly, the ROI seems too low. Unless they can guarantee a better conversion rate, I\'d rather put that budget into product development. QUESTION: Where does B prefer to spend the budget?', answer: 'On product development.', difficulty: 'B1-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Hello, IT support. B: Hi, my laptop keeps freezing when I open the IDE. I have already tried restarting it and clearing the cache, but nothing works. A: Okay, let\'s check your RAM usage. QUESTION: What did the user already try before calling?', answer: 'Restarting the laptop and clearing the cache.', difficulty: 'B1-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: The conference was a bit of a letdown. The keynote speaker was fantastic, but the workshops were too basic and the networking session was completely disorganized. QUESTION: What was the only good part of the conference?', answer: 'The keynote speaker.', difficulty: 'B1-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: Can we postpone the code review until tomorrow? I am currently dealing with a production incident that requires my full attention. B: No problem, let\'s sync up tomorrow at 10. QUESTION: Why does A want to postpone the review?', answer: 'Because of a production incident.', difficulty: 'B1-HARD' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: I prefer working remotely because I save two hours a day on commuting. However, I do miss the spontaneous brainstorming sessions we used to have around the whiteboard in the office. QUESTION: What does the speaker miss about the office?', answer: 'Spontaneous brainstorming sessions around the whiteboard.', difficulty: 'B1-MEDIUM' },
              { type: 'listening', prompt: 'TRANSCRIPT: A: As a junior developer, the best piece of advice I received was to read other people\'s code. Writing code is important, but reading advanced code teaches you architecture and patterns you wouldn\'t think of on your own. QUESTION: What is the advice given in the audio?', answer: 'To read other people\'s code to learn architecture and patterns.', difficulty: 'B1-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
