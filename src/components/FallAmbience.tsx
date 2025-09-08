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
  const [cleaningLeaves, setCleaningLeaves] = useState<Set<number>>(new Set())

  const leafEmojis = {
    maple: '🍁',
    oak: '🍂'
  }

  const handleLeafClick = (leafId: number) => {
    setCleaningLeaves(prev => new Set([...prev, leafId]))
    
    // Remove leaf after animation
    setTimeout(() => {
      setGroundLeaves(prev => prev.filter(leaf => leaf.id !== leafId))
      setCleaningLeaves(prev => {
        const newSet = new Set(prev)
        newSet.delete(leafId)
        return newSet
      })
    }, 300)
  }

  const handleGroundClick = () => {
    if (groundLeaves.length === 0) return
    
    // Clean all leaves with staggered animation
    groundLeaves.forEach((leaf, index) => {
      setTimeout(() => {
        setCleaningLeaves(prev => new Set([...prev, leaf.id]))
      }, index * 50)
      
      setTimeout(() => {
        setGroundLeaves(prev => prev.filter(l => l.id !== leaf.id))
        setCleaningLeaves(prev => {
          const newSet = new Set(prev)
          newSet.delete(leaf.id)
          return newSet
        })
      }, index * 50 + 300)
    })
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
      
      {/* Interactive ground leaves - click to clean! */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-auto cursor-pointer z-20"
        onClick={handleGroundClick}
        title="Click to clean up the leaves! 🍂"
      >
        {groundLeaves.map((leaf) => (
          <span
            key={`ground-${leaf.id}`}
            className={`absolute bottom-0 transition-all duration-300 text-xl hover:scale-110 cursor-pointer pointer-events-auto ${
              cleaningLeaves.has(leaf.id) ? 'animate-pulse opacity-0 scale-0' : ''
            }`}
            style={{
              left: `${leaf.groundPosition}%`,
              fontSize: `${leaf.size * 0.8}rem`,
              opacity: cleaningLeaves.has(leaf.id) ? 0 : leaf.opacity * 0.7,
              filter: `sepia(0.4) saturate(1.1) brightness(0.9)`,
              transform: `rotate(${Math.random() * 60 - 30}deg) ${cleaningLeaves.has(leaf.id) ? 'scale(0)' : 'scale(1)'}`,
              zIndex: Math.floor(Math.random() * 5)
            }}
            onClick={(e) => {
              e.stopPropagation()
              handleLeafClick(leaf.id)
            }}
          >
            {leafEmojis[leaf.type]}
          </span>
        ))}
      </div>
    </div>
  )
}

export default FallAmbience