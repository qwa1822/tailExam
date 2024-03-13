import React from "react";
import { CiDark } from "react-icons/ci";

import { MdDarkMode } from "react-icons/md";
type Props = {};

export default function Web4({}: Props) {
  return (
    <div className="dark:bg-darkBlue dark:text-white font-sans">
      {/* Header */}
      <header className=" container mx-auto mt-10 px-6 text-center h-40">
        {/* Dynamic Logo */}

        <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute  top-10 left-10"></div>

        {/* Menu */}
        <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
          <a href="#features" className="hover:text-accentCyan">
            Features
          </a>
          <a href="#testimoi" className="hover:text-accentCyan">
            Features
          </a>

          {/* Dark/light Mode Button */}
          <button
            id="theme-toggle"
            className="text-gray-500 rounded-lg text-sm p-2  dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-700 
            dark:focus:ring-gary-700"
          >
            {/* Dark SVG ICON */}
            <CiDark />

            {/* Light */}
            <MdDarkMode />
          </button>
        </div>
      </header>
    </div>
  );
}
