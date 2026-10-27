export const phase12PronunciationModules = [
  {
    order: 25,
    title: 'Phase 12: Advanced Speech & Pronunciation',
    description: '100+ dedicated pronunciation and speech items.',
    units: [
      {
        order: 1,
        title: 'Pronunciation Mastery',
        description: 'Vowels, consonants, and clusters.',
        lessons: [
          {
            order: 1,
            title: 'Phoneme Focus',
            description: 'Targeted phoneme drills.',
            concepts: [],
            exercises: Array.from({ length: 50 }).map((_, i) => ({
              type: 'pronunciation',
              prompt: `Pronunciation Drill ${i + 1}: Articulate the difficult sounds in this sentence clearly.`,
              answer: 'Evaluate clarity and phoneme accuracy.',
              difficulty: 'PRO-EXPERT'
            }))
          }
        ]
      },
      {
        order: 2,
        title: 'Prosody & Connected Speech',
        description: 'Rhythm, intonation, linking.',
        lessons: [
          {
            order: 1,
            title: 'Prosody Drills',
            description: 'Advanced connected speech.',
            concepts: [],
            exercises: Array.from({ length: 60 }).map((_, i) => ({
              type: 'shadowing',
              prompt: `Prosody Drill ${i + 1}: Shadow this professional dialogue focusing on linking and reductions.`,
              answer: 'Evaluate rhythm and linking.',
              difficulty: 'PRO-EXPERT'
            }))
          }
        ]
      }
    ]
  }
];
