// Basic School Website Template using React and Tailwind CSS

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="School Logo" className="w-10 h-10 rounded-full" />
          <Link to="/" className="text-xl font-bold hover:underline">The Learning World School</Link>
        </div>
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
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
        <div className="hidden sm:flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/admissions" className="hover:underline">Admissions</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/events" className="hover:underline">Events</Link>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col space-y-2 mt-4 sm:hidden">
          <Link to="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/admissions" className="hover:underline" onClick={() => setMenuOpen(false)}>Admissions</Link>
          <Link to="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/events" className="hover:underline" onClick={() => setMenuOpen(false)}>Events</Link>
        </div>
      )}
    </nav>
  );
}

function HomePage() {
  return (
    <div className="p-10 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700 text-center">
        Welcome to Our School
      </h2>
      <p className="text-center max-w-2xl text-gray-700">
        Empowering students to achieve success through quality education.
      </p>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="p-10 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-700">About Us</h2>
      <p className="text-center max-w-2xl text-gray-700">
        We are a community-focused institution committed to excellence in education.
      </p>
    </div>
  );
}

function AdmissionsPage() {
  return (
    <div className="p-10 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-700">Admissions</h2>
      <p className="text-center max-w-2xl text-gray-700">
        Admissions are open for the new academic session. Apply now!
      </p>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="p-10 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-700">Contact Us</h2>
      {submitted ? (
        <p className="text-green-600">Thank you for contacting us!</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

function EventsPage() {
  const events = [
    {
      title: "Science Fair",
      date: "March 10, 2025",
      description: "An exhibition of science projects by students of all grades."
    },
    {
      title: "Annual Day",
      date: "April 15, 2025",
      description: "A celebration of student achievements and performances."
    },
    {
      title: "Sports Meet",
      date: "May 5, 2025",
      description: "A day of athletics and sporting spirit."
    }
  ];

  return (
    <div className="p-10 min-h-[calc(100vh-64px)]">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-700">Upcoming Events</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{event.title}</h3>
            <p className="text-sm text-gray-500 mb-1">{event.date}</p>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}