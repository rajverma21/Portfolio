import React, { useState } from 'react'
import { LuMenu } from 'react-icons/lu'
import { RxCross1 } from 'react-icons/rx'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  const [NavToggle, setNavToggle] = useState(false)

  return (
    <>
      <div className='bg-[#00203FFF] text-[#8ed5b4] border-b-2 border-[#8ed5b4] fixed w-full top-0 left-0 z-50'>
        <div className='flex max-w-6xl m-auto justify-between items-center border-b-2 border-[#8ed5b4] md:border-none md:py-3 py-4 px-5'>
          <div className='font-logo text-[60px] md:text-[50px] font-semibold'>
            <Link to='#home' className='hover:text-[#ddffef]'>
              →Raj
            </Link>
          </div>

          <div className='hidden md:flex gap-6 font-body font-semibold text-base'>
            <Link to='#home' className='p-2 px-4 group hover:text-[#ddffef]'>
              Home
              <div className='bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500'></div>
            </Link>
            <Link to='#skills' className='p-2 px-4 group hover:text-[#ddffef]'>
              Skills
              <div className='bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500'></div>
            </Link>
            <Link
              to='#projects'
              className='p-2 px-4 group hover:text-[#ddffef]'
            >
              Projects
              <div className='bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500'></div>
            </Link>
            <Link to='#contact' className='p-2 px-4 group hover:text-[#ddffef]'>
              Contact
              <div className='bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500'></div>
            </Link>
          </div>

          <div
            className='md:hidden z-10'
            onClick={() => {
              setNavToggle(!NavToggle)
            }}
          >
            {NavToggle ? <RxCross1 size={30} /> : <LuMenu size={30} />}
          </div>
        </div>

        <div
          className={`flex md:hidden flex-col justify-center items-center top-0 left-0 w-full bg-[#1e354d] font-body font-semibold text-xl transition-all duration-300 ${
            NavToggle
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <Link
            to='#home'
            className='border-b-2 border-b-slate-200 w-3/5 flex items-center justify-center mt-2 py-5'
          >
            Home
          </Link>
          <Link
            to='#skills'
            className='border-b-2 border-b-slate-200 flex items-center justify-center w-3/5 text-center py-5'
          >
            Skills
          </Link>
          <Link
            to='#projects'
            className='border-b-2 border-b-slate-200 flex items-center justify-center w-3/5 text-center py-5'
          >
            Projects
          </Link>
          <Link
            to='#contact'
            className='w-3/5 text-center flex items-center justify-center mb-2 py-5'
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
