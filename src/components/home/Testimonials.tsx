import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../lib/data';
import TestimonialCard from '../shared/TestimonialCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Client Testimonials</h2>
          <p className="section-subheading">
            Here's what people are saying about my work and collaboration experience.
          </p>
        </motion.div>
        
        <div className="hidden md:block relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} index={0} />
          </motion.div>
          
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-gray-700 dark:text-gray-300" size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-gray-700 dark:text-gray-300" size={20} />
            </button>
          </div>
          
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'w-6 bg-primary-500 dark:bg-primary-400' 
                    : 'w-2 bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} index={0} />
            </motion.div>
          </div>
          
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-gray-700 dark:text-gray-300" size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-gray-700 dark:text-gray-300" size={20} />
            </button>
          </div>
          
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'w-6 bg-primary-500 dark:bg-primary-400' 
                    : 'w-2 bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;