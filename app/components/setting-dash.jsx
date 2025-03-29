'use client';

import {React, useState, useEffect } from 'react'

import { Bell } from 'lucide-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPeopleGroup,
faSun,
faMoon } from '@fortawesome/free-solid-svg-icons';

import { motion } from "motion/react"


const Settings_Dash = ({ setActiveComponent }) => {

const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode === 'true'; 
    }
    return false;
  });

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);

    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);
 
 

return (
  <div className="p-4 md:p-8">

    <motion.div 
      initial={{opacity: 0, y: 100}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.7, delay: 0.7}}
      viewport={{once: true, amount: 0.05}}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <div className="w-full sm:w-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Good Day 👋,
          <span className="block sm:inline text-[lightseagreen] text-[28px] sm:text-[32px] md:text-[42px] sm:pl-1">Ottia Praise</span>
        </h1>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:space-x-5 w-full sm:w-auto justify-end"> 
        {/* Notification */}
        <div className="relative cursor-pointer ease-in-out duration-100" title='Notifications'>
          <Bell className="text-gray-600 cursor-pointer" size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-extrabold">3</span>
        </div>

        {/* Groups */}
        <div onClick={() => setActiveComponent('njangi-groups')} className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold cursor-pointer ease-in-out duration-100" title='Settings'> 
          <FontAwesomeIcon icon={faPeopleGroup} className='h-5 w-5 md:h-6 md:w-6' /> 
        </div>

        {/* User Avatar */}
        <div onClick={() => setActiveComponent('profile')} className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold cursor-pointer ease-in-out duration-100" title='Profile'>
          OP
        </div>

        {/* Light and Dark Mode */} 
        <div
          onClick={() => setIsDarkMode(prevMode => !prevMode)} title='Modes'
          className={`w-20 md:w-24 h-9 md:h-10 rounded-full bg-teal-500 justify-between flex items-center ${isDarkMode ? 'bg-white' : 'bg-lightseagreen'} transition-colors duration-300 cursor-pointer`}
        >
          <div
            className={`w-[49%] h-full flex items-center justify-center rounded-full transition-transform duration-300 ${isDarkMode ? 'translate-x-full bg-white' : 'bg-teal-500'}`}
          >
            <FontAwesomeIcon icon={faMoon} className={`w-5 h-5 md:w-7 md:h-7 ${isDarkMode ? 'text-lightseagreen' : 'text-white'}`} />
          </div>
          <div
            className={`w-[49%] mr-1 h-full flex items-center justify-center rounded-full transition-transform duration-300 ${isDarkMode ? 'bg-teal-500' : 'bg-white'}`}
          >
            <FontAwesomeIcon icon={faSun} className={`w-5 h-5 md:w-7 md:h-7 ${isDarkMode ? 'text-white' : 'text-teal-500'}`} />
          </div>
        </div>
      </div>
    </motion.div>


    {/* Settings Main */}
  
  </div>
)
}

export default Settings_Dash;

