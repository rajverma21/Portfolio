import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'

const Social = () => {
  return (
    <>
      <div className='text-[#9fe1c2] font-body hidden lg:block'>
        <div className='flex flex-col fixed top-[33%]'>
          <a
            href='https://www.linkedin.com/in/raj-verma21/'
            target='_blank'
            className='bg-[#000437] flex justify-between items-center w-40 h-14 ml-[-100px] px-4 duration-300 rounded-t-md hover:ml-[0px] hover:text-[#f4fffa]'
          >
            <p className='font-medium'>LinkedIn</p>
            <FaLinkedin size={30} />
          </a>
          <a
            href='https://github.com/rajverma21'
            target='_blank'
            className='bg-[#000437] flex justify-between items-center w-40 h-14 ml-[-100px] px-4 duration-300 hover:ml-[0px] hover:text-[#f4fffa]'
          >
            <p className='font-medium'>Github</p>
            <FaGithub size={30} />
          </a>
          <a
            href='mailto:rajverma42244@gmail.com'
            target='_blank'
            className='bg-[#000437] flex justify-between items-center w-40 h-14 ml-[-100px] px-4 duration-300 hover:ml-[0px] hover:text-[#f4fffa]'
          >
            <p className='font-medium'>Mail</p> <MdEmail size={30} />
          </a>

          {/* //LeetCode */}

          {/* <a
            href='#'
            className='bg-[#000437] flex justify-between items-center w-40 h-14 ml-[-100px] px-4 duration-300 hover:ml-[0px] hover:text-[#f4fffa]'
          >
            <p className='font-medium'>LeetCode</p>
            <SiLeetcode size={30} />
          </a> */}

          {/* //Instagram */}
          <a
            href='https://www.instagram.com/raj_v.e.r.m.a?igsh=dTkzODd3YzRod3g0'
            target='_blank'
            className='bg-[#000437] flex justify-between items-center w-40 h-14 ml-[-100px] px-4 duration-300 rounded-b-md hover:ml-[0px] hover:text-[#f4fffa]'
          >
            <p className='font-medium'>Instagram</p>
            <RiInstagramFill size={30} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Social
