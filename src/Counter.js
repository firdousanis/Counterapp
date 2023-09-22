// src/Counter.js
import React, { useState } from 'react';

function Counter() {
  // Create a state variable 'count' and a function to update it 'setCount'
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to handle decrementing the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
