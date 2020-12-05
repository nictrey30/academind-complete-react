// Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
import React, { useState, useEffect } from 'react';
import '../css/ParagraphLength.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';
import { v1 as uuidv1 } from 'uuid';

export default function ParagraphLength() {
  const [pLength, setPLength] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    setPLength(text.length);
  }, [text]);

  const handleChar = (char) => {
    const regex = new RegExp(char, 'g');
    const newText = text.replace(regex, '');
    setText(newText);
  };

  const characterList =
    text.length > 0
      ? text.split('').map((char) => {
          return (
            <CharComponent key={uuidv1()} char={char} handleChar={handleChar} />
          );
        })
      : null;

  return (
    <div className='ParagraphLength'>
      <label htmlFor='inputText'>Input Text</label>
      <input
        type='text'
        id='inputText'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <p>The text has {pLength} characters in it.</p>
      <ValidationComponent pLength={pLength} />
      {characterList}
    </div>
  );
}
