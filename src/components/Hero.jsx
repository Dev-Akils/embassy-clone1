import React from "react";
import heroImage from '../assets/arcadia.82c09093100814ef0c65.jpg';

import NavbarLinks from "./NavbarLinks";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex flex-col  items-center justify-center "
      style={{ backgroundImage: `url(${heroImage})`}}
    >
      <div className="absolute bg-black bg-opacity-50 p-8 rounded-xl text-center text-white ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Embassy Towers</h1>
        <p className="text-lg md:text-xl">Luxury Homes & Premium Flats</p>
      </div>
      <div className="absolute bottom-7 flex gap-6 text-gray-700 font-medium">
     <NavbarLinks/>
     </div>
    </section>
  );
};

export default Hero;
