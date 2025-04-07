import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiInfo } from "react-icons/fi";

const ProjectCard = ({ project, setProjectModal }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900/30"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span className="inline-block text-xs font-semibold text-white px-2 py-1 rounded bg-gradient-to-r from-indigo-600 to-purple-600 mb-3 self-start">
            {project.category}
          </span>
          <div className="flex justify-end space-x-2 mb-2">
            <motion.a
              whileHover={{ y: -3 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-colors duration-300"
              aria-label="View GitHub repository"
            >
              <FiGithub className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-colors duration-300"
              aria-label="View live demo"
            >
              <FiExternalLink className="w-4 h-4" />
            </motion.a>
            <motion.button
              whileHover={{ y: -3 }}
              onClick={() => setProjectModal(project)}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-colors duration-300"
              aria-label="View project details"
            >
              <FiInfo className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
