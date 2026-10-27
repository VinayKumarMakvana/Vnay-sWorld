export const phase10SoftwareEngineerModules = [
  ...Array.from({ length: 12 }).map((_, mIdx) => ({
    order: mIdx + 1,
    title: `Software Engineer English Module ${mIdx + 1}: ${
      ['Technical Vocabulary', 'Daily Standups', 'Sprint Communication', 'Git & GitHub Communication',
       'Pull Requests & Code Reviews', 'Bug Reporting & Debugging', 'API & Backend Communication',
       'Database Communication', 'Frontend / UI Communication', 'System Design Communication',
       'Technical Presentations', 'Incident / Production Communication'][mIdx]
    }`,
    description: 'Advanced communication for software engineering professionals.',
    units: [
      {
        order: 1,
        title: `Core Engineering Communication`,
        description: 'Contextual technical fluency.',
        lessons: Array.from({ length: 5 }).map((_, lIdx) => ({
          order: lIdx + 1,
          title: `Lesson ${mIdx * 5 + lIdx + 1}`,
          description: 'Technical communication drills.',
          concepts: [],
          exercises: [
            { type: 'tech', prompt: `Tech Comm Drill ${mIdx * 5 + lIdx + 1}: Explain a complex architectural decision clearly.`, answer: 'Evaluate clarity and precision.', difficulty: 'PRO-EXPERT' }
          ]
        }))
      }
    ]
  }))
];
