import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import ChristmasDecorations from './ChristmasDecorations'
import RainAmbience from './RainAmbience'

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
  haiku?: string
}

const FallAmbience: React.FC = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([])
  const [hoveredLeaf, setHoveredLeaf] = useState<number | null>(null)
  const { theme } = useTheme()

  const leafEmojis = {
    maple: '🍁',
    oak: '🍂'
  }

  const philosophicalQuotes = [
    "The world is one family\n— Vasudhaiva Kutumbakam",
    "Autumn teaches us\nLetting go is beautiful\nChange brings new growth",
    "Every falling leaf\nCarries wisdom of seasons\nTime flows like stories",
    "In unity we find\nStrength beyond our differences\nOne earth, one heartbeat", 
    "Stories connect souls\nAcross cultures and borders\nHumanity's thread",
    "Each leaf's journey down\nMirrors our own path in life\nGraceful transitions",
    "Words bridge distant hearts\nLike leaves floating on the wind\nSharing truth and love",
    "From one tree, many leaves\nFrom one world, many people\nDiversity in unity"
  ]

  useEffect(() => {
    // Only generate leaves for light/fall themes
    if (theme === 'light' || theme === 'fall') {
      const newLeaves: Leaf[] = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 12 + Math.random() * 18, // 12-30 seconds for gentle fall
        delay: Math.random() * 15,
        type: ['maple', 'oak'][Math.floor(Math.random() * 2)] as any,
        size: 0.8 + Math.random() * 1.0, // 0.8-1.8x size variation
        rotationSpeed: 0.5 + Math.random() * 2, // varied rotation speeds
        swayIntensity: 20 + Math.random() * 40, // 20-60px sway
        opacity: 0.5 + Math.random() * 0.5, // 0.5-1.0 opacity
        haiku: Math.random() > 0.4 ? philosophicalQuotes[Math.floor(Math.random() * philosophicalQuotes.length)] : undefined
      }))
      setLeaves(newLeaves)
    }
  }, [theme])

  // Show different effects based on theme
  if (theme === 'dark') {
    return <ChristmasDecorations />
  }
  
  if (theme === 'rain') {
    return <RainAmbience />
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={`falling-leaf-container absolute transition-all duration-300 ${hoveredLeaf === leaf.id ? 'animate-pause' : ''}`}
          style={{
            left: `${leaf.left}%`,
            '--duration': `${leaf.duration}s`,
            '--delay': `${leaf.delay}s`,
            '--sway': `${leaf.swayIntensity}px`,
            '--rotation-speed': `${leaf.rotationSpeed}s`,
            animationDelay: `${leaf.delay}s`,
            animationPlayState: hoveredLeaf === leaf.id ? 'paused' : 'running',
          } as React.CSSProperties}
        >
          <div className="relative">
            <span
              className="falling-leaf text-3xl cursor-pointer pointer-events-auto relative z-20"
              style={{
                fontSize: `${leaf.size}rem`,
                opacity: leaf.opacity,
                filter: `hue-rotate(${Math.random() * 60 - 30}deg) brightness(${0.8 + Math.random() * 0.4})`,
              }}
              onMouseEnter={() => leaf.haiku && setHoveredLeaf(leaf.id)}
              onMouseLeave={() => setHoveredLeaf(null)}
            >
              {leafEmojis[leaf.type]}
            </span>
            {leaf.haiku && hoveredLeaf === leaf.id && (
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 min-w-48 shadow-lg z-30 pointer-events-none">
                <p className="text-xs leading-relaxed whitespace-pre-line text-foreground font-medium">
                  {leaf.haiku}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FallAmbience