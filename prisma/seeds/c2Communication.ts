export const c2CommunicationModules = [
  ...Array.from({ length: 8 }).map((_, mIdx) => ({
    order: mIdx + 9, // Offset from grammar
    title: `C2 Communication Module ${mIdx + 1}: Executive Diplomacy`,
    description: 'Handling extreme professional conflict and persuasion.',
    units: [
      {
        order: 1,
        title: `Persuasion and Hedging Unit`,
        description: 'Strategic communication at the highest level.',
        lessons: Array.from({ length: 5 }).map((_, lIdx) => ({
          order: lIdx + 1,
          title: `C2 Communication Lesson ${mIdx * 5 + lIdx + 1}`,
          description: 'Navigating sensitive conversations with stakeholders.',
          concepts: [],
          exercises: [
            { type: 'speaking', prompt: `C2 Comm Drill: Diplomatically push back on the board of directors regarding an impossible deadline without using the word "no".`, answer: null, difficulty: 'C2-HARD' },
            { type: 'writing', prompt: `C2 Comm Drill: Write a 50-word email mitigating a catastrophic client misunderstanding.`, answer: null, difficulty: 'C2-HARD' }
          ]
        }))
      }
    ]
  }))
];
