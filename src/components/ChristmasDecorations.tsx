import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface Decoration {
  id: number
  left: number
  top: number
  duration: number
  delay: number
  type: 'ornament' | 'star' | 'light'
  emoji: string
  size: number
  opacity: number
  swayIntensity: number
}

const ChristmasDecorations: React.FC = () => {
  const [decorations, setDecorations] = useState<Decoration[]>([])
  const { theme } = useTheme()

  const decorationEmojis = {
    ornament: ['🎄', '🎁', '⛄', '🦌', '🎅'],
    star: ['⭐', '✨', '🌟'],
    light: ['💡', '🕯️', '🔮']
  }

  useEffect(() => {
    if (theme === 'dark') {
      const newDecorations: Decoration[] = Array.from({ length: 12 }).map((_, i) => {
        const type = ['ornament', 'star', 'light'][Math.floor(Math.random() * 3)] as 'ornament' | 'star' | 'light'
        const emojiSet = decorationEmojis[type]
        
        return {
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 80,
          duration: 3 + Math.random() * 4,
          delay: Math.random() * 8,
          type,
          emoji: emojiSet[Math.floor(Math.random() * emojiSet.length)],
          size: 0.8 + Math.random() * 1.2,
          opacity: 0.6 + Math.random() * 0.4,
          swayIntensity: 10 + Math.random() * 20,
        }
      })
      setDecorations(newDecorations)
    }
  }, [theme])

  if (theme !== 'dark') return null

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {decorations.map((decoration) => (
        <div
          key={decoration.id}
          className="christmas-decoration absolute"
          style={{
            left: `${decoration.left}%`,
            top: `${decoration.top}%`,
            '--duration': `${decoration.duration}s`,
            '--delay': `${decoration.delay}s`,
            '--sway': `${decoration.swayIntensity}px`,
            animationDelay: `${decoration.delay}s`,
          } as React.CSSProperties}
        >
          <span
            className="decoration-emoji text-3xl"
            style={{
              fontSize: `${decoration.size}rem`,
              opacity: decoration.opacity,
              filter: decoration.type === 'light' ? 'brightness(1.4)' : 'none',
            }}
          >
            {decoration.emoji}
          </span>
        </div>
      ))}
    </div>
  )
}

export default ChristmasDecorations
