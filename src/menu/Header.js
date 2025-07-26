import React from "react";

function Header() {
  return (
    <header className="bg-indigo-200 text-gray-900 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-5 py-3">
        {/* Your Name */}
        <h1 className="text-2xl font-bold tracking-wide">HARSHIKA</h1>

        {/* Menu */}
        <nav className="space-x-6">
          <a href="#about" className="hover:text-yellow-500 transition-colors">About Me</a>
          <a href="#education" className="hover:text-yellow-500 transition-colors">Education</a>
          <a href="#skills" className="hover:text-yellow-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-yellow-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
