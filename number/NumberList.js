import React from 'react';

const NumberList = ({ numbers }) => {
  return (
    <div>
      <h2>Extracted Numbers</h2>
      <ul>
        {numbers.map((number, i) => (
          <li key={i}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
