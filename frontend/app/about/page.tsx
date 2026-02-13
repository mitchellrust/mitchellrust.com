export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>

        <div className="glass rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm Mitchell Rust, a passionate software engineer with a love for building elegant, 
            user-focused applications. I specialize in modern web technologies and believe that 
            the best software combines powerful functionality with thoughtful design.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            My approach to development centers on writing clean, maintainable code while never 
            losing sight of the end user's experience. I'm constantly learning and exploring 
            new technologies to deliver the best solutions possible.
          </p>
        </div>

        <div className="glass rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">What I Do</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-[var(--accent)] rounded-full mr-4"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-gray-400">
                  Building end-to-end web applications with modern frameworks like Next.js, React, 
                  and Node.js. From database design to responsive frontends, I handle the complete stack.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-[var(--accent)] rounded-full mr-4"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">UI/UX Implementation</h3>
                <p className="text-gray-400">
                  Creating polished user interfaces with attention to detail. I focus on smooth 
                  animations, intuitive interactions, and accessibility to ensure every user has 
                  a great experience.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-[var(--accent)] rounded-full mr-4"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">API Design & Integration</h3>
                <p className="text-gray-400">
                  Designing and building RESTful APIs that are scalable, secure, and well-documented. 
                  I also have experience integrating with third-party services and platforms.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-[var(--accent)] rounded-full mr-4"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Open Source Contributions</h3>
                <p className="text-gray-400">
                  I believe in giving back to the community. I maintain and contribute to open 
                  source projects, sharing knowledge and collaborating with developers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
              'Tailwind CSS', 'Git', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg text-center font-medium hover:border-[var(--accent)] transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-300 text-lg mb-6">
            I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:mitchellrust@gmail.com"
              className="btn inline-flex items-center px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Email Me
            </a>
            <a
              href="https://github.com/mitchellrust"
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center px-8 py-4 glass hover:bg-white/10 rounded-lg font-semibold text-lg transition-all"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
