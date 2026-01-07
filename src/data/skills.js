// src/data/skills.js
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "React",
    level: "Beginner",
    icon: FaReact,
    description: ["Hooks", "Components", "State Management"],
  },
  {
    name: "JavaScript",
    level: "Beginner",
    icon: FaJsSquare,
    description: ["ES6+", "Async/Await"],
  },
  {
    name: "Tailwind CSS",
    level: "Beginner",
    icon: SiTailwindcss,
    description: ["Responsive UI", "Utility-first"],
  },
  {
    name: "HTML",
    level: "Intermediate",
    icon: FaHtml5,
    description: ["Semantic HTML","HTML5"],
  },
  {
    name: "CSS",
    level: "Intermediate",
    icon: FaCss3Alt,
    description: ["Flexbox", "Grid","CSS3"],
  },
  {
    name: "Git & GitHub",
    level: "Beginner",
    icon: FaGithub,
    description: ["Version Control"],
  },
  {
    name: "API Integration",
    level: "Beginner",
    icon: FaServer,
    description: ["REST APIs"],
  },
  {
    name: "Python",
    level: "Beginner",
    icon: FaPython,
    description: ["Core", "Oops Concepts"],
  },
  {
    name: "Mysql",
    level:"Beginner",
    icon: FaDatabase,
    description:["Database Management"]
  }
];

export default skills;
