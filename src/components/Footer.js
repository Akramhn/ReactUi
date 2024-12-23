import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyReactApp. All rights reserved.</p>
        <nav className="flex justify-center space-x-4 mt-4">
          <Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-blue-400">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
