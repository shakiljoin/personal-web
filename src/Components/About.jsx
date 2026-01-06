import React from "react";
import { motion } from "framer-motion";
import gif from "../assets/gif.gif";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <section
      id="about"
      className="p-20 bg-black"
    >
       <div className="w-full h-0.5 bg-purple-600"></div>
      <div className="container mt-10 mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl text-white font-bold text-center mb-4">
          About <span className="text-purple-600">ME</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know me a little better and what I offer
        </p>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="md:w-1/2 rounded-2xl overflow-hidden"
          >
            <img
              src={gif}
              alt="Me"
              
            />
          </motion.div>

          {/* Right side content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="md:w-1/2 mr-20 flex flex-col gap-6"
          >
            {/* Professional Profile */}
            <div className="rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold">Professional Profile</h3>
              <div className="w-full h-0.5 bg-purple-600  mb-4"></div>
              <p className="text-gray-300">
                Frontend Developer skilled in building responsive, component-based user interfaces. Currently at AltSense, specializing in React, JavaScript, and Tailwind CSS. Experienced in integrating RESTful APIs and collaborating with teams to deliver production-ready features.
              </p>
            </div>

            {/* Key Expertise */}
            {/* <div className="rounded-2xl p-8 bg-dark-300">
              <h3 className="text-2xl font-semibold mb-4">Key Expertise</h3>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li><span className="text-purple-600 font-bold">Frontend Development:</span> React, JavaScript, HTML5/CSS3, basic TypeScript.</li>
                <li><span className="text-purple-600 font-bold">Design-to-Code:</span> UI/UX design experience for seamless design implementation.</li>
                <li><span className="text-purple-600 font-bold">Modern Tooling:</span> Git, Vite, Figma for efficient development and collaboration.</li>
                <li><span className="text-purple-600 font-bold">Problem Solving:</span> Debugging, performance optimization, and stable UI delivery.</li>
              </ul>
            </div> */}

            {/* Education & Background */}
            <div className="rounded-2xl p-8 ">
              <h3 className="text-2xl text-white font-semibold">Education & Background</h3>
              <div className="w-full h-0.5 bg-purple-600  mb-4"></div>
              <p className="text-gray-300">
                Master of Computer Science, The New College (University of Madras), CGPA 7.73. Administrative experience enhances communication and organization. Passionate about modern frontend tools like React Query and building impactful products.
              </p>

              {/* carts */}

              {/* <div className="grid grid-cols-1 md:grid-cols-2 ga-6">
                {
                  aboutInfo.map((data, index) => (

                    <div key={index} className="bg-dark-300
                     rounded-2xl p-6 transition-transform 
                     duration-300 hover:-translate-y-2 
                     cursor-pointer">
                      <div className="text-purple-500">
                        <data.icon/>

                      </div>

                    </div>

                  ))
                }

              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
