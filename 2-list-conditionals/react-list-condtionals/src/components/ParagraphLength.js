// Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
import React, { useState, useEffect } from 'react';
import '../css/ParagraphLength.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

export default function ParagraphLength() {
  const [pLength, setPLength] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    setPLength(text.length);
  }, [text]);

  const characterList =
    text.length > 0
      ? text.split('').map((character, index) => {
          return <CharComponent key={index} char={character} />;
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
