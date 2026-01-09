import '../styles/about.css';
import '../styles/events.css';

export default function Events() {
  const events = [
    {
      title: 'Science Fair',
      date: 'March 10, 2025',
      desc: 'An exhibition of science projects by students of all grades.',
      icon: '🔬',
    },
    {
      title: 'Annual Day',
      date: 'April 15, 2025',
      desc: 'A celebration of student achievements and performances.',
      icon: '🎭',
    },
    {
      title: 'Sports Meet',
      date: 'May 5, 2025',
      desc: 'A day of athletics and sporting spirit.',
      icon: '⚽',
    },
  ];

  return (
    <div className="page-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <h1>Upcoming Events</h1>
        <p className="hero-description">
          Stay updated with our exciting events, celebrations, and activities throughout the
          academic year.
        </p>
      </section>

      {/* EVENTS GRID */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-heading">Events Calendar</h2>
          <p className="section-intro mb-4">Mark your calendars for these upcoming events</p>

          <div className="events-grid">
            {events.map((e) => (
              <div key={e.title} className="event-card">
                <div className="event-icon">{e.icon}</div>
                <h3 className="event-title">{e.title}</h3>
                <p className="event-date">{e.date}</p>
                <p className="event-description">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="section-soft">
        <div className="section-container">
          <h2 className="section-heading">Past Events Highlights</h2>
          <p className="section-intro mb-4">
            Take a look at some memorable moments from our recent events
          </p>

          <div className="grid-2">
            <div className="card">
              <h4 className="mb-2" style={{ color: 'var(--primary-blue)' }}>
                🏆 Inter-School Competition
              </h4>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  marginBottom: '0.5rem',
                }}
              >
                December 2024
              </p>
              <p>
                Our students won multiple awards in the inter-school science and mathematics
                competition, showcasing their exceptional talent and dedication.
              </p>
            </div>

            <div className="card">
              <h4 className="mb-2" style={{ color: 'var(--primary-blue)' }}>
                🎨 Art Exhibition
              </h4>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  marginBottom: '0.5rem',
                }}
              >
                November 2024
              </p>
              <p>
                A beautiful display of creativity and artistic expression by our talented students,
                featuring paintings, sculptures, and digital art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="section-container">
          <div className="cta-section">
            <h2>Want to Participate?</h2>
            <p className="mb-3">
              Join our school community and be part of these exciting events and activities.
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
