import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { skills, experiences, education } from '../lib/data';
import SkillBar from '../components/shared/SkillBar';

const About = () => {
  // Organize skills by category
  const skillsByCategory = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    design: skills.filter(skill => skill.category === 'design'),
    tools: skills.filter(skill => skill.category === 'tools')
  };

  return (
    <>
      <Helmet>
        <title>About Me | Kuldeep Bishnoi</title>
        <meta name="description" content="Learn about Jane Doe's background, skills, education and professional experience as a Frontend Developer." />
      </Helmet>

      <section className="pt-32 pb-12">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Get to know more about my skills, experience, and background.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://res.cloudinary.com/dx1hmda5v/image/upload/v1750670391/file_00000000dce8622f95eb5dbf4a7e6a48_nx9mkc.png" 
                alt="Jane Doe - Frontend Developer"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
              
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Facts
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium text-gray-700 dark:text-gray-300 min-w-[120px]">Location:</span>
                    <span className="text-gray-600 dark:text-gray-400">Raipur, Chhattisgarh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-gray-700 dark:text-gray-300 min-w-[120px]">Experience:</span>
                    <span className="text-gray-600 dark:text-gray-400">Fresher</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-gray-700 dark:text-gray-300 min-w-[120px]">Languages:</span>
                    <span className="text-gray-600 dark:text-gray-400">English, Hindi, Haryanvi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-gray-700 dark:text-gray-300 min-w-[120px]">Availability:</span>
                    <span className="text-gray-600 dark:text-gray-400">Freelance & Part-time opportunities</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <a 
                    href="https://drive.google.com/file/d/10KiP61gjljGgsaWw2sPEWXXlS4q5Q3ef/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary w-full flex justify-center items-center"
                  >
                    <Download size={18} className="mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  My Story
                </h2>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Hello! I'm kuldeep Bishnoi, a passionate frontend developer based in Raipur. My journey into web development began during my computer science studies at the College at Raipur , where I discovered my love for creating beautiful, interactive user interfaces.
                  </p>
            
                  <p>
                    As I advanced in my career, I embraced modern frameworks like React and Vue.js, alongside tools like TypeScript and Tailwind CSS. Working at InnovateUI exposed me to various client projects, from e-commerce platforms to complex dashboards, where I developed a knack for translating design mockups into seamless user experiences.
                  </p>
                  <p>
                    Currently, as a Senior Frontend Developer at TechFront Solutions, I lead the frontend development of a SaaS platform, focusing on performance optimization, accessibility, and component architecture. I'm passionate about clean code, performance optimization, and creating accessible user experiences.
                  </p>
                  <p>
                    Outside of coding, I enjoy hiking, photography, and attending tech conferences where I occasionally speak about frontend development topics. I'm always eager to learn new technologies and techniques to keep evolving as a developer.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Skills & Expertise
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Frontend Development
                    </h3>
                    <div className="space-y-3">
                      {skillsByCategory.frontend.map((skill, index) => (
                        <SkillBar key={skill.name} skill={skill} index={index} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Backend Development
                    </h3>
                    <div className="space-y-3">
                      {skillsByCategory.backend.map((skill, index) => (
                        <SkillBar key={skill.name} skill={skill} index={index} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Design
                    </h3>
                    <div className="space-y-3">
                      {skillsByCategory.design.map((skill, index) => (
                        <SkillBar key={skill.name} skill={skill} index={index} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Tools & Other
                    </h3>
                    <div className="space-y-3">
                      {skillsByCategory.tools.map((skill, index) => (
                        <SkillBar key={skill.name} skill={skill} index={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp) => (
                <motion.div 
                  key={exp.id} 
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <p className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  
                  <ul className="list-disc list-outside ml-5 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Education
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu) => (
                <motion.div 
                  key={edu.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {edu.field}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
