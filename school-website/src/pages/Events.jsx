import '../styles/about.css';
import '../styles/events.css';

export default function Events() {
  const events = [
    {
      title: 'Science Fair',
      desc: 'An exhibition of science projects by students of all grades.',
      icon: '🔬',
    },
    {
      title: 'Annual Day',
      desc: 'A celebration of student achievements and performances.',
      icon: '🎭',
    },
    {
      title: 'Sports Meet',
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

      {/* STUDENT LIFE PREVIEW */}
      <section className="section-soft">
        <div className="section-container">
          <h2 className="section-heading">Student Life & Activities</h2>

          <p className="section-intro mb-4">
            At The Learning World School, learning goes beyond classrooms. Students are encouraged
            to participate in a wide range of academic, cultural, and sports activities throughout
            the year.
          </p>

          <div className="grid-2">
            <div className="card">
              <h4 className="mb-2" style={{ color: 'var(--primary-blue)' }}>
                � Academic & Club Activities
              </h4>
              <p>
                Science exhibitions, debates, quizzes, reading programs, and subject-based clubs to
                encourage curiosity and confidence.
              </p>
            </div>

            <div className="card">
              <h4 className="mb-2" style={{ color: 'var(--primary-blue)' }}>
                🎨 Cultural, Sports & Creative Events
              </h4>
              <p>
                Annual celebrations, sports meets, art exhibitions, music, dance, and theatre
                activities for holistic development.
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
