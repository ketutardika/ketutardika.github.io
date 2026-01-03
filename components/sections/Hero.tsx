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
                ]}
                className="text-purple-600 dark:text-purple-400"
              />
            </div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Building digital solutions with clean code and smart tech.
              Let's turn your ideas into reality, one commit at a time.
            </p>
            <div className="flex justify-center pt-4">
              <button
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 rounded-full border border-purple-500 hover:border-purple-800 transition-all group flex items-center gap-3"
                aria-label="Scroll to About section"
              >
                <span className="text-base font-semibold text-gray-800 dark:text-gray-200">
                  See What I Do
                </span>
                <svg
                  className="w-5 h-5 text-purple-600 dark:text-purple-400 animate-bounce group-hover:translate-y-1 transition-transform"
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
