
import React from 'react';
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
  return (
    <section id={id} className={cn("py-16 lowercase", className)}>
      <h2 className="text-2xl mb-8 pb-2 border-b">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
