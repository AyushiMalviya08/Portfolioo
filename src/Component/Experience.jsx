import React from 'react';
import { motion } from "framer-motion"
const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 0.5 }} 
        
      className='my-20 text-center text-4xl'>Experience</motion.h1>
      <div>
        <div className='mb-8 flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/4'>
            <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='mb-2 text-sm text-neutral-400'>August 2023 - Present</motion.h2>
          </div>
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full max-w-xl lg:w-3/4'>
            <p className='mb-2 font-semibold'>Cabin4J SDE Intern</p>
            <p className='mb-4 text-neutral-400'>
            As a Software Development Engineer intern at Cabin4J, I have been deeply involved in developing and maintaining backend components using Java and the Spring framework. My responsibilities include collaborating with a cross-functional team to design and implement new features, conducting code reviews, and providing constructive feedback to peers. 
            </p>
            <div className='flex flex-wrap'>
              <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Java</span>
              <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Spring</span>
              <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Backend</span>
            </div>
          </motion.div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/4'>
            <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
             className='mb-2 text-sm text-neutral-400'>2023</motion.h2>
          </div>
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
            <p className='mb-2 font-semibold'>E Boosters Mentor</p>
            <p className='mb-4 text-neutral-400'>
              Served as a mentor at E Boosters, guiding college juniors on various soft skills such as communication, leadership, and teamwork, fostering a collaborative and supportive learning environment.
            </p>
            <div className='flex flex-wrap'>
              <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Communication</span>
              <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Leadership</span>
              <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Teamwork</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
