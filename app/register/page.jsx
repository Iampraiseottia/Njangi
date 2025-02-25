
"use client"

import React from 'react'
import { useActionState, useState } from 'react'


import globalStyle from '../globals.css' 
import Link from 'next/link'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

import { CreateUser01Page } from '../actions'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'

import { register01Schema } from '../lib/zodSchemas' 

import { metadata } from './metadata'





const Register = () => {

  const [lastResult, action] = useActionState(CreateUser01Page, undefined)

  const [form, fields] = useForm({
    lastResult,

    // onValidate({ formData }) {
    //   parseWithZod(formData, {
    //     schema: register01Schema
    //   })
    // }, 

    // shouldValidate: "onBlur",
    // shouldRevalidate: "onInput"
  })





  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");



  
  
  return (
    <main className='flex justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>

      <section className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper my-8 '> 

        {/* Registration Page 01 Left Section */}

        <div className='w-full lg:w-[45%] p-6 lg:p-12 xl:p-20'>
          <h1 className='text-4xl lg:text-6xl font-extrabold tracking-wide mt-6 lg:mt-10'>WELCOME!!!</h1>
          <br />
          <p className='text-base lg:text-lg mb-5'>We are delighted and privilege to have you 🔥 here. Follow the steps made available on the right side of the page to register. If you need any assistance feel free to reach out.</p>
          <br />
          <h1 className='font-extrabold text-2xl lg:text-4xl tracking-wider'>OR</h1>
          <br />
          <div className='flex flex-col gap-4'>
            <button className='bg-white text-black py-3 lg:py-4 px-6 lg:px-12 font-bold text-base lg:text-lg duration-300 rounded-md hover:opacity-70 cursor-pointer flex justify-center items-center'>
              <img src="/google.png" className='w-6 lg:w-8 mr-2' alt="Google" />
              Continue With Google
            </button>
            <button className='bg-white text-black py-3 my-3 lg:py-4 px-6 lg:px-12 font-bold text-base lg:text-lg duration-300 rounded-md hover:opacity-70 cursor-pointer flex justify-center items-center'>
              <img src="/github.png" className='w-6 lg:w-8 mr-2' alt="GitHub" />
              Continue With GitHub
            </button>
            <button className='bg-white text-black py-3 lg:py-4 px-6 lg:px-12 font-bold text-base lg:text-lg duration-300 rounded-md hover:opacity-70 cursor-pointer flex justify-center items-center'>
              <img src="/facebook.png" className='w-6 lg:w-8 mr-2' alt="Facebook" />
              Continue With Facebook
            </button>
          </div>
        </div>


        {/* Registration Page 01 Right Section */}
        <div className='w-full lg:w-[55%] p-6 lg:p-9'>
          <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6  text-center mb-5'>SIGN UP 🔥</h1>
          <br />
          <form className='flex flex-col gap-6 w-full max-w-xl' id={form.id} onSubmit={async (e) => {
                        await form.onSubmit(e);   
                        // await handleSubmit(e); 
                    }}  action={action} >
            <div className='flex flex-col gap-2'>
              <label htmlFor="fullName" className='font-semibold text-lg tracking-wide'>👤 Full Name:</label>
              <input 
                type="text" 
                name={fields.fullName.name}
                defaultValue={fields.fullName.initialValue} 
                id="fullName" 
                placeholder='Your Full Name' 
                key={fields.fullName.key} 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.fullName.errors}</p>
            </div>

            
            <div className='flex flex-col gap-2'>
              <label htmlFor="email" className='font-semibold text-lg tracking-wide'>✉️ Email Address:</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={fields.email.initialValue}
                name={fields.email.name} 
                key={fields.email.key}
                id="email" 
                placeholder='Your Email Address' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.email.errors}</p> 

            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="userName" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCircleUser} className="werey2 mr-2 text-[gold]" /> User Name:</label>
              <input 
                type="text" 
                name={fields.userName.name} 
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                id="userName" 
                placeholder='Your User Name' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.userName.errors}</p> 
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="phoneNumber" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faPhoneVolume} className="werey2 mr-2 text-[#0ef]" /> Phone Number:</label>
              <input 
                type="text" 
                name={fields.phoneNumber.name} 
                key={fields.phoneNumber.key}
                defaultValue={fields.phoneNumber.initialValue}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                id="phoneNumber" 
                placeholder='Your Phone Number eg +237 682394782' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.phoneNumber.errors}</p> 
            </div>
 
            <div className='flex flex-col gap-2'>
              <label htmlFor="password" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faLock} className="werey2 mr-2 text-[#0ef]" /> Password:</label>
              <input 
                type="text" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name={fields.password.name} 
                key={fields.password.key}
                defaultValue={fields.password.initialValue} 
                id="password" 
                placeholder='Your Password ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.password.errors}</p> 

            </div>
            

            <button type='submit' className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full hover:from-[#00ffff] hover:via-slate-600 hover:to-[#00ffff]  text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider'>
              REGISTER    
            </button>
          </form>          

          <p className='text-center mt-4'>
            Already Have An Account? <br />
            <Link href="/login" className='text-[#0ef] font-extrabold hover:cursor-pointer hover:underline duration-300'>LOGIN</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Register

