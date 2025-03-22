'use client';

import {React, useState, useEffect} from 'react'

import { ArrowRight, Bell, Calendar, Search } from 'lucide-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGear,
faSun,
faMoon } from '@fortawesome/free-solid-svg-icons';


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
  <div className="p-8">

      {/* General SIde Bar Other LInks Header */} 
      <div className="flex justify-between items-center mb-8">
      <div  className='pt-4'>
        <h1 className="text-4xl font-bold text-gray-800">Good Day 👋,
          <span className='text-[lightseagreen] text-[42px] pl-1'>Ottia Praise</span>
        </h1>
      </div>

      <div className="flex items-center space-x-5"> 
      

        {/* Notification  */}
        <div className="relative cursor-pointer ease-in-out duration-100" title='Notifications'
        // onClick={() => setActiveComponent('notifications')} 
        >
          <Bell className="text-gray-600 cursor-pointer" size={28} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-extrabold">3</span>
        </div>


        {/* User Settings  */}
        <div onClick={() => setActiveComponent('settings')} className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold cursor-pointer ease-in-out duration-100" title='Settings'> 
          <FontAwesomeIcon icon={faGear} className='h-6 w-6' /> 
        </div>


        {/* User Avatar  */}
        <div onClick={() => setActiveComponent('profile')} className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold cursor-pointer ease-in-out duration-100" title='Profile'>
          OP
        </div>


        {/* Light and Dark Mode  */} 
        <div
          onClick={() => setIsDarkMode(prevMode => !prevMode)} title='Modes'
          className={`w-24 h-10 rounded-full bg-teal-500 justify-between flex items-center ${isDarkMode ? 'bg-white' : 'bg-lightseagreen'} transition-colors duration-300 cursor-pointer`}
        >
          <div
            className={`w-[49%] h-full flex items-center justify-center rounded-full transition-transform duration-300 ${isDarkMode ? 'translate-x-full bg-white' : 'bg-teal-500'}`}
          >
            <FontAwesomeIcon icon={faMoon} className={`w-7 h-7 ${isDarkMode ? 'text-lightseagreen' : 'text-white'}`} />
          </div>
          <div
            className={`w-[49%] mr-1 h-full flex items-center justify-center rounded-full transition-transform duration-300 ${isDarkMode ? 'bg-teal-500' : 'bg-white'}`}
          >
            <FontAwesomeIcon icon={faSun} className={`w-7 h-7 ${isDarkMode ? 'text-white' : 'text-teal-500'}`} />
          </div>
        </div>

      </div>
    </div>


    {/* Settings Main */}
  
  </div>
)
}

export default Settings_Dash;

