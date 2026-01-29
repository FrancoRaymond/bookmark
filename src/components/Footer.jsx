import React from 'react'
import logo from '../assets/images/logo-light.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'

const Footer = () => {
  return (
    <div className='bg-[#242946] py-6 flex flex-col gap-6 sm:gap-10 sm:flex-row sm:mx-0 px-2 sm:px-5 md:px-10 lg:px-24'>
        <img src={logo} alt="" className='w-44 mx-auto sm:mx-0 sm:h-7'/>
        <ul className='text-white text-sm mx-auto flex flex-col gap-4 sm:flex-row sm:mx-0 '>
            <li><a href="#">FEATURES</a></li>
            <li><a href="#">PRICING</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
        <ul className='flex items-center gap-6 mt-5 mx-auto sm:mx-0 sm:mt-0 sm:ml-auto'>
            <li><a href="#"><img src={facebook} alt="" /></a></li>
            <li><a href="#"><img src={twitter} alt="" /></a></li>
        </ul>
    </div>
  )
}

export default Footer
