import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectFilter from "../components/Projects/ProjectFilter";
import ProjectGrid from "../components/Projects/ProjectGrid";
import ProjectModal from "../components/Projects/ProjectModal";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projectModal, setProjectModal] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filters = ["All", "Web App", "Landing Page", "E-commerce", "Dashboard"];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "/api/placeholder/600/400",
      description:
        "A full-featured e-commerce platform with product filtering, cart functionality, and secure payment processing.",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe API"],
      link: "#",
      github: "#",
      features: [
        "User authentication & authorization",
        "Product search & filtering",
        "Shopping cart & wishlist",
        "Secure payment processing",
        "Order tracking & history",
      ],
    },
    {
      id: 2,
      title: "Admin Dashboard",
      category: "Dashboard",
      image: "/api/placeholder/600/400",
      description:
        "A comprehensive admin dashboard with analytics, user management, and content moderation tools.",
      technologies: ["React", "TypeScript", "Chart.js", "Firebase"],
      link: "#",
      github: "#",
      features: [
        "Real-time data visualization",
        "User management system",
        "Content moderation tools",
        "Performance analytics",
        "Customizable widgets",
      ],
    },
    {
      id: 3,
      title: "Travel Agency Website",
      category: "Landing Page",
      image: "/api/placeholder/600/400",
      description:
        "A visually stunning travel agency website with destination browsing and booking capabilities.",
      technologies: [
        "React",
        "Framer Motion",
        "Tailwind CSS",
        "Contentful CMS",
      ],
      link: "#",
      github: "#",
      features: [
        "Interactive destination maps",
        "Tour booking system",
        "Review & rating system",
        "Travel blog integration",
        "Multi-language support",
      ],
    },
    {
      id: 4,
      title: "Task Management App",
      category: "Web App",
      image: "/api/placeholder/600/400",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Redux", "Socket.io", "Express", "MongoDB"],
      link: "#",
      github: "#",
      features: [
        "Drag-and-drop task organization",
        "Real-time collaboration",
        "Task commenting & attachments",
        "Time tracking",
        "Automated reminders",
      ],
    },
    {
      id: 5,
      title: "Finance Dashboard",
      category: "Dashboard",
      image: "/api/placeholder/600/400",
      description:
        "A financial dashboard for tracking investments, expenses, and financial goals with data visualization.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "#",
      github: "#",
      features: [
        "Investment portfolio tracking",
        "Expense categorization",
        "Budget planning tools",
        "Financial goal setting",
        "Advanced data visualization",
      ],
    },
    {
      id: 6,
      title: "Restaurant Ordering System",
      category: "Web App",
      image: "/api/placeholder/600/400",
      description:
        "An online ordering system for restaurants with menu management and order tracking.",
      technologies: ["React", "Firebase", "Stripe", "Tailwind CSS"],
      link: "#",
      github: "#",
      features: [
        "Digital menu management",
        "Online ordering system",
        "Table reservation",
        "Kitchen order notifications",
        "Customer loyalty program",
      ],
    },
  ];

  // Simulate loading and filter projects
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const filtered =
        activeFilter === "All"
          ? projects
          : projects.filter((project) => project.category === activeFilter);
      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 300);
  }, [activeFilter]);

  // Close modal when escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && projectModal) {
        setProjectModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [projectModal]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (projectModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [projectModal]);

  return (
    <div
      id="projects"
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative">
            My Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            A collection of my latest work showcasing my skills and experience
            in web development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <ProjectFilter
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Loading State */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-20"
            >
              <div className="w-12 h-12 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin"></div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredProjects.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <svg
                    className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                    No projects found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Try selecting a different filter
                  </p>
                </motion.div>
              ) : (
                <ProjectGrid
                  projects={filteredProjects}
                  setProjectModal={setProjectModal}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {projectModal && (
            <ProjectModal
              project={projectModal}
              setProjectModal={setProjectModal}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
