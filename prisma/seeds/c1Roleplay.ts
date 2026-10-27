export const c1RoleplayModules = [
  {
    order: 14,
    title: 'C1 Advanced Roleplay Engine',
    description: '30 advanced scenarios for executive and strategic conflict.',
    units: [
      {
        order: 1,
        title: 'Executive Conflict and Strategy',
        description: 'Roleplaying high-stakes decision making.',
        lessons: [
          {
            order: 1,
            title: 'Boardroom Negotiations',
            description: 'Defending strategy against executives.',
            concepts: [],
            exercises: [
              { type: 'roleplay', prompt: 'ROLEPLAY: The CEO wants to launch an AI feature next week because a competitor did. You know the model is biased and hallucinating. Push back.', answer: 'I understand the urgency to match our competitor. However, launching this model in its current state will result in highly biased outputs, which will severely damage our brand reputation. I need three weeks to implement guardrails.', difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You are an architect. A senior developer bypasses your security review and pushes code directly to production. Confront them.', answer: 'I saw you bypassed the mandatory security review for the auth module. This is a severe violation of our compliance protocol. If you bypass the review process again, I will have to revoke your direct commit access to the main branch.', difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: A client is threatening a lawsuit because your API went down for 12 hours, costing them millions. Lead the crisis call.', answer: 'First and foremost, I want to formally apologize. The outage was unacceptable. We have identified the root cause—a cascading failure in our load balancers. I have a detailed remediation plan here to ensure this specific failure vector is permanently closed.', difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You must fire a popular, long-standing engineer because their skills have completely stagnated and they refuse to learn the new stack.', answer: 'This is a difficult conversation. We deeply appreciate your years of service, but the company is moving to a stack that requires a different skill set. Since you have expressed an unwillingness to transition to the new architecture, we have to let you go.', difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Negotiate a partnership with a vendor who wants exclusive rights to your data, which you cannot give.', answer: 'We are very excited about this partnership. However, granting exclusive rights to our user data is a non-starter for us due to our privacy manifesto. We can, however, offer you a preferential API rate limit. Would that be an acceptable compromise?', difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Your engineering manager is sexually harassing a junior team member. You are reporting it to HR. Be precise and objective.', answer: 'I am here to formally report a pattern of inappropriate behavior by my manager toward a junior developer. On three separate occasions, I witnessed him make explicit comments regarding her appearance. I have documented the dates and times.', difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Present a strategy to the board to shut down the company\'s original, flagship product because it is losing money.', answer: 'While Product X built this company, it currently accounts for 40% of our infrastructure costs but only 5% of our revenue. It is an emotional decision, but a mathematically necessary one: we must sunset Product X to ensure the survival of the company.', difficulty: 'C1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Technical Scenarios',
            description: 'Explaining failures.',
            concepts: [],
            exercises: [
              { type: 'roleplay', prompt: 'ROLEPLAY: A junior developer accidentally deleted the production database. Comfort them, but outline the severity of the situation.', answer: 'Take a breath. We have backups. You are not fired. However, this is a critical incident. I need you to immediately document exactly the commands you ran so we can fix the pipeline that allowed you to do this in the first place.', difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Explain to a furious marketing director why their massive email campaign caused the website to crash.', answer: 'The email blast sent 500,000 concurrent users to a landing page that wasn\'t cached. Our servers scaled up, but the database connection pool was instantly exhausted. In the future, we need to coordinate these blasts so we can pre-warm the cache.', difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Decline a $100k contract from a client because their requirements are highly unethical.', answer: 'We have reviewed the specifications for the data-scraping tool. Because this tool inherently violates the terms of service of multiple platforms and borders on illegal surveillance, we are ethically compelled to decline this contract.', difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Convince your team to adopt a strict "No Deployments on Friday" policy.', answer: 'We are implementing a hard freeze on Friday deployments. The metrics show that 80% of our weekend outages stem from Friday afternoon pushes. We need to prioritize our team\'s mental health over minor feature velocity.', difficulty: 'C1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Extended Roleplay Scenarios',
        description: '19 exercises to reach 30.',
        lessons: [
          {
            order: 1,
            title: 'Rapid Fire Scenarios',
            description: '19 exercises.',
            concepts: [],
            exercises: [
              { type: 'roleplay', prompt: 'ROLEPLAY: Defend your request for a $250,000 budget to hire a dedicated cybersecurity firm.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Tell a founder that their core idea violates the laws of physics/computer science (e.g., faster than light communication).', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Intervene in a situation where a vendor is trying to bribe you to choose their software.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: You are resigning immediately due to a toxic environment. Do it professionally but firmly.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Ask for a 6-month unpaid sabbatical to avoid severe burnout.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Reassure investors during a funding round after your CTO abruptly quits.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Explain to a judge in a legal deposition why your software failed (you are acting as an expert witness).', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Confront a colleague who has been quietly sabotaging your work to make themselves look better.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Negotiate severance after being laid off unexpectedly.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Pitch yourself for the CTO role after the previous one was fired.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Inform a client that you are firing them as a client because they are abusive to your team.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Explain to the board why you missed your Q3 delivery targets by a massive margin.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Mediate a cultural misunderstanding between the US team and the engineering team in India.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Refuse to sign an overly restrictive Non-Compete Agreement (NCA).', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Convince a highly skeptical team to adopt AI coding assistants (like Copilot).', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Apologize publicly at a conference after your software accidentally leaked user data.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Tell your manager that their management style is the reason team morale is at an all-time low.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Negotiate with a cloud provider for a massive enterprise discount.', answer: null, difficulty: 'C1-HARD' },
              { type: 'roleplay', prompt: 'ROLEPLAY: Guide a panic-stricken team through a live ransomware attack response.', answer: null, difficulty: 'C1-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
