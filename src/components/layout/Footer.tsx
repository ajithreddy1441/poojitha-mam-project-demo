import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">Ojas Nutri</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering you to achieve optimal health through personalized nutrition guidance.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Appointments", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Personalized Nutrition Plans", "Weight Management", "Sports Nutrition", "Digestive Health", "Corporate Wellness"].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span className="text-gray-300">123 Wellness Street, Healthy City, HC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">info@ojasnutri.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ojas Nutri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;