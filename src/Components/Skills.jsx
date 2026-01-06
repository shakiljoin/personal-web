import React from "react";
import { motion } from "framer-motion";
import skills from "../data/skills"; // default import
import { section } from "framer-motion/client";

const Skills = () => {
  return (
    <section id="skills" className="p-20 bg-black">
      <div className="w-full h-0.5 bg-purple-600"></div>
      <div className="container mt-10 mx-auto px-6">
        <div className="container  mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            My <span className="text-purple-600">Skills</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Technologies i work to Bring ideas to life
          </p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            id="skills"
            className="py-20 "
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-dark-100/90 backdrop:-blur-sm p-6 rounded-xl flex items-center gap-4 hover:-translate-y-2 duration-300 cursor-pointer"
                >
                  <div>
                    <skill.icon className="text-purple-500 text-3xl" />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <p className="text-gray-400">{skill.level}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.description.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm bg-purple-600/10 text-purple-400 px-2 py-1 rounded"
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
      </div>
    </section>
  );
};

export default Skills;
