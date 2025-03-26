
"use client"

import Settings_Dash from '../components/setting-dash'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Settings = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/dashboard?component=settings');
  }, [router]);
  

  return null 
}

export default Settings;
