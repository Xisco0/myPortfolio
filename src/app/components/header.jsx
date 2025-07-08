'use client'; 
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full py-2 border-b border-white/10"  data-aos="fade-down" data-aos-duration="2000">
      <nav className="w-[85%] m-auto max-w-[1200px] flex justify-between items-center">
        <div className="w-[50px] overflow-hidden">
          <img src="/all-images/logo.fw.png" alt="my logo" className='w-full rounded-[5px] bg-cover'/>
        </div>
        <div className="max-md:hidden flex space-x-6 text-sm text-white font-[body-font]">
          <a href="#about" className="hover:text-gray-300 ">About</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        
        <button className="text-gray-500 md:hidden cursor-pointer hover:text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <i className="bi bi-list text-2xl"></i>
        </button>
        
      </nav>

      
    {isOpen && (
      <div className="md:hidden mt-4 ml-4 px-6 space-y-4 text-sm text-white" >
        <a href="#about" className="block hover:text-gray-300">About</a>
        <a href="#skills" className="block hover:text-gray-300">Skills</a>
        <a href="#projects" className="block hover:text-gray-300">Projects</a>
        <a href="#contact" className="block hover:text-gray-300">Contact</a>
      </div>
     )}
    </header>
  );
}
