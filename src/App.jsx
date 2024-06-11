import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Technologies from './Component/Technologies'
import Experience from './Component/Experience'
import Education from './Component/Education'
import Project from './Component/Project'
import Contact from './Component/Contact'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="relative z-10"></div>
        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Education/>
          <Project/>
          <Contact/>

        </div>
      </div>
    </div>
  )
}

export default App
