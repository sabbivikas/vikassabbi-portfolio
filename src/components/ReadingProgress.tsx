import React, { useEffect, useState } from 'react'

const clamp = (n: number, min = 0, max = 100) => Math.max(min, Math.min(max, n))

const ReadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(clamp(pct))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div aria-hidden className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-muted/30">
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        style={{ width: `${progress}%`, transition: 'width 120ms ease' }}
        className="h-full bg-primary"
      />
    </div>
  )
}

export default ReadingProgress
