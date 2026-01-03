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
              Hey there! I'm a developer who's been playing around with WordPress and
              e-commerce for{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                over 10 years now
              </span>
              . Yeah, I've built quite a few things along the way!
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I really enjoy building{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                custom online stores
              </span>
              , creating smooth checkout experiences, and connecting different platforms
              together. Whether it's a WooCommerce site or integrating third-party platforms,
              I'm all about making things work seamlessly.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I've worked with all kinds of projects from scrappy startups to bigger
              companies and I love the challenge of building stuff that can handle
              real world traffic and actually helps businesses grow.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              These days, I'm also diving into{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Data Science
              </span>
              {' '}(working on my Master's degree!), learning about forecasting and
              analytics. Because why not mix web dev with data, right?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
