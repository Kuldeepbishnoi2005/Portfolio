import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Mail className="w-12 h-12 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Have a project in mind? I'm currently available for freelance work and exciting opportunities. Let's create something amazing together!
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700 font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Get in Touch <Send size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;