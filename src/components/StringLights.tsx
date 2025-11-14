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

  const colors = ['#FFD700', '#FF4444', '#44FF44', '#4444FF', '#FFAA00', '#FF88FF']

  useEffect(() => {
    if (theme === 'dark') {
      const createLights = (count: number) => 
        Array.from({ length: count }).map((_, i) => ({
          id: i,
          position: (i / (count - 1)) * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 3,
          duration: 1.5 + Math.random() * 1.5
        }))

      setLights({
        top: createLights(20),
        bottom: createLights(20),
        left: createLights(15),
        right: createLights(15)
      })
    }
  }, [theme])

  if (theme !== 'dark') return null

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      {/* Wire/string elements */}
      <div className="absolute top-3 left-0 right-0 h-px bg-muted-foreground/10" />
      <div className="absolute bottom-3 left-0 right-0 h-px bg-muted-foreground/10" />
      <div className="absolute left-3 top-0 bottom-0 w-px bg-muted-foreground/10" />
      <div className="absolute right-3 top-0 bottom-0 w-px bg-muted-foreground/10" />
      
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
              <div className="w-1.5 h-2 rounded-full" style={{ backgroundColor: light.color }} />
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
              <div className="w-1.5 h-2 rounded-full" style={{ backgroundColor: light.color }} />
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
              <div className="w-1.5 h-2 rounded-full" style={{ backgroundColor: light.color }} />
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
              <div className="w-1.5 h-2 rounded-full" style={{ backgroundColor: light.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StringLights
