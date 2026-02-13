# Quick Start Guide

## Running Locally

### Option 1: Run both services separately (Recommended)

**Terminal 1 - API Server:**
```bash
cd api
npm run dev
```
The API will start at `http://localhost:4000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
The frontend will start at `http://localhost:3000`

### Option 2: Use npm scripts from root

**Terminal 1:**
```bash
npm run dev:api
```

**Terminal 2:**
```bash
npm run dev:frontend
```

## First Time Setup

1. **Configure GitHub Token (Optional but recommended):**
   - Edit `api/.env`
   - Add your GitHub personal access token to `GITHUB_TOKEN`
   - Without a token, you'll have lower GitHub API rate limits

2. **Test the API:**
   ```bash
   curl http://localhost:4000/api/health
   curl http://localhost:4000/api/repos
   ```

3. **Open the frontend:**
   - Visit `http://localhost:3000`
   - Navigate through Home, Projects, and About pages

## Making Your First Changes

### Add Featured Projects
1. Go to any of your GitHub repos
2. Add the topic `featured` (Edit repo > About > Topics)
3. Refresh your homepage to see it in the featured section

### Customize About Page
Edit `frontend/app/about/page.tsx` to update:
- Your bio
- Skills and expertise
- Technologies you work with

### Change Theme Colors
Edit `frontend/app/globals.css`:
```css
:root {
  --accent: #00A8FF;  /* Change this to your preferred color */
}
```

## Building for Production

**Build API:**
```bash
cd api
npm run build
npm start
```

**Build Frontend:**
```bash
cd frontend
npm run build
npm start
```

## Deployment

See the main [README.md](README.md) for detailed deployment instructions for Vercel and Render.

## Troubleshooting

**API not connecting:**
- Check that `NEXT_PUBLIC_API_BASE` in `frontend/.env.local` matches your API URL
- Verify the API is running on port 4000

**No repos showing:**
- Check your GitHub username in `api/.env`
- Verify you have public repositories
- Check API logs for errors

**Rate limit errors:**
- Add a GitHub personal access token to `api/.env`
- This increases your rate limit from 60 to 5000 requests/hour

## Project Structure

```
├── api/               # Express backend
│   ├── src/          # TypeScript source
│   └── dist/         # Compiled JavaScript (after build)
├── frontend/         # Next.js frontend
│   ├── app/          # App router pages
│   ├── components/   # React components
│   └── lib/          # Utilities and API client
└── README.md         # Full documentation
```
