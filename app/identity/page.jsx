import React from 'react'
import globalStyle from '../globals.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
title: 'Identity - Njangi Web Application',
description: 'Lets get to know you our most special user'
}

const Identity = () => {
return (
<main className='flex justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>


<section className=' w-full max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper my-8 '> 

<h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6 pt-9 text-center mb-5'>Your Unique Idenity 🔥</h1>


  <div className='flex flex-col lg:flex-row justify-between items-center mt-[-50px]'> 
    {/* Registration Page 01 Left Section */}
    <div className='w-full lg:w-[45%] p-6 lg:p-12 xl:p-20'>
    <form className='flex flex-col gap-1 w-full max-w-xl'>

      <div className='flex flex-col gap-2'>
        <label htmlFor="birth_certificate" className='font-semibold text-lg tracking-wide'>🏴󠁥󠁳󠁰󠁶󠁿 Upload Your Birth Certificate:</label>
        <input 
          type="file" 
          name="birth_certificate" 
          id="birth_certificate" 
          placeholder='Upload Your Birth Certificate' 
          className='w-full text-base bg-transparent h-40 rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div> <br />

      <div className='flex flex-col gap-2'>
        <label htmlFor="Identification_Card" className='font-semibold text-lg tracking-wide'>🏴󠁥󠁳󠁰󠁶󠁿 Upload Your Identification Card:</label>
        <input 
          type="file" 
          name="Identification_Card" 
          id="Identification_Card" 
          placeholder='Upload Your Identification Card' 
          className='w-full text-base bg-transparent h-40 rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div> <br />

      <div className='flex flex-col gap-2'>
        <label htmlFor="uploaded_pic" className='font-semibold text-lg tracking-wide'>🏴󠁥󠁳󠁰󠁶󠁿 Upload a Photo of Yourself:</label>
        <input 
          type="file" 
          name="uploaded_pic" 
          id="uploaded_pic" 
          placeholder='Upload Your Birth Certificate' 
          className='w-full text-base bg-transparent h-40 rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div> <br />
  
    </form>
    </div>

    {/* Registration Page 01 Right Section */}
    <div className='w-full lg:w-[55%] p-6 lg:p-9'>

       <form className='flex flex-col gap-6 w-full max-w-xl'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="disability_status" className='font-semibold text-lg tracking-wide'>🏴󠁥󠁳󠁰󠁶󠁿 Do You Have Any Disability?</label>
        <input 
          type="text" 
          name="disability_status" 
          id="disability_status" 
          placeholder='If none , type NO but If YES, Name them ' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="sickness" className='font-semibold text-lg tracking-wide'>🌆 Are You Suffering of any sickness or disease?</label>
        <input 
          type="text" 
          name="sickness" 
          id="sickness" 
          placeholder='If none , type NO but If YES, Name them  ' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="camera_pic" className='font-semibold text-lg tracking-wide'>🏴󠁥󠁳󠁰󠁶󠁿 Take a Picture of Yourself:</label>
        <input 
          type="file" 
          name="camera_pic" 
          id="camera_pic" 
          placeholder='Upload Your Birth Certificate' 
          className='w-full text-base bg-transparent h-52 rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div> 

   

      <Link href="/complete" className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center'>
        Continue ➡️
      </Link>
    </form>

    <p className='text-right mt-4 mb-2 font-bold text-lg'>04/05</p>
    
    <Link href="/income" className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-[90%] text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center'>
              <FontAwesomeIcon icon={faArrowLeft} className='werey2 mr-2' /> Go Back 

      </Link>
     

    </div>
  </div>
 
</section>
</main>

)

}

export default Identity