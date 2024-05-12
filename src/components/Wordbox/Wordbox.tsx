import React, { useState, useEffect } from 'react';
import './style.css';

interface IWordboxProps {
  word: string;
  onFinish: () => void;
}

const Wordbox: React.FC<IWordboxProps> = ({ word, onFinish }) => {
  const [lettersLeft, setLettersLeft] = useState<string>(word);
  const [mistake, setMistake] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (lettersLeft.length > 0) {
        const firstLetter = lettersLeft.charAt(0);
        if (e.key === firstLetter) {
          setLettersLeft(lettersLeft.slice(1));
          if (lettersLeft.length === 1) {
            onFinish();
          }
          setMistake(false);
        } else {
          setMistake(true);
        }
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [lettersLeft, onFinish]);

  return (
    <div className={`wordbox ${mistake ? 'wordbox--mistake' : ''}`}>{lettersLeft}</div>
  );
};

export default Wordbox;
