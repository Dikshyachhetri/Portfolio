
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: 'AI Healthcare Platform',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
      description: 'End-to-end design for AI-powered healthcare diagnostics platform'
    },
    {
      id: 2,
      title: 'Cybersecurity Dashboard',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
      description: 'Complex data visualization for enterprise security monitoring'
    },
    {
      id: 3,
      title: 'Educational App',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      description: 'Mobile learning platform with gamification elements'
    },
    {
      id: 4,
      title: 'Fintech Mobile App',
      category: 'Fintech',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
      description: 'Secure mobile banking application with intuitive UX'
    },
    {
      id: 5,
      title: 'ERP System Redesign',
      category: 'Enterprise',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      description: 'Complete UX overhaul of enterprise resource planning system'
    },
    {
      id: 6,
      title: 'Website Builder Platform',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800',
      description: 'Drag-and-drop website builder with advanced customization'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-thin mb-6 animate-fade-in">Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A collection of projects spanning across AI, Healthcare, Education, 
            Cybersecurity, Finance, and Enterprise solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;