export default function Footer() {
  return (
    <footer className="glass mt-auto border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Mitchell Rust. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/mitchellrust"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--accent)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:mitchellrust@gmail.com"
              className="text-gray-400 hover:text-[var(--accent)] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
