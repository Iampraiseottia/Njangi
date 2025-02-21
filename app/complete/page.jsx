import React from 'react'
import globalStyle from '../globals.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faPersonHalfDress } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'




export const metadata = {
title: 'Complete REgistration - Njangi Web Application',
description: 'Lets get to know you our most special user'
}

const Complete_Registration = () => {
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
              <option value="Your Have you participated in a Njangi group before?"> Have you participated in a Njangi group before? </option>
              <option value="Male">YES</option>
              <option value="Female">NO</option>

             </select>
            </div>


            <div className='flex flex-col gap-2'>
              <label htmlFor="fullName" className='font-semibold text-lg tracking-wide'>🫰🏾 What is your preferred method of payment?</label>
              <select name="ever_perticipated" id="ever_perticipated" 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-black '
             
             >
              <option value="What is your preferred method of payment?"> What is your preferred method of payment? </option>
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
              <label htmlFor="primary_njangi_goal" className='font-semibold text-lg tracking-wide'>🎯 What are your primary goals for joining a Njangi Grou? </label>
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
                placeholder='How often do you check your messages or emails? ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>



           
          </form>  
    </div>

    {/* Registration Page 01 Right Section */}
    <div className='w-full lg:w-[45%] p-6 lg:p-9'>

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
              <label htmlFor="password" className='font-semibold text-lg tracking-wide '> Password:</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='Your Password ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>
            
            <div className='flex flex-col gap-2'>
              <label htmlFor="confirm_password" className='font-semibold text-lg tracking-wide flex'> Confirm Password:</label>
              <input 
                type="password" 
                name="confirm_password" 
                id="confirm_password" 
                placeholder='Confirm Password ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>

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
              <label htmlFor="password" className='font-semibold text-lg tracking-wide flex'> Password:</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='Your Password ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>
            
            <div className='flex flex-col gap-2'>
              <label htmlFor="confirm_password" className='font-semibold text-lg tracking-wide flex'> Confirm Password:</label>
              <input 
                type="password" 
                name="confirm_password" 
                id="confirm_password" 
                placeholder='Confirm Password ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
            </div>

   

     
    </form>


    </div>

  </div>
  <Link href="/income" className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-[90%] text-white mb-10 py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center ml-[5%]'>
          Complete Registration ✅

      </Link>
     

 
</section>
</main>

)

}

export default Complete_Registration