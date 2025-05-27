import { motion } from 'framer-motion';
import { skills } from '../../lib/data';

const SkillsShowcase = () => {
  // Get unique categories
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section className="py-20">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">My Toolkit</h2>
          <p className="section-subheading">
            The technologies, frameworks, and tools I use to bring ideas to life.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
              <h3 className="capitalize text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md text-gray-800 dark:text-gray-200 flex items-center"
                    >
                      <span>{skill.name}</span>
                      {skill.level >= 8 && (
                        <span className="ml-2 bg-primary-500 w-2 h-2 rounded-full" title="Expert"></span>
                      )}
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;