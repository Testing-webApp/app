import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from './baseUrl.js';

function TrialPage() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(baseUrl);
        console.log(response)
        setResponse(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Response from server: {response}</p>
    </div>
  );
}

export default TrialPage;
