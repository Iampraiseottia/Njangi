
import React from 'react'
import Link from 'next/link'

import { motion } from "motion/react"



const Navbar = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.7 }}
      viewport={{ once: true, amount: 0.05 }}
      className="flex flex-wrap justify-between items-center w-full bg-[lightseagreen] p-4 md:py-6"
    >

      {/* Njangi Application | Logo Section */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-start items-center text-center mb-4 sm:mb-0">
        <img src="/logo3.png" className="w-24 h-24 sm:w-32 sm:h-28 mr-2" alt="Njangi App Logo" />
        <h1 className="text-white text-3xl sm:text-5xl font-extrabold tracking-wider">NJANGIFY</h1>
      </div>

      {/*Njangi Application | Navbar Links */}
      <ul className="w-full sm:w-auto flex flex-wrap justify-center sm:justify-evenly items-center gap-4 sm:gap-8 transition-all ease-in-out">
        <li className="text-yellow-400 text-xl sm:text-2xl hover:cursor-pointer"><Link href='/'>Home</Link></li>
        <li className="text-white text-xl sm:text-2xl hover:cursor-pointer"><Link href='/about'>About</Link></li>
        <li className="text-white text-xl sm:text-2xl hover:cursor-pointer"><Link href='/faq'>FAQs</Link></li>
        <li className="text-white text-xl sm:text-2xl hover:cursor-pointer">Pages</li>
        <li className="text-white text-xl sm:text-2xl hover:cursor-pointer"><Link href='/contact'>Contact</Link></li>
      </ul>

      {/*Njangi Application | Sign Up Button */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-4 sm:mt-0">
        <Link href='/register' className="bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] hover:from-[#00ffff] hover:via-slate-600 hover:to-[#00ffff] text-white py-3 px-5 sm:py-4 sm:px-6 font-extrabold text-lg sm:text-xl lg:text-2xl duration-500 rounded-md sm:rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider">
          Sign Up    
        </Link> 
      </div>

    </motion.section>

  )
}

export default Navbar