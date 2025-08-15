/*import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h2 className="text-5xl font-playfair tracking-wide ml-2">Saloni Chauhan</h2>

      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;*/


import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "portfolio", label: "Portfolio" },
    { id: 4, link: "experience", label: "Experience" },
    { id: 5, link: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Glassy bar */}
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6
                        rounded-b-2xl border-b border-white/10
                        bg-black/60 backdrop-blur-md">
          {/* Brand */}
          <div className="shrink-0">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Saloni Chauhan
              </span>
            </h1>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {links.map(({ id, link, label }) => (
              <Link
                key={id}
                to={link}
                smooth
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-white border-b-2 border-indigo-400"
                className="px-4 py-2 text-white/70 hover:text-white transition
                           cursor-pointer border-b-2 border-transparent"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setNav(!nav)}
            className="md:hidden text-white/80 hover:text-white transition"
            aria-label="Toggle menu"
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {nav && (
        <div className="md:hidden bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
          <ul className="flex flex-col items-center gap-6 py-10">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setNav(false)}
                  className="text-xl px-4 py-2 rounded-xl border border-white/10
                             hover:border-white/30 transition cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;

