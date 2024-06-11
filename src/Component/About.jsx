import React from 'react'
import { motion } from "framer-motion"
import about from "../assets/about.jpg";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay }
    }
})

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>
                About
                <span className='text-neutal-500'> Me</span>

            </h1>
            <div className='flex flex-wrap'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}

                    className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex item-center justify-center'>
                        <img src={about} alt="about" />
                    </div>
                </motion.div>
                <motion.div 
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: 100 }}
                 transition={{ duration: 0.5 }}

                className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 maxw-xl py-6'>I am a B.Tech student specializing in Information Technology at KIET Group of Institutions, class of 2025. As a tech enthusiast with a strong foundation in web development, I am proficient in HTML, CSS, JavaScript, and ReactJS for building dynamic web applications. Additionally, my expertise in Java enhances my ability to develop robust backend solutions and tackle complex problem-solving tasks. I also have a keen interest in exploring data analytics to uncover insights and drive decision-making. Constantly exploring new technologies, I am dedicated to expanding my skills and staying updated with industry trends, thriving in collaborative environments that challenge me to innovate.

                        </p>
                    </div>
                </motion.div>

            </div>
        </div >
    )
}

export default About
