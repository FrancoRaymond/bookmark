import React from 'react'

const NewsLetterSub = () => {
  return (
    <div>
        <p>35 000+ already joined</p>
        <h3>Stay up to date with what we're</h3>
        <form>
            <input 
                required
                type="email" 
                id='email'
                name='email'
                placeholder='Enter your email addrress'
            />
            <button>Contact Us</button>
        </form>
      
    </div>
  )
}

export default NewsLetterSub
