// File: src/pages/Home.jsx
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";
import ParticlesBackground from "../components/ParticlesBackground";
import ScrollIndicator from "../components/ScrollIndicator";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills/Index";
// import image from "../assets/image.jpeg"; // Adjust the path as necessary

const Home = () => {
  const { isDark } = useContext(ThemeContext);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Social icon animation variants
  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.15,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <ParticlesBackground />

      <div className="max-w-6xl w-full mt-16 sm:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <motion.h2
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-sm sm:text-base font-medium text-indigo-600 dark:text-indigo-400"
            >
              Hello, I'm
            </motion.h2>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
            >
              Rashmika K R
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300"
            >
              Frontend Developer & UI/UX Designer
            </motion.p>
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-6 text-base text-gray-600 dark:text-gray-400 max-w-lg"
            >
              Creating beautiful, responsive and interactive web experiences
              with modern technologies and design principles.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 transition-colors duration-300"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="px-6 py-3 rounded-lg bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                View Projects
              </motion.a>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={socialVariants}
              className="mt-10 flex space-x-6"
            >
              {[
                {
                  icon: <FiGithub className="w-6 h-6" />,
                  url: "https://github.com/",
                },
                {
                  icon: <FiLinkedin className="w-6 h-6" />,
                  url: "https://linkedin.com/",
                },
                {
                  icon: <FiTwitter className="w-6 h-6" />,
                  url: "https://twitter.com/",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-xl"
              >
                <img
                  // src={image}
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="text-sm font-medium">
                  10+ Years Experience
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* <ScrollIndicator /> */}
    </div>
  );
};

export default Home;
