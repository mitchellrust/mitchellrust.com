import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { getFeaturedRepos } from '@/lib/api';
import { GitHubRepo } from '@/lib/types';
import Link from 'next/link';

export default async function Home() {
  let featuredRepos: GitHubRepo[];
  
  try {
    featuredRepos = await getFeaturedRepos();
  } catch (error) {
    console.error('Failed to fetch featured repos:', error);
    featuredRepos = [];
  }

  return (
    <>
      <Hero />
      
      {featuredRepos.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
                <p className="text-gray-400 text-lg">Showcasing my best work</p>
              </div>
              <Link
                href="/projects"
                className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium transition-colors"
              >
                View All Projects →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRepos.slice(0, 6).map((repo) => (
                <ProjectCard key={repo.full_name} repo={repo} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 px-4 sm:px-6 lg:px-8 glass">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 text-lg mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:mitchellrust@gmail.com"
            className="btn inline-block px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
