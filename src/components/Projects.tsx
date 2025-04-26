
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bot, Code, Computer, ChartLine, Github } from "lucide-react";

const projects = [
  {
    title: "Towards HR 4.0",
    description: "Système de reconnaissance faciale pour l'identification des traits du visage des employés et analyse prédictive de leur performance",
    tech: ["Raspberry Pi", "Python", "Flask/FastAPI", "OpenCV", "MQTT"],
    status: "En cours",
    icon: ChartLine,
    color: "bg-blue-500",
    github: "https://github.com/AYMAN-CHAREF/Towards-HR-4.0"
  },
  {
    title: "Contrôle numérique machine à courant continu",
    description: "Commande par Modulation de Largeur d'Impulsion (MLI)",
    tech: ["MATLAB", "SIMULINK"],
    status: "2024",
    icon: Computer,
    color: "bg-purple-500"
  },
  {
    title: "Smart Breakfast",
    description: "Système intelligent pour l'automatisation du petit déjeuner avec intégration d'un bras robotique et d'un convoyeur",
    tech: ["Arduino IDE", "ESP32", "Capteur ultrasonique"],
    status: "2024",
    icon: Bot,
    color: "bg-green-500",
    github: "https://github.com/AYMAN-CHAREF/Distributeur-automatique-des-toasts-tartin-s"
  },
  {
    title: "Onduleur monophasé",
    description: "Étude et réalisation d'un onduleur monophasé avec contrôle des instants de commutation des transistors",
    tech: ["Arduino IDE", "ISIS PROTEUS", "KiCad"],
    status: "2023",
    icon: Code,
    color: "bg-orange-500",
    github: "https://github.com/AYMAN-CHAREF/Single-phase-inverter"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projets</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-2 rounded-lg ${project.color}`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{project.status}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
