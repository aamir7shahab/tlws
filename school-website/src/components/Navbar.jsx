import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow">
      <NavLink to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
        <img src="/logo.png" className="h-9 w-9 rounded-full" />
        <span className="font-semibold text-lg">The Learning World School</span>
      </NavLink>

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
    </nav>
  );
}
