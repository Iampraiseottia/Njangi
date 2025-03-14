
import React from 'react'


import globalStyle from '../globals.css'
import Link from 'next/link'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faIdCard, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'


const Identity = ({setActiveComponent}) => {
return (
<main className='flex relative justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>

<p className='dance absolute'></p>
<p className=' dance2 absolute'></p>


<section className=' w-full max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper my-8 '> 

<h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6 pt-9 text-center mb-12'>Your Unique Identity 🔥</h1>


  <div className='flex flex-col lg:flex-row justify-between items-center mt-[-50px]'> 
    {/* Registration Page 01 Left Section */}
    <div className='w-full lg:w-[45%] p-6 lg:p-12 xl:p-20'>
    <form className='flex flex-col gap-1 w-full max-w-xl'>

      <div className='flex flex-col gap-2'>
        <label htmlFor="birth_certificate" className='font-semibold text-lg tracking-wide'>🚼 Upload Your Birth Certificate:</label>
        <input 
          type="file" 
          name="birth_certificate" 
          id="birth_certificate" 
          placeholder='Upload Your Birth Certificate' 
          className='w-full text-base bg-transparent h-40 rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div> <br />

      <div className='flex flex-col gap-2'>
        <label htmlFor="Identification_Card" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faIdCard} className="werey2 mr-2 text-yellow-300" /> Upload Your Identification Card:</label>
        <input 
          type="file" 
          name="Identification_Card" 
          id="Identification_Card" 
          placeholder='Upload Your Identification Card' 
          className='w-full text-base bg-transparent h-40 rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div> <br />

      <div className='flex flex-col gap-2'>
        <label htmlFor="uploaded_pic" className='font-semibold text-lg tracking-wide'>🖼️ Upload a Photo of Yourself:</label>
        <input 
          type="file" 
          name="uploaded_pic" 
          id="uploaded_pic" 
          placeholder='Upload Your Birth Certificate' 
          className='w-full text-base bg-transparent h-40 rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div> <br />
  
    </form>
    </div>



    {/* Registration Page 01 Right Section */}
    <div className='w-full lg:w-[55%] p-6 lg:p-9'>

       <form className='flex flex-col gap-6 w-full max-w-xl'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="disability_status" className='font-semibold text-lg tracking-wide'>🦽 Do You Have Any Disability?</label>
        <input 
          type="text" 
          name="disability_status" 
          id="disability_status" 
          placeholder='If none , type NO but If YES, Name them ' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="marital_status" className='font-semibold text-lg tracking-wide'>💒 What is your marital status?:</label>
        <select name="marital_status" id="marital_status" 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef]  py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-white bg-slate-800 '
        
        >
        <option value="Select an Option" className='singleCol'> Select an Option</option>
        <option value="Male" className='singleCol'>Single</option>
        <option className='singleCol' value="Female">Married</option>
        

        </select>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="sickness" className='font-semibold text-lg tracking-wide'>😷 Are You Suffering of any sickness or disease?</label>
        <input 
          type="text" 
          name="sickness" 
          id="sickness" 
          placeholder='If none , type NO but If YES, Name them  ' 
          className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div>

       <div className='flex flex-col gap-2'>
          <label htmlFor="debt_status" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCircleExclamation} className="werey2 mr-2 text-[#0ef]" /> Are you currently in any debt? </label>
          <select name="debt_status" id="debt_status" 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef]  py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-white bg-slate-800 '
          
          >
          <option className='singleCol' value="Select an Option"> Select an Option</option>
          <option className='singleCol' value="YES">YES</option>
          <option className='singleCol' value="NO">NO</option>
          

          </select>
        </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="camera_pic" className='font-semibold text-lg tracking-wide'>📷 Take a Picture of Yourself:</label>
        <input 
          type="file" 
          name="camera_pic" 
          id="camera_pic" 
          placeholder='Upload Your Birth Certificate' 
          className='w-full text-base bg-transparent h-52 rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
        />
      </div> 

   

      <button type='submit' className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center' onClick={() => setActiveComponent('survey')} >
        Submit and Continue ➡️
      </button>
    </form>

    </div>
  </div>
 
</section>
</main>

)

}

export default Identity
