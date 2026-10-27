export const b2SoftSkillsModules = [
  {
    order: 10,
    title: 'B2 Soft Skills Coach',
    description: '30 advanced scenario-based exercises for leadership and conflict.',
    units: [
      {
        order: 1,
        title: 'Leadership and Influence',
        description: 'Influencing without authority.',
        lessons: [
          {
            order: 1,
            title: 'Guiding Teams',
            description: 'Mentoring and directing.',
            concepts: [],
            exercises: [
              { type: 'soft_skills', prompt: 'A junior developer is devastated after breaking the build. How do you comfort and mentor them?', answer: '"Don\'t worry, it happens to all of us. Let\'s treat this as a learning opportunity. We can pair-program to fix it and then write a test to prevent it happening again."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'You need to convince a stubborn senior developer to adopt a new testing framework.', answer: '"I know you are very comfortable with the old framework, but I ran some benchmarks, and the new one cuts testing time in half. Could we try it on a small module first?"', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'The team is demoralized after a failed launch. Give a brief, motivating statement.', answer: '"This launch didn\'t go as planned, but the effort you all put in was incredible. Let\'s figure out what went wrong, fix it, and come back stronger."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'A team member is constantly talking over others in meetings. Address it privately.', answer: '"I wanted to mention that sometimes in meetings, you jump in before others finish. I value your input, but we need to make sure everyone has space to speak."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'Give constructive feedback to a colleague whose code works, but is unreadable and undocumented.', answer: '"Your logic is solid and it solves the problem perfectly. However, the code is a bit hard to follow for anyone else. Could you add some comments and break down those large functions?"', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'You are leading a meeting that is going completely off-track. Bring it back.', answer: '"This is a fascinating discussion, but we only have ten minutes left. Let\'s table this topic for later and get back to finalizing the API endpoints."', difficulty: 'B2-MEDIUM' },
              { type: 'soft_skills', prompt: 'A colleague is clearly burning out. Approach them and offer support.', answer: '"You\'ve been working incredibly long hours lately, and I\'m worried about you. Is there anything on your plate that I can help take over?"', difficulty: 'B2-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Cross-Cultural and Client Communication',
            description: 'Handling misunderstandings.',
            concepts: [],
            exercises: [
              { type: 'soft_skills', prompt: 'An international client misinterprets your directness as rudeness. Clarify your intention.', answer: '"I apologize if my previous email came across as blunt; that was certainly not my intention. I just wanted to ensure we were aligned on the critical blockers."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'A client requests a change that violates industry regulations. Refuse professionally.', answer: '"While I understand the goal behind this request, implementing it would violate data protection regulations. However, we can achieve a similar result using this compliant alternative."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'A stakeholder is using technical buzzwords incorrectly, confusing the team. Correct them politely.', answer: '"Just to make sure we are all on the same page regarding \'blockchain\' in this context—are we actually looking for a distributed ledger, or just a secure database?"', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'You don\'t understand an idiomatic expression a native speaker used in a meeting. Ask for clarification.', answer: '"I\'m not entirely familiar with the phrase \'boil the ocean\'. Could you clarify what you mean in this context?"', difficulty: 'B2-MEDIUM' },
              { type: 'soft_skills', prompt: 'De-escalate a situation where a client is yelling about a missed deadline you were not responsible for.', answer: '"I hear how frustrated you are, and I completely understand why. Let\'s focus right now on getting this resolved today, and then we can look at why the timeline slipped."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'Deliver bad news to a client: a major feature they wanted is technically impossible within budget.', answer: '"I have reviewed the requirements with the engineering team. Unfortunately, building that feature within the current budget is not feasible. We can either increase the budget, or descale the feature."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'Set professional boundaries with a client who keeps texting you on weekends.', answer: '"I am fully dedicated to this project, but I am unavailable on weekends. Please email me, and I will make it my first priority on Monday morning."', difficulty: 'B2-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Conflict and High-Stakes Negotiation',
        description: 'Navigating difficult workplace dynamics.',
        lessons: [
          {
            order: 1,
            title: 'Conflict Resolution',
            description: '16 exercises to reach 30.',
            concepts: [],
            exercises: [
              { type: 'soft_skills', prompt: 'Two senior engineers are aggressively arguing over architecture in a meeting. Intervene.', answer: '"Let\'s lower the temperature a bit. Both of you have valid points. Let\'s write down the pros and cons of both approaches and review them objectively."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'Your manager takes credit for a major optimization you implemented. Address it privately.', answer: '"I noticed in the meeting that you presented the database optimization as a team effort. While I\'m glad it\'s successful, I drove that initiative entirely and would appreciate the recognition."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'A colleague constantly shoots down your ideas without offering alternatives. Confront them.', answer: '"I appreciate critical feedback, but I\'ve noticed you often dismiss my proposals without offering another solution. It would be more productive if we could collaborate on finding a better way."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'You strongly disagree with your manager\'s ethical decision regarding user data. Express your concern.', answer: '"I have significant concerns about how we are handling this user data. I believe it compromises our users\' trust and potentially violates compliance standards."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'You have been assigned to a project with someone you have a difficult history with. Clear the air.', answer: '"I know we\'ve had our differences in the past, but I want to make sure we can work effectively on this project. Let\'s agree to communicate openly and keep things professional."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'Push back on a product manager who is prioritizing new features over fixing critical tech debt.', answer: '"If we don\'t dedicate this sprint to fixing the technical debt, the system will become unstable, and building new features will take twice as long next month."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'Apologize to your team for making a poor architectural decision that cost everyone time.', answer: '"I want to own up to a mistake. My decision to use that framework was flawed, and it cost us a week of work. I apologize, and I have a plan to pivot us back on track."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'Negotiate with another team that is blocking your deployment because they haven\'t finished their API.', answer: '"We are completely blocked until your API is ready. Can we help you finish it, or is there a way you can provide a mocked endpoint so we can continue testing?"', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'A junior developer asks for a massive salary increase that they haven\'t earned. Handle the conversation.', answer: '"I appreciate your ambition. While a raise of that size isn\'t possible right now based on your current output, let\'s build a roadmap of what you need to achieve to get there in six months."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'You discover a colleague is lying on their status reports. Confront them.', answer: '"I noticed a discrepancy between your status report and the actual commits in the repository. We need to be accurate about our progress so the team can plan effectively."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'Decline an invitation to a non-essential meeting to protect your focus time.', answer: '"I would love to join, but I am under a strict deadline for the backend migration. Unless my input is absolutely critical, I\'ll have to skip this one. Please send me the notes."', difficulty: 'B2-MEDIUM' },
              { type: 'soft_skills', prompt: 'Ask for an extension on a deadline before the deadline arrives.', answer: '"I am analyzing the current progress, and due to the unexpected complexity of the payment gateway, I need to request an extension until Wednesday to ensure it is secure."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'Respond to a passive-aggressive email from a colleague.', answer: '"I sense some frustration in your email. Rather than going back and forth over text, let\'s jump on a quick five-minute call to clear this up."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'A recruiter contacts you, but you are not looking for a job. Respond professionally and keep the connection.', answer: '"Thank you for reaching out. I am very happy in my current role and not looking to move, but I would love to stay connected for the future."', difficulty: 'B2-MEDIUM' },
              { type: 'soft_skills', prompt: 'You are promoted over a peer who also wanted the job. Manage the relationship.', answer: '"I know you were also hoping for this role. I highly value your expertise and I want to ensure we continue to work together effectively. Your input will be crucial to my success."', difficulty: 'B2-HARD' },
              { type: 'soft_skills', prompt: 'Convince a stakeholder to kill a pet project that is draining company resources.', answer: '"I have reviewed the metrics for this project, and the ROI simply isn\'t there. It is draining resources from our core product. I strongly recommend we sunset it."', difficulty: 'B2-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
