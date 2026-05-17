import React from 'react'
import { useTheme } from 'next-themes'
import StringLights from './StringLights'
import SnowAmbience from './SnowAmbience'

const FallAmbience: React.FC = () => {
  const { theme } = useTheme()

  // Show different effects based on theme
  if (theme === 'dark') {
    return (
      <>
        <StringLights />
        <SnowAmbience />
      </>
    )
  }

  // Light mode shows snow
  return <SnowAmbience />
}

export default FallAmbience
