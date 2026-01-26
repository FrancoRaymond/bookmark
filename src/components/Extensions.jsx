import React from 'react'
import dots from '../assets/images/bg-dots.svg'
import { extensions } from '../assets/data/extensions'

const Extensions = () => {
  return (
    <div className='px-2 sm:px-5 md:px-10 lg:px-24 flex flex-col items-center'>
        <h2 className='text-2xl text-slate-800 font-semibold'>Features</h2>
        <p className='text-gray-400 text-center mt-5 max-w-[500px]'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-5 mt-8 lg:max-w-4xl w-full'>
            {
                extensions.map((extension, index) => { 
                    const extensionCard = index % 3
                    const stepClass = extensionCard === 1 ? 'sm:mt-5' : extensionCard === 2 ? 'sm:mt-10' : 'sm:mt-0'
                    return(
                        <div key={extension.id} className={`flex flex-col gap-4 items-center shadow shadow-slate-100 h-fit py-5 bg-gray-50 overflow-clip w-full sm:w-fit ${stepClass}`}>
                            <img src={extension.logo} alt="" className='size-14'/>
                            <h3 className='text-slate-700 font-semibold'>Add to {extension.name}</h3>
                            <p className='text-sm text-gray-400'>{extension.version}</p>
                            <img src={dots} alt="" className='mt-4'/>
                            <button className='bg-[#5266e3] text-white py-1.5 px-3 rounded-md text-sm cursor-pointer w-fit md:block'>Add & install extension</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Extensions
