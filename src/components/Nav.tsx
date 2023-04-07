import img from '../../src/assets/icon.png';
import { useState } from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="mb-2 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center cursor-pointer text-primary"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
