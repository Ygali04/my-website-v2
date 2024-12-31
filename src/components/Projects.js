import React, { useState } from "react";
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "../helpers/ProjectItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import CloseIcon from "@mui/icons-material/Close";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-20 text-center text-white">Personal Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ProjectList.map((project) => (
          <ProjectItem
            key={project.slug}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-900 text-white rounded-lg shadow-lg max-w-2xl w-full relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <CloseIcon style={{ fontSize: 24 }} />
            </button>

            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">{selectedProject.name}</h2>
              <img
                className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer"
                src={selectedProject.image}
                alt={selectedProject.name}
                onClick={() => window.open(selectedProject.website, "_blank")}
              />
              <p className="mb-4 text-center">
                <strong>Skills:</strong> {selectedProject.skills}
              </p>
              <div className="flex justify-center space-x-4">
                {selectedProject.github && (
                  <button
                    onClick={() => window.open(selectedProject.github, "_blank")}
                    className="flex items-center justify-center bg-transparent text-white hover:text-gray-400"
                  >
                    <GitHubIcon style={{ fontSize: 40 }} />
                  </button>
                )}
                {selectedProject.website && (
                  <button
                    onClick={() => window.open(selectedProject.website, "_blank")}
                    className="flex items-center justify-center bg-transparent text-white hover:text-blue-500"
                  >
                    <LinkIcon style={{ fontSize: 40 }} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
