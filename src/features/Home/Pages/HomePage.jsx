import React from 'react'
import HomeComponents from '../components/HomeComponents'
import About from '../components/About'
import Experince from '../components/Experince'
import Skills from '../components/Skills'
import Projects from '../components/Projects'


const HomePage = () => {

  return (
    <>
        <HomeComponents/>
        <About/>
        <Experince/>
        <Skills/>
        <Projects/>
    </>
  )
}

export default HomePage
