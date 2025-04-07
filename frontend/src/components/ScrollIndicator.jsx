// File: src/components/ScrollIndicator.jsx
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  const scrollToNextSection = () => {
    console.log("Scrolling down...");
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer  p-2 rounded shadow"
      onClick={scrollToNextSection}
    >
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Scroll down
        </span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
