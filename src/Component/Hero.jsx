import React from 'react'
import { motion } from "framer-motion"
import profile1 from "../assets/profile1.png";

const container=(delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay}
    }
})


const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                         className='pb-16 text-6xl font-thin tracking-tigts lg:mt-16 lg:text-8xl'>
                            Ayushi Malviya
                        </motion.h1>
                        <motion.span 
                         variants={container(0.5)}
                         initial="hidden"
                         animate="visible"
                         className='bg-gradient-to-r from-pink-300 via-orange-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            Aispiring SDE

                        </motion.span>
                        <motion.p
                         variants={container(1)}
                         initial="hidden"
                         animate="visible" 
                        className='my-2 max-w-xl py-6 font-light tracking-tighter'>I am a tech enthusiast and B.Tech student from the 2025 batch at KIET Group of Institutions. With a major in Information Technology, I have developed a solid expertise in web development and problem-solving using Java. I am passionate about exploring new technologies and creating innovative solutions to complex problems.

                        </motion.p>
                        
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                <motion.img 
                
                 initial={{x:100, opacity:0}}
                 animate={{x:0, opacity:1}}
                 transition={{duration:1, delay:1.2}}
                src={profile1} alt="Image here"/>

                    </div>
                    </div>
            </div>

        </div>
    )
}

export default Hero
