import React from 'react'
import globalStyle from '../globals.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faUser } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
title: 'About You - Njangi Web Application',
description: 'Lets get to know you our most special user'
}

const About_You = () => {
return (
<main className='flex justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>


<section className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper my-8 '> 

  {/* Registration Page 01 Left Section */}
  <div className='w-full lg:w-[45%] p-6 lg:p-12 xl:p-20'>
    <h1 className='text-4xl lg:text-6xl font-extrabold tracking-wide mt-6 lg:mt-10'>It's All About You!!!</h1>
    <br />
    <p className='text-base lg:text-lg mb-5'> Unlock exclusive rewards 🔥 which awaits you. Get personalized offers just for you just by us getting to know you better.  Don't miss out!!!, Your journey starts here..</p>
    <br />
    
    <FontAwesomeIcon icon={faUser} className='werey '  />  
 
  </div>

  {/* Registration Page 01 Right Section */}
  <div className='w-full lg:w-[55%] p-6 lg:p-9'>
    <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6  text-center mb-5'>Start Your Journey 🔥</h1>
    <br />
    <form className='flex flex-col gap-6 w-full max-w-xl'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="country" className='font-semibold text-lg tracking-wide'>🏴󠁥󠁳󠁰󠁶󠁿 Country:</label>
        <input 
          type="text" 
          name="country" 
          id="country" 
          placeholder='Your country ' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="homeAddress" className='font-semibold text-lg tracking-wide'>🌆 State or Region:</label>
        <input 
          type="text" 
          name="homeAddress" 
          id="homeAddress" 
          placeholder='Your Home Address / Location ' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="email" className='font-semibold text-lg tracking-wide'>🏙️ City:</label>
        <input 
          type="text" 
          name="city" 
          id="city" 
          placeholder='Your City / Town' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="number" className='font-semibold text-lg tracking-wide'>🏠 Home Address:</label>
        <input 
          type="text" 
          name="homeAddress" 
          id="homeAddress" 
          placeholder='Your Home Address / Precise Location' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <Link href="/income" className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center'>
        Continue ➡️
      </Link>
    </form>

    <p className='text-right mt-4 mb-2 font-bold text-lg'>02/05</p>
    
    <Link href="/register" className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-[90%] text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center'>
        Go Back 
      </Link>
     
  </div>
</section>
</main>

)

}

export default About_You