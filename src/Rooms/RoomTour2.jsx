import { useState } from "react";
import roomImage from "../assets/FLAT1.jpg";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function RoomTour2() {
    const [hoveredRoom, setHoveredRoom] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);

    //   Starts at the top-left corner (350,50)

    // Goes to top-right (550,50)

    // Then to bottom-right (550,200)

    // Then to bottom-left (350,200)
    //  "350,50 550,50 550,200 350,200",

    //     (x1, y1)  top-left  
    // (x2, y2) top-right  
    // (x3, y3) → right inner corner  
    // (x4, y4) → bottom inner corner  
    // (x5, y5) → bottom-left  
    // (x6, y6) → left inner corner  


    const roomtour = [
        {
            id: 1,
            label: "Bolcony",
            size: "11'0'' x 15'0''",
            polygonPoints: "150,150 250,150 250,200 150,200",
        },
        {
            id: 2,
            label: "Master Bedroom",
            size: "11'0'' x 15'0''",
            polygonPoints: "290,160 460,160 440,310 260,310",
        },
        {
            id: 3,
            label: "Master Toilet",
            size: "5'0'' x 8'0''",
            polygonPoints: "455,160 530,160 530,310 440,310",
        },
        {
            id: 4,
            label: "Living Room & Dining",
            size: "9'0'' x 8'0''",
            polygonPoints: "525,190 850,190 870,350 520,350",
        },
        {
            id: 5,
            label: "Living Hall Balcony",
            size: "2'0'' x 8'0''",
            polygonPoints: "585,150 780,150 782,190 585,190",
        },
        {
            id: 6,
            label: "BedRoom-3",
            size: "5'0'' x 8'0''",
            polygonPoints: "855,210 1020,210 1055,380 875,380",
        },
        {
            id: 7,
            label: "BedRoom-3 Restroom",
            size: "4'0'' x 5'0''",
            polygonPoints: "1035,270 1120,270 1160,380 1060,380",
        },
        {
            id: 8,
            label: "Walking through Closet",
            size: "2'0'' x 2'0''",
            polygonPoints: "765,350 860,350 870,439 767,442",
        },
        {
            id: 9,
            label: "Toilet-1",
            size: "3'0'' x 2'0''",
            polygonPoints: "100,350 200,350 165,470 60,470",
        },
        {
            id: 10,
            label: "Kitchen",
            size: "3'0'' x 2'0''",
            polygonPoints: "190,430 270,430 287,350 430,350 415,520 170,520",
        },
        {
            id: 11,
            label: "Bedroom-1",
            size: "10'0'' x 12'0''",
            polygonPoints: "110,196 270,200 250,310 250,320 200,350 60,349"
        },
        {
            id: 12,
            label: "Walking space to Toilet",
            size: "2'0'' x 2.5'0''",
            polygonPoints: "200,350 270,320 250,410 180,410",

        },
    ];
    const activeRoom = roomtour.find((room) => room.id === selectedRoom);
    return (
        <div className="flex justify-center flex-col md:flex-row items-start mt-10 p-5 gap-5">
            {/* Sidebar - list all rooms */}

            <div className="md:w-[25%] w-full flex flex-col border p-2 rounded shadow gap-1">
                <h2 className="font-bold border-b-2">List all Rooms</h2>
                {roomtour.map((room) => (
                    <div
                        key={room.id}
                        className={`p-1 rounded cursor-pointer transition ${hoveredRoom === room.id ? "bg-yellow-200 font-bold shadow-md" : "bg-white"
                            }`}
                        onMouseEnter={() => setHoveredRoom(room.id)}
                        onMouseLeave={() => setHoveredRoom(null)}
                    >
                        <h2 className="text-sm">{room.label}</h2>
                        <p className="text-gray-600 text-sm">Size: {room.size}</p>
                    </div>
                ))}
            </div>

            <div
                className="relative w-full md:w-[75%] max-w-[1200px] aspect-[16/9]"
                style={{
                    backgroundImage: `url(${roomImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* SVG overlay */}
                <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 1200 675" // depends on your image ratio
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {roomtour.map((room) => (
                        <polygon
                            key={room.id}
                            points={room.polygonPoints}
                            fill={
                                hoveredRoom === room.id
                                    ? "rgba(255, 215, 0, 0.5)" // yellow highlight on hover
                                    : "transparent"
                            }
                            stroke="yellow"
                            strokeWidth={hoveredRoom === room.id ? 3 : 0}
                            data-tooltip-id={`tooltip-${room.id}`}
                            onMouseEnter={() => setHoveredRoom(room.id)}
                            onMouseLeave={() => setHoveredRoom(null)}
                            style={{ cursor: "pointer" }}
                        />
                    ))}
                </svg>

                {/* Tooltips for polygons */}
                {roomtour.map((room) => (
                    <Tooltip
                        key={room.id}
                        id={`tooltip-${room.id}`}
                        content={`${room.label} - ${room.size}`}
                        className="!bg-yellow-300 !text-black !px-2 !py-1 !rounded"
                    />
                ))}
            </div>
        </div>
    );
}
