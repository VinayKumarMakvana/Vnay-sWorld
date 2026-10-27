export const b2InterviewModules = [
  {
    order: 12, // B1 was 10, let's just keep them ordered in the seed script
    title: 'B2 Interview Mastery',
    description: '25 advanced behavioral and technical interview questions.',
    units: [
      {
        order: 1,
        title: 'Advanced Behavioral (STAR)',
        description: 'Handling complex leadership and failure questions.',
        lessons: [
          {
            order: 1,
            title: 'Failure, Ambiguity, and Conflict',
            description: 'The hardest questions.',
            concepts: [],
            exercises: [
              { type: 'interview', prompt: 'Tell me about a time you made a critical mistake that affected the whole company.', answer: 'I deployed a bug that caused our checkout page to crash for an hour. I immediately reverted the commit, wrote an incident report, and implemented a new automated test to ensure it never happened again.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'Describe a situation where you had to work with extreme ambiguity or changing requirements.', answer: 'The client kept changing the scope of the mobile app. I implemented an agile approach, delivering small, functional pieces every week so they could see the progress and finalize their decisions early.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'Tell me about a time you strongly disagreed with a senior leader\'s technical decision.', answer: 'The CTO wanted to use a NoSQL database for relational financial data. I presented a brief report highlighting the ACID compliance risks, and we eventually agreed to use PostgreSQL instead.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'How do you handle a team member who is consistently underperforming and dragging the team down?', answer: 'I try to understand if it\'s a skill issue or a motivation issue. I had a junior dev struggling with React, so I scheduled weekly pair-programming sessions until they got up to speed.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'Tell me about a time you had to deliver a project on an impossible deadline.', answer: 'We had two weeks to build a feature that normally takes four. I negotiated with stakeholders to cut non-essential features, creating a strict MVP that we delivered on time.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'Give an example of a time you had to influence someone when you had no formal authority over them.', answer: 'I needed the design team to change their workflow to match our sprints. I didn\'t manage them, so I framed it around how it would reduce their stress and rework. They agreed to try it.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'Tell me about a time you failed to meet a commitment. What happened?', answer: 'I promised to finish a backend integration, but a third-party API went down. I failed the deadline, but I communicated the blocker immediately to the stakeholders so they could adjust their plans.', difficulty: 'B2-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Leadership and Career',
            description: 'Vision and ownership.',
            concepts: [],
            exercises: [
              { type: 'interview', prompt: 'What is your approach to dealing with technical debt?', answer: 'Technical debt is inevitable, but it must be managed. I advocate for dedicating 20% of every sprint exclusively to refactoring and paying down debt before it paralyzes development.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'How do you ensure your skills don\'t become obsolete in such a fast-paced industry?', answer: 'I dedicate 5 hours a week to learning. I build small side projects in new languages, read engineering blogs from companies like Netflix and Stripe, and attend local tech meetups.', difficulty: 'B2-MEDIUM' },
              { type: 'interview', prompt: 'Tell me about a time you took ownership of a problem that wasn\'t technically your responsibility.', answer: 'The marketing team\'s landing page was loading incredibly slowly. It wasn\'t my project, but I spent my lunch break compressing their images and caching assets, which boosted their conversion rate.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'If you join us, what do you anticipate being your biggest challenge in the first 90 days?', answer: 'My biggest challenge will likely be mastering the intricacies of your proprietary deployment pipeline and understanding the historical context behind the current architecture choices.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'How do you evaluate if a new technology or framework is worth adopting for a project?', answer: 'I look at the community support, the documentation quality, and whether it solves a specific problem we have better than our current stack. I never adopt tech just because it\'s trendy.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'Describe your ideal engineering culture.', answer: 'My ideal culture values psychological safety, where people can admit mistakes without fear. It prioritizes automated testing, continuous integration, and transparent communication across departments.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'Where do you see yourself in five years?', answer: 'In five years, I want to be a Staff Engineer or Architect, leading technical strategy for a major product line and actively mentoring the next generation of developers in the company.', difficulty: 'B2-MEDIUM' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Technical Discussion and Pushback',
        description: 'Handling pressure (11 exercises).',
        lessons: [
          {
            order: 1,
            title: 'Technical Pushback',
            description: 'When the interviewer challenges you.',
            concepts: [],
            exercises: [
              { type: 'interview', prompt: 'Interviewer: "I think your approach here is overly complex and won\'t scale." How do you respond?', answer: 'I appreciate the feedback. My reasoning for this complexity is to handle edge cases in data synchronization. However, I am open to simpler alternatives if you think we can bypass those edge cases.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'Interviewer: "We actually prefer a completely different architecture here." How do you pivot?', answer: 'That\'s very interesting. I used this architecture based on my past experience, but I am very adaptable. Could you tell me more about the benefits you\'ve seen with your approach?', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'What are your salary expectations for this role?', answer: 'Based on my research of the market rate for Senior Developers in this city, and my specific experience in scaling cloud infrastructure, I am looking for a base salary between X and Y.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'Why is there a gap in your resume?', answer: 'I took six months off to travel and focus on personal development. During that time, I also contributed to several open-source projects to keep my skills sharp.', difficulty: 'B2-MEDIUM' },
              { type: 'interview', prompt: 'Why should we hire you over the other candidates?', answer: 'I don\'t know the other candidates, but I bring a unique combination of deep technical expertise in backend systems and a proven track record of bridging the communication gap with non-technical stakeholders.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'What is your biggest weakness?', answer: 'I sometimes struggle with delegating tasks because I want to ensure they are done perfectly. I am actively working on trusting my team more and focusing on high-level architecture instead.', difficulty: 'B2-MEDIUM' },
              { type: 'interview', prompt: 'Tell me about a time you received critical feedback you disagreed with.', answer: 'My manager said my code was too slow to deliver. I disagreed, as I was focusing on security. However, I realized my communication was the issue—I hadn\'t explained why it was taking longer.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'How do you handle context-switching when you are assigned to multiple projects?', answer: 'I use strict time-blocking. I dedicate specific half-days to specific projects and mute notifications outside of those blocks to maintain deep focus.', difficulty: 'B2-MEDIUM' },
              { type: 'interview', prompt: 'Can you explain a complex technical concept to me as if I were a non-technical recruiter?', answer: 'An API is like a waiter in a restaurant. You (the client) give the waiter your order, the waiter takes it to the kitchen (the server), and then brings your food (the data) back to you.', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'What questions do you have for us?', answer: 'Yes. Can you tell me about a recent technical challenge the team faced and how you overcame it? Also, how does the engineering team interface with product management here?', difficulty: 'B2-HARD' },
              { type: 'interview', prompt: 'If we hired you, what would you do on your very first day?', answer: 'I would set up my development environment, pull down the main repository, review the existing documentation, and try to introduce myself to every member of my immediate team.', difficulty: 'B2-MEDIUM' }
            ]
          }
        ]
      }
    ]
  }
];
