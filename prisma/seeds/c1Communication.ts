export const c1CommunicationModules = [
  {
    order: 2,
    title: 'C1 Advanced Professional Communication',
    description: 'Diplomacy, negotiation, and high-level strategy.',
    units: [
      {
        order: 1,
        title: 'Diplomacy and Conflict',
        description: 'Navigating sensitive workplace situations.',
        lessons: [
          {
            order: 1,
            title: 'Hedging and Qualification',
            description: 'Softening strong statements.',
            concepts: [
              {
                order: 1,
                title: 'Professional Hedging',
                explanation: 'Using modal verbs (would, could, might), adverbs (arguably, potentially, largely), and introductory phrases to soften statements and avoid sounding overly aggressive or absolute.',
                hindiSupport: 'Apni baat ko thoda naram banana taaki samne wale ko bura na lage.',
                examples: [
                  { english: 'That approach is arguably less efficient than the current one.', hindi: 'Wah tareeka shayad vartaman tareeke se kam kushal hai.' },
                  { english: 'I would suggest that we potentially rethink the timeline.', hindi: 'Mera suzhav hoga ki hum shayad timeline par punarvichar karein.' }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'Soften this statement: "Your idea will definitely fail because it ignores security." Use hedging words like "might", "potentially", or "concern".', answer: 'While I see the value in your idea, I have a concern that it might potentially expose us to security risks.', difficulty: 'C1-HARD' },
              { type: 'speaking', prompt: 'Critique a popular software engineering practice (like daily standups) using highly diplomatic and qualified language (2 mins).', answer: null, difficulty: 'C1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Boundary Setting and Refusal',
            description: 'Saying no at the executive level.',
            concepts: [
              {
                order: 1,
                title: 'The "Yes, If" Strategy',
                explanation: 'Instead of a flat "no," outline the conditions required to say "yes," forcing the stakeholder to make the trade-off decision.',
                hindiSupport: 'Seedha "na" kehne ke bajaye, "haan" kehne ki shartein batana.',
                examples: [
                  { english: 'We can certainly hit that deadline, provided we drop the analytics feature from this sprint.', hindi: 'Hum bilkul us deadline par kaam pura kar sakte hain, basharte hum is sprint se analytics feature hata dein.' }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'A VP demands you add a massive feature to the release tomorrow. Use the "Yes, if" strategy to negotiate.', answer: 'We can certainly include that feature for tomorrow\'s release, provided we get authorization to push the core security update to next week. Which would you prefer we prioritize?', difficulty: 'C1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'High-Level Negotiation',
        description: 'Leverage, trade-offs, and alignment.',
        lessons: [
          {
            order: 1,
            title: 'Managing Expectations and Scope',
            description: 'Keeping projects on track.',
            concepts: [
              {
                order: 1,
                title: 'Framing Trade-offs',
                explanation: 'Use clear, objective language to explain the consequences of decisions, using phrases like "at the expense of", "the trade-off here is", or "if we pivot to X, it impacts Y".',
                hindiSupport: 'Faislo ke parinam ko clearly samjhana.',
                examples: [
                  { english: 'Accelerating the frontend development will come at the expense of comprehensive test coverage.', hindi: 'Frontend development ko tez karne ki keemat vyapak test coverage mein kami hogi.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Explain the concept of "scope creep" to a client and set a firm boundary on a project (3 mins).', answer: null, difficulty: 'C1-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
