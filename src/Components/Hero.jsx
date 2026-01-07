import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-black"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* /Left side content */}
        <div className="md:w-1/2 ml-12 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl text-white mb-4 md:mb-0">
            <span className="text-3xl">Hi, I'm{" "}</span>
            <span className="text-purple-500 text-5xl font-bold bg-gradient-to-tr from-purple-600 via-purple-400 to-purple-200 bg-clip-text text-transparent">Shakil-Ahamed</span>
          </h1>
          <h2 className="text-white text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Front End Developer
          </h2>

          <p className="text-gray-300 mt-4">
            I create responsive and engaging web applications using React.js and
            modern web technologies.
          </p>

          <div>
            <div className="flex space-x-5 mt-5">
              <a
                href="./Shakil_Ahamed_Dev_2.pdf"
                download=""
                className="bg-purple-600 hover:bg-purple-500/20 rounded-lg pl-3 pr-3 pt-1 pb-1 text-white font-medium"
              >
                Download CV
              </a>
              <a
                href=""
                className="border border-purple-700 rounded-lg hover:bg-purple-500/20 pl-3 pr-3 pt-1 pb-1 text-white font-medium"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-5 flex space-x-5">
              <a
                href="https://www.linkedin.com/in/shakilahamedweb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-34 bg-white rounded-sm shadow-md shadow-gray-500 h-10 p-2"
                  src="src/assets/linkedin.svg"
                  alt=""
                />
              </a>

              <a
                href="#contact"
                className=" py-2 px-2 border-purple-700 border-2 rounded-lg text-white text-sm hover:bg-purple-800"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* Right side content */}

        <div className="md:w-1/2 flex justify-center">
          <div
            className="z-10 relative w-96 h-96 rounded-full overflow-hidden  shadow-2xl shadow-purple-500
             shadow-purple-500/50 bg-gradient-to-tr from-purple-600 via-purple-400 to-purple-200"
          >
            <img src="src/assets/gif.gif" alt="Shakil Ahamed" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
