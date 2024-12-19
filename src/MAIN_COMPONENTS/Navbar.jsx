import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import laxyaLogo from '../Images/Logos/Laxya-Logo.webp';
import hamburger from '../Images/Navbar_Icons/list-icon.svg';
import cross from '../Images/Navbar_Icons/close-icon.svg';

const Navbar = () => {
  const [visible, setVisible] = useState (false);

  const links = [
    {name: 'HOME', path: '/'},
    {name: 'ABOUT', path: '/about'},
    {name: 'PORTFOLIO', path: '/portfolio'},
    {name: 'BLOGS', path: '/blog'},
    {name: 'TALENT REGISTRATION', path: '/talent'},
    {name: 'CONTACT', path: '/contact'},
  ];

  const toggleMenu = () => setVisible (!visible);

  return (
    <header className="top-0 z-50 sticky bg-white shadow-md">
      <nav className="flex justify-between items-center mx-auto px-4 py-3 container">
        {/* Logo */}
        <Link to="/">
          <div className="w-auto">
            <img
              src={laxyaLogo}
              alt="Laxya Logo"
              className="max-w-[195px] max-sm:max-w-[215px] max-md:max-w-[195px]"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="md:flex flex-shrink-0 space-x-6 hidden text-[15px]">
          {links.map (link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({isActive}) =>
                isActive ? 'text-yellow scale-110' : 'text-black scale-100'}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="flex justify-center items-center md:hidden p-2 border rounded"
          aria-expanded={visible}
        >
          <img
            src={visible ? cross : hamburger}
            alt={visible ? 'Close Menu' : 'Open Menu'}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-300 md:hidden z-40 ${visible ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          {/* Logo */}
          <img
            src={laxyaLogo}
            alt="Laxya Logo"
            className="max-w-[195px] max-sm:max-w-[215px] max-md:max-w-[195px]"
          />

          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="p-2 border rounded"
            aria-label="Close Navigation Menu"
          >
            <img src={cross} alt="Close Menu" />
          </button>
        </div>

        <div className="flex flex-col items-start space-y-4 p-6 text-lg">
          {links.map (link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setVisible (false)}
              className="w-full text-black hover:text-yellow"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
