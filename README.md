# The LearningHub 🚀

> Centralized dashboard, directory, and roadmap catalog for **40+ developer guides** authored by [@manthanank](https://github.com/manthanank).

![The LearningHub Preview](./public/og-image.png)

## ✨ Features

- **⚡ Blazing Fast Static Island Architecture**: Built on [Astro](https://astro.build/) for optimal performance and zero runtime JS overhead where possible.
- **🎨 Sleek Dark Mode Aesthetics**: Styled with [Tailwind CSS](https://tailwindcss.com/) using modern obsidian palettes, ambient radial gradients, and glassmorphism cards.
- **🔍 Real-Time Instant Search & Filtering**: Client-side query engine filtering across 42+ learning repositories by title, name, description, tags, and difficulty levels.
- **📂 Categorized Tech Stacks**:
  - **Frontend & UI Frameworks** (`learn-reactjs`, `learn-angular`, `learn-nextjs`, `learn-typescript`, `learn-html`, `learn-css`, `learn-tailwindcss`, etc.)
  - **Backend, APIs & Runtimes** (`learn-nodejs`, `learn-expressjs`, `learn-nestjs`, `learn-graphql`, `learn-bun`, `learn-deno`, etc.)
  - **DevOps, Cloud & Infrastructure** (`learn-docker`, `learn-kubernetes`, `learn-git`, `learn-github-actions`, `learn-linux`, `learn-aws`, `learn-terraform`)
  - **Databases, Caching & BaaS** (`learn-postgresql`, `learn-mongodb`, `learn-mysql`, `learn-redis`, `learn-supabase`, `learn-firebase`, `learn-sql`)
  - **Programming Languages** (`learn-python`, `learn-go`, `learn-c`, `learn-c-plus-plus`, `learn-c-sharp`)
  - **System Design & CS** (`learn-system-design`, `learn-data-structures-algorithms`, `learn-design-patterns`)
- **🌐 GitHub API Integration**: Auto-fetches live repository stars, forks, descriptions, and updates at build time with an offline curated fallback.

---

## 📁 Project Structure

```text
the-learninghub/
├── public/
│   ├── favicon.svg              # Custom SVG icon
│   └── og-image.png             # Social preview image
├── src/
│   ├── components/
│   │   ├── Navbar.astro         # Header with branding, counter & GitHub link
│   │   ├── Footer.astro         # Minimal footer with links & license
│   │   ├── SearchFilter.astro   # Real-time search input & tag chips
│   │   ├── CategorySection.astro# Group wrapper (Frontend, Backend, DevOps, etc.)
│   │   ├── RepoCard.astro       # Card showing title, description, tags, link
│   │   └── StatsBanner.astro    # Quick summary (40+ Guides, 6 Domains)
│   ├── data/
│   │   └── categories.ts        # Category ordering & metadata
│   ├── layouts/
│   │   └── Layout.astro         # Base HTML head, SEO meta tags, and global fonts
│   ├── pages/
│   │   ├── index.astro          # Main dashboard & interactive directory
│   │   └── 404.astro            # Custom 404 page
│   ├── styles/
│   │   └── global.css           # Tailwind directives and custom scrollbars
│   ├── types/
│   │   └── repo.ts              # TypeScript interfaces for repo data
│   └── utils/
│       └── fetchRepos.ts        # Optional build-time GitHub API fetcher
├── .gitignore
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js >= 22.12.0
- npm >= 10.0.0

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ➕ Adding a New Guide / Repository

Repositories are **100% dynamically fetched** from GitHub!

To add a new repository to the directory:
1. Create a repository on GitHub under `@manthanank` starting with `learn-` (e.g., `learn-rust`).
2. Add relevant GitHub topics (e.g. `rust`, `systems`, `learning`).
3. Deploy or rebuild—The LearningHub will automatically discover, categorize, tag, and display the guide dynamically!

---

## 📄 License

MIT © [Manthanank](https://github.com/manthanank)
