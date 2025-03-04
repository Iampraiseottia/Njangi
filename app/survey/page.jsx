
import React from 'react'

import globalStyle from '../globals.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faPersonHalfDress } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'





const Survey = () => {
return (
<main className='flex justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>


<section className=' w-full max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper3 my-8 '> 

<h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6 pt-9 text-center mb-12  '>Complete Your Registration 🔥</h1>


  <div className='flex flex-col lg:flex-row justify-between items-center mt-[-50px]'> 
    {/* Registration Page 01 Left Section */}
    <div className='w-full lg:w-[55%] p-6 lg:p-12 xl:p-20'>
    <form className='flex flex-col gap-6 w-full max-w-xl'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="date_of_birth" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCalendar} className="werey2 mr-2 text-[gold]" /> Date of Birth:</label>
              <input 
                type="date" 
                name="date_of_birth" 
                id="date_of_birth" 
                placeholder='Your Data Of Birth' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>

            

            <div className='flex flex-col gap-2'>
              <label htmlFor="gender" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faPersonHalfDress} className="werey2 mr-2 text-[gold]" /> Gender:</label>
             <select name="gender" id="gender" 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-black '
             
             >
              <option value="Choose Your Gender">Choose Your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>

             </select>
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="number" className='font-semibold text-lg tracking-wide'>👩🏾‍💻 How Did You Hear About Us?</label>
              <input 
                type="text" 
                name="hear_about_us" 
                id="number" 
                placeholder=' How Did You Hear About Us' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>
 
            <div className='flex flex-col gap-2'>
              <label htmlFor="level_of_education" className='font-semibold text-lg tracking-wide '>🎓 What is your highest level of education?</label>
              <input 
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
             
             >
              <option value="Your Have you participated in a Njangi group before?">  Select an Option </option>
              <option value="Male">YES</option>
              <option value="Female">NO</option>

             </select>
            </div>


            <div className='flex flex-col gap-2'>
              <label htmlFor="fullName" className='font-semibold text-lg tracking-wide'>🫰🏾 What is your preferred method of payment?</label>
              <select name="ever_perticipated" id="ever_perticipated" 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-black '
             
             >
              <option value="What is your preferred method of payment?">  Select an Option </option>
              <option value="Male">MTN Mobile Money 💰 </option>
              <option value="Female">ORANGE Mobile Money 💰 </option>

             </select>
            </div>

            

            <div className='flex flex-col gap-2'>
              <label htmlFor="often_contribution" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faHandHoldingDollar} className="werey2 mr-2 text-[gold]" /> How often can you contribute? </label>
              <input 
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
                type="text" 
                name="primary_njangi_goal" 
                id="primary_njangi_goal" 
                placeholder='What are your primary goals for joining a Njangi group? (e.g., saving, investment)' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>
 
            <div className='flex flex-col gap-2'>
              <label htmlFor="number" className='font-semibold text-lg tracking-wide flex'>#️⃣ How many members are you comfortable with in a Njangi group?</label>
              <input 
                type="number" 
                name="number" 
                id="number" 
                placeholder='How many members are you comfortable with in a Njangi group? ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>
            
            <div className='flex flex-col gap-2'>
              <label htmlFor="often_check_mails" className='font-semibold text-lg tracking-wide flex'>📱 How often do you check your messages or emails? </label>
              <input 
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
                type="text" 
                name="previous_challenges" 
                id="previous_challenges" 
                placeholder='Name the challenges have you faced in previous Njangi groups?' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>

          
            <div className='flex flex-col gap-2'>
              <label htmlFor="email" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCommentDollar} className="werey2 mr-2 text-[gold]" /> How likely are you to recommend this Njangi Platform to others?</label>
              <select name="ever_perticipated" id="ever_perticipated" 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef]  py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-white bg-slate-800 '
             
             >
              <option value="Your Have you participated in a Njangi group before?">  Select an Option </option>
              <option value="Male">1/10</option>
              <option value="Female">2/10</option>
              <option value="Male">3/10</option>
              <option value="Female">4/10</option>
              <option value="Male">5/10</option> 
              <option value="Female">6/10</option>
              <option value="Male">7/10</option>
              <option value="Female">8/10</option>
              <option value="Male">9/10</option>
              <option value="Female">10/10</option>

             </select>
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="manage_finances" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCoins} className="werey2 mr-2 text-[gold]" /> How do you typically manage your finances? </label>
              <input 
                type="text" 
                name="manage_finances" 
                id="manage_finances" 
                placeholder='e.g., monthly budgeting, tracking expenses' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>
 
            <div className='flex flex-col gap-2'>
              <label htmlFor="receive_financial_education" className='font-semibold text-lg tracking-wide '>📗 Would you like to receive educational materials on financial literacy?:</label>
              <select name="receive_financial_education" id="receive_financial_education" 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef]  py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-white bg-slate-800 '
             
             >
              <option value="Your Have you participated in a Njangi group before?"> Select an Option</option>
              <option value="Male">YES</option>
              <option value="Female">NO</option>
             

             </select>
            </div>
            
            <div className='flex flex-col gap-2'>
              <label htmlFor="suggestions" className='font-semibold text-lg tracking-wide flex'> 💭 Do you have any suggestions for improving the Njangi experience?</label>
              <input 
                type="passwortextd" 
                name="suggestions" 
                id="suggestions" 
                placeholder='State Your Suggestions ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="marital_status" className='font-semibold text-lg tracking-wide'>💒 What is your marital status?:</label>
              <select name="marital_status" id="marital_status" 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef]  py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-white bg-slate-800 '
             
             >
              <option value="Your Have you participated in a Njangi group before?"> Select an Option</option>
              <option value="Male">Single</option>
              <option value="Female">Married</option>
             

             </select>
            </div>

   
 
            <div className='flex flex-col gap-2'>
              <label htmlFor="saving_pecentage" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faPiggyBank} className="werey2 mr-2 text-[#0ef]" /> What percentage of your income do you typically save?</label>
              <input 
                type="text" 
                name="saving_pecentage" 
                id="saving_pecentage" 
                placeholder='Your Percentage ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>
            
            <div className='flex flex-col gap-2'>
              <label htmlFor="debt_status" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCircleExclamation} className="werey2 mr-2 text-[#0ef]" /> Are you currently in any debt? </label>
              <select name="debt_status" id="debt_status" 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef]  py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-white bg-slate-800 '
             
             >
              <option value="Your Have you participated in a Njangi group before?"> Select an Option</option>
              <option value="Male">YES</option>
              <option value="Female">NO</option>
             

             </select>
            </div>

   
            <div className='flex flex-col gap-2'>
              <label htmlFor="motivation_contribution" className='font-semibold text-lg tracking-wide flex'> <FontAwesomeIcon icon={faBullseye} className="werey2 mr-2 text-[#0ef]" />  What motivates you to stay committed to group contributions?</label>
              <input 
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
  <Link href="/verify" className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-[90%] text-white mb-10 py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center ml-[5%]'>
          Complete Registration ✅

      </Link>
     

 
</section>
</main>

)

}

export default Survey