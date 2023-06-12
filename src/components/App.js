import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [textValue, setTextValue] = useState('');
  const [numValue, setNumValue] = useState('');

  const handleTextChange = (e) => {
    const value = e.target.value;
    setTextValue(value);
    console.log(`Input in #text-input is ${value}`);
  };

  const handleNumChange = (e) => {
    const value = e.target.value;
    setNumValue(value);
    console.log(`Input in #num-input is ${value}`);
  };

  return (
    <div>
      <input id="text-input" type="text" onChange={handleTextChange} />
      <br />
      <input id="num-input" type="number" onChange={handleNumChange} />
    </div>
  );
};

export default App;
