// import React from "react";
// import { motion } from "framer-motion";
// import skills from "../data/skills"; // default import
// import { section } from "framer-motion/client";

// const Skills = () => {
//   return (
//     <section id="skills" className="p-20 bg-black">
//       <div className="w-full h-0.5 bg-purple-600"></div>
//       <div className="container mt-10 mx-auto px-6">
//         <div className="container  mx-auto px-6">
//           <h2 className="text-3xl text-white font-bold text-center mb-4">
//           Me <span className="text-purple-600">SKILLS</span>
//         </h2>
//         <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
//           Get to know me a little better and what I offer
//         </p>
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             id="skills"
//             className="py-20 "
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
//               {skills.map((skill, index) => (
//                 <div
//                   key={index}
//                   className="bg-black border border-purple-600 shadow-lg shadow-gray400 backdrop:blur-sm p-6 rounded-xl flex items-center gap-4 hover:bg-purple-500/20 hover:-translate-y-2 duration-300 cursor-pointer"
//                 >
//                   <div>
//                     <skill.icon className="text-purple-500 text-3xl" />
//                     <h3 className="text-xl text-white font-semibold">{skill.name}</h3>
//                     <p className="text-gray-400">{skill.level}</p>
//                   </div>

//                   <div className="flex flex-wrap gap-2">
//                     {skill.description.map((tech) => (
//                       <span
//                         key={tech}
//                         className="text-sm bg-purple-600/10 text-purple-400 px-2 py-1 rounded"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="w-full h-0.5 bg-purple-600"></div>

      <div className="container mt-10 mx-auto px-6">
        <h2 className="text-3xl text-white font-bold text-center mb-4">
          Me <span className="text-purple-600">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know me a little better and what I offer
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-black border border-purple-600/60
                p-6 rounded-xl shadow-lg
                hover:bg-purple-500/10 hover:-translate-y-2
                transition duration-300 cursor-pointer"
              >
                {/* TOP */}
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className="text-purple-500 text-3xl shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {skill.level}
                    </p>
                  </div>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {skill.description.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm
                      bg-purple-600/10 text-purple-400
                      px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
