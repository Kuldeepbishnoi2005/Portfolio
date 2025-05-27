import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '../shared/ProjectCard';
import { projects } from '../../lib/data';

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            Check out some of my recent work that showcases my frontend development skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
          >
            View all projects <ArrowRight size={20} className="ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;