
import { motion } from "framer-motion";
import { Briefcase, Code } from "lucide-react";
import { Card } from "./ui/card";

const Experience = () => {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience Professionnelle</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <Briefcase className="text-purple-500 h-6 w-6" />
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">NEXOTEK</h3>
                    <p className="text-sm text-gray-500">Rabat, Maroc</p>
                  </div>
                  <span className="text-sm text-gray-500">Juillet - Août 2024</span>
                </div>
                <p className="font-medium mt-2">Data Scientist - Stage de fin de 1ère année</p>
                <div className="mt-4">
                  <p className="font-medium mb-2">Digitalisation et Traitement des Chèques:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Développement d'un système de reconnaissance automatique des montants et dates sur les chèques en utilisant l'OCR.</li>
                  </ul>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-600">Outils :</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Python", "TensorFlow", "OpenCV", "Hugging Face", "Git"].map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
