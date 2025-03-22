
"use client"

import User_Profile from '../components/user-profile'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Profile = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/dashboard?component=profile');
  }, [router]);
  

  return null 
}

export default Profile;