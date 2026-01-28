import React from 'react'
import logo from '../assets/images/logo-light.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'

const Footer = () => {
  return (
    <div className='bg-[#242946]'>
        <img src={logo} alt="" />
        <ul className='text-white text-sm'>
            <li><a href="#">FEATURES</a></li>
            <li><a href="#">PRICING</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
        <ul className='flex items-center gap-6 mt-auto mx-auto'>
            <li><a href="#"><img src={facebook} alt="" /></a></li>
            <li><a href="#"><img src={twitter} alt="" /></a></li>
        </ul>
    </div>
  )
}

export default Footer
