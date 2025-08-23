import { useState } from "react";
import flatImage from "../assets/arcadia.82c09093100814ef0c65.jpg";
import { Link } from "react-router-dom";

const floors = [
  { number: 1, label: "Floor 38", top: 25, height: 3 },
//   { number: 2, label: "Floor 35", top: 30, height: 3 },
  
];

export default function FlatImage() {
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [hoveredFloor, setHoveredFloor] = useState(null); // track hovered floor

  const handleFloorClick = (floorNumber) => {
    console.log(`Floor ${floorNumber} clicked`);
    setSelectedFloor(floorNumber);
  };

  return (
    <div className="relative w-full h-full">
      <img
        src={flatImage}
        alt="Flat"
        className="rounded-2xl shadow-lg w-full h-full object-cover"
      />

      {/* Floor overlay */}
      {floors.map((floor) => (
        <div
          key={floor.number}
          className={`absolute left-0 right-0 cursor-pointer ${
            selectedFloor === floor.number ? "bg-blue-200/50" : ""
          }`}
          style={{
            top: `${floor.top}%`,
            height: `${floor.height}%`,
          }}
          onClick={() => handleFloorClick(floor.number)}
          onMouseEnter={() => setHoveredFloor(floor.number)}
          onMouseLeave={() => setHoveredFloor(null)}
        >
          {/* Show label only when this floor is hovered */}
          {hoveredFloor === floor.number && (
            <Link to="/roomtour">
            <span className="absolute left-[60%] -translate-x-1/2 text-sm bg-orange-300 p-1 rounded shadow">
              {floor.label}
            </span></Link>
          )}
        </div>
      ))}

     
    </div>
  );
}
