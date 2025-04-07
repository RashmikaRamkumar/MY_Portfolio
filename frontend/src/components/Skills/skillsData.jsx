// src/components/Skills/skillsData.jsx
import React from "react";
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

export const skills = [
  {
    name: "React",
    icon: <SiReact className="w-8 h-8" />,
    percentage: 90,
    color: "#61DAFB",
    description:
      "Building robust and scalable frontend applications with React and its ecosystem.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-8 h-8" />,
    percentage: 85,
    color: "#F7DF1E",
    description:
      "Creating interactive websites and applications with modern JavaScript.",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="w-8 h-8" />,
    percentage: 95,
    color: "#E34F26",
    description:
      "Structuring web content with semantic HTML5 for accessibility and SEO.",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="w-8 h-8" />,
    percentage: 90,
    color: "#1572B6",
    description:
      "Styling web applications with advanced CSS techniques and animations.",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-8 h-8" />,
    percentage: 75,
    color: "#339933",
    description: "Building server-side applications and APIs with Node.js.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-8 h-8" />,
    percentage: 85,
    color: "#38B2AC",
    description:
      "Creating beautiful, responsive designs with Tailwind's utility-first approach.",
  },
  {
    name: "Git",
    icon: <SiGit className="w-8 h-8" />,
    percentage: 80,
    color: "#F05032",
    description: "Version control and collaboration using Git workflows.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-8 h-8" />,
    percentage: 70,
    color: "#3178C6",
    description: "Building type-safe applications with TypeScript.",
  },
];

export const otherTechnologies = [
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
];

export const experiences = [
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
