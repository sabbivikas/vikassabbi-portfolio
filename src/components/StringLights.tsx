import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface Light {
  id: number
  position: number
  color: string
  delay: number
  duration: number
}

const StringLights: React.FC = () => {
  const [lights, setLights] = useState<{ top: Light[], bottom: Light[], left: Light[], right: Light[] }>({
    top: [],
    bottom: [],
    left: [],
    right: []
  })
  const { theme } = useTheme()

  const colors = ['#FFE6A0', '#FFFACD', '#FFF8DC', '#FFD700']

  useEffect(() => {
    if (theme === 'dark') {
      const createLights = (count: number) => 
        Array.from({ length: count }).map((_, i) => ({
          id: i,
          position: 8 + (i / (count - 1)) * 84, // Keep lights within 8-92% range
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 4,
          duration: 2 + Math.random() * 2
        }))

      setLights({
        top: createLights(8),
        bottom: createLights(8),
        left: createLights(6),
        right: createLights(6)
      })
    }
  }, [theme])

  if (theme !== 'dark') return null

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      {/* Wire/string elements - more subtle */}
      <div className="absolute top-4 left-0 right-0 h-px bg-muted-foreground/5" />
      <div className="absolute bottom-4 left-0 right-0 h-px bg-muted-foreground/5" />
      <div className="absolute left-4 top-0 bottom-0 w-px bg-muted-foreground/5" />
      <div className="absolute right-4 top-0 bottom-0 w-px bg-muted-foreground/5" />
      
      {/* Top border lights */}
      <div className="absolute top-0 left-0 right-0 h-8">
        {lights.top.map((light) => (
          <div
            key={`top-${light.id}`}
            className="absolute top-2"
            style={{
              left: `${light.position}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <div
              className="string-light"
              style={{
                '--light-color': light.color,
                '--delay': `${light.delay}s`,
                '--duration': `${light.duration}s`,
                animationDelay: `${light.delay}s`
              } as React.CSSProperties}
            >
              <div className="w-1 h-1.5 rounded-full" style={{ backgroundColor: light.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom border lights */}
      <div className="absolute bottom-0 left-0 right-0 h-8">
        {lights.bottom.map((light) => (
          <div
            key={`bottom-${light.id}`}
            className="absolute bottom-2"
            style={{
              left: `${light.position}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <div
              className="string-light"
              style={{
                '--light-color': light.color,
                '--delay': `${light.delay}s`,
                '--duration': `${light.duration}s`,
                animationDelay: `${light.delay}s`
              } as React.CSSProperties}
            >
              <div className="w-1 h-1.5 rounded-full" style={{ backgroundColor: light.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Left border lights */}
      <div className="absolute left-0 top-0 bottom-0 w-8">
        {lights.left.map((light) => (
          <div
            key={`left-${light.id}`}
            className="absolute left-2"
            style={{
              top: `${light.position}%`,
              transform: 'translateY(-50%)'
            }}
          >
            <div
              className="string-light"
              style={{
                '--light-color': light.color,
                '--delay': `${light.delay}s`,
                '--duration': `${light.duration}s`,
                animationDelay: `${light.delay}s`
              } as React.CSSProperties}
            >
              <div className="w-1 h-1.5 rounded-full" style={{ backgroundColor: light.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Right border lights */}
      <div className="absolute right-0 top-0 bottom-0 w-8">
        {lights.right.map((light) => (
          <div
            key={`right-${light.id}`}
            className="absolute right-2"
            style={{
              top: `${light.position}%`,
              transform: 'translateY(-50%)'
            }}
          >
            <div
              className="string-light"
              style={{
                '--light-color': light.color,
                '--delay': `${light.delay}s`,
                '--duration': `${light.duration}s`,
                animationDelay: `${light.delay}s`
              } as React.CSSProperties}
            >
              <div className="w-1 h-1.5 rounded-full" style={{ backgroundColor: light.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StringLights
