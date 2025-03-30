"use client"

import React from 'react'

import globalStyle from './globals.css'

import Footer from './components/footer'
import Navbar from './components/navbar'

import Metadata from './components/Metadata'

const General = () => {

  const metadata = {
    title: 'Njangi Web Application',
    description: 'An application created where members join, create, and manage njangi groups with others all over the world.',
  };

  
  return (

   <main className='w-full' >

    <Metadata title={metadata.title} description={metadata.description} />

    <Navbar /> 

    <Footer />
   
   </main> 

  )
}

export default General;
