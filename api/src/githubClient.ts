import { GitHubRepo } from './types';

const GITHUB_API_BASE = 'https://api.github.com';

export class GitHubClient {
  private username: string;
  private token?: string;

  constructor(username: string, token?: string) {
    this.username = username;
    this.token = token;
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-API',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  async getRepos(page = 1, perPage = 50, sort = 'updated'): Promise<GitHubRepo[]> {
    const url = `${GITHUB_API_BASE}/users/${this.username}/repos?page=${page}&per_page=${perPage}&sort=${sort}&type=public`;
    
    const response = await fetch(url, {
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const repos: GitHubRepo[] = await response.json() as GitHubRepo[];
    
    // Filter out forks
    return repos.filter(repo => !repo.fork);
  }

  async getRepo(repo: string): Promise<GitHubRepo> {
    const url = `${GITHUB_API_BASE}/repos/${this.username}/${repo}`;
    
    const response = await fetch(url, {
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const respRepo: GitHubRepo = await response.json() as GitHubRepo;
    return respRepo;
  }

  async getReadme(repo: string, defaultBranch: string): Promise<string> {
    // Try README.md first, then other common variations
    const readmeFiles = ['README.md', 'README.MD', 'readme.md', 'Readme.md'];
    
    for (const filename of readmeFiles) {
      try {
        const url = `${GITHUB_API_BASE}/repos/${this.username}/${repo}/contents/${filename}`;
        
        const response = await fetch(url, {
          headers: this.getHeaders(),
        });

        if (response.ok) {
          const data = await response.json();
          
          // GitHub API returns content as base64
          if (data.content) {
            const markdown = Buffer.from(data.content, 'base64').toString('utf-8');
            return this.rewriteAssetUrls(markdown, this.username, repo, defaultBranch);
          }
        }
      } catch (error) {
        // Continue to next filename
        continue;
      }
    }

    throw new Error('README not found');
  }

  private rewriteAssetUrls(markdown: string, repo: string, branch: string): string {
    // Rewrite relative image URLs to raw.githubusercontent.com
    // Pattern: ![alt](relative/path.png) -> ![alt](https://raw.githubusercontent.com/owner/repo/branch/relative/path.png)
    markdown = markdown.replace(
      /!\[([^\]]*)\]\((?!https?:\/\/)(?!\/)([^)]+)\)/g,
      `![$1](https://raw.githubusercontent.com/${this.username}/${repo}/${branch}/$2)`
    );

    // Rewrite relative links to files to GitHub blob URLs
    // Pattern: [text](relative/path.md) -> [text](https://github.com/owner/repo/blob/branch/relative/path.md)
    markdown = markdown.replace(
      /\[([^\]]+)\]\((?!https?:\/\/)(?!\/)(?!#)([^)]+)\)/g,
      `[$1](https://github.com/${this.username}/${repo}/blob/${branch}/$2)`
    );

    return markdown;
  }

  async getFeaturedRepos(): Promise<GitHubRepo[]> {
    const repos = await this.getRepos(1, 100);
    
    // Filter repos with 'featured' topic and sort by stars descending
    const featured = repos.filter(repo => 
      repo.topics && repo.topics.includes('featured')
    );

    return featured.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }
}
