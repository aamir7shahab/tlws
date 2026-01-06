import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Admissions from '../pages/Admissions';
import Faculty from '../pages/Faculty';
import Contact from '../pages/Contact';
import Events from '../pages/Events';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
}
