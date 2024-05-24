import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='w-full font-body text-[#a9e3c8] bg-[#0f133d] pt-24 pb-16'>
      <div className='max-w-6xl m-auto flex flex-col items-center justify-center gap-6 lg:flex-row'>
        <div className='flex flex-col gap-2 w-4/5 sm:w-3/5 lg:w-1/3'>
          <div className='text-[38px] text-center md:text-start md:text-[45px] font-extrabold'>
            Get in Touch
          </div>
          <div className='pr-3 text-[15px] sm:text-[16px] text-center md:text-start'>
            "I'm always open to new opportunities and collaborations. If you
            have a project or just want to chat, feel free to get in touch.
            Let's make something great together!"
          </div>
          <div className='flex gap-4 py-5 justify-center text-slate-100 md:justify-start'>
            <a href='https://www.linkedin.com/in/raj-verma21/' target='_blank'>
              <FaLinkedin size={30} />
            </a>
            <a href='https://github.com/rajverma21' target='_blank'>
              <FaGithub size={30} />
            </a>
            <a href='mailto:rajverma42244@gmail.com' target='_blank'>
              <MdEmail size={30} />
            </a>
          </div>
        </div>
        <div className='flex gap-12 flex-col sm:flex-row'>
          <div className='h-56 w-56 bg-slate-500 relative rounded-lg  '>
            <div className='h-56 w-56 bg-slate-800 absolute top-[18px] flex flex-col gap-2 justify-center items-center left-[20px] rounded-lg'>
              <MdEmail size={20} />
              <p className='text-[15px] md:text-[16px]'>
                rajverma42244@gmail.com
              </p>
            </div>
          </div>
          <div className='h-56 w-56 bg-slate-500 relative rounded-lg  '>
            <div className='h-56 w-56 w bg-slate-800 absolute top-[18px] flex flex-col gap-2 justify-center items-center left-[20px] rounded-lg'>
              <MdEmail size={20} />
              <p className='text-[15px] md:text-[16px]'>
                rajverma42244@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
