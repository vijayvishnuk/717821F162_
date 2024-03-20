import React, { useState } from 'react';

const Fibo = () => {
  const [fibonacciNumbers, setFibonacciNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const Fibonacci = async (limit) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://20.244.56.144/numbers/fibo?limit=${limit}`); 
      if (!response.ok) {
        throw new Error('Failed to fetch Fibonacci numbers');
      }
      const data = await response.json();
      setFibonacciNumbers(data.fibonacciNumbers);
    } catch (error) {
      console.error('Error fetching Fibonacci numbers:', error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h2>Fibonacci Numbers</h2>
      <button onClick={() => Fibonacci(20)} disabled={isLoading}>
        {isLoading ? "Loading..." : 'Fetch Fibonacci Numbers'}
      </button>
      <ul>
        {fibonacciNumbers.map((fibonacci, index) => (
          <li key={index}>{fibonacci}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fibo;
