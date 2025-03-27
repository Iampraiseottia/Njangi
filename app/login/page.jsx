
"use client"

import React, { useRef } from 'react'
import { useActionState, useState } from 'react'


import globalStyle from '../globals.css' 
import Link from 'next/link'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import { CreateUser01Page } from '../actions'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'

import { register01Schema } from '../lib/zodSchemas' 

import Metadata from '../components/Metadata'


import { motion } from "motion/react"



const Login = () => {

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




  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const metadata = {
    title: 'Welcome Back | Login - Njangi Web Application',
    description: 'SIgn In and continue enjoying all the amazing features of this application' 
}



    const userNameRef = useRef();
  
    const onMouseEnteruserNameRef = () => {
      userNameRef.current.focus();
    }
  

    const passwordRef = useRef();
  
    const onMouseEnterpasswordRef = () => {
      passwordRef.current.focus();
    }

  
  
  return (

    <main className='flex justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>

<Metadata title={metadata.title} description={metadata.description} />

      <motion.section 
      initial={{opacity: 0, y: 100}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper2 my-8 '> 

        {/* Registration Page 01 Left Section */}

        
        <motion.div
        initial={{opacity: 0, y: 100}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.7, delay: 0.7}}
         className='w-full lg:w-[55%] p-6 lg:p-9'>
          <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6  text-center mb-5'>SIGN IN 🔥</h1>
          <br />
          <form className='flex flex-col gap-6 w-full max-w-xl' id={form.id} onSubmit={async (e) => {
                        await form.onSubmit(e);    
                        // await handleSubmit(e); 
                    }}  action={action} >
          
            <div className='flex flex-col gap-2'>
              <label htmlFor="userName" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCircleUser} className="werey2 mr-2 text-[#0ef]" /> User Name:</label>
              <input
              ref={userNameRef}
          onMouseEnter={onMouseEnteruserNameRef}
                type="text" 
                name={fields.userName.name} 
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                id="userName" 
                placeholder='Your User Name' 
                className={`w-full text-base bg-transparent rounded-xl outline-none border-2 border-[#0ef] py-3 px-4 focus:ring-1  duration-300 placeholder-white  ${fields.userName.errors ? 'border-red-700 focus:border-red-700 focus:ring-red-700 ' : 'focus:ring-[#0ef] '}`}
              />
              <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.userName.errors}</p> 
            </div>
          
 
            <div className='flex flex-col gap-2'>
              <label htmlFor="password" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faLock} className="werey2 mr-2 text-[#0ef]" /> Password:</label>
              <input
              ref={passwordRef}
          onMouseEnter={onMouseEnterpasswordRef}
                type="text" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name={fields.password.name} 
                key={fields.password.key}
                defaultValue={fields.password.initialValue} 
                id="password" 
                placeholder='Your Password ' 
                className={`w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white  ${fields.password.errors ? 'border-red-700 focus:border-red-700 focus:ring-red-700 ' : 'focus:ring-[#0ef] '}`}
              />
              <p className={`text-[16px] text-red-700 font-bold tracking-wide text-right`}>{fields.password.errors}</p> 

            </div> 

           <p className=' text-white text-right'>
            <Link href="/forgot_password" className='  hover:text-[#0ef] mt-[-17px] font-extrabold hover:cursor-pointer hover:underline duration-300'>Forgot Password</Link>

           </p>
                                

            <button type='submit' className='login_btn1 mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full hover:from-[#00ffff] hover:via-slate-600 hover:to-[#00ffff]  text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider'>
              LOGIN    
            </button>
          </form>          

          <p className='registerSec text-center mt-4'>
            Don't Yet Have An Account? <br />
            <Link href="/register" className='text-[#0ef] font-extrabold hover:cursor-pointer hover:underline duration-300'>REGISTER</Link>
          </p>  
        </motion.div>



        {/* Registration Page 01 Right Section */}

        <motion.div 
        initial={{opacity: 0, y: 100}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.7, delay: 0.7}}
        className='w-full lg:w-[45%] p-6 lg:p-12 xl:p-20'>
          <h1 className='text-4xl lg:text-6xl font-extrabold tracking-wide mt-6 lg:mt-10'>WELCOME BACK!!!</h1>
          <br />
          <p className='text-base lg:text-lg mb-5'>We are delighted to have you 🔥 back. Follow the steps provided to get access to your account and take control of your financial 🤑 freedom. If you need any assistance feel free to reach out.</p>
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
        </motion.div>

        
      </motion.section>
    </main>
  )
}

export default Login

