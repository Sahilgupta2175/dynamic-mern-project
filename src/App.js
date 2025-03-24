import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    axios.get('http://YOUR_BACKEND_URL')
      .then(response => setMessage(response.data.message))
      .catch(error => setMessage('Error fetching data'));
  }, []);

  return (
    <div>
      <h1>MERN Deployment Tutorial</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;