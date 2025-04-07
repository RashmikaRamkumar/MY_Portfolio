// src/components/Skills/SkillDetail.jsx
import { motion } from "framer-motion";

const SkillDetail = ({ skill, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="mt-6 mb-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 relative"
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="flex items-center mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
          style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
        >
          {skill.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {skill.name}
        </h3>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Proficiency
          </span>
          <span className="text-sm font-medium" style={{ color: skill.color }}>
            {skill.percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.percentage}%` }}
            transition={{ duration: 1 }}
            className="h-2.5 rounded-full relative"
            style={{ backgroundColor: skill.color }}
          >
            <div className="progress-shimmer absolute inset-0 w-full h-full"></div>
          </motion.div>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>

      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
          Related Projects
        </h4>
        <div className="flex flex-wrap gap-2">
          {["Project Alpha", "Project Beta", "Project Gamma"].map((project) => (
            <span
              key={project}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
            >
              {project}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillDetail;
