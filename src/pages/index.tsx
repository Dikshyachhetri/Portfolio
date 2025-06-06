import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import ProjectDetail from '@/components/ProjectDetail';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Home from '@/components/Home';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Index;
