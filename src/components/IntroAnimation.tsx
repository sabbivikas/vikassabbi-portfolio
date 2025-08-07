
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface IntroAnimationProps {
  onComplete?: () => void;
  className?: string;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ 
  onComplete,
  className
}) => {
  const [currentText, setCurrentText] = useState('');
  const [fullText, setFullText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const phrases = [
    "create like a child",
    "edit like a scientist",
    "portfolio."
  ];
  
// Safety timer to prevent the animation from getting stuck
  const safetyTimerRef = useRef<NodeJS.Timeout | null>(null);
  const completionRef = useRef<boolean>(false);

  const complete = () => {
    if (!completionRef.current && onComplete) {
      completionRef.current = true;
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
      onComplete();
    }
  };
  
  // Set a safety timeout that will force completion after 8 seconds
  useEffect(() => {
    safetyTimerRef.current = setTimeout(() => {
      complete();
    }, 8000);
    
    return () => {
      if (safetyTimerRef.current) {
        clearTimeout(safetyTimerRef.current);
      }
    };
  }, [onComplete]);

  // keyboard: press 's' or 'Escape' to skip
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 's' || e.key === 'Escape') {
        complete();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    // Set current phrase to type
    setFullText(phrases[phraseIndex]);
    
    // Handle typing effect
    const typeTimer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(prev => {
          const next = fullText.slice(0, prev.length + 1);
          
          // If we've typed the full text, pause before deleting
          if (next === fullText) {
            setTypingSpeed(600);
            
            // If we're at the last phrase (portfolio), complete the animation
            if (phraseIndex === phrases.length - 1) {
              // Wait a moment on "portfolio" before completing
              setTimeout(() => {
                complete();
              }, 800);
              return next;
            }
            
            setTimeout(() => {
              setIsDeleting(true);
              setTypingSpeed(50);
            }, 600);
          }
          
          return next;
        });
      } else {
        // Deleting
        setCurrentText(prev => {
          const next = fullText.slice(0, prev.length - 1);
          
          // If we've deleted everything, move to next phrase
          if (next === '') {
            setIsDeleting(false);
            setPhraseIndex(prevIndex => {
              const nextIndex = prevIndex + 1;
              setTypingSpeed(80);
              return nextIndex;
            });
          }
          
          return next;
        });
      }
    }, typingSpeed);

    return () => clearTimeout(typeTimer);
  }, [currentText, fullText, isDeleting, onComplete, phraseIndex, phrases, typingSpeed]);

  return (
    <div className={cn("fixed inset-0 bg-background flex items-center justify-center z-50", className)}>
      {/* Skip button */}
      {onComplete && (
        <button
          onClick={complete}
          className="absolute top-4 right-4 px-3 py-1.5 text-sm border rounded-md hover-scale"
          aria-label="Skip intro"
        >
          skip
        </button>
      )}
      <div className="text-center relative">
        <div className="absolute inset-0 opacity-10">
          <div className="w-32 h-32 border border-foreground/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
          <div className="w-24 h-24 border border-foreground/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '12s'}}></div>
        </div>
        <h1 className="text-4xl md:text-4xl sm:text-3xl xs:text-2xl font-serif relative z-10 lowercase">
          {currentText}
          <span className="absolute right-[-0.5ch] animate-cursor-blink">|</span>
        </h1>
      </div>
    </div>
  );
};

export default IntroAnimation;
