// import { useState } from "react";
// import roomImage from "../assets/arcadianew.1b5937e826f63ad284a0.jpg";
// import { Link } from "react-router-dom";
// import { Tooltip, Button, Modal, Box, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const units = [
//   { id: 1, name: "Unit No. 1", type: "3 BHK", size: "1400 sq.ft", top: 15, height: 200, left: 4, width: 460 },
//   { id: 2, name: "Unit No. 2", type: "3 BHK", size: "1400 sq.ft", top: 15, height: 200, left: 50, width: 470 },
//   { id: 3, name: "Unit No. 3", type: "2 BHK", size: "1150 sq.ft", top: 50, height: 270, left: 8, width: 420 },
//   { id: 4, name: "Unit No. 4", type: "2 BHK", size: "1200 sq.ft", top: 50, height: 280, left: 50, width: 490 },
// ];

// export default function FlatsTour() {
//   const [selectedFloor, setSelectedFloor] = useState(null);
//   const [hoveredFloor, setHoveredFloor] = useState(null);
//   const [zoomOpen, setZoomOpen] = useState(false);

//   const handleFloorClick = (id) => {
//     setSelectedFloor(id);
//     console.log(`Unit ${id} clicked`);
//   };

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
//                   hoveredFloor === unit.id || selectedFloor === unit.id
//                     ? "#ff7043"
//                     : "#d4a373",
//                 "&:hover": { backgroundColor: "#ff7043" },
//                 transition: "0.3s",
//               }}
//               onMouseEnter={() => setHoveredFloor(unit.id)}
//               onMouseLeave={() => setHoveredFloor(null)}
//               onClick={() => handleFloorClick(unit.id)}
//             >
//               {unit.name}
//             </Button>
//           </Link>
//         ))}
//       </div>

//       {/* Image with Overlays */}
//       <div className="relative w-[70%] md:w-full  flex items-center justify-center left-10 md:left-0 pt-0 md:pt-3">
//         <img
//           src={roomImage}
//           alt="Flat"
//           className="rounded-sm shadow-lg w-full h-full object-contain"
//         />

//         {units.map((unit) => (
//           <Link key={unit.id} to={`/roomtour2`}>
//             <Tooltip
//               title={
//                 <span className="font-semibold text-white">
//                   {unit.name} <br /> ({unit.type}, {unit.size})
//                 </span>
//               }
//               arrow
//               placement="top"
//               PopperProps={{
//                 modifiers: [
//                   {
//                     name: "offset",
//                     options: { offset: [0, -10] },
//                   },
//                 ],
//               }}
//               componentsProps={{
//                 tooltip: {
//                   sx: {
//                     bgcolor: "#ff7043",
//                     "& .MuiTooltip-arrow": { color: "#ff7043" },
//                     fontSize: "0.85rem",
//                     padding: "6px 10px",
//                   },
//                 },
//               }}
//             >
//               <div
//                 className={`absolute cursor-pointer transition-all duration-300 rounded-lg
//                   ${selectedFloor === unit.id ? "bg-orange-600/60" : ""}
//                   ${hoveredFloor === unit.id ? "bg-orange-500/40" : ""}
//                 `}
//                 style={{
//                   top: `${unit.top}%`,
//                   height: `${unit.height}px`,
//                   left: `${unit.left}%`,
//                   width: `${unit.width}px`,
//                 }}
//                 onClick={() => handleFloorClick(unit.id)}
//                 onMouseEnter={() => setHoveredFloor(unit.id)}
//                 onMouseLeave={() => setHoveredFloor(null)}
//               />
//             </Tooltip>
//           </Link>
//         ))}
//       </div>

//       {/* Right Sidebar */}
//       <div className="md:w-[20%] w-full  flex flex-col items-center justify-center border-r p-4">
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
//           {/* Close button */}
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

//           {/* Zoomed Image */}
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
