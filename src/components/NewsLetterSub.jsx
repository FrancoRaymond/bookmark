import React,{useState} from 'react'
import errorIcon from '../assets/images/icon-error.svg'

const NewsLetterSub = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')

  const checkEmail = (e, email) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      setError(true)
      return
    } else {
      setError(false)
      alert("Email submitted.")
      setEmail('')
    }
  }

  return (
    <div className='bg-[#5266e3] py-10 flex flex-col gap-5 px-2 sm:px-5 md:px-10 lg:px-24'>
      <p className='text-white text-center font-semibold tracking-wider'>35 000+ ALREADY JOINED</p>
      <h3 className='text-white text-2xl text-center lg:text-4xl mt-3'>Stay up-to-date with what <br/> we're doing.</h3>
      <form onSubmit={(e) => checkEmail(e, email)} className='flex gap-3 mx-auto'>
        <div className='size-fit'>
          <div className={`flex flex-row items-center gap-2 bg-white px-3 rounded-sm ${error ? 'border-2 border-red-400' : ''}`}>
            <input 
              
              type="email"
              id='email'
              name='email'
              placeholder='Enter your email addrress'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-white py-1.5 outline-0 text-slate-700 `}
            />
            <img src={errorIcon} alt="" className={`${error ? '' : 'hidden'}`}/>
          </div>
          <p className={`py-1 px-2 text-white bg-red-400 w-full text-xs -mt-0.5 rounded-b-sm ${error ? '' : 'hidden'}`}>Whoops, make sure it's an email</p>
        </div>
        <button className={`${error ? 'hover:border-2 hover:border-red-400 hover:bg-white hover:text-red-400' : ''} h-fit  bg-red-400 text-white cursor-pointer py-2 px-2.5 outline-0 rounded-sm text-sm`}>Contact Us</button>
      </form>
    </div>
  )
}

export default NewsLetterSub
