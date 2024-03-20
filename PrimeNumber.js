import React, { useState } from 'react';

const PrimeNumber = () => {
  const [primeNumbers, setPrimeNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPrimeNumbers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://20.244.56.144/numbers/primes'); 
      if (!response.ok) {
        throw new Error('Failed to fetch prime numbers');
      }
      const data = await response.json();
      setPrimeNumbers(data.primeNumbers);
    } catch (error) {
      console.error('Error fetching prime numbers:', error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h2>Prime Numbers</h2>
      <button onClick={fetchPrimeNumbers} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Prime Numbers'}
      </button>
      <ul>
        {primeNumbers.map((prime, index) => (
          <li key={index}>{prime}</li>
        ))}
      </ul>
    </div>
  );
};

export default PrimeNumber;
