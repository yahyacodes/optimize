import React from "react";

import { NavLink } from "react-router-dom";

import logo from "../optimize-images/ic-optimize.svg";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="Home" className="flex items-center">
          <img src={logo} alt="" className="w-10" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Optimize
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <div className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <NavLink to="/home">
              <span
                className="block py-2 pl-3 pr-4 text-blue hover:text-purple md:p-0"
                aria-current="page"
              >
                Home
              </span>
            </NavLink>
            <NavLink to="/about">
              <span className="block py-2 pl-3 pr-4 text-blue hover:text-purple md:p-0">
                About
              </span>
            </NavLink>
            <NavLink to="/services">
              <span className="block py-2 pl-3 pr-4 text-blue hover:text-purple md:p-0">
                Services
              </span>
            </NavLink>
            <NavLink>
              <span className="block py-2 pl-3 pr-4 text-blue hover:text-purple md:p-0">
                Contact
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
