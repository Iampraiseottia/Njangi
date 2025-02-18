import React from 'react'
import globalStyle from '../globals.css'



const Register = () => {
  return (
    <main className=' flex justify-center items-center w-full h-[100vh] bg-gray-800 text-white'>
      <section className=' flex justify-between items-center h-5/6 w-3/4 bg-transparent border-2 border-[#0ef] overflow-hidden wrapper'>
        <div className=' w-[40%] p-20'>
          <h1 className=' text-6xl font-extrabold tracking-wide mt-12' >WELCOME!!!</h1>
          <br />
          <p className=' text-[18.6px] mb-5'>We are delighted and privilege to have you here. Follow the steps made available on the right side of the page to register. If you need any assistance feel free to reach out.</p>
          <br />
          <h1 className=' font-extrabold text-4xl tracking-wider'>OR</h1>
          <br />
          <button className=' bg-white text-black pt-4 pb-4 pl-12 pr-12 font-bold text-[19px] ease-in-out duration-300 rounded-md hover:opacity-70 cursor-pointer'>Continue With Google</button> <br />
          <button className=' bg-white text-black pt-4 pb-4 pl-12 pr-12 font-bold text-[19px] ease-in-out duration-300 rounded-md hover:opacity-70 mt-5 mb-5 cursor-pointer'>Continue With GitHub</button> <br />
          <button className=' bg-white text-black pt-4 pb-4 pl-10 pr-10 font-bold text-[17.8px] ease-in-out duration-300 rounded-md hover:opacity-70 cursor-pointer' >Continue With FaceBook</button>

        </div>
        <div className=' w-[59%]'>SIGN UP</div> 
      </section>

    </main>
  ) 
}

export default Register  

