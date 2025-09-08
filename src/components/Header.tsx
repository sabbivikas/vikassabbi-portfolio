
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import TypewriterGame from './TypewriterGame';
import { Terminal, User, Briefcase, Award, MessageSquare, Mail, Moon, Sun, CloudRain, Leaf } from 'lucide-react';
import { useTheme } from 'next-themes';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [showGame, setShowGame] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // This useEffect ensures hydration is complete before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleGame = () => {
    setShowGame(!showGame);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('fall');
    } else if (theme === 'fall') {
      setTheme('rain');
    } else if (theme === 'rain') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const renderThemeIcon = () => {
    if (!mounted) return <Sun className={`${iconClass} group-hover:text-primary relative z-10`} />;
    
    switch(theme) {
      case 'fall':
        return <Leaf className={`${iconClass} group-hover:text-primary relative z-10 text-orange-500`} />;
      case 'rain':
        return <CloudRain className={`${iconClass} group-hover:text-primary relative z-10`} />;
      case 'dark':
        return <Moon className={`${iconClass} group-hover:text-primary relative z-10`} />;
      default:
        return <Sun className={`${iconClass} group-hover:text-primary relative z-10`} />;
    }
  };

  const iconClass = "text-foreground transition-all duration-300 w-5 h-5";
  
  return (
    <header className={cn("py-6 flex items-center justify-between lowercase", className)}>
      <div className="relative flex items-center gap-4">
        <div 
          className="flex items-center gap-1.5 cursor-pointer group"
          onClick={toggleGame}
        >
          <Terminal 
            className={`${iconClass} group-hover:text-primary/80 transition-colors group-hover:animate-spin-slow`}
          />
        </div>
        {showGame && <TypewriterGame onClose={() => setShowGame(false)} />}
        
        <div 
          className="cursor-pointer group"
          onClick={toggleTheme}
        >
          <div className="relative transition-all duration-300 group-hover:scale-110">
            {renderThemeIcon()}
            <span className="absolute -inset-1 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            <span className="absolute inset-0 border-2 border-dashed rounded-full border-transparent group-hover:border-primary/30 group-hover:animate-spin-slow"></span>
          </div>
        </div>
      </div>
      <nav className="flex items-center gap-6">
        <a href="#about" className="group relative">
          <User 
            className={`${iconClass} group-hover:text-primary group-hover:scale-[1.2] group-hover:rotate-[360deg]`}
          />
        </a>
        
        <a href="#work" className="group relative">
          <div className="relative">
            <Briefcase className={iconClass + " group-hover:text-primary"} />
            <span className="absolute inset-0 border-2 border-dashed rounded-full border-transparent group-hover:border-primary/30 group-hover:animate-spin-slow"></span>
          </div>
        </a>
        
        <a href="#experience" className="group relative">
          <div className="relative transition-all duration-300 group-hover:scale-110">
            <Award className={iconClass + " group-hover:text-primary"} />
            <span className="absolute -inset-1 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </div>
        </a>
        
        <a href="https://vikassabbi.substack.com/" className="group relative" target="_blank" rel="noopener noreferrer">
          <div className="relative">
            <MessageSquare className={iconClass + " group-hover:text-primary"} />
            <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity group-hover:animate-ping"></span>
          </div>
        </a>
        
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sabbi.vikas@gmail.com" className="group relative" target="_blank" rel="noopener noreferrer">
          <div className="relative overflow-hidden">
            <Mail className={`${iconClass} group-hover:text-primary group-hover:-translate-y-[200%]`} />
            <Mail className={`${iconClass} text-primary absolute top-0 left-0 translate-y-[200%] group-hover:translate-y-0 transition-transform duration-300`} />
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
