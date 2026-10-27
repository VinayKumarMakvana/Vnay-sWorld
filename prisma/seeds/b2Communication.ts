export const b2CommunicationModules = [
  {
    order: 2,
    title: 'B2 Advanced Communication',
    description: 'Nuanced arguments, debate, and problem-solving.',
    units: [
      {
        order: 1,
        title: 'Argumentation and Debate',
        description: 'Defending complex ideas.',
        lessons: [
          {
            order: 1,
            title: 'Qualifying Statements',
            description: 'Avoiding absolute extremes.',
            concepts: [
              {
                order: 1,
                title: 'Nuance in Opinions',
                explanation: 'Instead of saying "This is a terrible idea," say "While I see the benefit, I have significant concerns about..."',
                hindiSupport: 'Seedhe reject karne ke bajaye, baat ko thoda balance karke bolna.',
                examples: [
                  { english: 'To a certain extent, I agree, but we also must consider the security implications.', hindi: 'Ek hadd tak main sehmat hoon, lekin humein security implications par bhi vichar karna hoga.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Argue that remote work is good, but acknowledge and qualify its downsides (2 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Respond to a proposal you partially agree with, using qualifying language (1.5 mins).', answer: null, difficulty: 'B2-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Structuring a Rebuttal',
            description: 'Countering arguments logically.',
            concepts: [
              {
                order: 1,
                title: 'The Counter-Argument Framework',
                explanation: '1. Acknowledge their point. 2. Introduce the pivot ("However", "That being said"). 3. State your counter-evidence.',
                hindiSupport: 'Pehle unki baat suno, fir pivot word use karo, aur ant mein apna logic do.',
                examples: [
                  { english: 'You made a fair point about speed. That being said, if we sacrifice security for speed, it will cost us more in the long run.', hindi: 'Aapki speed wali baat sahi hai. Phir bhi, agar hum speed ke liye security se samjhauta karte hain, toh aage chalkar humein zyada nuksan hoga.' }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'Your colleague argues that testing is a waste of time. Counter their argument logically.', answer: 'I understand it takes time upfront. However, the data shows that catching bugs in production takes three times as long to fix. Testing actually saves us time.', difficulty: 'B2-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Professional Problem Solving',
        description: 'Analyzing and evaluating.',
        lessons: [
          {
            order: 1,
            title: 'Evaluating Trade-offs',
            description: 'Pros, cons, and compromises.',
            concepts: [
              {
                order: 1,
                title: 'Discussing Alternatives',
                explanation: 'Use phrases like "The downside of this approach is...", "If we opt for X, we sacrifice Y," or "We need to weigh the pros and cons."',
                hindiSupport: 'Bikalpon (alternatives) ki tulna karna aur nuksan/fayde batana.',
                examples: [
                  { english: 'If we choose the cheaper server, we sacrifice uptime. It is a trade-off we need to evaluate carefully.', hindi: 'Agar hum sasta server chunte hain, toh uptime kam hoga. Yeh ek aesa samjhauta hai jiska humein dhyan se mulyankan karna chahiye.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Compare two different tech stacks for a new project and explain the trade-offs (3 mins).', answer: null, difficulty: 'B2-HARD' },
              { type: 'speaking', prompt: 'Evaluate whether a company should build a feature in-house or buy a third-party solution (2 mins).', answer: null, difficulty: 'B2-HARD' }
            ]
          },
          {
            order: 2,
            title: 'High-Stakes Negotiation',
            description: 'Deadlines, scope, and boundaries.',
            concepts: [
              {
                order: 1,
                title: 'Firm but Professional Boundaries',
                explanation: 'Use language that sets clear limits without being aggressive. "I cannot commit to Friday, but I can guarantee Monday."',
                hindiSupport: 'Bina gussa kiye apni limit clearly batana.',
                examples: [
                  { english: 'We can accommodate the scope change, provided we extend the deadline by two weeks.', hindi: 'Hum naye badlao ko shamil kar sakte hain, basharte hum deadline do hafte aage badhayein.' }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'A client demands an impossible deadline. Negotiate a phased delivery instead.', answer: 'I understand the urgency. While delivering everything by the 15th is not feasible without compromising quality, we can deliver the core features by the 15th and the rest by the 30th.', difficulty: 'B2-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
