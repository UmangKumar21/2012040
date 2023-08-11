import React, { useState } from 'react';
import './App.css';
import NumberForm from './components/NumberForm';
import NumberList from './components/NumberList';

function App(){
  const [numbers, setNumbers] = useState([]);

  const handleSubmit = async (urls) => {
    const urlParams = urls.map((url) => `url=${encodeURIComponent(url)}`).join('&');
    const response = await fetch(`http://20.244.56.144/numbers/primes?${urlParams}`);
    const data = await response.json();
    setNumbers(data.numbers);
  }

  return (
    <div className="App">
      <h1><b><u>Number Management MicroServices</u></b></h1>
      <NumberForm onSubmit={handleSubmit} />
      <NumberList numbers={numbers} />
    </div>
  );
 
}

export default App;

