// Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
import React, { useState, useEffect } from 'react';
import './ParagraphLength.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

export default function ParagraphLength() {
  const [pLength, setPLength] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    setPLength(text.length);
  }, [text]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText.replace(/\s/g, '_'));
  };

  const handleDeleteChar = (index) => {
    const newText = text.split('');
    // The splice() method adds/removes items to/from an array, and returns the removed item(s).
    newText.splice(index, 1);
    setText(newText.join(''));
  };

  const characterList =
    text.length > 0
      ? text.split('').map((char, index) => {
          return (
            <CharComponent
              key={index}
              char={char}
              // pass args to function-props
              handleDeleteChar={() => handleDeleteChar(index)}
            />
          );
        })
      : null;

  return (
    <div className='ParagraphLength'>
      <label htmlFor='inputText'>Input Text</label>
      <input
        type='text'
        id='inputText'
        // the event is passed automatically to handleInputChange
        onChange={handleInputChange}
        value={text}
      />
      <p>The text has {pLength} characters in it.</p>
      <ValidationComponent pLength={pLength} />
      {characterList}
    </div>
  );
}
