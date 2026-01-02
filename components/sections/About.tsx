export default function About() {
  return (
    <section id="about" className="py-24 section-glass">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 tracking-tight">
          Get to <span className="gradient-text">Know Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Photo */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br p-1">
                <img
                  src="/images/81ba4988-e6ab-47b2-a873-2d5dbb29cf50s.png"
                  alt="I Ketut Ardika - WordPress & E-commerce Developer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              A seasoned WordPress & E-commerce Developer bringing{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                over a decade of expertise
              </span>{' '}
              in crafting, developing, and optimizing high-performance web solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My core strengths lie in building{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                custom WooCommerce ecosystems
              </span>
              , implementing sophisticated checkout workflows, and seamlessly
              integrating PropFirm and trading platforms.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I have a track record of delivering robust, scalable applications that
              thrive in high-traffic scenarios, while successfully steering projects
              for both emerging startups and well-established enterprises.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently advancing my expertise through a{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Master's degree in Data Science
              </span>
              , with specialized focus on forecasting techniques and predictive analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
