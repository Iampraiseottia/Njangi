
import React from 'react'


import globalStyle from '../globals.css'
import Link from 'next/link'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faMoneyBill, faLocationDot, faAddressBook, faUserTie } from '@fortawesome/free-solid-svg-icons'




const Income = ({ setActiveComponent }) => {
return (
<main className='flex justify-center relative items-center w-full min-h-screen bg-gray-800 text-white p-4'>

<p className='dance absolute'></p>
<p className=' dance2 absolute'></p>

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
        <label htmlFor="Occupation" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faUserTie} className="werey2 mr-2 text-yellow-300" /> Occupation:</label>
        <input 
          type="text" 
          name="Occupation" 
          id="Occupation" 
          placeholder='Your Occupation / Profession eg Doctor ' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="income_stream" className='font-semibold text-lg tracking-wide '>🤑 Income Stream per Month:</label>
        <input 
          type="text" 
          name="income_stream" 
          id="income_stream" 
          placeholder='Your Income Stream Per Month eg 200k as salary or 400k form rent, etc ' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="primary_source" className='font-semibold text-lg tracking-wide '><FontAwesomeIcon icon={faMoneyBill} className="werey2 mr-2 text-yellow-300" /> What Is Your Primary Source of Income Currently? </label>
        <input 
          type="text" 
          name="primary_source" 
          id="primary_source" 
          placeholder='What is your primary source of income currently? ' 
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

      <div className='flex flex-col gap-2'>
        <label htmlFor="income_change" className='font-semibold text-lg tracking-wide '>🫰 How has your income changed over the past 3-5 years? </label>
        <input 
          type="text" 
          name="income_change" 
          id="income_change" 
          placeholder='How has your income changed over the past 3-5 years?' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="track_income" className='font-semibold text-lg tracking-wide '>💵 Do you track your income sources separately, and if so, how? </label>
        <input 
          type="text" 
          name="track_income" 
          id="track_income" 
          placeholder='Do you track your income sources separately, and if so, how?' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

  

      <button type='submit' onClick={() => setActiveComponent} className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center'>
        Submit and Continue ➡️
      </button>
    </form>

    
  </div>
</section>
</main>

)

}

export default Income
