import React from "react";

function ProjectItem({ project, onClick }) {
  return (
    <div
      className="bg-gray-900 text-white max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 flex flex-col justify-between"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="h-48">
        <img
          className="w-full h-full object-cover"
          src={project.image}
          alt={project.name}
        />
      </div>

      {/* Content Section */}
      <div className="flex-grow flex flex-col justify-between p-6 space-y-4">
        <h3 className="font-bold text-2xl">{project.name}</h3>
        <p className="text-gray-400">
          Learn more about this project and the technologies used.
        </p>
        <p className="text-gray-400 text-sm">Click to see full details.</p>
      </div>
    </div>
  );
}

export default ProjectItem;
