import { motion } from "framer-motion";

const ProjectFilter = ({ filters, activeFilter, setActiveFilter }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {filters.map((filter) => (
        <motion.button
          key={filter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(filter)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            activeFilter === filter
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/30"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ProjectFilter;
