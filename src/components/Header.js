import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#1CC458] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Shamba Records</div>

        {/* Menu button for mobile */}
        <button
          onClick={toggleMenu}
          className="text-white block md:hidden focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links for desktop */}
        <nav className="hidden md:flex space-x-6">
          {" "}
          <Link to="/" className="text-white hover:text-gray-300">
            Crop Calender
          </Link>
          <Link to="#" className="text-white hover:text-gray-300">
            Vet
          </Link>
          <Link to="#" className="text-white hover:text-gray-300">
            About
          </Link>
        </nav>

        {/* Links for mobile */}
        {isOpen && (
          <nav className="md:hidden absolute top-16 left-0 w-full bg-[#FFFFFF] p-4">
            <ul className="flex flex-col items-center">
              <li className="py-2">
                <Link
                  to="/"
                  className="text-[#1CC458] hover:text-[#000000] p-4"
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
