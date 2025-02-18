import React from 'react'
import globalStyle from '../globals.css'



const Register = () => {
  return (
    <main className=' flex justify-center items-center w-full h-[100vh] bg-gray-800 text-white'>
      <section className=' flex justify-between items-center h-5/6 w-3/4 bg-transparent border-2 border-[#0ef] overflow-hidden wrapper'>
        <div className=' w-[45%] p-24'>
          <h1 className=' text-6xl font-extrabold tracking-wide mt-12' >WELCOME!!!</h1>
          <br />
          <p className=' text-[18.6px] mb-5'>We are delighted and privilege to have you here. Follow the steps made available on the right side of the page to register. If you need any assistance feel free to reach out.</p>
          <br />
          <h1 className=' font-extrabold text-4xl tracking-wider'>OR</h1>
          <br />
          <button className=' bg-white text-black pt-4 pb-4 pl-24 pr-24 font-bold text-[19px] ease-in-out duration-300 rounded-md hover:opacity-70 cursor-pointer flex justify-center items-center align-middle'> <img src="/google.png" className=' w-8 mr-2'  /> Continue With Google</button> <br />
          <button className=' bg-white text-black pt-4 pb-4 pl-24 pr-24 font-bold text-[19px] ease-in-out duration-300 rounded-md hover:opacity-70 mt-1 mb-1 cursor-pointer flex justify-center items-center align-middle'>  <img src="/github.png" className=' w-8 mr-2'  /> Continue With GitHub</button> <br />
          <button className=' bg-white text-black pt-4 pb-4 pl-[90px] pr-[90px] font-bold text-[17.8px] ease-in-out duration-300 rounded-md hover:opacity-70 cursor-pointer flex justify-center items-center align-middle' >  <img src="/facebook.png" className=' w-8 mr-2'  /> Continue With FaceBook</button>

        </div> 
        <div className=' w-[55%]'> 
          <h1 className=' text-5xl font-extrabold tracking-wider mt-12 text-center mb-5 ml-52' >SIGN UP</h1>
          <br />
          <form action="" className=' flex flex-col justify-center items-center ml-28'>
            <label htmlFor="fullName" className=' font-semibold text-[20px] tracking-wide'>Full Name: 
              <input type="text" name="fullName" id="fullName" placeholder='Your Full Name' className=' w-[400px] ml-4 text-[17px] bg-transparent rounded-xl border-2 border-solid border-[#0ef] pt-3 pb-3 pr-8 pl-8 focus:ring-1 focus:ring-[#0ef] focus:outline-none ease-in-out duration-300' /> 
            </label> <br />
            <label htmlFor="userName" className=' font-semibold text-[20px] tracking-wide'>User Name: 
              <input type="text" name="userName" id="userName" placeholder='Your User Names' className=' w-[400px] ml-4 text-[17px] bg-transparent rounded-xl border-2 border-solid border-[#0ef] pt-3 pb-3 pr-8 pl-8 focus:ring-1 focus:ring-[#0ef] focus:outline-none ease-in-out duration-300' /> </label> <br />
            <label htmlFor="email" className=' font-semibold text-[20px] tracking-wide'>Email Address: 
              <input type="email" name="email" id="email" placeholder='Your Email Address' className=' w-[400px] ml-4 text-[17px] bg-transparent rounded-xl border-2 border-solid border-[#0ef] pt-3 pb-3 pr-8 pl-8 focus:ring-1 focus:ring-[#0ef] focus:outline-none ease-in-out duration-300' /> 
            </label> 
            <br />
            <label htmlFor="number" className=' font-semibold text-[20px] tracking-wide'>Phone Number: 
              <input type="number" name="number" id="number" placeholder='Your Phone NUmber' className=' w-[400px] ml-4 text-[17px] bg-transparent rounded-xl border-2 border-solid border-[#0ef] pt-3 pb-3 pr-8 pl-8 focus:ring-1 focus:ring-[#0ef] focus:outline-none ease-in-out duration-300' /> </label> <br />

            <button className=' mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-[550px] text-white pt-4 pb-4 pl-10 pr-10 font-extrabold text-[25px] ease-in-out duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center align-middle' > Continue ➡️ </button>   
         
          </form>
          <p className=' text-right mr-6 mt-5 mb-2 font-bold text-xl'>01/05</p>
        
          <p className=' ml-44 mb-7 text-center'>Already Have An Account? <br />
           <span className=' text-[#0ef] font-extrabold hover:cursor-pointer hover:underline ease-in-out duration-300'>LOGIN</span>   </p>
        
        </div> 
        
      </section>

    </main>
  ) 
}

export default Register  

