import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { skills } from '../../lib/data';
import SkillBar from '../shared/SkillBar';

const AboutPreview = () => {
  const topSkills = skills
    .filter(skill => skill.category === 'frontend')
    .sort((a, b) => b.level - a.level)
    .slice(0, 5);

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-heading">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hello! I'm Kuldeep Bishnoi, a passionate Software Engineering Student based in Raipur. I am currently pursuing my B.Tech from Shri Shankaracharya Technical Campus, Bhilai, affiliated with CSVTU University.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My expertise lies in Web Design and Front-End Development, where I focus on creating seamless user experiences with clean and efficient code. I love exploring new technologies and constantly improving my skills to keep up with the ever-evolving world of web development.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Beyond coding, I enjoy playing badminton, going for a swim, and meeting new people. I believe that every connection brings new learning and opportunities.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I'm excited to collaborate on innovative projects and contribute to impactful solutions. Let's connect and create something amazing together!
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More About Me
            </Link>
          </motion.div>
          
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Top Skills
            </h3>
            
            <div className="space-y-4">
              {topSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
            
            <div className="mt-8">
              <Link 
                to="/about" 
                className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium inline-flex items-center transition-colors"
              >
                View all skills
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;