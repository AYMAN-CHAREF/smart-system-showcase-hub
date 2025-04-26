
import { motion } from "framer-motion";

const skills = [
  { category: "System Design", items: ["Architecture", "Integration", "Optimization"] },
  { category: "Technologies", items: ["IoT", "Cloud Computing", "Big Data"] },
  { category: "Programming", items: ["Python", "C++", "JavaScript"] },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
