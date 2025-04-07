// src/components/Skills/SkillsGrid.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "./skillsData.jsx"; // Updated extension to .jsx
import SkillCard from "./SkillCard";
import SkillDetail from "./SkillDetail";

const SkillsGrid = ({ isInView }) => {
  const [activeSkill, setActiveSkill] = useState(null);

  // Container variants with improved staggering
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            isActive={activeSkill === index}
            onToggle={() =>
              setActiveSkill(activeSkill === index ? null : index)
            }
          />
        ))}
      </motion.div>

      {activeSkill !== null && (
        <SkillDetail
          skill={skills[activeSkill]}
          onClose={() => setActiveSkill(null)}
        />
      )}
    </>
  );
};

export default SkillsGrid;
