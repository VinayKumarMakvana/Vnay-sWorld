export const b2ReadingModules = [
  {
    order: 5,
    title: 'B2 Reading Coach',
    description: '30 advanced reading passages.',
    units: [
      {
        order: 1,
        title: 'Tech and Society (Advanced Texts)',
        description: 'Complex articles and opinions.',
        lessons: [
          {
            order: 1,
            title: 'Ethics and AI',
            description: 'Analyzing arguments.',
            concepts: [],
            exercises: [
              { type: 'reading', prompt: 'PASSAGE: The rapid proliferation of artificial intelligence raises profound ethical questions. The primary concern is not a dystopian robot uprising, but rather the amplification of existing human biases embedded within the training data. If an algorithm is trained on historically prejudiced hiring decisions, it will inevitably replicate those prejudices, giving them a veneer of objective mathematical authority. QUESTION: What is the main ethical concern regarding AI mentioned in the text?', answer: 'The amplification of existing human biases embedded in the training data.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: (From previous passage) QUESTION: What does the phrase "a veneer of objective mathematical authority" imply?', answer: 'It implies that biased decisions might seem fair and scientific because they are made by a computer program.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Proponents of remote work argue that it democratizes opportunity, allowing companies to hire talent globally regardless of geographical constraints. Conversely, critics contend that it erodes company culture and stifles the spontaneous innovation that occurs when individuals share physical proximity. Both sides present compelling arguments, suggesting the future lies in a highly flexible, intentional hybrid model. QUESTION: What do critics of remote work argue?', answer: 'That it erodes company culture and stifles spontaneous innovation.', difficulty: 'B2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: (From previous passage) QUESTION: What does "democratizes opportunity" mean in this context?', answer: 'It makes opportunities available to everyone, regardless of where they live.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: The open-source movement relies on a paradox: thousands of highly skilled engineers donating their time for free to build software that multi-billion-dollar corporations then use to generate massive profits. While some view this as exploitation, contributors often see it as an invaluable mechanism for skill development, networking, and establishing industry credibility. QUESTION: What is the paradox of the open-source movement?', answer: 'Engineers work for free to build software that corporations use to make massive profits.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: (From previous passage) QUESTION: Why do engineers contribute to open source despite not being paid?', answer: 'For skill development, networking, and industry credibility.', difficulty: 'B2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: Technical debt is analogous to financial debt. If you take a shortcut to ship a feature faster, you incur debt. You must eventually pay it back by refactoring the code. If you do not, the "interest" accumulates in the form of an increasingly fragile codebase where adding new features becomes prohibitively slow and risky. QUESTION: How is technical debt similar to financial debt?', answer: 'If not paid back, it accumulates interest, making future progress slow and risky.', difficulty: 'B2-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Professional Documentation',
            description: 'Reading between the lines.',
            concepts: [],
            exercises: [
              { type: 'reading', prompt: 'PASSAGE: Memo from Leadership: In light of recent macroeconomic headwinds and our Q3 financial results, we are implementing an immediate hiring freeze across all departments, effective today. Furthermore, all non-essential travel and software subscriptions will be subject to a rigorous secondary review process by the finance team. QUESTION: What action is the company taking regarding hiring?', answer: 'They are implementing an immediate hiring freeze across all departments.', difficulty: 'B2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: (From previous passage) QUESTION: What does "macroeconomic headwinds" mean in this context?', answer: 'Negative economic trends affecting the business.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Architecture Decision Record (ADR): We have decided to migrate from a RESTful architecture to GraphQL. While REST served us well during our initial growth phase, the increasing complexity of our frontend data requirements has led to significant over-fetching and under-fetching issues. GraphQL will allow the client to request precisely the data it needs, reducing payload size. QUESTION: Why is the team moving to GraphQL?', answer: 'To solve over-fetching and under-fetching issues caused by complex frontend requirements.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: (From previous passage) QUESTION: What is a benefit of GraphQL mentioned in the text?', answer: 'It allows the client to request precisely the data it needs, reducing payload size.', difficulty: 'B2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: Post-Incident Review: The outage on Tuesday was caused by a cascading failure initiated by a misconfigured load balancer. The load balancer incorrectly routed 100% of the traffic to a single node, which immediately crashed due to memory exhaustion. The automated health checks failed to remove the dead node, exacerbating the issue. QUESTION: What was the root cause of the outage?', answer: 'A misconfigured load balancer.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: (From previous passage) QUESTION: Why did the issue become worse (exacerbated)?', answer: 'Because automated health checks failed to remove the dead node.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Client Email: We appreciate the latest build. However, the UI on the dashboard feels somewhat clunky and unintuitive compared to the wireframes we approved last month. Could we schedule a brief sync tomorrow to discuss realigning the implementation with the original design vision? QUESTION: What is the client\'s main concern?', answer: 'The dashboard UI is clunky and doesn\'t match the approved wireframes.', difficulty: 'B2-MEDIUM' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Deep Focus Reading',
        description: 'Sustained comprehension (16 exercises).',
        lessons: [
          {
            order: 1,
            title: 'Complex Passages',
            description: 'Inferring meaning.',
            concepts: [],
            exercises: [
              // Padding to 30 exercises total
              { type: 'reading', prompt: 'PASSAGE: The transition from a monolithic architecture to microservices is frequently lauded as a silver bullet for scalability. However, organizations often underestimate the profound operational complexity it introduces. What was once a simple function call within a monolith becomes a network request that can fail, timeout, or face latency issues. QUESTION: What does the author mean by "silver bullet"?', answer: 'A simple, magical solution to a complex problem.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: (From previous passage) QUESTION: What is one operational complexity introduced by microservices?', answer: 'Simple function calls become network requests that can fail or face latency.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: A common pitfall for junior engineers is "premature optimization." This occurs when a developer spends excessive time making a piece of code incredibly fast before knowing if that specific code is actually the bottleneck affecting the user. As Donald Knuth famously stated, "premature optimization is the root of all evil." QUESTION: What is premature optimization?', answer: 'Spending excessive time optimizing code before knowing if it is the actual bottleneck.', difficulty: 'B2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: The Dunning-Kruger effect is a cognitive bias in which people with limited competence in a particular domain overestimate their abilities. In software engineering, this often manifests when a beginner learns a framework and assumes they can architect a large-scale system, completely unaware of the complexities involved in deployment and security. QUESTION: How does the Dunning-Kruger effect manifest in software engineering?', answer: 'Beginners learn a framework and assume they can architect large systems, ignoring deployment and security complexities.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: While rigorous code reviews are essential for maintaining code quality, they can inadvertently foster a toxic environment if not conducted with empathy. Reviewers should focus on critiquing the code, not the coder. Using phrases like "have you considered..." instead of "you did this wrong" can drastically change the tone of the review. QUESTION: How can code reviews become toxic?', answer: 'If they are not conducted with empathy and focus on criticizing the coder instead of the code.', difficulty: 'B2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: (From previous passage) QUESTION: What is the recommended way to phrase a critique?', answer: 'Use phrases like "have you considered..." instead of "you did this wrong".', difficulty: 'B2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: The concept of "Serverless" computing is somewhat of a misnomer. There are, of course, still servers involved. The term simply implies that the developer does not need to provision, manage, or scale those servers themselves; the cloud provider handles the infrastructure dynamically, charging only for the exact compute time used. QUESTION: Why is "Serverless" considered a misnomer?', answer: 'Because servers are still involved, the developer just doesn\'t manage them.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Startups operate under extreme uncertainty. Unlike established enterprises that execute known business models, startups are essentially temporary organizations searching for a repeatable and scalable business model. Therefore, speed of iteration and learning from user feedback are far more critical than initial code perfection. QUESTION: What is a startup searching for, according to the text?', answer: 'A repeatable and scalable business model.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: (From previous passage) QUESTION: Why is speed of iteration more critical than code perfection for startups?', answer: 'Because startups operate under extreme uncertainty and need to learn quickly from user feedback.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: A Zero Trust security model assumes that threats exist both inside and outside the network perimeter. Therefore, it requires strict identity verification for every person and device trying to access resources, regardless of whether they are sitting in the company office or connecting remotely from a coffee shop. QUESTION: What is the core assumption of a Zero Trust security model?', answer: 'That threats exist both inside and outside the network perimeter.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: Imposter syndrome often peaks when an engineer is promoted to a senior role. Suddenly, the expectations shift from simply writing code to guiding the technical direction of the team and mentoring others. The fear of being "found out" as a fraud intensifies, despite a proven track record of success. QUESTION: When does imposter syndrome often peak?', answer: 'When an engineer is promoted to a senior role.', difficulty: 'B2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: The General Data Protection Regulation (GDPR) fundamentally changed how companies handle user data. It is no longer acceptable to quietly collect and sell personal information. Companies must obtain explicit consent, provide users with the ability to delete their data, and face massive fines for non-compliance. QUESTION: What are two requirements companies must follow under GDPR?', answer: 'Obtain explicit consent and provide users the ability to delete their data.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: The Pareto Principle, or the 80/20 rule, states that 80% of consequences come from 20% of causes. In software, this often means that 80% of a user\'s time is spent using only 20% of the application\'s features. Consequently, product teams should focus their engineering efforts on perfecting that critical 20%. QUESTION: How does the Pareto Principle apply to software usage?', answer: 'Users spend 80% of their time on 20% of the application\'s features.', difficulty: 'B2-MEDIUM' },
              { type: 'reading', prompt: 'PASSAGE: Asynchronous programming in JavaScript can be conceptually difficult to grasp initially. Instead of executing code sequentially line by line and blocking the main thread, asynchronous functions allow the program to initiate a task, like a network request, and continue executing other code while waiting for the response. QUESTION: What is the main benefit of asynchronous programming mentioned in the text?', answer: 'It allows the program to continue executing other code while waiting for a task to finish.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: In negotiations, the concept of BATNA (Best Alternative to a Negotiated Agreement) is crucial. Before entering a negotiation, you must know your fallback option. If your BATNA is strong—for example, you have three other job offers—you possess significant leverage. If your BATNA is weak, you must negotiate more cautiously. QUESTION: What does having a strong BATNA give you in a negotiation?', answer: 'Significant leverage.', difficulty: 'B2-HARD' },
              { type: 'reading', prompt: 'PASSAGE: The transition to management is rarely a promotion; it is a career change. Many excellent engineers fail as managers because they attempt to continue writing code while neglecting their new primary responsibilities: clearing blockers, facilitating communication, and developing their team members\' careers. QUESTION: Why do many excellent engineers fail as managers?', answer: 'They try to continue writing code and neglect their new management responsibilities.', difficulty: 'B2-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
