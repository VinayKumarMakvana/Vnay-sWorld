export const a2GrammarModules = [
  {
    order: 1, // Will be offset in Level 3 (A2)
    title: 'A2 Grammar Foundation',
    description: 'Practical grammar for everyday situations.',
    units: [
      {
        order: 1,
        title: 'Tenses Expanded',
        description: 'Past, Present Perfect, and Future.',
        lessons: [
          {
            order: 1,
            title: 'Past Continuous',
            description: 'Actions happening in the past.',
            concepts: [
              {
                order: 1,
                title: 'Was / Were + ing',
                explanation: 'Use the past continuous for an action that was in progress at a specific time in the past.',
                hindiSupport: 'Jo kaam beete hue samay mein ho raha tha uske liye was/were aur verb-ing lagate hain.',
                examples: [
                  { english: 'I was sleeping when you called.', hindi: 'Jab tumne call kiya tab main so raha tha.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in the blank: I (watch) ___ TV when the power went out.', answer: 'was watching', difficulty: 'A2-EASY' },
              { type: 'grammar', prompt: 'Fill in the blank: They (not listen) ___ during the meeting.', answer: 'were not listening', difficulty: 'A2-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Present Perfect Introduction',
            description: 'Life experiences.',
            concepts: [
              {
                order: 1,
                title: 'Have / Has + Past Participle (V3)',
                explanation: 'Use Present Perfect to talk about experiences in your life up to now. Do not use specific past times (like yesterday).',
                hindiSupport: 'Koi kaam jo pehle ho chuka hai aur uska asar abhi bhi hai. Isme exact time (kal, parso) nahi batate.',
                examples: [
                  { english: 'I have visited London three times.', hindi: 'Main teen baar London ja chuka hoon.' },
                  { english: 'She has finished the report.', hindi: 'Usne report puri kar li hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Choose correct: I (have seen / saw) that movie yesterday.', answer: 'saw', difficulty: 'A2-MEDIUM' },
              { type: 'grammar', prompt: 'Fill in the blank: I ___ never eaten sushi.', answer: 'have', difficulty: 'A2-EASY' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Nouns, Determiners & Quantifiers',
        description: 'Describing amounts.',
        lessons: [
          {
            order: 1,
            title: 'Much, Many, A lot of',
            description: 'Talking about quantity.',
            concepts: [
              {
                order: 1,
                title: 'Countable vs Uncountable',
                explanation: 'Many = Countable (many bugs). Much = Uncountable (much time). A lot of = Both.',
                hindiSupport: 'Many ginne wali cheezon ke liye, Much bina ginne wali cheezon ke liye.',
                examples: [
                  { english: 'I don\'t have much time.', hindi: 'Mere paas zyada samay nahi hai.' },
                  { english: 'There are many bugs in the code.', hindi: 'Code mein bahut sare bugs hain.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: How ___ water do you drink?', answer: 'much', difficulty: 'A2-EASY' },
              { type: 'grammar', prompt: 'Fill in: We have ___ of work to do.', answer: 'a lot', difficulty: 'A2-EASY' }
            ]
          },
          {
            order: 2,
            title: 'Few, A few, Little, A little',
            description: 'Small amounts.',
            concepts: [
              {
                order: 1,
                title: 'Positive vs Negative meaning',
                explanation: '"A few / A little" means some (positive). "Few / Little" means almost none (negative).',
                hindiSupport: '"A few" matlab thoda sa (kafi hai). "Few" matlab na ke barabar.',
                examples: [
                  { english: 'I have a few friends in the office. (Good)', hindi: 'Office mein mere kuch dost hain.' },
                  { english: 'I have little time left. (Bad)', hindi: 'Mere paas na ke barabar time bacha hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: I speak ___ Spanish, so I can order food.', answer: 'a little', difficulty: 'A2-MEDIUM' },
              { type: 'grammar', prompt: 'Fill in: There are very ___ developers who know this old language.', answer: 'few', difficulty: 'A2-HARD' }
            ]
          }
        ]
      },
      {
        order: 3,
        title: 'Comparisons & Modals',
        description: 'Comparing things and rules.',
        lessons: [
          {
            order: 1,
            title: 'Comparatives and Superlatives',
            description: 'Bigger, Biggest.',
            concepts: [
              {
                order: 1,
                title: '-er and -est vs More/Most',
                explanation: 'Short words add -er/-est (fast, faster, fastest). Long words use more/most (expensive, more expensive).',
                hindiSupport: 'Chhote shabdo mein -er/-est. Bade shabdo mein more/most.',
                examples: [
                  { english: 'Python is easier than C++.', hindi: 'Python C++ se aasaan hai.' },
                  { english: 'This is the most important task.', hindi: 'Yeh sabse mahatvapurna kaam hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Make comparative: Good', answer: 'Better', difficulty: 'A2-EASY' },
              { type: 'grammar', prompt: 'Fill in: This laptop is ___ expensive than that one.', answer: 'more', difficulty: 'A2-EASY' }
            ]
          },
          {
            order: 2,
            title: 'Modals of Obligation',
            description: 'Have to vs Must.',
            concepts: [
              {
                order: 1,
                title: 'External vs Internal rules',
                explanation: '"Have to" is for rules made by others (law, company). "Must" is often for personal strong feelings, though they are similar.',
                hindiSupport: '"Have to" bahari niyam ke liye, "Must" apni taraf se zaroorat jatane ke liye.',
                examples: [
                  { english: 'I have to wear an ID card at work.', hindi: 'Mujhe kaam par ID card pehanna padta hai (niyam).' },
                  { english: 'I must call my mother today.', hindi: 'Mujhe aaj apni maa ko call karna hi hai (mera man).' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: We ___ to submit the report by Friday (boss\'s order).', answer: 'have', difficulty: 'A2-MEDIUM' }
            ]
          }
        ]
      },
      {
        order: 4,
        title: 'Complex Sentences & Passives',
        description: 'Advanced A2 Structures.',
        lessons: [
          {
            order: 1,
            title: 'Zero and First Conditional',
            description: 'If statements in English.',
            concepts: [
              {
                order: 1,
                title: 'First Conditional (Real Future)',
                explanation: 'If + Present Simple, Will + Verb. Used for real future possibilities.',
                hindiSupport: 'Agar aisa hoga, toh waisa hoga. (If ke sath present tense lagayein).',
                examples: [
                  { english: 'If it rains, I will stay home.', hindi: 'Agar barish hogi, toh main ghar rahunga.' },
                  { english: 'If you click this, the app will crash.', hindi: 'Agar tum is par click karoge, app crash ho jayega.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: If I finish early, I ___ call you.', answer: 'will', difficulty: 'A2-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Present Simple Passive',
            description: 'Focus on the action, not the doer.',
            concepts: [
              {
                order: 1,
                title: 'Am/Is/Are + Past Participle (V3)',
                explanation: 'Use the passive when the object is more important than the person doing the action.',
                hindiSupport: 'Jab kaam jyada mahatvapurna ho, aur kisne kiya yeh kam, tab passive use karein.',
                examples: [
                  { english: 'The office is cleaned every day.', hindi: 'Office har din saaf kiya jata hai.' },
                  { english: 'The data is stored in the database.', hindi: 'Data database mein store kiya jata hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Change to passive: "They test the code." -> The code ___ tested.', answer: 'is', difficulty: 'A2-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
