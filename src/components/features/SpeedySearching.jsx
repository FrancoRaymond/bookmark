import React from 'react'
import tab2 from '../../assets/images/illustration-features-tab-2.svg'
const SpeedySearching = () => {
  return (
    <div className='pt-24 flex flex-col md:flex-row md:gap-3 lg:gap-10 w-full'>
        <section className='relative py-[20vw] md: mt-10 md:mt-0 w-full h-fit md:py-[10vw]'>
            <img src={tab2} alt="" className='absolute top-0 left-1/2 -translate-x-1/2 z-0 w-[70vw] sm:w-[40vw] md:w-[35vw] lg:max-w-[350px]'/>
            <div className='bg-[#5266e3] py-[25vw] md:py-24 rounded-tr-full rounded-br-full w-80 mr-auto'></div>
        </section>
        <section className='text-center md:text-left flex flex-col gap-6 md:pl-10 lg:pl-24 w-full h-fit md:pt-[5vw]'>
            <h1 className='font-semibold text-slate-800 text-2xl'>Intelligent search</h1>
            <p className='text-gray-400 max-w-[450px] mx-auto md:mx-0'>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
            <button className='bg-[#5266e3] text-white py-1.5 px-3 rounded-md text-sm cursor-pointer w-fit hidden md:block'>More info</button>
        </section>
    </div>
  )
}

export default SpeedySearching
