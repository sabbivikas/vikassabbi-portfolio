import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import TypewriterGame from './TypewriterGame';
import { useTheme } from 'next-themes';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [showGame, setShowGame] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className={cn('pt-10 pb-8 lowercase', className)}>
      <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.95rem]">
        <a href="/" className="prose-link">home</a>
        <a href="https://vikassabbi.substack.com/" target="_blank" rel="noopener noreferrer" className="prose-link">
          my writing
        </a>
        <a href="https://github.com/sabbivikas" target="_blank" rel="noopener noreferrer" className="prose-link">
          github
        </a>
        <a href="https://www.linkedin.com/in/vikas-sabbi-801010a9/" target="_blank" rel="noopener noreferrer" className="prose-link">
          linkedin
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sabbi.vikas@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="prose-link"
        >
          email
        </a>
        <button type="button" onClick={toggleTheme} className="prose-link">
          {mounted && theme === 'dark' ? 'light mode' : 'dark mode'}
        </button>
        <button
          type="button"
          onClick={() => setShowGame((v) => !v)}
          className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          aria-label="secret game"
        >
          _
        </button>
      </nav>
      {showGame && <TypewriterGame onClose={() => setShowGame(false)} />}
    </header>
  );
};

export default Header;
