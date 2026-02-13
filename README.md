# mitchellrust.com - Developer Portfolio

A portfolio website to showcase projects and serve as a personal landing
page for me.

## Architecture

- **Frontend**: Next.js (App Router) with TypeScript and Tailwind CSS
- **Backend**: Express.js API with TypeScript
- **Database**: Nothing yet, keeping it simple for now
- **Deployment**: Next.js on Vercel, Express API on Render

## Features

- Landing page with Hero section
- Featured projects from GitHub (tagged with "featured" topic)
- All projects page with search functionality
- Project detail pages with README rendering
- About page with skills and contact information
- Fully responsive design
- Dark theme, as all things should be

## Local Development

### Prerequisites

- Node.js 18+ and npm
- GitHub account with public repositories

### API Setup

1. Navigate to the API directory:
   ```bash
   cd api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. Configure environment variables in `.env`:
   ```
   GITHUB_USERNAME=mitchellrust
   GITHUB_TOKEN=your_github_personal_access_token
   PORT=4000
   ```

   To create a GitHub token:
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Generate a new token with `public_repo` scope
   - Copy the token to your `.env` file

5. Start the development server:
   ```bash
   npm run dev
   ```

   The API will be available at `http://localhost:4000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file (copy from `.env.local.example`):
   ```bash
   cp .env.local.example .env.local
   ```

4. Configure environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_API_BASE=http://localhost:4000
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000`

## Deployment

### Deploy API to Render

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Configure the service:
   - **Root Directory**: `api`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
4. Add environment variables:
   - `GITHUB_USERNAME`: mitchellrust
   - `GITHUB_TOKEN`: your_github_token
   - `PORT`: 4000 (Render will override this)
5. Deploy

Your API will be available at: `https://your-service.onrender.com`

### Deploy Frontend to Vercel

1. Install Vercel CLI (optional):
   ```bash
   npm install -g vercel
   ```

2. Deploy using Vercel CLI or connect via GitHub:
   ```bash
   cd frontend
   vercel
   ```

   Or use the [Vercel Dashboard](https://vercel.com):
   - Import your repository
   - Set **Root Directory** to `frontend`
   - Add environment variable:
     - `NEXT_PUBLIC_API_BASE`: https://your-service.onrender.com

3. Deploy

Site will be available at: `https://your-site.vercel.app`

## Project Structure

```
.
├── api/                    # Express API
│   ├── src/
│   │   ├── server.ts      # Main server file
│   │   ├── githubClient.ts # GitHub API integration
│   │   ├── routes/
│   │   │   └── repos.ts   # API routes
│   │   └── types.ts       # TypeScript types
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/              # Next.js Frontend
    ├── app/
    │   ├── layout.tsx     # Root layout
    │   ├── page.tsx       # Homepage
    │   ├── globals.css    # Global styles
    │   ├── about/
    │   │   └── page.tsx   # About page
    │   └── projects/
    │       ├── page.tsx   # Projects list
    │       └── [owner]/[repo]/
    │           └── page.tsx # Project detail
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── ProjectCard.tsx
    │   ├── ProjectGrid.tsx
    │   └── MarkdownRenderer.tsx
    ├── lib/
    │   ├── api.ts         # API client
    │   └── types.ts       # TypeScript types
    ├── package.json
    ├── tailwind.config.ts
    └── tsconfig.json
```

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/repos` - List all public repositories (excluding forks)
  - Query params: `page`, `per_page`, `sort`, `search`
- `GET /api/repos/:owner/:repo` - Get single repository
- `GET /api/repos/:owner/:repo/readme` - Get repository README (with rewritten asset URLs)
- `GET /api/featured` - Get featured repositories (tagged with "featured" topic)

## Customization

### Marking Projects as Featured

Add the `featured` topic to any GitHub repository you want to showcase on the homepage:

1. Go to your repository on GitHub
2. Click the gear icon next to "About"
3. Add `featured` to the Topics field

### Changing Colors

Edit `frontend/app/globals.css`:

```css
:root {
  --accent: #00A8FF;        /* Electric blue */
  --accent-hover: #0090e0;  /* Darker blue */
  /* ... */
}
```

### Updating About Page Content

Edit `frontend/app/about/page.tsx` to customize your bio, skills, and technologies.

## Contact

Mitchell Rust - [mitchellrust@gmail.com](mailto:mitchellrust@gmail.com)

GitHub: [@mitchellrust](https://github.com/mitchellrust)
