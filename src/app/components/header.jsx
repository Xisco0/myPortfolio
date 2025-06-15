'use client'; 

export default function Header() {
  return (
    <header className="w-full py-6 border-b border-white/10">
      <nav className="w-[85%] m-auto max-w-[1200px] flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide ">Bamirin Francis</h1>
        <div className="max-md:hidden flex space-x-6 text-sm">
          <a href="#about" className="hover:text-gray-300 font-[title-font]">About</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        
        <button className="text-gray-500 md:hidden cursor-pointer hover:text-gray-700 focus:outline-none">
          <i className="bi bi-list text-2xl"></i>
        </button>
        
      </nav>

      

      {/* <div className="md:hidden mt-4 px-6 space-y-4 text-sm">
        <a href="#about" className="block hover:text-gray-300">About</a>
        <a href="#skills" className="block hover:text-gray-300">Skills</a>
        <a href="#projects" className="block hover:text-gray-300">Projects</a>
        <a href="#contact" className="block hover:text-gray-300">Contact</a>
      </div> */}
    
    </header>
  );
}
