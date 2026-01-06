'use client';

import TypeWriter from '@/components/ui/TypeWriter';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          {/* Main Content - Centered */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-xl md:text-2xl font-medium text-purple-600 dark:text-purple-400 tracking-wide">
              Hi There!
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              I'm{' '}
              <span className="gradient-text">Ketut Ardika</span>
            </h1>
            <div className="text-2xl md:text-3xl font-semibold h-20 flex items-center justify-center">
              <TypeWriter
                words={[
                  'WordPress Engineer',
                  'Shopify Developer',
                  'Technical Lead',
                  'AI Researcher',
                ]}
                className="text-purple-600 dark:text-purple-400"
              />
            </div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Building digital solutions with clean code and smart tech.
              Let's turn your ideas into reality, one commit at a time.
            </p>
            <div className="flex justify-center items-center gap-2 md:gap-4 pt-4">
              <a
                href="https://github.com/ketutardika/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-3 py-2 md:px-6 md:py-4 rounded-2xl md:rounded-3xl border border-purple-500 hover:border-purple-500/50 transition-all duration-500 flex items-center gap-2 md:gap-3"
                aria-label="GitHub"
              >
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Explore Projects
                </span>
              </a>
              <button
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-4 py-2 md:px-8 md:py-4 rounded-2xl md:rounded-3xl border border-purple-500 hover:border-purple-800 transition-all group flex items-center gap-2 md:gap-3"
                aria-label="Scroll to About section"
              >
                <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200">
                  See What I Do
                </span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-purple-600 dark:text-purple-400 animate-bounce group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
