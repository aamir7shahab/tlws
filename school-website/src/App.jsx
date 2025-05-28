import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white py-5 px-6 shadow-md text-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="School Logo" className="w-12 h-12 rounded-full" />
          <Link to="/" className="text-2xl font-bold hover:underline hover:text-yellow-300 transition">
            The Learning World School
          </Link>
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden sm:flex space-x-4">
          <Link to="/" className="hover:underline hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="hover:underline hover:text-yellow-300 transition">About</Link>
          <Link to="/admissions" className="hover:underline hover:text-yellow-300 transition">Admissions</Link>
          <Link to="/contact" className="hover:underline hover:text-yellow-300 transition">Contact</Link>
          <Link to="/events" className="hover:underline hover:text-yellow-300 transition">Events</Link>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col space-y-2 mt-4 sm:hidden">
          {["Home", "About", "Admissions", "Contact", "Events"].map((label) => (
            <Link
              key={label}
              to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              className="hover:underline hover:text-yellow-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

const PageWrapper = ({ title, children }) => (
  <div className="bg-gradient-to-b from-blue-50 to-white min-h-[calc(100vh-64px)] flex items-center justify-center p-6">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </div>
  </div>
);

function HomePage() {
  return (
    <PageWrapper title="Welcome to The Learning World School">
      <div className="space-y-6 text-left">
        {/* School Introduction */}
        <p>
          At <strong>The Learning World School</strong>, we are dedicated to creating an inspiring educational environment where every student is empowered to reach their full potential. Our school blends academic rigor with a strong focus on character building, creativity, and critical thinking.
        </p>

        <p>
          From early learners to senior classes, we provide a holistic curriculum supported by experienced faculty, well-equipped classrooms, and enriching co-curricular activities. Our mission is to nurture curious minds and responsible citizens through inclusive, values-based education.
        </p>

        <p>
          Explore our website to learn more about our programs, admissions, and upcoming events. We invite you to join our vibrant school community where learning never stops, and excellence begins.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="/admissions"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded shadow hover:from-blue-700 hover:to-indigo-800 transition"
          >
            Explore Admissions
          </a>
        </div>

        {/* Testimonials */}
        <div className="mt-10 border-t pt-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">What Our Students Say</h3>
          <div className="space-y-4">
            <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4">
              “The Learning World School is more than just a school — it’s a family. I’ve learned so much here and made amazing friends. The teachers really care!”
              <footer className="mt-2 text-sm text-gray-500">— Aditi, Grade 8</footer>
            </blockquote>
            <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4">
              “Every day brings something new at TLWS. I love the library, the science lab, and our music club!”
              <footer className="mt-2 text-sm text-gray-500">— Rohan, Grade 6</footer>
            </blockquote>
          </div>
        </div>

        {/* School Image Placeholder */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">A Glimpse of Our Campus</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <img src="/campus1.jpg" alt="School Building" className="rounded shadow" />
            <img src="/classroom1.jpg" alt="Classroom" className="rounded shadow" />
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Location</h3>
          <div className="aspect-w-16 aspect-h-9 rounded shadow overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.0355085734656!2d-122.08424968469216!3d37.42206577982405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba024ed3c6e1%3A0xf5d8b7de6d14769!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614888844223!5m2!1sen!2sus"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              title="School Location"
            ></iframe>
          </div>
        </div>

        {/* Announcements */}
        <div className="mt-10 border-t pt-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Latest Announcements</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>🏅 Admissions open for the 2025–26 academic session. Apply today!</li>
            <li>🎉 Annual Day is scheduled for April 15, 2025 — parents are invited!</li>
            <li>📚 New library wing inaugurated with over 2,000 books.</li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}


function AboutPage() {
  return (
    <PageWrapper title="About Us">
      <div className="space-y-4 text-left">
        <p>
          <strong>The Learning World School</strong> is a nurturing and inclusive learning environment where curiosity is encouraged, creativity is celebrated, and academic excellence is achieved.
        </p>
        <p>
          We believe every child is unique and capable of greatness. Our mission is to empower students with the knowledge, skills, and values needed to thrive in a rapidly changing world.
        </p>
        <p>
          With modern classrooms, passionate educators, and a diverse set of co-curricular opportunities, we strive to shape future-ready leaders who are compassionate, confident, and inspired to make a difference.
        </p>
      </div>
    </PageWrapper>
  );
}


function AdmissionsPage() {
  return (
    <PageWrapper title="Admissions">
      <div className="space-y-6 text-left">
        {/* Overview */}
        <p>
          At <strong>The Learning World School</strong>, we welcome applications from families who value academic excellence, holistic development, and a nurturing environment for their children. Our admissions process is designed to be transparent, inclusive, and supportive.
        </p>

        {/* Admission Process Steps */}
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Admission Process</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Submit the online application form with required documents.</li>
            <li>Attend a virtual or in-person school tour and orientation session.</li>
            <li>Interaction or assessment (age-appropriate) for the applicant.</li>
            <li>Receive admission decision via email within 5 working days.</li>
            <li>Complete fee payment and join the orientation program.</li>
          </ol>
        </div>

        {/* Eligibility */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Eligibility Criteria</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Nursery: Children aged 3+ years as of June 1, 2025</li>
            <li>Grade 1–10: Based on previous academic performance and age</li>
            <li>Transfer Certificates are required for Grades 2 and above</li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="mt-6 text-center">
          <p className="text-gray-800 mb-4">
            Have questions? Our admissions team is here to help you every step of the way.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Contact Admissions
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}


function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <PageWrapper title="Contact Us">
      {submitted ? (
        <p className="text-green-600 font-medium">Thank you for contacting us!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {["name", "email"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          ))}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded shadow-md hover:from-blue-600 hover:to-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      )}
    </PageWrapper>
  );
}

function EventsPage() {
  const events = [
    { title: "Science Fair", date: "March 10, 2025", description: "An exhibition of science projects by students of all grades." },
    { title: "Annual Day", date: "April 15, 2025", description: "A celebration of student achievements and performances." },
    { title: "Sports Meet", date: "May 5, 2025", description: "A day of athletics and sporting spirit." }
  ];

  return (
    <div className="p-10 min-h-[calc(100vh-64px)] bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-700">Upcoming Events</h2>
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

function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center py-4 mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} The Learning World School. All rights reserved.
      </p>
    </footer>
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
      <Footer />
    </Router>
  );
}
