export const b2TechnicalModules = [
  {
    order: 13, // To keep consistent in seed
    title: 'B2 Technical English',
    description: '25 advanced exercises for system design and architecture.',
    units: [
      {
        order: 1,
        title: 'Architecture and System Design',
        description: 'Explaining how things scale.',
        lessons: [
          {
            order: 1,
            title: 'Scalability and Data',
            description: 'Handling heavy loads.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain the difference between horizontal and vertical scaling.', answer: 'Vertical scaling means adding more power (CPU, RAM) to an existing server. Horizontal scaling means adding more servers to distribute the load across a network.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'Why might you choose a NoSQL database over a relational database (SQL)?', answer: 'NoSQL is better for unstructured data, rapid iteration where the schema changes frequently, and massive horizontal scalability for read-heavy applications.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'Explain the concept of a Content Delivery Network (CDN).', answer: 'A CDN is a distributed network of servers that caches static assets (images, CSS) close to the user\'s geographical location, significantly reducing latency and load times.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'What is a load balancer and why is it necessary?', answer: 'A load balancer sits in front of your servers and distributes incoming network traffic across multiple backend servers to ensure no single server becomes overwhelmed.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'Explain the CAP theorem.', answer: 'The CAP theorem states that a distributed data store can only simultaneously provide two out of three guarantees: Consistency, Availability, and Partition tolerance.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'What are the trade-offs of using Serverless architecture (e.g., AWS Lambda)?', answer: 'Pros: infinite scalability and no infrastructure management. Cons: cold start latency, vendor lock-in, and difficult local debugging.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'Explain how indexing improves database performance.', answer: 'An index acts like a table of contents for a database. Instead of scanning every row in a table to find a value, the database can use the index to find the location instantly.', difficulty: 'B2-MEDIUM' }
            ]
          },
          {
            order: 2,
            title: 'Security and DevOps',
            description: 'Pipelines and protection.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain what OAuth2 is used for.', answer: 'OAuth2 is an authorization framework that allows third-party applications to obtain limited access to an HTTP service on behalf of a user, without exposing their password.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'What is a Man-in-the-Middle (MitM) attack?', answer: 'A MitM attack is when an attacker secretly intercepts and relays communication between two parties who believe they are communicating directly with each other.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'Explain the purpose of a CI/CD pipeline.', answer: 'CI/CD stands for Continuous Integration and Continuous Deployment. It automates the testing, building, and deployment of code to ensure fast, reliable, and consistent releases.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'Why is Cross-Site Request Forgery (CSRF) dangerous and how do you prevent it?', answer: 'CSRF forces a logged-in user to execute unwanted actions. It is prevented by using anti-CSRF tokens that are validated on the server for every state-changing request.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'What is container orchestration, and why use Kubernetes?', answer: 'Container orchestration automates the deployment, scaling, and management of containers. Kubernetes ensures high availability, auto-scaling, and self-healing for microservices.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'Explain Blue/Green deployment.', answer: 'Blue/Green deployment reduces downtime and risk by running two identical production environments. Traffic is routed to Blue while Green is updated. If Green passes tests, traffic is switched over.', difficulty: 'B2-HARD' }
            ]
          }
        ]
      },
      {
        order: 2,
        title: 'Code Reviews and Best Practices',
        description: 'Writing maintainable code (12 exercises).',
        lessons: [
          {
            order: 1,
            title: 'Design Patterns and Quality',
            description: '12 exercises to reach 25.',
            concepts: [],
            exercises: [
              { type: 'tech', prompt: 'Explain the Singleton design pattern and its drawbacks.', answer: 'A Singleton ensures a class has only one instance and provides a global point of access to it. Drawbacks include making unit testing difficult and introducing global state.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'What is dependency injection?', answer: 'Dependency injection is a technique where an object receives its dependencies from outside rather than creating them itself, making the code more modular and testable.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'Explain the concept of "Idempotency" in APIs.', answer: 'An API endpoint is idempotent if making multiple identical requests has the same effect as making a single request, which is crucial for handling network retries safely.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'What are the SOLID principles?', answer: 'SOLID is an acronym for five design principles intended to make object-oriented designs more understandable, flexible, and maintainable (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion).', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'How do you prevent a memory leak in a frontend application?', answer: 'Ensure you clean up event listeners, clear intervals/timers when a component unmounts, and avoid maintaining unnecessary references to large DOM objects.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'Explain the difference between Unit Testing and Integration Testing.', answer: 'Unit testing verifies that individual components work in isolation. Integration testing verifies that multiple components work correctly when combined together.', difficulty: 'B2-MEDIUM' },
              { type: 'tech', prompt: 'What is a race condition?', answer: 'A race condition occurs when the behavior of a system depends on the sequence or timing of uncontrollable events, like two threads modifying the same variable simultaneously.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'Explain what a Webhook is.', answer: 'A webhook is a way for an app to provide other applications with real-time information. It delivers data immediately as an event happens, rather than forcing the client to poll for updates.', difficulty: 'B2-MEDIUM' },
              { type: 'tech', prompt: 'What is the purpose of rate limiting on an API?', answer: 'Rate limiting restricts the number of requests a user can make in a given timeframe to prevent abuse, protect server resources, and mitigate Denial of Service (DoS) attacks.', difficulty: 'B2-MEDIUM' },
              { type: 'tech', prompt: 'Explain the concept of WebSockets.', answer: 'WebSockets provide a persistent, bi-directional, full-duplex communication channel over a single TCP connection, ideal for real-time applications like chat or live notifications.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'What does "Eventual Consistency" mean in distributed databases?', answer: 'It means that if no new updates are made to a given piece of data, eventually all accesses to that item will return the last updated value, though it may take time to propagate.', difficulty: 'B2-HARD' },
              { type: 'tech', prompt: 'Describe the purpose of a Reverse Proxy.', answer: 'A reverse proxy sits in front of web servers and forwards client requests to those servers. It is used for load balancing, caching, security, and SSL termination.', difficulty: 'B2-HARD' }
            ]
          }
        ]
      }
    ]
  }
];
