import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { NavLink, useNavigate } from "react-router";


const Nav = () => {
  const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (

      <nav className="py-3 px-3">
        <div className="flex justify-between items-center">

          <div onClick={() => navigate("/")} className="logo text-3xl font-extrabold uppercase">Nexus <span className='text-red-800'>news</span></div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={toggleMenu} className="md:hidden text-3xl border text-red-800">
            {menuOpen ? <BiX  /> : <BiMenu  />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 text-gray-500 font-medium flex flex-col pl-5 gap-3 py-4">
            <NavLink to="/health" >Health</NavLink>
            <NavLink to="/politics" >Politics</NavLink>
            <NavLink to="/sports" >Sports</NavLink>
            <NavLink to="/business" >Business</NavLink>
            <NavLink to="/india" >India</NavLink>
            <NavLink to="/science" >Science</NavLink>
            <NavLink to="/world" >World</NavLink>
            <NavLink to="/" >About</NavLink>
            <NavLink to="/" >Contact</NavLink>
          </div>
        )}
      </nav>
    
  );
};

export default Nav;
