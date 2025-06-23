import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-primary-900 opacity-90">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container pt-24 md:pt-32 pb-16 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="flex-1 md:order-1 order-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-xl">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Software Engineering Student
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Hello! I'm <span className="font-semibold text-primary-400">Kuldeep Bishnoi</span>, a passionate Software Engineering Student based in Raipur. I am currently pursuing my B.Tech from Shri Shankaracharya Technical Campus, Bhilai, affiliated with CSVTU University.
              </motion.p>
              
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/contact" className="btn btn-primary">
                  Get In Touch
                </Link>
                <Link to="/projects" className="btn btn-outline border-gray-300 text-white hover:bg-white/10">
                  View My Work
                </Link>
              </motion.div>
              
              <motion.div 
                className="mt-8 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a 
                  href="https://github.com/Kuldeepbishnoi2005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kuldeepbishnoi2005/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/kuldeepbishnoi2005?igsh=anllaWJsZXVlNTVm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 md:order-2 order-1 h-[400px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://res.cloudinary.com/dx1hmda5v/image/upload/v1750670391/file_00000000dce8622f95eb5dbf4a7e6a48_nx9mkc.png" 
              alt="Kuldeep Bishnoi - Frontend Developer"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button 
            onClick={scrollToProjects}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Scroll to projects"
          >
            <ChevronDown className="text-white" />
          </button>
          <span className="text-sm text-gray-300 mt-2">Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
