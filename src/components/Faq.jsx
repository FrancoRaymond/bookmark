import React, { useState } from 'react'
import arrow from '../assets/images/icon-arrow.svg'
import { questionsAndAnswers } from '../assets/data/faqData'

const Faq = () => {
    const [questionIndex, setQuestionIndex] = useState(null)

    const handleClick = (questionIndex, index) => {
        if(questionIndex === index){
            setQuestionIndex(null)
        }else{
            setQuestionIndex(index)
        }
    }
  return (
    <div className='py-16 px-2 sm:px-5 md:px-10 lg:px-24 flex flex-col items-center'>
        <h2 className='text-2xl text-slate-800 font-semibold'>Frequentl asked questions</h2>
        <p className='text-gray-400 text-center mt-5 max-w-[500px]'>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
        <div className='max-w-2xl mt-6 w-full' >
            {
                questionsAndAnswers.map((item, index) => {
                    return (
                        <div key={item.id} className={`gap-6 w-full py-4 px-3 border-t border-gray-400 ${index === questionsAndAnswers.length - 1 ? "border-b": ''}`}>
                            <div className='flex justify-between w-full'>
                                <p onClick={() => handleClick(questionIndex, index)} className={`${questionIndex === index ? 'text-red-700' : 'text-slate-700' } font-semibold cursor-pointer`}>{item.question}</p>
                                <img onClick={() => handleClick(questionIndex, index)} src={arrow} alt="" className={`${questionIndex === index ? 'rotate-180 transition duration-300' : ''} cursor-pointer size-3`}/>
                            </div>
                            <p className={`text-gray-400 px-5 text-sm ${questionIndex === index ? 'h-fit' : 'hidden h-0 overflow-hidden'} transition duration-300 mt-4`}>{item.answer}</p>
                        </div>
                    )
                })
            }    
        </div>  
    </div>
  )
}

export default Faq
