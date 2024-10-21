import React, { useState } from 'react';
import './App.css';// Import the separate CSS file

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    if (parseFloat(num2) !== 0) {
      setResult(parseFloat(num1) / parseFloat(num2));
    } else {
      setResult('Cannot divide by zero');
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="input"
      />
      <div className="buttons">
        <button onClick={handleAddition} className="button">+</button>
        <button onClick={handleSubtraction} className="button">-</button>
        <button onClick={handleMultiplication} className="button">*</button>
        <button onClick={handleDivision} className="button">/</button>
      </div>
      <div className="result">
        {result !== null && <h3>Result: {result}</h3>}
      </div>
    </div>
  );
};

export default Calculator;
