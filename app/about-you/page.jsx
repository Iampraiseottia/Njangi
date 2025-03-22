
"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import About_User from '../components/about-user'


const About_You = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/dashboard?component=about-you');
  }, [router]);
  

  return null 
}

export default About_You;