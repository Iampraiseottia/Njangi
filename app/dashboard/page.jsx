import React from 'react'

import globalStyle from '../globals.css' 
import Link from 'next/link'

import { metadata } from './metadata'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 



const DashBoard = () => {
  return (
    <section className=' w-full flex'>

      {/* Dashboard Left Section (Side Bar) */}

      <div className=' w-1/6 bg-[lightseagreen] h-[100vh] sticky top-0 left-0 bottom-0 border-2 border-[lightseagreen] border-solid text-center align-middle py-14'>
        DashBoard Left
      </div>


      {/* Dashboard Right Section (Contents) */}

      <div className=' w-10/12'>
        DashBoard Right
      </div>
    </section>
  )
}

export default DashBoard

