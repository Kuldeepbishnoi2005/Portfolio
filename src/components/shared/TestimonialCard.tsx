import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../lib/data';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Quote className="text-primary-300 dark:text-primary-700 mb-4" size={32} />
      
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.position} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;