
import React from 'react'
import Head from 'next/head' 
import { icon } from '@fortawesome/fontawesome-svg-core'


import Metadata from './components/Metadata';



export const metadata = {
  '/': {
    title: 'Njangi Web Application',
    description: 'An application created where members join, create, and manage njangi groups with others all over the world.',
  },
  '/home': {
    title: 'Njangi Web Application',
    description: 'An application created where members join, create, and manage njangi groups with others all over the world.',
  },
  '/dashboard': {
    title: 'Dashboard - Njangi Web Application',
    description: 'Manage your njangi groups and track activities on the dashboard.',
  }, 
  '/dashboardMain': {
    title: 'Dashboard - Njangi Web Application',
    description: 'Manage your njangi groups and track activities on the dashboard.',
  },
  '/register': {
    title: 'Register - Njangi Web Application',
    description: ' Register and take control of your financial freedom.',
  },
  '/profile': {
    title: 'Profile Management - Njangi Web Application',
    description: 'Manage your profile.',
  },
  '/login': {
    title: 'Login - Njangi Web Application',
    description: 'Login and take control of your financial freedom',
  },
  '/payment': {
    title: 'Payments - Njangi Web Application',
    description: 'Make and Receive Njangi Payments through MTN and Orange Mobile Money Services.',
  },
  icons: {
    icon: [
      '/favicon.ico',
    ],
    apple: [
      '/apple-touch-icon.png',
    ],
    shortcut: [
      '/apple-touch-icon.png',
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

