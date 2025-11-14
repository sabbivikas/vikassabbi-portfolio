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
    if (theme === 'light' || theme === 'fall') {
      const newSnowflakes: Snowflake[] = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 10,
        size: 0.6 + Math.random() * 0.8,
        opacity: 0.4 + Math.random() * 0.6,
        drift: 20 + Math.random() * 40,
      }))
      setSnowflakes(newSnowflakes)
    }
  }, [theme])

  if (theme !== 'light' && theme !== 'fall') return null

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
