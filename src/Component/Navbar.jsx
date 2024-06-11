import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-12' src={logo} alt="Logo here"/>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/ayushi-malviya08/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='text-neutral-400 hover:text-white'/>
        </a>
        <a href="https://github.com/Ayushimalviya08" target="_blank" rel="noopener noreferrer">
          <FaGithub className='text-neutral-400 hover:text-white'/>
        </a>
        <a href="https://www.instagram.com/ayushimalviya_08/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-neutral-400 hover:text-white'/>
        </a>
        <a href="https://discord.com/invite/your-invite-link" target="_blank" rel="noopener noreferrer">
          <FaDiscord className='text-neutral-400 hover:text-white'/>
        </a>
            

        </div>

    </nav>
    
  )
}

export default Navbar
