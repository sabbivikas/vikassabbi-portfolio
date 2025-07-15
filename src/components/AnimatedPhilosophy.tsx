
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedPhilosophyProps {
  className?: string;
}

const AnimatedPhilosophy: React.FC<AnimatedPhilosophyProps> = ({ className }) => {
  return (
    <div id="philosophy-section" className={cn("p-6", className)}>
      <div>
        {/* Static text with no animations */}
        <p className="text-xl font-medium text-center">
          vasudhaiva kutumbakam
        </p>
        
        {/* Static translation with no animations */}
        <p className="text-sm text-center text-muted-foreground mt-2">
          the world is one family
        </p>
        
        {/* Only the spinning globe remains animated */}
        <div className="flex justify-center mt-4">
          <span className="text-4xl animate-spin-slow inline-block">🌍</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPhilosophy;
