

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactForm from './components/ContactForm';
import Flats from './components/Flats';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import RoomTour1 from './components/Roomtour1';

function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/flats" element={<Flats />} />
          <Route path="/contact" element={<ContactForm />} />
           <Route path="/roomtour" element={<RoomTour1 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
