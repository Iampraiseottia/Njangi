
'use client';

import React, { useRef } from 'react'


import globalStyle from '../globals.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faMoneyBill, faLocationDot, faAddressBook, faUserTie } from '@fortawesome/free-solid-svg-icons'

import { motion } from "motion/react"



const Income_User = ({setActiveComponent}) => {


  const OccupationRef = useRef();

  const onMouseEnterOccupationRef = () => {
    OccupationRef.current.focus();
  }


  const income_streamReg = useRef();
 
  const onMouseEnterincome_streamReg = () => {
    income_streamReg.current.focus();
  }


  const primary_sourceRef = useRef();

  const onMouseEnterprimary_sourceRef = () => {
    primary_sourceRef.current.focus();
  }


  const work_placeRef = useRef();

  const onMouseEnterwork_placeRef = () => {
    work_placeRef.current.focus();
  }


  const receive_financial_educationRef = useRef();

  const onMouseEnterreceive_financial_educationRef = () => {
    receive_financial_educationRef.current.focus();
  }


  const income_changeRef = useRef();

  const onMouseEnterincome_changeRef = () => {
    income_changeRef.current.focus();
  }


  const track_incomeREf = useRef();

  const onMouseEntertrack_incomeREf = () => {
    track_incomeREf.current.focus();
  }


 

return (
<main className='flex justify-center relative items-center w-full min-h-screen bg-gray-800 text-white p-4'>

  <p className='dance absolute'></p>
  <p className=' dance2 absolute'></p>

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
      <h1 className='text-4xl lg:text-6xl font-extrabold tracking-wide mt-6 lg:mt-10'>Improve Your Finances💰!!!</h1>
      <br />
      <p className='text-base lg:text-lg mb-5'> Turn community savings into personal prosperity. Join trusted friends, set goals, save together, watch your money grow, and access funds when you need them most. Your Community ⚧️, Your Prosperity 📈, Your Financial Freedom 💵 .</p> 
      <br />
      
      <p className=' text-[180px]'>💸</p> 
      
    </motion.div>

    {/* Registration Page 01 Right Section */}
    <motion.div 
      initial={{opacity: 0, y: 100}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.7, delay: 0.7}}
      className='w-full lg:w-[55%] p-6 lg:p-9'>
      <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6  text-center mb-5'>Financial Freedom 🔥</h1>
      <br />
      <form className='flex flex-col gap-6 w-full max-w-xl'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="Occupation" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faUserTie} className="werey2 mr-2 text-yellow-300" /> Occupation:</label>
          <input
            ref={OccupationRef}
            onMouseEnter={onMouseEnterOccupationRef}
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
            ref={income_streamReg}
            onMouseEnter={onMouseEnterincome_streamReg}
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
            ref={primary_sourceRef}
            onMouseEnter={onMouseEnterprimary_sourceRef}
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
            ref={work_placeRef}
            onMouseEnter={onMouseEnterwork_placeRef}
            type="text" 
            name="work_place" 
            id="work_place" 
            placeholder='Your Location of your work place' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>


        <div className='flex flex-col gap-2'>
          <label htmlFor="receive_financial_education" className='font-semibold text-lg tracking-wide '><FontAwesomeIcon icon={faAddressBook} className="werey2 mr-2 text-[#0ef]" /> Employment Status</label>
          <select name="receive_financial_education" id="receive_financial_education" 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef]  py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-white bg-slate-800 '
            ref={receive_financial_educationRef}
            onMouseEnter={onMouseEnterreceive_financial_educationRef}
          >
          <option className='singleCol' value="Select an Option "> Select an Option</option>
          <option className='singleCol' value="Employed">Employed</option>
          <option className='singleCol' value="Self-Employed">Self-Employed</option>
          <option className='singleCol' value="Unemployed">Unemployed</option>
          <option className='singleCol' value="Student">Student</option>
          <option className='singleCol' value="Retired">Retired</option>
          
          </select>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="income_change" className='font-semibold text-lg tracking-wide '>🫰 How has your income changed over the past 3-5 years? </label>
          <input
            ref={income_changeRef}
            onMouseEnter={onMouseEnterincome_changeRef}
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
            ref={track_incomeREf}
            onMouseEnter={onMouseEntertrack_incomeREf}
            type="text" 
            name="track_income" 
            id="track_income" 
            placeholder='Do you track your income sources separately, and if so, how?' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>

    

        <button 
          type="button" 
          onClick={() => setActiveComponent('identity')}
          className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center'
          
        >
          Submit and Continue ➡️
        </button>

      </form>
      
    </motion.div>
  </motion.section>
</main>

)

}

export default Income_User;
