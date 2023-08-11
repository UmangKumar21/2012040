import React, { useState } from 'react';

const NumberForm = ({ onSubmit }) => {
  const [urls, setUrls] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlList = urls.split('\n').filter((url) => url.trim() !== '');
    onSubmit(urlList);
  };

  return (
    <div>
      <h2>Enter URLs</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="10"
          columns="100"
          placeholder="Kindly enter the URLs here..."
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
        ></textarea>
        <button type="SUBMIT">Submit</button>
      </form>
    </div>
  );
};

export default NumberForm;
