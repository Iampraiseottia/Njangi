import React from 'react'

import { motion } from "motion/react"

import globalStyle from '../globals.css' 


const Footer = () => {
  return (
    <motion.section 
    initial={{opacity: 0, y: 100}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.7, delay: 0.7}}
    viewport={{once: true, amount: 0.05}}
    className=' mt-20 flex flex-col md:flex-row justify-between items-center w-full bg-[lightseagreen] p-4 md:py-6 md:px-8'>
      <div className=''>Footer Sec 1</div>
      <div className=''>Footer Sec 2</div>
      <div className=''>Footer Sec 3</div>
      <div className=''>Footer Sec 4</div>
    </motion.section>
  )
}

export default Footer
