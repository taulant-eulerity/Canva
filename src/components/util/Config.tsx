// Config.tsx

import React, { useState } from 'react';

const Config: React.FC = () => { 
  const [secretKey, setSecretKey] = useState('12345-12350-31234-3564-32356-1643-3234-67890');

  const handleShowKey = () => {
    alert(`The secret key is: ${secretKey}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Configuration</h1>
      <button onClick={handleShowKey}>Show Secret Key</button>
      <div>
        <label>Secret Key: </label>
        <input
          type="text"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
          style={{ width: '300px' }}
        />
      </div>
    </div>
  );
};

export default Config;
