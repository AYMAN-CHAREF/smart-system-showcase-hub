
import { motion } from "framer-motion";
import { Language } from "lucide-react";
import { Card } from "./ui/card";

const Languages = () => {
  const languages = [
    { name: "Anglais", level: "Courant" },
    { name: "Français", level: "Courant" },
    { name: "Arabe", level: "Maternelle" },
    { name: "Chinois", level: "Basique" }
  ];

  return (
    <section className="py-20 bg-white" id="languages">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Langues</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Language className="h-8 w-8 mx-auto mb-4 text-blue-500" />
                <h3 className="font-semibold mb-2">{lang.name}</h3>
                <p className="text-sm text-gray-600">{lang.level}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
