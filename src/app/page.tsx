'use client'

import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/verify'
    }
  }, [])

  return null
}

export default Home
