import type { LearningRepo, CategoryId } from '../types/repo';
import localRepos from '../data/repos.json';

const GITHUB_USER = 'manthanank';

export async function fetchRepos(): Promise<LearningRepo[]> {
  try {
    // Attempt live fetch if internet / rate limit allows
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`, {
      headers: {
        'User-Agent': 'the-learninghub-astro-build',
        Accept: 'application/vnd.github.v3+json'
      },
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!res.ok) {
      return localRepos as LearningRepo[];
    }

    const githubRepos: Array<{
      name: string;
      stargazers_count: number;
      forks_count: number;
      updated_at: string;
      description?: string;
    }> = await res.json();

    const ghMap = new Map(githubRepos.map(r => [r.name.toLowerCase(), r]));

    // Merge live metrics into curated repo data
    const merged: LearningRepo[] = (localRepos as LearningRepo[]).map(repo => {
      const live = ghMap.get(repo.name.toLowerCase());
      if (!live) return repo;
      return {
        ...repo,
        stars: live.stargazers_count ?? repo.stars ?? 0,
        forks: live.forks_count ?? repo.forks ?? 0,
        updatedAt: live.updated_at ?? repo.updatedAt,
        description: repo.description || live.description || ''
      };
    });

    return merged;
  } catch {
    // Fallback gracefully to offline curated dataset
    return localRepos as LearningRepo[];
  }
}

export function getReposByCategory(
  repos: LearningRepo[],
  category: CategoryId
): LearningRepo[] {
  return repos.filter(r => r.category === category);
}

export function getFeaturedRepos(repos: LearningRepo[]): LearningRepo[] {
  return repos.filter(r => r.isFeatured);
}

export function getAllTags(repos: LearningRepo[]): string[] {
  const set = new Set<string>();
  repos.forEach(r => r.tags.forEach(t => set.add(t)));
  return Array.from(set).sort();
}

export function getStats(repos: LearningRepo[]) {
  const totalGuides = repos.length;
  const totalStars = repos.reduce((acc, r) => acc + (r.stars || 0), 0);
  const categoriesCount = new Set(repos.map(r => r.category)).size;
  const technologiesCount = getAllTags(repos).length;

  return {
    totalGuides,
    totalStars,
    categoriesCount,
    technologiesCount
  };
}
