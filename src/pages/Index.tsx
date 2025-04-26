
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Languages from "@/components/Languages";

const Index = () => {
  return (
    <div className="font-inter">
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Languages />
    </div>
  );
};

export default Index;
