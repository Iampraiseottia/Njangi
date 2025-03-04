
import React from 'react'


import globalStyle from '../globals.css'
import Link from 'next/link'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'




const Income = () => {
return (
<main className='flex justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>


<section className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper my-8 '> 

  {/* Registration Page 01 Left Section */}
  <div className='w-full lg:w-[45%] p-6 lg:p-12 xl:p-20'>
    <h1 className='text-4xl lg:text-6xl font-extrabold tracking-wide mt-6 lg:mt-10'>Improve Your Finances💰!!!</h1>
    <br />
    <p className='text-base lg:text-lg mb-5'> Turn community savings into personal prosperity. Join trusted friends, set goals, save together, watch your money grow, and access funds when you need them most. Your Community ⚧️, Your Prosperity 📈, Your Financial Freedom 💵 .</p> 
    <br />
    
    <p className=' text-[180px]'>💸</p> 
    
  </div>

  {/* Registration Page 01 Right Section */}
  <div className='w-full lg:w-[55%] p-6 lg:p-9'>
    <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6  text-center mb-5'>Financial Freedom 🔥</h1>
    <br />
    <form className='flex flex-col gap-6 w-full max-w-xl'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="country" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faUserTie} className="werey2 mr-2 text-yellow-300" /> Occupation:</label>
        <input 
          type="text" 
          name="Occupation" 
          id="Occupation" 
          placeholder='Your Occupation / Profession eg Doctor ' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="homeAddress" className='font-semibold text-lg tracking-wide '>🤑 Income Stream per Month:</label>
        <input 
          type="text" 
          name="income_stream" 
          id="income_stream" 
          placeholder='Your Income Stream Per Month eg 200k as salary or 400k form rent, etc ' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="email" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faLocationDot} className="werey2 mr-2 text-yellow-300" /> Place of Work:</label>
        <input 
          type="text" 
          name="work_place" 
          id="work_place" 
          placeholder='Your Location of your work place' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="work_status" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faAddressBook} className="werey2 mr-2 text-[#0ef]" /> Work Status:</label>
        <fieldset className=' flex justify-evenly align-middle'>
          <div className=' flex '>
            <input type="radio" checked name="work_status" id="work_status" /> 
            <h3 className=' ml-3 text-xl tracking-wide'>Employee</h3>
          </div>
          <div className=' flex '>
            <input type="radio" name="work_status" id="work_status" /> 
            <h3 className=' ml-3 text-xl tracking-wide'>Employer (business person)</h3>
          </div>
        </fieldset>
      </div>

      <Link href="/identity" className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center'>
        Continue ➡️
      </Link>
    </form>

    <p className='text-right mt-4 mb-2 font-bold text-lg'>03/05</p>
    
    <Link href="/about-you" className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-[90%] text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center'>
              <FontAwesomeIcon icon={faArrowLeft} className='werey2 mr-2' /> Go Back 

      </Link>
     
  </div>
</section>
</main>

)

}

export default Income