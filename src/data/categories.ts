import type { CategoryMeta } from '../types/repo';

export const categories: CategoryMeta[] = [
  {
    id: 'frontend',
    name: 'Frontend & UI Frameworks',
    description: 'Modern component architectures, reactive state engines, CSS mastery, and web platform standards.',
    icon: 'layout',
    badgeColor: 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30',
    gradient: 'from-cyan-500 via-sky-500 to-blue-600',
    borderHover: 'hover:border-cyan-500/40 hover:shadow-cyan-500/10'
  },
  {
    id: 'backend',
    name: 'Backend, APIs & Runtimes',
    description: 'High-throughput server architectures, modern JS/TS runtimes, NestJS enterprise design, and API paradigms.',
    icon: 'server',
    badgeColor: 'text-emerald-400 bg-emerald-950/50 border-emerald-500/30',
    gradient: 'from-emerald-500 via-teal-500 to-green-600',
    borderHover: 'hover:border-emerald-500/40 hover:shadow-emerald-500/10'
  },
  {
    id: 'devops',
    name: 'DevOps, Cloud & Infrastructure',
    description: 'Containerization, Kubernetes orchestration, Git workflows, CI/CD pipelines, and Linux sysadmin.',
    icon: 'cloud',
    badgeColor: 'text-violet-400 bg-violet-950/50 border-violet-500/30',
    gradient: 'from-violet-500 via-purple-500 to-indigo-600',
    borderHover: 'hover:border-violet-500/40 hover:shadow-violet-500/10'
  },
  {
    id: 'databases',
    name: 'Databases, Caching & BaaS',
    description: 'Relational data modeling, ACID transactions, NoSQL scalability, Redis memory caching, and Supabase / Firebase BaaS.',
    icon: 'database',
    badgeColor: 'text-amber-400 bg-amber-950/50 border-amber-500/30',
    gradient: 'from-amber-500 via-orange-500 to-yellow-600',
    borderHover: 'hover:border-amber-500/40 hover:shadow-amber-500/10'
  },
  {
    id: 'languages',
    name: 'Programming Languages',
    description: 'Core syntax, typing systems, memory models, and idiomatic idioms in TypeScript, Python, Go, and C/C++.',
    icon: 'code',
    badgeColor: 'text-pink-400 bg-pink-950/50 border-pink-500/30',
    gradient: 'from-pink-500 via-rose-500 to-red-600',
    borderHover: 'hover:border-pink-500/40 hover:shadow-pink-500/10'
  },
  {
    id: 'system-design',
    name: 'System Design & Computer Science',
    description: 'Scalable distributed systems, design patterns, microservices, fault tolerance, and data structures & algorithms.',
    icon: 'cpu',
    badgeColor: 'text-indigo-400 bg-indigo-950/50 border-indigo-500/30',
    gradient: 'from-indigo-500 via-blue-600 to-purple-600',
    borderHover: 'hover:border-indigo-500/40 hover:shadow-indigo-500/10'
  }
];

export const categoryMap = Object.fromEntries(categories.map(c => [c.id, c]));
