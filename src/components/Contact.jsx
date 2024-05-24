import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: '950'
    })
  }, [])

  return (
    <div
      id='contact'
      className='text-[#9fe1c2] w-full bg-gradient-to-t from-[#0f133d] via-[#0f3d6b] to-[#4984d8] font-body flex justify-center items-center pt-36 pb-8 md:pt-28'
    >
      <div className='max-w-5xl m-auto flex gap-2 justify-center items-center flex-col'>
        <div
          className='font-semibold text-[25px] sm:text-[35px] underline underline-offset-8'
          data-aos='fade-down'
          data-aos-offset='50'
        >
          CONTACT
        </div>
        <p
          className='text-[15px] sm:text-[19px]'
          data-aos='fade-down'
          data-aos-offset='200'
        >
          Have a question? <span className='font-semibold'> Let's chat!</span>
        </p>
        <div className='w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] pt-4'>
          <form
            action='https://getform.io/f/eapdvqga'
            method='POST'
            className='flex flex-col gap-4'
            data-aos='fade-down'
            data-aos-offset='250'
          >
            <input
              name='name'
              type='text'
              className='bg-transparent border-2 border-cyan-600 rounded-md outline-none px-2 py-1 sm:text-[17px]'
              placeholder='Your Name'
              required
            />
            <input
              name='email'
              type='email'
              className='bg-transparent border-2 border-cyan-600 rounded-md outline-none px-3 py-1 sm:text-[17px]'
              placeholder='Your email'
              required
            />
            <textarea
              name='message'
              rows='10'
              className='bg-transparent border-2 border-cyan-600 rounded-md outline-none px-3 py-2 resize-none sm:text-[17px]'
              placeholder='Your Message'
              required
            ></textarea>
            <button
              type='submit'
              className='w-full text-sky-200 bg-sky-900 p-2 rounded-md duration-300 hover:text-white hover:bg-sky-600'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
