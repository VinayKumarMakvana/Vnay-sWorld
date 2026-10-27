export const c1SoftSkillsModules = [
  {
    order: 10,
    title: 'C1 Advanced Soft Skills Coach',
    description: '35 complex scenarios for leadership, diplomacy, and conflict resolution.',
    units: [
      {
        order: 1,
        title: 'Leadership and Mentorship',
        description: 'Guiding teams through difficult situations.',
        lessons: [
          {
            order: 1,
            title: 'Managing Up and Down',
            description: 'Dealing with managers and juniors.',
            concepts: [],
            exercises: [
              { type: 'soft_skills', prompt: 'Your manager is micromanaging you to the point where it is slowing down your work. Address this professionally.', answer: '"I appreciate your involvement, but I feel the frequent check-ins are actually disrupting my flow state. Could we transition to a single, comprehensive end-of-day update instead?"', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'A highly talented senior engineer on your team is incredibly toxic and belittles junior developers. Give them feedback.', answer: '"Your technical contributions are invaluable, but your tone during code reviews is alienating the team. We need to maintain a culture of psychological safety, and that means critiquing the code, not the coder."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'A junior developer is on the verge of burnout because they refuse to ask for help. Intervene.', answer: '"I\'ve noticed you\'re working very late hours trying to solve these blockers alone. It\'s a sign of seniority, not weakness, to know when to escalate an issue. Let\'s pair program on this tomorrow."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'You have to deliver a very poor performance review to someone you consider a personal friend.', answer: '"This is a difficult conversation, but as your manager, I have to separate our friendship from the professional metrics. Your output this quarter has fallen significantly below the required baseline."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Convince your executive team that they need to halt all new feature development for a month to pay down technical debt.', answer: '"If we do not dedicate the next sprint entirely to refactoring the core API, the increasing defect rate will inevitably lead to a systemic outage during our peak season. This is a necessary investment in stability."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'A team member takes credit for your architecture design during a presentation to the CEO. Address it in the moment.', answer: '"Just to expand on John\'s point, when I designed that architecture last week, my primary goal was scalability. I\'m glad to see the team is so aligned on the vision I proposed."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'You are promoted to Engineering Manager, now managing your former peers. Set the tone in your first meeting.', answer: '"I know this transition might feel unusual since we were peers last week. My goal isn\'t to change how we code, but to remove the blockers that have been slowing us down. My door is always open for feedback."', difficulty: 'C1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'Cross-Cultural and Client Diplomacy',
            description: 'Navigating external conflicts.',
            concepts: [],
            exercises: [
              { type: 'soft_skills', prompt: 'A major client is furiously threatening to cancel their contract due to a bug you caused. De-escalate.', answer: '"I completely understand your frustration; this level of disruption is unacceptable. I take full responsibility. We have isolated the issue, and my entire team is actively deploying the patch as we speak."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'You realize a client\'s request is fundamentally flawed and will ruin their own product. Tell them politely.', answer: '"I understand the business logic behind this request, but from a technical standpoint, implementing it this way will severely degrade the user experience. May I propose an alternative that achieves the same business goal?"', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'An international stakeholder uses very direct, blunt language that offends your local team. Mediate.', answer: '"I want to assure the team that the blunt tone in the recent emails is simply a difference in cultural communication styles, not a reflection of dissatisfaction with our work. Let\'s focus on the actionable feedback."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Refuse a request from a VIP client to bypass your company\'s strict security protocols for their convenience.', answer: '"I want to accommodate your timeline, but bypassing the security audit is a hard line for us. We cannot compromise the integrity of our platform, even for our most valued partners."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'You must inform a client that you severely underestimated the project timeline and need two extra months.', answer: '"I need to be transparent with you: upon diving into the legacy codebase, we uncovered significant undocumented complexities. To deliver this securely, we must revise the timeline to include two additional months."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'A stakeholder is using technical buzzwords (like "blockchain" or "AI") completely incorrectly. Correct them without embarrassing them.', answer: '"I love the forward-thinking approach. Just to make sure we are perfectly aligned on terminology, when you say \'AI\' in this context, are we referring to a machine learning model, or a robust rules-based algorithm?"', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Your team is based in the US, and the client is in Japan. The client is upset that you didn\'t read between the lines of a very polite email. Apologize and adjust.', answer: '"I apologize for the misunderstanding. Our team is accustomed to very direct communication, and I missed the nuance in your previous email. I will ensure we are more attuned to your feedback moving forward."', difficulty: 'C1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'High-Stakes Negotiation and Boundaries',
        description: '21 exercises to reach 35.',
        lessons: [
          {
            order: 1,
            title: 'Conflict and Boundaries',
            description: '21 exercises.',
            concepts: [],
            exercises: [
              { type: 'soft_skills', prompt: 'Negotiate a later start time for yourself because you have to drop your kids at school, ensuring your manager knows productivity won\'t drop.', answer: '"I would like to shift my working hours to 10 AM to 6 PM to accommodate my family schedule. I assure you I will maintain my current velocity and ensure full overlap with the team\'s core collaborative hours."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'A colleague constantly interrupts you in meetings. Shut it down firmly but professionally.', answer: '"David, I\'m going to stop you there. Please let me finish my thought, and then I would be happy to hear your perspective."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'You strongly disagree with a technical decision made by a group of men, and as the only woman in the room, you feel ignored. Assert yourself.', answer: '"I understand the consensus you\'re building, but my analysis points to a different conclusion. Let\'s look at the data I\'ve compiled regarding the latency risks of this approach."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Decline an invitation to join a "culture committee" because you need to focus on engineering, without sounding like you don\'t care about culture.', answer: '"I am flattered to be asked, and I deeply value our company culture. However, given my current commitments to the backend migration, I cannot give this committee the dedication it deserves right now."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Your company announces a mandatory return to office. You want to remain fully remote. Pitch your case.', answer: '"I understand the desire for in-person collaboration. However, my metrics show a 30% increase in productivity while remote. I would like to propose a trial period where I remain remote, measured strictly against KPIs."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'A vendor is refusing to honor the SLA (Service Level Agreement) after a major outage. Be assertive.', answer: '"We have reviewed the SLA, and this 4-hour outage clearly violates section 3. We expect the corresponding service credits to be applied to our next invoice without delay."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'You made a bad hire. Fire the person during their probationary period with empathy but absolute clarity.', answer: '"We brought you on with high hopes, but unfortunately, the technical alignment isn\'t where it needs to be for this role. We have decided not to proceed past the probationary period. We wish you the best."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Mediate a dispute between Design and Engineering over a feature that is beautiful but impossible to build on time.', answer: '"Let\'s find the middle ground. The design is stunning, but Engineering cannot deliver it by Friday. Can we identify the core user value here and build a simplified version for the MVP?"', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'You are resigning, but your boss offers you a 20% raise to stay. You still want to leave. Decline gracefully.', answer: '"I deeply appreciate the generous counter-offer; it means a lot to me. However, my decision to leave is rooted in a desire to pivot into a different industry, so I must respectfully decline."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'A teammate is clearly struggling with their mental health and their work is slipping. Approach them privately.', answer: '"I wanted to check in. You haven\'t seemed like yourself lately, and I want to make sure you\'re okay. Please know that if you are overwhelmed, I am here to help redistribute the workload."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Ask your manager for a significant budget to send your entire team to a conference.', answer: '"I have drafted a proposal to send the team to AWS re:Invent. The ROI on this is clear: the workshops directly address our Q3 infrastructure goals, which will save us weeks of trial-and-error research."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Push back on a Product Manager who treats estimates as hard deadlines.', answer: '"I need to clarify that the estimate I provided was a rough order of magnitude based on current knowledge, not a contractual deadline. As we uncover more legacy code, that estimate will inevitably shift."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'A colleague sends a highly aggressive, passive-aggressive message in a public Slack channel. Respond.', answer: '"Let\'s take this conversation offline. I\'ll put 15 minutes on our calendars so we can jump on a call and resolve this directly."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'You are assigned a project that you know is doomed to fail due to lack of resources. Document your concern to management.', answer: '"I am committed to executing this project. However, it is my professional obligation to state for the record that attempting this with a team of two poses a severe risk to the delivery timeline."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Apologize for losing your temper in a stressful meeting.', answer: '"I want to apologize for my tone in yesterday\'s meeting. The stress of the outage got the better of me, but that is no excuse for unprofessionalism. It won\'t happen again."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Give feedback to a manager who never gives positive reinforcement, only criticism.', answer: '"I really value your rigorous feedback on my code. However, I sometimes struggle to gauge my overall standing. It would be helpful for my morale to also know when I am meeting or exceeding your expectations."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Address a situation where you suspect a colleague is intoxicated or under the influence during work hours.', answer: '"I need to speak with you privately. I am concerned about your well-being today, as your behavior in the meeting was highly erratic. I think you need to log off for the rest of the day."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Negotiate the scope of your role to avoid doing the job of two people without a pay increase.', answer: '"I am happy to take on the DevOps responsibilities while we hire a replacement. However, if this is going to be a permanent expansion of my role, we need to revisit my title and compensation to reflect the added scope."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'Convince an open-source maintainer to accept a PR that fixes a bug they refuse to acknowledge exists.', answer: '"I understand your hesitance, as this issue only appears in edge cases. I have created a minimal reproducible repository that clearly isolates the bug. I hope this demonstrates the value of the proposed fix."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'You are a contractor. Tell a client you are raising your rates by 30%.', answer: '"As my business has grown and my expertise deepened, I am adjusting my pricing structure. Effective next month, my rate will increase by 30%. I hope to continue delivering high-value work for you under the new terms."', difficulty: 'C1-HARD' },
              { type: 'soft_skills', prompt: 'A peer takes a joke way too far and offends you. Tell them to stop without making a huge scene.', answer: '"I know you are just joking around, but that comment crossed a line for me. Please don\'t make jokes like that again."', difficulty: 'C1-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
