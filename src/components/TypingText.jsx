/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function TypingText({ text, speed }) {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setCurrentText(text.substring(0, index + 1));
        setIndex(index + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, index]);

  return <span>{currentText}</span>;
}

export default TypingText;
