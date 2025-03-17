
"use client"

import {React, useState, useEffect, useRef} from 'react'
import { useRouter } from 'next/navigation';

import { useActionState } from 'react';


import globalStyle from '../globals.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser, faCity, faPersonHalfDress, faCalendar } from '@fortawesome/free-solid-svg-icons';


// import { CreateUser02AboutYou } from '../actions';
import { useForm } from '@conform-to/react';




const About_You = () => {

  
  const router = useRouter();

  const handleNavigateToIncome = () => {
      router.push('/dashboard');
  };


  // const [lastResult, action] = useActionState(CreateUser02AboutYou, undefined);
  // const [form, fields] = useForm({ lastResult });

  const [userName, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [state_Region, setStateRegion] = useState("");
  const [city, setCity] = useState("");
  const [homeAddress, setHomeAddress] = useState("");

 



const [isDarkMode, setIsDarkMode] = useState(() => {
  if (typeof window !== "undefined") {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true'; 
  }
  return false;
});

useEffect(() => {
  document.body.classList.toggle('dark', isDarkMode);

  localStorage.setItem('darkMode', isDarkMode);
}, [isDarkMode]);




  const DateOfBirthReg = useRef();

  const onMouseEnterDateOfBirthReg = () => {
    DateOfBirthReg.current.focus();
  }

  const onMouseLeaveDateOfBirthReg = () => {
    DateOfBirthReg.current.blur();
  }



  const GenderReg = useRef();

  const onMouseEnterGenderReg = () => {
    GenderReg.current.focus();
  }

  const onMouseLeaveGenderReg = () => {
    GenderReg.current.blur();
  }


  const countryReg = useRef();

  const onMouseEntercountryReg = () => {
    countryReg.current.focus();
  }

  const onMouseLeavecountryReg = () =>  {
    countryReg.current.blur();
  }



  const state_Region_Ref = useRef();

  const onMouseEnterstate_Region_Ref = () => {
    state_Region_Ref.current.focus();
  }

  const onMouseLeavestate_Region_Ref = () => {
    state_Region_Ref.current.blur();
  }


  const cityRef = useRef();

  const onMouseEntercityRef = () => {
    cityRef.current.focus();
  }

  const onMouseLeavecityRef = () => {
    cityRef.current.blur();
  }



  const homeAddressRef = useRef();

  const onMouseEnterhomeAddressRef = () => {
    homeAddressRef.current.focus();
  }

  const onMouseLeavehomeAddressRef = () => {
    homeAddressRef.current.blur();
  }



  

  return (
    
    <main className='flex relative justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4'>
      
      <p className='dance absolute'></p>
      <p className=' dance2 absolute'></p>


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
          <form className='flex flex-col gap-6 w-full max-w-xl'  onSubmit={async (e) => {
            await form.onSubmit(e);   
            // await handleSubmit(e); 
          }} action='#'>
            
            <div className='flex flex-col gap-2'>
              <label htmlFor="date_of_birth" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCalendar} className="werey2 mr-2 text-[gold]" /> Date of Birth:</label>
              <input 
                type="date" 
                name="date_of_birth" 
                id="date_of_birth" 
                placeholder='Your Data Of Birth' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
                ref={DateOfBirthReg}
                onMouseEnter={onMouseEnterDateOfBirthReg}  
                onMouseLeave={onMouseLeaveDateOfBirthReg} 
              />
            </div>


            <div className='flex flex-col gap-2'>
              <label htmlFor="gender" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faPersonHalfDress} className="werey2 mr-2 text-[gold]" /> Gender:</label>
             <select name="gender" id="gender" 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 text-black '
                ref={GenderReg}
                onMouseEnter={onMouseEnterGenderReg}
                onMouseLeave={onMouseLeaveGenderReg}
             >
              <option value="Choose Gender">Choose Your Gender</option>
              <option value="Male">Male</option> 
              <option value="Female">Female</option>

             </select>
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="country" className='font-semibold text-lg tracking-wide'>🏴 Country:</label>
              <input 
                type="text" 
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                ref={countryReg}
                onMouseEnter={onMouseEntercountryReg}
                onMouseLeave={onMouseLeavecountryReg}
                // name={fields.country.name}
                id="country" 
                placeholder='Your Country ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              {/* <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.country.errors}</p>  */}
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="state_Region" className='font-semibold text-lg tracking-wide'>🌆 State or Region:</label>
              <input 
                type="text" 
                // name={fields.state_Region.name}
                value={state_Region}
                ref={state_Region_Ref}
                onMouseEnter={onMouseEnterstate_Region_Ref}
                onMouseLeave={onMouseLeavestate_Region_Ref}
                onChange={(e) => setStateRegion(e.target.value)}
                id="state_Region" 
                placeholder='Your State / Region ' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              {/* <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.state_Region.errors}</p>  */}
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="city" className='font-semibold text-lg tracking-wide flex'><FontAwesomeIcon icon={faCity} className="werey2 mr-2 text-[#0ef]" /> City:</label>
              <input 
                type="text" 
                ref={cityRef}
                onMouseEnter={onMouseEntercityRef}
                onMouseLeave={onMouseLeavecityRef} 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                // name={fields.city.name}
                id="city" 
                placeholder='Your Current City / Town' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              {/* <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.city.errors}</p>  */}
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="homeAddress" className='font-semibold text-lg tracking-wide'>🏠 Home Address:</label>
              <input 
                type="text" 
                value={homeAddress}
                onChange={(e) => setHomeAddress(e.target.value)}
                ref={homeAddressRef}
                onMouseEnter={onMouseEnterhomeAddressRef}
                onMouseLeave={onMouseLeavehomeAddressRef}
                // name={fields.homeAddress.name}
                id="homeAddress" 
                placeholder='Your Current Home Address / Precise Location' 
                className='w-full text-base bg-transparent rounded-xl border-2 border-[#0ef] py-3 px-4 focus:ring-1 focus:ring-[#0ef] focus:outline-none duration-300 placeholder-white'
              />
              {/* <p className='text-[16px] text-red-700 font-bold tracking-wide text-right'>{fields.homeAddress.errors}</p>  */}
            </div> 

            <button  type="button" 
                onClick={handleNavigateToIncome} className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center' >
              Submit and Continue ➡️
            </button>
          </form>

        </div>
      </section>
    </main>
  );
};

export default About_You;
