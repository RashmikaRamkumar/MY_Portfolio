// File: src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiTwitter,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setFormStatus({ isSubmitting: false, isSubmitted: false, error: null });
      }, 3000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#4338ca",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div
      id="contact"
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Contact Information
            </motion.h2>

            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <FiMail className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@example.com"
                    className="text-lg font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    hello@example.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Phone
                  </h3>
                  <a
                    href="tel:+11234567890"
                    className="text-lg font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Location
                  </h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    San Francisco, CA, USA
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-8 flex space-x-6">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                <FiTwitter size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
            >
              Send a Message
            </motion.h2>

            <motion.div variants={itemVariants} className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <FiMessageSquare className="absolute left-3 top-4 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              disabled={formStatus.isSubmitting}
              className="w-full flex justify-center items-center gap-2 px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300 disabled:opacity-50"
            >
              <FiSend />
              {formStatus.isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {formStatus.isSubmitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 dark:text-green-400 text-center font-medium"
              >
                Message sent successfully!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
