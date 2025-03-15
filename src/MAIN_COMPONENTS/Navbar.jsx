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
    // {
    //   name: 'PROJECTS',
    //   path: '/portfolio',
    //   dropdown: [
    //     {name: 'Still Shoot', path: '/still-shoot'},
    //     {name: 'Film Shoot', path: '/film-shoot'},
    //     {name: '3D Animation', path: '/still-shoot'},
    //     {name: 'Events', path: '/still-shoot'},
    //     {name: 'BTS', path: '/still-shoot'},
    //   ],
    // },
    {name: 'Still Shoot', path: '/still-shoot'},
    {name: 'Film Shoot', path: '/film-shoot'},
    {name: '3D Animation', path: '/film-shoot'},
    {name: 'Events', path: '/film-shoot'},
    {name: 'BTS', path: '/film-shoot'},
    {name: 'BLOGS', path: '/blog'},
    {name: 'TALENT REGISTRATION', path: '/talent'},
    {name: 'CONTACT', path: '/contact'},
  ];

  const toggleMenu = () => setVisible (!visible);

  return (
    <header
      className={`top-0 z-50 ${navbarVisible ? ' bg-white' : 'bg-transparent text-white'} fixed w-full transition-all duration-500`}
    >
      <nav className="flex justify-between items-center mx-auto px-4 py-0 text-whiteainer cont">
        {/* Logo */}
        <Link to="/">
          <img src={laxyaLogo} alt="Laxya Logo" className="max-w-[195px]" />
        </Link>

        {/* Desktop Links */}
        {/* <div className="hidden relative md:flex space-x-6 text-[15px]">
          {links.map (
            link =>
              link.dropdown
                ? <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setDropdownVisible (true)}
                    onMouseLeave={() => setDropdownVisible (false)}
                  >

                    <NavLink
                      to={link.path}
                      className={`${navbarVisible ? 'text-black' : 'text-gray-600'}
`}
                    >
                      {link.name}
                    </NavLink>
                    {dropdownVisible &&
                      <div
                        className={`top-full left-0 absolute shadow-md p-2 w-40  ${navbarVisible ? 'bg-white' : 'bg-transparent'}`}
                      >
                        {link.dropdown.map (item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`block hover:bg-gray-200 px-4 py-2 `}
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
                      `hover:text-black ${navbarVisible ? 'text-black' : 'text-gray-600'} ${isActive ? 'text-yellow font-semibold' : ''}`}
                  >
                    {link.name}
                  </NavLink>
          )}
        </div> */}

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="p-2 border rounded"
          aria-expanded={visible}
        >
          <img
            src={visible ? cross : hamburger}
            alt={visible ? 'Close Menu' : 'Open Menu'}
          />
        </button>
      </nav>
      {/* Menu - Visible on All Screens */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-300 z-40 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div className="flex justify-between items-center bg-white px-4 py-3 border-b">
          <img src={laxyaLogo} alt="Laxya Logo" className="max-w-[195px]" />
          <button
            onClick={toggleMenu}
            className="p-2 border rounded"
            aria-label="Close Navigation Menu"
          >
            <img src={cross} alt="Close Menu" />
          </button>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 bg-white p-6 text-2xl text-center">
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
                        className="block px-4 py-2 text-black hover:text-yellow"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                : <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setVisible (false)}
                    className="w-full text-black hover:text-yellow uppercase"
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
