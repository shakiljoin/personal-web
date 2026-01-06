// src/data/skills.js
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "React",
    level: "Advanced",
    icon: FaReact,
    description: ["Hooks", "Components", "State Management"],
  },
  {
    name: "JavaScript",
    level: "Advanced",
    icon: FaJsSquare,
    description: ["ES6+", "Async/Await"],
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    icon: SiTailwindcss,
    description: ["Responsive UI", "Utility-first"],
  },
  {
    name: "HTML",
    level: "Advanced",
    icon: FaHtml5,
    description: ["Semantic HTML"],
  },
  {
    name: "CSS",
    level: "Advanced",
    icon: FaCss3Alt,
    description: ["Flexbox", "Grid"],
  },
  {
    name: "Git & GitHub",
    level: "Intermediate",
    icon: FaGithub,
    description: ["Version Control"],
  },
  {
    name: "API Integration",
    level: "Intermediate",
    icon: FaServer,
    description: ["REST APIs"],
  },
];

export default skills;
