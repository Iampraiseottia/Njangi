
'use client';

import React, { useRef } from 'react'

import globalStyle from '../globals.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'




const Survey_User = () => {


  const hear_about_usRef = useRef();

  const onMouseEnterhear_about_usRef = () => {
    hear_about_usRef.current.focus();
  }


  const level_of_educationRef = useRef();
  
  const onMouseEnterlevel_of_educationRef = () => {
    level_of_educationRef.current.focus();
  }


  const ever_perticipatedRef = useRef();

  const onMouseEnterever_perticipatedRef = () => {
    ever_perticipatedRef.current.focus();
  }


  const preferred_methodREf = useRef();

  const onMouseEnterpreferred_methodREf = () => {
    preferred_methodREf.current.focus();
  }


  const motivation_contributionRef = useRef();

  const onMouseEntermotivation_contributionRef = () => {
    motivation_contributionRef.current.focus();
  }


  const suggestionsRef = useRef();

  const onMouseEntersuggestionsRef = () => {
    suggestionsRef.current.focus();
  }
  

  const receive_financial_educationRef = useRef();

  const onMouseEnterreceive_financial_educationRef = () => {
    receive_financial_educationRef.current.focus();
  }
  

  const primary_njangi_goalRef = useRef();

  const onMouseEnterprimary_njangi_goalRef = () => {
    primary_njangi_goalRef.current.focus();
  }


  const comfortabilityRef = useRef();

  const onMouseEntercomfortabilityRef = () => {
    comfortabilityRef.current.focus();
  }


  const often_check_mailsRef = useRef();
  
  const onMouseEnteroften_check_mailsRef = () => { 
    often_check_mailsRef.current.focus();
  }


  const previous_challengesRef = useRef();

  const onMouseEnterprevious_challengesRef = () => {
    previous_challengesRef.current.focus();
  }


  const recommend_PlatformRef = useRef();

  const onMouseEnterrecommend_PlatformRef = () => {
    recommend_PlatformRef.current.focus();
  }


  const saving_pecentageRef = useRef();

  const onMouseEntersaving_pecentageRef = () => {
    saving_pecentageRef.current.focus();
  }


  const manage_financesREf = useRef();

  const onMouseEntermanage_financesREf = () => {
    manage_financesREf.current.focus();
  }
  

  const often_contributionRef = useRef();

  const onMouseEnteroften_contributionRef = () => {
    often_contributionRef.current.focus();
  }

  
  


return (

<main className='flex relative justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>

<p className='dance absolute'></p>
<p className=' dance2 absolute'></p>

<section className=' w-full max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper3 my-8 '> 

<h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6 pt-9 text-center mb-12  '>Complete Survey 🔥</h1>


  <div className='flex flex-col lg:flex-row justify-between items-center mt-[-50px]'> 
    {/* Registration Page 01 Left Section */}
    <div className='w-full lg:w-[55%] p-6 lg:p-12 xl:p-20'> 
    <form className='flex flex-col gap-6 w-full max-w-xl'>

      <div className='flex flex-col gap-2'>
        <label htmlFor="hear_about_us" className='font-semibold text-lg tracking-wide'>👩🏾‍💻 How Did You Hear About Us?</label>
          <input 
            ref={hear_about_usRef}
            onMouseEnter={onMouseEnterhear_about_usRef}
            type="text" 
            name="hear_about_us" 
            id="hear_about_us" 
            placeholder=' How Did You Hear About Us' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>
  
        <div className='flex flex-col gap-2'>
          <label htmlFor="level_of_education" className='font-semibold text-lg tracking-wide '>🎓 What is your highest level of education?</label>
          <input 
            ref={level_of_educationRef}
            onMouseEnter={onMouseEnterlevel_of_educationRef}
            type="text" 
            name="level_of_education" 
            id="level_of_education" 
            placeholder='Your highest level of education? 🎓 ' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>
        
        <div className='flex flex-col gap-2'>
          <label htmlFor="ever_perticipated" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faGroupArrowsRotate} className="werey2 mr-2 text-[gold]" />  Have you participated in a Njangi group before? </label>
          <select name="ever_perticipated" id="ever_perticipated" 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-black '
            ref={ever_perticipatedRef}
            onMouseEnter={onMouseEnterever_perticipatedRef}
          >
          <option className='singleCol' value="Select an Option ">  Select an Option </option>
          <option className='singleCol' value="YES">YES</option>
          <option className='singleCol' value="NO">NO</option>

          </select>
        </div>


        <div className='flex flex-col gap-2'>
          <label htmlFor="preferred_method" className='font-semibold text-lg tracking-wide'>🫰🏾 What is your preferred method of payment?</label>
          <select name="preferred_method" id="preferred_method" 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-black '
            ref={preferred_methodREf}
            onMouseEnter={onMouseEnterpreferred_methodREf}
          >
          <option className='singleCol' value="Select an Option ">  Select an Option </option>
          <option className='singleCol' value="MTN Mobile Money">MTN Mobile Money 💰 </option>
          <option className='singleCol' value="ORANGE Mobile Money">ORANGE Mobile Money 💰 </option>

          </select>
        </div>

        

        <div className='flex flex-col gap-2'>
          <label htmlFor="often_contribution" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faHandHoldingDollar} className="werey2 mr-2 text-[gold]" /> How often can you contribute? </label>
          <input 
          ref={often_contributionRef}
        onMouseEnter={onMouseEnteroften_contributionRef}
            type="text" 
            name="often_contribution" 
            id="often_contribution" 
            placeholder='How often can you contribute?' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>


        <div className='flex flex-col gap-2'>
          <label htmlFor="primary_njangi_goal" className='font-semibold text-lg tracking-wide'>🎯 What are your primary goals for joining a Njangi Group? </label>
          <input 
          ref={primary_njangi_goalRef}
        onMouseEnter={onMouseEnterprimary_njangi_goalRef}
            type="text" 
            name="primary_njangi_goal" 
            id="primary_njangi_goal" 
            placeholder='What are your primary goals for joining a Njangi group? (e.g., saving, investment)' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="comfortability" className='font-semibold text-lg tracking-wide flex'>#️⃣ How many members are you comfortable with in a Njangi group?</label>
          <input 
          ref={comfortabilityRef}
        onMouseEnter={onMouseEntercomfortabilityRef}
            type="number" 
            name="comfortability" 
            id="comfortability" 
            placeholder='How many members are you comfortable with in a Njangi group? ' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>
        
        <div className='flex flex-col gap-2'>
          <label htmlFor="often_check_mails" className='font-semibold text-lg tracking-wide flex'>📱 How often do you check your messages or emails? </label>
          <input 
          ref={often_check_mailsRef}
        onMouseEnter={onMouseEnteroften_check_mailsRef}
            type="text" 
            name="often_check_mails" 
            id="often_check_mails" 
            placeholder='State often do you check your messages or emails? ' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>

      </form>  
    </div>


    {/* Registration Page 01 Right Section */}
    <div className='w-full lg:w-[45%] p-6 lg:p-9'>

      <form className='flex flex-col gap-6 w-full max-w-xl'>
    
        <div className='flex flex-col gap-2'>
          <label htmlFor="previous_challenges" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCircleExclamation} className="werey2 mr-2 text-[gold]" />  What challenges have you faced in previous Njangi groups?</label>
          <input 
            ref={previous_challengesRef}
            onMouseEnter={onMouseEnterprevious_challengesRef}
            type="text" 
            name="previous_challenges" 
            id="previous_challenges" 
            placeholder='Name the challenges have you faced in previous Njangi groups?' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>

      
        <div className='flex flex-col gap-2'>
          <label htmlFor="email" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCommentDollar} className="werey2 mr-2 text-[gold]" /> How likely are you to recommend this Njangi Platform to others?</label>
          <select name="recommend_Platform" id="recommend_Platform" 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef]  py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-white bg-slate-800 '
            ref={recommend_PlatformRef}
            onMouseEnter={onMouseEnterrecommend_PlatformRef}
          >
          <option className='singleCol' value="Select an Option ">  Select an Option </option>
          <option className='singleCol' value="1/10">1/10</option>
          <option className='singleCol' value="2/10">2/10</option>
          <option className='singleCol' value="3/10">3/10</option>
          <option className='singleCol' value="4/10">4/10</option>
          <option className='singleCol' value="5/10">5/10</option> 
          <option className='singleCol' value="6/10">6/10</option>
          <option className='singleCol' value="7/10">7/10</option>
          <option className='singleCol' value="8/10">8/10</option>
          <option className='singleCol' value="9/10">9/10</option>
          <option className='singleCol' value="10/10">10/10</option>

          </select>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="manage_finances" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCoins} className="werey2 mr-2 text-[gold]" /> How do you typically manage your finances? </label>
          <input 
            ref={manage_financesREf}
            onMouseEnter={onMouseEntermanage_financesREf}
            type="text" 
            name="manage_finances" 
            id="manage_finances" 
            placeholder='e.g., monthly budgeting, tracking expenses' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="receive_financial_education" className='font-semibold text-lg tracking-wide '>📗 Would you like to receive educational materials on financial literacy?</label>
          <select name="receive_financial_education" id="receive_financial_education" 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef]  py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-white bg-slate-800 '
            ref={receive_financial_educationRef}
            onMouseEnter={onMouseEnterreceive_financial_educationRef}
          >
          <option className='singleCol' value="Select an Option "> Select an Option</option>
          <option className='singleCol' value="YES">YES</option>
          <option className='singleCol' value="NO">NO</option>
          

          </select>
        </div>
        
        <div className='flex flex-col gap-2'>
          <label htmlFor="suggestions" className='font-semibold text-lg tracking-wide flex'> 💭 Do you have any suggestions for improving the Njangi experience?</label>
          <input 
          ref={suggestionsRef}
        onMouseEnter={onMouseEntersuggestionsRef}
            type="TEXT" 
            name="suggestions" 
            id="suggestions" 
            placeholder='State Your Suggestions ' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>

        



        <div className='flex flex-col gap-2'>
          <label htmlFor="saving_pecentage" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faPiggyBank} className="werey2 mr-2 text-[#0ef]" /> What percentage of your income do you typically save?</label>
          <input 
          ref={saving_pecentageRef}
        onMouseEnter={onMouseEntersaving_pecentageRef}
            type="text" 
            name="saving_pecentage" 
            id="saving_pecentage" 
            placeholder='Your Percentage ' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>
          
        <div className='flex flex-col gap-2'>
          <label htmlFor="motivation_contribution" className='font-semibold text-lg tracking-wide flex'> <FontAwesomeIcon icon={faBullseye} className="werey2 mr-2 text-[#0ef]" />  What motivates you to stay committed to group contributions?</label>
          <input 
          ref={motivation_contributionRef}
        onMouseEnter={onMouseEntermotivation_contributionRef}
            type="text" 
            name="motivation_contribution" 
            id="motivation_contribution" 
            placeholder='Your Motivation ' 
            className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
          />
        </div>
          
    </form>

    </div>

  </div>

  <button className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-[90%] text-white mb-10 py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center ml-[5%]'>
          Complete Survey ✅

      </button>
     

 
</section>
</main>

)

}

export default Survey_User;