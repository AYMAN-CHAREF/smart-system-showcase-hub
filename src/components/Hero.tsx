import { motion } from "framer-motion";
import { Code, Cpu, Globe, Mail, Phone, Linkedin, github, MapPin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-bg to-dark-accent">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-dark-text mb-6">
              Smart Systems
              <span className="text-blue-500"> Engineer</span>
            </h1>
            <p className="text-xl text-dark-muted mb-8 max-w-2xl">
              Crafting intelligent solutions through innovative system design and integration
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
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

            {/* Contact Information */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <a 
                href="mailto:eg.aymancharef@gmail.com" 
                className="text-dark-muted hover:text-white transition-colors flex items-center gap-2"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5 text-blue-500" />
                <span>eg.aymancharef@gmail.com</span>
              </a>
              <a 
                href="tel:+212664677279" 
                className="text-dark-muted hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-green-500" />
                <span>+212 664-677279</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ayman-charef-b57221236/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-muted hover:text-white transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5 text-blue-700" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/AYMAN-CHAREF" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-muted hover:text-white transition-colors flex items-center gap-2"
              >
                <github className="w-5 h-5 text-gray-500" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/8de73662-d10a-42c1-87a6-f028bacb7ae9.png"
                alt="Smart Systems Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
