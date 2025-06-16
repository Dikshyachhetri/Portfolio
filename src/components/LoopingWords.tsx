// components/LoopingWords.tsx
import { useEffect, useState } from "react";

const words = ["RESEARCH.", "DESIGN.", "EXPERIENCE."];

export const LoopingWords = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 1800); // every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-7xl md:text-9xl font-medium mb-10 animate-fade-in">
      {words.map((word, index) => (
        <span
          key={word}
          className={`block transition-colors duration-700 ${
            index === activeIndex ? "text-white" : "text-gray-500"
          }`}
        >
          {word}
        </span>
      ))}
    </h1>
  );
};
