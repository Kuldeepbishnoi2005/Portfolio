import { motion } from 'framer-motion';
import { Skill } from '../../lib/data';
import { cn } from '../../lib/utils';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar = ({ skill, index }: SkillBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}/10</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className={cn(
            "h-full rounded-full",
            skill.level >= 8 ? "bg-primary-500" : 
            skill.level >= 6 ? "bg-secondary-500" : 
            "bg-accent-500"
          )}
          style={{ width: `${skill.level * 10}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level * 10}%` }}
          transition={{ 
            duration: 1, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;