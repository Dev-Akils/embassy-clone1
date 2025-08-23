import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Flats", path: "/flats" },
  { label: "Contact", path: "/contact" },
];

export default function NavbarLinks() {
  return (
    <ul className="flex justify-center  text-white gap-5 px-6 py-8">
      {navItems.map((item) => (
        <li
          key={item.path}
          className="bg-black px-2 py-2 rounded text-white hover:bg-gray-800 transition"
        >
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
