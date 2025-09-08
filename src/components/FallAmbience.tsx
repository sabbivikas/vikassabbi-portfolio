import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface Leaf {
  left: number
  duration: number
  delay: number
  type: 'maple' | 'oak' | 'birch'
  color: string
  size: number
  rotation: number
}

const FallAmbience: React.FC = () => {
  const { theme } = useTheme()
  const [leaves, setLeaves] = useState<Leaf[]>([])

  const leafEmojis = {
    maple: '🍁',
    oak: '🍂', 
    birch: '🍃'
  }

  const fallColors = [
    '#D2691E', // saddle brown
    '#CD853F', // peru
    '#DAA520', // goldenrod
    '#B22222', // fire brick
    '#228B22', // forest green
    '#FF8C00', // dark orange
    '#DC143C', // crimson
  ]

  useEffect(() => {
    if (theme !== 'fall') return
    
    // Generate beautiful falling leaves
    const newLeaves: Leaf[] = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      duration: 8 + Math.random() * 12, // 8-20 seconds for gentle fall
      delay: Math.random() * 10,
      type: ['maple', 'oak', 'birch'][Math.floor(Math.random() * 3)] as 'maple' | 'oak' | 'birch',
      color: fallColors[Math.floor(Math.random() * fallColors.length)],
      size: 0.8 + Math.random() * 0.8, // 0.8-1.6x size
      rotation: Math.random() * 360
    }))
    setLeaves(newLeaves)
  }, [theme])

  if (theme !== 'fall') return null

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {leaves.map((leaf, i) => (
        <span
          key={i}
          className="falling-leaf absolute text-2xl opacity-80"
          style={{
            left: `${leaf.left}%`,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
            color: leaf.color,
            fontSize: `${leaf.size}rem`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          {leafEmojis[leaf.type]}
        </span>
      ))}
    </div>
  )
}

export default FallAmbience