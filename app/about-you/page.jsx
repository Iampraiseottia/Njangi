
"use client"

import React, { useState } from 'react';
import { useActionState } from 'react';


import globalStyle from '../globals.css';
import Link from 'next/link';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser, faArrowLeft, faCity } from '@fortawesome/free-solid-svg-icons';


// import { CreateUser02AboutYou } from '../actions';
import { useForm } from '@conform-to/react';





const About_You = () => {
  const [lastResult, action] = useActionState(CreateUser02AboutYou, undefined);
  const [form, fields] = useForm({ lastResult });

  const [userName, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [state_Region, setStateRegion] = useState("");
  const [city, setCity] = useState("");
  const [homeAddress, setHomeAddress] = useState("");

 


  

  return (
    <main className='flex justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>
      <section className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl bg-transparent border-2 border-[#0ef] overflow-hidden rounded-lg wrapper my-8'> 
        {/* Registration Page 01 Left Section */}
        <div className='w-full lg:w-[45%] p-6 lg:p-12 xl:p-20'>
          <h1 className='text-4xl lg:text-6xl font-extrabold tracking-wide mt-6 lg:mt-10'>It's All About You!!!</h1>
          <br />
          <p className='text-base lg:text-lg mb-5'>Unlock exclusive rewards 🔥 which awaits you. Get personalized offers just for you just by us getting to know you better. Don't miss out!!!, Your journey starts here..</p>
          <br />
          <FontAwesomeIcon icon={faUser} className='werey ' />  
        </div>

        {/* Registration Page 01 Right Section */}
        <div className='w-full lg:w-[55%] p-6 lg:p-9'>
          <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wider mt-6 text-center mb-5'>Start Your Journey 🔥</h1>
          <br />
          <form className='flex flex-col gap-6 w-full max-w-xl' id={form.id} onSubmit={async (e) => {
            await form.onSubmit(e);   
            // await handleSubmit(e); 
          }} action={action}>
            

            <div className='flex flex-col gap-2'>
              <label htmlFor="country" className='font-semibold text-lg tracking-wide'>🏴 Country:</label>
              <input 
                type="text" 
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                name={fields.country.name}
                id="country" 
                placeholder='Your country ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.country.errors}</p> 
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="state_Region" className='font-semibold text-lg tracking-wide'>🌆 State or Region:</label>
              <input 
                type="text" 
                name={fields.state_Region.name}
                value={state_Region}
                onChange={(e) => setStateRegion(e.target.value)}
                id="state_Region" 
                placeholder='Your Home Address / Location ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.state_Region.errors}</p> 
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="city" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCity} className="werey2 mr-2 text-[#0ef]" /> City:</label>
              <input 
                type="text" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                name={fields.city.name}
                id="city" 
                placeholder='Your City / Town' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.city.errors}</p> 
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="homeAddress" className='font-semibold text-lg tracking-wide'>🏠 Home Address:</label>
              <input 
                type="text" 
                value={homeAddress}
                onChange={(e) => setHomeAddress(e.target.value)}
                name={fields.homeAddress.name}
                id="homeAddress" 
                placeholder='Your Home Address / Precise Location' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.homeAddress.errors}</p> 
            </div>

            <button type='submit' className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center'>
              Continue ➡️
            </button>
          </form>

          <p className='text-right mt-4 mb-2 font-bold text-lg'>02/05</p>
          
          <Link href="/register" className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-[90%] text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center'>
            <FontAwesomeIcon icon={faArrowLeft} className='werey2 mr-2' /> Go Back 
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About_You;

