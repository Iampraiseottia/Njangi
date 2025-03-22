
"use client"

import Income_User from '../components/income-user'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Income = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/dashboard?component=income');
  }, [router]);
  

  return null 
} 

export default Income;