import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import FireParticles from './FireParticles'

interface Leaf {
  id: number
  left: number
  duration: number
  delay: number
  type: 'maple' | 'oak'
  size: number
  rotationSpeed: number
  swayIntensity: number
  opacity: number
}

const FallAmbience: React.FC = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([])
  const { theme } = useTheme()

  const leafEmojis = {
    maple: '🍁',
    oak: '🍂'
  }

  useEffect(() => {
    // Only generate leaves if not in dark mode
    if (theme !== 'dark') {
      const newLeaves: Leaf[] = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 12 + Math.random() * 18, // 12-30 seconds for gentle fall
        delay: Math.random() * 15,
        type: ['maple', 'oak'][Math.floor(Math.random() * 2)] as any,
        size: 0.8 + Math.random() * 1.0, // 0.8-1.8x size variation
        rotationSpeed: 0.5 + Math.random() * 2, // varied rotation speeds
        swayIntensity: 20 + Math.random() * 40, // 20-60px sway
        opacity: 0.5 + Math.random() * 0.5 // 0.5-1.0 opacity
      }))
      setLeaves(newLeaves)
    }
  }, [theme])

  // Show fire particles in dark mode, leaves in light mode
  if (theme === 'dark') {
    return <FireParticles />
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="falling-leaf-container absolute"
          style={{
            left: `${leaf.left}%`,
            '--duration': `${leaf.duration}s`,
            '--delay': `${leaf.delay}s`,
            '--sway': `${leaf.swayIntensity}px`,
            '--rotation-speed': `${leaf.rotationSpeed}s`,
            animationDelay: `${leaf.delay}s`,
          } as React.CSSProperties}
        >
          <span
            className="falling-leaf text-3xl"
            style={{
              fontSize: `${leaf.size}rem`,
              opacity: leaf.opacity,
              filter: `hue-rotate(${Math.random() * 60 - 30}deg) brightness(${0.8 + Math.random() * 0.4})`,
            }}
          >
            {leafEmojis[leaf.type]}
          </span>
        </div>
      ))}
    </div>
  )
}

export default FallAmbience