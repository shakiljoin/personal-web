// import React from "react";
// import { motion } from "framer-motion";
// import ProjectCard from "./ProjectCard";
// import { FaArrowCircleRight } from "react-icons/fa";
// import project4 from "../assets/project4.avif";
// import project2 from "../assets/project2.avif";
// import project6 from "../assets/project6.avif";
// import Project1 from "../assets/projects1.png";
// import { Link } from "react-router-dom";

// const projects = [
//   {
//     id: 1,
//     title: "My Portfolio",
//     description: "Portfolio website to showcase my skills and projects.",
//     imageUrl: Project1,
//     tags: ["React", "Tailwind CSS", "Framer Motion"],
//     codeLink: "https://github.com/shakiljoin/personal-web.git",
//   },
//   {
//     id: 2,
//     title: "Portfolio Website",
//     description: "My personal portfolio to showcase my skills and projects.",
//     imageUrl: project2,
//     tags: ["React", "Tailwind CSS", "Framer Motion"],
//     codeLink: "https://github.com/shakiljoin/personal-web.git",
//   },

//   {
//     id: 3,
//     title: "Portfolio Website",
//     description: "My personal portfolio to showcase my skills and projects.",
//     imageUrl: project6,
//     tags: ["React", "Tailwind CSS", "Framer Motion"],
//     codeLink: "https://github.com/shakiljoin/personal-web.git",
//   },
// ];

// const Project = () => {
//   return (
//     <section id="projects" className="p-20 bg-black">
//       <div className="w-full h-0.5 bg-purple-600"></div>
//       <div className="container mt-10 mx-auto px-6">
//         <h2 className="text-3xl font-bold text-white text-center mb-4">
//           My <span className="text-purple-500">PROJECT</span>
//         </h2>

//         <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
//           A recent project works
//         </p>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: false, amount: 0.2 }}
//           id="projects"
//           className="py-20"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {projects.map((project) => (
//               <ProjectCard key={project.id} {...project} />
//             ))}
//           </div>
//           <div className="flex justify-center mt-10">
//             <Link
//               to="/projects"
//               className="inline-flex text-gray-600 items-center px-6 py-3
//   border border-purple-500 rounded-lg font-medium
//   hover:bg-purple-500/20 transition-all duration-300"
//             >
//               <span>View More Project</span>
//               <FaArrowCircleRight className="ml-4" />
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Project;

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import project4 from "../assets/project4.avif";
import project2 from "../assets/project2.avif";
import project6 from "../assets/project6.avif";
import Project1 from "../assets/projects1.png";

const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description: "Portfolio website to showcase my skills and projects.",
    imageUrl: Project1,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    codeLink: "https://github.com/shakiljoin/personal-web.git",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio to showcase my skills and projects.",
    imageUrl: project2,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    codeLink: "https://github.com/shakiljoin/personal-web.git",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal portfolio to showcase my skills and projects.",
    imageUrl: project6,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    codeLink: "https://github.com/shakiljoin/personal-web.git",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-black"
    >
      <div className="w-full h-0.5 bg-purple-600"></div>

      <div className="container mt-10 mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          My <span className="text-purple-500">Project</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          A recent project works
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="py-10 sm:py-16"
        >
          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3
              text-white px-6 py-3
              border border-purple-500 rounded-lg font-medium
              hover:bg-purple-500/20 transition-all duration-300"
            >
              <span>View More Projects</span>
              <FaArrowCircleRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
