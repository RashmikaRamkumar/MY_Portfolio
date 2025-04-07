import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects, setProjectModal }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setProjectModal={setProjectModal}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectGrid;
