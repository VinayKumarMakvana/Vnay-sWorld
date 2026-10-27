export const c2GrammarModules = [
  ...Array.from({ length: 8 }).map((_, mIdx) => ({
    order: mIdx + 1,
    title: `C2 Grammar Module ${mIdx + 1}: Mastery of Nuance`,
    description: 'Advanced structural precision and rhetorical control.',
    units: [
      {
        order: 1,
        title: `Advanced Structures Unit`,
        description: 'Deep grammatical frameworks.',
        lessons: Array.from({ length: 5 }).map((_, lIdx) => ({
          order: lIdx + 1,
          title: `C2 Grammar Lesson ${mIdx * 5 + lIdx + 1}`,
          description: 'Mastering subtle distinctions and formal register.',
          concepts: [
            {
              order: 1,
              title: 'Cleft Sentences and Emphasis',
              explanation: 'Using structure to precisely control the focus of information in a sentence.',
              hindiSupport: 'Baat par zor dene ke liye sentence ke structure ko badalna.',
              examples: [
                { english: 'It was the legacy migration that ultimately caused the outage.', hindi: 'Yeh legacy migration hi tha jisne aakhirkar outage paida kiya.' }
              ]
            }
          ],
          exercises: [
            { type: 'grammar', prompt: `Rewrite for emphasis: The database failed. -> It was the...`, answer: 'It was the database that failed.', difficulty: 'C2-HARD' },
            { type: 'grammar', prompt: `Select the most precise C2 modal structure for this highly formal context.`, answer: 'might have been', difficulty: 'C2-HARD' }
          ]
        }))
      }
    ]
  }))
];
