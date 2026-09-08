# 🚀 muslim-api — Fullstack Monorepo

A powerful, modern fullstack application built with a monorepo architecture. **otang.id** leverages Next.js for both the frontend and backend, ensuring a unified development experience and high performance.

> [!IMPORTANT]
>
> **This is a learning project, not a guaranteed production service.** Public endpoints and hosted deployments may be changed, become unavailable, or be removed at any time without notice. If you depend on this project, please fork the repository and deploy your own frontend and backend instances.

---

## 🏗️ Project Architecture

```text
otang.id/
├── frontend/         → Modern Next.js Application (Port 3000)
├── backend/          → Next.js API Server (Port 3001)
├── package.json      → Workspace configuration & Root scripts
└── README.md         → You are here
```

---

## ✨ Features & Technologies

### 🎨 Frontend

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI & Styling:**
  - [Material UI (MUI)](https://mui.com/) - Premium component library
  - [Emotion](https://emotion.sh/) - CSS-in-JS for flexible styling
- **Animations:** [Motion](https://www.framer.com/motion/) - Smooth interactive experiences
- **Data Fetching:** [SWR](https://swr.vercel.app/) - Efficient client-side fetching with caching
- **Carousel:** [Embla Carousel](https://www.embla-carousel.com/) - Lightweight, touch-friendly slider

### ⚙️ Backend

- **Framework:** [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- **Database:** [SQLite](https://www.sqlite.org/) (via `better-sqlite3`) - Fast, self-contained SQL database
- **Caching:** [LRU Cache](https://github.com/isaacs/node-lru-cache) - In-memory object caching for speed

---

## 🚀 Getting Started

### 📦 Prerequisites

- **Node.js** (v18.x or later)
- **npm** (v9.x or later)

### 🛠️ Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd muslim-api

# Install all dependencies at once (via workspaces)
npm install
```

### 💻 Development

Run both servers simultaneously:

```bash
npm run dev
```

Or run them individually:

```bash
# Start Frontend only (http://localhost:3000)
npm run dev --workspace=frontend

# Start Backend only (http://localhost:3001)
npm run dev --workspace=backend
```

> [!NOTE]
>
> This project is intended for learning and experimentation. For a stable application, fork the repository, configure your own environment variables, and deploy both workspaces under your own Vercel projects.

---

## 🔗 How it works

### API Proxying

The frontend is configured to proxy `/muslim/v1/*` requests directly to the backend server. See `frontend/next.config.ts` for details. Set `BACKEND_URL` in the frontend environment to the URL of your own backend deployment.

For Vercel, create two projects from the same fork:

1. Set the frontend project's Root Directory to `frontend`.
2. Set the backend project's Root Directory to `backend`.
3. Add `BACKEND_URL` to the frontend project, using the backend project's Vercel URL.

The backend uses SQLite through `better-sqlite3`. Check the deployment platform's filesystem and persistence limitations before using it for data that must survive redeployments.

### Adding API Routes

Simply create a new route handler in the backend: `backend/src/app/api/<route-name>/route.ts`.

```ts
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: "Hello from Muslim API!",
  });
}
```

---

## 📜 Scripts

| Script          | Command                         | Description          |
| :-------------- | :------------------------------ | :------------------- |
| `npm run dev`   | `concurrently "..."`            | Run both dev servers |
| `npm run build` | `npm run build --workspace=...` | Build all packages   |

---

© 2026 **otang.id** — Crafted with ❤️ and modern tech.
