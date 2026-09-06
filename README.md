# The LearningHub 🚀

> Centralized dashboard, directory, and roadmap catalog for **60+ developer masterclasses and tech stacks** authored by [@manthanank](https://github.com/manthanank).

Live Portal: [https://the-learninghub.vercel.app](https://the-learninghub.vercel.app)

---

## ✨ Key Features

- **⚡ Blazing Fast Static Island Architecture**: Built on [Astro](https://astro.build/) for sub-second page loads and zero runtime JS overhead.
- **🎨 Sleek Dark Mode Aesthetics**: Styled with [Tailwind CSS](https://tailwindcss.com/) using modern obsidian palettes, ambient radial gradients, and glassmorphism cards.
- **🔍 Real-Time Instant Search & Filtering**: Client-side query engine filtering across all 62 learning repositories by title, name, description, tags, domains, and difficulty levels.
- **📂 Categorized Across 8 Core Engineering Domains**:
  - **Frontend & UI Frameworks** (`learn-reactjs`, `learn-angular`, `learn-nextjs`, `learn-html`, `learn-css`, `learn-vue`, `learn-astro`, `learn-tailwindcss`, `learn-bootstrap`)
  - **Backend, APIs & Runtimes** (`learn-nodejs`, `learn-expressjs`, `learn-deno`, `learn-bun`, `learn-graphql`, `learn-kafka`)
  - **AI, LLMs & Autonomous Agents** (`learn-openai`, `learn-claude`, `learn-gemini`, `learn-ollama`, `learn-deepseek`, `learn-vercel-ai-sdk`, `learn-prompt-engineering`, `learn-structured-outputs`, `learn-rag`, `learn-vector-databases`, `learn-ragas`, `learn-langgraph`, `learn-crewai`, `learn-autogen`, `learn-langfuse`, `learn-promptfoo`, `learn-vllm`)
  - **DevOps, Cloud & Infrastructure** (`learn-docker`, `learn-kubernetes`, `learn-git`, `learn-github-actions`, `learn-linux`, `learn-aws`, `learn-terraform`)
  - **Databases, Caching & BaaS** (`learn-postgresql`, `learn-mongodb`, `learn-mysql`, `learn-redis`, `learn-supabase`, `learn-firebase`, `learn-sql`, `learn-prisma`, `learn-drizzle`)
  - **Testing, Protocols & Web Security** (`learn-playwright`, `learn-vitest`, `learn-cypress`, `learn-rest-api`, `learn-websockets`, `learn-grpc`, `learn-web-security`, `learn-oauth`)
  - **Programming Languages** (`learn-python`, `learn-typescript`, `learn-rust`)
  - **System Design & CS** (`learn-system-design`, `learn-data-structures-algorithms`, `learn-design-patterns`)
- **🌐 Dual-Mode Data Engine**: Pre-compiles live GitHub stats (stars, forks, updates) during build with an offline master catalog fallback to guarantee 100% uptime.

---

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/manthanank/the-learninghub.git
cd the-learninghub

# Install dependencies
npm install

# Start local Astro dev server
npm run dev

# Build production static bundle
npm run build

# Preview build locally
npm run preview
```

---

## 📄 License
This project is open-source software licensed under the [MIT License](LICENSE).
