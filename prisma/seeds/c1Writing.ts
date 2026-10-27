export const c1WritingModules = [
  {
    order: 7,
    title: 'C1 Writing Coach',
    description: '35 advanced writing exercises for executive communication and technical proposals.',
    units: [
      {
        order: 1,
        title: 'Executive Communication',
        description: 'Writing for the C-Suite.',
        lessons: [
          {
            order: 1,
            title: 'Proposals and Escalations',
            description: 'Persuasive, high-stakes writing.',
            concepts: [],
            exercises: [
              { type: 'writing', prompt: 'Write an executive summary (max 150 words) to the CEO proposing the acquisition of a smaller AI startup to accelerate your product roadmap.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a highly diplomatic escalation email to a VP of Engineering, notifying them that their team\'s consistent failure to deliver an API is putting a multi-million dollar client at risk.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Draft a post-mortem summary for non-technical stakeholders explaining a severe database outage, focusing on business impact and remediation rather than technical details.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a persuasive email refusing a massive feature request from your largest client, using the "Yes, if" negotiation strategy to force them to prioritize.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a formal apology letter to a client regarding a data breach. Be completely transparent, own the mistake, and outline the exact cryptographic security upgrades being implemented.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Draft a project cancellation memo. Explain to the team why their project of 6 months is being killed due to market shifts, while keeping morale high.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a request for a 30% budget increase for cloud infrastructure. Use quantifiable metrics to prove that the current architecture is a bottleneck to revenue.', answer: null, difficulty: 'C1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Technical Documentation and ADRs',
            description: 'Explaining complex architectural decisions.',
            concepts: [],
            exercises: [
              { type: 'writing', prompt: 'Write an Architecture Decision Record (ADR) justifying the migration from a monolithic REST API to a GraphQL microservices architecture.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a comprehensive pull request (PR) description for a highly complex refactoring of the authentication flow. Explain the "why", not just the "what".', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Draft a technical onboarding guide (introduction only) for senior engineers joining a legacy codebase that has zero test coverage.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a Slack announcement to the entire engineering department detailing a breaking change to the core database schema, outlining exactly what they need to update.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a polite but rigorous code review rejecting a junior developer\'s PR because it introduces a severe SQL injection vulnerability.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Summarize the pros and cons of using WebSockets versus Server-Sent Events (SSE) for a real-time trading dashboard in a technical memo.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a formal incident report (RCA - Root Cause Analysis) detailing how a misconfigured IAM role in AWS led to unauthorized data access.', answer: null, difficulty: 'C1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Analytical and Opinion Writing',
        description: '21 exercises to reach 35.',
        lessons: [
          {
            order: 1,
            title: 'Essays and Professional Branding',
            description: '21 exercises.',
            concepts: [],
            exercises: [
              { type: 'writing', prompt: 'Write a 200-word LinkedIn article arguing that "Clean Code" principles are often taken too far, leading to premature optimization.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a performance review for a brilliant engineer who is incredibly toxic and alienates the rest of the team. Address the behavior firmly.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write your own performance self-evaluation, justifying a promotion to Staff Engineer based on your impact on team velocity and cross-departmental architecture.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a persuasive email to an open-source maintainer asking them to merge your controversial pull request that changes the library\'s core API.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Draft a conference talk abstract (150 words) on the topic of "Surviving the Transition from Monolith to Microservices." Make it compelling.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a response to a client who sent a highly aggressive email blaming you for a bug that was actually caused by their own third-party integration.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write an opinion piece on whether software engineering should require board certification, similar to medicine or civil engineering.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Summarize a complex technical book you recently read into three actionable bullet points for your engineering team.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write an email declining a very lucrative job offer from a FAANG company because you believe their core product is unethical.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a proposal to transition your engineering team to a 4-day work week, citing studies on developer productivity and burnout.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a nuanced critique of Agile methodologies, explaining how they often degrade into micromanagement in corporate environments.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Draft a memo explaining why the company should mandate a "No Meetings Wednesday" policy for the engineering department.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a letter of recommendation for a colleague who was laid off, highlighting their ability to handle extreme ambiguity.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a pitch to the CTO suggesting the creation of an internal "Developer Experience (DX)" team to improve tooling and velocity.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Explain the concept of "Eventual Consistency" in a brief memo intended for the customer support team, who need to explain UI delays to users.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a highly formal resignation letter to HR, ensuring you leave no legal ambiguities while maintaining a perfectly polite tone.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Draft a "ReadMe" philosophy section for your team\'s repository, outlining your stance on testing, code style, and deployment frequency.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write an email to a vendor disputing a $50,000 overcharge on your monthly cloud invoice. Be firm and reference specific SLA clauses.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a blog post analyzing why a prominent tech startup failed, focusing on technical architecture mistakes rather than business models.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Draft a message to a mentor asking for strategic advice on how to transition from engineering management back to an individual contributor role.', answer: null, difficulty: 'C1-HARD' },
              { type: 'writing', prompt: 'Write a 150-word defense of using a boring, legacy technology stack (like PHP/MySQL) instead of the latest JavaScript framework for a new startup.', answer: null, difficulty: 'C1-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
