
'use client';

import React, { useRef, useState } from 'react'


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
 
  const onMouseEnterIncomeStreamReg = () => {
    income_streamReg.current.focus();
  }


  const primary_sourceRef = useRef();

  const onMouseEnterPrimarySourceRef = () => {
    primary_sourceRef.current.focus();
  }


  const work_placeRef = useRef();

  const onMouseEnterWorkPlaceRef = () => {
    work_placeRef.current.focus();
  }


  const employment_statusRef = useRef();

  const onMouseEnterEmploymentStatusRef = () => {
    employment_statusRef.current.focus();
  }


  const income_changeRef = useRef();

  const onMouseEnterIncomeChangeRef = () => {
    income_changeRef.current.focus();
  }


  const track_incomeREf = useRef();

  const onMouseEnterTrackIncomeREf = () => {
    track_incomeREf.current.focus();
  }


  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    Occupation: '',
    income_stream: '',
    primary_source: '',
    work_place: '',
    employment_status: '',
    income_change: '',
    track_income: '',
  });

  const handleInputChange = (e) => {
    const { name, value} = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

 
  const handleFieldValidation = () => {
    const fieldError = {}

    if(!formData.Occupation || formData.Occupation.trim().length < 2){
      fieldError.Occupation = 'Please enter your Occupation ';
    }

    if (!formData.income_change || formData.income_change.trim().length < 2) {
      fieldError.income_change = 'Please state how your income has changed';
    } 

    if(!formData.income_stream || formData.income_stream.trim().length < 2){
      fieldError.income_stream = 'Please enter your income realized per month';
    }

    if(!formData.primary_source || formData.primary_source.trim().length < 2){
      fieldError.primary_source = 'Please enter your primary source of income';
    }

    if(!formData.employment_status || formData.employment_status === "Select an Option"){
      fieldError.employment_status = 'Please enter your employment status'; 
    }

    if(!formData.work_place || formData.work_place.trim().length < 2){
      fieldError.work_place = 'Please enter your place of work';
    }

    if(!formData.track_income || formData.track_income.trim().length < 2){
      fieldError.track_income = 'Please enter how you track your income';
    }

    setErrors(fieldError);
    return Object.keys(fieldError).length === 0;

  }

  const handleSubmit =(e) => {
    e.preventDefault();

    if(handleFieldValidation()){
      setActiveComponent('identity');      
    }
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
      <form className='flex flex-col gap-6 w-full max-w-xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor="Occupation" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faUserTie} className="werey2 mr-2 text-yellow-300" /> Occupation:</label>
          <input
            ref={OccupationRef}
            onMouseEnter={onMouseEnterOccupationRef}
            type="text" 
            value={formData.Occupation}
            name="Occupation" 
            onChange={handleInputChange}
            id="Occupation" 
            placeholder='Your Occupation / Profession eg Doctor ' 
            className={`w-full text-base bg-transparent rounded-xl outline-none border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 placeholder-white 
            ${formData.Occupation && formData.Occupation.trim().length >= 3 
            ? 'border-green-500 focus:ring-green-500' 
            : 'border-[#0ef] focus:ring-[#0ef]'} 
            ${errors.Occupation ? 'border-red-500 focus:ring-red-500]' : 'border-[#0ef] focus:ring-[#0ef]'} `}
          />
           {errors.Occupation && !(formData.Occupation && formData.Occupation.trim().length >= 3) && 
          <motion.p 
            viewport={{once: true}}
            whileInView={{y: 0, opacity: 1}}
            initial={{opacity: 0, y: 100}}
            transition={{duration: 0.2, delay: 0.2}}
            className={`text-[16px] text-red-500 text-right font-bold tracking-wide `}>{errors.Occupation}</motion.p>} 
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="income_stream" className='font-semibold text-lg tracking-wide '>🤑 Income Stream per Month:</label>
          <input
            ref={income_streamReg}
            onMouseEnter={onMouseEnterIncomeStreamReg}
            type="text" 
            value={formData.income_stream}
            name="income_stream" 
            onChange={handleInputChange}
            id="income_stream" 
            placeholder='Your Income Stream Per Month eg 200k as salary or 400k form rent, etc ' 
            className={`w-full text-base bg-transparent rounded-xl outline-none border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 placeholder-white 
            ${formData.income_stream && formData.income_stream.trim().length >= 3 
              ? 'border-green-500 focus:ring-green-500' 
              : 'border-[#0ef] focus:ring-[#0ef]'} 
            ${errors.income_stream ? 'border-red-500 focus:ring-red-500]' : 'border-[#0ef] focus:ring-[#0ef]'}`}
          />
          {errors.income_stream && !(formData.income_stream && formData.income_stream.trim().length >= 3) && 
          <motion.p 
            viewport={{once: true}}
            whileInView={{y: 0, opacity: 1}}
            initial={{opacity: 0, y: 100}}
            transition={{duration: 0.2, delay: 0.2}}
            className='text-[16px] text-red-500 text-right font-bold tracking-wide'>{errors.income_stream}</motion.p>}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="primary_source" className='font-semibold text-lg tracking-wide '><FontAwesomeIcon icon={faMoneyBill} className="werey2 mr-2 text-yellow-300" /> What Is Your Primary Source of Income Currently? </label>
          <input
            ref={primary_sourceRef}
            onMouseEnter={onMouseEnterPrimarySourceRef}
            value={formData.primary_source}
            type="text" 
            onChange={handleInputChange}
            name="primary_source" 
            id="primary_source" 
            placeholder='What is your primary source of income currently? ' 
            className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 outline-none focus:outline-none duration-300 placeholder-white
            ${formData.primary_source && formData.primary_source.trim().length >= 3 
              ? 'border-green-500 focus:ring-green-500' 
              : 'border-[#0ef] focus:ring-[#0ef]'} 
              ${errors.primary_source ? 'border-red-500 focus:ring-red-500]' : 'border-[#0ef] focus:ring-[#0ef]'}`}
          />
          {errors.primary_source && !(formData.primary_source && formData.primary_source.trim().length >= 3) && 
          <motion.p 
            viewport={{once: true}}
            whileInView={{y: 0, opacity: 1}}
            initial={{opacity: 0, y: 100}}
            transition={{duration: 0.2, delay: 0.2}}
            className='text-[16px] text-red-500 text-right font-bold tracking-wide'>{errors.primary_source}</motion.p>}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="email" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faLocationDot} className="werey2 mr-2 text-yellow-300" /> Place of Work:</label>
          <input
            ref={work_placeRef}
            onMouseEnter={onMouseEnterWorkPlaceRef}
            type="text" 
            name="work_place" 
            value={formData.work_place}
            onChange={handleInputChange}
            id="work_place" 
            placeholder='Your Location of your work place' 
            className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 outline-none focus:outline-none duration-300 placeholder-white  
            ${formData.work_place && formData.work_place.trim().length >= 3 
              ? 'border-green-500 focus:ring-green-500' 
              : 'border-[#0ef] focus:ring-[#0ef]'} 
            ${errors.work_place ? 'border-red-500 focus:ring-red-500]' : 'border-[#0ef] focus:ring-[#0ef]'}`}
          />
          {errors.work_place && !(formData.work_place && formData.work_place.trim().length >= 3) && 
          <motion.p 
            viewport={{once: true}}
            whileInView={{y: 0, opacity: 1}}
            initial={{opacity: 0, y: 100}}
            transition={{duration: 0.2, delay: 0.2}}
            className='text-[16px] text-red-500 text-right font-bold tracking-wide'>{errors.work_place}</motion.p>}
        </div>


        <div className='flex flex-col gap-2'>
          <label htmlFor="employment_status" className='font-semibold text-lg tracking-wide '><FontAwesomeIcon icon={faAddressBook} className="werey2 mr-2 text-[#0ef]" /> Employment Status</label>
          <select name="employment_status" id="employment_status" 
            className={`w-full text-base bg-transparent rounded-xl border-2 outline-none py-3 px-4 focus:ring-1 focus:outline-none duration-300 text-white bg-slate-800 
            ${formData.employment_status && formData.employment_status.trim().length >= 3 
              ? 'border-green-500 focus:ring-green-500' 
              : 'border-[#0ef] focus:ring-[#0ef]'} 
            ${errors.employment_status ? 'border-red-500 focus:ring-red-500]' : 'border-[#0ef] focus:ring-[#0ef]'}`}
            ref={employment_statusRef}
            onChange={handleInputChange}
            value={formData.employment_status}
            onMouseEnter={onMouseEnterEmploymentStatusRef}
          >
          <option className='singleCol' value="Select an Option "> Select an Option</option>
          <option className='singleCol' value="Employed">Employed</option>
          <option className='singleCol' value="Self-Employed">Self-Employed</option>
          <option className='singleCol' value="Unemployed">Unemployed</option>
          <option className='singleCol' value="Student">Student</option>
          <option className='singleCol' value="Retired">Retired</option>
          
          </select>
          {errors.employment_status && !(formData.employment_status && formData.employment_status.trim().length >= 3) && 
          <motion.p 
            viewport={{once: true}}
            whileInView={{y: 0, opacity: 1}}
            initial={{opacity: 0, y: 100}}
            transition={{duration: 0.2, delay: 0.2}}
            className='text-[16px] text-red-500 text-right font-bold tracking-wide'>{errors.employment_status}</motion.p>}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="income_change" className='font-semibold text-lg tracking-wide '>🫰 How has your income changed over the past 3-5 years? </label>
          <input 
            ref={income_changeRef}
            onMouseEnter={onMouseEnterIncomeChangeRef}
            type="text" 
            onChange={handleInputChange}
            name="income_change" 
            value={formData.income_change}
            id="income_change" 
            placeholder='How has your income changed over the past 3-5 years?' 
            className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 outline-none focus:outline-none duration-300 placeholder-white 
            ${formData.income_change && formData.income_change.trim().length >= 3 
              ? 'border-green-500 focus:ring-green-500' 
              : 'border-[#0ef] focus:ring-[#0ef]'} 
            ${errors.income_change ? 'border-red-500 focus:ring-red-500]' : 'border-[#0ef] focus:ring-[#0ef]'}`}
          />
          {errors.income_change && !(formData.income_change && formData.income_change.trim().length >= 3) && 
          <motion.p 
            viewport={{once: true}}
            whileInView={{y: 0, opacity: 1}}
            initial={{opacity: 0, y: 100}}
            transition={{duration: 0.2, delay: 0.2}}
            className='text-[16px] text-red-500 text-right font-bold tracking-wide'>{errors.income_change}</motion.p>}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="track_income" className='font-semibold text-lg tracking-wide '>💵 Do you track your income sources separately, and if so, how? </label>
          <input
            ref={track_incomeREf}
            onMouseEnter={onMouseEnterTrackIncomeREf}
            type="text" 
            name="track_income" 
            value={formData.track_income}
            onChange={handleInputChange}
            id="track_income" 
            placeholder='Do you track your income sources separately, and if so, how?' 
            className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 outline-none focus:outline-none duration-300 placeholder-white 
            ${formData.track_income && formData.track_income.trim().length >= 3 
              ? 'border-green-500 focus:ring-green-500' 
              : 'border-[#0ef] focus:ring-[#0ef]'} 
            ${errors.track_income ? 'border-red-500 focus:ring-red-500]' : 'border-[#0ef] focus:ring-[#0ef]'}`}
          />
          {errors.track_income && !(formData.track_income && formData.track_income.trim().length >= 3) && 
          <motion.p 
            viewport={{once: true}}
            whileInView={{y: 0, opacity: 1}}
            initial={{opacity: 0, y: 100}}
            transition={{duration: 0.2, delay: 0.2}}
            className='text-[16px] text-red-500 text-right font-bold tracking-wide'>{errors.track_income}</motion.p>}
        </div>    

        <button 
          type="submit" 
          className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center'>
          Submit and Continue ➡️ 
        </button>

      </form>
      
    </motion.div>
  </motion.section>
</main>

)

}

export default Income_User;
