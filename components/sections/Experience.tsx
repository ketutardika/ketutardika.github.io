export default function Experience() {
  const experiences = [
    {
      title: 'Senior WordPress Developer',
      company: 'PT. IBMC Business Group',
      period: '2022 - Present',
      achievements: [
        'Integrated WooCommerce with trading and PropFirm platforms for seamless Forex account provisioning.',
        'Developed custom plugins to automate workflows, reducing manual operational tasks.',
        'Built scalable themes and advanced checkout systems optimized for high-traffic environments.',
      ],
    },
    {
      title: 'WordPress Developer',
      company: 'PT. Turnkey Properties Indonesia',
      period: '2019 - 2022',
      achievements: [
        'Developed property management websites with advanced search and filtering features.',
        'Integrated third-party APIs for property data synchronization and CRM workflows.',
      ],
    },
    {
      title: 'Project Manager',
      company: 'Rumahkost.com',
      period: '2017 - 2019',
      achievements: [
        'Led end-to-end development of a property rental marketplace from concept to launch.',
        'Managed product roadmap, sprint planning, and cross-functional team coordination.',
      ],
    },
    {
      title: 'WordPress Developer',
      company: 'PT. Astro Pertama Indonesia & PT. Total Business Incorporated',
      period: '2013 - 2017',
      achievements: [
        'Delivered corporate and booking websites for multiple clients across industries.',
        'Provided maintenance, optimization, and technical support for client platforms.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 section-glass">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 tracking-tight">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-600/30 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-purple-600 rounded-full transform md:-translate-x-1/2 ring-4 ring-white dark:ring-gray-900"></div>

                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  <div className="p-6 rounded-3xl glass-card hover:border-purple-500/50 transition-all duration-500">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {exp.company}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <svg
                            className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
