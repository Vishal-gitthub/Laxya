import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import laxyaLogo from '../Images/Logos/Laxya-Logo.webp';
import hamburger from '../Images/Navbar_Icons/list-icon.svg';
import cross from '../Images/Navbar_Icons/close-icon.svg';

const Navbar = () => {
  const [visible, setVisible] = useState (false);
  const [navbarVisible, setNavbarVisible] = useState (false);
  const [dropdownVisible, setDropdownVisible] = useState (false);

  useEffect (() => {
    const handleScroll = () => {
      setNavbarVisible (window.scrollY > 100);
    };
    window.addEventListener ('scroll', handleScroll);
    return () => {
      window.removeEventListener ('scroll', handleScroll);
    };
  }, []);

  const links = [
    {name: 'HOME', path: '/'},
    {name: 'ABOUT', path: '/about'},
    {
      name: 'PROJECTS',
      path: '/portfolio',
      dropdown: [
        {name: 'Still Shoot', path: '/still-shoot'},
        {name: 'Film Shoot', path: '/film-shoot'},
        {name: '3D Animation', path: '/portfolio/still-shoot'},
        {name: 'Events', path: '/portfolio/still-shoot'},
        {name: 'BTS', path: '/portfolio/still-shoot'},
      ],
    },
    {name: 'BLOGS', path: '/blog'},
    {name: 'TALENT REGISTRATION', path: '/talent'},
    {name: 'CONTACT', path: '/contact'},
  ];

  const toggleMenu = () => setVisible (!visible);

  return (
    <header
      className={`top-0 z-50 ${navbarVisible ? '-translate-y-0' : ' -translate-y-full'} fixed w-full transition-all duration-500 bg-white shadow-md`}
    >
      <nav className="flex justify-between items-center mx-auto px-4 py-0 container">
        {/* Logo */}
        <Link to="/">
          <img src={laxyaLogo} alt="Laxya Logo" className="max-w-[195px]" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden relative md:flex space-x-6 text-[15px]">
          {links.map (
            link =>
              link.dropdown
                ? <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setDropdownVisible (true)}
                    onMouseLeave={() => setDropdownVisible (false)}
                  >
                    <NavLink to={link.path} className="text-black">
                      {link.name}
                    </NavLink>
                    {dropdownVisible &&
                      <div className="top-full left-0 absolute bg-white shadow-md p-2 w-40">
                        {link.dropdown.map (item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block hover:bg-gray-200 px-4 py-2"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>}
                  </div>
                : <NavLink
                    key={link.name}
                    to={link.path}
                    className={({isActive}) =>
                      isActive ? 'text-yellow font-semibold' : 'text-black'}
                  >
                    {link.name}
                  </NavLink>
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 border rounded"
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
        className={`fixed inset-0 bg-white transition-all duration-300 md:hidden z-40 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <img src={laxyaLogo} alt="Laxya Logo" className="max-w-[195px]" />
          <button
            onClick={toggleMenu}
            className="p-2 border rounded"
            aria-label="Close Navigation Menu"
          >
            <img src={cross} alt="Close Menu" />
          </button>
        </div>

        <div className="flex flex-col items-start space-y-4 bg-white p-6 text-lg">
          {links.map (
            link =>
              link.dropdown
                ? <div key={link.name} className="w-full">
                    <p className="font-semibold text-black">{link.name}</p>
                    {link.dropdown.map (item => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setVisible (false)}
                        className="block px-4 py-2 hover:text-yellow"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                : <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setVisible (false)}
                    className="w-full text-black hover:text-yellow"
                  >
                    {link.name}
                  </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
