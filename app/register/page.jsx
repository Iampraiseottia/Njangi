
"use client"

import React, { useEffect, useRef } from 'react'
import { useActionState, useState } from 'react'

import { useRouter } from 'next/navigation'

import globalStyle from '../globals.css' 
import Link from 'next/link'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { 
  faLock ,
  faCircleUser,
  faPhoneVolume,
  faEyeSlash,
  faEye
} from '@fortawesome/free-solid-svg-icons'


import { CreateUser01Page } from '../actions'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { register01Schema } from '../lib/zodSchemas' 

import Metadata from '../components/Metadata'

import { motion } from "motion/react"



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

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)
  const router = useRouter()

  const metadata = {
    title: 'Registration - Njangi Web Application',
    description: 'Register and start enjoying the amazing features if Njangify. ',
  };


  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");


  

  const userNameRef = useRef();

  const onMouseEnterUserNameRef = () => {
    userNameRef.current.focus();
  }


  const passwordRef = useRef();

  const onMouseEnterPasswordRef = () => {
    passwordRef.current.focus();
  }


  const fullNameRef = useRef();

  const onMouseEnterFullNameRef = () => {
    fullNameRef.current.focus();
  }


  const emailAddress = useRef();

  const onMouseEnterEmailAddress = () => {
    emailAddress.current.focus();
  }


  const phoneNumberRef = useRef();

  const onMouseEnterPhoneNumberRef = () => {
    phoneNumberRef.current.focus();
  }

  const confirmPasswordRef = useRef();

  const onMouseEnterConfirmPasswordRef = () => {
    confirmPasswordRef.current.focus();
  }



  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const validatePassword = (password) => {
    const errors = []

    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long')
    }

    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter')
    }

    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter')
    }

    if (!/[0-9]/.test(password)) {
      errors.push('Password must contain at least one number')
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character')
    }

    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setErrors({ password: '', confirmPassword: '' })

    const passwordErrors = validatePassword(password)
    if (passwordErrors.length > 0) {
      setErrors(prev => ({
        ...prev, 
        password: passwordErrors.join('. ')
      }))
      return
    }

    if (password !== confirmPassword) {
      setErrors(prev => ({
        ...prev, 
        confirmPassword: 'Passwords do not match'
      }))
      return
    }

    setFormSubmitted(true);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }
  

useEffect(() => {
  if (formSubmitted) {
    const isValid = 
      fullName.trim().length >= 6 &&
      email.includes('@') &&
      email.includes('.') &&
      userName.trim().length >= 5 &&
      phoneNumber.trim().length >= 14 &&
      password.trim().length >= 8 &&
      password === confirmPassword &&
      validatePassword(password).length === 0;
      
    if (isValid) {
      setFormIsValid(true);
      router.push('/dashboard');
    }
  }
}, [formSubmitted, fullName, email, userName, phoneNumber, password, confirmPassword, router]);




  return (
    
    <main className='flex justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>

      <Metadata title={metadata.title} description={metadata.description} />

      <motion.section 
      initial={{opacity: 0, y: 100}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper my-8 '> 
        
        {/* Registration Page 01 Left Section */}

        <motion.div 
          initial={{opacity: 0, y: 100}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.7, delay: 0.7}}
          className='w-full lg:w-[45%] p-6 lg:p-12 xl:p-20'>
          <h1 className='text-4xl lg:text-6xl font-extrabold tracking-wide mt-6 lg:mt-10'>WELCOME!!!</h1>
          <br />
          <p className='text-base lg:text-lg mb-5'>We are delighted and privilege to have you 🔥 here. Follow the steps made available on the right side of the page to register. If you need any assistance feel free to reach out.</p>
          <br />
          <h1 className='font-extrabold text-2xl lg:text-4xl tracking-wider my-10'>OR</h1>
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


        {/* Registration Page 01 Right Section */}
        <motion.div
          initial={{opacity: 0, y: 100}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.7, delay: 0.7}}
          className='w-full lg:w-[55%] p-6 lg:p-9'>
          <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6  text-center mb-5'>SIGN UP 🔥</h1>
          <br />
          <form className='flex flex-col gap-6 w-full max-w-xl' id={form.id} onSubmit={async (e) => {
            await form.onSubmit(e);   
            await handleSubmit(e); }}  action={action} >

            <div className='flex flex-col gap-2'>
              <label htmlFor="fullName" className='font-semibold text-lg tracking-wide'>👤 Full Name:</label>
              <input 
                type="text" 
                name={fields.fullName.name}
                defaultValue={fields.fullName.initialValue} 
                id="fullName" 
                ref={fullNameRef}
                onMouseEnter={onMouseEnterFullNameRef}
                placeholder='Your Full Name, minimum of 2 names' 
                key={fields.fullName.key} 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full text-base bg-transparent rounded-xl border-2 outline-none  py-3 px-4 focus:ring-1  focus:outline-none duration-300 placeholder-white  
                ${fields.fullName.errors && fullName.trim().length >= 6 
                  ? 'border-green-500 focus:ring-green-500' 
                  : 'border-[#0ef] focus:ring-[#0ef]'} 
                ${fields.fullName.errors && fullName.trim().length < 6  
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-[#0ef] focus:ring-[#0ef]'}`} 
              />
              <p className='text-[16px] text-red-500 font-bold tracking-wide text-right'>{fields.fullName.errors}</p>
            </div>

            
            <div className='flex flex-col gap-2'>
              <label htmlFor="email" className='font-semibold text-lg tracking-wide'>✉️ Email Address:</label>
              <input 
              ref={emailAddress}
              onMouseEnter={onMouseEnterEmailAddress}
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={fields.email.initialValue}
                name={fields.email.name} 
                key={fields.email.key}
                id="email" 
                placeholder='Your Email Address' 
                className={`w-full text-base bg-transparent rounded-xl outline-none border-2 py-3 px-4 focus:ring-1  focus:outline-none duration-300 placeholder-white  
                ${fields.email.errors && email.trim().length >= 7 
                  ? 'border-green-500 focus:ring-green-500' 
                  : 'border-[#0ef] focus:ring-[#0ef]'} 
                ${fields.email.errors && email.trim().length < 7  
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-[#0ef] focus:ring-[#0ef]'}`}
              />
              <p className='text-[16px] text-red-500 font-bold tracking-wide text-right'>{fields.email.errors}</p> 

            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="userName" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCircleUser} className="werey2 mr-2 text-[gold]" /> User Name:</label>
              <input 
                type="text" 
                name={fields.userName.name} 
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                ref={userNameRef}
                onMouseEnter={onMouseEnterUserNameRef}
                id="userName" 
                placeholder='Your User Name e.g John123' 
                className={`w-full text-base bg-transparent rounded-xl border-2 outline-none py-3 px-4 focus:ring-1 focus:outline-none duration-300 placeholder-white  
                ${fields.userName.errors && userName.trim().length >= 5 
                  ? 'border-green-500 focus:ring-green-500' 
                  : 'border-[#0ef] focus:ring-[#0ef]'} 
                ${fields.userName.errors && userName.trim().length < 5  
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-[#0ef] focus:ring-[#0ef]'}`}
              />
              <p className='text-[16px] text-red-500 font-bold tracking-wide text-right'>{fields.userName.errors}</p> 
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="phoneNumber" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faPhoneVolume} className="werey2 mr-2 text-[#0ef]" /> Phone Number:</label>
              <input 
                type="text" 
                ref={phoneNumberRef}
                onMouseEnter={onMouseEnterPhoneNumberRef}
                name={fields.phoneNumber.name} 
                key={fields.phoneNumber.key}
                defaultValue={fields.phoneNumber.initialValue}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                id="phoneNumber" 
                placeholder='Your Phone Number eg +237 688296810' 
                className={`w-full text-base bg-transparent rounded-xl border-2 outline-none py-3 px-4 focus:outline-none duration-300 placeholder-white 
                ${fields.phoneNumber.errors && phoneNumber.trim().length >= 14 
                  ? 'border-green-500 focus:ring-green-500' 
                  : 'border-[#0ef] focus:ring-[#0ef]'} 
                ${fields.phoneNumber.errors && phoneNumber.trim().length < 14  
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-[#0ef] focus:ring-[#0ef]'}`}
              />
              <p className='text-[16px] text-red-500 font-bold tracking-wide text-right'>{fields.phoneNumber.errors}</p> 
            </div> 

            <div className='flex flex-col gap-2'>
              <label htmlFor="password" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faLock} className="werey2 mr-2 text-[#0ef]" /> Password:</label> 
              <div 
                className='mt-4 mb-1 relative'>
                <input
                  type={showPassword ? "text" : "password"} 
                  ref={passwordRef}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onMouseEnter={onMouseEnterPasswordRef}
                  id="password" 
                  placeholder='Your Password'
                  className={`w-full text-base bg-transparent outline-none focus:outline-none rounded-xl border-2 
                  ${fields.password.errors && password.trim().length >= 8 
                    ? 'border-green-500 focus:ring-green-500' 
                    : 'border-[#0ef] focus:ring-[#0ef]'} 
                  ${fields.password.errors && password.trim().length < 8  
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-[#0ef] focus:ring-[#0ef]'}
                    py-3 px-4 focus:ring-1  duration-300 placeholder-white pr-10`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0ef] hover:text-white'
                > 
                  <FontAwesomeIcon 
                    icon={showPassword ? faEyeSlash : faEye} 
                    className='w-5 h-5'
                  />
                </button>
              </div>
              {errors.password && (
                <motion.p 
                  initial={{opacity: 0, y: 100}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: 0.2, delay: 0.2}}
                  viewport={{once: true}}
                  className='text-red-500 text-sm mt-3'>{errors.password}</motion.p>
              )}
            </div>


            <div className='flex flex-col gap-2'>
              <label htmlFor="confirm_password" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faLock} className="werey2 mr-2 text-[#0ef]" />Confirm Password:</label> 
              <div 
                className='mt-4 mb-1 relative'>
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  ref={confirmPasswordRef}
                  name="confirm_password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onMouseEnter={onMouseEnterConfirmPasswordRef}
                  id="confirm_password" 
                  placeholder='Confirm Your New Password'
                  className={`w-full text-base bg-transparent rounded-xl border-2 
                  ${fields.confirmPassword.errors && confirmPassword.trim().length >= 8 
                    ? 'border-green-500 focus:ring-green-500' 
                    : 'border-[#0ef] focus:ring-[#0ef]'} 
                  ${fields.confirmPassword.errors && confirmPassword.trim().length < 8  
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-[#0ef] focus:ring-[#0ef]'}
                  py-3 px-4 focus:ring-1 focus:outline-none duration-300 placeholder-white pr-10`}
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0ef] hover:text-white'>
                  <FontAwesomeIcon 
                    icon={showConfirmPassword ? faEyeSlash : faEye} 
                    className='w-5 h-5'
                  />
                </button>
              </div>
              {errors.confirmPassword && (
                <motion.p 
                  initial={{opacity: 0, y: 100}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: 0.2, delay: 0.2}}
                  viewport={{once: true}}
                  className='text-red-500 text-sm mt-3 text-right'>{errors.confirmPassword}</motion.p>
              )}
            </div>
             
 
            <button type='submit' className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full hover:from-[#00ffff] hover:via-slate-600 hover:to-[#00ffff]  text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider'>
              REGISTER    
            </button>
          </form>           

          <p className='text-center mt-4'>
            Already Have An Account? <br />
            <Link href="/login" className='text-[#0ef] font-extrabold hover:cursor-pointer hover:underline duration-300'>LOGIN</Link>
          </p>
        </motion.div>
      </motion.section>
    </main>
  )
}

export default Register;