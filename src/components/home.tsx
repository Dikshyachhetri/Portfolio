import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { LoopingWords } from "../components/LoopingWords";
import { ArrowUpRight } from "lucide-react";

export const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "AI Healthcare Platform",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
      description:
        "End-to-end design for AI-powered healthcare diagnostics platform",
    },
    {
      id: 2,
      title: "Cybersecurity Dashboard",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      description:
        "Complex data visualization for enterprise security monitoring",
    },
    {
      id: 3,
      title: "Educational App",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
      description: "Mobile learning platform with gamification elements",
    },
    {
      id: 4,
      title: "Educational App",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
      description: "Mobile learning platform with gamification elements",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1731373665424-06136654bc9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: "blur(0.5px) brightness(0.3)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <LoopingWords />

          <p
            className="text-xl md:text-lg text-gray-300 mb-6 animate-fade-in max-w- mx-auto"
            style={{ animationDelay: "0.5s" }}
          >
            Building products that contribute to a better, more equitable, and
            pleasant future.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
            {/* <span className="text-gray-400">Based in Kathmandu, Nepal</span> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={40} />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 #010101">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-thin mb-16 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="mt-24 flex justify-center">
            <Link
              to="/projects"
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-950 to-black border border-gray-800 px-10 py-3text-gray-300transition-all duration-500 hover:border-gray-600 hover:shadow-2xl hover:shadow-blue-500/10flex items-center justify-center"
              style={{ padding: "12px 40px" }}
            >
              View more projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
