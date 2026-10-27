export const b1ReadingModules = [
  {
    order: 5,
    title: 'B1 Reading Coach',
    description: '25 meaningful B1 reading passages.',
    units: [
      {
        order: 1,
        title: 'Technology and Career',
        description: 'Longer articles and opinions.',
        lessons: [
          {
            order: 1,
            title: 'The Future of Work',
            description: 'Remote and hybrid trends.',
            concepts: [],
            exercises: [
              { type: 'reading', prompt: 'PASSAGE: The shift towards remote work has fundamentally altered how companies operate. While employees appreciate the flexibility and lack of commute, managers often struggle with maintaining team cohesion. Hybrid models, where employees spend two days in the office and three at home, are becoming the standard compromise. QUESTION: Why do managers sometimes struggle with remote work?', answer: 'They struggle with maintaining team cohesion.', difficulty: 'B1-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: Continuous integration (CI) is a practice where developers frequently merge their code changes into a central repository. Automated builds and tests are then run. This helps identify bugs early and improves software quality. It requires discipline but saves hours of debugging later. QUESTION: What is the main benefit of running automated builds and tests?', answer: 'It helps identify bugs early and improves software quality.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Artificial Intelligence is rapidly changing the software landscape. However, rather than replacing developers entirely, AI is expected to become an assistant that handles boilerplate code, allowing engineers to focus on architecture and complex business logic. QUESTION: How is AI expected to change a developer\'s role?', answer: 'It will handle boilerplate code, letting developers focus on architecture and complex logic.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Imposter syndrome is common among junior developers. It is the feeling that you are not as competent as others perceive you to be. The best way to combat it is to realize that even senior developers constantly search for answers on Google. QUESTION: What is imposter syndrome?', answer: 'The feeling that you are not as competent as others think you are.', difficulty: 'B1-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: Open-source software is code that is freely available for anyone to use, modify, and distribute. Contributing to open-source projects is a great way for beginners to build a portfolio and learn from experienced developers around the world. QUESTION: Why is open-source good for beginners?', answer: 'It helps them build a portfolio and learn from experienced developers.', difficulty: 'B1-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Workplace Documentation',
            description: 'Emails and specs.',
            concepts: [],
            exercises: [
              { type: 'reading', prompt: 'PASSAGE: Memo: Starting next month, all code deployments to the production environment must be approved by a senior engineer. This is to reduce the number of critical bugs introduced during late Friday deployments. Please ensure your pull requests are submitted by Thursday afternoon. QUESTION: Why is the new deployment rule being introduced?', answer: 'To reduce critical bugs introduced during late Friday deployments.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Product Requirements Document (PRD): The new user dashboard must load in under 2 seconds. It should display the user\'s recent activity, upcoming tasks, and account notifications. The layout must be fully responsive across mobile, tablet, and desktop devices. QUESTION: What are the three things the dashboard must display?', answer: 'Recent activity, upcoming tasks, and account notifications.', difficulty: 'B1-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: Email to Client: Dear Sarah, we have completed the first milestone of the project. The authentication system is live on the staging server. However, we encountered a minor delay with the database migration, which will push milestone two back by exactly three days. QUESTION: What caused the delay in milestone two?', answer: 'A minor delay with the database migration.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: API Documentation: The /users endpoint accepts a GET request and returns an array of user objects. You can append a ?role=admin query parameter to filter the results. Authentication via a Bearer token is required for all requests. QUESTION: How do you filter the results to only show admins?', answer: 'By appending a ?role=admin query parameter.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Incident Report: At 14:00 UTC, the primary database server experienced a CPU spike, causing the application to become unresponsive. The issue was traced to an unoptimized search query. An index was added, and service was restored by 14:45 UTC. QUESTION: How was the issue resolved?', answer: 'By adding an index to the unoptimized search query.', difficulty: 'B1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Global Topics and Narratives',
        description: 'Reading for broader context.',
        lessons: [
          {
            order: 1,
            title: 'International Communication',
            description: 'Culture and norms.',
            concepts: [],
            exercises: [
              { type: 'reading', prompt: 'PASSAGE: In some cultures, arriving exactly on time is considered rude, while in others, being five minutes late is highly unprofessional. When working with international teams, it is crucial to establish clear expectations regarding meeting times to avoid misunderstandings. QUESTION: Why is establishing meeting times important in international teams?', answer: 'Because attitudes towards punctuality vary greatly between cultures.', difficulty: 'B1-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: Learning a second language as an adult is challenging because the brain is less plastic than in childhood. However, adults have the advantage of understanding complex grammar concepts and utilizing structured study methods, which can accelerate learning. QUESTION: What advantage do adults have when learning a language?', answer: 'They understand complex grammar and use structured study methods.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: The company announced its shift to a four-day work week without reducing salaries. Initial studies show that productivity remained the same, while employee burnout decreased significantly. However, some managers argue that it is difficult to schedule client meetings. QUESTION: What was the negative impact of the four-day work week?', answer: 'It made scheduling client meetings difficult.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Before a job interview, researching the company\'s recent news and culture is just as important as practicing technical questions. Candidates who ask insightful questions about the company\'s future projects often leave a much stronger impression on the hiring manager. QUESTION: What leaves a strong impression on hiring managers?', answer: 'Asking insightful questions about the company\'s future projects.', difficulty: 'B1-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: While technical skills get you the interview, soft skills get you the job. Communication, empathy, and teamwork are essential because software development is inherently collaborative. No one wants to work with a brilliant coder who cannot communicate respectfully. QUESTION: Why are soft skills essential in software development?', answer: 'Because software development is inherently collaborative.', difficulty: 'B1-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Advanced Fluency Passages',
            description: 'Longer reads (10 passages split).',
            concepts: [],
            exercises: [
              // Padding out the remaining 10 exercises to hit 25 total
              { type: 'reading', prompt: 'PASSAGE: The transition from junior to mid-level developer involves more than just writing faster code. It requires learning how to architect solutions, review others\' code constructively, and foresee potential scaling issues before they happen in production. QUESTION: What is one thing required to become a mid-level developer?', answer: 'Learning how to architect solutions (or review code, or foresee issues).', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Cloud computing has democratized software development. Startups no longer need to invest heavily in physical servers. Instead, they can rent computing power from providers like AWS or Azure, scaling up their resources instantly if their application goes viral. QUESTION: Why don\'t startups need physical servers anymore?', answer: 'Because they can rent computing power from cloud providers.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: A microservices architecture breaks a large application into smaller, independent services. This means if the payment service crashes, the user can still browse the product catalog. However, managing communication between these services adds significant complexity. QUESTION: What is the main drawback of microservices mentioned here?', answer: 'Managing communication between the services is complex.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Asynchronous communication, such as emails or Slack messages, allows team members to respond when it suits them. This is vital for distributed teams across different time zones. Synchronous communication, like video calls, should be reserved for complex discussions. QUESTION: When should video calls be used?', answer: 'For complex discussions.', difficulty: 'B1-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: In agile development, a sprint is a set period, usually two weeks, during which specific work has to be completed. At the end of the sprint, the team holds a retrospective to discuss what went well and what could be improved in the next cycle. QUESTION: What happens during a retrospective?', answer: 'The team discusses what went well and what could be improved.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Refactoring is the process of restructuring existing computer code without changing its external behavior. It improves nonfunctional attributes of the software, making the code more readable and less complex, which reduces hidden bugs. QUESTION: Does refactoring change what the software does?', answer: 'No, it restructures the code without changing external behavior.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Cybersecurity is becoming increasingly critical. A simple vulnerability, like not sanitizing user input, can lead to SQL injection attacks, exposing sensitive customer data. Developers must adopt a security-first mindset from the beginning of the project. QUESTION: What can happen if user input is not sanitized?', answer: 'It can lead to SQL injection attacks and expose sensitive data.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Technical debt refers to the implied cost of additional rework caused by choosing an easy solution now instead of using a better approach that would take longer. Like financial debt, it accumulates interest and eventually makes progress impossibly slow if not paid off. QUESTION: What causes technical debt?', answer: 'Choosing an easy, quick solution instead of a better, longer one.', difficulty: 'B1-HARD' },
              { type: 'reading', prompt: 'PASSAGE: User experience (UX) design is distinct from user interface (UI) design. While UI focuses on the visual elements like colors and buttons, UX is about the overall feel of the experience and how logically the user can navigate to accomplish their goal. QUESTION: What is the main focus of UX design?', answer: 'The overall feel of the experience and logical navigation.', difficulty: 'B1-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: Freelancing offers freedom but requires intense self-discipline. You are not just a developer; you are also your own marketing, sales, and accounting department. Managing client expectations and chasing unpaid invoices are the hardest parts of the job. QUESTION: What are the hardest parts of freelancing mentioned in the text?', answer: 'Managing client expectations and chasing unpaid invoices.', difficulty: 'B1-MEDIUM' }
            ]
          }
        ]
      }
    ]
  }
];
