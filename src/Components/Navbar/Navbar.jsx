// import React from 'react'
// import logo from '../../assets/Logo/Calendly-logo.png'
// import { FaChevronDown } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <div>
//         <header className=" dark:text-gray-800">
// 	<div className="flex items-center justify-between mx-10 md:mx-16 py-4">
		
//             <img src={logo} className='h-8' alt="" />
            
		// <ul className="items-stretch hidden space-x-3 lg:flex">
		// 	<li className="flex">
		// 		<a rel="noopener noreferrer" href="#" className="flex items-center pl-6 font-semibold">Individuals</a>
		// 	</li>
		// 	<li className="flex">
		// 		<a rel="noopener noreferrer" href="#" className="flex items-center pl-6 font-semibold">Teams</a>
		// 	</li>
		// 	<li className="flex">
		// 		<a rel="noopener noreferrer" href="#" className="flex items-center pl-6 font-semibold">Enterprise</a>
		// 	</li>
		// 	<li className="flex items-center justify-center">
		// 		<a rel="noopener noreferrer" href="#" className="flex items-center pl-6 font-semibold">Products </a> <FaChevronDown className="pt-1 h-3 w-3" />
		// 	</li>
		// 	<li className="flex">
		// 		<a rel="noopener noreferrer" href="#" className="flex items-center pl-6 font-semibold">Pricing</a>
		// 	</li>
		// 	<li className="flex items-center justify-center">
		// 		<a rel="noopener noreferrer" href="#" className="flex font-semibold pl-6  ">Resources</a> <FaChevronDown  className="pt-1 h-3 w-3" alt="" />
		// 	</li>
		// </ul>
// 		<div className="items-center flex-shrink-0 hidden lg:flex">
// 			<button className="self-center px-8 py-3 rounded-full font-semibold">Login</button>
// 			<button className="self-center px-8 py-3 font-semibold rounded-full dark:bg-[#006BFE] dark:text-gray-50">Get Started</button>
// 		</div>
// 		<button className="p-4 lg:hidden">
// 			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
// 				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
// 			</svg>
// 		</button>
// 	</div>
// </header>
//    </div>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import logo from '../../assets/Logo/Calendly-logo.png';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header className="dark:text-gray-800">
        <div className="flex items-center justify-between mx-10 md:mx-16 py-4">
          <img src={logo} className="h-8" alt="" />

		  <ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center pl-6 font-semibold">Individuals</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center pl-6 font-semibold">Teams</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center pl-6 font-semibold">Enterprise</a>
			</li>
			<li className="flex items-center justify-center">
				<a rel="noopener noreferrer" href="#" className="flex items-center pl-6 font-semibold">Products </a> <FaChevronDown className="pt-1 h-3 w-3" />
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center pl-6 font-semibold">Pricing</a>
			</li>
			<li className="flex items-center justify-center">
				<a rel="noopener noreferrer" href="#" className="flex font-semibold pl-6  ">Resources</a> <FaChevronDown  className="pt-1 h-3 w-3" alt="" />
			</li>
		</ul>

          <div className="lg:hidden">
            <button className="p-4" onClick={toggleDropdown}>
              {isDropdownOpen ? (
                <FaTimes className="w-6 h-6 dark:text-gray-700" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-gray-800"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-14 right-6 bg-[#006BFE]  rounded-md shadow-md z-10">
                {/* Dropdown menu items */}
                <li className="py-2 px-4">
                  <a href="#" className="block text-gray-800 dark:text-white py-1">Individuals</a>
                </li>
                <li className="py-2 px-4">
                  <a href="#" className="block text-gray-800 dark:text-white  py-1">Teams</a>
                </li>
                <li className="py-2 px-4">
                  <a href="#" className="block text-gray-800 dark:text-white  py-1">Enterprise</a>
                </li>
                <li className="py-2 px-4 flex items-center">
                  <a href="#" className="block text-gray-800 dark:text-white  py-1">Products</a><FaChevronDown  className="text-white h-3 ml-1 w-3" alt="" />
                </li>
                <li className="py-2 px-4">
                  <a href="#" className="block text-gray-800 dark:text-white  py-1">Pricing</a>
                </li>
                <li className="py-2 px-4 flex items-center">
                  <a href="#" className="block text-gray-800 dark:text-white   py-1">Resources</a><FaChevronDown  className=" text-white ml-1 h-3 w-3" alt="" />
                </li>

				<li className="py-2 px-4">
                  <a href="#" className="block text-gray-800 dark:text-white  py-1">Login</a>
                </li>

				<li className="py-2 px-4">
                  <a href="#" className="block text-gray-800 dark:text-white  py-1">Get Started</a>
                </li>
                {/* Add more menu items as needed */}
              </ul>
            )}
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 rounded-full font-semibold">Login</button>
            <button className="self-center px-8 py-3 font-semibold rounded-full dark:bg-[#006BFE] dark:text-gray-50">Get Started</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
