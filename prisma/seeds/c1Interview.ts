export const c1InterviewModules = [
  {
    order: 12,
    title: 'C1 Interview Mastery',
    description: '30 advanced interview exercises for executive and Staff Engineer roles.',
    units: [
      {
        order: 1,
        title: 'Executive Behavioral and Leadership',
        description: 'Handling ambiguity, failure, and strategy.',
        lessons: [
          {
            order: 1,
            title: 'Vision and Ambiguity',
            description: 'Answering high-level strategic questions.',
            concepts: [],
            exercises: [
              { type: 'interview', prompt: 'Interviewer: "Tell me about a time you had to make a critical technical decision with highly incomplete information."', answer: 'We had to choose a database for a new product with zero user data. I chose PostgreSQL because its JSONB support offered the flexibility of NoSQL while retaining ACID compliance, hedging our bets against unknown future requirements.', difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Describe a situation where you completely failed as a leader. What was the fallout?"', answer: 'I shielded my team from all executive pressure, thinking I was protecting them. Instead, they lost context on the business goals and built a feature no one wanted. I learned that transparency is better than a shield.', difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "How do you handle a situation where two of your senior engineers are deadlocked on an architectural decision?"', answer: 'I don\'t make the decision for them. I force them to write a joint ADR (Architecture Decision Record) listing the pros and cons of both approaches. Usually, seeing it in writing breaks the deadlock and reveals the objective winner.', difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Tell me about a time you had to push back against the CEO or a major stakeholder."', answer: 'The CEO wanted to launch a feature that violated GDPR. I didn\'t just say no; I presented a legal risk assessment alongside an alternative implementation that achieved 80% of the business value while remaining fully compliant.', difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "If you join us, how will you identify which technical debt is worth paying down, and which should be ignored?"', answer: 'I look at churn. If a terrible, legacy module works fine and is rarely touched, I ignore it. If a messy module is modified every week and constantly causes bugs, that is where I focus my refactoring efforts.', difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "What is your philosophy on measuring developer productivity?"', answer: 'Lines of code or tickets closed are vanity metrics. I measure productivity by deployment frequency, lead time for changes, and the mean time to recovery (MTTR). True productivity is how fast we safely deliver value to the user.', difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Tell me about a time you successfully managed out an underperforming team member."', answer: 'I put them on a PIP with crystal clear, achievable metrics. When they failed to meet them after 30 days, I handled the termination respectfully but firmly. It improved team morale immediately, as the rest of the team was no longer carrying their weight.', difficulty: 'C1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Technical Pushback and Negotiation',
            description: 'Standing your ground.',
            concepts: [],
            exercises: [
              { type: 'interview', prompt: 'Interviewer: "I completely disagree with your system design. It\'s over-engineered and won\'t scale. Defend it."', answer: 'I appreciate the challenge. The complexity here is intentional to handle eventual consistency across regions. However, if we assume a single-region deployment for the MVP, I agree we can drastically simplify this by removing the Kafka queue.', difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "We need someone who can work 60-hour weeks. Are you prepared for that?"', answer: 'I am prepared to do whatever it takes during critical launches or outages. However, a constant 60-hour baseline indicates systemic issues with project management or understaffing, which I would want to address strategically rather than just working longer hours.', difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Your salary expectations are significantly higher than our budget for this role."', answer: 'I understand budget constraints. However, my expectation is based on the specific mandate of this role—architecting a zero-downtime migration—which requires a level of specialized experience that commands this market rate.', difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Why are you leaving your current role after only 8 months?"', answer: 'I was hired to lead a cloud migration, but the company abruptly pivoted strategy and canceled the initiative. I am looking for a role where I can actually execute the architectural challenges I specialize in.', difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Tell me about a time you championed a technology that ended up being a massive mistake."', answer: 'I pushed hard for early adoption of a specific GraphQL federation library. It was too bleeding-edge, and the lack of documentation cost us weeks. I learned to never adopt v1.0 software for mission-critical infrastructure.', difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "How would you handle a situation where you discover your manager is stealing company code?"', answer: 'That is a zero-tolerance ethical boundary. I would immediately bypass my manager and report the incident directly to HR and the Legal department, providing any evidence I had secured.', difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "What is a controversial technical opinion you hold?"', answer: 'I believe microservices are a mistake for 90% of startups. They solve organizational scaling problems, not technical ones. Startups should build a well-structured monolith until they have the team size to justify the operational overhead of microservices.', difficulty: 'C1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Advanced Scenario Responses',
        description: '16 exercises to reach 30.',
        lessons: [
          {
            order: 1,
            title: 'Rapid Fire Behavioral',
            description: '16 exercises.',
            concepts: [],
            exercises: [
              { type: 'interview', prompt: 'Interviewer: "Tell me about a time you sacrificed code quality for a deadline."', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Describe a situation where you had to persuade a highly technical crowd to accept a non-technical solution."', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Tell me about a time you realized halfway through a project that your fundamental approach was wrong."', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "How do you handle a situation where a client asks for a feature that you know is a terrible idea for their business?"', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Tell me about a time you had to take over a failing project from someone else. How did you stabilize it?"', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Describe your process for onboarding into a massive, undocumented legacy codebase."', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Tell me about a time you had to deliver devastating news to a client or stakeholder."', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "How do you ensure that diversity and inclusion are actually prioritized in your hiring process, not just paid lip service?"', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Tell me about a time you deliberately broke a company rule to get something important done."', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Describe a situation where you had to mentor someone who was older and more experienced than you."', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Tell me about a time you successfully negotiated a larger budget for your team."', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "How do you handle the stress of being on-call during a severe, multi-hour production outage?"', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Tell me about a time you had to rebuild trust with a team after you made a major mistake."', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Describe a situation where you had to quickly learn a completely new domain or industry to complete a project."', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "Tell me about a time you identified a major security vulnerability that everyone else missed."', answer: null, difficulty: 'C1-HARD' },
              { type: 'interview', prompt: 'Interviewer: "If you could change one thing about the software engineering industry as a whole, what would it be?"', answer: null, difficulty: 'C1-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
