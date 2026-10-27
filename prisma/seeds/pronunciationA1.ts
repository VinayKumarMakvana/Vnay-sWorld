export const a1PronunciationModules = [
  {
    order: 40,
    title: 'A1 Pronunciation - Articulation & Clarity',
    description: 'Speak clearly and be understood.',
    units: [
      {
        order: 1,
        title: 'Difficult Consonants',
        description: 'V vs W, TH, and R vs L.',
        lessons: [
          {
            order: 1,
            title: 'V vs W Sounds',
            description: 'Biting your lip vs Rounding your lips.',
            concepts: [
              {
                order: 1,
                title: 'Mouth Position',
                explanation: 'For V: Put your top teeth on your bottom lip and vibrate (Very, Vine). For W: Make your lips into a tight circle (Water, Wine).',
                hindiSupport: 'V bolte waqt upar ke daant niche ke honth (lip) par rakhein. W bolte waqt hontho ko gol (round) karein.',
                examples: [
                  { english: 'Vest vs West', hindi: null },
                  { english: 'Vary vs Wary', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'shadowing', prompt: 'Listen and repeat: William wants a very warm vest.', answer: 'William wants a very warm vest.' }
            ]
          },
          {
            order: 2,
            title: 'The TH Sound',
            description: 'The tongue-between-teeth sound.',
            concepts: [
              {
                order: 1,
                title: 'Unvoiced vs Voiced TH',
                explanation: 'Put the tip of your tongue slightly between your teeth and blow air. Unvoiced (Think, Thanks). Voiced (The, This, That).',
                hindiSupport: 'Jeebh (tongue) ki tip ko daanto ke beech rakh kar hawa bahar nikalein.',
                examples: [
                  { english: 'Think (Unvoiced)', hindi: null },
                  { english: 'This (Voiced)', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'shadowing', prompt: 'Repeat: I think this thing is thicker than that thing.', answer: null }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Word Endings',
        description: 'Do not swallow the end of your words.',
        lessons: [
          {
            order: 1,
            title: 'Plural S and ES',
            description: 'Cats vs Dogs vs Boxes',
            concepts: [
              {
                order: 1,
                title: 'S vs Z vs IZ',
                explanation: 'If word ends in hard sound (cat), say S. If soft/vowel (dog), say Z. If ends in S/X/CH (box), say IZ.',
                hindiSupport: 'Antim awaz ke anusar S, Z, ya IZ bolna hota hai.',
                examples: [
                  { english: 'Cats (S)', hindi: null },
                  { english: 'Dogs (Z)', hindi: null },
                  { english: 'Boxes (IZ)', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Pronounce: Books, Pens, Matches', answer: null }
            ]
          },
          {
            order: 2,
            title: 'Past Tense ED Endings',
            description: 'T vs D vs ID',
            concepts: [
              {
                order: 1,
                title: 'How to pronounce ED',
                explanation: 'Ends in T/D? Say "ID" (Wanted). Ends in voiceless (K, P, S)? Say "T" (Worked). Otherwise say "D" (Played).',
                hindiSupport: 'Agar verb T ya D par khatam ho, tabhi ED ko "Id" jaisa bolein. Baki jagah sirf T ya D ki awaz nikalein.',
                examples: [
                  { english: 'Want -> Wanted (ID)', hindi: null },
                  { english: 'Work -> Worked (T)', hindi: null },
                  { english: 'Play -> Played (D)', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Read aloud: I worked hard, I played a game, and I rested.', answer: null }
            ]
          }
        ]
      }
    ]
  }
];
