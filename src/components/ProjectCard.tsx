import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-6">
          <div className="text-white">
            <div className="text-sm font-medium text-blue-400 mb-1">
              {project.category}
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ArrowUpRight className="text-white" size={20} />
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
