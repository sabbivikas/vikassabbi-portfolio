import React from 'react'
import { useTheme } from 'next-themes'
import StringLights from './StringLights'
import SnowAmbience from './SnowAmbience'
import RainAmbience from './RainAmbience'

const FallAmbience: React.FC = () => {
  const { theme } = useTheme()

  // Show different effects based on theme
  if (theme === 'dark') {
    return <StringLights />
  }
  
  if (theme === 'rain') {
    return <RainAmbience />
  }

  // Light mode shows snow
  return <SnowAmbience />
}

export default FallAmbience