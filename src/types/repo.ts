export type CategoryId =
  | 'frontend'
  | 'backend'
  | 'ai'
  | 'devops'
  | 'databases'
  | 'testing-security'
  | 'languages'
  | 'system-design';

export type RepoStatus = 'Completed' | 'In Progress' | 'Roadmap';

export interface LearningRepo {
  name: string;          // e.g., "learn-docker"
  title: string;         // e.g., "Docker & Containers"
  description: string;   // Short summary
  category: CategoryId;
  tags: string[];        // e.g., ["DevOps", "Containers", "CLI"]
  githubUrl: string;     // URL to the repository
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  status?: RepoStatus;   // "Completed" | "In Progress" | "Roadmap"
  guideLines?: number;   // Number of lines in curriculum
  stars?: number;
  forks?: number;
  language?: string | null;
  updatedAt?: string;
  isFeatured?: boolean;
}

export interface CategoryMeta {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  badgeColor: string;
  gradient: string;
  borderHover: string;
}
