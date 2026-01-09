import '../styles/about.css';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="page-container">
      {/* HERO */}
      <section className="hero-section">
        <h1>Welcome to The Learning World School</h1>
        <div className="hero-subtitle">Empowering Minds, Building Futures</div>
        <div className="hero-description">
          <p style={{ marginBottom: '1rem' }}>
            At <strong>The Learning World School</strong>, we are dedicated to creating an inspiring
            educational environment where every student is empowered to reach their full potential.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Our school blends academic rigor with a strong focus on character building, creativity,
            and critical thinking.
          </p>
          <p>
            From early learners to senior classes, we provide a holistic curriculum supported by
            experienced faculty and enriching co-curricular activities.
          </p>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <a href="/admissions" className="btn btn-primary btn-large">
            Explore Admissions
          </a>
        </div>
      </section>

      {/* LATEST ANNOUNCEMENTS */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-heading">Latest Announcements</h2>

          {/* HIGHLIGHTED FACULTY NOTICE */}
          <div className="announcement-highlight">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.5rem',
              }}
            >
              <span className="announcement-badge">NEW</span>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeIFlU0OGPPWw9BfUVMU5tl6V5ZMPZBNi4aLaIAnp-D1NfVEA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="announcement-link"
              >
                Faculty Opening – Apply Now
              </a>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              We are inviting applications from qualified and passionate educators.
            </p>
          </div>

          {/* OTHER ANNOUNCEMENTS */}
          <ul className="announcements-list">
            <li className="announcement-item">
              <span className="announcement-dot"></span>
              Admissions open for the 2026–27 academic session
            </li>
            <li className="announcement-item">
              <span className="announcement-dot"></span>
              Annual Day scheduled for April 15, 2025
            </li>
            <li className="announcement-item">
              <span className="announcement-dot"></span>
              Science Fair registrations now open
            </li>
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-soft">
        <div className="section-container">
          <h2 className="section-heading">What Our Students Say</h2>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <blockquote className="testimonial">
              "The Learning World School is more than just a school — it's a family. The teachers
              really care!"
              <div className="testimonial-author">— Aditi, Grade 8</div>
            </blockquote>

            <blockquote className="testimonial">
              "Every day brings something new at TLWS. I love the library and science lab!"
              <div className="testimonial-author">— Rohan, Grade 6</div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CAMPUS */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-heading">A Glimpse of Our Campus</h2>
          <p className="section-intro mb-4">
            Explore our modern facilities and vibrant learning environment
          </p>

          <div className="grid-2">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b"
              className="img-rounded"
              alt="School building"
            />
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
              className="img-rounded"
              alt="Students"
            />
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section-soft">
        <div className="section-container">
          <h2 className="section-heading">Our Location</h2>
          <p className="section-intro mb-4">Visit us to experience our campus and meet our team</p>

          <iframe
            title="School Location"
            className="location-map"
            src="https://maps.google.com/maps?q=Googleplex&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>
    </div>
  );
}
