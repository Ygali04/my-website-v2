import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

export default function ProjectCard() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = ProjectList.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Container */}
      <div
        className="bg-slate-800 text-white rounded-lg shadow-lg w-full max-w-4xl"
        style={{ height: '600px' }} // Inline style to set fixed height
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-3xl font-bold">{project.name}</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-gray-200 hover:text-white transition"
          >
            Close
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <img
            className="w-full h-64 object-cover rounded-lg mb-6 cursor-pointer"
            src={project.image}
            alt={project.name}
            onClick={() => project.website && openInNewTab(project.website)}
          />
          <p className="text-lg mb-4">
            <strong>Skills:</strong> {project.skills}
          </p>
          <p className="text-gray-300 mb-4">
            {/* Add project description here */}
            This project involves the following technologies: {project.skills}.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-center space-x-6 p-6 border-t border-gray-700">
          {project.github && (
            <button
              onClick={() => openInNewTab(project.github)}
              className="text-gray-400 hover:text-white transition"
            >
              <GitHubIcon style={{ fontSize: 40 }} />
            </button>
          )}
          {project.website && (
            <button
              onClick={() => openInNewTab(project.website)}
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <LinkIcon style={{ fontSize: 40 }} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
