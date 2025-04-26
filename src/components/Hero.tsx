
import { motion } from "framer-motion";
import { Code, Cpu, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Systems
            <span className="text-blue-500"> Engineer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Crafting intelligent solutions through innovative system design and integration
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Code className="text-blue-500" />
              <span>System Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="text-purple-500" />
              <span>IoT Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="text-orange-500" />
              <span>Smart Integration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
