import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

export const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: 'Design',
      skills: [
        'UI/UX Design', 'User Research', 'Wireframing & Prototyping',
        'Interaction Design', 'Design Systems', 'Information Architecture',
        'Journey Mapping', 'User Flows & Personas', 'Storyboarding',
        'Empathy Mapping', 'Responsive Design', 'Problem Solving & HMW',
        'Design Thinking', 'High-Fidelity Mockups', 'Graphic Design',
        'UI Animation & Micro-Interactions'
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'Figma', 'Adobe Illustrator', 'Adobe XD', 'Adobe Photoshop',
        'Sketch', 'DaVinci Resolve', 'Framer', 'Google Analytics', 'Hotjar'
      ],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Development',
      skills: [
        'HTML', 'CSS', 'SCSS', 'JavaScript', 'Git', 'Bootstrap'
      ],
      gradient: 'from-pink-600 to-red-600'
    },
    {
      title: 'Others',
      skills: [
        'Agile & Scrum', 'Cross-Functional Collaboration',
        'Stakeholder Presentations', 'Leadership', 'Problem Solving',
        'Critical Thinking', 'Adaptability', 'Professional Ethics',
        'Project Management'
      ],
      gradient: 'from-red-600 to-orange-600'
    }
  ];

  const projects = [
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
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920)',
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: 'blur(2px) brightness(0.3)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-thin mb-6 animate-fade-in">
            <span className="block">UI/UX</span>
            <span className="block text-gray-400">Designer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.5s' }}>
            Crafting intuitive digital experiences with 4 years of expertise in user-centered design
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <span className="text-gray-400">Based in Kathmandu, Nepal</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={24} />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin mb-6 animate-fade-in">Skills & Expertise</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              A comprehensive skill set covering the entire design process from research to implementation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="group animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-600 transition-all duration-500 p-8">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient}`}></div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group-hover:translate-x-1"
                        style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.05}s` }}
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors duration-300"></div>
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-thin mb-16 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
