export default function Contact() {
  return (
    <div className="flex justify-center py-20 px-4">
      <form className="bg-white max-w-xl w-full rounded-xl shadow p-10 space-y-4">
        <h1 className="text-3xl font-bold text-blue-600 text-center">Contact Us</h1>

        <input className="w-full border p-3 rounded" placeholder="Your Name" />
        <input className="w-full border p-3 rounded" placeholder="Your Email" />
        <textarea className="w-full border p-3 rounded h-32" placeholder="Your Message" />

        <button className="w-full bg-blue-600 text-white py-3 rounded shadow hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}
