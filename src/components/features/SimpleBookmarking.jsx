import React from 'react'
import tab1 from '../../assets/images/illustration-features-tab-1.svg'

const SimpleBookmarking = () => {
  return (
    <div className='pt-24 flex flex-col md:flex-row md:gap-3 lg:gap-10 w-full'>
        <section className='relative py-[20vw] md: mt-10 md:mt-0 w-full h-fit md:py-[10vw]'>
            <img src={tab1} alt="" className='absolute top-0 left-1/2 -translate-x-1/2 z-0 lg:max-w-[450px]'/>
            <div className='bg-[#5266e3] py-[25vw] md:py-24 rounded-tr-full rounded-br-full w-80 mr-auto'></div>
        </section>
        <section className='text-center md:text-left flex flex-col gap-6 md:pl-10 lg:pl-24 w-full h-fit md:pt-[5vw]'>
            <h1 className='font-semibold text-slate-800 text-2xl'>Bookmark in one click</h1>
            <p className='text-gray-400 max-w-[450px]'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how vou manaqe your favourite sites.</p>
            <button className='bg-[#5266e3] text-white py-1.5 px-3 rounded-md text-sm cursor-pointer w-fit hidden md:block'>More info</button>
        </section>
    </div>
  )
}

export default SimpleBookmarking
