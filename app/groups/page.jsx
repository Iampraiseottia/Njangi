
"use client"

import Njangi_Groups from '../components/njangi-groups'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Groups = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/dashboard?component=groups');
  }, [router]);
  

  return null 
}

export default Groups;