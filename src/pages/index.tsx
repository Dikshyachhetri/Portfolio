import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen.tsx";
import { Navigation } from "../components/Navigation.tsx";
import { Projects } from "../components/Projects.tsx";
import { ProjectDetail } from "../components/ProjectDetail.tsx";
import { About } from "../components/About.tsx";
import { Contact } from "../components/Contact.tsx";
import { Home } from "../components/Home.tsx";

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
