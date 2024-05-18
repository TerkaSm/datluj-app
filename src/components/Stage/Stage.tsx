import { useState } from 'react';
import Wordbox from '../Wordbox/Wordbox';
import wordList from '../../word-list';
import './style.css';

const generateWord = (size: number) => {
  const sizeIndex = size === undefined
    ? Math.floor(Math.random() * wordList.length)
    : size - 3;

  if (sizeIndex < 0 || sizeIndex >= wordList.length) {
    return null;
  }

  const words = wordList[sizeIndex];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

const Stage: React.FC = () => {
  const [words, setWords] = useState<string[]>(['jahoda', 'kokosy', 'meloun']);
  const [mistakes, setMistakes] = useState<number>(0);

  const handleFinish = () => {
    const newWord = generateWord(6);
    if (newWord) {
      setWords((prevWords) => [...prevWords.slice(1), newWord]);
    }
  };

  const handleMistake = () => {
    setMistakes((prevMistakes) => prevMistakes + 1);
  }

  return (
    <div className="stage">
      <div className="stage__mistakes">Chyb: {mistakes}</div>
      <div className="stage__words">
        {words && words.map((word, index) => (
          <Wordbox
            word={word}
            key={word}
            onFinish={handleFinish}
            active={index === 0}
            onMistake={handleMistake}
          />
        ))}
      </div>
    </div>
  );
};

export default Stage;

