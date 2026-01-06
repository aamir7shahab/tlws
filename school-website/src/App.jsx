import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center py-4 mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} The Learning World School. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
