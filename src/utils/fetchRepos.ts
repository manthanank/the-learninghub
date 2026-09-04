import type { LearningRepo, CategoryId } from '../types/repo';

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

/**
 * Dynamically classifies any GitHub repository into one of the 6 core domains.
 */
function classifyCategory(name: string, topics: string[] = [], lang: string = '', desc: string = ''): CategoryId {
  const text = `${name} ${topics.join(' ')} ${lang} ${desc}`.toLowerCase();

  // DevOps & Cloud
  if (
    text.includes('docker') ||
    text.includes('kubernetes') ||
    text.includes('k8s') ||
    (text.includes('git') && !text.includes('digital')) ||
    text.includes('github-actions') ||
    text.includes('terraform') ||
    text.includes('aws') ||
    text.includes('linux') ||
    text.includes('ci/cd') ||
    text.includes('container')
  ) {
    return 'devops';
  }

  // Databases & Storage
  if (
    text.includes('postgres') ||
    text.includes('mongodb') ||
    text.includes('mysql') ||
    text.includes('redis') ||
    text.includes('supabase') ||
    text.includes('firebase') ||
    text.includes('sql') ||
    text.includes('database')
  ) {
    return 'databases';
  }

  // System Design & Computer Science
  if (
    text.includes('system-design') ||
    text.includes('design-patterns') ||
    text.includes('data-structures') ||
    text.includes('algorithm') ||
    text.includes('distributed') ||
    text.includes('architecture')
  ) {
    return 'system-design';
  }

  // Programming Languages
  if (
    text.includes('python') ||
    text.includes('golang') ||
    text.includes('learn-go') ||
    name === 'learn-c' ||
    text.includes('c-plus-plus') ||
    text.includes('cpp') ||
    text.includes('c-sharp') ||
    text.includes('csharp') ||
    text.includes('rust')
  ) {
    return 'languages';
  }

  // Frontend & UI
  if (
    text.includes('react') ||
    text.includes('angular') ||
    text.includes('nextjs') ||
    text.includes('next.js') ||
    text.includes('typescript') ||
    text.includes('javascript') ||
    text.includes('html') ||
    text.includes('css') ||
    text.includes('scss') ||
    text.includes('sass') ||
    text.includes('tailwind') ||
    text.includes('bootstrap') ||
    text.includes('astro') ||
    text.includes('rxjs') ||
    text.includes('ngrx') ||
    text.includes('frontend')
  ) {
    return 'frontend';
  }

  // Backend & Runtimes
  return 'backend';
}

/**
 * Dynamically formats clean titles from repository names.
 */
function formatTitle(name: string): string {
  const clean = name.replace(/^learn-/, '');

  const titleMap: Record<string, string> = {
    'c-plus-plus': 'C++ Modern OOP & STL',
    'c-sharp': 'C# & Modern Language Features',
    'c': 'C Programming & Low-Level Memory',
    'go': 'Go / Golang Concurrency & Systems',
    'dot-net': '.NET Core & Web APIs',
    'reactjs': 'React.js & Modern Ecosystem',
    'nextjs': 'Next.js & Fullstack React',
    'angular': 'Angular Framework & Signals',
    'typescript': 'TypeScript Essentials & Types',
    'javascript': 'JavaScript & Modern ES6+',
    'html': 'HTML5 & Semantic Web',
    'css': 'Modern CSS, Flexbox & Grid',
    'tailwindcss': 'Tailwind CSS Mastery',
    'scss': 'SCSS / SASS Preprocessor',
    'bootstrap': 'Bootstrap UI Framework',
    'astro': 'Astro Islands Architecture',
    'rxjs': 'RxJS Reactive Streams',
    'ngrx': 'NgRx State Management for Angular',
    'nodejs': 'Node.js Core & Async Runtime',
    'expressjs': 'Express.js Web Framework',
    'nestjs': 'NestJS Enterprise Architecture',
    'graphql': 'GraphQL APIs & Schemas',
    'bun': 'Bun Modern Runtime & Tooling',
    'deno': 'Deno Secure Server Runtime',
    'docker': 'Docker & Containerization',
    'kubernetes': 'Kubernetes & Cluster Orchestration',
    'git': 'Git Version Control & Workflows',
    'github-actions': 'GitHub Actions & CI/CD Pipelines',
    'linux': 'Linux Systems & Command Line',
    'aws': 'AWS Cloud Architecture',
    'terraform': 'Terraform Infrastructure as Code',
    'postgresql': 'PostgreSQL & Relational Modeling',
    'mongodb': 'MongoDB NoSQL & Aggregations',
    'mysql': 'MySQL Relational Database',
    'redis': 'Redis In-Memory Caching & Pub/Sub',
    'supabase': 'Supabase BaaS & Postgres',
    'firebase': 'Firebase Suite & Serverless',
    'sql': 'SQL Queries & Database Modeling',
    'python': 'Python Programming & Standard Library',
    'system-design': 'System Design & Distributed Architectures',
    'data-structures-algorithms': 'Data Structures & Algorithms',
    'design-patterns': 'Software Design Patterns & Clean Code'
  };

  if (titleMap[clean]) {
    return titleMap[clean];
  }

  // Auto title capitalization
  return clean
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Dynamically determines difficulty level.
 */
function determineLevel(name: string, topics: string[] = []): 'Beginner' | 'Intermediate' | 'Advanced' {
  const text = `${name} ${topics.join(' ')}`.toLowerCase();

  if (
    text.includes('system-design') ||
    text.includes('kubernetes') ||
    text.includes('c-plus-plus') ||
    text.includes('rxjs') ||
    text.includes('ngrx') ||
    text.includes('nextjs') ||
    text.includes('advanced')
  ) {
    return 'Advanced';
  }

  if (
    text.includes('html') ||
    text.includes('css') ||
    text.includes('git') ||
    text.includes('bootstrap') ||
    text.includes('python') ||
    text.includes('beginner') ||
    text.includes('basics')
  ) {
    return 'Beginner';
  }

  return 'Intermediate';
}

/**
 * Dynamically constructs tags array.
 */
function buildTags(name: string, topics: string[] = [], lang: string | null = null): string[] {
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
 * 100% Dynamically fetches and categorizes all learning repositories directly from GitHub API.
 */
export async function fetchRepos(): Promise<LearningRepo[]> {
  try {
    let allRepos: GitHubRawRepo[] = [];
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
      allRepos = allRepos.concat(data);
      page++;
    }

    // Filter to learning guides
    const learningRepos = allRepos.filter(r => 
      !r.fork &&
      !r.archived &&
      (r.name.startsWith('learn-') ||
       r.topics?.includes('learning') ||
       r.name.includes('guide'))
    );

    // Transform dynamically
    const transformed: LearningRepo[] = learningRepos.map(r => {
      const topics = r.topics || [];
      const category = classifyCategory(r.name, topics, r.language || '', r.description || '');
      const level = determineLevel(r.name, topics);
      const title = formatTitle(r.name);
      const tags = buildTags(r.name, topics, r.language);
      const isFeatured = [
        'learn-reactjs',
        'learn-nextjs',
        'learn-angular',
        'learn-typescript',
        'learn-nodejs',
        'learn-docker',
        'learn-kubernetes',
        'learn-postgresql',
        'learn-system-design',
        'learn-python',
        'learn-go'
      ].includes(r.name);

      return {
        name: r.name,
        title: title,
        description: r.description || `Comprehensive guide, patterns, and practical code references for ${title}.`,
        category: category,
        tags: tags,
        githubUrl: r.html_url,
        level: level,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language,
        updatedAt: r.updated_at,
        isFeatured: isFeatured
      };
    });

    // Sort: featured first, then by category order, then title
    const catOrder: CategoryId[] = ['frontend', 'backend', 'devops', 'databases', 'languages', 'system-design'];
    transformed.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      const catDiff = catOrder.indexOf(a.category) - catOrder.indexOf(b.category);
      if (catDiff !== 0) return catDiff;
      return a.title.localeCompare(b.title);
    });

    return transformed;
  } catch (error) {
    console.error('Error fetching repositories dynamically from GitHub API:', error);
    return [];
  }
}

export function getStats(repos: LearningRepo[]) {
  const totalGuides = repos.length;
  const totalStars = repos.reduce((acc, r) => acc + (r.stars || 0), 0);
  const categoriesCount = new Set(repos.map(r => r.category)).size;
  const allTags = new Set<string>();
  repos.forEach(r => r.tags.forEach(t => allTags.add(t)));

  return {
    totalGuides,
    totalStars,
    categoriesCount,
    technologiesCount: allTags.size
  };
}
