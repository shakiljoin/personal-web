import React from "react";


const ProjectCard = ({ title, imageUrl, description, tags = [], codeLink, demoLink }) => {
  return (
    <div
      className="bg-dark-100/90 backdrop:-blur-sm rounded-2xl overflow-hidden 
    hover:-translate-y-2 transition duration-300 cursor-pointer 
    flex flex-col h-full"
    >
      <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>

        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-auto flex flex-col gap-3">
          {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-white px-4 py-2 bg-purple-500
            rounded-lg font-medium hover:bg-purple-700 transition duration-300"
          >
            view demo
          </a>
          )}

           {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-white px-4 py-2 border border-purple-600
              rounded-lg font-medium hover:bg-purple-500/20 transition duration-300"
            >
              Code
            </a>
          )}
        </div>

       
      </div>
    </div>
  );
};

export default ProjectCard;
