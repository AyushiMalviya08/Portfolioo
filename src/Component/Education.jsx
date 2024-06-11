import React from 'react';
import { motion } from "framer-motion"
const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 0.5 }} 
        className='my-20 text-center text-4xl'>Education</motion.h1>
      <div>
        <div className='mb-8 flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/4'>
            <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
             className='mb-2 text-sm text-neutral-400'>BTech 2021-2025</motion.h2>
          </div>
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full max-w-xl lg:w-3/4'>
            <p className='mb-2 font-semibold'>KIET Group of Institutions, Dr. A.P.J. Abdul Kalam Technical University</p>
            <p className='mb-4 text-neutral-400'>CGPA: 8.0</p>
          </motion.div>
        </div>
        <div className='mb-8 flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/4'>
            <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }} className='mb-2 text-sm text-neutral-400'>Intermediate</motion.h2>
          </div>
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
            <p className='mb-2 font-semibold'>Emmanuel Mission School, KOTA</p>
            <p className='mb-4 text-neutral-400'>Central Board of Secondary Education</p>
            <p className='mb-4 text-neutral-400'>Percentage: 89.8%</p>
          </motion.div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/4'>
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }} className='mb-2 text-sm text-neutral-400'>Matriculation</motion.h2>
          </div>
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }} className='w-full max-w-xl lg:w-3/4'>
            <p className='mb-2 font-semibold'>Green View Public School, Bhadohi</p>
            <p className='mb-4 text-neutral-400'>Central Board of Secondary Education</p>
            <p className='mb-4 text-neutral-400'>Percentage: 92.83%</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Education;
