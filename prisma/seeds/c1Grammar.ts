export const c1GrammarModules = [
  {
    order: 1, // Offset in Level 6 (C1)
    title: 'C1 Advanced Grammar',
    description: 'Mastery of nuance, register, and rhetorical control.',
    units: [
      {
        order: 1,
        title: 'Advanced Temporal Relationships',
        description: 'Narrative shifts and complex timelines.',
        lessons: [
          {
            order: 1,
            title: 'Tense Consistency in Complex Writing',
            description: 'Maintaining logic across paragraphs.',
            concepts: [
              {
                order: 1,
                title: 'Narrative Tense Shifts',
                explanation: 'In advanced writing, you often shift between past perfect, simple past, and present perfect to establish a precise sequence of events leading to a current state.',
                hindiSupport: 'Ghatnaon ka sahi kram batane ke liye alag-alag tense ka ek sath upyog.',
                examples: [
                  { english: 'By the time the system crashed, we had already noticed the anomalies, but we have since implemented safeguards.', hindi: 'Jab tak system crash hua, hum anomalies pehle hi dekh chuke the, lekin tab se humne suraksha ke upay lagu kar diye hain.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in: The legacy system (fail) ___, but before that happened, we (already / migrate) ___ the core data.', answer: 'failed / had already migrated', difficulty: 'C1-MEDIUM' },
              { type: 'grammar', prompt: 'Fill in: Ever since we (deploy) ___ the patch, the application (run) ___ flawlessly.', answer: 'deployed / has been running', difficulty: 'C1-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Advanced Conditionals and Inversion',
            description: 'Highly formal hypothetical structures.',
            concepts: [
              {
                order: 1,
                title: 'Inverted Conditionals (Had I, Were I, Should you)',
                explanation: 'In formal English, you can drop "if" and invert the subject and auxiliary verb to sound more professional and emphatic.',
                hindiSupport: 'Formal English mein "if" ko hatakar verb ko aage rakhna.',
                examples: [
                  { english: 'Had we known about the vulnerability, we would have patched it immediately.', hindi: 'Agar humein vulnerability ke baare mein pata hota, toh humne isey turant theek kar diya hota.' },
                  { english: 'Should you require further assistance, please contact support.', hindi: 'Yadi aapko aur madad chahiye ho, toh kripya support se sampark karein.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Rewrite using inversion: If I had realized the impact, I wouldn\'t have approved it. -> ___ the impact, I wouldn\'t have approved it.', answer: 'Had I realized', difficulty: 'C1-HARD' },
              { type: 'grammar', prompt: 'Rewrite using inversion: If the server should fail, the backup will activate. -> ___ the server fail, the backup will activate.', answer: 'Should', difficulty: 'C1-HARD' },
              { type: 'grammar', prompt: 'Rewrite using inversion: If I were in your position, I would resign. -> ___ in your position, I would resign.', answer: 'Were I', difficulty: 'C1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Nuance and Rhetorical Control',
        description: 'Participles, emphasis, and distancing.',
        lessons: [
          {
            order: 1,
            title: 'Participle Clauses',
            description: 'Combining sentences elegantly.',
            concepts: [
              {
                order: 1,
                title: 'Perfect Participle (Having done)',
                explanation: 'Use "Having + V3" to show that one action was completely finished before another action started. This replaces clauses starting with "After" or "Because".',
                hindiSupport: 'Ek kaam poori tarah khatam hone ke baad doosra shuru hona.',
                examples: [
                  { english: 'Having completed the refactor, the team moved on to testing.', hindi: 'Refactor poora karne ke baad, team testing par chali gayi.' },
                  { english: 'Not having read the documentation, he struggled to configure the environment.', hindi: 'Documentation na padhne ke karan, usey environment configure karne mein mushkil hui.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Rewrite using a participle: Because she had reviewed the code, she knew where the bug was. -> ___, she knew where the bug was.', answer: 'Having reviewed the code', difficulty: 'C1-HARD' },
              { type: 'grammar', prompt: 'Rewrite using a participle: After they secured the funding, they hired ten engineers. -> ___, they hired ten engineers.', answer: 'Having secured the funding', difficulty: 'C1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Distancing and Impersonal Passive',
            description: 'Maintaining a professional, objective tone.',
            concepts: [
              {
                order: 1,
                title: 'Distancing (It appears, It seems)',
                explanation: 'Use verbs like appear, seem, tend, and passive reporting verbs to create distance between yourself and a claim, making it sound more objective or less confrontational.',
                hindiSupport: 'Baat ko zyada formal aur objective banane ke liye "It seems" ya "It is reported" ka use.',
                examples: [
                  { english: 'It appears that the database configuration is causing the latency.', hindi: 'Aisa lagta hai ki database configuration latency ka karan ban rahi hai.' },
                  { english: 'There seems to have been a miscommunication regarding the requirements.', hindi: 'Aisa lagta hai ki requirements ko lekar koi galatfehmi hui hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Make this less direct/confrontational: You made a mistake in the deployment. -> There ___ to have been a mistake in the deployment.', answer: 'seems', difficulty: 'C1-MEDIUM' },
              { type: 'grammar', prompt: 'Make this more objective: I think the algorithm is inefficient. -> It ___ that the algorithm is inefficient.', answer: 'appears', difficulty: 'C1-MEDIUM' }
            ]
          }
        ]
      }
    ]
  }
];
