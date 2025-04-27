
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Languages from "@/components/Languages";
import ExtraCurricular from "@/components/ExtraCurricular";
import { ThemeProvider, ThemeToggle } from "@/contexts/ThemeContext";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="font-inter text-dark-text transition-colors duration-300 dark:bg-dark-bg sombre:bg-[#1A1F2C]">
        <ThemeToggle />
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Languages />
        <ExtraCurricular />
      </div>
    </ThemeProvider>
  );
};

export default Index;
