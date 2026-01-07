import React from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <nav className="fixed h-20 w-full z-50 bg-dark-100/90 backdrop:blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">
          <a href="#" className="text-sm font-bold text-white">
            <img src={logo} alt=" logo" 
            className="w-16 rounded-4xl" />
            {/* <div
              className="w-6 h-6 rounded-full
              bg-gradient-to-t
              from-purple-600 via-orange-500 to-cyan-400 shadow-lg shadow-blue-500/50"
            ></div> */}
          </a>
        </div>

        <div className=" hidden md:flex items-center space-x-10"> 
          <a
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-purple-600 group"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative text-white/80 transition duration-300 hover:text-purple-600 group"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="relative text-white/80 transition duration-300 hover:text-purple-600 group"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="relative text-white/80 transition duration-300 hover:text-purple-600 group"
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <a
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-purple-600 group"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        <a href="#contact" className=" p-1 border-purple-700 border-2 rounded-lg text-white text-sm hover:bg-purple-800">Hire Me</a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden text-white">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="md:hidden bg-dark-100/90 backdrop:-blur-sm px-8 pt-4 pb-4 space-y-4 rounded-3xl">
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#home"
            className="block text-white/80 hover:text-purple-600"
          >
            Home
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#about"
            className="block text-white/80 hover:text-purple-600"
          >
            About
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#skills"
            className="block text-white/80 hover:text-purple-600"
          >
            Skills
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#projects"
            className="block text-white/80 hover:text-purple-600"
          >
            Projects
          </a>
          
        </div>
      )}
    </nav>
  );
};

export default NavBar;
