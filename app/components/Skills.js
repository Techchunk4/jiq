const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "Docker"
  ];
  
  const Skills = () => (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center space-x-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Skills;
  