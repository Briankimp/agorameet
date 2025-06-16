
"use client"
import { useEffect, useState } from 'react'
import Landingpage from './components/Landingpage'
import Meeting from './components/Meeting'

const Duration = 2000

const DefaultPage = () => {
  const [showAgora, setShowAgora] = useState<boolean>(false)

  useEffect(()=>{
    const timer = setTimeout(() => {
      setShowAgora(true)
    }, Duration)
    return () => clearTimeout(timer)
  }, [])

  return (
  <div>

    {showAgora ?  <Meeting /> : <Landingpage />}
  </div>
  )
}

export default DefaultPage
