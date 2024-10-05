import React from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import './index.css'
import Hero from './assets/components/Hero/Hero'
import About from './assets/components/About/About'
import Experience from './assets/components/Experience/Experience'
import Project from './assets/components/Projects/Project'
import Contacts from './assets/components/Contact/Contacts'


function App() {
  return (
    <div className='App'>
       <Navbar/>
       <Hero/>
        <About/>
        <Experience/>
        <Project/>
       <Contacts/>
    </div>
  
  )
}

export default App