import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface Drop {
  left: number
  duration: number
  delay: number
}

const RainAmbience: React.FC = () => {
  const { theme } = useTheme()
  const [drops, setDrops] = useState<Drop[]>([])

  useEffect(() => {
    if (theme !== 'rain') return
    // generate a few drops on mount to avoid SSR mismatch
    const d: Drop[] = Array.from({ length: 14 }).map(() => ({
      left: Math.random() * 100,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
    setDrops(d)
  }, [theme])

  if (theme !== 'rain') return null

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {drops.map((d, i) => (
        <span
          key={i}
          className="raindrop"
          style={{
            left: `${d.left}%`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default RainAmbience
