
"use client"

import React, { useRef, useState } from 'react'

import globalStyle from '../globals.css' 
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faLock } from '@fortawesome/free-solid-svg-icons'

import Metadata from '../components/Metadata'


const Verify = () => {


  const metadata = {
    title: 'Verify | Njangi Web Application',
    description: 'Enter code sent to gain access to your account' 
}


    const code1 = useRef();
  
    const onMouseEnterCode1 = () => {
      code1.current.focus();
    }
  

    const code2 = useRef();
  
    const onMouseEnterCode2 = () => {
      code2.current.focus();
    }

    const code3 = useRef();
  
    const onMouseEnterCode3 = () => {
      code3.current.focus();
    }
  

    const code4 = useRef();
  
    const onMouseEnterCode4 = () => {
      code4.current.focus();
    }

  
  
  return (

    <main className='flex justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>

<Metadata title={metadata.title} description={metadata.description} />

      <section className='sm:w-full md:w-[80%]  lg:w-[40%] max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper4 my-8 '> 
        
        <div className='w-full lg:w-[100%] p-6 lg:p-9'>
          <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6 text-center mb-5 flex justify-center items-center'>
            <img src="/logo3.png" alt="Njangi Logo" className=' w-20 h-20 mr-1' />  
            NJANGIFY</h1>
          <br />
          <form className='flex flex-col gap-6 w-full justify-center align-middle items-center'  >
    
            <div className=' ease-in-out transition-all'>
              <label htmlFor="verification_code_send" className=' text-left text-[22px] font-medium tracking-wider'>Verification Code</label>
              <div className='mt-4 mb-1 flex flex-row justify-center items-center'>
                <input 
                type="text" 
                ref={code1}
                name="verification_code_send"
                onMouseEnter={onMouseEnterCode1}
                 id="verification_code_send" 
                 placeholder='3'
                  className='w-[25%] text-center text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white mr-3'/>
                <br />

                <input 
                type="text"
                name="verification_code_send" 
                ref={code2}
                id="verification_code_send" 
                placeholder='5' 
                onMouseEnter={onMouseEnterCode2}
                className='w-[25%] text-center text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white mr-3'/>
                <br />

                <input 
                type="text" 
                name="verification_code_send" 
                onMouseEnter={onMouseEnterCode3}
                id="verification_code_send" 
                placeholder='2' 
                ref={code3}
                className='w-[25%] text-center text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white mr-3'/>
                <br />

                <input 
                onMouseEnter={onMouseEnterCode4}
                type="text" 
                name="verification_code_send" 
                ref={code4}
                id="verification_code_send" 
                placeholder='8' 
                className='w-[25%] text-center text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white mr-3'/>
              </div>
            </div>
              
            <button type='submit' className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full hover:from-[#00ffff] hover:via-slate-600 hover:to-[#00ffff]  text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider'>
              <FontAwesomeIcon icon={faLock} className='mr-1 w-6 h-6' /> VERIFY    
            </button>
          </form>          

          <p className='text-center mt-4 text-white tracking-wide'>
            Go Back to <Link href="/login" className='text-[#0ef] ml-1 font-extrabold hover:cursor-pointer hover:underline duration-300'>LOGIN</Link>
          </p>

        </div>
        
      </section>
    </main>
  )
}

export default Verify;