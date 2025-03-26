
"use client"

import All_Transactions from '../components/all-transactions'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Transactions = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/dashboard?component=transactions');
  }, [router]);
  

  return null 
}

export default Transactions; 
