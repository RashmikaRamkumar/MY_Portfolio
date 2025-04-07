// src/components/Skills/ExperienceCard.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative sm:w-1/2 ml-6 sm:ml-0"
      style={{
        marginLeft: isEven ? "auto" : "",
        marginRight: isEven ? "" : "auto",
      }}
    >
      {/* Timeline dot */}
      <div className="absolute w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-800 left-[-30px] sm:left-auto sm:right-[-2px] sm:translate-x-1/2 top-5 z-10" />

      {/* Pulsing circle for emphasis */}
      <div className="absolute w-8 h-8 rounded-full bg-indigo-500/20 left-[-36px] sm:left-auto sm:right-[-6px] sm:translate-x-1/2 top-3 timeline-pulse z-0" />

      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`experience-card mx-auto sm:mx-0 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-indigo-500 ${
          isExpanded ? "h-auto" : ""
        }`}
      >
        <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 timeline-year">
          {experience.year}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 timeline-title">
          {experience.title}
        </h3>
        <div className="text-indigo-500 dark:text-indigo-300 font-medium mb-4 timeline-company">
          {experience.company}
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4 timeline-description">
            {experience.description}
          </p>
          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
            Key Achievements:
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-center text-gray-700 dark:text-gray-300"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-2"
                ></motion.span>
                {achievement}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="flex justify-center mt-3">
          <button
            className="text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? (
              <span className="flex items-center">
                <span className="mr-1">Show less</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>
            ) : (
              <span className="flex items-center">
                <span className="mr-1">Show more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
