import React,{useState, useEffect} from 'react'
import logo from '../assets/images/logo-bookmark.svg'
import logoLight from '../assets/images/logo-light.svg'
import menu from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
      const handleResize = () => {
      
        if (window.innerWidth > 640) {
          setMenuOpen(false);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);


  return (
    <div className='flex items-center justify-between px-2 sm:px-5 md:px-10 lg:px-24 py-3 fixed top-0 w-full bg-white z-50'>
      <a href="#"><img src={logo} alt="" className='' /></a>
      <button onClick={() => setMenuOpen(true)} className='cursor-pointer sm:hidden'><img src={menu} alt="" /></button>
      <nav className={`fixed top-0 left-0 w-screen h-screen bg-slate-700 p-4 flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
        <div className='flex items-center justify-between'>
          <a href="#"><img src={logoLight} alt="" className='text-white' /></a>
          <button  onClick={() => setMenuOpen(false)} className='cursor-pointer sm:hidden'><img src={close} alt="" /></button>
        </div>
        <ul className='text-gray-100 text-center mt-8'>
          <li className='py-3 border-t border-gray-500/50 w-full' onClick={() => setMenuOpen(false)}><a href="#">FEATURES</a></li>
          <li className='py-3 border-t border-gray-500/50' onClick={() => setMenuOpen(false)}><a href="#">PRICING</a></li>
          <li className='py-3 border-y border-gray-500/50' onClick={() => setMenuOpen(false)}><a href="#">CONTACT</a></li>
        </ul>
        <button className='py-2.5 border-2 broder-white text-white w-full mt-7 rounded-sm cursor-pointer'>LOGIN</button>
        <ul className='flex items-center gap-6 mt-auto mx-auto'>
          <li><a href="#"><img src={facebook} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
        </ul>
      </nav>
      <nav className='hidden sm:flex items-center gap-8'>
        <ul className='flex items-center gap-6 text-sm text-gray-700'>
          <li className='hover:text-gray-400'><a href="#">FEATURES</a></li>
          <li className='hover:text-gray-400'><a href="#">PRICING</a></li>
          <li className='hover:text-gray-400'><a href="#">CONTACT</a></li>
        </ul>
        <button className='text-white bg-[#fb5859] text-xs px-2.5 py-1.5 rounded-md'>LOGIN</button>
      </nav>
    </div>
  )
}

export default Navbar
