// src/components/Skills/ExperienceTimeline.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "./skillsData.jsx"; // Updated extension to .jsx
import ExperienceCard from "./ExperienceCard";

const ExperienceTimeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="mt-32 mb-16"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Experience
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12"
      ></motion.div>

      <div className="relative py-10">
        {/* Roadmap line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2 timeline-stripe"></div>

        <motion.div className="flex flex-col gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;
