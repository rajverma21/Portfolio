import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Social from './components/Social'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Social />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
