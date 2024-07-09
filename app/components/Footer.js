import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-blue-500 text-white py-4">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Abdelkader. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/Techchunk4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/abdelkader-ismail/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
