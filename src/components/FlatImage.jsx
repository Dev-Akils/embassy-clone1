import { useState } from "react";
import flatImage from "../assets/arcadia.82c09093100814ef0c65.jpg";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';

const floors = [
  { number: 38, label: "Floor 38", top: 25, height: 3 },
  { number: 37, label: "Floor 37", top: 27, height: 3 },
  { number: 36, label: "Floor 36", top: 29, height: 3 },
  { number: 35, label: "Floor 35", top: 31, height: 3 },
   { number: 34, label: "Floor 34", top: 33, height: 3 },
  { number: 33, label: "Floor 33", top: 35, height: 3 },
  { number: 32, label: "Floor 32", top: 37, height: 3 },
  { number: 31, label: "Floor 31", top: 39, height: 3 },
];

export default function FlatImage() {
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [hoveredFloor, setHoveredFloor] = useState(null);

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
          className={`absolute cursor-pointer transition-colors duration-200
            ${selectedFloor === floor.number ? "bg-orange-300/50" : ""}
            ${hoveredFloor === floor.number ? "bg-orange-300/50" : ""}
          `}
          style={{
            top: `${floor.top}%`,
            height: `${floor.height}%`,
            width: "20%",       // <-- short width
            left: "45%",        // <-- center horizontally (50%-width/2)
          }}
          onClick={() => handleFloorClick(floor.number)}
          onMouseEnter={() => setHoveredFloor(floor.number)}
          onMouseLeave={() => setHoveredFloor(null)}
          data-tooltip-id={`floor-tooltip-${floor.number}`}
          data-tooltip-content={`Floor ${floor.number}`}
        >
          <Tooltip id={`floor-tooltip-${floor.number}`} />
        </div>
      ))}
    </div>
  );
}
