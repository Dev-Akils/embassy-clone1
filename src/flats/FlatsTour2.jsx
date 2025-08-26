import { useState } from "react";
import roomImage from "../assets/arcadianew.1b5937e826f63ad284a0.jpg";
import { Link } from "react-router-dom";
import { Tooltip, Button, Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const units = [
    {
        id: 1, name: "Unit No. 1", type: "3 BHK", size: "1400 sq.ft", top: 100, height: 200,
        left: 0, width: 460,
        hoverColor: "rgba(255,112,67,0.3)",
        polygonPoints: "185,290,92,529,148,529,79,706,121,719,124,754,191,754,190,714,257,711,256,738,325,738,331,709,524,709,572,534,820,537,1004,533,1001,629,1133,631,1138,558,1258,554,1356,554,1501,554,1496,385,1499,419,1427,419,1430,384,1385,382,1385,324,1345,324,1340,361,1207,364,1207,321,1168,321,1170,287,1091,284,829,281,823,297,728,294,726,334,649,332,659,263,604,260,596,292,463,297,463,266,413,263,252,266,236,295"
    },
    {
        id: 2, name: "Unit No. 2", hoverColor: "rgba(67,160,71,0.3)",
        type: "3 BHK", size: "1400 sq.ft", top: 20, height: 200, left: 50, width: 470,
        polygonPoints: "1501,381,1499,550,1745,550,1859,542,1872,627,2010,627,1996,529,2378,532,2415,699,2616,696,2624,741,2701,738,2701,704,2754,706,2756,744,2815,744,2815,709,2873,704,2804,532,2913,529,2823,285,2764,285,2759,264,2526,264,2531,296,2404,296,2394,259,2330,264,2341,328,2288,328,2280,293,2182,293,2179,272,1906,272,1906,298,1827,296,1819,328,1787,328,1787,359,1655,357,1655,328,1605,328,1599,381"
    },
    {
        id: 3, name: "Unit No. 3", type: "2 BHK",
        hoverColor: "rgba(33,150,243,0.3)",
        size: "1150 sq.ft", top: 20, height: 270, left: 50, width: 420,
        polygonPoints: "217,1475,214,1475,320,1099,355,1099,368,1054,334,1051,355,985,564,987,569,1024,633,1017,633,977,680,974,702,977,712,932,686,929,707,850,712,815,1041,805,1030,897,1149,897,1139,1006,1501,1011,1501,1178,1448,1176,1446,1197,1403,1199,1403,1176,1374,1176,1374,1335,1329,1335,1327,1377,1154,1377,1160,1340,1117,1337,1109,1470,1035,1475,1035,1557,834,1560,839,1470,760,1470,752,1523,590,1523,596,1475,477,1478,469,1533,283,1539,294,1475"
    },
    {
        id: 4, name: "Unit No. 4", type: "2 BHK",
        hoverColor: "rgba(156,39,176,0.3)",
        size: "1200 sq.ft", top: 20, height: 270, left: 0, width: 490,
        polygonPoints: "1496,1014,1581,1011,1867,1014,1848,850,1975,847,2296,850,2309,903,2304,934,2312,966,2362,969,2367,1006,2423,1006,2428,977,2645,977,2658,1019,2645,1046,2656,1088,2677,1083,2783,1478,2717,1475,2722,1536,2518,1536,2515,1496,2521,1472,2433,1472,2433,1515,2256,1517,2245,1480,2163,1478,2177,1562,1975,1565,1967,1478,1888,1478,1877,1348,1853,1345,1853,1377,1681,1374,1676,1335,1618,1337,1605,1244,1607,1279,1523,1279,1523,1247,1499,1247,1499,1197,1496,1101"
    },
];



export default function FlatsTour2() {
    const [selectedFloor, setSelectedFloor] = useState(null);
    const [hoveredFloor, setHoveredFloor] = useState(null);
    const [zoomOpen, setZoomOpen] = useState(false);

    const handleFloorClick = (id) => {
        setSelectedFloor(id);
        console.log(`Unit ${id} clicked`);
    };


    function scalePolygon(points, scale = 0.7) {
        const nums = points.split(/[\s,]+/).map(Number);
        return nums
            .map((num) => num * scale)
            .reduce((acc, val, i) => acc + val + (i % 2 === 0 ? "," : " "), "")
            .trim();
    }
    return (
        <div className="flex gap-6 flex-col md:flex-row p-5 w-full h-screen">
            {/* Sidebar (Units List) */}
            <div className="md:w-[20%] w-full flex flex-col items-center justify-center border-r p-4">
                <h3 className="text-xl font-semibold mb-4">Units</h3>
                {units.map((unit) => (
                    <Link key={unit.id} to={`/roomtour2`} className="w-full">
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                mb: 2,
                                backgroundColor:
                                    hoveredFloor === unit.id || selectedFloor === unit.id
                                        ? "#ff7043"
                                        : "#d4a373",
                                "&:hover": { backgroundColor: "#ff7043" },
                                transition: "0.3s",
                            }}
                            onMouseEnter={() => setHoveredFloor(unit.id)}
                            onMouseLeave={() => setHoveredFloor(null)}
                            onClick={() => handleFloorClick(unit.id)}
                        >
                            {unit.name}
                        </Button>
                    </Link>
                ))}
            </div>

            <div className="relative w-full md:h-screen flex items-center justify-center">
                {/* Floorplan Image */}
                <img src={roomImage} alt="Floorplan" className="w-full h-auto" />


                {/* SVG overlay */}

                {units.map((unit) => (
                    <svg
                        className={`absolute md:top-16 top-0 md:left-0 md:left-${unit.left} w-full h-full`}
                        style={{ pointerEvents: "none" }}
                    >
                        <Link key={unit.id} to={`/roomtour2`}>
                            <Tooltip
                                key={unit.id}
                                title={`${unit.name} (${unit.type}, ${unit.size})`}
                                arrow
                                placement="top"
                                componentsProps={{
                                    tooltip: {
                                        sx: { bgcolor: "#ff7043", fontSize: "0.85rem", padding: "5px 8px" },
                                    },
                                }}
                            >
                                <polygon
                                    points={scalePolygon(unit.polygonPoints, 0.34)}
                                   
                                    fill={
                                        selectedFloor === unit.id
                                            ? "rgba(255,112,67,0.5)"   // selected fill
                                            : hoveredFloor === unit.id
                                                ? unit.hoverColor          
                                                : "transparent"
                                    }

                                    // stroke="orange"
                                    strokeWidth={2}
                                    style={{ cursor: "pointer", pointerEvents: "all" }}
                                    onMouseEnter={() => setHoveredFloor(unit.id)}
                                    onMouseLeave={() => setHoveredFloor(null)}
                                    onClick={() => setSelectedFloor(unit.id)}
                                />
                            </Tooltip>
                        </Link> </svg>))}

            </div>

            {/* Right Sidebar */}
            <div className="md:w-[20%] w-full  flex flex-col items-center justify-center border-r p-4">
                <Link to={`/flats`} className="w-full">
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mb: 2,
                            backgroundColor: "#d4a373",
                            "&:hover": { backgroundColor: "#ff7043" },
                            transition: "0.3s",
                        }}
                    >
                        Go Back
                    </Button>
                </Link>

                <Button
                    onClick={() => setZoomOpen(true)}
                    variant="outlined"
                    sx={{
                        borderColor: "#ff7043",
                        color: "#ff7043",
                        "&:hover": { borderColor: "#d4a373", color: "#d4a373" },
                    }}
                >
                    Zoom Image
                </Button>
            </div>

            {/* Zoom Modal */}
            <Modal open={zoomOpen} onClose={() => setZoomOpen(false)}>
                <Box
                    className="flex items-center justify-center h-screen w-screen bg-black/80"
                    sx={{ outline: "none" }}
                >
                    {/* Close button */}
                    <IconButton
                        onClick={() => setZoomOpen(false)}
                        sx={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            color: "white",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Zoomed Image */}
                    <img
                        src={roomImage}
                        alt="Zoomed Flat"
                        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
                    />
                </Box>
            </Modal>
        </div>
    );
}
