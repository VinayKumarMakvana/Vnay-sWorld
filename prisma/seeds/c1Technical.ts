export const c1TechnicalModules = [
  {
    order: 13,
    title: 'C1 Advanced Technical Communication',
    description: '30 advanced exercises for architects and senior engineers.',
    units: [
      {
        order: 1,
        title: 'System Design and Trade-offs',
        description: 'Explaining complex architecture.',
        lessons: [
          {
            order: 1,
            title: 'Scalability and Data Integrity',
            description: 'Handling millions of users.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain the concept of "Sharding" a database to a non-technical stakeholder, focusing on the business benefits and the operational risks.', answer: 'Sharding is like splitting a massive dictionary into 26 smaller books, one for each letter. It makes finding things much faster (performance), but if you need to search across multiple books, it becomes highly complex (operational risk).', difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Argue the case for using an Event-Driven Architecture (like Kafka) over synchronous REST APIs for a high-volume financial transaction system.', answer: 'Synchronous REST fails catastrophically under sudden load spikes. Event-driven architecture uses queues to decouple services, ensuring that even if a downstream service crashes, the transactions are safely stored and processed later, guaranteeing no data loss.', difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Explain the difference between Optimistic and Pessimistic concurrency control in database transactions.', answer: 'Pessimistic locks the data immediately, assuming conflicts will happen, which hurts performance. Optimistic allows everyone to read/write, but checks for conflicts right before saving, which is much faster but requires retry logic if a conflict occurs.', difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Defend the decision to use a Graph Database (like Neo4j) instead of a Relational Database (SQL) for a social networking feature.', answer: 'In SQL, finding "friends of friends of friends" requires complex, deeply nested JOINs that scale terribly. Graph databases treat the relationships themselves as first-class citizens, making highly interconnected data traversal practically instantaneous.', difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Explain the concept of "Chaos Engineering" (e.g., Chaos Monkey) and why a company would intentionally break their own production servers.', answer: 'Chaos engineering is intentionally injecting failures into production (like killing a server) to verify that the automated fallback systems actually work. You break it on purpose during business hours so it doesn\'t break accidentally at 3 AM.', difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Describe the security concept of "Defense in Depth" as applied to cloud infrastructure.', answer: 'Defense in depth means not relying on a single firewall. It involves layered security: network firewalls, strict IAM roles, database encryption at rest, TLS in transit, and continuous vulnerability scanning, so if one layer fails, others still protect the data.', difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Explain what a "Memory Leak" is, how it happens in garbage-collected languages (like JS/Java), and how to diagnose it.', answer: 'A memory leak occurs when the program holds onto references of objects it no longer needs, preventing the Garbage Collector from freeing the memory. Eventually, the server runs out of RAM and crashes. It is diagnosed by taking heap snapshots and analyzing the allocation timelines.', difficulty: 'C1-HARD' }
            ]
          },
          {
            order: 2,
            title: 'DevOps, CI/CD, and Observability',
            description: 'Explaining deployment and monitoring.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain the concept of "Infrastructure as Code" (IaC) using Terraform or CloudFormation.', answer: 'IaC means writing code to define your servers, networks, and databases, rather than clicking buttons in a UI. This allows you to version control your entire data center, ensuring deployments are repeatable, auditable, and easily rolled back.', difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'What is the difference between "Monitoring" and "Observability" in modern software systems?', answer: 'Monitoring tells you THAT a system is broken (e.g., CPU is at 100%). Observability tells you WHY it is broken, by aggregating logs, metrics, and distributed traces to let you interrogate the system\'s internal state dynamically.', difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Defend the use of a "Canary Release" deployment strategy over a standard "Rolling Update".', answer: 'A rolling update replaces all servers gradually, but if the code is bad, everyone eventually gets the bad code. A canary release routes only 1% of live traffic to the new code. If error rates spike, you automatically abort, protecting 99% of your users from the bug.', difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Explain how "Service Mesh" (like Istio) solves the complexities of microservice communication.', answer: 'A service mesh extracts the logic for retries, timeouts, mutual TLS, and routing out of the application code and puts it into a dedicated infrastructure layer (sidecar proxies), allowing developers to focus purely on business logic rather than network reliability.', difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Describe the process and benefits of "Trunk-Based Development" compared to long-lived feature branches (GitFlow).', answer: 'Trunk-based development forces developers to merge small, frequent updates directly to the main branch daily, often hidden behind feature flags. This drastically reduces merge conflicts and enables true Continuous Integration, whereas GitFlow causes massive, painful integrations at the end of a sprint.', difficulty: 'C1-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Extended Technical Explanations',
        description: '18 exercises to reach 30.',
        lessons: [
          {
            order: 1,
            title: 'Architecture and Protocols',
            description: '18 exercises.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain the difference between symmetric and asymmetric encryption.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Describe how a JWT (JSON Web Token) works and its vulnerabilities.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Explain the CAP theorem and how it applies to Cassandra versus PostgreSQL.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Defend the use of Server-Side Rendering (SSR) over Single Page Applications (SPA) for an e-commerce site.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Explain how Docker containers differ from Virtual Machines (VMs).', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Describe the mechanism and purpose of a Bloom Filter.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Explain the concept of "Idempotency" and why it is critical for payment APIs.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Describe how WebRTC facilitates peer-to-peer video communication.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Explain the concept of "Event Sourcing" and CQRS.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Describe the vulnerabilities associated with Cross-Site Scripting (XSS) and how Content Security Policy (CSP) mitigates them.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Explain how a B-Tree index works in a relational database.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Describe the differences between long-polling, Server-Sent Events (SSE), and WebSockets.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Explain the principles of a 12-Factor App.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Describe the role of a Reverse Proxy like Nginx in a web architecture.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Explain the concept of "Consistent Hashing" in distributed caching systems.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Describe how OAuth 2.0 and OpenID Connect (OIDC) differ.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Explain the trade-offs of using GraphQL versus a traditional REST API.', answer: null, difficulty: 'C1-HARD' },
              { type: 'tech', prompt: 'Describe the architecture of a typical MapReduce job.', answer: null, difficulty: 'C1-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
