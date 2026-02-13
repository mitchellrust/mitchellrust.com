import { GitHubRepo, GitHubReadmeResponse } from './types';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

export async function getRepos(search?: string, page = 1, perPage = 50): Promise<GitHubRepo[]> {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: perPage.toString(),
  });

  if (search) {
    params.append('search', search);
  }

  const response = await fetch(`${API_BASE}/repos?${params.toString()}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }

  return response.json();
}

export async function getRepo(repo: string): Promise<GitHubRepo> {
  const response = await fetch(`${API_BASE}/repos/${repo}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch repository');
  }

  return response.json();
}

export async function getReadme(repo: string): Promise<GitHubReadmeResponse> {
  const response = await fetch(`${API_BASE}/repos/${repo}/readme`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch README');
  }

  return response.json();
}

export async function getFeaturedRepos(): Promise<GitHubRepo[]> {
  const response = await fetch(`${API_BASE}/featured-repos`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch featured repositories');
  }

  return response.json();
}
