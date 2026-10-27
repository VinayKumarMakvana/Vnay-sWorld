export const b2RoleplayModules = [
  {
    order: 14,
    title: 'B2 Advanced Roleplay Engine',
    description: '25 dynamic scenarios for advanced professional interaction.',
    units: [
      {
        order: 1,
        title: 'Hostile and Difficult Scenarios',
        description: 'Managing conflict dynamically.',
        lessons: [
          {
            order: 1,
            title: 'Handling Angry Stakeholders',
            description: 'De-escalation and clarity.',
            concepts: [],
            exercises: [
              { type: 'roleplay', prompt: 'ROLEPLAY: A client is furious because the app crashed during their main event. De-escalate, apologize, and outline the immediate fix.', answer: 'I sincerely apologize for the crash during such a critical moment. We have identified a memory leak, rolled back the update, and the system is stable. I am writing a full incident report right now.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Your manager accuses you of slacking off because you haven\'t closed any tickets this week. Explain you\'ve been entirely blocked by DevOps.', answer: 'I understand it looks like I haven\'t been productive. However, I have been waiting on DevOps to provision the new servers all week. I\'ve escalated it twice but am still blocked.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You have to fire a vendor because their API is too unreliable. Have the conversation.', answer: 'We have appreciated working with you, but due to the repeated downtime over the last three months, we are terminating the contract. Our product requires a higher level of reliability.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: A senior developer rewrote all your code without telling you. Confront them professionally.', answer: 'I noticed you completely rewrote my module over the weekend. If there were issues with my code, I would have appreciated a code review so I could learn and fix it myself.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Negotiate a higher salary after you are offered the job, citing your specialized cloud architecture skills.', answer: 'Thank you for the offer, I am very excited. However, based on my specialized experience in scaling cloud infrastructure, which is critical for this role, I am looking for a base salary closer to X.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: A teammate tries to dump their workload on you right before they go on vacation. Push back.', answer: 'I hope you have a great vacation, but I cannot take on your remaining tickets. I am at full capacity with the backend migration. You will need to ask the manager to reassign them.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Inform the CEO that the startup\'s core product has a fatal security flaw and must be taken offline immediately.', answer: 'I need to urgently inform you that we found a critical vulnerability exposing user data. We must take the platform offline immediately to patch it, or we risk a massive data breach.', difficulty: 'B2-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Persuasion and Leadership',
            description: 'Guiding decisions.',
            concepts: [],
            exercises: [
              { type: 'roleplay', prompt: 'ROLEPLAY: Convince a hesitant client to move their infrastructure to the cloud.', answer: 'I understand your concerns about security. However, moving to AWS actually increases security because they have thousands of engineers dedicated to compliance, and it will cut your server costs in half.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Pitch a 4-day work week to your HR department, backed by productivity arguments.', answer: 'Data shows that a 4-day work week reduces burnout and increases retention. If we focus on async communication and cut unnecessary meetings, we can deliver the same output in four days.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Stop a scope creep from a client who wants "just one more small feature".', answer: 'That is a great idea, but we are in a code freeze to ensure stability for Friday\'s launch. Let\'s add that to the backlog for Phase 2 next month.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You are leading a team meeting and two developers start arguing personally. Take control.', answer: 'Let\'s pause right there. We are crossing into personal attacks, which is not how we operate. Let\'s stick strictly to the technical merits of the two solutions.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Convince your team to adopt TypeScript over plain JavaScript for a new enterprise project.', answer: 'I know there is a learning curve, but for an enterprise app, TypeScript is essential. It will catch a massive amount of bugs at compile time and make our code self-documenting.', difficulty: 'B2-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Technical Scenarios',
        description: 'Roleplaying architecture and code (13 exercises).',
        lessons: [
          {
            order: 1,
            title: 'Code Reviews and Outages',
            description: '13 exercises to reach 25.',
            concepts: [],
            exercises: [
              { type: 'roleplay', prompt: 'ROLEPLAY: You are doing a live pair-programming interview. The interviewer points out a bug in your code. React naturally.', answer: 'Ah, I see it now. You are right, that loop will cause an out-of-bounds error. Let me quickly adjust the condition to prevent that.', difficulty: 'B2-MEDIUM' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Decline a feature request from the marketing team because it would ruin the application\'s performance.', answer: 'I love the visual idea, but loading a 50MB video in the background will destroy the load time for mobile users. We need to find a lighter alternative.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Explain to a non-technical product manager why writing automated tests is slowing down feature delivery now, but will speed it up later.', answer: 'Right now, writing tests takes 20% of our time. But without them, every new feature breaks an old one. In three months, these tests will allow us to deploy daily with confidence.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You accidentally merged breaking code to the main branch. Inform the team.', answer: 'Hey everyone, I messed up and merged a breaking change to main. I am reverting the commit right now. Please hold off on pulling main for the next five minutes.', difficulty: 'B2-MEDIUM' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Ask a very senior architect to mentor you on system design.', answer: 'I really admire the way you architected the payment gateway. I am trying to improve my system design skills—would you be open to a 30-minute mentoring chat once a month?', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You found a major security flaw in a third-party library you use. Report it to the open-source maintainer.', answer: 'Hello, I have identified a critical vulnerability in version 2.0 regarding SQL injection. Here is the reproducible code. I have a patch ready—should I submit a PR?', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Defend your decision to use a controversial framework in a technical interview.', answer: 'I understand this framework isn\'t popular anymore. However, for this specific microservice, its ultra-low memory footprint makes it the absolute best tool for the job.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Tell an underperforming junior developer that they need to improve, without demoralizing them.', answer: 'You have great potential, but your recent PRs have had several basic errors. We need to focus on your attention to detail. Let\'s review your next few tickets together before you submit them.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: A client demands daily 1-hour status meetings. Negotiate a better communication strategy.', answer: 'Daily one-hour meetings will severely cut into our development time. Instead, how about I send you a detailed written update every morning, and we do a 30-minute sync on Fridays?', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Refuse to give a client your personal phone number.', answer: 'I prefer to keep all project communication centralized on email and Slack so the whole team has visibility. You can always reach me there during business hours.', difficulty: 'B2-MEDIUM' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Explain to a designer why their complex animation cannot be implemented on mobile web.', answer: 'The animation is beautiful, but rendering those 3D effects in a mobile browser causes massive frame drops. We need to simplify it to maintain a smooth user experience.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You are resigning. Have the conversation with your manager.', answer: 'I wanted to speak with you personally. I have accepted an offer at another company. It was a difficult decision, but it aligns with my long-term career goals. I will do everything I can to ensure a smooth transition.', difficulty: 'B2-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Ask your company to sponsor your attendance at an expensive tech conference.', answer: 'I would like to request sponsorship to attend AWS re:Invent. The workshops on serverless architecture directly align with our Q4 roadmap, and I will host a knowledge-sharing session for the team when I return.', difficulty: 'B2-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
