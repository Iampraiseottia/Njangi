"use client"

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faArrowRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import Metadata from '../components/Metadata'

const New_Password = () => {
  const router = useRouter()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({
    newPassword: '',
    confirmPassword: ''
  })
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const metadata = {
    title: 'New Password | Njangi Web Application',
    description: `Set a new password, one unique and not easy to hack. DON'T share it with anyone.` 
  }

  const new_Pass = useRef(null);
  const confirm_new_Pass = useRef(null);

  const onMouseEnterNewPassword = () => {
    new_Pass.current.focus();
  }

  const onMouseEnterConfirmNewPassword = () => {
    confirm_new_Pass.current.focus();
  }

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

    setErrors({ newPassword: '', confirmPassword: '' })

    const newPasswordErrors = validatePassword(newPassword)
    if (newPasswordErrors.length > 0) {
      setErrors(prev => ({
        ...prev, 
        newPassword: newPasswordErrors.join('. ')
      }))
      return
    }

    if (newPassword !== confirmPassword) {
      setErrors(prev => ({
        ...prev, 
        confirmPassword: 'Passwords do not match'
      }))
      return
    }

    router.push('/dashboard')
  }

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <main className='flex justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>
      <Metadata title={metadata.title} description={metadata.description} />

      <section className='sm:w-full md:w-[80%] lg:w-[40%] max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper4 my-8'> 
        <div className='w-full lg:w-[100%] p-6 lg:p-9'>
          <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6 text-center mb-5 flex justify-center items-center'>
            <img src="/logo3.png" alt="Njangi Logo" className='w-20 h-20 mr-1' />  
            NJANGIFY
          </h1>
          <br />
          <form onSubmit={handleSubmit} className='flex-col gap-6 w-full'>
            <div className='ease-in-out transition-all'>
              <label htmlFor="new_pass" className='text-left text-[22px] font-medium tracking-wider'>New Password:</label>
              <div className='mt-4 mb-1 relative'>
                <input 
                  type={showNewPassword ? "text" : "password"} 
                  ref={new_Pass}
                  name="new_pass"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  onMouseEnter={onMouseEnterNewPassword}
                  id="new_pass" 
                  placeholder='Your New Password'
                  className={`w-full text-base bg-transparent rounded-xl border-2 ${
                    errors.newPassword ? 'border-red-500' : 'border-[#0ef]'
                  } py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white pr-10`}
                />
                <button
                  type="button"
                  onClick={toggleNewPasswordVisibility}
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0ef] hover:text-white'
                >
                  <FontAwesomeIcon 
                    icon={showNewPassword ? faEyeSlash : faEye} 
                    className='w-5 h-5'
                  />
                </button>
              </div>
              {errors.newPassword && (
                <p className='text-red-500 text-sm mt-1'>{errors.newPassword}</p>
              )}
              <br />

              <label htmlFor="confirm_new_Pass" className='text-left text-[22px] font-medium tracking-wider'>Confirm New Password:</label>
              <div className='mt-4 mb-1 relative'>
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  ref={confirm_new_Pass}
                  name="confirm_new_Pass"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onMouseEnter={onMouseEnterConfirmNewPassword}
                  id="confirm_new_Pass" 
                  placeholder='Confirm Your New Password'
                  className={`w-full text-base bg-transparent rounded-xl border-2 ${
                    errors.confirmPassword ? 'border-red-500' : 'border-[#0ef]'
                  } py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white pr-10`}
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0ef] hover:text-white'
                >
                  <FontAwesomeIcon 
                    icon={showConfirmPassword ? faEyeSlash : faEye} 
                    className='w-5 h-5'
                  />
                </button>
              </div>
              {errors.confirmPassword && (
                <p className='text-red-500 text-sm mt-1'>{errors.confirmPassword}</p>
              )}
            </div>
              
            <button 
              type='submit' 
              className='mt-8 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full hover:from-[#00ffff] hover:via-slate-600 hover:to-[#00ffff] text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider'
            >
              Continue <FontAwesomeIcon icon={faArrowRight} className='ml-1 w-6 h-6' />     
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

export default New_Password