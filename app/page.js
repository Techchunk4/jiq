import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Expierence";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
      <Logo />
    </div>
  );
}
