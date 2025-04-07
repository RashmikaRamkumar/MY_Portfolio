import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

const ProjectModal = ({ project, setProjectModal }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={overlayVariants}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={() => setProjectModal(null)}
    >
      <motion.div
        variants={modalVariants}
        className="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setProjectModal(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
            aria-label="Close modal"
          >
            <FiX className="w-5 h-5" />
          </motion.button>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="inline-block w-6 h-0.5 bg-indigo-600 mr-2"></span>
              Key Features
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-600 dark:text-gray-400"
                >
                  <svg
                    className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="inline-block w-6 h-0.5 bg-indigo-600 mr-2"></span>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300 font-medium"
            >
              <FiGithub className="w-5 h-5" /> View Code
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300 font-medium shadow-md shadow-indigo-200 dark:shadow-indigo-900/30"
            >
              <FiExternalLink className="w-5 h-5" /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
