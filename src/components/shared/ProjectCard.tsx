import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../../lib/data';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 h-full",
        "hover:shadow-xl hover:scale-[1.02] group"
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 flex gap-2">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-500 transition-colors"
                aria-label="View live site"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-500 transition-colors"
                aria-label="View on GitHub"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          {project.featured && (
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <Link 
          to={`/projects/${project.id}`}
          className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
        >
          View details <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;