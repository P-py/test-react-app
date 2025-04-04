import React, { useState } from 'react';
import './ClickCounter.css';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Contador de Cliques</h2>
      <div className="counter-display">{count}</div>
      <div className="counter-controls">
        <button onClick={decrementCount}>-</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default ClickCounter;