import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

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
  hasLanded: boolean
  groundPosition?: number
}

const FallAmbience: React.FC = () => {
  const { theme } = useTheme()
  const [leaves, setLeaves] = useState<Leaf[]>([])
  const [groundLeaves, setGroundLeaves] = useState<Leaf[]>([])

  const leafEmojis = {
    maple: '🍁',
    oak: '🍂'
  }

  useEffect(() => {
    if (theme !== 'fall') return
    
    // Generate fewer, cleaner falling leaves (only fall colors)
    const newLeaves: Leaf[] = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 15, // 15-30 seconds for gentle fall
      delay: Math.random() * 20,
      type: ['maple', 'oak'][Math.floor(Math.random() * 2)] as any,
      size: 0.8 + Math.random() * 0.6, // 0.8-1.4x size variation
      rotationSpeed: 1 + Math.random() * 2, // varied rotation speeds
      swayIntensity: 15 + Math.random() * 25, // 15-40px sway
      opacity: 0.6 + Math.random() * 0.4, // 0.6-1.0 opacity
      hasLanded: false
    }))
    setLeaves(newLeaves)

    // Handle leaf landing and ground accumulation
    const interval = setInterval(() => {
      setLeaves(currentLeaves => {
        const landedLeaves: Leaf[] = []
        const stillFallingLeaves = currentLeaves.filter((leaf, index) => {
          const elapsed = Date.now() - (leaf.delay * 1000)
          const shouldLand = elapsed > leaf.duration * 1000

          if (shouldLand && !leaf.hasLanded) {
            landedLeaves.push({
              ...leaf,
              hasLanded: true,
              groundPosition: leaf.left + (Math.random() - 0.5) * 10 // slight scatter on ground
            })
            return false
          }
          return true
        })

        if (landedLeaves.length > 0) {
          setGroundLeaves(prev => [...prev, ...landedLeaves].slice(-20)) // keep max 20 ground leaves
        }

        return stillFallingLeaves
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [theme])

  if (theme !== 'fall') return null

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {/* Falling leaves */}
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
            className="falling-leaf text-2xl"
            style={{
              fontSize: `${leaf.size}rem`,
              opacity: leaf.opacity,
              filter: `sepia(0.3) saturate(1.2) hue-rotate(10deg)`,
            }}
          >
            {leafEmojis[leaf.type]}
          </span>
        </div>
      ))}
      
      {/* Ground leaves */}
      {groundLeaves.map((leaf) => (
        <span
          key={`ground-${leaf.id}`}
          className="absolute bottom-0 transition-all duration-1000 text-xl"
          style={{
            left: `${leaf.groundPosition}%`,
            fontSize: `${leaf.size * 0.8}rem`,
            opacity: leaf.opacity * 0.7,
            filter: `sepia(0.4) saturate(1.1) brightness(0.9)`,
            transform: `rotate(${Math.random() * 60 - 30}deg)`,
            zIndex: Math.floor(Math.random() * 5)
          }}
        >
          {leafEmojis[leaf.type]}
        </span>
      ))}
    </div>
  )
}

export default FallAmbience