import Link from 'next/link';
import { GitHubRepo } from '@/lib/types';

interface ProjectCardProps {
  repo: GitHubRepo;
}

export default function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <Link href={`/projects/${repo.name}`}>
      <div className="card rounded-lg p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold hover:text-[var(--accent)] transition-colors">
            {repo.name}
          </h3>
          {repo.stargazers_count > 0 && (
            <div className="flex items-center text-sm text-gray-400">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {repo.stargazers_count}
            </div>
          )}
        </div>

        <p className="text-gray-400 mb-4 flex-grow line-clamp-3">
          {repo.description || 'No description available'}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {repo.language && (
            <span className="px-3 py-1 text-xs rounded-full glass">
              {repo.language}
            </span>
          )}
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 text-xs rounded-full glass text-[var(--accent)]"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-[var(--accent)] font-medium">View Details →</span>
        </div>
      </div>
    </Link>
  );
}
