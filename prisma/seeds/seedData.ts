export const absBeginnerModules = [
  {
    order: 1,
    title: 'Module 1: English Sounds & Alphabet',
    description: 'Learn the English alphabet and basic sounds.',
    units: [
      {
        order: 1,
        title: 'Unit 1: Letters and Sounds',
        description: 'Vowels vs Consonants',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: The English Alphabet & Vowels',
            description: 'A to Z and the 5 vowels.',
            concepts: [
              {
                order: 1,
                title: 'Uppercase and Lowercase',
                explanation: 'English uses 26 letters in two forms: Big (Uppercase) and Small (Lowercase).',
                hindiSupport: 'English mein 26 akshar hote hain, bade aur chhote roop mein.',
                examples: [
                  { english: 'A a, B b, C c, D d', hindi: null }
                ]
              },
              {
                order: 2,
                title: 'The 5 Vowels',
                explanation: 'A, E, I, O, U are vowels. Every English word must have at least one vowel sound.',
                hindiSupport: 'A, E, I, O, U swar (vowels) hain. Har shabd mein kam se kam ek swar hota hai.',
                examples: [
                  { english: 'Apple (A)', hindi: 'Seb' },
                  { english: 'Elephant (E)', hindi: 'Haathi' }
                ]
              }
            ],
            exercises: [
              { type: 'reading', prompt: 'Read out loud: A E I O U', answer: 'A, E, I, O, U' },
              { type: 'reading', prompt: 'Identify the vowels in the word: COMPUTER', answer: 'O, U, E' }
            ]
          },
          {
            order: 2,
            title: 'Lesson 2: Consonant Sounds',
            description: 'The remaining 21 letters.',
            concepts: [
              {
                order: 1,
                title: 'Consonants',
                explanation: 'Letters like B, C, D, F, G are consonants. They provide structure to the words.',
                hindiSupport: 'B, C, D jaise akshar vyanjan (consonants) hain.',
                examples: [
                  { english: 'Bat (B, T)', hindi: 'Balla' },
                  { english: 'Dog (D, G)', hindi: 'Kutta' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Spell the word CAT aloud.', answer: 'C - A - T' }
            ]
          }
        ]
      }
    ]
  },
  {
    order: 2,
    title: 'Module 2: Greetings & Basic Communication',
    description: 'How to meet people in English.',
    units: [
      {
        order: 1,
        title: 'Unit 1: Saying Hello and Goodbye',
        description: 'First impressions matter.',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: Formal vs Informal Greetings',
            description: 'Learn how to greet respectfully.',
            concepts: [
              {
                order: 1,
                title: 'Formal Greetings',
                explanation: 'Use these in professional settings, interviews, or with older people.',
                hindiSupport: 'Inka upyog office ya bado ke sath karein.',
                examples: [
                  { english: 'Good morning.', hindi: 'Shubh prabhat.' },
                  { english: 'Hello, how are you?', hindi: 'Namaste, aap kaise hain?' }
                ]
              },
              {
                order: 2,
                title: 'Informal Greetings',
                explanation: 'Use these with friends, family, and close colleagues.',
                hindiSupport: 'Inka upyog dosto aur parivar ke sath karein.',
                examples: [
                  { english: 'Hi!', hindi: 'Namaste!' },
                  { english: 'Hey, what’s up?', hindi: 'Kya chal raha hai?' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Greet your interviewer in the morning.', answer: 'Good morning. How are you?' },
              { type: 'reading', prompt: 'Which is informal? A) Good morning. B) Hey there!', answer: 'B) Hey there!' }
            ]
          },
          {
            order: 2,
            title: 'Lesson 2: Polite Expressions',
            description: 'Being polite in English.',
            concepts: [
              {
                order: 1,
                title: 'Thank you & Please',
                explanation: 'Always use "please" when asking for something, and "thank you" when receiving.',
                hindiSupport: 'Kuch mangte samay "please" aur milne par "thank you" bolein.',
                examples: [
                  { english: 'Can you help me, please?', hindi: 'Kripya kya aap meri madad kar sakte hain?' },
                  { english: 'Thank you very much.', hindi: 'Bahut bahut dhanyawad.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Ask someone for a pen politely.', answer: 'Can you give me a pen, please?' }
            ]
          }
        ]
      }
    ]
  },
  {
    order: 3,
    title: 'Module 3: Pronouns & BE Verb',
    description: 'The absolute foundation of English sentences.',
    units: [
      {
        order: 1,
        title: 'Unit 1: I, You, He, She, It',
        description: 'Subject pronouns.',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: Subject Pronouns',
            description: 'Who is doing the action?',
            concepts: [
              {
                order: 1,
                title: 'I and You',
                explanation: '"I" is used for yourself. "You" is used for the person you are talking to.',
                hindiSupport: '"I" ka matlab main, "You" ka matlab aap ya tum.',
                examples: [
                  { english: 'I am learning English.', hindi: 'Main English seekh raha hoon.' },
                  { english: 'You are my teacher.', hindi: 'Aap mere teacher hain.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in the blank: ___ am a student.', answer: 'I' }
            ]
          },
          {
            order: 2,
            title: 'Lesson 2: The BE Verb (Am/Is/Are)',
            description: 'State of being.',
            concepts: [
              {
                order: 1,
                title: 'Am, Is, Are',
                explanation: 'I uses "am". He/She/It uses "is". You/We/They uses "are".',
                hindiSupport: 'I ke sath am, He/She ke sath is, aur You/We/They ke sath are lagta hai.',
                examples: [
                  { english: 'I am happy.', hindi: 'Main khush hoon.' },
                  { english: 'She is busy.', hindi: 'Vah vyast hai.' },
                  { english: 'They are developers.', hindi: 'Ve developers hain.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in the blank: We ___ ready.', answer: 'are' },
              { type: 'grammar', prompt: 'Fill in the blank: He ___ tired.', answer: 'is' }
            ]
          }
        ]
      }
    ]
  },
  {
    order: 4,
    title: 'Module 4: Basic Sentence Structure',
    description: 'Subject + Verb + Object',
    units: [
      {
        order: 1,
        title: 'Unit 1: Making Sentences',
        description: 'How to order words correctly.',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: S-V-O Rule',
            description: 'The golden rule of English grammar.',
            concepts: [
              {
                order: 1,
                title: 'Subject + Verb + Object',
                explanation: 'In English, the doer comes first (Subject), then the action (Verb), then the receiver (Object).',
                hindiSupport: 'English mein pehle karta (Subject), fir kriya (Verb), aur ant mein karm (Object) aata hai.',
                examples: [
                  { english: 'I (Subject) eat (Verb) an apple (Object).', hindi: 'Main seb khata hoon.' },
                  { english: 'She writes code.', hindi: 'Vah code likhti hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Put words in order: code / write / I', answer: 'I write code.' },
              { type: 'speaking', prompt: 'Say a sentence about what you do.', answer: 'I work.' }
            ]
          }
        ]
      }
    ]
  },
  {
    order: 5,
    title: 'Module 5: Basic Questions',
    description: 'Asking for information.',
    units: [
      {
        order: 1,
        title: 'Unit 1: WH- Questions',
        description: 'What, Who, Where, When, Why',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: What and Who',
            description: 'Asking about things and people.',
            concepts: [
              {
                order: 1,
                title: 'What',
                explanation: 'Used to ask about things or actions.',
                hindiSupport: '"What" ka matlab "Kya" hota hai. Ye vastu ya kaam ke liye use hota hai.',
                examples: [
                  { english: 'What is your name?', hindi: 'Aapka naam kya hai?' },
                  { english: 'What do you do?', hindi: 'Aap kya karte hain?' }
                ]
              },
              {
                order: 2,
                title: 'Who',
                explanation: 'Used to ask about a person.',
                hindiSupport: '"Who" ka matlab "Kaun" hota hai.',
                examples: [
                  { english: 'Who is he?', hindi: 'Vah kaun hai?' },
                  { english: 'Who is your manager?', hindi: 'Aapke manager kaun hain?' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in the blank: ___ is your name?', answer: 'What' },
              { type: 'speaking', prompt: 'Ask someone who they are.', answer: 'Who are you?' }
            ]
          }
        ]
      }
    ]
  },
  {
    order: 6,
    title: 'Module 6: Numbers, Time & Dates',
    description: 'Essential daily vocabulary.',
    units: [
      {
        order: 1,
        title: 'Unit 1: Telling Time',
        description: 'Reading the clock in English.',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: Hours and Minutes',
            description: 'How to express time.',
            concepts: [
              {
                order: 1,
                title: 'O\'clock vs Past/To',
                explanation: 'Use "o\'clock" for exact hours. Example: 10:00 is "Ten o\'clock".',
                hindiSupport: 'Pura samay batane ke liye "o\'clock" bolte hain.',
                examples: [
                  { english: 'It is five o\'clock.', hindi: 'Paanch baje hain.' },
                  { english: 'The meeting is at 10 AM.', hindi: 'Meeting subah 10 baje hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Look at the time 09:00. Say it out loud.', answer: 'Nine o\'clock.' }
            ]
          }
        ]
      }
    ]
  }
];

export const beginnerA1Modules = [
  {
    order: 1,
    title: 'Module 1: Present Simple Tense',
    description: 'Routines and facts.',
    units: [
      {
        order: 1,
        title: 'Unit 1: Daily Routine',
        description: 'Talking about what you do every day.',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: I wake up, I eat',
            description: 'Using base verbs for habits.',
            concepts: [
              {
                order: 1,
                title: 'Present Simple for Habits',
                explanation: 'We use the base form of the verb to talk about things we do regularly.',
                hindiSupport: 'Roz ke kaam batane ke liye verb ka pehla form use hota hai.',
                examples: [
                  { english: 'I wake up at 7 AM.', hindi: 'Main subah 7 baje uthta hoon.' },
                  { english: 'I drink coffee every day.', hindi: 'Main roz coffee peeta hoon.' }
                ]
              },
              {
                order: 2,
                title: 'The "S" rule for He/She/It',
                explanation: 'If the subject is He, She, or It, add "s" or "es" to the verb.',
                hindiSupport: 'He/She/It ke sath verb mein s/es joda jata hai.',
                examples: [
                  { english: 'She wakes up early.', hindi: 'Vah jaldi uthti hai.' },
                  { english: 'He works hard.', hindi: 'Vah mehnat karta hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in the blank: She ___ (go) to the office.', answer: 'goes' },
              { type: 'speaking', prompt: 'Describe 3 things you do every morning.', answer: 'I wake up, I brush my teeth, I eat breakfast.' },
              { type: 'writing', prompt: 'Write one sentence about what your friend does every day.', answer: 'My friend works in a bank.' }
            ]
          }
        ]
      }
    ]
  },
  {
    order: 2,
    title: 'Module 2: Present Continuous Tense',
    description: 'Actions happening right now.',
    units: [
      {
        order: 1,
        title: 'Unit 1: -ING Verbs',
        description: 'Current actions.',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: I am working',
            description: 'Using am/is/are + verb-ing.',
            concepts: [
              {
                order: 1,
                title: 'Right Now',
                explanation: 'Use BE + Verb(ing) for things happening exactly at this moment.',
                hindiSupport: 'Jo kaam abhi chal raha hai uske liye "is/am/are + verb+ing" lagate hain.',
                examples: [
                  { english: 'I am typing a message.', hindi: 'Main message type kar raha hoon.' },
                  { english: 'They are discussing a bug.', hindi: 'Ve ek bug par charcha kar rahe hain.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Change to continuous: I eat dinner. -> I ___ dinner.', answer: 'am eating' },
              { type: 'shadowing', prompt: 'Listen and repeat: I am currently working on a new project.', answer: 'I am currently working on a new project.' }
            ]
          }
        ]
      }
    ]
  }
];

export const softSkillsModules = [
  {
    order: 1,
    title: 'Module 1: Active Listening',
    description: 'How to truly hear what others say.',
    units: [
      {
        order: 1,
        title: 'Unit 1: Listening over Hearing',
        description: 'The foundation of soft skills.',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: Clarification Phrases',
            description: 'How to confirm you understood correctly.',
            concepts: [
              {
                order: 1,
                title: 'Paraphrasing',
                explanation: 'Repeat back what you heard in your own words to ensure clarity.',
                hindiSupport: 'Samajh confirm karne ke liye samne wale ki baat apne shabdon mein doharayein.',
                examples: [
                  { english: 'So, what you are saying is...', hindi: 'Toh, aapka kehna yeh hai ki...' },
                  { english: 'If I understand correctly, we need to...', hindi: 'Agar main sahi samjha, toh humein...' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Your manager says "We need the report by 5 PM". Paraphrase it back.', answer: 'So, you need me to finish the report before 5 PM, correct?' }
            ]
          }
        ]
      }
    ]
  },
  {
    order: 2,
    title: 'Module 2: Disagreeing Respectfully',
    description: 'How to say no without offending.',
    units: [
      {
        order: 1,
        title: 'Unit 1: Professional Conflict',
        description: 'Handling different opinions.',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: Softening Disagreement',
            description: 'Avoid saying "You are wrong".',
            concepts: [
              {
                order: 1,
                title: 'The "Yes, but..." Technique',
                explanation: 'Acknowledge their point first, then present yours.',
                hindiSupport: 'Pehle unki baat ko swikar karein, fir apni baat rakhein.',
                examples: [
                  { english: 'I see your point, but have we considered...', hindi: 'Main aapki baat samajh raha hoon, par kya humne is par vichar kiya hai...' },
                  { english: 'I agree partially, however...', hindi: 'Main thoda sehmat hoon, halanki...' }
                ]
              }
            ],
            exercises: [
              { type: 'roleplay', prompt: 'A colleague suggests a bad idea. Disagree respectfully.', answer: 'I understand your approach, but I think it might cause issues later.' }
            ]
          }
        ]
      }
    ]
  }
];

export const confidenceModules = [
  {
    order: 1,
    title: 'Module 1: Overcoming the Fear of Mistakes',
    description: 'Mistakes are proof that you are trying.',
    units: [
      {
        order: 1,
        title: 'Unit 1: Mindset Shift',
        description: 'Stop aiming for perfection.',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: Communication > Perfection',
            description: 'The goal is to be understood, not to be a grammar dictionary.',
            concepts: [
              {
                order: 1,
                title: 'Native Speakers Make Mistakes Too',
                explanation: 'Fluency is about flow and confidence, not zero errors. If they understand you, you succeeded.',
                hindiSupport: 'Agar samne wala aapki baat samajh gaya, toh aap safal hain. Galtiyon se darna band karein.',
                examples: [
                  { english: 'Even if I use the wrong tense, my manager understood the project status.', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'english_thinking', prompt: 'Say a sentence about your day. Do not stop even if you make a mistake.', answer: null }
            ]
          }
        ]
      }
    ]
  }
];

export const interviewModules = [
  {
    order: 1,
    title: 'Module 1: Beginner Interview English',
    description: 'Nailing the basics.',
    units: [
      {
        order: 1,
        title: 'Unit 1: "Tell me about yourself"',
        description: 'The universal first question.',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: The 3-Part Formula',
            description: 'Present, Past, Future.',
            concepts: [
              {
                order: 1,
                title: 'Structuring your answer',
                explanation: '1. Who you are now. 2. What you did before. 3. What you want to do next.',
                hindiSupport: '1. Abhi aap kya hain. 2. Pehle kya kiya. 3. Aage kya karna chahte hain.',
                examples: [
                  { english: 'Currently, I am a junior developer. Before this, I studied computer science. Now, I am looking to grow my skills.', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Use the 3-part formula to introduce yourself in 30 seconds.', answer: null }
            ]
          }
        ]
      }
    ]
  }
];

export const techModules = [
  {
    order: 1,
    title: 'Module 1: Software Engineer Foundation',
    description: 'Basic tech communication.',
    units: [
      {
        order: 1,
        title: 'Unit 1: Daily Standups',
        description: 'What did you do? What will you do?',
        lessons: [
          {
            order: 1,
            title: 'Lesson 1: Standup Updates',
            description: 'Short and clear updates.',
            concepts: [
              {
                order: 1,
                title: 'The Standard Format',
                explanation: 'Yesterday I worked on X. Today I am working on Y. I have no blockers.',
                hindiSupport: 'Kal maine X kiya. Aaj main Y karunga. Mujhe koi dikkat nahi hai.',
                examples: [
                  { english: 'Yesterday, I fixed the login bug. Today, I am working on the UI.', hindi: null },
                  { english: 'I am blocked by the API response.', hindi: 'API response na aane ki wajah se mera kaam ruka hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Give a 15-second standup update for today.', answer: null }
            ]
          }
        ]
      }
    ]
  }
];

export const vocabularyWords = [
  { word: 'Hesitate', meaning: 'Pause or hold back in uncertainty.', hindiSupport: 'Hichkichana', pronunciation: '/ˈhez.ɪ.teɪt/', exampleSentence: 'Do not hesitate to ask questions.', context: 'Soft Skills' },
  { word: 'Confidence', meaning: 'Belief in yourself and your abilities.', hindiSupport: 'Aatmavishwas', pronunciation: '/ˈkɒn.fɪ.dəns/', exampleSentence: 'Speak with confidence.', context: 'Self Confidence' },
  { word: 'Requirement', meaning: 'A thing that is needed or wanted.', hindiSupport: 'Zaroorat', pronunciation: '/rɪˈkwaɪə.mənt/', exampleSentence: 'I have completed the project requirements.', context: 'Software' },
  { word: 'Implement', meaning: 'Put a decision or plan into effect.', hindiSupport: 'Laagu karna', pronunciation: '/ˈɪm.plɪ.ment/', exampleSentence: 'I will implement the new feature today.', context: 'Software' },
  { word: 'Feedback', meaning: 'Information about reactions to a product or a person\'s performance.', hindiSupport: 'Pratikriya', pronunciation: '/ˈfiːd.bæk/', exampleSentence: 'Thank you for your feedback.', context: 'Professional' },
  { word: 'Deadline', meaning: 'The latest time or date by which something should be completed.', hindiSupport: 'Aakhiri tareekh', pronunciation: '/ˈded.laɪn/', exampleSentence: 'The deadline for this task is Friday.', context: 'Professional' },
  { word: 'Clarify', meaning: 'Make a statement or situation less confused.', hindiSupport: 'Spasht karna', pronunciation: '/ˈklær.ɪ.faɪ/', exampleSentence: 'Could you clarify this requirement?', context: 'Soft Skills' },
  { word: 'Routine', meaning: 'A sequence of actions regularly followed.', hindiSupport: 'Dincharya', pronunciation: '/ruːˈtiːn/', exampleSentence: 'My morning routine includes reading.', context: 'Daily Life' },
  { word: 'Vocabulary', meaning: 'The body of words used in a particular language.', hindiSupport: 'Shabdawali', pronunciation: '/vəˈkæb.jə.lər.i/', exampleSentence: 'I learn new vocabulary every day.', context: 'Learning' },
  { word: 'Focus', meaning: 'Pay particular attention to.', hindiSupport: 'Dhyan kendrit karna', pronunciation: '/ˈfəʊ.kəs/', exampleSentence: 'I need to focus on my pronunciation.', context: 'Learning' }
];