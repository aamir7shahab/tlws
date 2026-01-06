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
    <div className="px-4 py-16">
      {/* PAGE HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Our Faculty</h1>
        <p className="mt-4 text-gray-600">
          Our educators are experienced professionals dedicated to nurturing curiosity, confidence,
          and excellence.
        </p>
      </div>

      {/* FACULTY CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {facultyMembers.map((f, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6 text-center">
            <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
              {f.name.charAt(0)}
            </div>

            <h3 className="font-semibold text-lg">{f.name}</h3>
            <p className="text-blue-600">{f.subject}</p>

            <p className="text-sm text-gray-600 mt-2">{f.qualification}</p>
            <p className="text-sm text-gray-500">{f.experience}</p>
          </div>
        ))}
      </div>

      {/* APPLY SECTION */}
      <div className="max-w-4xl mx-auto mt-16 bg-white rounded-xl shadow p-10 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Join Our Faculty Team</h2>

        <p className="text-gray-600 mb-6">
          We welcome applications from passionate educators who wish to be part of our learning
          community.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeIFlU0OGPPWw9BfUVMU5tl6V5ZMPZBNi4aLaIAnp-D1NfVEA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded shadow hover:bg-blue-700"
        >
          Apply Now
        </a>

        <p className="mt-4 text-sm text-gray-500">Applications are reviewed on a rolling basis.</p>
      </div>
    </div>
  );
}
