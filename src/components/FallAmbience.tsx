import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface Leaf {
  id: number
  left: number
  duration: number
  delay: number
  type: 'maple' | 'oak' | 'birch' | 'elm'
  size: number
  rotationSpeed: number
  swayIntensity: number
  opacity: number
}

const FallAmbience: React.FC = () => {
  const { theme } = useTheme()
  const [leaves, setLeaves] = useState<Leaf[]>([])

  const leafEmojis = {
    maple: '🍁',
    oak: '🍂', 
    birch: '🍃',
    elm: '🌿'
  }

  useEffect(() => {
    if (theme !== 'fall') return
    
    // Generate beautiful, varied falling leaves
    const newLeaves: Leaf[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 12 + Math.random() * 20, // 12-32 seconds for very gentle fall
      delay: Math.random() * 15,
      type: ['maple', 'oak', 'birch', 'elm'][Math.floor(Math.random() * 4)] as any,
      size: 0.6 + Math.random() * 1.2, // 0.6-1.8x size variation
      rotationSpeed: 0.5 + Math.random() * 2, // varied rotation speeds
      swayIntensity: 20 + Math.random() * 40, // 20-60px sway
      opacity: 0.4 + Math.random() * 0.6 // 0.4-1.0 opacity
    }))
    setLeaves(newLeaves)
  }, [theme])

  if (theme !== 'fall') return null

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