import { useRef, useEffect, useState } from 'react';
import '../styles/about.css';
import '../styles/home.css';

import SchoolFront from '../assets/SchoolFront.JPG';
import EntrySchool from '../assets/EntrySchool.JPG';
import InnerSchool from '../assets/InnerSchool.JPG';
import Board from '../assets/Board.JPG';
import OpeningCeremony from '../assets/OpeningCeremony.JPG';
import CandleLighting from '../assets/CandleLighting.JPG';
import Garland from '../assets/Garland.JPG';
import DCMSpeech from '../assets/DCMSpeech.JPG';
import Speech from '../assets/Speech.JPG';

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

      {/* WEBSITE UPDATE NOTICE */}
      <div className="website-notice">
        <p>
          This website is being updated as part of our school launch. For the most accurate and
          latest information, please <a href="/contact">contact</a> our admissions team.
        </p>
      </div>

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
            <p className="text-sm-secondary">
              We are inviting applications from qualified and passionate educators.
            </p>
          </div>

          {/* HIGHLIGHTED ADMISSION NOTICE */}
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
                href="https://forms.gle/GUZpBMw9XC5UWDox9"
                target="_blank"
                rel="noopener noreferrer"
                className="announcement-link"
              >
                Admission Open for 2026-27 – Apply Now
              </a>
            </div>
            <p className="text-sm-secondary">
              Enroll your child for the upcoming academic session. Limited seats available!
            </p>
          </div>

          {/* OTHER ANNOUNCEMENTS */}
          {/* <ul className="announcements-list">
            <li className="announcement-item">
              <span className="announcement-dot"></span>
              Annual Day scheduled for April 15, 2025
            </li>
            <li className="announcement-item">
              <span className="announcement-dot"></span>
              Science Fair registrations now open
            </li>
          </ul> */}
        </div>
      </section>

      {/* EDUCATIONAL PROMISE */}
      <section className="section-soft">
        <div className="section-container">
          <h2 className="section-heading">Our Educational Promise</h2>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="section-intro" style={{ marginBottom: '2rem' }}>
              At The Learning World School, our commitment is to create a safe, inclusive, and
              inspiring learning environment where every child is encouraged to explore, question,
              and grow.
            </p>

            <div style={{ textAlign: 'center' }}>
              <p style={{ fontWeight: '600', marginBottom: '1rem' }}>We promise:</p>
              <ul className="announcements-list" style={{ maxWidth: '700px', margin: '0 auto' }}>
                <li className="announcement-item" style={{ justifyContent: 'center' }}>
                  <span className="announcement-dot"></span>
                  Strong academic foundations aligned with the CBSE curriculum
                </li>
                <li className="announcement-item" style={{ justifyContent: 'center' }}>
                  <span className="announcement-dot"></span>
                  Experienced and caring educators
                </li>
                <li className="announcement-item" style={{ justifyContent: 'center' }}>
                  <span className="announcement-dot"></span>
                  Focus on values, discipline, and life skills
                </li>
                <li className="announcement-item" style={{ justifyContent: 'center' }}>
                  <span className="announcement-dot"></span>A balanced approach to academics,
                  sports, and creative arts
                </li>
                <li className="announcement-item" style={{ justifyContent: 'center' }}>
                  <span className="announcement-dot"></span>
                  Continuous communication and partnership with parents
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS GALLERY */}
      <CampusGallery />

      {/* LOCATION */}
      <section className="section-soft">
        <div className="section-container">
          <h2 className="section-heading">Our Location</h2>

          <p className="section-intro mb-4">Visit us to experience our campus and meet our team.</p>

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

const campusImages = [
  { src: SchoolFront,      alt: 'School Front',       caption: 'School Front' },
  { src: EntrySchool,      alt: 'School Entry',        caption: 'School Entry' },
  { src: InnerSchool,      alt: 'Inside the School',   caption: 'Inside the Campus' },
  { src: Board,            alt: 'School Board',        caption: 'School Board' },
  { src: OpeningCeremony,  alt: 'Opening Ceremony',    caption: 'Opening Ceremony' },
  { src: CandleLighting,   alt: 'Candle Lighting',     caption: 'Candle Lighting' },
  { src: Garland,          alt: 'Garland Ceremony',    caption: 'Garland Ceremony' },
  { src: DCMSpeech,        alt: 'DCM Speech',          caption: 'Chief Guest Speech' },
  { src: Speech,           alt: 'Speech',              caption: 'Inaugural Address' },
];

// Duplicate images for seamless infinite loop
const loopedImages = [...campusImages, ...campusImages];

function CampusGallery() {
  const trackRef = useRef(null);
  const isPaused = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll: moves by 1px every ~16ms (≈ 60fps), smooth constant motion
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId;
    const speed = 0.7; // px per frame — adjust for faster/slower

    const step = () => {
      if (!isPaused.current && track) {
        track.scrollLeft += speed;
        // When scrolled halfway (one full set of images), jump back to start silently
        const halfWidth = track.scrollWidth / 2;
        if (track.scrollLeft >= halfWidth) {
          track.scrollLeft -= halfWidth;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.querySelector('.gallery-card')?.offsetWidth || 340;
    trackRef.current.scrollBy({ left: dir * (cardWidth + 24), behavior: 'smooth' });
  };

  return (
    <section className="section">
      <div className="section-container-wide">
        <h2 className="section-heading">A Glimpse of Our Campus</h2>
        <p className="section-intro mb-4">
          Explore our modern facilities and vibrant learning environment
        </p>

        <div
          className="gallery-wrapper"
          onMouseEnter={() => { isPaused.current = true;  setIsHovered(true);  }}
          onMouseLeave={() => { isPaused.current = false; setIsHovered(false); }}
        >
          {/* LEFT ARROW */}
          <button
            className={`gallery-arrow gallery-arrow-left${isHovered ? ' gallery-arrow-visible' : ''}`}
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
          >
            &#8592;
          </button>

          {/* SCROLLABLE TRACK — looped images for seamless wrap */}
          <div className="gallery-track" ref={trackRef}>
            {loopedImages.map((img, i) => (
              <div className="gallery-card" key={i}>
                <img src={img.src} alt={img.alt} className="gallery-img" />
                <div className="gallery-caption">{img.caption}</div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            className={`gallery-arrow gallery-arrow-right${isHovered ? ' gallery-arrow-visible' : ''}`}
            onClick={() => scroll(1)}
            aria-label="Scroll right"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
