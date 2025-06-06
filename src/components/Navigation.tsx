import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 p-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-light text-white hover:text-gray-300 transition-colors"
          >
            Portfolio
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-all duration-700 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className={`overflow-hidden ${isOpen ? "animate-fade-in" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-6xl md:text-8xl font-thin mb-6 transition-all duration-300 hover:text-gray-400 ${
                    location.pathname === item.path
                      ? "text-gray-400"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>UI/UX Designer</span>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    </>
  );
};
