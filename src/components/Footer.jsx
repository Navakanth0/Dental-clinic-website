
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} Smile Dental Clinic. All rights reserved.
        </p>
        <p className="small mb-0">
          📍 Hyderabad | 📧 contact@smiledental.com | 📞 +91 98765 43210
        </p>
      </div>
    </footer>
  );
};

export default Footer;
