import React from 'react'
import logo from '../../assets/Logo/Calendly-logo.png'
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <header className=" dark:text-gray-800">
	<div className="flex items-center justify-between  mx-auto px-8 py-4">
		
            <img src={logo} className='h-8' alt="" />
            
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
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 rounded-full font-semibold">Login</button>
			<button className="self-center px-8 py-3 font-semibold rounded-full dark:bg-[#006BFE] dark:text-gray-50">Get Started</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
   </div>
  )
}

export default Navbar
