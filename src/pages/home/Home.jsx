import React from 'react'
import Section from '../../components/section/Section.jsx'
import Header from '../../components/header/Header.jsx'
import Skills from '../../components/Skills/Skills.jsx'
import About from '../../components/AboutUs/About.jsx'
import Profile from '../../components/Profile/Profile.jsx'
import Contact from '../../components/Contact/Contact.jsx'

const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Skills/>
      <Section/>
      <Profile/>
      <Contact/>
    </>
  )
}

export default Home
