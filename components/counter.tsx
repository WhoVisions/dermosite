'use client';

import { useState } from 'react';
import { Button } from './button';

interface CounterProps {
  initialCount?: number;
}

export const Counter = ({ initialCount = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(initialCount);
  };

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Interactive Counter</h3>
      <div className="flex flex-col items-center gap-4">
        <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">
          {count}
        </div>
        <div className="flex gap-3">
          <Button
            onClick={handleDecrement}
            variant="secondary"
            size="md"
            ariaLabel="Decrement counter"
          >
            -
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            size="md"
            ariaLabel="Reset counter"
          >
            Reset
          </Button>
          <Button
            onClick={handleIncrement}
            variant="primary"
            size="md"
            ariaLabel="Increment counter"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
