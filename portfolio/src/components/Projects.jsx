import React, { useEffect } from 'react'
import project1 from '../assets/project1.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: '950'
    })
  }, [])

  const projectsMade = [
    {
      id: 1,
      src: project1,
      title: 'HTML',
      style: 'shadow-sky-600 shadow-lg',
      demoLink: 'https://fitness-decoder.vercel.app/',
      sourceCode: 'https://github.com/rajverma21/FitnessDecoder'
    },
    {
      id: 2,
      src: project1,
      title: 'CSS',
      style: 'shadow-sky-600 shadow-lg',
      demoLink: 'https://fitness-decoder.vercel.app/',
      sourceCode: 'https://github.com/rajverma21/FitnessDecoder'
    },
    {
      id: 3,
      src: project1,
      title: 'JavaScript',
      style: 'shadow-sky-600 shadow-lg',
      demoLink: 'https://fitness-decoder.vercel.app/',
      sourceCode: 'https://github.com/rajverma21/FitnessDecoder'
    },
    {
      id: 4,
      src: project1,
      title: 'React JS',
      style: 'shadow-sky-900 shadow-lg',
      demoLink: 'https://fitness-decoder.vercel.app/',
      sourceCode: 'https://github.com/rajverma21/FitnessDecoder'
    },
    {
      id: 5,
      src: project1,
      title: 'Tailwind CSS',
      style: 'shadow-sky-900 shadow-lg',
      demoLink: 'https://fitness-decoder.vercel.app/',
      sourceCode: 'https://github.com/rajverma21/FitnessDecoder'
    },
    {
      id: 6,
      src: project1,
      title: 'Firebase',
      style: 'shadow-sky-900 shadow-lg',
      demoLink: 'https://fitness-decoder.vercel.app/',
      sourceCode: 'https://github.com/rajverma21/FitnessDecoder'
    }
  ]

  return (
    <div
      id='projects'
      className='text-[#9fe1c2] w-full bg-gradient-to-b from-[#0f133d] via-[#0f3d6b] to-[#4984d8] font-body flex justify-center items-center pt-36 pb-32 md:pt-32'
    >
      <div className='max-w-5xl m-auto flex gap-2 justify-center items-center flex-col'>
        <div
          className='font-semibold text-[25px] sm:text-[35px] underline underline-offset-8'
          data-aos='fade-down'
          data-aos-offset='100'
        >
          PROJECTS
        </div>
        <p
          className='text-[15px] sm:text-[19px]'
          data-aos='fade-down'
          data-aos-offset='200'
        >
          Here are some of the projects I've worked on
        </p>
        <div
          className='grid max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-6 gap-10 px-4'
          data-aos-offset='200'
          data-aos='fade-down'
        >
          {projectsMade.map(
            ({ id, src, title, style, demoLink, sourceCode }) => (
              <div
                key={id}
                data-aos='fade-down'
                data-aos-offset='200'
                className={`flex flex-col gap-3 justify-center items-center ${style} px-6 rounded-lg p-4 hover:scale-110 hover:text-white duration-300`}
              >
                <img
                  src={src}
                  alt={title}
                  className='h-28 rounded-md cursor-pointer'
                  onClick={() => {
                    alert('Hello, This is my Project')
                  }}
                />
                <p>{title}</p>
                <div className='flex items-center border-cyan-400 border-2 rounded-md py-1 w-full'>
                  <a href={demoLink} className='text-center w-full'>
                    View
                  </a>
                  <div className='w-[1px] h-full bg-slate-50'></div>
                  <a href={sourceCode} className='text-center w-full'>
                    Code
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
