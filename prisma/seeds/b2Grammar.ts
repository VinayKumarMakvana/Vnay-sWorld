export const b2GrammarModules = [
  {
    order: 1, // Will be offset in Level 5 (B2)
    title: 'B2 Upper-Intermediate Grammar',
    description: 'Nuance, precision, and advanced structures.',
    units: [
      {
        order: 1,
        title: 'Advanced Verb Forms',
        description: 'Tense consistency and contrast.',
        lessons: [
          {
            order: 1,
            title: 'Future Perfect and Continuous',
            description: 'Looking back from the future.',
            concepts: [
              {
                order: 1,
                title: 'Will have done / Will be doing',
                explanation: 'Use Future Perfect (will have + V3) to say something will be completed before a certain time in the future. Use Future Continuous (will be + V-ing) to say an action will be in progress at a certain time.',
                hindiSupport: 'Bhavishya mein kisi samay tak koi kaam pura ho chuka hoga (Future Perfect). Bhavishya mein kisi samay par koi kaam chal raha hoga (Future Continuous).',
                examples: [
                  { english: 'By next Friday, I will have finished the migration.', hindi: 'Agle Shukrawar tak, main migration pura kar chuka hounga.' },
                  { english: 'At 10 AM tomorrow, I will be presenting to the client.', hindi: 'Kal subah 10 baje, main client ko presentation de raha hounga.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: By the time you arrive, we (eat) ___ dinner.', answer: 'will have eaten', difficulty: 'B2-MEDIUM' },
              { type: 'grammar', prompt: 'Fill in: Don\'t call me at 8. I (have) ___ dinner.', answer: 'will be having', difficulty: 'B2-MEDIUM' },
              { type: 'grammar', prompt: 'Fill in: By the end of this month, she (work) ___ here for five years.', answer: 'will have been working', difficulty: 'B2-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Mixed Conditionals',
            description: 'Unreal past affecting unreal present.',
            concepts: [
              {
                order: 1,
                title: 'Past condition, present result',
                explanation: 'If + Past Perfect, would + Verb. Use this when a past action (that didn\'t happen) affects the present situation.',
                hindiSupport: 'Agar past mein kuch alag hua hota, toh aaj present mein kya hota.',
                examples: [
                  { english: 'If I had learned Python, I would have a better job now.', hindi: 'Agar maine Python seekhi hoti, toh aaj mere paas behtar naukri hoti.' },
                  { english: 'If we hadn\'t missed the flight, we would be in Paris right now.', hindi: 'Agar hamari flight nahi chhooti hoti, toh hum abhi Paris mein hote.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: If I (study) ___ harder in college, I would be a senior developer now.', answer: 'had studied', difficulty: 'B2-HARD' },
              { type: 'grammar', prompt: 'Fill in: If we hadn\'t deployed that bug, the server (not crash) ___ right now.', answer: 'would not be crashing', difficulty: 'B2-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Advanced Modals and Passive',
        description: 'Speculation, regret, and focus.',
        lessons: [
          {
            order: 1,
            title: 'Modals of Regret and Criticism',
            description: 'Should have, could have.',
            concepts: [
              {
                order: 1,
                title: 'Should have + V3',
                explanation: 'Use for criticizing a past action or expressing regret about something that was not done.',
                hindiSupport: 'Aisa karna chahiye tha (lekin nahi kiya). Pachtawa ya aalochna ke liye.',
                examples: [
                  { english: 'I should have backed up the database before the update.', hindi: 'Mujhe update se pehle database ka backup lena chahiye tha.' },
                  { english: 'You shouldn\'t have spoken to the client that way.', hindi: 'Tumhe client se us tarah baat nahi karni chahiye thi.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: I failed the test. I (study) ___ more.', answer: 'should have studied', difficulty: 'B2-MEDIUM' },
              { type: 'grammar', prompt: 'Fill in: We didn\'t have to take a taxi. We (walk) ___.', answer: 'could have walked', difficulty: 'B2-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Advanced Passive Structures',
            description: 'It is said that...',
            concepts: [
              {
                order: 1,
                title: 'Passive Reporting',
                explanation: 'Used in formal and professional contexts to report what people generally think, say, or believe.',
                hindiSupport: 'Formal English mein kisi aam dharna ya khabar ko batane ka tarika.',
                examples: [
                  { english: 'It is believed that AI will change the industry.', hindi: 'Aisa mana jata hai ki AI industry ko badal dega.' },
                  { english: 'The CEO is expected to resign tomorrow.', hindi: 'Umeed ki ja rahi hai ki CEO kal istifa de denge.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Transform to passive: People say that the company is losing money. -> It ___ that the company is losing money.', answer: 'is said', difficulty: 'B2-HARD' },
              { type: 'grammar', prompt: 'Transform: We expect the update to fix the bug. -> The update ___ to fix the bug.', answer: 'is expected', difficulty: 'B2-HARD' }
            ]
          }
        ]
      },
      {
        order: 3,
        title: 'Discourse and Emphasis',
        description: 'Structuring advanced arguments.',
        lessons: [
          {
            order: 1,
            title: 'Inversion',
            description: 'Adding emphasis and formality.',
            concepts: [
              {
                order: 1,
                title: 'Negative Adverb Inversion',
                explanation: 'When a sentence starts with a negative adverb (Never, Rarely, Hardly, Not only), the subject and auxiliary verb are inverted (like a question).',
                hindiSupport: 'Vakya par zor dalne ke liye, subject aur helping verb ki jagah badal di jati hai.',
                examples: [
                  { english: 'Not only did we finish on time, but we also stayed under budget.', hindi: 'Na keval humne samay par kaam pura kiya, balki budget ke andar bhi rahe.' },
                  { english: 'Rarely have I seen such a poorly written codebase.', hindi: 'Maine shayad hi kabhi itna kharab likha hua code dekha ho.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: Never (I have / have I) ___ been so stressed.', answer: 'have I', difficulty: 'B2-HARD' },
              { type: 'grammar', prompt: 'Transform: We not only lost the client, but we also lost money. -> Not only ___ the client, but we also lost money.', answer: 'did we lose', difficulty: 'B2-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Cleft Sentences',
            description: 'It was X who did Y.',
            concepts: [
              {
                order: 1,
                title: 'Emphasis with "It" and "What"',
                explanation: 'Use cleft sentences to focus on a specific part of a sentence.',
                hindiSupport: 'Vakya ke kisi khaas hisse par zor dalna.',
                examples: [
                  { english: 'It was the backend team who caused the delay.', hindi: 'Yeh backend team thi jisne deri ki.' },
                  { english: 'What we need right now is a clear strategy.', hindi: 'Humein abhi jis cheez ki zaroorat hai, woh ek spasht ranniti hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: (What / That) ___ I want to know is why the server crashed.', answer: 'What', difficulty: 'B2-MEDIUM' },
              { type: 'grammar', prompt: 'Transform to emphasize "John": John broke the build. -> It was ___ the build.', answer: 'John who broke', difficulty: 'B2-MEDIUM' }
            ]
          }
        ]
      }
    ]
  }
];
