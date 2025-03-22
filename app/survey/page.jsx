
"use client"

import Survey_User from '../components/survey-user'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Survey = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/dashboard?component=survey');
  }, [router]);
  

  return null 
}

export default Survey;