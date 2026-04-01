import '../styles/about.css';
import SchoolFront from '../assets/SchoolFront.JPG';
import classroom1 from '../assets/classroom1.png';

export default function About() {
  return (
    <div className="page-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <h1>About The Learning World School</h1>
        <div className="hero-subtitle">Empowering Minds, Building Futures</div>
        <p className="hero-description">
          The Learning World School is a nurturing and inclusive learning environment where
          curiosity and creativity are celebrated. We are committed to shaping future-ready leaders
          through academic excellence, character building, and holistic development.
        </p>
      </section>

      {/* VISION & MISSION */}
      <section className="section">
        <div className="section-container">
          <div className="grid-2">
            <div className="card card-accent">
              <div className="icon-circle">🎯</div>
              <h3 className="text-center mb-2">Our Vision</h3>
              <p className="text-center">
                To be a leading educational institution that nurtures young minds to become
                confident, compassionate, and responsible global citizens equipped to excel in a
                rapidly changing world.
              </p>
            </div>

            <div className="card card-accent">
              <div className="icon-circle">💡</div>
              <h3 className="text-center mb-2">Our Mission</h3>
              <p className="text-center">
                To provide a holistic, values-based education that fosters academic excellence,
                critical thinking, creativity, and character development in a safe and inspiring
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section-soft">
        <div className="section-container">
          <h2 className="section-heading">Our Core Values</h2>
          <p className="section-intro">
            These fundamental principles guide everything we do at The Learning World School
          </p>

          <div className="grid-3">
            <div className="value-card">
              <div className="icon-circle">📚</div>
              <h4>Academic Excellence</h4>
              <p>
                We maintain high academic standards aligned with CBSE curriculum, ensuring students
                develop strong foundational knowledge and critical thinking skills.
              </p>
            </div>

            <div className="value-card">
              <div className="icon-circle">🤝</div>
              <h4>Integrity & Ethics</h4>
              <p>
                We instill strong moral values, honesty, and ethical behavior, helping students
                become responsible and trustworthy individuals.
              </p>
            </div>

            <div className="value-card">
              <div className="icon-circle">🌟</div>
              <h4>Innovation & Creativity</h4>
              <p>
                We encourage creative thinking, problem-solving, and innovation through
                activity-based learning and hands-on experiences.
              </p>
            </div>

            <div className="value-card">
              <div className="icon-circle">🌍</div>
              <h4>Inclusivity & Respect</h4>
              <p>
                We celebrate diversity and create an inclusive environment where every student feels
                valued, respected, and empowered to succeed.
              </p>
            </div>

            <div className="value-card">
              <div className="icon-circle">💪</div>
              <h4>Holistic Development</h4>
              <p>
                We focus on the overall development of students—academic, physical, emotional, and
                social—preparing them for life beyond the classroom.
              </p>
            </div>

            <div className="value-card">
              <div className="icon-circle">🏆</div>
              <h4>Excellence & Growth</h4>
              <p>
                We inspire students to strive for excellence in all endeavors while fostering a
                growth mindset and resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL HIGHLIGHTS
      <section className="section">
        <div className="section-container">
          <h2 className="section-heading">Why Choose Us</h2>

          <div className="highlights-strip">
            <div className="highlight-card">CBSE Affiliated</div>
            <div className="highlight-card">Experienced Faculty</div>
            <div className="highlight-card">Modern Infrastructure</div>
            <div className="highlight-card">Activity-Based Learning</div>
            <div className="highlight-card">Safe Campus</div>
            <div className="highlight-card">Sports & Arts</div>
          </div>

          <div className="stats-container mt-4">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Dedicated Faculty</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Parent Satisfaction</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* INFRASTRUCTURE */}
      <section className="section-soft">
        <div className="section-container">
          <h2 className="section-heading">World-Class Infrastructure</h2>
          <p className="section-intro">
            Our campus is designed to provide a conducive learning environment with modern
            facilities and resources
          </p>

          <div className="grid-3">
            <div className="card">
              <h4 className="mb-2">🏫 Smart Classrooms</h4>
              <p>
                Spacious, well-ventilated classrooms equipped with modern teaching aids and
                technology for interactive learning.
              </p>
            </div>

            <div className="card">
              <h4 className="mb-2">🔬 Science Laboratories</h4>
              <p>
                Fully equipped Physics, Chemistry, and Biology labs for hands-on experiments and
                practical learning.
              </p>
            </div>

            <div className="card">
              <h4 className="mb-2">💻 Computer Lab</h4>
              <p>
                State-of-the-art computer lab with high-speed internet and latest software for
                digital literacy.
              </p>
            </div>

            <div className="card">
              <h4 className="mb-2">📖 Library</h4>
              <p>
                Well-stocked library with thousands of books, journals, and digital resources to
                foster reading habits.
              </p>
            </div>

            <div className="card">
              <h4 className="mb-2">⚽ Sports Facilities</h4>
              <p>
                Dedicated sports grounds for cricket, football, basketball, and indoor games to
                promote physical fitness.
              </p>
            </div>

            <div className="card">
              <h4 className="mb-2">🎨 Art & Music Rooms</h4>
              <p>
                Specialized rooms for art, craft, music, and dance to nurture creative talents and
                artistic expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS GALLERY */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-heading">Our Campus</h2>
          <p className="section-intro mb-4">A glimpse of our vibrant learning environment</p>

          <div className="grid-2">
            <img src={SchoolFront} alt="School Campus Building" className="img-rounded" />
            <img src={classroom1} alt="Modern Classroom" className="img-rounded" />
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="section-soft">
        <div className="section-container">
          <h2 className="section-heading">Our Leadership Team</h2>
          <p className="section-intro mb-4">
            Meet the visionaries and educators who guide The Learning World School
          </p>

          {/* PRINCIPAL */}
          <div className="card-large card-accent mb-4">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <div
                className="icon-circle"
                style={{
                  width: '100px',
                  height: '100px',
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                }}
              >
                P
              </div>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                Dr. [Principal Name]
              </h3>
              <p style={{ fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Principal
              </p>
              <p style={{ maxWidth: '800px', lineHeight: '1.7' }}>
                "At The Learning World School, we believe that education is not just about academic
                achievement—it's about nurturing the whole child. We are committed to providing an
                environment where every student can discover their potential, develop their talents,
                and grow into confident, compassionate individuals."
              </p>
              <p className="text-sm-secondary" style={{ marginTop: '1rem' }}>
                M.Ed., Ph.D. in Education | 20+ years of experience in educational leadership
              </p>
            </div>
          </div>

          {/* FOUNDING MEMBERS */}
          <h3
            className="section-heading"
            style={{ fontSize: '1.75rem', marginTop: '3rem', marginBottom: '1.5rem' }}
          >
            Founding Members
          </h3>

          {/* First Row - 3 Cards */}
          <div className="grid-3" style={{ marginBottom: '1.6rem' }}>
            <div className="card">
              <div
                className="icon-circle"
                style={{ width: '80px', height: '80px', fontSize: '2rem' }}
              >
                F1
              </div>
              <h4
                className="text-center mb-1"
                style={{ color: 'var(--primary-blue)', fontWeight: 600 }}
              >
                [Founder Name 1]
              </h4>
              <p className="text-role text-center mb-2">Founder & Chairman</p>
              <p style={{ fontSize: '0.95rem', textAlign: 'center' }}>
                Visionary leader with a passion for transforming education and empowering young
                minds to achieve excellence.
              </p>
            </div>

            <div className="card">
              <div
                className="icon-circle"
                style={{ width: '80px', height: '80px', fontSize: '2rem' }}
              >
                F2
              </div>
              <h4
                className="text-center mb-1"
                style={{ color: 'var(--primary-blue)', fontWeight: 600 }}
              >
                [Founder Name 2]
              </h4>
              <p className="text-role text-center mb-2">Co-Founder & Vice Chairman</p>
              <p style={{ fontSize: '0.95rem', textAlign: 'center' }}>
                Dedicated to creating inclusive learning environments and fostering holistic
                development in every student.
              </p>
            </div>

            <div className="card">
              <div
                className="icon-circle"
                style={{ width: '80px', height: '80px', fontSize: '2rem' }}
              >
                F3
              </div>
              <h4
                className="text-center mb-1"
                style={{ color: 'var(--primary-blue)', fontWeight: 600 }}
              >
                [Founder Name 3]
              </h4>
              <p className="text-role text-center mb-2">Co-Founder & Secretary</p>
              <p style={{ fontSize: '0.95rem', textAlign: 'center' }}>
                Committed to academic excellence and ensuring the highest standards of education and
                infrastructure.
              </p>
            </div>
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.6rem',
              flexWrap: 'wrap',
            }}
          >
            <div className="card" style={{ width: '100%', maxWidth: '320px' }}>
              <div
                className="icon-circle"
                style={{ width: '80px', height: '80px', fontSize: '2rem' }}
              >
                F4
              </div>
              <h4
                className="text-center mb-1"
                style={{ color: 'var(--primary-blue)', fontWeight: 600 }}
              >
                [Founder Name 4]
              </h4>
              <p className="text-role text-center mb-2">Co-Founder & Treasurer</p>
              <p style={{ fontSize: '0.95rem', textAlign: 'center' }}>
                Expert in educational administration and resource management, ensuring sustainable
                growth and development.
              </p>
            </div>

            <div className="card" style={{ width: '100%', maxWidth: '320px' }}>
              <div
                className="icon-circle"
                style={{ width: '80px', height: '80px', fontSize: '2rem' }}
              >
                F5
              </div>
              <h4
                className="text-center mb-1"
                style={{ color: 'var(--primary-blue)', fontWeight: 600 }}
              >
                [Founder Name 5]
              </h4>
              <p className="text-role text-center mb-2">Co-Founder & Academic Director</p>
              <p style={{ fontSize: '0.95rem', textAlign: 'center' }}>
                Passionate educator focused on curriculum innovation and implementing best practices
                in teaching methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="section-container">
          <div className="cta-section">
            <h2>Join Our Learning Community</h2>
            <p className="mb-3">
              Discover how The Learning World School can help your child reach their full potential.
              Admissions are now open for the 2026-27 academic session.
            </p>
            <a
              href="/admissions"
              className="btn btn-large"
              style={{ background: 'white', color: 'var(--primary-blue)' }}
            >
              Explore Admissions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
