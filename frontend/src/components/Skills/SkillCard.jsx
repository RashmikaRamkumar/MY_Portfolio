// src/components/Skills/SkillCard.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index, isActive, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Enhanced item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.8,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -10,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="skill-card bg-white dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600"
    >
      <div
        className={`skill-icon-container flex items-center justify-center w-16 h-16 rounded-xl mb-3 transition-all duration-500 ${
          isHovered ? "icon-pulse" : ""
        }`}
        style={{ backgroundColor: `${skill.color}20` }}
      >
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isHovered ? 360 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ color: skill.color }}
          className="text-3xl"
        >
          {skill.icon}
        </motion.div>
      </div>
      <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-1">
        {skill.name}
      </h3>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.percentage}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="skill-progress-bar h-full rounded-full relative"
          style={{ backgroundColor: skill.color }}
        >
          <div className="progress-shimmer absolute inset-0 w-full h-full"></div>
        </motion.div>
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {skill.percentage}%
      </div>
    </motion.div>
  );
};

export default SkillCard;
