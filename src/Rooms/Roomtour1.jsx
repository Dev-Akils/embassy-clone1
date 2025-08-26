// import { useState } from 'react';
// import roomImage from '../assets/FLAT1.jpg';
// import { Tooltip } from 'react-tooltip';
// import "react-tooltip/dist/react-tooltip.css";

// export default function RoomTourResponsive() {
//     const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: '' });
//     const [hoveredRoom, setHoveredRoom] = useState(null);
//     // Use percentages for top/left so it's responsive
//     const roomtour = [
//         { id: 1, label: "Master Bedroom", size: "11'0'' x 15'0''", top: 40, left: 18 },
//         { id: 2, label: "Walk-in Closet", size: "5'0'' x 6'0''", top: 50, left: 70 },
//         { id: 3, label: "Master Toilet", size: "5'0'' x 8'0''", top: 60, left: 12 },
//         { id: 4, label: "Bedroom-1", size: "11'0'' x 13'0''", top: 30, left: 30 },
//         { id: 5, label: "Bedroom-2", size: "11'0'' x 14'0''", top: 35, left: 80 },
//         { id: 6, label: "Toilet (Common)", size: "4'6'' x 8'0''", top: 33, left: 38 },
//         { id: 7, label: "Toilet (Bedroom-2)", size: "5'0'' x 8'0''", top: 50, left: 90 },
//         { id: 8, label: "Kitchen", size: "8'5'' x 11'2''", top: 57, left: 30 },

//         { id: 10, label: "Living / Dining", size: "21'0'' x 14'3''", top: 35, left: 52 },
//         { id: 11, label: "Balcony (Living)", size: "13'0'' x 5'0''", top: 21, left: 62 },
//         { id: 12, label: "Balcony (Master)", size: "7'0'' x 5'0''", top: 18, left: 18 },
//         { id: 13, label: "Entrance Foyer", size: "5'6'' x 6'11''", top: 53, left: 56 },

//     ];

//     const radius = 5;

//     const handleMouseMove = (e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const mouseXPercent = ((e.clientX - rect.left) / rect.width) * 100;
//         const mouseYPercent = ((e.clientY - rect.top) / rect.height) * 100;

//         const roomNearCursor = roomtour.find(room => {
//             const dx = mouseXPercent - room.left;
//             const dy = mouseYPercent - room.top;
//             return Math.sqrt(dx * dx + dy * dy) <= radius;
//         });

//         if (roomNearCursor) {
//             setTooltip({
//                 visible: true,
//                 x: e.clientX + 10,
//                 y: e.clientY + 10,
//                 text: `${roomNearCursor.label} - ${roomNearCursor.size}`,
//             });
//         } else {
//             setTooltip({ visible: false, x: 0, y: 0, text: '' });
//         }
//     };

//     return (
//         <div className="flex justify-center items-center mt-48 mb-40 md:mb-2 md:mt-2 lg:mt-10 lg:mb-10 p-5">
//             <div
//                 className="relative w-full max-w-[1200px] aspect-[16/9]"
//                 style={{
//                     backgroundImage: `url(${roomImage})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//                 onMouseMove={handleMouseMove}
//             >
//                 {roomtour.map((room) => (
//                     <div
//                         key={room.id}
//                         id={`room-${room.id}`} 
//                         data-tooltip-content={`${room.label} - ${room.size}`} 
//                         className="absolute bg-yellow-400 rounded-full cursor-pointer"
//                         style={{
//                             top: `${room.top}%`,
//                             left: `${room.left}%`,
//                             width: "1vw",
//                             height: "1vw",
//                             transform: "translate(-50%, -50%)",
//                         }}
//                         onMouseEnter={() => setHoveredRoom(room.id)}
//                         onMouseLeave={() => setHoveredRoom(null)}
//                     />
//                 ))}

//                 {/* Attach tooltip globally */}
//                 <Tooltip
//                     anchorSelect="[id^='room-']"
//                     place="top"
//                     className="!bg-yellow-300 !text-black !px-2 !py-1 !rounded"
//                 />
//             </div>
//         </div>
//     );
// }