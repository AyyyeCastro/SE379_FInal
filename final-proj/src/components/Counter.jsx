import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  };

  const handleAddWithCallback = () => {
    setTimeout(function delay() {
      setCounter((currentCounterValue) => currentCounterValue + 1);
    }, 1000);
  };

  return (
    <div className="flex-column">
      <span>Counter value: {counter}</span>
      <button onClick={handleAdd} className="button">
        Add
      </button>
      <button onClick={() => setCounter(counter - 1)} className="button">
        Subtract
      </button>
      <button onClick={handleAddWithCallback} className="button">
        Add with callback
      </button>
    </div>
  );
};
