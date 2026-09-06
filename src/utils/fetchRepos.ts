import fs from 'node:fs';
import path from 'node:path';
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
  size: number;
  fork: boolean;
  archived?: boolean;
}

/**
 * Dynamically classifies any repository into one of the 8 core engineering domains.
 */
export function classifyCategory(
  name: string,
  topics: string[] = [],
  lang: string = '',
  desc: string = ''
): CategoryId {
  const text = `${name} ${topics.join(' ')} ${lang} ${desc}`.toLowerCase();

  // 1. AI, LLMs & Autonomous Agents
  if (
    text.includes('openai') ||
    text.includes('claude') ||
    text.includes('gemini') ||
    text.includes('ollama') ||
    text.includes('deepseek') ||
    text.includes('llm') ||
    text.includes('ai') ||
    text.includes('prompt') ||
    text.includes('rag') ||
    text.includes('vector') ||
    text.includes('langgraph') ||
    text.includes('crewai') ||
    text.includes('autogen') ||
    text.includes('langfuse') ||
    text.includes('promptfoo') ||
    text.includes('vllm')
  ) {
    return 'ai';
  }

  // 2. Testing, Protocols & Web Security
  if (
    text.includes('playwright') ||
    text.includes('cypress') ||
    text.includes('vitest') ||
    text.includes('test') ||
    text.includes('security') ||
    text.includes('oauth') ||
    text.includes('websocket') ||
    text.includes('grpc') ||
    text.includes('rest-api')
  ) {
    return 'testing-security';
  }

  // 3. DevOps, Cloud & Infrastructure
  if (
    text.includes('docker') ||
    text.includes('kubernetes') ||
    text.includes('k8s') ||
    (text.includes('git') && !text.includes('digital')) ||
    text.includes('actions') ||
    text.includes('terraform') ||
    text.includes('aws') ||
    text.includes('linux') ||
    text.includes('container') ||
    text.includes('ci/cd')
  ) {
    return 'devops';
  }

  // 4. Databases, Caching & BaaS
  if (
    text.includes('postgres') ||
    text.includes('mongo') ||
    text.includes('mysql') ||
    text.includes('redis') ||
    text.includes('supabase') ||
    text.includes('firebase') ||
    text.includes('sql') ||
    text.includes('prisma') ||
    text.includes('drizzle') ||
    text.includes('database')
  ) {
    return 'databases';
  }

  // 5. System Design & Computer Science
  if (
    text.includes('system-design') ||
    text.includes('design-patterns') ||
    text.includes('data-structures') ||
    text.includes('algorithm') ||
    text.includes('distributed')
  ) {
    return 'system-design';
  }

  // 6. Programming Languages
  if (
    text.includes('python') ||
    text.includes('rust') ||
    text.includes('golang') ||
    text.includes('learn-go') ||
    text.includes('cpp') ||
    text.includes('c-plus-plus') ||
    text.includes('csharp') ||
    text.includes('c-sharp') ||
    text.includes('typescript') ||
    name === 'learn-c'
  ) {
    return 'languages';
  }

  // 7. Frontend & UI Frameworks
  if (
    text.includes('react') ||
    text.includes('angular') ||
    text.includes('next') ||
    text.includes('vue') ||
    text.includes('astro') ||
    text.includes('html') ||
    text.includes('css') ||
    text.includes('scss') ||
    text.includes('sass') ||
    text.includes('tailwind') ||
    text.includes('bootstrap') ||
    text.includes('rxjs') ||
    text.includes('ngrx') ||
    text.includes('frontend')
  ) {
    return 'frontend';
  }

  // 8. Backend, APIs & Runtimes (Default)
  return 'backend';
}

/**
 * Dynamically formats clean titles from repository names with proper acronym capitalization.
 */
export function formatTitle(name: string): string {
  const clean = name.replace(/^learn-/, '');

  const acronymMap: Record<string, string> = {
    'html': 'HTML5 & Semantic Web Platform',
    'css': 'Modern CSS, Flexbox & Grid',
    'sql': 'SQL Relational Modeling',
    'mysql': 'MySQL & InnoDB Engine',
    'mongodb': 'MongoDB NoSQL & Aggregations',
    'docker': 'Docker & Containerization',
    'git': 'Git Version Control & Internals',
    'typescript': 'TypeScript Essentials & Type System',
    'javascript': 'JavaScript & Modern ES6+',
    'python': 'Python & CPython Internals',
    'nodejs': 'Node.js Core & Async Runtime',
    'expressjs': 'Express.js 5 & Backend Architecture',
    'reactjs': 'React 19 & Modern Ecosystem',
    'nextjs': 'Next.js 15 & Fullstack React',
    'angular': 'Angular Framework & Signals',
    'c-plus-plus': 'C++ Modern OOP & Memory',
    'c-sharp': 'C# & .NET Modern Features',
    'dot-net': '.NET Core Web APIs',
    'c': 'C Systems & Pointers',
    'go': 'Go Concurrency & Systems',
    'rust': 'Rust Systems Programming',
    'vue': 'Vue.js 3 & Composition API',
    'astro': 'Astro Islands Architecture',
    'bun': 'Bun Ultra-Fast Runtime',
    'deno': 'Deno Secure Server Runtime',
    'graphql': 'GraphQL APIs & Schemas',
    'kafka': 'Apache Kafka Event Streaming',
    'kubernetes': 'Kubernetes & Cluster Orchestration',
    'linux': 'Linux Systems & CLI',
    'aws': 'AWS Cloud Architecture',
    'terraform': 'Terraform Infrastructure as Code',
    'github-actions': 'GitHub Actions & CI/CD',
    'postgresql': 'PostgreSQL Relational Engine',
    'redis': 'Redis In-Memory Caching & Pub/Sub',
    'prisma': 'Prisma ORM & Type-Safe Queries',
    'drizzle': 'Drizzle ORM & Edge SQL',
    'supabase': 'Supabase BaaS & Postgres',
    'firebase': 'Firebase Serverless Suite',
    'system-design': 'System Design & Distributed Systems',
    'data-structures-algorithms': 'Data Structures & Algorithms',
    'design-patterns': 'Software Design Patterns & Clean Code',
    'openai': 'OpenAI API & Assistants',
    'claude': 'Anthropic Claude API & Tool Use',
    'gemini': 'Google Gemini Multimodal AI',
    'ollama': 'Ollama & Local Model Serving',
    'deepseek': 'DeepSeek Reasoning Models',
    'vercel-ai-sdk': 'Vercel AI SDK & UI Streaming',
    'prompt-engineering': 'Prompt Engineering & CoT',
    'structured-outputs': 'Structured Outputs & JSON Schemas',
    'rag': 'RAG & Retrieval Architectures',
    'vector-databases': 'Vector Databases & Similarity Search',
    'ragas': 'Ragas: Automated RAG Evaluation',
    'langgraph': 'LangGraph Cyclic State Workflows',
    'crewai': 'CrewAI Multi-Agent Orchestration',
    'autogen': 'AutoGen Conversational Multi-Agents',
    'langfuse': 'Langfuse LLM Observability',
    'promptfoo': 'Promptfoo Automated Prompt Testing',
    'vllm': 'vLLM High-Throughput Serving',
    'playwright': 'Playwright End-to-End Testing',
    'vitest': 'Vitest Next-Gen Unit Testing',
    'cypress': 'Cypress Component & E2E Testing',
    'rest-api': 'REST API Design & Standards',
    'websockets': 'WebSockets Real-Time Streaming',
    'grpc': 'gRPC & Protocol Buffers',
    'web-security': 'Web Security & OWASP Top 10',
    'oauth': 'OAuth 2.1 & OpenID Connect',
    'rxjs': 'RxJS Reactive Streams',
    'ngrx': 'NgRx State Management',
    'tailwindcss': 'Tailwind CSS Utility Architecture',
    'bootstrap': 'Bootstrap 5 Responsive Layouts'
  };

  if (acronymMap[clean]) {
    return acronymMap[clean];
  }

  // Dynamic title generation for any newly added repositories
  return clean
    .split('-')
    .map(word => {
      const upper = word.toUpperCase();
      if (['API', 'CLI', 'CSS', 'HTML', 'SQL', 'SDK', 'AI', 'LLM', 'RAG', 'JWT', 'ORM', 'UI', 'DB'].includes(upper)) {
        return upper;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

/**
 * Dynamically determines difficulty level based on domain complexity.
 */
export function determineLevel(name: string, topics: string[] = []): 'Beginner' | 'Intermediate' | 'Advanced' {
  const text = `${name} ${topics.join(' ')}`.toLowerCase();

  if (
    text.includes('system-design') ||
    text.includes('kubernetes') ||
    text.includes('deepseek') ||
    text.includes('langgraph') ||
    text.includes('autogen') ||
    text.includes('vllm') ||
    text.includes('ragas') ||
    text.includes('grpc') ||
    text.includes('oauth') ||
    text.includes('rust') ||
    text.includes('kafka') ||
    text.includes('nextjs') ||
    text.includes('angular') ||
    text.includes('c-plus-plus') ||
    text.includes('advanced')
  ) {
    return 'Advanced';
  }

  if (
    text.includes('html') ||
    text.includes('css') ||
    text.includes('git') ||
    text.includes('bootstrap') ||
    text.includes('vitest') ||
    text.includes('rest-api') ||
    text.includes('prompt-engineering') ||
    text.includes('linux') ||
    text.includes('sql') ||
    text.includes('python') ||
    text.includes('tailwind') ||
    text.includes('basics') ||
    text.includes('beginner')
  ) {
    return 'Beginner';
  }

  return 'Intermediate';
}

/**
 * Dynamically constructs tags array.
 */
export function buildTags(name: string, topics: string[] = [], lang: string | null = null): string[] {
  const set = new Set<string>();

  if (lang) set.add(lang);

  topics.forEach(t => {
    if (!t.startsWith('learn-') && t !== 'learning' && t !== 'learn') {
      set.add(t.charAt(0).toUpperCase() + t.slice(1));
    }
  });

  const parts = name.replace(/^learn-/, '').split('-');
  parts.forEach(p => {
    if (p.length > 2) {
      set.add(p.charAt(0).toUpperCase() + p.slice(1));
    }
  });

  return Array.from(set).slice(0, 5);
}

/**
 * Dynamically inspects the local filesystem (or GitHub repo metadata)
 * to determine true curriculum status and line count.
 */
export function determineStatus(repoName: string, remoteSizeKb: number, remoteDesc: string = ''): {
  status: RepoStatus;
  guideLines: number;
} {
  // Try locating local repository folder
  const possiblePaths = [
    path.resolve(process.cwd(), '..', repoName, 'README.md'),
    path.join('c:/Users/manth', repoName, 'README.md')
  ];

  for (const p of possiblePaths) {
    try {
      if (fs.existsSync(p)) {
        const content = fs.readFileSync(p, 'utf-8');
        const lines = content.split('\n').length;
        if (lines >= 1000 || (lines > 500 && content.includes('Stage '))) {
          return { status: 'Completed', guideLines: lines };
        }
        if (lines >= 20) {
          return { status: 'In Progress', guideLines: lines };
        }
        return { status: 'Roadmap', guideLines: lines };
      }
    } catch {
      // Ignore file system errors
    }
  }

  // Cloud build fallback (Vercel): Determine dynamically from GitHub metadata
  const descLower = remoteDesc.toLowerCase();
  if (remoteSizeKb >= 40 || descLower.includes('masterclass') || descLower.includes('exhaustive')) {
    return { status: 'Completed', guideLines: Math.round(remoteSizeKb * 25) };
  }
  if (remoteSizeKb >= 1 || descLower.length > 20) {
    return { status: 'In Progress', guideLines: Math.round(remoteSizeKb * 25) };
  }

  return { status: 'Roadmap', guideLines: 0 };
}

/**
 * 100% DYNAMIC Discovery:
 * Fetches all repositories directly from GitHub API (across all pages),
 * falling back to dynamic local directory discovery if offline or rate-limited.
 */
export async function fetchRepos(): Promise<LearningRepo[]> {
  const repoMap = new Map<string, LearningRepo>();

  // 1. Fetch from GitHub API across all repository pages
  try {
    let page = 1;
    let keepPaging = true;

    while (page <= 5 && keepPaging) {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&page=${page}&sort=updated`, {
        headers: {
          'User-Agent': 'the-learninghub-dynamic-fetcher',
          Accept: 'application/vnd.github.v3+json'
        }
      });

      if (!res.ok) break;

      const data: GitHubRawRepo[] = await res.json();
      if (!Array.isArray(data) || data.length === 0) {
        keepPaging = false;
        break;
      }

      for (const r of data) {
        if (!r.fork && !r.archived && (r.name.startsWith('learn-') || r.topics?.includes('learning'))) {
          const topics = r.topics || [];
          const category = classifyCategory(r.name, topics, r.language || '', r.description || '');
          const level = determineLevel(r.name, topics);
          const title = formatTitle(r.name);
          const tags = buildTags(r.name, topics, r.language);
          const { status, guideLines } = determineStatus(r.name, r.size || 0, r.description || '');

          repoMap.set(r.name, {
            name: r.name,
            title: title,
            description: r.description || `Comprehensive guide, patterns, and practical code references for ${title}.`,
            category: category,
            tags: tags,
            githubUrl: r.html_url,
            level: level,
            status: status,
            guideLines: guideLines > 0 ? guideLines : undefined,
            stars: r.stargazers_count,
            forks: r.forks_count,
            language: r.language,
            updatedAt: r.updated_at,
            isFeatured: status === 'Completed' || r.stargazers_count > 0
          });
        }
      }

      page++;
    }
  } catch (error) {
    console.warn('[Dynamic Fetcher] GitHub API request failed or rate-limited:', error);
  }

  // 2. Local File System Dynamic Discovery Fallback:
  // If GitHub API was limited or missed local repos, dynamically scan the workspace parent directory!
  try {
    const searchDirs = [
      path.resolve(process.cwd(), '..'),
      'c:/Users/manth'
    ];

    for (const baseDir of searchDirs) {
      if (fs.existsSync(baseDir)) {
        const entries = fs.readdirSync(baseDir, { withFileTypes: true });
        for (const entry of entries) {
          if (entry.isDirectory() && entry.name.startsWith('learn-') && !repoMap.has(entry.name)) {
            const repoName = entry.name;
            const category = classifyCategory(repoName);
            const level = determineLevel(repoName);
            const title = formatTitle(repoName);
            const tags = buildTags(repoName);
            const { status, guideLines } = determineStatus(repoName, 10);

            repoMap.set(repoName, {
              name: repoName,
              title: title,
              description: `Comprehensive guide, patterns, and architectural code references for ${title}.`,
              category: category,
              tags: tags,
              githubUrl: `https://github.com/${GITHUB_USER}/${repoName}`,
              level: level,
              status: status,
              guideLines: guideLines > 0 ? guideLines : undefined,
              stars: 0,
              forks: 0,
              language: null,
              updatedAt: new Date().toISOString(),
              isFeatured: status === 'Completed'
            });
          }
        }
      }
    }
  } catch (err) {
    console.warn('[Dynamic Fetcher] Local filesystem discovery fallback error:', err);
  }

  const allRepos = Array.from(repoMap.values());

  // Dynamic sorting: Completed first, then In Progress, then alphabetical by title
  const statusWeight: Record<RepoStatus, number> = {
    Completed: 1,
    'In Progress': 2,
    Roadmap: 3
  };

  allRepos.sort((a, b) => {
    const weightA = statusWeight[a.status || 'Roadmap'];
    const weightB = statusWeight[b.status || 'Roadmap'];
    if (weightA !== weightB) return weightA - weightB;
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
