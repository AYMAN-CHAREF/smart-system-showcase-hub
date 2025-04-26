
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Home Automation",
    description: "Developed an integrated home automation system using IoT sensors and ML algorithms",
    tech: ["IoT", "Machine Learning", "Python"],
    color: "bg-blue-500"
  },
  {
    title: "Industrial IoT Platform",
    description: "Created a scalable IoT platform for industrial monitoring and control",
    tech: ["React", "Node.js", "MQTT"],
    color: "bg-purple-500"
  },
  {
    title: "Predictive Maintenance System",
    description: "Implemented predictive maintenance using sensor data and advanced analytics",
    tech: ["Data Analysis", "Python", "TensorFlow"],
    color: "bg-orange-500"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-lg ${project.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
