import '../styles/about.css';
import '../styles/contact.css';

export default function Contact() {
  return (
    <div className="page-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <h1>Contact Us</h1>
        <p className="hero-description">
          We'd love to hear from you. Get in touch with us for admissions, inquiries, or any
          questions.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-heading">Get In Touch</h2>

          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-icon">📞</div>
              <h3 className="contact-info-title">Phone</h3>
              <p className="contact-info-text">+91 XXXXX XXXXX</p>
              <p className="contact-info-text">Mon-Sat, 9 AM - 5 PM</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">✉️</div>
              <h3 className="contact-info-title">Email</h3>
              <p className="contact-info-text">info@tlws.edu</p>
              <p className="contact-info-text">admissions@tlws.edu</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">📍</div>
              <h3 className="contact-info-title">Address</h3>
              <p className="contact-info-text">
                The Learning World School
                <br />
                [Address Line 1]
                <br />
                [City, State - PIN]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section-soft">
        <div className="section-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <form className="contact-form">
            <h2
              style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', textAlign: 'center' }}
            >
              Send Us a Message
            </h2>

            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-input" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-input" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-input" placeholder="Enter your phone number" />
            </div>

            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea
                className="form-textarea"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Submit Message
            </button>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-heading">Visit Our Campus</h2>
          <p className="section-intro mb-4">
            Schedule a visit to experience our facilities and meet our team
          </p>

          <iframe
            title="School Location"
            className="location-map"
            src="https://maps.google.com/maps?q=Googleplex&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{ width: '100%', height: '400px', borderRadius: '16px', border: 'none' }}
          />
        </div>
      </section>
    </div>
  );
}
