export const b1SoftSkillsModules = [
  {
    order: 3,
    title: 'B1 Soft Skills Coach',
    description: '25 scenario-based professional interaction exercises.',
    units: [
      {
        order: 1,
        title: 'Conflict and Negotiation',
        description: 'Handling difficult conversations.',
        lessons: [
          {
            order: 1,
            title: 'Handling Disagreement',
            description: 'Professional conflict.',
            concepts: [],
            exercises: [
              { type: 'soft_skills', prompt: 'Your manager shoots down your idea publicly in a meeting. How do you respond respectfully?', answer: '"I appreciate your feedback. Can we discuss my reasoning offline later?"', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'A team member constantly interrupts you. How do you assert yourself?', answer: '"Please let me finish my point, and then I would love to hear your thoughts."', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'You realize a colleague\'s code is going to break the system. How do you tell them?', answer: '"I was looking at your PR, and I have a concern about how this might affect the database load. Can we review it together?"', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'Two team members are arguing in a meeting. Intervene to calm the situation.', answer: '"Let\'s take a step back. Both of you have valid points. Let\'s look at the data before deciding."', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'You strongly disagree with a client\'s feature request because it\'s insecure. Explain why.', answer: '"I understand you want this feature, but implementing it this way introduces a significant security risk. Here is a safer alternative."', difficulty: 'B1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Negotiation and Boundaries',
            description: 'Protecting your time.',
            concepts: [],
            exercises: [
              { type: 'soft_skills', prompt: 'Your manager asks you to work over the weekend for the third time this month. Push back.', answer: '"I am committed to the project, but I need this weekend to recharge so I don\'t burn out. Can we prioritize tasks for Monday instead?"', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'A client asks for an extra feature for free. Negotiate.', answer: '"We can certainly build that feature, but it is outside the current scope. I can send you a separate quote for it."', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'You have too much work and cannot meet a deadline. Tell your manager.', answer: '"I am currently at capacity. To ensure high quality, I will need either more time or someone to assist me with the backlog."', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'A colleague takes credit for your work in a meeting. Correct the record politely.', answer: '"I am glad the team likes the feature! I really enjoyed building that specific module."', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'You need to ask for a raise. Start the conversation.', answer: '"I would like to schedule some time to discuss my career progression and compensation, based on my recent contributions."', difficulty: 'B1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Leadership and Support',
        description: 'Being a great teammate.',
        lessons: [
          {
            order: 1,
            title: 'Mentoring and Feedback',
            description: 'Helping others grow.',
            concepts: [],
            exercises: [
              { type: 'soft_skills', prompt: 'Give constructive feedback to a junior dev who writes messy code.', answer: '"You solved the problem well, but the code could be more readable. Let me show you some best practices for formatting."', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'A teammate is visibly stressed. Offer support.', answer: '"You seem really overwhelmed lately. Is there anything I can take off your plate?"', difficulty: 'B1-MEDIUM' },
              { type: 'soft_skills', prompt: 'You are reviewing a colleague\'s work that is excellent. Praise them specifically.', answer: '"This implementation is really clean and efficient. Great job on handling the edge cases!"', difficulty: 'B1-MEDIUM' },
              { type: 'soft_skills', prompt: 'A junior developer asks you a question you don\'t know the answer to. Respond.', answer: '"That is a great question. I don\'t know off the top of my head, but let\'s look at the documentation together."', difficulty: 'B1-MEDIUM' },
              { type: 'soft_skills', prompt: 'Encourage a teammate who is struggling with imposter syndrome.', answer: '"You are doing great. We all struggle with this. Look at how much you\'ve learned in the last three months."', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'Summarize a long, confusing meeting to ensure everyone is aligned.', answer: '"So, to summarize our action items: Sarah is doing X, John is doing Y, and I will do Z by Friday. Is that correct?"', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'Redirect a conversation that has gone completely off-topic during a meeting.', answer: '"This is a great discussion, but in the interest of time, let\'s bring it back to the main agenda."', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'Apologize for a significant mistake you made that cost the company money.', answer: '"I take full responsibility for the error. I have implemented a new check to ensure this never happens again."', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'Ask a senior developer to be your mentor.', answer: '"I really admire your work and would love to learn from you. Would you be open to a 30-minute mentoring chat once a month?"', difficulty: 'B1-HARD' },
              { type: 'soft_skills', prompt: 'Explain a delay to a client without blaming your teammates.', answer: '"We have encountered an unexpected technical complexity, which will delay the delivery by two days. We are working hard to resolve it."', difficulty: 'B1-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
