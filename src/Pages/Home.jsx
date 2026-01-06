import React from 'react'
import Hero from '../Components/Hero.jsx'
import About from '../Components/About.jsx'
import Skills from '../Components/Skills.jsx'
import Project from '../Components/project.jsx'
import Content from '../Components/Contact.jsx'
import Services from '../Components/Services.jsx'

const Home = () => {
  return (
    <div>
      
      <h1>
        <Hero />  
        <About />
        <Skills />
        <Project/>
        <Services />
        <Content></Content>
      
      </h1>
    </div>
  )
}

export default Home