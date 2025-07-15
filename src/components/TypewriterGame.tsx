
import React, { useState, useEffect, useRef } from 'react';
import { X, Crown, Clock, Zap } from 'lucide-react';

interface TypewriterGameProps {
  onClose: () => void;
}

const TypewriterGame: React.FC<TypewriterGameProps> = ({ onClose }) => {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'success' | 'failed'>('intro');
  const [targetText, setTargetText] = useState("terminal");
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(20);
  const [accuracy, setAccuracy] = useState(100);
  const [level, setLevel] = useState(1);
  const [highScore, setHighScore] = useState(() => {
    const savedScore = localStorage.getItem('typewriterHighScore');
    return savedScore ? parseInt(savedScore) : 0;
  });
  const [gameHistory, setGameHistory] = useState<Array<{score: number, level: number, date: string}>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // Creative phrases for different levels
  const levelPhrases = [
    "terminal",
    "terminal console",
    "terminal console command",
    "coding with terminal console",
    "coding with passion and creativity"
  ];

  useEffect(() => {
    // Load game history from localStorage
    const history = localStorage.getItem('typewriterGameHistory');
    if (history) {
      setGameHistory(JSON.parse(history));
    }
  }, []);

  useEffect(() => {
    // Auto-focus the input when the game is in playing state
    if (gameState === 'playing' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameState]);

  useEffect(() => {
    // Timer countdown when playing
    let interval: ReturnType<typeof setInterval>;
    
    if (gameState === 'playing' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && gameState === 'playing') {
      setGameState('failed');
    }
    
    return () => clearInterval(interval);
  }, [gameState, timer]);

  useEffect(() => {
    // Check for success
    if (userInput === targetText && gameState === 'playing') {
      const calculatedScore = Math.floor(accuracy * (timer / 20) * 100 * level);
      setScore(calculatedScore);
      
      // Update high score if needed
      if (calculatedScore > highScore) {
        setHighScore(calculatedScore);
        localStorage.setItem('typewriterHighScore', calculatedScore.toString());
      }
      
      // Save game history
      const newHistory = [...gameHistory, {
        score: calculatedScore,
        level,
        date: new Date().toLocaleDateString()
      }].slice(-5); // Keep only last 5 games
      
      setGameHistory(newHistory);
      localStorage.setItem('typewriterGameHistory', JSON.stringify(newHistory));
      
      setShowConfetti(true);
      setGameState('success');
      
      // Hide confetti after 3 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }
  }, [userInput, targetText, gameState, accuracy, timer, level, highScore, gameHistory]);

  const startGame = () => {
    setTargetText(levelPhrases[Math.min(level - 1, levelPhrases.length - 1)]);
    setGameState('playing');
    setUserInput("");
    setTimer(20);
    setAccuracy(100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
    
    // Calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < value.length; i++) {
      if (i < targetText.length && value[i] === targetText[i]) {
        correctChars++;
      }
    }
    
    const newAccuracy = value.length > 0 ? (correctChars / value.length) * 100 : 100;
    setAccuracy(newAccuracy);
  };

  const nextLevel = () => {
    if (level < 5) {
      setLevel(level + 1);
      resetGame();
    } else {
      // Player beat all levels
      resetGame();
      setLevel(1);
    }
  };

  const resetGame = () => {
    setGameState('intro');
    setUserInput("");
    setScore(0);
    setTimer(20);
    setAccuracy(100);
  };

  return (
    <div className="absolute top-full left-0 mt-2 p-4 bg-white shadow-md rounded-md z-10 min-w-80 border border-muted animate-fade-in">
      {showConfetti && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                width: `${Math.random() * 8 + 5}px`,
                height: `${Math.random() * 8 + 5}px`,
                backgroundColor: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#1A535C', '#FF9F1C'][Math.floor(Math.random() * 5)],
                borderRadius: '50%',
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `fall ${Math.random() * 2 + 1}s linear forwards`,
              }}
            />
          ))}
        </div>
      )}
      
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1">
          <h3 className="text-sm font-medium">Terminal Challenge</h3>
          <span className="text-xs px-1.5 py-0.5 bg-primary/10 text-primary rounded-md">Lvl {level}</span>
        </div>
        <button 
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground"
          aria-label="Close game"
        >
          <X size={16} />
        </button>
      </div>
      
      {gameState === 'intro' && (
        <div className="text-center">
          <p className="text-sm mb-2">Can you type like a developer?</p>
          <p className="text-xs text-muted-foreground mb-3">Level {level}: Type the phrase as quickly and accurately as possible.</p>
          
          {highScore > 0 && (
            <div className="flex items-center justify-center gap-1 mb-3 text-xs">
              <Crown size={14} className="text-yellow-500" />
              <span>High Score: {highScore}</span>
            </div>
          )}
          
          {gameHistory.length > 0 && (
            <div className="mb-3">
              <p className="text-xs font-medium mb-1">Recent games:</p>
              <div className="max-h-20 overflow-y-auto">
                {gameHistory.map((game, index) => (
                  <div key={index} className="flex justify-between text-xs py-0.5 px-2 odd:bg-gray-50">
                    <span>Level {game.level}</span>
                    <span>{game.score} pts</span>
                    <span className="text-muted-foreground">{game.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button 
            onClick={startGame}
            className="bg-primary text-primary-foreground py-1 px-4 rounded-md text-sm hover:bg-primary/90 transition-colors"
          >
            Start Challenge
          </button>
        </div>
      )}
      
      {gameState === 'playing' && (
        <div>
          <div className="flex justify-between text-xs mb-2">
            <div className="flex items-center gap-1">
              <Clock size={14} /> 
              <span>{timer}s</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap size={14} className={accuracy > 80 ? "text-green-500" : accuracy > 50 ? "text-yellow-500" : "text-red-500"} /> 
              <span>{accuracy.toFixed(0)}%</span>
            </div>
          </div>
          <div className="px-2 py-2 bg-secondary rounded-md mb-3 text-center">
            <span className="font-medium text-sm">{targetText}</span>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInputChange}
            className="w-full border border-input px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Type here..."
            autoComplete="off"
          />
          <div className="h-2 mt-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full transition-all duration-300 rounded-full"
              style={{
                width: `${(userInput.length / targetText.length) * 100}%`,
                backgroundColor: accuracy > 80 ? "#10B981" : accuracy > 50 ? "#F59E0B" : "#EF4444"
              }}
            />
          </div>
        </div>
      )}
      
      {gameState === 'success' && (
        <div className="text-center">
          <p className="text-green-500 font-medium mb-1">Success!</p>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xl font-bold">{score}</span> 
            <span className="text-sm text-muted-foreground">points</span>
          </div>
          
          {score > highScore - 10 && (
            <p className="text-xs text-yellow-600 mb-2">
              {score > highScore ? "New high score! 🎉" : "Almost beat your high score!"}
            </p>
          )}
          
          <div className="flex flex-col gap-2">
            {level < 5 ? (
              <button 
                onClick={nextLevel}
                className="bg-primary text-primary-foreground py-1 px-4 rounded-md text-sm hover:bg-primary/90 transition-colors"
              >
                Next Level
              </button>
            ) : (
              <p className="text-sm text-green-600 mb-2">You completed all levels!</p>
            )}
            
            <button 
              onClick={resetGame}
              className="bg-secondary text-secondary-foreground py-1 px-4 rounded-md text-sm hover:bg-secondary/80 transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
      
      {gameState === 'failed' && (
        <div className="text-center">
          <p className="text-red-500 font-medium mb-2">Time's up!</p>
          <p className="text-sm mb-1">Your progress:</p>
          <div className="px-3 py-2 bg-gray-50 rounded-md mb-3 text-sm">
            <span className="text-green-600">{userInput.split('').map((char, i) => 
              i < targetText.length && char === targetText[i] ? char : ''
            ).join('')}</span>
            <span className="text-red-500">{userInput.split('').map((char, i) => 
              i < targetText.length && char !== targetText[i] ? char : ''
            ).join('')}</span>
          </div>
          <button 
            onClick={resetGame}
            className="bg-primary text-primary-foreground py-1 px-4 rounded-md text-sm hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default TypewriterGame;
