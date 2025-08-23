import Logo1 from '../assets/logo.8ebf9be0731677a96c38.png';
import Logo2 from '../assets/logo2.ed696ec8fd3d1863db57.png'


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <img src={Logo1} alt="Logo1" className="h-10" />
       <img src={Logo2} alt="Logo2" className="h-10" />
      
    </nav>
  );
};

export default Navbar;
