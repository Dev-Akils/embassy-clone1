// import { useEffect, useRef, useState } from "react";
// import ImageMapper from "react-img-mapper";
// import roomImage from "../assets/arcadianew.1b5937e826f63ad284a0.jpg";
// import { Link } from "react-router-dom";
// import { Button, Modal, Box, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const units = [
//   { id: 1, name: "Unit No. 1", type: "3 BHK", size: "1400 sq.ft", polygonPoints: "180,300 1500,320 1510,550 100,500" },
//   { id: 2, name: "Unit No. 2", type: "3 BHK", size: "1400 sq.ft", polygonPoints: "350,50 550,50 550,200 350,200" },
//   { id: 3, name: "Unit No. 3", type: "2 BHK", size: "1150 sq.ft", polygonPoints: "50,300 250,300 250,500 50,500" },
//   { id: 4, name: "Unit No. 4", type: "2 BHK", size: "1200 sq.ft", polygonPoints: "350,300 550,300 550,500 350,500" },
// ];

// // helper: "60,10 1161,10 ..." -> [60,10,1161,10,...]
// const toCoords = (points) =>
//   points
//     .trim()
//     .split(/\s+/)
//     .flatMap((p) => p.split(",").map(Number));

// export default function FlatsTour1() {
//   const [selectedId, setSelectedId] = useState(null);
//   const [hoveredId, setHoveredId] = useState(null);
//   const [zoomOpen, setZoomOpen] = useState(false);

//   const wrapRef = useRef(null);
//   const [parentWidth, setParentWidth] = useState(0);

//   useEffect(() => {
//     const el = wrapRef.current;
//     if (!el) return;
//     const ro = new ResizeObserver(() => setParentWidth(el.clientWidth));
//     ro.observe(el);
//     setParentWidth(el.clientWidth);
//     return () => ro.disconnect();
//   }, []);

// // Build areas with hover + selected highlight
// const areas = units.map((u) => ({
//   id: String(u.id),
//   shape: "poly",
//   coords: toCoords(u.polygonPoints),
//   preFillColor:
//     selectedId === u.id
//       ? "rgba(255,112,67,0.6)" // fill when selected
//       : hoveredId === u.id
//       ? "rgba(255,112,67,0.3)" // fill when hovered
//       : "transparent",          // no fill, but still visible border
//   strokeColor:
//     selectedId === u.id
//       ? "#ff7043"               // orange when selected
//       : hoveredId === u.id
//       ? "#ff7043"               // orange when hovered
//       : "#444",                 // 👈 default border (dark gray)
//   lineWidth: selectedId === u.id ? 3 : 2, // thicker when selected
// }));

//   return (
//     <div className="flex gap-6 flex-col md:flex-row p-5 w-full h-screen">
//       {/* Sidebar (Units List) */}
//       <div className="md:w-[20%] w-full flex flex-col items-center justify-center border-r p-4">
//         <h3 className="text-xl font-semibold mb-4">Units</h3>
//         {units.map((unit) => (
//           <Link key={unit.id} to={`/roomtour2`} className="w-full">
//             <Button
//               fullWidth
//               variant="contained"
//               sx={{
//                 mb: 2,
//                 backgroundColor:
//                   hoveredId === unit.id
//                     ? "#ffab91" // lighter on hover
//                     : selectedId === unit.id
//                     ? "#ff7043" // darker on select
//                     : "#d4a373",
//                 "&:hover": { backgroundColor: "#ff7043" },
//                 transition: "0.3s",
//               }}
//               onMouseEnter={() => setHoveredId(unit.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               onClick={() => setSelectedId(unit.id)}
//             >
//               {unit.name}
//             </Button>
//           </Link>
//         ))}
//       </div>

//       {/* Floorplan with hover mapping */}
//       <div ref={wrapRef} className="relative w-full md:h-screen flex items-center justify-center">
//         {hoveredId && (
//           <div className="absolute   top-3 right-3 z-10 bg-[#ff7043] text-white text-sm px-3 py-1 rounded">
//             {units.find((u) => u.id === hoveredId)?.name}
//           </div>
//         )}

//         <ImageMapper
//           src={roomImage}
//           name="floor-map"
//           areas={areas}
//           responsive
//           parentWidth={parentWidth}
//           onClick={(area) => setSelectedId(Number(area.id))}
//           onMouseEnter={(area) => setHoveredId(Number(area.id))}
//           onMouseLeave={() => setHoveredId(null)}
//           imgProps={{ style: { cursor: "crosshair", borderRadius: 8 } }}
//           containerProps={{ style: { width: "100%" } }}
//         />
//       </div>

//       {/* Right Sidebar */}
//       <div className="md:w-[20%] w-full flex flex-col items-center justify-center border-r p-4">
//         <Link to={`/flats`} className="w-full">
//           <Button
//             fullWidth
//             variant="contained"
//             sx={{
//               mb: 2,
//               backgroundColor: "#d4a373",
//               "&:hover": { backgroundColor: "#ff7043" },
//               transition: "0.3s",
//             }}
//           >
//             Go Back
//           </Button>
//         </Link>

//         <Button
//           onClick={() => setZoomOpen(true)}
//           variant="outlined"
//           sx={{
//             borderColor: "#ff7043",
//             color: "#ff7043",
//             "&:hover": { borderColor: "#d4a373", color: "#d4a373" },
//           }}
//         >
//           Zoom Image
//         </Button>
//       </div>

//       {/* Zoom Modal */}
//       <Modal open={zoomOpen} onClose={() => setZoomOpen(false)}>
//         <Box
//           className="flex items-center justify-center h-screen w-screen bg-black/80"
//           sx={{ outline: "none" }}
//         >
//           <IconButton
//             onClick={() => setZoomOpen(false)}
//             sx={{
//               position: "absolute",
//               top: 20,
//               right: 20,
//               color: "white",
//               backgroundColor: "rgba(0,0,0,0.6)",
//               "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//           <img
//             src={roomImage}
//             alt="Zoomed Flat"
//             className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
//           />
//         </Box>
//       </Modal>
//     </div>
//   );
// }
