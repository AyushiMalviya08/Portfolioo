import React from 'react';
import { motion } from "framer-motion"
import finius from "../assets/finius.jpeg";
import connect from "../assets/connect.png";
import port from "../assets/port.png";



const project = [
  {
    name: 'FINIUS',
    description: 'FINIUS is a gamified financial learning application that features reading articles, blogs, games based on topics, videos, a training simulator, and a chatbot. My role included being the Team Lead, handling Frontend development, and managing Authentication.',
    tech: ['JavaScript', 'Tailwind', 'Firebase', 'Unity', 'Next.js', 'TypeScript'],
    role: 'Role: Team Lead, FrontEnd, Authentication',
    image: finius // Replace with actual image path or URL
  },
  {
    name: 'Connect',
    description: 'Connect is a social platform for the LGBTQ+ community, offering features such as pair finding, doctor consultancy, community engagement, and a chatbot. My role was focused on Frontend development.',
    tech: ['React.js', 'Firebase', 'JavaScript', 'CSS'],
    image: connect // Replace with actual image path or URL
  },
  {
    name: 'Portfolio',
    description: 'This project is a personal portfolio website showcasing my skills, projects, and experiences. It includes animations and a responsive design.',
    tech: ['React.js', 'Vite', 'Tailwind', 'Framer Motion'],
    image: port // Replace with actual image path or URL
  }
];

const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }} 
      className='my-20 text-center text-4xl'>Projects</motion.h1>
      {project.map((project, index) => (
        <div key={index} className='mb-8 flex flex-col lg:flex-row justify-between'>
          <motion.div
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: -100 }}
           transition={{ duration: 0.5 }}
           className='w-full lg:w-1/4 mb-4 lg:mb-0'>
            <img src={project.image} alt={project.name} className='w-full h-auto rounded-md' />
          </motion.div>
          <motion.div
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 0.5 }}
          className='w-full max-w-xl lg:w-3/4 lg:pl-8'>
            <h2 className='mb-2 text-2xl font-semibold'>{project.name}</h2>
            <p className='mb-4 text-neutral-400'>{project.description}</p>
            <div className='mb-2 text-sm text-neutral-400'>
            {project.role && (
              <p className='mb-2 text-sm text-neutral-400'>{project.role}</p>)}
              {project.tech.map((tech, index) => (
                <span key={index} className='mr-2 mt-4 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                  {tech}
                </span>
              ))}
            </div>
            
            
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Project;
