import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronLeft, ExternalLink, Github } from 'lucide-react';
import { projects, Project } from '../lib/data';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setLoading(true);
    const foundProject = projects.find(p => p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
      setLoading(false);
      
      // Update page title
      document.title = `${foundProject.title} | Jane Doe's Portfolio`;
    } else {
      // Project not found, navigate to projects page
      navigate('/projects', { replace: true });
    }
  }, [id, navigate]);

  if (loading || !project) {
    return (
      <div className="pt-32 pb-20 container">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-pulse flex space-x-4 items-center">
            <div className="h-4 w-4 rounded-full bg-primary-400"></div>
            <div className="h-4 w-24 bg-primary-400 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Kuldeep Bishnoi </title>
        <meta name="description" content={project.description} />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
          >
            <ChevronLeft size={20} className="mr-1" /> Back to all projects
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {project.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Site <ExternalLink size={18} className="ml-2" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      View Code <Github size={18} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Other Projects You Might Like
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {projects
                    .filter(p => p.id !== project.id)
                    .slice(0, 2)
                    .map((relatedProject, index) => (
                      <Link 
                        key={relatedProject.id} 
                        to={`/projects/${relatedProject.id}`}
                        className="group"
                      >
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                          <div className="h-40 overflow-hidden">
                            <img 
                              src={relatedProject.image} 
                              alt={relatedProject.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {relatedProject.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;