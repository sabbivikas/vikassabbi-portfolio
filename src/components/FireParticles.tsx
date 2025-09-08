import React, { useEffect, useState } from 'react'

interface FireParticle {
  id: number
  left: number
  duration: number
  delay: number
  type: 'spark' | 'ember' | 'flame'
  size: number
  intensity: number
  opacity: number
}

const FireParticles: React.FC = () => {
  const [particles, setParticles] = useState<FireParticle[]>([])

  const fireEmojis = {
    spark: '✨',
    ember: '🔥', 
    flame: '💥'
  }

  useEffect(() => {
    // Generate beautiful, varied fire particles
    const newParticles: FireParticle[] = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 12, // 8-20 seconds for upward movement
      delay: Math.random() * 10,
      type: ['spark', 'ember', 'flame'][Math.floor(Math.random() * 3)] as any,
      size: 0.6 + Math.random() * 0.8, // 0.6-1.4x size variation
      intensity: 0.3 + Math.random() * 0.7, // varied glow intensity
      opacity: 0.4 + Math.random() * 0.6 // 0.4-1.0 opacity
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fire-particle-container absolute"
          style={{
            left: `${particle.left}%`,
            '--duration': `${particle.duration}s`,
            '--delay': `${particle.delay}s`,
            '--intensity': particle.intensity,
            animationDelay: `${particle.delay}s`,
          } as React.CSSProperties}
        >
          <span
            className="fire-particle text-2xl"
            style={{
              fontSize: `${particle.size}rem`,
              opacity: particle.opacity,
              filter: `brightness(${1 + particle.intensity}) saturate(${1.2 + particle.intensity * 0.5})`,
            }}
          >
            {fireEmojis[particle.type]}
          </span>
        </div>
      ))}
    </div>
  )
}

export default FireParticles