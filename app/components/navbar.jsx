
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <section className=' flex justify-evenly items-center w-full bg-[lightseagreen] py-4  '>

      <div className='w-[30%] flex justify-center items-center ml-7 text-center'>
        <img src="/logo3.png" className='w-32 h-28 mr-1' alt="Njangi App Logo" />
        <h1 className='text-white text-5xl font-extrabold tracking-wider'>NJANGIFY</h1>
      </div>
      <ul className='w-[50%] flex items-center justify-evenly transition-all ease-in-out'>
        <li className='text-gold text-2xl hover:cursor-pointer'><Link href='/'>Home</Link></li>
        <li className='text-white text-2xl hover:cursor-pointer'><Link href='/about'>About</Link></li>
        <li className='text-white text-2xl hover:cursor-pointer'><Link href='/faq'>FAQs</Link></li>
        <li className='text-white text-2xl hover:cursor-pointer'>Pages</li>
        <li className='text-white text-2xl hover:cursor-pointer'><Link href='/contact'>Contact</Link></li>
      </ul>
      <div className='w-1/5'>
        <Link href='/register' className='mt-3 bg-gradient-to-r from-[#0ef] via-slate-700 to-[#0ef] w-3/5 hover:from-[#00ffff] hover:via-slate-600 hover:to-[#00ffff]  text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider'>
          Sign Up    
        </Link> 
      </div>
    </section>
  )
}

export default Navbar