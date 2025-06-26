import React from "react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group block animate-fade-in mb-6"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative">
        {/* Image Container */}
        <div className="relative overflow-hidden mb-4">
          <div className="aspect-[3/2.5] overflow-hidden bg-gray-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-normal text-gray-500  group-hover:text-gray-300 transition-colors duration-300 ">
            {project.title}
          </h3>
          <p className="text-sm text-white uppercase tracking-wide border border-gray-800 rounded-full px-3 py-1 w-fit ">
            {project.category}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
