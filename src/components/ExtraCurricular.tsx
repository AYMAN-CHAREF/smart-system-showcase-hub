import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Card } from "./ui/card";

const ExtraCurricular = () => {
  const activities = [
    {
      organization: "Hult Prize Foundation",
      role: "Campus Director",
      year: "2023"
    },
    {
      organization: "Association des Clubs de la FSTH",
      role: "Responsable Média et Communication",
      year: "2022"
    },
    {
      organization: "Enactus FSTH",
      role: "Graphic Designer et Media Manager",
      year: "2021"
    }
  ];

  const awards = [
    "Prix du Programme Mondial de l'Année – 1er finaliste",
    "Prix du Programme Mondial de l'Année dans la région MENA"
  ];

  const certifications = [
    {
      name: "English Access Microscholarship Program",
      description: "Programme sponsorisé par le Département d'État des États-Unis"
    }
  ];

  return (
    <section className="py-20 bg-dark-bg" id="extracurricular">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark-text">Extra-scolaires</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Activités</h3>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.role} className="border-b pb-4 last:border-0">
                    <h4 className="font-medium">{activity.organization}</h4>
                    <p className="text-gray-600">{activity.role}</p>
                    <p className="text-sm text-gray-500">{activity.year}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-yellow-500" />
                <h3 className="text-xl font-semibold">Prix Hult Prize</h3>
              </div>
              <ul className="space-y-2">
                {awards.map((award) => (
                  <li key={award} className="text-gray-600">
                    {award}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
