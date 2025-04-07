// File: src/components/Cursor.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth < 768) {
      setHidden(true);
      return;
    }

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 z-50 pointer-events-none rounded-full bg-indigo-600 mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: clicked ? 0.5 : 1,
        }}
        style={{
          width: "8px",
          height: "8px",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.15,
        }}
      />
      <motion.div
        className="cursor-ring fixed top-0 left-0 z-40 rounded-full border border-indigo-600 pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: linkHovered ? 1.5 : clicked ? 0.8 : 1,
        }}
        style={{
          width: "32px",
          height: "32px",
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.2,
        }}
      />
    </>
  );
};

export default Cursor;
