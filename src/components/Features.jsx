import React,{useState} from 'react'
import SimpleBookmarking from './features/SimpleBookmarking'
import SpeedySearching from './features/SpeedySearching'
import EasySharing from './features/EasySharing'

const Features = () => {
    const [tab, setTab] = useState(1)
  return (
    <div className='py-10 flex flex-col items-center'>
        <h2 className='text-2xl text-slate-800 font-semibold'>Features</h2>
        <p className='text-gray-400 text-center mt-5 max-w-[500px]'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        <nav className='text-slate-700 font-semibold mt-6 w-full px-2 flex flex-col text-center md:flex-row md:justify-center'>
            <h3 onClick={() => setTab(1)} className={`${tab === 1 ? 'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[40%] after:md:w-full after:h-1 after:bg-red-700 after:content-[""]' : ''} py-3 cursor-pointer border-t border-gray-400 relative w-full md:border-t-0 hover:text-red-700 md:border-b md:w-fit md:px-6`}>Simple Bookmarking</h3>
            <h3 onClick={() => setTab(2)} className={`${tab === 2 ? 'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[40%] after:md:w-full after:h-1 after:bg-red-700 after:content-[""]' : ''} py-3 cursor-pointer border-t border-gray-400 relative w-full md:border-t-0 hover:text-red-700 md:border-b md:w-fit md:px-6`}>Speedy Searching</h3>
            <h3 onClick={() => setTab(3)} className={`${tab === 3 ? 'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[40%] after:md:w-full after:h-1 after:bg-red-700 after:content-[""]' : ''} py-3 cursor-pointer border-y border-gray-400 relative w-full md:border-t-0 hover:text-red-700 md:w-fit md:px-6`}>Easy Sharing</h3>
        </nav> 
        {tab === 1 ? <SimpleBookmarking /> : tab === 2 ? <SpeedySearching /> : <EasySharing /> }
    </div>
  )
}

export default Features
