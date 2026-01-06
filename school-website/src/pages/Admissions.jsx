import '../styles/admissions.css';

export default function Admissions() {
  return (
    <div className="admissions-page">
      {/* HERO */}
      <section>
        <div className="section-container">
          <div className="admissions-hero">
            <h1>Admissions Open 2026–27</h1>
            <div className="hero-subtitle">Nursery to Grade XII · CBSE Curriculum</div>
            <p className="hero-description">
              The Learning World School is a new-age CBSE institution built on strong academic
              foundations, values-based education, and holistic student development.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS + CTA */}
      <section>
        <div className="section-container wide-section">
          <div className="highlights-strip">
            <div className="highlight-card">Nursery to XII</div>
            <div className="highlight-card">CBSE Curriculum</div>
            <div className="highlight-card">Experienced Faculty</div>
            <div className="highlight-card">Activity-Based Learning</div>
            <div className="highlight-card">Safe & Secure Campus</div>
            <div className="highlight-card">Sports & Arts</div>
          </div>

          <div className="admissions-cta-mid">
            <h2>Start Your Admission Journey</h2>
            <p>
              Submit your details through our admission enquiry form. Our team will connect with you
              to guide you through the next steps.
            </p>
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM"
              target="_blank"
              rel="noopener noreferrer"
              className="apply-button-large"
            >
              Apply for Admission
            </a>
            <span className="cta-note">No payment required · Admission enquiry only</span>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="soft-section">
        <div className="section-container">
          <div className="why-choose-card">
            <h2>Why Choose The Learning World School?</h2>
            <p className="section-intro">
              We are committed to creating a nurturing and academically strong environment where
              every child is encouraged to grow with confidence.
            </p>

            <div className="why-grid">
              <div className="why-item">
                <h4>Strong Academic Foundation</h4>
                <p>Aligned with CBSE curriculum and national standards.</p>
              </div>
              <div className="why-item">
                <h4>Experienced Faculty</h4>
                <p>Academic leadership supported by trained educators.</p>
              </div>
              <div className="why-item">
                <h4>Activity-Based Learning</h4>
                <p>Child-centric approach that encourages curiosity.</p>
              </div>
              <div className="why-item">
                <h4>Values & Life Skills</h4>
                <p>Strong focus on discipline, ethics, and character building.</p>
              </div>
              <div className="why-item">
                <h4>Modern Infrastructure</h4>
                <p>Well-equipped classrooms and learning resources.</p>
              </div>
              <div className="why-item">
                <h4>Safe & Inclusive Campus</h4>
                <p>A secure and nurturing environment for every child.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC FRAMEWORK */}
      <section>
        <div className="section-container">
          <div className="admissions-card">
            <h2>Academic Framework</h2>
            <p>
              Our academic framework follows the <strong>CBSE curriculum</strong>, enriched with
              concept-based learning, continuous assessment, and emphasis on communication, critical
              thinking, and problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="soft-section">
        <div className="section-container eligibility-wrapper">
          <h2>Academic Levels & Eligibility Criteria</h2>
          <p className="section-intro">
            Admissions are open for the following academic levels as per CBSE norms.
          </p>

          <div className="eligibility-grid">
            <div className="eligibility-card">
              <strong>Nursery</strong>
              <p>Age 3+ years with play-based and foundational learning.</p>
            </div>
            <div className="eligibility-card">
              <strong>Primary School (Grades 1–5)</strong>
              <p>Strong foundations supported by activity-based learning.</p>
            </div>
            <div className="eligibility-card">
              <strong>Middle School (Grades 6–8)</strong>
              <p>Concept clarity, skill development, and curiosity-driven learning.</p>
            </div>
            <div className="eligibility-card">
              <strong>Secondary & Senior Secondary (Grades 9–12)</strong>
              <p>CBSE curriculum with exam readiness and career guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section>
        <div className="section-container">
          <div className="documents-box">
            <h2>Documents Required at the Time of Admission</h2>
            <ul>
              <li>Birth Certificate (Nursery / Primary)</li>
              <li>Previous School Report Card</li>
              <li>Transfer Certificate (Grade 2 onwards)</li>
              <li>Aadhar Card (Student & Parent)</li>
              <li>Passport-size photographs</li>
            </ul>
            <p className="note">
              Original documents will be verified during the admission process.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
