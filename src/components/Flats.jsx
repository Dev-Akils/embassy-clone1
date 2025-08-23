

import FlatImage from "./FlatImage";
import NavbarLinks from "./NavbarLinks";

const Flats = () => {
    return (<>
        <section id="flats" className="py-16 px-6 bg-gray-50 mb-44 md:mb-4">
            <div className="h-screen grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 items-stretch">

                {/* Tower Features */}
                <div className="bg-white shadow-md rounded-2xl p-6 h-full flex flex-col justify-center">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Tower Features</h1>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Intercom Systems</li>
                            <li>Video Door Phone</li>
                            <li>CCTV Camera (Ground Floor Entrance Lobby)</li>
                            <li>Power Backup (Common Area)</li>
                            <li>Fire Fighting Systems</li>
                        </ul></div>
                </div>

                {/* Image (center, span 2 cols) */}
                <div className="md:col-span-2 h-full flex justify-center items-center">
                    <FlatImage />

                </div>

                {/* Unit Details */}
                <div className="bg-white shadow-md rounded-2xl p-6 h-full flex flex-col justify-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Unit Details</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Marble Flooring:</strong> Imported marble flooring in
                                Living, Dining, and all bedrooms
                            </li>
                            <li>
                                <strong>Tile Flooring:</strong> Vitrified tiles in Kitchen and
                                Bathrooms
                            </li>
                            <li>
                                <strong>Modular Kitchen:</strong> Quartz countertop; under-counter
                                setup
                            </li>
                            <li>
                                <strong>Air Conditioning:</strong> Living and Bedroom
                            </li>
                        </ul>
                    </div></div>
            </div>

        </section>
        <NavbarLinks /></>
    );
};

export default Flats;
