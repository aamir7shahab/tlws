export default function Home() {
  return (
    <div className="px-4 py-16">
      {/* HERO */}
      <section className="max-w-5xl mx-auto bg-white rounded-xl shadow p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
          Welcome to The Learning World School
        </h1>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            At <strong>The Learning World School</strong>, we are dedicated to creating an inspiring
            educational environment where every student is empowered to reach their full potential.
          </p>

          <p>
            Our school blends academic rigor with a strong focus on character building, creativity,
            and critical thinking.
          </p>

          <p>
            From early learners to senior classes, we provide a holistic curriculum supported by
            experienced faculty and enriching co-curricular activities.
          </p>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
            Explore Admissions
          </button>
        </div>
      </section>

      {/* LATEST ANNOUNCEMENTS */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Latest Announcements</h2>

        {/* HIGHLIGHTED FACULTY NOTICE */}
        <div className="mb-6 rounded-xl border-l-4 border-red-500 bg-gradient-to-r from-red-50 to-white p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full animate-pulse">
              NEW
            </span>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeIFlU0OGPPWw9BfUVMU5tl6V5ZMPZBNi4aLaIAnp-D1NfVEA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 text-lg font-semibold hover:underline"
            >
              Faculty Opening – Apply Now
            </a>
          </div>

          <p className="mt-2 text-sm text-gray-600">
            We are inviting applications from qualified and passionate educators.
          </p>
        </div>

        {/* OTHER ANNOUNCEMENTS */}
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            Admissions open for the 2025–26 academic session
          </li>

          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            Annual Day scheduled for April 15, 2025
          </li>

          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            Science Fair registrations now open
          </li>
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-xl font-semibold text-blue-600 mb-6">What Our Students Say</h2>

        <div className="space-y-6">
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
            “The Learning World School is more than just a school — it’s a family. The teachers
            really care!”
            <div className="mt-2 text-sm text-gray-500">— Aditi, Grade 8</div>
          </blockquote>

          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
            “Every day brings something new at TLWS. I love the library and science lab!”
            <div className="mt-2 text-sm text-gray-500">— Rohan, Grade 6</div>
          </blockquote>
        </div>
      </section>

      {/* CAMPUS */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-xl font-semibold text-blue-600 mb-6">A Glimpse of Our Campus</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b"
            className="rounded-lg shadow"
            alt="School building"
          />
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            className="rounded-lg shadow"
            alt="Students"
          />
        </div>
      </section>

      {/* LOCATION */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Our Location</h2>

        <iframe
          title="School Location"
          className="w-full h-72 rounded-lg shadow"
          src="https://maps.google.com/maps?q=Googleplex&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </section>
    </div>
  );
}
