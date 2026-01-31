import React from 'react'
import heroImg from '../assets/images/illustration-hero.svg'

const Hero = () => {
  return (
    <div className='pt-24 flex flex-col-reverse md:flex-row md:gap-3 lg:gap-10'>
      <section className='text-center md:text-left flex flex-col gap-6 md:pl-10 lg:pl-24 w-full h-fit md:pt-[5vw]'>
        <h1 className='text-4xl font-bold text-slate-800 xl:text-5xl'>A simple bookmark<br/> manager</h1>
        <p className='text-gray-400 max-w-[450px] mx-auto md:mx-0'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className='flex items-center gap-6 mx-auto md:mx-0'>
          <button className='bg-[#5266e3] text-white py-1.5 px-3 font-semibold rounded-md text-sm lg:text-[15px] cursor-pointer'>Get it on chrome</button>
          <button className='bg-gray-100 py-1.5 px-3 font-semibold shadow-2xl shadow-gray-300 text-gray-600 rounded-md text-sm cursor-pointer'>Get it on firefox</button>
        </div>
      </section>
      <section className='relative py-[20vw] md: mt-10 md:mt-0 w-full h-fit md:py-[10vw]'>
        <img src={heroImg} alt="" className='absolute top-0 left-1/2 -translate-x-1/2 z-0 lg:max-w-[450px]'/>
        <div className='bg-[#5266e3] py-[25vw] md:py-24 rounded-tl-full rounded-bl-full w-80 ml-auto'></div>
      </section>
    </div>
  )
}

export default Hero
