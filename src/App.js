import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const numChange = () => {
    setNumber(i => i+1);
  };
  const onClick = () => setInc(i => i + 1);
  
  return (
    <div className='App'>
      <button onClick={numChange}>Increase value by 1</button>
      Factorial of {number} is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default App;