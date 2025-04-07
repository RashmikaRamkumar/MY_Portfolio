// src/components/Skills/SkillsHeader.jsx
import { motion } from "framer-motion";

const SkillsHeader = ({ titleY, titleOpacity }) => {
  return (
    <motion.div
      style={{ y: titleY, opacity: titleOpacity }}
      className="text-center mb-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4"
      >
        My Skills
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I've developed expertise in these technologies through years of
          hands-on experience and continuous learning.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6"></div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsHeader;
