const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Company One",
      period: "Jan 2020 - Present",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB."
    },
    {
      role: "Frontend Developer",
      company: "Company Two",
      period: "Jan 2018 - Dec 2019",
      description: "Built responsive and user-friendly interfaces using React and Tailwind CSS."
    },
    {
      role: "Backend Developer",
      company: "Company Three",
      period: "Jan 2016 - Dec 2017",
      description: "Implemented RESTful APIs and managed database operations using Node.js and Express."
    }
  ];
  
  const Experience = () => (
    <section className="py-20 bg-gray-100 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
              <p className="text-gray-600 mb-1">{experience.company}</p>
              <p className="text-gray-500 mb-4">{experience.period}</p>
              <p className="text-gray-700">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Experience;
  