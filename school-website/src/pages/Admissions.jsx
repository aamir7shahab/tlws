export default function Admissions() {
  return (
    <div className="flex justify-center py-20 px-4">
      <div className="bg-white max-w-2xl w-full rounded-xl shadow p-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Admissions</h1>

        <p className="text-gray-700 mb-6">
          We welcome applications from families who value academic excellence and holistic
          development.
        </p>

        <div className="bg-blue-50 p-6 rounded mb-6">
          <h2 className="font-semibold text-blue-600 mb-3">Admission Process</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Submit online application</li>
            <li>Attend school tour</li>
            <li>Student interaction</li>
            <li>Admission decision via email</li>
            <li>Fee payment & orientation</li>
          </ol>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
          Contact Admissions
        </button>
      </div>
    </div>
  );
}
