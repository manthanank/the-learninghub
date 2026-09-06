import type { LearningRepo, CategoryId, RepoStatus } from '../types/repo';

const GITHUB_USER = 'manthanank';

interface GitHubRawRepo {
  name: string;
  description: string | null;
  html_url: string;
  topics?: string[];
  language?: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived?: boolean;
}

// Complete Master Catalog of All 62 Repositories
export const MASTER_CATALOG: Record<string, {
  title: string;
  description: string;
  category: CategoryId;
  tags: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: RepoStatus;
  guideLines?: number;
  isFeatured?: boolean;
}> = {
  // 14 Completed Tier 1 Masterclasses
  'learn-html': {
    title: 'HTML5 & Semantic Web Platform',
    description: 'Master modern semantic architecture, critical rendering path, responsive multimedia art direction, constraint validation, and WCAG 2.2 a11y.',
    category: 'frontend',
    tags: ['HTML5', 'Semantics', 'Accessibility', 'WebComponents', 'SEO'],
    level: 'Beginner',
    status: 'Completed',
    guideLines: 1057,
    isFeatured: true
  },
  'learn-css': {
    title: 'Modern CSS, Flexbox & Grid',
    description: 'Master CSS cascade layers, container queries, modern layout engines (Flexbox, Grid, Subgrid), glassmorphism, and hardware-accelerated animations.',
    category: 'frontend',
    tags: ['CSS3', 'Flexbox', 'Grid', 'Subgrid', 'Animations'],
    level: 'Beginner',
    status: 'Completed',
    guideLines: 1474,
    isFeatured: true
  },
  'learn-typescript': {
    title: 'TypeScript Essentials & Type System',
    description: 'Master type inference, generics, mapped types, conditional types, template literal types, and TypeScript compiler AST internals.',
    category: 'languages',
    tags: ['TypeScript', 'Generics', 'TypeSystem', 'Compiler', 'AST'],
    level: 'Intermediate',
    status: 'Completed',
    guideLines: 1316,
    isFeatured: true
  },
  'learn-python': {
    title: 'Python Programming & CPython Internals',
    description: 'Master memory layouts, IEEE 754 precision, OOP descriptors, CPython bytecode compilation, GIL internals, asyncio, and staff-level patterns.',
    category: 'languages',
    tags: ['Python', 'CPython', 'Asyncio', 'GIL', 'OOP'],
    level: 'Beginner',
    status: 'Completed',
    guideLines: 1557,
    isFeatured: true
  },
  'learn-nodejs': {
    title: 'Node.js Core & Async Runtime',
    description: 'Master the V8 pipeline, Libuv 6-phase event loop, microtask execution, streams backpressure, worker threads, and memory profiling.',
    category: 'backend',
    tags: ['Node.js', 'V8', 'Libuv', 'EventLoop', 'Streams'],
    level: 'Intermediate',
    status: 'Completed',
    guideLines: 1434,
    isFeatured: true
  },
  'learn-expressjs': {
    title: 'Express.js 5 & Backend API Architecture',
    description: 'Master Express 5 native async error routing, Russian Doll middleware chains, Controller-Service-Repository patterns, and Redis security.',
    category: 'backend',
    tags: ['Express.js', 'Express5', 'TypeScript', 'REST', 'Middleware'],
    level: 'Intermediate',
    status: 'Completed',
    guideLines: 1489,
    isFeatured: true
  },
  'learn-reactjs': {
    title: 'React 19 & Modern Ecosystem',
    description: 'Master React 19 Fiber reconciler, concurrent transitions, hooks lifecycle, server actions state, context architecture, and performance profiling.',
    category: 'frontend',
    tags: ['React', 'React19', 'Fiber', 'Hooks', 'Actions'],
    level: 'Intermediate',
    status: 'Completed',
    guideLines: 4211,
    isFeatured: true
  },
  'learn-nextjs': {
    title: 'Next.js 15 & Fullstack React',
    description: 'Master App Router, React Server Components (RSC) flight streaming, Server Actions, 4-tier caching architecture, and Partial Prerendering (PPR).',
    category: 'frontend',
    tags: ['Next.js', 'RSC', 'AppRouter', 'ServerActions', 'Caching'],
    level: 'Advanced',
    status: 'Completed',
    guideLines: 2556,
    isFeatured: true
  },
  'learn-angular': {
    title: 'Angular Framework & Signals',
    description: 'Master standalone bootstrapping, Signals reactivity graph, hierarchical dependency injection, functional guards, and @defer incremental hydration.',
    category: 'frontend',
    tags: ['Angular', 'Signals', 'Standalone', 'DI', 'SSR'],
    level: 'Advanced',
    status: 'Completed',
    guideLines: 17925,
    isFeatured: true
  },
  'learn-sql': {
    title: 'SQL Relational Queries & Modeling',
    description: 'Master declarative query execution order, keyset pagination, visual join matrix, WAL transaction logging, and relational algebra.',
    category: 'databases',
    tags: ['SQL', 'Relational', 'Queries', 'Joins', 'Transactions'],
    level: 'Beginner',
    status: 'Completed',
    guideLines: 1406,
    isFeatured: true
  },
  'learn-mysql': {
    title: 'MySQL Relational Database & InnoDB',
    description: 'Master InnoDB B+ Tree clustered indexing, Redo/Undo transaction logs, MVCC, ACID isolation levels, and EXPLAIN query plan tuning.',
    category: 'databases',
    tags: ['MySQL', 'InnoDB', 'BTree', 'Indexing', 'ACID'],
    level: 'Intermediate',
    status: 'Completed',
    guideLines: 1457,
    isFeatured: true
  },
  'learn-mongodb': {
    title: 'MongoDB NoSQL & Aggregations',
    description: 'Master WiredTiger B-Tree storage, BSON binary serialization, atomic update operators, aggregation pipeline masterclass, and ESR indexing.',
    category: 'databases',
    tags: ['MongoDB', 'NoSQL', 'Aggregation', 'BSON', 'WiredTiger'],
    level: 'Intermediate',
    status: 'Completed',
    guideLines: 1350,
    isFeatured: true
  },
  'learn-docker': {
    title: 'Docker & Containerization',
    description: 'Master Linux kernel namespaces/cgroups, overlay2 storage drivers, multi-stage build caching, PID 1 signal forwarding, and networking.',
    category: 'devops',
    tags: ['Docker', 'Containers', 'Linux', 'DevOps', 'CI/CD'],
    level: 'Beginner',
    status: 'Completed',
    guideLines: 1089,
    isFeatured: true
  },
  'learn-git': {
    title: 'Git Version Control & Internals',
    description: 'Master content-addressable object store (blobs, trees, commits, tags), directed acyclic graphs, reflog disaster recovery, and team workflows.',
    category: 'devops',
    tags: ['Git', 'VersionControl', 'DAG', 'Reflog', 'Workflows'],
    level: 'Beginner',
    status: 'Completed',
    guideLines: 1185,
    isFeatured: true
  },

  // AI & Autonomous Agents
  'learn-openai': {
    title: 'OpenAI API & Assistants',
    description: 'Master Chat Completions, JSON mode, tool/function calling, embeddings, and Assistants API with streaming.',
    category: 'ai',
    tags: ['OpenAI', 'GPT', 'ToolCalling', 'Embeddings', 'AI'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-claude': {
    title: 'Anthropic Claude API & Tool Use',
    description: 'Master Messages API, prompt caching, extended thinking/reasoning, tool use, and computer use capabilities.',
    category: 'ai',
    tags: ['Anthropic', 'Claude', 'PromptCaching', 'Reasoning', 'AI'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-gemini': {
    title: 'Google Gemini API & Multimodal AI',
    description: 'Master multimodal tokens (vision, audio, video, PDF), 2M+ context window, and Google Gen AI SDK.',
    category: 'ai',
    tags: ['Gemini', 'GoogleAI', 'Multimodal', 'LongContext', 'AI'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-ollama': {
    title: 'Ollama & Local Model Serving',
    description: 'Master local LLM execution, GGUF quantization, Modelfiles, offline inference, and edge API serving.',
    category: 'ai',
    tags: ['Ollama', 'LocalLLM', 'GGUF', 'Quantization', 'AI'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-deepseek': {
    title: 'DeepSeek Reasoning & Open Models',
    description: 'Master DeepSeek-R1 / V3 reasoning behaviors, chain-of-thought token generation, API integration, and self-hosting.',
    category: 'ai',
    tags: ['DeepSeek', 'Reasoning', 'R1', 'CoT', 'AI'],
    level: 'Advanced',
    status: 'Roadmap'
  },
  'learn-vercel-ai-sdk': {
    title: 'Vercel AI SDK & UI Streaming',
    description: 'Master unified streaming UI, useChat/useCompletion hooks, structured object generation, and tools.',
    category: 'ai',
    tags: ['VercelAI', 'Streaming', 'Hooks', 'GenerativeUI', 'AI'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-prompt-engineering': {
    title: 'Prompt Engineering & In-Context Learning',
    description: 'Master Few-Shot learning, Chain-of-Thought (CoT), ReAct patterns, system prompt architecture, and guardrails.',
    category: 'ai',
    tags: ['PromptEngineering', 'CoT', 'ReAct', 'InContext', 'AI'],
    level: 'Beginner',
    status: 'Roadmap'
  },
  'learn-structured-outputs': {
    title: 'Structured Outputs & JSON Schemas',
    description: 'Master schema-enforced JSON validation using Zod, Pydantic, and native LLM structured output modes.',
    category: 'ai',
    tags: ['StructuredOutputs', 'Zod', 'Pydantic', 'JSONSchema', 'AI'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-rag': {
    title: 'RAG Architecture & Retrieval Systems',
    description: 'Master semantic chunking, dense/sparse retrieval, reciprocal rank fusion, and context injection pipelines.',
    category: 'ai',
    tags: ['RAG', 'Retrieval', 'Chunking', 'VectorSearch', 'AI'],
    level: 'Advanced',
    status: 'Roadmap'
  },
  'learn-vector-databases': {
    title: 'Vector Databases & Similarity Search',
    description: 'Master pgvector, Chroma, Pinecone, Qdrant, HNSW index algorithms, and vector similarity distance metrics.',
    category: 'ai',
    tags: ['VectorDB', 'pgvector', 'Chroma', 'Pinecone', 'HNSW'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-ragas': {
    title: 'Ragas: Automated RAG Evaluation',
    description: 'Master evaluation metrics for RAG retrieval accuracy, faithfulness, answer relevance, and LLM-as-a-judge.',
    category: 'ai',
    tags: ['Ragas', 'Evaluation', 'Metrics', 'LLMJudge', 'AI'],
    level: 'Advanced',
    status: 'Roadmap'
  },
  'learn-langgraph': {
    title: 'LangGraph Cyclic Agent Workflows',
    description: 'Master cyclic state graphs, multi-agent loops, human-in-the-loop approvals, and persistent memory checkpoints.',
    category: 'ai',
    tags: ['LangGraph', 'Agents', 'StateGraph', 'Checkpoints', 'AI'],
    level: 'Advanced',
    status: 'Roadmap'
  },
  'learn-crewai': {
    title: 'CrewAI Multi-Agent Orchestration',
    description: 'Master role-based autonomous agent orchestration, task delegation, tool sharing, and collaborative pipelines.',
    category: 'ai',
    tags: ['CrewAI', 'MultiAgent', 'Orchestration', 'Delegation', 'AI'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-autogen': {
    title: 'AutoGen Conversational Multi-Agents',
    description: 'Master conversational multi-agent problem-solving, code execution sandboxes, and group chat managers.',
    category: 'ai',
    tags: ['AutoGen', 'MultiAgent', 'Conversational', 'CodeExecution', 'AI'],
    level: 'Advanced',
    status: 'Roadmap'
  },
  'learn-langfuse': {
    title: 'Langfuse LLM Observability & Tracing',
    description: 'Master open-source LLM engineering platform, distributed tracing, prompt management, and token cost analytics.',
    category: 'ai',
    tags: ['Langfuse', 'LLMOps', 'Tracing', 'Observability', 'Metrics'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-promptfoo': {
    title: 'Promptfoo Automated Prompt Testing',
    description: 'Master automated prompt assertion suites, red teaming, CI/CD prompt evaluation, and security checks.',
    category: 'ai',
    tags: ['Promptfoo', 'Testing', 'RedTeaming', 'CI/CD', 'Security'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-vllm': {
    title: 'vLLM High-Throughput Model Serving',
    description: 'Master PagedAttention memory management, continuous batching, distributed tensor parallelism, and low-latency serving.',
    category: 'ai',
    tags: ['vLLM', 'PagedAttention', 'Serving', 'Inference', 'GPU'],
    level: 'Advanced',
    status: 'Roadmap'
  },

  // Testing, Protocols & Security
  'learn-playwright': {
    title: 'Playwright End-to-End Testing',
    description: 'Master browser automation, trace viewer, test fixtures, parallel execution, and CI/CD end-to-end integration.',
    category: 'testing-security',
    tags: ['Playwright', 'E2E', 'Testing', 'Automation', 'CI/CD'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-vitest': {
    title: 'Vitest Next-Gen Unit Testing',
    description: 'Master ultra-fast Vite-native testing, mock functions, snapshot assertions, and coverage reporters.',
    category: 'testing-security',
    tags: ['Vitest', 'UnitTesting', 'Vite', 'Mocking', 'Coverage'],
    level: 'Beginner',
    status: 'Roadmap'
  },
  'learn-cypress': {
    title: 'Cypress Component & E2E Testing',
    description: 'Master modern component testing, end-to-end UI automation, network stubbing, and time-travel debugging.',
    category: 'testing-security',
    tags: ['Cypress', 'E2E', 'Testing', 'ComponentTesting', 'Web'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-rest-api': {
    title: 'REST API Design & Standards',
    description: 'Master HTTP/1.1 & HTTP/2 semantics, idempotency, status codes, RESTful RFC standards, security, and versioning.',
    category: 'testing-security',
    tags: ['REST', 'API', 'HTTP', 'Design', 'Architecture'],
    level: 'Beginner',
    status: 'Roadmap'
  },
  'learn-websockets': {
    title: 'WebSockets Real-Time Event Streaming',
    description: 'Master bi-directional RFC 6455 event frames, heartbeat ping/pong, socket state machines, and horizontal scaling.',
    category: 'testing-security',
    tags: ['WebSockets', 'RealTime', 'Sockets', 'Streaming', 'Protocols'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-grpc': {
    title: 'gRPC & Protocol Buffers',
    description: 'Master Protocol Buffers binary serialization, unary and streaming RPCs, HTTP/2 multiplexing, and microservices.',
    category: 'testing-security',
    tags: ['gRPC', 'Protobuf', 'RPC', 'HTTP2', 'Microservices'],
    level: 'Advanced',
    status: 'Roadmap'
  },
  'learn-web-security': {
    title: 'Web Security & OWASP Top 10',
    description: 'Master OWASP Top 10 vulnerabilities, CORS, CSP headers, CSRF tokens, XSS defense, and cryptographic hardening.',
    category: 'testing-security',
    tags: ['Security', 'OWASP', 'XSS', 'CSRF', 'CSP'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-oauth': {
    title: 'OAuth 2.1 & OpenID Connect',
    description: 'Master OAuth 2.1 authorization code flow with PKCE, JWT cryptographic signing, token refresh, and OpenID Connect.',
    category: 'testing-security',
    tags: ['OAuth', 'OIDC', 'JWT', 'PKCE', 'Auth'],
    level: 'Advanced',
    status: 'Roadmap'
  },

  // Core Backend, Infra & Data Systems
  'learn-linux': {
    title: 'Linux Systems & Command Line',
    description: 'Master POSIX permissions, systemd service units, bash scripting, kernel signals, networking CLI, and sysadmin.',
    category: 'devops',
    tags: ['Linux', 'Bash', 'Systemd', 'SysAdmin', 'CLI'],
    level: 'Beginner',
    status: 'In Progress'
  },
  'learn-postgresql': {
    title: 'PostgreSQL & Advanced Relational Modeling',
    description: 'Master MVCC, advanced indexing (GiST/GIN/BRIN), Common Table Expressions, JSONB querying, and logical replication.',
    category: 'databases',
    tags: ['PostgreSQL', 'Postgres', 'MVCC', 'Indexing', 'JSONB'],
    level: 'Intermediate',
    status: 'In Progress',
    isFeatured: true
  },
  'learn-redis': {
    title: 'Redis In-Memory Caching & Data Structures',
    description: 'Master in-memory data structures, cache-aside, pub/sub messaging, Lua scripts, and Redlock distributed locks.',
    category: 'databases',
    tags: ['Redis', 'Caching', 'PubSub', 'Memory', 'Distributed'],
    level: 'Intermediate',
    status: 'In Progress'
  },
  'learn-prisma': {
    title: 'Prisma ORM & Type-Safe Queries',
    description: 'Master declarative schema modeling, migrations, relation engines, and type-safe relational database queries.',
    category: 'databases',
    tags: ['Prisma', 'ORM', 'Database', 'TypeScript', 'Migrations'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-drizzle': {
    title: 'Drizzle ORM & Edge SQL Queries',
    description: 'Master lightweight SQL dialect mapping, zero-overhead edge performance, and Drizzle Kit migrations.',
    category: 'databases',
    tags: ['Drizzle', 'ORM', 'SQL', 'Edge', 'TypeScript'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-kubernetes': {
    title: 'Kubernetes & Cluster Orchestration',
    description: 'Master Pods, Deployments, Services, Ingress controllers, ConfigMaps, Secrets, Helm charts, and cluster scaling.',
    category: 'devops',
    tags: ['Kubernetes', 'K8s', 'DevOps', 'Containers', 'Cloud'],
    level: 'Advanced',
    status: 'In Progress',
    isFeatured: true
  },
  'learn-aws': {
    title: 'AWS Cloud Architecture',
    description: 'Master IAM security, S3 storage, EC2 computing, Lambda serverless, ECS/EKS containers, RDS, and CloudFront.',
    category: 'devops',
    tags: ['AWS', 'Cloud', 'Serverless', 'S3', 'EC2'],
    level: 'Intermediate',
    status: 'In Progress'
  },
  'learn-terraform': {
    title: 'Terraform Infrastructure as Code',
    description: 'Master declarative HCL, state management, modules, providers, and multi-cloud infrastructure provisioning.',
    category: 'devops',
    tags: ['Terraform', 'IaC', 'DevOps', 'HCL', 'Cloud'],
    level: 'Intermediate',
    status: 'In Progress'
  },
  'learn-github-actions': {
    title: 'GitHub Actions & CI/CD Pipelines',
    description: 'Master continuous integration, automated test runners, matrix builds, secret management, and artifact publishing.',
    category: 'devops',
    tags: ['GitHubActions', 'CICD', 'DevOps', 'Automation', 'Workflows'],
    level: 'Beginner',
    status: 'In Progress'
  },
  'learn-kafka': {
    title: 'Apache Kafka Event Streaming',
    description: 'Master topic partitions, consumer group rebalancing, offset commits, log compaction, and event broker scaling.',
    category: 'backend',
    tags: ['Kafka', 'Streaming', 'EventDriven', 'PubSub', 'Distributed'],
    level: 'Advanced',
    status: 'Roadmap'
  },
  'learn-system-design': {
    title: 'System Design & Distributed Architectures',
    description: 'Master horizontal scaling, load balancing, caching hierarchies, CAP theorem, database sharding, and fault tolerance.',
    category: 'system-design',
    tags: ['SystemDesign', 'Distributed', 'Architecture', 'Scalability', 'Microservices'],
    level: 'Advanced',
    status: 'In Progress',
    isFeatured: true
  },
  'learn-data-structures-algorithms': {
    title: 'Data Structures & Algorithms',
    description: 'Master Big-O asymptotic analysis, arrays, linked lists, trees, graphs, dynamic programming, and interview patterns.',
    category: 'system-design',
    tags: ['DSA', 'Algorithms', 'DataStructures', 'BigO', 'Interviews'],
    level: 'Intermediate',
    status: 'In Progress'
  },
  'learn-design-patterns': {
    title: 'Software Design Patterns & Clean Code',
    description: 'Master Gang of Four (GoF) creational, structural, and behavioral patterns in modern TypeScript and Python.',
    category: 'system-design',
    tags: ['DesignPatterns', 'CleanCode', 'SOLID', 'Architecture', 'OOP'],
    level: 'Intermediate',
    status: 'In Progress'
  },
  'learn-rust': {
    title: 'Rust Systems Programming',
    description: 'Master memory safety without GC, ownership & borrowing, lifetimes, zero-cost abstractions, and concurrency.',
    category: 'languages',
    tags: ['Rust', 'Systems', 'MemorySafety', 'Concurrency', 'Wasm'],
    level: 'Advanced',
    status: 'Roadmap'
  },
  'learn-vue': {
    title: 'Vue.js 3 & Composition API',
    description: 'Master Vue 3 Composition API, reactivity proxies, Pinia state management, and Nuxt full-stack SSR.',
    category: 'frontend',
    tags: ['Vue', 'Vue3', 'CompositionAPI', 'Pinia', 'Nuxt'],
    level: 'Intermediate',
    status: 'Roadmap'
  },
  'learn-astro': {
    title: 'Astro Islands Architecture',
    description: 'Master Islands architecture, content collections, fast SSG/SSR, and zero-JS frontend performance.',
    category: 'frontend',
    tags: ['Astro', 'Islands', 'SSG', 'Performance', 'Web'],
    level: 'Beginner',
    status: 'In Progress'
  },
  'learn-tailwindcss': {
    title: 'Tailwind CSS Utility Architecture',
    description: 'Master utility-first styling, design tokens, JIT compiler engine, responsive breakpoints, and dark mode.',
    category: 'frontend',
    tags: ['Tailwind', 'CSS', 'DesignTokens', 'Responsive', 'UI'],
    level: 'Beginner',
    status: 'In Progress'
  },
  'learn-bootstrap': {
    title: 'Bootstrap 5 Responsive Layouts',
    description: 'Master responsive 12-column grid, utility classes, accessible UI components, and theme customization.',
    category: 'frontend',
    tags: ['Bootstrap', 'CSS', 'Grid', 'UI', 'Components'],
    level: 'Beginner',
    status: 'In Progress'
  },
  'learn-deno': {
    title: 'Deno Secure Server Runtime',
    description: 'Master secure sandboxing, native TypeScript support, Web Standards APIs, and Deno KV storage.',
    category: 'backend',
    tags: ['Deno', 'TypeScript', 'Runtime', 'Security', 'WebStandards'],
    level: 'Intermediate',
    status: 'In Progress'
  },
  'learn-bun': {
    title: 'Bun Ultra-Fast Runtime & Tooling',
    description: 'Master Zig-powered JS runtime, native package manager, ultra-fast test runner, and native bundler.',
    category: 'backend',
    tags: ['Bun', 'Runtime', 'Fast', 'Tooling', 'JavaScript'],
    level: 'Intermediate',
    status: 'In Progress'
  },
  'learn-graphql': {
    title: 'GraphQL APIs & Schemas',
    description: 'Master SDL schemas, queries, mutations, subscriptions, N+1 DataLoader batching, and Apollo federation.',
    category: 'backend',
    tags: ['GraphQL', 'API', 'Schemas', 'Apollo', 'DataFetch'],
    level: 'Intermediate',
    status: 'In Progress'
  },
  'learn-firebase': {
    title: 'Firebase Suite & Serverless BaaS',
    description: 'Master Firestore document modeling, Firebase Authentication, Cloud Functions, and real-time listeners.',
    category: 'databases',
    tags: ['Firebase', 'Firestore', 'BaaS', 'Serverless', 'Auth'],
    level: 'Beginner',
    status: 'In Progress'
  },
  'learn-supabase': {
    title: 'Supabase BaaS & Postgres Platform',
    description: 'Master Postgres Row-Level Security (RLS), auto-generated REST/GraphQL APIs, Supabase Auth, and real-time CDC.',
    category: 'databases',
    tags: ['Supabase', 'Postgres', 'RLS', 'BaaS', 'Realtime'],
    level: 'Intermediate',
    status: 'In Progress'
  }
};

/**
 * Classifies any repository into one of the 8 core domains.
 */
function classifyCategory(name: string): CategoryId {
  if (MASTER_CATALOG[name]) {
    return MASTER_CATALOG[name].category;
  }

  const text = name.toLowerCase();

  // AI & ML
  if (
    text.includes('openai') || text.includes('claude') || text.includes('gemini') ||
    text.includes('ollama') || text.includes('deepseek') || text.includes('ai') ||
    text.includes('prompt') || text.includes('rag') || text.includes('vector') ||
    text.includes('langgraph') || text.includes('crewai') || text.includes('autogen') ||
    text.includes('langfuse') || text.includes('vllm')
  ) {
    return 'ai';
  }

  // Testing & Security
  if (
    text.includes('test') || text.includes('playwright') || text.includes('cypress') ||
    text.includes('vitest') || text.includes('security') || text.includes('oauth') ||
    text.includes('websocket') || text.includes('grpc') || text.includes('rest-api')
  ) {
    return 'testing-security';
  }

  // DevOps & Cloud
  if (
    text.includes('docker') || text.includes('kubernetes') || text.includes('git') ||
    text.includes('actions') || text.includes('terraform') || text.includes('aws') ||
    text.includes('linux')
  ) {
    return 'devops';
  }

  // Databases & Storage
  if (
    text.includes('postgres') || text.includes('mongo') || text.includes('mysql') ||
    text.includes('redis') || text.includes('supabase') || text.includes('firebase') ||
    text.includes('sql') || text.includes('prisma') || text.includes('drizzle')
  ) {
    return 'databases';
  }

  // System Design & CS
  if (
    text.includes('system-design') || text.includes('design-patterns') ||
    text.includes('data-structures') || text.includes('algorithm')
  ) {
    return 'system-design';
  }

  // Languages
  if (
    text.includes('python') || text.includes('rust') || text.includes('golang') ||
    text.includes('learn-go') || text.includes('cpp') || text.includes('csharp')
  ) {
    return 'languages';
  }

  // Frontend
  if (
    text.includes('react') || text.includes('angular') || text.includes('next') ||
    text.includes('vue') || text.includes('astro') || text.includes('html') ||
    text.includes('css') || text.includes('tailwind') || text.includes('bootstrap')
  ) {
    return 'frontend';
  }

  return 'backend';
}

/**
 * Fetches all learning repositories directly from GitHub API,
 * merging live stars and updates with our rich 62-repository catalog.
 */
export async function fetchRepos(): Promise<LearningRepo[]> {
  const liveStatsMap = new Map<string, { stars: number; forks: number; language: string | null; updatedAt: string }>();

  try {
    let page = 1;
    while (page <= 3) {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&page=${page}`, {
        headers: {
          'User-Agent': 'the-learninghub-fetcher',
          Accept: 'application/vnd.github.v3+json'
        }
      });

      if (!res.ok) break;

      const data: GitHubRawRepo[] = await res.json();
      if (!Array.isArray(data) || data.length === 0) break;
      for (const r of data) {
        if (!r.fork && !r.archived && r.name.startsWith('learn-')) {
          liveStatsMap.set(r.name, {
            stars: r.stargazers_count,
            forks: r.forks_count,
            language: r.language || null,
            updatedAt: r.updated_at
          });
        }
      }
      page++;
    }
  } catch (error) {
    console.warn('GitHub API fetch returned error; falling back to offline master catalog.', error);
  }

  // Transform all repos from MASTER_CATALOG
  const allRepos: LearningRepo[] = Object.entries(MASTER_CATALOG).map(([name, meta]) => {
    const live = liveStatsMap.get(name);
    return {
      name: name,
      title: meta.title,
      description: meta.description,
      category: meta.category,
      tags: meta.tags,
      githubUrl: `https://github.com/${GITHUB_USER}/${name}`,
      level: meta.level,
      status: meta.status,
      guideLines: meta.guideLines,
      stars: live ? live.stars : 0,
      forks: live ? live.forks : 0,
      language: live ? live.language : null,
      updatedAt: live ? live.updatedAt : new Date().toISOString(),
      isFeatured: meta.isFeatured || false
    };
  });

  // Sort: completed first, then featured, then alphabetical by title
  allRepos.sort((a, b) => {
    if (a.status === 'Completed' && b.status !== 'Completed') return -1;
    if (a.status !== 'Completed' && b.status === 'Completed') return 1;
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return a.title.localeCompare(b.title);
  });

  return allRepos;
}

export function getStats(repos: LearningRepo[]) {
  const totalGuides = repos.length;
  const completedCount = repos.filter(r => r.status === 'Completed').length;
  const inProgressCount = repos.filter(r => r.status === 'In Progress').length;
  const roadmapCount = repos.filter(r => r.status === 'Roadmap').length;
  const totalStars = repos.reduce((acc, r) => acc + (r.stars || 0), 0);
  const categoriesCount = new Set(repos.map(r => r.category)).size;
  const allTags = new Set<string>();
  repos.forEach(r => r.tags.forEach(t => allTags.add(t)));

  return {
    totalGuides,
    completedCount,
    inProgressCount,
    roadmapCount,
    totalStars,
    categoriesCount,
    technologiesCount: allTags.size
  };
}
