import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface Snowflake {
  id: number
  left: number
  duration: number
  delay: number
  size: number
  opacity: number
  drift: number
}

const SnowAmbience: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    const newSnowflakes: Snowflake[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 18 + Math.random() * 16,
      delay: Math.random() * 15,
      size: 0.6 + Math.random() * 0.8,
      opacity: 0.3 + Math.random() * 0.5,
      drift: 15 + Math.random() * 25,
    }))
    setSnowflakes(newSnowflakes)
  }, [theme])

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake-container absolute"
          style={{
            left: `${flake.left}%`,
            '--duration': `${flake.duration}s`,
            '--delay': `${flake.delay}s`,
            '--drift': `${flake.drift}px`,
            animationDelay: `${flake.delay}s`,
          } as React.CSSProperties}
        >
          <span
            className="snowflake text-2xl"
            style={{
              fontSize: `${flake.size}rem`,
              opacity: flake.opacity,
            }}
          >
            ❄️
          </span>
        </div>
      ))}
    </div>
  )
}

export default SnowAmbience
