export default function Education() {
  const education = [
    {
      degree: "Master's Degree, Data Science",
      institution: 'Institut Teknologi dan Bisnis STIKOM Bali',
      status: 'Currently in Thesis Phase',
      description: 'Focus: Forecasting & Predictive Modeling using Machine Learning',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      degree: "Bachelor's Degree, Computer Science",
      institution: 'STMIK Bandung Bali',
      status: 'Completed',
      description:
        "Bachelor's Thesis: Decision Support System using AHP (Analytical Hierarchy Process) Method",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="education" className="py-24 section-glass">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 tracking-tight">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl glass-card hover:border-purple-500/50 transition-all duration-500 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-purple-600/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-gray-700 dark:text-gray-300 font-semibold mb-1">
                    {edu.institution}
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full text-sm bg-purple-600/20 text-purple-600 dark:text-purple-400 mb-3">
                    {edu.status}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
