import express, { Request, Response } from 'express';
import { GitHubClient } from '../githubClient';

const router = express.Router();

const githubClient = new GitHubClient(
  process.env.GITHUB_USERNAME || 'mitchellrust',
  process.env.GITHUB_TOKEN
);

// GET /api/repos - List all public repositories (excluding forks)
router.get('/repos', async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const perPage = parseInt(req.query.per_page as string) || 50;
    const sort = (req.query.sort as string) || 'updated';
    const search = (req.query.search as string) || '';

    let repos = await githubClient.getRepos(page, perPage, sort);

    // Server-side search filtering
    if (search) {
      const searchLower = search.toLowerCase();
      repos = repos.filter(repo => 
        repo.name.toLowerCase().includes(searchLower) ||
        (repo.description && repo.description.toLowerCase().includes(searchLower))
      );
    }

    res.json(repos);
  } catch (error) {
    console.error('Error fetching repos:', error);
    res.status(500).json({ error: 'Failed to fetch repositories' });
  }
});

// GET /api/repos/:repo - Get a single repository
router.get('/repos/:repo', async (req: Request, res: Response) => {
  try {
    const { repo } = req.params;
    const repoData = await githubClient.getRepo(repo);
    res.json(repoData);
  } catch (error) {
    console.error('Error fetching repo:', error);
    res.status(404).json({ error: 'Repository not found' });
  }
});

// GET /api/repos/:repo/readme - Get repository README
router.get('/repos/:repo/readme', async (req: Request, res: Response) => {
  try {
    const { repo } = req.params;
    
    // First get repo to find default branch
    const repoData = await githubClient.getRepo(repo);
    const markdown = await githubClient.getReadme(repo, repoData.default_branch);
    
    res.json({ markdown });
  } catch (error) {
    console.error('Error fetching README:', error);
    res.status(404).json({ error: 'README not found' });
  }
});

// GET /api/featured - Get featured repositories (with 'featured' topic)
router.get('/featured', async (req: Request, res: Response) => {
  try {
    const featured = await githubClient.getFeaturedRepos();
    res.json(featured);
  } catch (error) {
    console.error('Error fetching featured repos:', error);
    res.status(500).json({ error: 'Failed to fetch featured repositories' });
  }
});

export default router;
