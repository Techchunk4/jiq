const projects = [
    {
      title: "Project One",
      description: "This is a description of project one. It uses React and Node.js.",
      link: "#"
    },
    {
      title: "Project Two",
      description: "This is a description of project two. It uses Next.js and Tailwind CSS.",
      link: "#"
    },
    {
      title: "Project Three",
      description: "This is a description of project three. It uses Express and MongoDB.",
      link: "#"
    }
  ];
  
  const Projects = () => (
    <section className="py-20 bg-gray-100 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Projects;
  