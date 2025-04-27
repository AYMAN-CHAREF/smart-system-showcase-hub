import { motion } from "framer-motion";
import { GraduationCap, School, Award } from "lucide-react";
import { Card } from "./ui/card";

const Education = () => {
  const education = [
    {
      school: "Ecole Nationale Supérieure de l'Informatique et d'Analyse des Systèmes",
      location: "Rabat, Maroc",
      degree: "Smart System Engineering (SSE)",
      period: "Septembre 2023 - Aujourd'hui",
      icon: GraduationCap
    },
    {
      school: "Faculté des Sciences et Techniques d'Al-Hoceima",
      location: "Al-Hoceima, Maroc",
      degree: "Licence en Electronique, Electrotechnique et Automatique (EEA)",
      period: "Septembre 2022 - Juin 2023",
      icon: School
    },
    {
      school: "Faculté des Sciences et Techniques d'Al-Hoceima",
      location: "Al-Hoceima, Maroc",
      degree: "DEUST en Mathématiques, Informatique et Physique (MIP)",
      period: "Septembre 2020 - Juin 2022",
      icon: School
    },
    {
      school: "Lycée Moulay Ali Cherif",
      location: "Al-Hoceima, Maroc",
      degree: "Baccalauréat en Sciences Physiques — Mention Très Bien",
      period: "Juin 2019",
      icon: Award
    }
  ];

  return (
    <section className="py-20 bg-dark-bg" id="education">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark-text">Diplômes et Formations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <item.icon className="text-blue-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.school}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.location}</p>
                    <p className="text-base mb-2">{item.degree}</p>
                    <p className="text-sm text-gray-600">{item.period}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
