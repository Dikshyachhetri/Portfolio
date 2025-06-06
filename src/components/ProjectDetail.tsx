import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - replace with actual data
  const project = {
    title: "AI Healthcare Platform",
    category: "Healthcare",
    year: "2023",
    client: "HealthTech Solutions",
    role: "Lead UI/UX Designer",
    duration: "6 months",
    team: "Product Manager, 3 Developers, Data Scientist",
    overview:
      "A comprehensive AI-powered healthcare platform designed to streamline diagnostic processes and improve patient outcomes through intelligent data visualization and user-friendly interfaces.",
    challenge:
      "Healthcare professionals needed a unified platform to access patient data, AI-powered insights, and diagnostic tools while maintaining strict compliance with healthcare regulations.",
    solution:
      "Designed an intuitive dashboard that presents complex medical data in digestible formats, implemented role-based access controls, and created seamless workflows for different user types.",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200",
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>

          <div className="mb-12">
            <h1 className="text-6xl font-thin mb-6 animate-fade-in">
              {project.title}
            </h1>
            <div className="grid md:grid-cols-2 gap-8 text-gray-400">
              <div>
                <div className="mb-4">
                  <span className="text-white">Category:</span>{" "}
                  {project.category}
                </div>
                <div className="mb-4">
                  <span className="text-white">Year:</span> {project.year}
                </div>
                <div className="mb-4">
                  <span className="text-white">Client:</span> {project.client}
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <span className="text-white">Role:</span> {project.role}
                </div>
                <div className="mb-4">
                  <span className="text-white">Duration:</span>{" "}
                  {project.duration}
                </div>
                <div className="mb-4">
                  <span className="text-white">Team:</span> {project.team}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-light mb-4 text-white">Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                {project.overview}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-light mb-4 text-white">Challenge</h2>
              <p className="text-gray-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-light mb-4 text-white">Solution</h2>
              <p className="text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {project.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} ${index + 2}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Next Project */}
          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center text-lg text-gray-400 hover:text-white transition-colors"
            >
              View All Projects
              <ExternalLink size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
