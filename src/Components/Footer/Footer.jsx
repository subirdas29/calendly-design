import React from 'react'

import playstore from '../../assets/Icon/playstore.png'
import youtube from '../../assets/Icon/youtube.svg'

const Footer = () => {
  return (
    <div>
      <footer className="px-4 dark:text-gray-800 mx-10 md:mx-18">
	<div className="container flex flex-col justify-between py-10 gap-14 space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/4">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				
				<span className="self-center text-4xl font-black">Easy <span className='text-[#006BFE] '><br className='hidden lg:block' />ahead</span></span>
			</a>
			<p className='my-6'>we take the work out of connecting with others so you can accomplish more.</p>
			<select className='border-2 w-full py-1 rounded-md font-bold px-2'>
  <option value="eng" selected>English</option>

 
</select>

<section className="py-6 dark:text-gray-900 ">
	
		
		<div className="flex flex-col justify-center lg:justify-start flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 ">
		<button className="inline-flex items-center px-3 py-2 rounded-lg dark:bg-black dark:text-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-current w-7 h-7 dark:text-gray-50">
					<path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
				</svg>
				<span className="flex flex-col items-start ml-4 leading-none">
					<span className="mb-1 text-xs">Download on the</span>
					<span className="font-semibold title-font">App Store</span>
				</span>
			</button>
			<button className="inline-flex items-center px-3 py-2 rounded-lg dark:bg-black dark:text-gray-50">
				<img src={playstore} className='w-7 h-7' alt="" />
				<span className="flex flex-col items-start ml-4 leading-none">
					<span className="mb-1 text-xs">GET IT ON</span>
					<span className="font-semibold title-font">Google Play</span>
				</span>
			</button>
			
	</div>
</section>

            <div className="mt-10">
				<div className="flex space-x-6 justify-center lg:justify-start">
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
							<path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
						</svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-5 h-5'> <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
					
					
					
					<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
				
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 h-5'><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>

				<img src={youtube} className='w-5 h-5' alt="" />
				</div>
			</div>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-4 gap-y-10 lg:w-2/3 sm:grid-cols-3">
			<div className="space-y-4">
				<h3 className="tracking-wide dark:text-gray-900 font-black">About</h3>
				<ul className="space-y-4">
					<li>
						<a rel="noopener noreferrer" href="#">About Calendly</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Contact Sales</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Newsroom</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Careers</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Security</a>
					</li>
				</ul>
			</div>
			
			<div className="space-y-4">
				<h3 className="tracking-wide dark:text-gray-900 font-black">Solutions</h3>
				<ul className="space-y-4">
					<li>
						<a rel="noopener noreferrer" href="#">Customer Success</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Sales</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Recruiting</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Information Tecnology</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Marketing</a>
					</li>
				</ul>
			</div>
			<div className="space-y-4">
				<h3 className=" dark:text-gray-900 font-black">Popular Features</h3>
				<ul className="space-y-4">
					<li>
						<a rel="noopener noreferrer" href="#">Embed Calendly</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Availability</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Sending Notifications</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Using Calendly Mobile</a>
					</li>
					
				</ul>
			</div>
			<div className="space-y-4">
				<h3 className=" dark:text-gray-900 font-black">Support</h3>
				<ul className="space-y-4">
					<li>
						<a rel="noopener noreferrer" href="#">Help Center</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Video Tutorials</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Cookie Settings</a>
					</li>
					
					
				</ul>
			</div>
			<div className="space-y-4">
				<h3 className=" dark:text-gray-900 font-black">Add-Ons</h3>
				<ul className="space-y-4">
					<li>
						<a rel="noopener noreferrer" href="#">Download for Chrome</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Download for Firefox</a>
					</li>
					
					
					
				</ul>
			</div>
			<div className="space-y-4">
				<h3 className=" dark:text-gray-900 font-black">Add-Ons</h3>
				<ul className="space-y-4">
					<li>
						<a rel="noopener noreferrer" href="#">Developer Tools</a>
					</li>
					
				</ul>
			</div>
			
		</div>
	</div>
	<div className="py-6 text-xs text-center dark:text-gray-600 flex justify-between">
		<div>
		Copyright Calendly 2022
		</div>
		<div>
		Privacy/Terms and Conditions
		</div>
	</div>
</footer>
    </div>
  )
}

export default Footer
