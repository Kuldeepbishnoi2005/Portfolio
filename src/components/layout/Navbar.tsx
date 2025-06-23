import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useTheme } from '../theme/ThemeProvider';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    > 
      <div className="container flex justify-between items-center">
        <NavLink 
          to="/"
          className="text-xl md:text-2xl font-bold"
          onClick={closeMobileMenu}
        >
          <span className="text-primary-400 dark:text-primary-400">Kuldeep</span>
          <span className="text-gray-200 dark:text-white">Bishnoi</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({isActive}) => cn(
              'font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400',
              isActive ? 'text-primary-300 dark:text-primary-400' : 'text-gray-300 dark:text-gray-300'
            )}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className={({isActive}) => cn(
              'font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400',
              isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-300 dark:text-gray-300'
            )}
          >
            About
          </NavLink>
          <NavLink 
            to="/projects"
            className={({isActive}) => cn(
              'font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400',
              isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-300 dark:text-gray-300'
            )}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact"
            className={({isActive}) => cn(
              'font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400',
              isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-300 dark:text-gray-300'
            )}
          >
            Contact
          </NavLink>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-300 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 absolute w-full left-0 top-full shadow-lg"
          >
            <nav className="container flex flex-col py-6 space-y-4">
              <NavLink 
                to="/"
                className={({isActive}) => cn(
                  'py-2 font-medium transition-colors',
                  isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-800 dark:text-gray-200'
                )}
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about"
                className={({isActive}) => cn(
                  'py-2 font-medium transition-colors',
                  isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-800 dark:text-gray-200'
                )}
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
              <NavLink 
                to="/projects"
                className={({isActive}) => cn(
                  'py-2 font-medium transition-colors',
                  isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-800 dark:text-gray-200'
                )}
                onClick={closeMobileMenu}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/contact"
                className={({isActive}) => cn(
                  'py-2 font-medium transition-colors',
                  isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-800 dark:text-gray-200'
                )}
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
              <a
                href="https://drive.google.com/file/d/10KiP61gjljGgsaWw2sPEWXXlS4q5Q3ef/view?usp=drive_link"
                className="btn btn-primary text-center"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                View Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
