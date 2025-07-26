import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-indigo-200 text-gray-900 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-5 py-3">
        {/* Your Name */}
        <h1 className="text-2xl font-bold tracking-wide">HARSHIKA</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-yellow-500 transition-colors">About Me</a>
          <a href="#education" className="hover:text-yellow-500 transition-colors">Education</a>
          <a href="#skills" className="hover:text-yellow-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-yellow-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-200 px-5 py-4 space-y-3">
          <a href="#about" className="block hover:text-yellow-500">About Me</a>
          <a href="#education" className="block hover:text-yellow-500">Education</a>
          <a href="#skills" className="block hover:text-yellow-500">Skills</a>
          <a href="#projects" className="block hover:text-yellow-500">Projects</a>
          <a href="#contact" className="block hover:text-yellow-500">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
