import '../styles/about.css';
import '../styles/contact.css';
import '../styles/home.css';

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
              <p className="contact-info-text">+91 9838760126</p>
              <p className="contact-info-text">+91 7007428195</p>
              <p className="contact-info-text">Mon-Sat, 9 AM - 5 PM</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">✉️</div>
              <h3 className="contact-info-title">Email</h3>
              <p className="contact-info-text">contacttlws1@gmail.com</p>
              <p className="contact-info-text">https://www.tlws.co.in (Website)</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">📍</div>
              <h3 className="contact-info-title">Address</h3>
              <p className="contact-info-text">
                The Learning World School
                <br />
                Captain mor, Koilasawa Fazilnagar Road,
                <br />
                Katiya, Fazilnagar, Uttar Pradesh - 274401
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-heading">Visit Our Campus</h2>
          <p className="section-intro mb-4">
            Schedule a visit to experience our facilities and meet our team
          </p>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3565.8339979968514!2d84.04778707744539!3d26.6538056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDM5JzEzLjciTiA4NMKwMDMnMDEuMyJF!5e0!3m2!1sen!2sin!4v1768038531000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Learning World School Location"
            ></iframe>

            {/* GET DIRECTIONS OVERLAY */}
            <a
              href="https://www.google.com/maps/dir/28.4966379,77.4407082/26.6538056,84.0503611/@26.6391121,84.0512414,15.67z/data=!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="map-direction-btn"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
