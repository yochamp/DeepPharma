import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import companyLogo from '../assets/company_logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img style={{ backgroundColor: 'transparent', width: 50, height: 50 }} src={companyLogo} alt="Company Logo" className="h-10 w-10 mr-2" />
              <h3 className="text-2xl font-bold text-primary">Deep Pharma</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Leading pharmaceutical company committed to delivering quality healthcare solutions
              innovatively.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2" />
                <a href="https://maps.google.com/?q=305,+Alka+Appartment,+Akruli+Cross+Road+3,+Kandivali+East,+Mumbai+400101" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  304/305, Alka Appartment, Akruli Cross Road 3, Kandivali East, Mumbai 400101
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2" />
                <a href="tel:+919820767275" className="hover:text-primary transition-colors">
                  +91 9820767275
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <a href="mailto:deeppharma1@rediffmail.com" className="hover:text-primary transition-colors">
                  deeppharma1@rediffmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/DeepPharma/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/DeepPharma/products" className="text-gray-300 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/DeepPharma/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/DeepPharma/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Active Pharmaceutical Ingredients</li>
              <li>Pharmaceutical Intermediates</li>
              <li>Pharmaceutical  Excipients</li>
              <li>Quality Assurance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Deep Pharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

