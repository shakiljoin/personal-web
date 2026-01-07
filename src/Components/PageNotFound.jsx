import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTools } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-xl w-full text-center border border-purple-500/30 rounded-2xl p-10 shadow-lg">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-purple-500/20 text-purple-400 text-4xl">
            <FaTools />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Page <span className="text-purple-500">Coming Soon</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 mb-8">
          This page is currently under development.  
          Please check back soon for updates 🚀
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-6 py-3
          border border-purple-500 rounded-lg font-medium
          hover:bg-purple-500 hover:text-white transition-all duration-300"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
