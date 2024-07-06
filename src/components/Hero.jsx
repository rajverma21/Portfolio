import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import profilePic from '../assets/pp.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div
      id='home'
      className='bg-gradient-to-b from-[#0f133d] via-[#093765] to-[#4984d8] w-full font-body pt-36 md:pt-16 pb-10'
    >
      <div className='max-w-5xl mx-auto px-8 md:px-16 text-[#9fe1c2] h-screen flex flex-col justify-center items-center gap-12 md:flex-row xl:justify-between '>
        <div className='flex flex-col gap-2 w-[95%] sm:w-[65%] md:w-[45%] '>
          <div className='text-[50px] sm:text-[60px] lg:text-[70px] font-bold'>
            Raj Verma
          </div>
          <div className='flex items-center gap-3'>
            <div className='w-16 h-[2px] rounded-lg bg-slate-400'></div>
            <div className='flex items-center'>
              <TypeAnimation
                sequence={[
                  ' Frontend Developer',
                  1000,
                  ' C++ Programmer',
                  1000,
                  ' MERN Stack Learner',
                  1000,
                  ' Tech Enthusiast',
                  1000,
                  ' Problem Solver',
                  1000
                ]}
                wrapper='span'
                speed={50}
                style={{ fontSize: '1.45em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className='mt-3 text-[15px] sm:text-[19px] text-justify'>
            I'm a 4th-year student at KIIT Bhubaneswar, skilled in C++ and
            currently expanding my expertise in the MERN stack.
          </div>
          <div className='flex justify-center items-center md:block'>
            <a
              href='https://drive.google.com/file/d/1jMfXv-6M2PPKvR5ljmsAfu-_QO-GHWs3/view'
              target='_blank'
              className='block w-1/3 py-2 mt-4 rounded-xl bg-[#51cffd] text-[#212121] font-body font-semibold transition duration-300 hover:bg-amber-600 hover:text-amber-50 hover:shadow-2xl text-center'
            >
              Resume
            </a>
          </div>
        </div>
        <div className='rounded-full h-64 lg:h-auto overflow-hidden shadow-white shadow-xl scale-75 hover:scale-90 duration-200 transition-all'>
          <img
            src={profilePic}
            className='rounded-lg h-64 lg:h-auto shadow-white shadow-2xl'
            alt='My Profile Picture'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
