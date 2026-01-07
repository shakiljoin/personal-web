import React from 'react'
import Hero from '../Components/Hero.jsx'
import About from '../Components/About.jsx'
import Skills from '../Components/Skills.jsx'
import Project from '../Components/Project.jsx'
import Content from '../Components/Contact.jsx'
import Services from '../Components/Services.jsx'
import NavBar from '../Components/NavBar.jsx'
import Footer from '../Components/Footer.jsx'


const Home = () => {
  return (
    <div>
      
      <h1>
        <NavBar></NavBar>
        <Hero />  
        <About />
        <Skills />
        <Project/>
        <Services />
        <Content></Content>
        <Footer />  
      
      </h1>
    </div>
  )
}

export default Home