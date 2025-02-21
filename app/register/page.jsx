import React from 'react'
import globalStyle from '../globals.css' 
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faLock } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'Registration - Njangi Web Application',
  description: 'SIgn Up in order to acess all the amazing features of this application'
}

const Register = () => {
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
          <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6  text-center mb-5'>SIGN UP</h1>
          <br />
          <form className='flex flex-col gap-6 w-full max-w-xl'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="fullName" className='font-semibold text-lg tracking-wide'>👤 Full Name:</label>
              <input 
                type="text" 
                name="fullName" 
                id="fullName" 
                placeholder='Your Full Name' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>

            

            <div className='flex flex-col gap-2'>
              <label htmlFor="email" className='font-semibold text-lg tracking-wide'>✉️ Email Address:</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='Your Email Address' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="number" className='font-semibold text-lg tracking-wide'>📞 Phone Number:</label>
              <input 
                type="number" 
                name="number" 
                id="number" 
                placeholder='Your Phone Number' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>
 
            <div className='flex flex-col gap-2'>
              <label htmlFor="password" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faLock} className="werey2 mr-2 text-[#0ef]" /> Password:</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='Your Password ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>
            
            <div className='flex flex-col gap-2'>
              <label htmlFor="confirm_password" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faLock} className="werey2 mr-2 text-[#0ef]" /> Confirm Password:</label>
              <input 
                type="password" 
                name="confirm_password" 
                id="confirm_password" 
                placeholder='Confirm Password ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>



            <Link href="/about-you" className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center'>
              Continue ➡️ 
            </Link>
          </form>  

          <p className='text-right mt-4 mb-2 font-bold text-lg'>01/05</p>
          
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