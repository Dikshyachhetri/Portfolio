import React from 'react';

const About = () => {
  const experience = [
    {
      year: '2020-Present',
      role: 'Senior UI/UX Designer',
      company: 'Design Studio',
      description: 'Leading design initiatives across multiple industries including AI, Healthcare, and Fintech.'
    },
    {
      year: '2019-2020',
      role: 'UI/UX Designer',
      company: 'Tech Solutions',
      description: 'Focused on enterprise software design and user research methodologies.'
    },
    {
      year: '2018-2019',
      role: 'Junior Designer',
      company: 'Creative Agency',
      description: 'Developed skills in graphic design and basic UX principles.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-24 text-center">
          <h1 className="text-6xl font-thin mb-8 animate-fade-in">About Me</h1>
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gray-800 overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            UI/UX Designer with 4 years of experience delivering end-to-end product design solutions 
            that enhance user satisfaction, drive engagement, and support scalable growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-3xl font-light mb-6">My Story</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm passionate about creating digital experiences that not only look beautiful but also 
                solve real-world problems. My journey in design started with a fascination for how 
                technology can improve people's lives.
              </p>
              <p>
                Over the past 4 years, I've had the privilege of working across diverse sectors including 
                AI, Cybersecurity, Healthcare, Education, ERP, Finance, and Fintech. This experience has 
                taught me that great design transcends industry boundaries.
              </p>
              <p>
                I believe in the power of user research, iterative design, and collaborative teamwork. 
                Every project is an opportunity to learn something new and push the boundaries of what's possible.
              </p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <h2 className="text-3xl font-light mb-6">Approach</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-white mb-2">Research-Driven</h3>
                <p className="text-gray-400">
                  Every design decision is backed by user research and data insights.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Collaborative</h3>
                <p className="text-gray-400">
                  I believe the best solutions come from diverse perspectives and open dialogue.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Iterative</h3>
                <p className="text-gray-400">
                  Continuous testing and refinement lead to superior user experiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Accessible</h3>
                <p className="text-gray-400">
                  Design should be inclusive and accessible to users of all abilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-light mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div 
                key={index} 
                className="flex md:items-center border-l-2 border-gray-800 pl-8 pb-8 animate-fade-in"
                style={{ animationDelay: `${1.5 + index * 0.2}s` }}
              >
                <div className="flex-1">
                  <div className="text-gray-400 text-sm mb-1">{item.year}</div>
                  <h3 className="text-xl text-white mb-1">{item.role}</h3>
                  <div className="text-gray-300 mb-2">{item.company}</div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests */}
        <div className="text-center">
          <h2 className="text-3xl font-light mb-8">Beyond Design</h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            When I'm not designing, you can find me exploring the beautiful landscapes of Nepal, 
            experimenting with photography, or staying up to date with the latest design trends and technologies. 
            I'm also passionate about mentoring young designers and contributing to the local design community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
