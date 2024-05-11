import React, { useState, useEffect } from 'react';
import './style.css';

interface IWordboxProp {
  word: string;
}

const Wordbox : React.FC<IWordboxProp> = ({ word }) => {
  const [lettersLeft, setLettersLeft] = useState<string>(word);  

  useEffect(() => {

    const handleKeyUp = (e: KeyboardEvent) => {
      if (lettersLeft.length > 0) {
        const firstLetter = lettersLeft.charAt(0);
        if (e.key === firstLetter) {
          setLettersLeft(lettersLeft.slice(1));
        }
      }
      console.log('ZMAČKNUTO:', e.key);
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [lettersLeft]);
  
  return (
    <div className="wordbox">{lettersLeft}</div>
  );
};

export default Wordbox;
