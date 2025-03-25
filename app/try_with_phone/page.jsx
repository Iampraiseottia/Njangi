
"use client"


import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import globalStyle from '../globals.css' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faMessage, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

import Metadata from '../components/Metadata'



const Try_With_Phone = () => {


const metadata = {
    title: 'Forgot Password | Try With Phone - Njangi Web Application',
    description: 'Reset Your Password. ',
};


 const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')


  const handleEmailChange = (e) => {
    setPhoneNumber(e.target.value)
    setError('')
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!phoneNumber.trim()) {
      setError('Please enter a Phone Number')
      return
    }
    
    router.push('/verify')
  }

const phoneNumberRef = useRef();

const onMouseEnterPhoneNumberRef = () => {
    phoneNumberRef.current.focus();
}



return (
    
    <main className='flex justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>

      <Metadata title={metadata.title} description={metadata.description} />

      <section className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper my-8 '> 

        {/* Registration Page 01 Left Section */}

        <div className='w-full lg:w-[45%] p-6 lg:p-12 xl:p-20'>
            <h1 className='text-4xl lg:text-4xl font-extrabold tracking-wide mt-6 lg:mt-10'>Forgot Password?</h1>
            <br />
            <p className='text-base lg:text-lg mb-5'>No worries, enter your phone Number and regain access to your account so as to continue enjoying the amazing features of NJANGIFY.
            </p>
            <h1 className='font-extrabold text-2xl lg:text-3xl tracking-wider'>OR</h1> <br /> 
            <Link href="/forgot_password" className='bg-white text-black py-3 lg:py-3 px-6 lg:px-12 font-bold text-base lg:text-lg duration-300 rounded-md hover:opacity-90 cursor-pointer flex justify-center items-center hover:rounded-[40px]'>
                <FontAwesomeIcon icon={faMessage} className="werey2 mr-2 text-[#0ef]" />
                Try With Email 
            </Link> 
        </div>


        {/* Registration Page 01 Right Section */}
        <div className='w-full lg:w-[55%] p-6 lg:p-9'>
          <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6  text-center mb-5'>RESET PASSWORD</h1>
          <br />
          <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-full max-w-xl' >
            
            <div div className='ease-in-out transition-all w-full'>
            <label htmlFor="phoneNumber" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faPhoneVolume} className="werey2 mr-2 text-[#0ef]" /> Phone Number:</label>
        
              <div className='mt-4 mb-1 flex flex-row justify-center items-center'>
                <input 
                  id="phoneNumber"
                  type="text" 
                  ref={phoneNumberRef}
                  value={phoneNumber}
                  onChange={handleEmailChange}
                  onMouseEnter={onMouseEnterPhoneNumberRef}
                  placeholder='Enter Your Phone Number'
                  className={`w-full text-base bg-transparent rounded-xl border-2 ${
                    error ? 'border-red-500' : 'border-[#0ef]'
                  } py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white`}
                />
              </div>
              {error && (
                <p className='text-red-500 mt-2 text-right font-medium'>{error}</p>
              )}
            </div>

            <button type='submit' className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full hover:from-[#00ffff] hover:via-slate-600 hover:to-[#00ffff]  text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider'>
              Reset Password    
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

export default Try_With_Phone;
