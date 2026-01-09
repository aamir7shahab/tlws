import '../styles/about.css';
import '../styles/faculty.css';

export default function Faculty() {
  const facultyMembers = [
    {
      name: 'Ms. Ananya Sharma',
      subject: 'Mathematics',
      experience: '8+ years experience',
      qualification: 'M.Sc Mathematics, B.Ed',
    },
    {
      name: 'Mr. Rakesh Verma',
      subject: 'Science',
      experience: '10+ years experience',
      qualification: 'M.Sc Physics, B.Ed',
    },
    {
      name: 'Ms. Neha Gupta',
      subject: 'English',
      experience: '6+ years experience',
      qualification: 'M.A English, B.Ed',
    },
  ];

  return (
    <div className="page-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <h1>Our Faculty</h1>
        <p className="hero-description">
          Our educators are experienced professionals dedicated to nurturing curiosity, confidence,
          and excellence in every student.
        </p>
      </section>

      {/* FACULTY CARDS */}
      <section className="section">
        <div className="section-container">
          <div className="faculty-grid">
            {facultyMembers.map((f, index) => (
              <div key={index} className="faculty-card">
                <div className="faculty-avatar">{f.name.charAt(0)}</div>
                <h3 className="faculty-name">{f.name}</h3>
                <p className="faculty-subject">{f.subject}</p>
                <p className="faculty-qualification">{f.qualification}</p>
                <p className="faculty-experience">{f.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY SECTION */}
      <section className="section-soft">
        <div className="section-container">
          <div className="cta-section">
            <h2>Join Our Faculty Team</h2>
            <p className="mb-3">
              We welcome applications from passionate educators who wish to be part of our learning
              community.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeIFlU0OGPPWw9BfUVMU5tl6V5ZMPZBNi4aLaIAnp-D1NfVEA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large"
              style={{ background: 'white', color: 'var(--primary-blue)' }}
            >
              Apply Now
            </a>
            <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#dbeafe' }}>
              Applications are reviewed on a rolling basis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
