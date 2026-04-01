import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white px-8 py-4 shadow relative">
      <div className="flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          onClick={closeMobileMenu}
        >
          <img src="/logo.png" className="h-9 w-9 rounded-full" alt="School Logo" />
          <span className="font-semibold text-lg">The Learning World School</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="space-x-6 hidden md:flex">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/admissions" className="hover:underline">
            Admissions
          </NavLink>
          <NavLink to="/faculty" className="hover:underline">
            Faculty
          </NavLink>
          <a
            href="https://drive.google.com/file/d/1xUuwfSSr5jNSZWAkAA8QkvBldauj3A61/view"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Mandatory Disclosure
          </a>
          <NavLink to="/contact" className="hover:underline">
            Contact
          </NavLink>
          <NavLink to="/events" className="hover:underline">
            Events
          </NavLink>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-blue-700 rounded transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-blue-600 z-50 shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <button
            onClick={closeMobileMenu}
            className="self-end text-white text-2xl hover:bg-blue-700 rounded p-2 transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>

          <NavLink
            to="/"
            className="text-white hover:bg-blue-700 px-4 py-3 rounded transition-colors"
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:bg-blue-700 px-4 py-3 rounded transition-colors"
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/admissions"
            className="text-white hover:bg-blue-700 px-4 py-3 rounded transition-colors"
            onClick={closeMobileMenu}
          >
            Admissions
          </NavLink>
          <NavLink
            to="/faculty"
            className="text-white hover:bg-blue-700 px-4 py-3 rounded transition-colors"
            onClick={closeMobileMenu}
          >
            Faculty
          </NavLink>
          <a
            href="https://drive.google.com/file/d/1xUuwfSSr5jNSZWAkAA8QkvBldauj3A61/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:bg-blue-700 px-4 py-3 rounded transition-colors"
            onClick={closeMobileMenu}
          >
            Mandatory Disclosure
          </a>
          <NavLink
            to="/contact"
            className="text-white hover:bg-blue-700 px-4 py-3 rounded transition-colors"
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/events"
            className="text-white hover:bg-blue-700 px-4 py-3 rounded transition-colors"
            onClick={closeMobileMenu}
          >
            Events
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
