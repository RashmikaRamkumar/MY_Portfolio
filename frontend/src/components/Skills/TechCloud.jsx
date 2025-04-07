// src/components/Skills/TechCloud.jsx
import { motion } from "framer-motion";
import { otherTechnologies } from "./skillsData.jsx"; // Updated extension to .jsx

const TechCloud = ({ isInView }) => {
  // Tag cloud variants
  const cloudVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={cloudVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mt-24 relative"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8"
      >
        Other Technologies & Tools
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3 relative p-8">
        <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 to-transparent rounded-full blur-3xl opacity-30"></div>
        {otherTechnologies.map((tag, index) => (
          <motion.span
            key={tag}
            variants={tagVariants}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#4f46e5",
              color: "#fff",
              boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)",
            }}
            className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-300 border border-gray-200 dark:border-gray-700 tag-item"
            style={{
              fontSize: `${Math.random() * 0.3 + 0.9}rem`,
              opacity: Math.random() * 0.3 + 0.7,
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default TechCloud;
