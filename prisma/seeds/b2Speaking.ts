export const b2SpeakingModules = [
  {
    order: 3,
    title: 'B2 Speaking Coach',
    description: '35 advanced speaking exercises (2 to 10 minutes).',
    units: [
      {
        order: 1,
        title: 'Deep Professional Analysis',
        description: 'Explaining complex systems and trends.',
        lessons: [
          {
            order: 1,
            title: 'Technology and Impact',
            description: 'Analyzing the industry.',
            concepts: [],
            exercises: [
              { type: 'speaking', prompt: 'Analyze the impact of AI on junior developers. Is it a threat or an opportunity? (3 mins).', answer: null, difficulty: 'B2-MEDIUM' },
              { type: 'speaking', prompt: 'Explain the concept of cybersecurity and why it is critical for modern businesses (3 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Discuss the pros and cons of globalization in the tech industry (4 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Defend the argument that data privacy is a fundamental human right (3 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Explain the evolution of web development over the last 10 years (3 mins).', answer: null, difficulty: 'B2-MEDIUM' },
              { type: 'speaking', prompt: 'Discuss how social media algorithms influence public opinion (4 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Predict what software engineering will look like in 2035 (3 mins).', answer: null, difficulty: 'B2-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Workplace Culture and Leadership',
            description: 'Managing people and projects.',
            concepts: [],
            exercises: [
              { type: 'speaking', prompt: 'Describe the characteristics of a toxic workplace culture and how to fix it (4 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Explain your philosophy on remote work vs hybrid vs in-office models (3 mins).', answer: null, difficulty: 'B2-MEDIUM' },
              { type: 'speaking', prompt: 'What makes a great engineering manager? Discuss with examples (3 mins).', answer: null, difficulty: 'B2-MEDIUM' },
              { type: 'speaking', prompt: 'Discuss the importance of diversity and inclusion in a tech team (3 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Explain how you handle a team member who is underperforming (4 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Argue whether agile methodologies are actually effective or just a buzzword (4 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Discuss the concept of burnout: causes, symptoms, and prevention (4 mins).', answer: null, difficulty: 'B2-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Presentations and Explanations',
        description: 'Speaking to an audience.',
        lessons: [
          {
            order: 1,
            title: 'Presenting Solutions',
            description: 'The 5-minute pitch.',
            concepts: [],
            exercises: [
              { type: 'speaking', prompt: 'Give a 5-minute presentation proposing a major architecture rewrite for a legacy application.', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Give a 5-minute pitch to a client explaining why they should buy your software solution.', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Explain a highly complex technical concept to an audience of non-technical stakeholders (5 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Present the findings of a post-mortem after a major system outage (5 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Give a 5-minute tech talk on a framework or language you love.', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Present a strategic roadmap for your team for the next 6 months (5 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Defend a controversial design decision you made in a recent project (4 mins).', answer: null, difficulty: 'B2-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Endurance and Spontaneity',
            description: 'The 7 to 10-minute challenges.',
            concepts: [],
            exercises: [
              { type: 'speaking', prompt: 'Talk for 7 minutes uninterrupted about the most challenging project of your career.', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Give a 7-minute unstructured explanation of how the internet works from top to bottom.', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Discuss for 7 minutes: The ethical responsibilities of software engineers building AI.', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Give a 7-minute retrospective on your life and career choices so far.', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Talk for 10 minutes about the future of humanity and technology. Do not stop.', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Spontaneously debate both sides of an argument: Should all software be open source? (7 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Give a 10-minute masterclass on your strongest technical skill.', answer: null, difficulty: 'B2-HARD' },
              // Pad remaining to hit 35
              { type: 'speaking', prompt: 'Explain the psychological impact of constant connectivity and smartphones (4 mins).', answer: null, difficulty: 'B2-MEDIUM' },
              { type: 'speaking', prompt: 'Discuss the trade-off between rapid development (startup speed) and code quality (enterprise stability) (4 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Argue for or against the necessity of a university degree in modern society (3 mins).', answer: null, difficulty: 'B2-MEDIUM' },
              { type: 'speaking', prompt: 'Describe an instance where a communication failure led to a project disaster, and how it could have been prevented (4 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Evaluate the role of continuous learning in the tech industry. Is it sustainable? (3 mins).', answer: null, difficulty: 'B2-MEDIUM' },
              { type: 'speaking', prompt: 'Discuss the concept of "technical debt" as if explaining it to a CFO (Chief Financial Officer) (3 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Give a 5-minute review of the best and worst technologies you have ever used.', answer: null, difficulty: 'B2-MEDIUM' }
            ]
          }
        ]
      }
    ]
  }
];
