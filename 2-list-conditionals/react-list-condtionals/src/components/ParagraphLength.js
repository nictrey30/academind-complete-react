// Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
import React, { useState, useEffect } from 'react';
import '../css/ParagraphLength.css';

export default function ParagraphLength() {
  const [pLength, setPLength] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    setPLength(text.length);
  }, [text]);

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
    </div>
  );
}
