export const a2ReadingModules = [
  {
    order: 4,
    title: 'A2 Reading Coach',
    description: '20 meaningful A2 reading passages.',
    units: [
      {
        order: 1,
        title: 'Daily Life and Stories',
        description: 'Paragraphs and Short Stories.',
        lessons: [
          {
            order: 1,
            title: 'Personal Experiences',
            description: 'Reading about others.',
            concepts: [],
            exercises: [
              { type: 'reading', prompt: 'PASSAGE: Last summer, I traveled to Kerala with my family. We stayed in a houseboat for two days. The food was amazing, especially the fish curry. We also visited the tea gardens in Munnar. It was the best trip of my life. QUESTION: Where did they stay in Kerala?', answer: 'In a houseboat.', difficulty: 'A2-EASY' },
              { type: 'reading', prompt: 'PASSAGE: I have a very busy daily routine. I wake up at 5:30 AM and study programming for two hours. Then I go to college. In the evening, I work part-time at a cafe. I usually sleep by 11 PM. QUESTION: When does the person study programming?', answer: 'In the morning (5:30 AM).', difficulty: 'A2-EASY' },
              { type: 'reading', prompt: 'PASSAGE: My best friend is Maya. We met in high school. She is very intelligent and loves reading sci-fi books. Sometimes we disagree about movies, but we always support each other. QUESTION: Where did the narrator meet Maya?', answer: 'In high school.', difficulty: 'A2-EASY' },
              { type: 'reading', prompt: 'PASSAGE: Breaking News: A heavy storm is expected to hit the coastal areas tonight. Residents are advised to stay indoors and keep emergency supplies ready. Schools will remain closed tomorrow. QUESTION: What are residents advised to do?', answer: 'Stay indoors and keep emergency supplies ready.', difficulty: 'A2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: When I was a child, I was afraid of dogs. One day, a small puppy followed me home. My parents let me keep it. That puppy became my best friend and completely changed my fear. QUESTION: How did the narrator\'s fear change?', answer: 'They kept a stray puppy which became their best friend.', difficulty: 'A2-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Travel and Services',
            description: 'Practical texts.',
            concepts: [],
            exercises: [
              { type: 'reading', prompt: 'PASSAGE: Flight 402 to London is delayed due to bad weather. Passengers are requested to wait in Lounge B. Complimentary snacks will be provided. We apologize for the inconvenience. QUESTION: Why is the flight delayed?', answer: 'Due to bad weather.', difficulty: 'A2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: If you wish to return an item, please bring the original receipt. Returns must be made within 30 days of purchase. Electronics cannot be returned if the seal is broken. QUESTION: What is the rule for returning electronics?', answer: 'They cannot be returned if the seal is broken.', difficulty: 'A2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: Welcome to Green Cafe. We offer vegan and gluten-free options. Please inform the waiter if you have any severe food allergies before ordering. QUESTION: What must you do if you have an allergy?', answer: 'Inform the waiter before ordering.', difficulty: 'A2-EASY' },
              { type: 'reading', prompt: 'PASSAGE: Dear Guests, checkout time is 11:00 AM. If you require a late checkout, please contact the front desk before 9:00 AM. An extra fee may apply. QUESTION: How can you get a late checkout?', answer: 'Contact the front desk before 9:00 AM.', difficulty: 'A2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: The museum is open daily from 9 AM to 5 PM, except on Mondays. Entry is free for students with a valid ID card. QUESTION: On which day is the museum closed?', answer: 'Mondays.', difficulty: 'A2-EASY' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Workplace and Technical',
        description: 'Office talk and code reading.',
        lessons: [
          {
            order: 1,
            title: 'Workplace Conversations',
            description: 'Emails and chats.',
            concepts: [],
            exercises: [
              { type: 'reading', prompt: 'PASSAGE: Hi Team, we will have a project kickoff meeting on Wednesday at 2 PM. Please read the attached document before the meeting so we can discuss the requirements. QUESTION: What should the team do before the meeting?', answer: 'Read the attached document.', difficulty: 'A2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: Chat transcript: \nAlex: Has anyone seen the latest design files?\nSarah: I uploaded them to the shared folder this morning.\nAlex: Thanks, I found them. QUESTION: Where are the design files?', answer: 'In the shared folder.', difficulty: 'A2-EASY' },
              { type: 'reading', prompt: 'PASSAGE: Performance Review: John has shown great improvement in his coding skills. However, he needs to work on communicating blockers earlier to the team so we don\'t miss deadlines. QUESTION: What does John need to improve?', answer: 'Communicating blockers earlier.', difficulty: 'A2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: To request PTO (Paid Time Off), submit the form in the HR portal at least two weeks in advance. Your manager must approve it before it is finalized. QUESTION: How far in advance must PTO be requested?', answer: 'At least two weeks.', difficulty: 'A2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: I apologize for missing the call. I was dealing with an urgent server outage. I am available now if you want to connect. QUESTION: Why did the person miss the call?', answer: 'They were dealing with a server outage.', difficulty: 'A2-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Technical Beginner Texts',
            description: 'Bugs and APIs.',
            concepts: [],
            exercises: [
              { type: 'reading', prompt: 'PASSAGE: Git is a tool that tracks changes in your code. GitHub is a website that hosts your Git repositories online. They are different things, but they work together perfectly. QUESTION: What is the difference between Git and GitHub?', answer: 'Git tracks changes locally, GitHub hosts them online.', difficulty: 'A2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: BUG: The API is returning a 500 Internal Server Error when trying to fetch user data. This happens only for users who registered before 2022. QUESTION: Who does this bug affect?', answer: 'Users who registered before 2022.', difficulty: 'A2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: To install the packages, run "npm install" in your terminal. After it finishes, run "npm run dev" to start the local server. Do not push the node_modules folder to GitHub. QUESTION: What should you not push to GitHub?', answer: 'The node_modules folder.', difficulty: 'A2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: A REST API uses HTTP methods like GET to read data, POST to create data, and DELETE to remove data. It is a standard way for frontends to talk to backends. QUESTION: Which HTTP method is used to create data?', answer: 'POST.', difficulty: 'A2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Project description: We are building a task manager app. The frontend uses React, and the backend uses Node.js. All data is saved in a MongoDB database. QUESTION: What database is the project using?', answer: 'MongoDB.', difficulty: 'A2-MEDIUM' }
            ]
          }
        ]
      }
    ]
  }
];
