import React, {useState, useEffect} from 'react';
import laxyaLogo from '../Images/Logos/Laxya-Logo.webp';
import hamburger from '../Images/Navbar_Icons/list-icon.svg';
import cross from '../Images/Navbar_Icons/close-icon.svg';
import {Link, NavLink} from 'react-router-dom';
const Navbar = () => {
  const [visible, setVisible] = useState (false);
  const toggleMenu = () => {
    setVisible (!visible);
  };


  return (
    <header className="top-0 bottom-[100px] z-50 sticky">
      <nav className="flex justify-between items-center bg-white px-10">
        {/* Laxya Logo */}
        <div className="p-[5.625px] w-[206.17px]">
          <img src={laxyaLogo} alt="Laxya Logo" />
        </div>

        {/* Laxya Navigations */}
        <div className="block max-md:hidden">
          <div className="flex font-roboto text-[15px]">
            <NavLink
              to="/"
              className={({isActive}) =>
                `${isActive ? 'text-yellow scale-105' : 'text-black scale-100'} px-[18px] py-[9px]`}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive}) =>
                `${isActive ? 'text-yellow  scale-105' : 'text-black  scale-100'} px-[18px] py-[9px]`}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({isActive}) =>
                `${isActive ? 'text-yellow scale-105' : 'text-black scale-100'} px-[18px] py-[9px]`}
            >
              PORTFOLIO
            </NavLink>
            <NavLink
              to="/blog"
              className={({isActive}) =>
                `${isActive ? 'text-yellow scale-105' : 'text-black scale-100'} px-[18px] py-[9px]`}
            >
              BLOGS
            </NavLink>
            <NavLink
              to="/contact"
              className={({isActive}) =>
                `${isActive ? 'text-yellow scale-105' : 'text-black scale-100'} px-[18px] py-[9px]`}
            >
              CONTACT
            </NavLink>

          </div>
        </div>

        {/* Hamburger/Cross Button */}
        <button
          onClick={toggleMenu}
          className="max-md:block hidden px-[12px] py-[10px] border rounded transform transition-transform duration-300 hover:scale-110"
          aria-expanded={visible}
          aria-label={
            visible ? 'Close Navigation Menu' : 'Open Navigation Menu'
          }
        >
          <img
            src={visible ? cross : hamburger}
            alt={visible ? 'Close Menu' : 'Open Menu'}
          />
        </button>
      </nav>

      {/* SideNavbar */}
      <div
        className={`${visible ? 'translate-y-0' : '-translate-y-full'} fixed transition-all duration-300 -z-50 bg-white`}
      >
        <div className="flex flex-col px-4 w-screen text-[15px]">
          <Link to="/" className="px-0 py-[9px]">HOME</Link>
          <Link to="/about" className="px-0 py-[9px]">ABOUT</Link>
          <Link to="/portfolio" className="px-0 py-[9px]">PORTFOLIO</Link>
          <Link to="/blogs" className="px-0 py-[9px]">BLOGS</Link>
          <Link to="/contact" className="px-0 py-[9px]">CONTACT</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
