import React, { useEffect } from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import firebase from '../assets/firebase.png'
import cplusplus from '../assets/cplusplus.png'
import mongoDB from '../assets/mongoDB.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: '950'
    })
  }, [])

  const technologiesUsed = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-amber-500 shadow-md'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-sky-400 shadow-md'
    },
    {
      id: 3,
      src: js,
      title: 'JavaScript',
      style: 'shadow-amber-200 shadow-md'
    },
    {
      id: 4,
      src: react,
      title: 'React JS',
      style: 'shadow-slate-100 shadow-md'
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-cyan-300 shadow-md'
    },
    {
      id: 6,
      src: firebase,
      title: 'Firebase',
      style: 'shadow-orange-400 shadow-md'
    },
    {
      id: 7,
      src: cplusplus,
      title: 'C++',
      style: 'shadow-sky-100 shadow-md'
    },
    {
      id: 8,
      src: mongoDB,
      title: 'Mongo DB',
      style: 'shadow-cyan-200 shadow-md'
    }
  ]

  return (
    <div
      id='skills'
      className='text-[#9fe1c2] w-full bg-gradient-to-t from-[#0f133d] via-[#093765] to-[#4984d8] pt-36 md:pt-32 font-body flex justify-center items-center'
    >
      <div className='max-w-5xl m-auto flex gap-2 justify-center items-center flex-col'>
        <div
          className='font-semibold text-[25px] sm:text-[35px] underline underline-offset-8'
          data-aos='fade-down'
        >
          SKILLS & TECHNOLOGIES
        </div>
        <p className='text-[15px] sm:text-[19px]' data-aos='fade-down'>
          Here are the skills and technologies I use
        </p>
        <div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 gap-10 w-full px-10'
          data-aos='fade-down'
        >
          {technologiesUsed.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col gap-3 justify-center items-center ${style} px-6 rounded-lg p-4 hover:scale-105 hover:text-white transition-all duration-200`}
            >
              <img src={src} alt={title} className='h-28' />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
