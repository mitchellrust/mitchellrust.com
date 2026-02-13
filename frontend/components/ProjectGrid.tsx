import { GitHubRepo } from '@/lib/types';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  repos: GitHubRepo[];
}

export default function ProjectGrid({ repos }: ProjectGridProps) {
  if (repos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No projects found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <ProjectCard key={repo.full_name} repo={repo} />
      ))}
    </div>
  );
}
