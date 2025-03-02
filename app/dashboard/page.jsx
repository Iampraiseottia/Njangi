
"use client"

import React from 'react'

import globalStyle from '../globals.css' 
import Link from 'next/link'

import { metadata } from './metadata'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';

const DashBoard = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const [activeComponent, setActiveComponent] = useState('dashboard');

  const renderContent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <div>Dashboard Content</div>;
      case 'profile':
        return <div>Profile Content</div>;
      case 'settings':
        return <div>Settings Content</div>;
      default:
        return <div>Dashboard Content</div>;
    }
  };


  return (
    <section className=' w-full flex'>

      {/* Dashboard Left Section (Side Bar) */}

      <div className=' w-1/6 bg-[lightseagreen] dashboard-sidebar-border h-[100vh] sticky top-0 left-0 bottom-0 border-2 border-[lightseagreen] border-solid text-center align-middle py-20 text-white text-2xl font-semibold'>
        <div  onClick={() => setActiveComponent('dashboard')} className=' mb-4 flex align-middle justify-center hover:cursor-pointer ease-in-out duration-300'>
          <FontAwesomeIcon icon={faHome} className=' h-8 w-8' />  
          <h1  className=' tracking-wider ml-2 mt-[3px]'>Dashboard</h1>
        </div>
       

        <div className='relative mb-4'>
          <div 
            className='flex items-center justify-center hover:cursor-pointer ease-in-out duration-300 p-2  rounded' 
            onClick={toggleDropdown}
          >
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faQuestion} className=' h-8 w-8' />  
              <h1 className='tracking-wider ml-2'>Complete</h1>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className={`h-5 w-5 ml-2 ease-in-out duration-[250ms] transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>

          {/* Complete Dropdown List */}
          {isOpen && (
            <ul className='mt-2 w-full rounded ease-in-out duration-300'>
              <li className='p-2'>About You</li>
              <li className='p-2'>Income</li>
              <li className='p-2'>Identity</li>
              <li className='p-2'>Survey</li>
            </ul>
          )} 
    
        </div>



        <div onClick={() => setActiveComponent('profile')}  className='mt-4 flex items-center justify-center hover:cursor-pointer ease-in-out duration-300'>
          <FontAwesomeIcon icon={faHome} className='h-10 w-10' />
          <h1 className='tracking-wider ml-2 mt-[6px]'>Groups</h1> 
        </div>

      </div>


      {/* Dashboard Right Section - Display Each SideBar Header content dynamically */}

        <div className='w-10/12 p-4'>
        {renderContent()}
      </div>

    </section>
  )
}


export default DashBoard

