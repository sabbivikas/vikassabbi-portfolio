
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children, 
  className 
}) => {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'py-16 lowercase opacity-0 will-change-transform',
        visible && 'animate-fade-in',
        className
      )}
    >
      <h2 className="text-2xl mb-8 pb-2 border-b">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
