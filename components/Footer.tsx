
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-6 sm:px-8 text-center text-gray-500">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dreamfactory All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
