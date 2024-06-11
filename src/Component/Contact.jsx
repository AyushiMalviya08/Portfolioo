import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai';
import { motion } from "framer-motion"

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "988ea836-c182-4eb7-ae18-3693bb509181");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);

        }
    };



    return (
    <div className="py-12">
       <div className='border-b border-neutral-900 pb-4'>
       <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>Get in touch</motion.h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <motion.div
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: -100 }}
           transition={{ duration: 0.5 }}
            className="contact-left text-neutral-400 lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-2xl font-bold mb-4">Let's talk</h1>
            <p className="mb-4">Share your feedback and feel free to talk about projects.</p>
            <div className="flex items-center mb-4">
              <AiOutlineMail className="text-2xl mr-2" />
              <p>malviya.ayushi2003@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
              <AiOutlinePhone className="text-2xl mr-2" />
              <p>+911-23345-67890</p>
            </div>
            <div className="flex items-center">
              <AiOutlineEnvironment className="text-2xl mr-2" />
              <p>Ghaziabad 201206</p>
            </div>
          </motion.div>
          <motion.form
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 0.5 }}
            onSubmit={onSubmit} className="contact-right lg:w-1/2">
            <label htmlFor="name" className="block text-neutral-400 mb-2">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" className="bg-gray-800 rounded-md px-4 py-2 mb-4 w-full text-neutral-400" />
            <label htmlFor="email" className="block text-neutral-400 mb-2">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" className="bg-gray-800 rounded-md px-4 py-2 mb-4 w-full text-neutral-400" />
            <label htmlFor="message" className="block text-neutral-400 mb-2">Write your Message</label>
            <textarea name="message" rows="8" placeholder="Enter your message" className="bg-gray-800 rounded-md px-4 py-2 mb-4 w-full text-neutral-400"></textarea>
            <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-md transition duration-300 hover:bg-purple-700">Submit</button>
          </motion.form>
        </div>
        <div className="py-6 text-center text-neutral-400">
      <p className="text-lg">Thanks for visiting!</p>
    </div>
      </div >
    
  );
}

export default Contact;
