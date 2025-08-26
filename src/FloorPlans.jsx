// import React, { useState } from "react";
// import ImageMapper from "react-image-mapper";
// import floorImage from "./assets/arcadianew.1b5937e826f63ad284a0.jpg";

// const MAP = {
//   name: "floor-map",
//   areas: [
//     { id: 1, shape: "poly", coords: [60,10, 220,50, 220,150, 60,150], preFillColor: "rgba(0,0,0,0.2)", fillColor: "rgba(255,165,0,0.6)" },
//     { id: 2, shape: "poly", coords: [240,50, 400,50, 400,150, 240,150], preFillColor: "rgba(0,0,0,0.2)", fillColor: "rgba(0,255,0,0.6)" },
//   ]
// };

// export default function FloorPlan() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="bg-red-300 p-10">
//       <ImageMapper
//         src={floorImage}
//         map={MAP}
//         onMouseEnter={(area) => setHovered(area.id)}
//         onMouseLeave={() => setHovered(null)}
//         onClick={(area) => alert(`You clicked on ${area.id}`)}
//       />
//       {hovered && <p>Hovering over Room {hovered}</p>}
//     </div>
//   );
// }
