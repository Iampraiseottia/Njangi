import React from 'react'

import { motion } from "motion/react"

const Footer = () => {
  return (
    <motion.section 
    initial={{opacity: 0, y: 100}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.7, delay: 0.7}}
    viewport={{once: true, amount: 0.05}}
    className=''>
      <div className=''>Footer Sec 1</div>
      <div className=''>Footer Sec 2</div>
      <div className=''>Footer Sec 3</div>
      <div className=''>Footer Sec 4</div>
    </motion.section>
  )
}

export default Footer