import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => (
  <section className="flex flex-col items-center justify-center h-screen bg-blue-500 text-white px-4">
    <img
      src="/profile.jpg"
      alt="Profile Image"
      className="w-52 h-52 rounded-full mb-4"
    />
    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
      Welcome to My Portfolio
    </h1>
    <p className="text-lg sm:text-2xl mb-6 text-center">
      I'm a Full-Stack Developer
    </p>
    <div className="flex space-x-4">
      <a
        href="https://github.com/Techchunk4"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl sm:text-4xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/abdelkader-ismail/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl sm:text-4xl"
      >
        <FaLinkedin />
      </a>
    </div>
  </section>
);

export default Hero;
