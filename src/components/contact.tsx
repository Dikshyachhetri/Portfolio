import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-6xl font-thin mb-8 animate-fade-in">Let's Work Together</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-light mb-8">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-3xl font-light mb-8">Get In Touch</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <Mail className="text-gray-400 mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <div className="text-white mb-1">Email</div>
                  <div className="text-gray-400">your.email@example.com</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-gray-400 mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <div className="text-white mb-1">Phone</div>
                  <div className="text-gray-400">+977 98XX XXX XXX</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-gray-400 mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <div className="text-white mb-1">Location</div>
                  <div className="text-gray-400">Kathmandu, Nepal</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4">Social Links</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Dribbble
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Behance
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-900 rounded-lg">
              <h3 className="text-xl font-light mb-3">Let's Discuss Your Project</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
