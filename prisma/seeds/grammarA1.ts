export const a1GrammarModules = [
  {
    order: 10,
    title: 'A1 Grammar Foundation - Part 1 (Nouns & Pronouns)',
    description: 'The core building blocks of English sentences.',
    units: [
      {
        order: 1,
        title: 'Nouns (Naming Words)',
        description: 'People, places, and things.',
        lessons: [
          {
            order: 1,
            title: 'Common vs Proper Nouns',
            description: 'General names vs specific names.',
            concepts: [
              {
                order: 1,
                title: 'What is a noun?',
                explanation: 'A noun is a name of a person, place, or thing. A Proper Noun is a specific name and always starts with a capital letter.',
                hindiSupport: 'Noun kisi vyakti, jagah, ya vastu ka naam hota hai. Proper Noun hamesha capital letter se shuru hota hai.',
                examples: [
                  { english: 'city (common) -> Mumbai (proper)', hindi: null },
                  { english: 'man (common) -> Rahul (proper)', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Identify the proper noun: "The programmer works at Google."', answer: 'Google' },
              { type: 'writing', prompt: 'Write 3 proper nouns you interact with daily.', answer: null }
            ]
          },
          {
            order: 2,
            title: 'Singular & Plural Nouns',
            description: 'One vs many.',
            concepts: [
              {
                order: 1,
                title: 'Adding S or ES',
                explanation: 'To make a noun plural, usually add -s. If it ends in -s, -sh, -ch, -x, add -es.',
                hindiSupport: 'Ek se zyada batane ke liye s ya es lagate hain.',
                examples: [
                  { english: 'One bug -> Two bugs', hindi: 'Ek bug -> Do bugs' },
                  { english: 'One box -> Two boxes', hindi: 'Ek box -> Do boxes' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Make this plural: "branch"', answer: 'branches' }
            ]
          },
          {
            order: 3,
            title: 'Countable vs Uncountable',
            description: 'Things you can count vs things you measure.',
            concepts: [
              {
                order: 1,
                title: 'Countable vs Uncountable Basics',
                explanation: 'You can count computers (1 computer, 2 computers). You cannot count water (1 water ❌ -> 1 glass of water ✅). Information is uncountable in English.',
                hindiSupport: 'Jo gin sakte hain wo Countable. Jaise paani ya information ko hum sidhe nahi gin sakte.',
                examples: [
                  { english: 'I need some information. (NOT informations)', hindi: 'Mujhe kuch jankari chahiye.' },
                  { english: 'I have three laptops.', hindi: 'Mere paas teen laptops hain.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Is "Knowledge" countable or uncountable?', answer: 'Uncountable' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Pronouns & Possession',
        description: 'Replacing nouns and showing ownership.',
        lessons: [
          {
            order: 1,
            title: 'Subject and Object Pronouns',
            description: 'I vs Me, He vs Him.',
            concepts: [
              {
                order: 1,
                title: 'Subject (Doer) vs Object (Receiver)',
                explanation: 'Subjects do the action (I, He, She, We, They). Objects receive the action (Me, Him, Her, Us, Them).',
                hindiSupport: 'Subject kaam karta hai. Object par kaam hota hai.',
                examples: [
                  { english: 'I call him. (NOT Me call he)', hindi: 'Main use call karta hoon.' },
                  { english: 'She helps us.', hindi: 'Vah hamari madad karti hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in the blank: "My manager sent an email to ___ (I/me)."', answer: 'me' }
            ]
          },
          {
            order: 2,
            title: 'Possessive Adjectives & Forms',
            description: 'My, Your, His, Her, Its, Our, Their',
            concepts: [
              {
                order: 1,
                title: 'Showing Ownership',
                explanation: 'Use possessive adjectives before a noun to show whose it is.',
                hindiSupport: 'Kisi cheez ka malik kaun hai, yeh batane ke liye My, Your, His lagate hain.',
                examples: [
                  { english: 'This is my laptop.', hindi: 'Yeh mera laptop hai.' },
                  { english: 'Is this your code?', hindi: 'Kya yeh aapka code hai?' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Change to possessive: "The desk of Rahul"', answer: 'Rahul\'s desk' }
            ]
          }
        ]
      }
    ]
  },
  {
    order: 11,
    title: 'A1 Grammar Foundation - Part 2 (Articles & Modals)',
    description: 'Pointing to things and expressing ability.',
    units: [
      {
        order: 1,
        title: 'Articles and Demonstratives',
        description: 'A, An, The, This, That, These, Those',
        lessons: [
          {
            order: 1,
            title: 'A vs An vs The',
            description: 'Specific vs Non-specific.',
            concepts: [
              {
                order: 1,
                title: 'A / An (General) vs The (Specific)',
                explanation: 'Use A/An for any one item. Use "The" when both you and the listener know exactly which item you mean.',
                hindiSupport: 'Koi ek cheez ke liye A/An. Kisi khaas cheez ke liye The.',
                examples: [
                  { english: 'I need a pen. (Any pen)', hindi: 'Mujhe ek pen chahiye.' },
                  { english: 'I need the pen on your desk. (Specific pen)', hindi: 'Mujhe woh pen chahiye jo tumhari desk par hai.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in the blank: I found ___ bug in the code. ___ bug is critical.', answer: 'a, The' }
            ]
          },
          {
            order: 2,
            title: 'This, That, These, Those',
            description: 'Pointing to objects.',
            concepts: [
              {
                order: 1,
                title: 'Near vs Far, Singular vs Plural',
                explanation: 'Near singular = This. Far singular = That. Near plural = These. Far plural = Those.',
                hindiSupport: 'Paas ki ek cheez: This. Door ki ek cheez: That. Paas ki zyada cheezein: These.',
                examples: [
                  { english: 'This laptop is mine.', hindi: 'Yeh laptop mera hai.' },
                  { english: 'Those servers are down.', hindi: 'Woh (door wale) servers down hain.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Point to something far away and make a sentence using "That".', answer: null }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Basic Modals & Imperatives',
        description: 'Can, Must, Should, and Commands.',
        lessons: [
          {
            order: 1,
            title: 'Can and Cannot (Can\'t)',
            description: 'Ability and permission.',
            concepts: [
              {
                order: 1,
                title: 'Using Can',
                explanation: 'Used to show ability or to ask for permission. Always followed by base verb.',
                hindiSupport: 'Apni kshamta ya anumati lene ke liye "Can" ka upyog karein.',
                examples: [
                  { english: 'I can write code in React.', hindi: 'Main React mein code likh sakta hoon.' },
                  { english: 'Can you help me?', hindi: 'Kya aap meri madad kar sakte hain?' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fix the error: "I can to speak English."', answer: 'I can speak English.' }
            ]
          },
          {
            order: 2,
            title: 'Must vs Should',
            description: 'Obligation vs Recommendation.',
            concepts: [
              {
                order: 1,
                title: 'Must = Rule, Should = Good Idea',
                explanation: 'Must means 100% required. Should means it is highly recommended.',
                hindiSupport: 'Must matlab zaroori hai (niyam). Should matlab karna accha rahega (salah).',
                examples: [
                  { english: 'You must save your work.', hindi: 'Aapko apna kaam save karna hi hoga.' },
                  { english: 'You should take a break.', hindi: 'Aapko thoda aaram karna chahiye.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Choose Must or Should: "Employees ___ wear their ID cards at all times." (Company Policy)', answer: 'must' }
            ]
          },
          {
            order: 3,
            title: 'Imperatives',
            description: 'Giving direct instructions.',
            concepts: [
              {
                order: 1,
                title: 'Commands without Subject',
                explanation: 'Start with the verb to give an instruction. Add "Don\'t" for negative instructions.',
                hindiSupport: 'Nirdesh dene ke liye sidha verb se shuru karein.',
                examples: [
                  { english: 'Click this button.', hindi: 'Is button par click karein.' },
                  { english: 'Don\'t delete the database.', hindi: 'Database delete mat karo.' }
                ]
              }
            ],
            exercises: [
              { type: 'writing', prompt: 'Write an instruction telling a user to enter their password.', answer: 'Enter your password.' }
            ]
          }
        ]
      }
    ]
  },
  {
    order: 12,
    title: 'A1 Grammar Foundation - Part 3 (Tenses & Questions)',
    description: 'Past, Present, Future.',
    units: [
      {
        order: 1,
        title: 'Present Tenses Deep Dive',
        description: 'Simple and Continuous.',
        lessons: [
          {
            order: 1,
            title: 'Present Simple vs Continuous',
            description: 'Habits vs Happening Now.',
            concepts: [
              {
                order: 1,
                title: 'Routine vs Moment',
                explanation: 'I work (every day). I am working (right now).',
                hindiSupport: 'Jo roz hota hai usme (verb), jo abhi ho raha hai usme (is/am/are + verb-ing).',
                examples: [
                  { english: 'I usually drink tea, but right now I am drinking coffee.', hindi: 'Main aam taur par chai peeta hoon, par abhi main coffee pee raha hoon.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill blank: Look! The manager ___ (come).', answer: 'is coming' }
            ]
          },
          {
            order: 2,
            title: 'Forming Questions',
            description: 'Do/Does and Am/Is/Are',
            concepts: [
              {
                order: 1,
                title: 'Do and Does',
                explanation: 'Use Do/Does for Present Simple questions. Do you...? Does she...?',
                hindiSupport: 'Sawal puchne ke liye Do ya Does ka upyog aage karein.',
                examples: [
                  { english: 'Do you know Python?', hindi: 'Kya aap Python jante hain?' },
                  { english: 'Does it work?', hindi: 'Kya yeh kaam karta hai?' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Ask a colleague if they have time for a meeting.', answer: 'Do you have time for a meeting?' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Past and Future Basics',
        description: 'Yesterday and Tomorrow.',
        lessons: [
          {
            order: 1,
            title: 'Past Simple (Regular & Irregular)',
            description: 'Finished actions.',
            concepts: [
              {
                order: 1,
                title: 'Adding -ED and Irregular Verbs',
                explanation: 'Regular verbs add -ed (work -> worked). Irregular verbs change completely (go -> went, see -> saw).',
                hindiSupport: 'Beete hue samay ke liye verb ka dusra roop lagayein (V2).',
                examples: [
                  { english: 'I finished the task yesterday.', hindi: 'Maine kal kaam khatam kiya.' },
                  { english: 'I went to the office.', hindi: 'Main office gaya.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'What is the past tense of "write"?', answer: 'wrote' }
            ]
          },
          {
            order: 2,
            title: 'Past Negatives & Questions',
            description: 'Using "Did".',
            concepts: [
              {
                order: 1,
                title: 'Did not (Didn\'t) + Base Verb',
                explanation: 'In negative past, use "didn\'t" and return the verb to its original base form.',
                hindiSupport: 'Past negative mein didn\'t lagta hai aur verb ka pehla roop (V1) wapas aa jata hai.',
                examples: [
                  { english: 'I didn\'t understand. (NOT didn\'t understood)', hindi: 'Mujhe samajh nahi aaya.' },
                  { english: 'Did you fix the bug?', hindi: 'Kya tumne bug fix kiya?' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fix the error: "I didn\'t saw the email."', answer: 'I didn\'t see the email.' }
            ]
          },
          {
            order: 3,
            title: 'Basic Future (Will vs Going to)',
            description: 'Predictions vs Plans.',
            concepts: [
              {
                order: 1,
                title: 'Will vs Be Going To',
                explanation: '"Will" is for instant decisions or promises. "Going to" is for plans made before.',
                hindiSupport: 'Achanak liye faisle ke liye "will". Pehle se bani planning ke liye "going to".',
                examples: [
                  { english: 'I will send it right now.', hindi: 'Main ise abhi bhej dunga.' },
                  { english: 'I am going to learn Java next month.', hindi: 'Main agle mahine Java seekhne wala hoon.' }
                ]
              }
            ],
            exercises: [
              { type: 'speaking', prompt: 'Say one thing you are going to do this weekend.', answer: 'I am going to rest.' }
            ]
          }
        ]
      }
    ]
  },
  {
    order: 13,
    title: 'A1 Grammar Foundation - Part 4 (Description & Connection)',
    description: 'Making sentences richer.',
    units: [
      {
        order: 1,
        title: 'Adjectives, Adverbs & Prepositions',
        description: 'Details and locations.',
        lessons: [
          {
            order: 1,
            title: 'Adjectives vs Adverbs',
            description: 'Describing nouns vs describing verbs.',
            concepts: [
              {
                order: 1,
                title: 'How is it vs How is it done',
                explanation: 'Adjectives describe things (The code is slow). Adverbs describe actions (The app runs slowly).',
                hindiSupport: 'Adjective cheezon ke bare mein batata hai. Adverb kaam ke bare mein batata hai.',
                examples: [
                  { english: 'She is a quick learner. (Adjective)', hindi: null },
                  { english: 'She learns quickly. (Adverb)', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Choose correct: "He speaks English (good/well)."', answer: 'well' }
            ]
          },
          {
            order: 2,
            title: 'Prepositions of Time & Place',
            description: 'In, On, At',
            concepts: [
              {
                order: 1,
                title: 'IN (General) - ON (Specific) - AT (Exact)',
                explanation: 'Time: In May, On Monday, At 5 PM. Place: In the world, On the desk, At the door.',
                hindiSupport: 'IN bade samay/jagah ke liye, ON din/satah ke liye, AT fixed time/point ke liye.',
                examples: [
                  { english: 'The meeting is on Tuesday at 10 AM.', hindi: 'Meeting Mangalwar ko 10 baje hai.' },
                  { english: 'The file is on my computer in the downloads folder.', hindi: null }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Fill in blank: Let\'s meet ___ Friday ___ 3 PM.', answer: 'on, at' }
            ]
          },
          {
            order: 3,
            title: 'Basic Conjunctions',
            description: 'And, But, Or, Because',
            concepts: [
              {
                order: 1,
                title: 'Connecting Ideas',
                explanation: 'And = addition. But = contrast. Or = choice. Because = reason.',
                hindiSupport: 'And (aur), But (lekin), Or (ya), Because (kyunki).',
                examples: [
                  { english: 'I like React but I don\'t like CSS.', hindi: 'Mujhe React pasand hai par CSS nahi pasand.' },
                  { english: 'I was late because of traffic.', hindi: 'Traffic ki wajah se main late tha.' }
                ]
              }
            ],
            exercises: [
              { type: 'grammar', prompt: 'Connect: "It is raining. I will stay home." using Because.', answer: 'I will stay home because it is raining.' }
            ]
          }
        ]
      }
    ]
  }
];
