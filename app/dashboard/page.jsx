import React from 'react'

import globalStyle from '../globals.css' 
import Link from 'next/link'

import { metadata } from './metadata'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faHome } from '@fortawesome/free-solid-svg-icons'



const DashBoard = () => {
  return (
    <section className=' w-full flex'>

      {/* Dashboard Left Section (Side Bar) */}

      <div className=' w-1/6 bg-[lightseagreen] h-[100vh] sticky top-0 left-0 bottom-0 border-2 border-[lightseagreen] border-solid text-center align-middle py-20 text-white text-2xl font-semibold'>
        <div className=' flex align-middle justify-center hover:cursor-pointer ease-in-out duration-300'>
          <FontAwesomeIcon icon={faHome} className=' h-10 w-10' />  
          <h1  className=' tracking-wider ml-2 mt-[6px]'>Dashboard</h1>
        </div>
      </div>


      {/* Dashboard Right Section (Contents) */}

      <div className=' w-10/12'>
        DashBoard Right
      </div>

    </section>
  )
}


export default DashBoard

