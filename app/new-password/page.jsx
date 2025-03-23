
"use client"

import React, { useRef } from 'react'

import globalStyle from '../globals.css' 
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Metadata from '../components/Metadata'


const New_Password = () => {


  const metadata = {
    title: 'New Password | Njangi Web Application',
    description: `Set a new password, one unique and not easy to hack. DON'T share it with anyone.` 
}


const new_Pass = useRef();

const onMouseEnterNewPassword = () => {
    new_Pass.current.focus();
}

const confirm_new_Pass = useRef();

const onMouseEnterConfirmNewPassword = () => {
    confirm_new_Pass.current.focus();
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
          <form className=' flex-col gap-6 w-full '  >
    
            <div className=' ease-in-out transition-all'>
              <label htmlFor="new_pass" className=' text-left text-[22px] font-medium tracking-wider'>New Password:</label>
              <div className='mt-4 mb-1 flex flex-row justify-center items-center'>
                <input 
                type="text" 
                ref={new_Pass}
                name="new_pass"
                onMouseEnter={onMouseEnterNewPassword}
                 id="new_pass" 
                 placeholder='Your New Password'
                  className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white mr-3'/>
              
              </div>
              <br />

              <label htmlFor="confirm_new_Pass" className=' text-left text-[22px] font-medium tracking-wider'>Confirm New Password:</label>
              <div className='mt-4 mb-1 flex flex-row justify-center items-center'>
                <input 
                type="text" 
                ref={confirm_new_Pass}
                name="confirm_new_Pass"
                onMouseEnter={onMouseEnterConfirmNewPassword}
                 id="confirm_new_Pass" 
                 placeholder='Confirm Your New Password'
                  className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white mr-3'/>
              
              </div>
            </div>
              
            <Link href='/dashboard' type='submit' className='mt-8 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full hover:from-[#00ffff] hover:via-slate-600 hover:to-[#00ffff]  text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider'>
            Continue <FontAwesomeIcon icon={faArrowRight} className='ml-1 w-6 h-6' />     
            </Link> 
          </form>          

          <p className='text-center mt-4 text-white tracking-wide'>
            Go Back to <Link href="/login" className='text-[#0ef] ml-1 font-extrabold hover:cursor-pointer hover:underline duration-300'>LOGIN</Link>
          </p>

        </div>
        
      </section>
    </main>
  )
}

export default New_Password;