export default function Events() {
  const events = [
    {
      title: 'Science Fair',
      date: 'March 10, 2025',
      desc: 'An exhibition of science projects by students of all grades.',
    },
    {
      title: 'Annual Day',
      date: 'April 15, 2025',
      desc: 'A celebration of student achievements and performances.',
    },
    {
      title: 'Sports Meet',
      date: 'May 5, 2025',
      desc: 'A day of athletics and sporting spirit.',
    },
  ];

  return (
    <div className="py-20 px-10">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-10">Upcoming Events</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((e) => (
          <div key={e.title} className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-blue-600 font-semibold text-lg">{e.title}</h2>
            <p className="text-sm text-gray-500">{e.date}</p>
            <p className="text-gray-700 mt-2">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
