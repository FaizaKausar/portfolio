import React from 'react'
import Link from 'next/link'
import {FcDownload} from 'react-icons/Fc';

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'> 
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"
       strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
        viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">C.Faiza's Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-blue-600">About</Link>
      <Link href={"#Skills"} className="mr-5 hover:text-blue-600">Skills</Link>
      <Link href={"#Project"} className="mr-5 hover:text-blue-600">Projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-blue-600">Contact</Link>
    </nav>
    <a href={'../../picture/lion.jpg'}>
    <button className="inline-flex items-center bg-blue-400 border-0 py-1 px-3
     focus:outline-none
     hover:bg-blue-500 rounded text-lg mt-4 md:mt-0">
        Download CV<FcDownload/>
    </button> 
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar
