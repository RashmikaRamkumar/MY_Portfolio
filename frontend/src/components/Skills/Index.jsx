// src/components/Skills/index.jsx
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SkillsHeader from "./SkillsHeader";
import SkillsGrid from "./SkillsGrid";
import TechCloud from "./TechCloud";
import ExperienceTimeline from "./ExperienceTimeline";
import "../../styles/Skills.css";

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for section title
  const titleY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden "
    >
      <div className="max-w-6xl mx-auto">
        <SkillsHeader titleY={titleY} titleOpacity={titleOpacity} />
        <SkillsGrid isInView={isInView} />
        <TechCloud isInView={isInView} />
        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default Skills;
