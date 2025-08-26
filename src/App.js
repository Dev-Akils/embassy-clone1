

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactForm from './components/ContactForm';
import Flats from './components/Flats';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import RoomTour1 from './Rooms/Roomtour1';

import FlatsTour from './flats/FlatsTour';
import FloorPlan from './FloorPlans';
import FlatsTour2 from './flats/FlatsTour2';
import RoomTour2 from './Rooms/RoomTour2';
import FlatsTour1 from './flats/FlatsTour1';

function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/flats" element={<Flats />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/flatstour2" element={<FlatsTour2/>}/>
          <Route path="/roomtour2" element={<RoomTour2 />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
