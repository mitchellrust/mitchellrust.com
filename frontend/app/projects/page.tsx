'use client';

import { useState, useEffect } from 'react';
import ProjectGrid from '@/components/ProjectGrid';
import { GitHubRepo } from '@/lib/types';

export default function ProjectsPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<GitHubRepo[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';
        const response = await fetch(`${apiBase}/api/repos`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await response.json();
        setRepos(data);
        setFilteredRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  useEffect(() => {
    if (search) {
      const searchLower = search.toLowerCase();
      const filtered = repos.filter(
        (repo) =>
          repo.name.toLowerCase().includes(searchLower) ||
          (repo.description && repo.description.toLowerCase().includes(searchLower)) ||
          repo.topics.some((topic) => topic.toLowerCase().includes(searchLower)) ||
          (repo.language && repo.language.toLowerCase().includes(searchLower))
      );
      setFilteredRepos(filtered);
    } else {
      setFilteredRepos(repos);
    }
  }, [search, repos]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">All Projects</h1>
          <p className="text-gray-400 text-xl mb-8">
            Explore my open source projects and contributions
          </p>

          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-4 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400">Loading projects...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400 text-lg">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="mb-6 text-gray-400">
              Showing {filteredRepos.length} of {repos.length} projects
            </div>
            <ProjectGrid repos={filteredRepos} />
          </>
        )}
      </div>
    </div>
  );
}
