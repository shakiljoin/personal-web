import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { FaArrowCircleRight } from "react-icons/fa";
import { section } from "framer-motion/client";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured e-commerce site built with the MERN stack.",
    imageUrl: "/src/assets/project1.avif",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio to showcase my skills and projects.",
    imageUrl: "/src/assets/project2.avif",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },

  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal portfolio to showcase my skills and projects.",
    imageUrl: "/src/assets/project6.avif",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
];

const Project = () => {
  return (
    <section id="projects"
      className="p-20 bg-black">
        <div className="w-full h-0.5 bg-purple-600"></div>
      <div className="container mt-10 mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A recent project works
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          id="projects"
          className="py-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="#"
              className="inline-flex text-gray-600 items-center px-6 py-3
    border border-purple-500 rounded-lg font-medium
    hover:bg-purple-500/20 transition-all duration-300"
            >
              <span>View More Project</span>
              <FaArrowCircleRight className="ml-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
