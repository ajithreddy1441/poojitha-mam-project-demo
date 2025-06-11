import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Appointments", path: "/appointments" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-3 md:py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
            <span className="ml-2 text-xl md:text-2xl font-bold text-gray-800">Ojas Nutri</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base md:text-lg font-medium transition-colors hover:text-green-600 ${
                  location.pathname === link.path ? "text-green-600" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Book Now button */}
          <Link
            to="/appointments"
            className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-5 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg font-medium transition-colors "
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium transition-colors hover:text-green-600 ${
                    location.pathname === link.path ? "text-green-600" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/appointments"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;