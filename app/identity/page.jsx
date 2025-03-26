
"use client"

import Identity_User from '../components/identity-user'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Identity_You = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/dashboard?component=identity');
  }, [router]);
  

  return null 
}

export default Identity_You;
