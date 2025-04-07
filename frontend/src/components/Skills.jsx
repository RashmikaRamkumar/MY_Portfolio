import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiTypescript,
} from "react-icons/si";
import "../styles/Skills.css";

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const skills = [
    {
      name: "React",
      icon: <SiReact className="w-8 h-8" />,
      percentage: 90,
      color: "#61DAFB",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-8 h-8" />,
      percentage: 85,
      color: "#F7DF1E",
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="w-8 h-8" />,
      percentage: 95,
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="w-8 h-8" />,
      percentage: 90,
      color: "#1572B6",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-8 h-8" />,
      percentage: 75,
      color: "#339933",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-8 h-8" />,
      percentage: 85,
      color: "#38B2AC",
    },
    {
      name: "Git",
      icon: <SiGit className="w-8 h-8" />,
      percentage: 80,
      color: "#F05032",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-8 h-8" />,
      percentage: 70,
      color: "#3178C6",
    },
  ];

  const [activeSkill, setActiveSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Parallax effect for section title
  const titleY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Container variants with improved staggering
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Enhanced item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.8,
      },
    },
  };

  // Tag cloud variants
  const cloudVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.8,
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

  // Timeline variants
  const timelineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const experiences = [
    {
      year: "2022 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      description:
        "Leading the frontend development team, implementing advanced React architectures and mentoring junior developers.",
      achievements: [
        "Reduced application bundle size by 40%",
        "Implemented CI/CD pipeline for frontend projects",
        "Led migration from Redux to Context API + hooks",
      ],
    },
    {
      year: "2019 - 2022",
      title: "Frontend Developer",
      company: "Innovative Web Co.",
      description:
        "Developed responsive web applications using React, Redux, and various modern JavaScript frameworks.",
      achievements: [
        "Built 15+ responsive web applications",
        "Integrated complex API authentication system",
        "Reduced page load times by 60%",
      ],
    },
    {
      year: "2017 - 2019",
      title: "UI/UX Designer & Developer",
      company: "Creative Agency",
      description:
        "Created user interfaces and implemented them using HTML5, CSS3, and JavaScript.",
      achievements: [
        "Designed award-winning e-commerce interface",
        "Improved user engagement by 35%",
        "Created custom design system for clients",
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  // Handle skill card click for focused view
  const handleSkillClick = (index) => {
    setActiveSkill(activeSkill === index ? null : index);
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4"
          >
            My Skills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            I've developed expertise in these technologies through years of
            hands-on experience and continuous learning.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              onClick={() => handleSkillClick(index)}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`flex flex-col items-center transition-all duration-300 cursor-pointer`}
            >
              <div
                className={`skill-icon-container flex items-center justify-center w-14 h-14 rounded-lg mb-1 transition-all duration-500 ${
                  hoveredSkill === index ? "icon-pulse" : ""
                }`}
                style={{ backgroundColor: `${skill.color}20` }}
              >
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: hoveredSkill === index ? 360 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ color: skill.color }}
                  className="text-3xl"
                >
                  {skill.icon}
                </motion.div>
              </div>
              <h3 className="text-smaa font-semibold text-gray-800 dark:text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill tags cloud with interactive animations */}
        <motion.div
          variants={cloudVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 relative"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8"
          >
            Other Technologies & Tools
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 relative">
            <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 to-transparent rounded-full blur-3xl opacity-30"></div>
            {[
              "Redux",
              "Next.js",
              "GraphQL",
              "SASS",
              "Webpack",
              "Jest",
              "Firebase",
              "Figma",
              "RESTful APIs",
              "MongoDB",
              "PostgreSQL",
              "Express",
              "Material UI",
              "Docker",
              "AWS",
              "GitHub Actions",
            ].map((tag, index) => (
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
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Experience section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-32 mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experience
          </h2>

          <div className="relative py-10">
            {/* Roadmap line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2"></div>

            <motion.div className="flex flex-col gap-6">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => toggleExpand(index)}
                  className={`relative flex flex-col p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${
                    expandedIndex === index ? "h-auto" : "h-20"
                  }`}
                >
                  <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 timeline-year">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 timeline-title">
                    {item.title}
                  </h3>
                  <div className="text-indigo-500 dark:text-indigo-300 font-medium mb-4 timeline-company">
                    {item.company}
                  </div>
                  {expandedIndex === index && (
                    <div className="mt-2">
                      <p className="text-gray-600 dark:text-gray-400 mb-4 timeline-description">
                        {item.description}
                      </p>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-center text-gray-700 dark:text-gray-300"
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
