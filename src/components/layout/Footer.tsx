import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold">
              <span className="text-primary-600 dark:text-primary-400">Kuldeep</span>
              <span className="text-gray-900 dark:text-white">Bishnoi</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Frontend developer passionate about creating beautiful, accessible, and user-friendly websites.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://github.com/Kuldeepbishnoi2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kuldeepbishnoi2005/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/kuldeepbishnoi2005?igsh=anllaWJsZXVlNTVm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:kuldeepbeniwal2005@gmail.com" 
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              <p>Raipur, Chhattisgarh</p>
              <p className="mt-2">
                <a href="mailto:kuldeepbeniwal2005@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  kuldeepbeniwal2005@gmail.com
                </a>
              </p>
              <p className="mt-2">
                <a href="tel:+919350821597" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  +91 9350821597
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            © {currentYear} Kuldeep Bishnoi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;