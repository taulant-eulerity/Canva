import React, { useState, useEffect, useRef } from 'react';

const Count: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const intervalRef: any = useRef();

  useEffect(() => {
    fetchData();
    intervalRef.current = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    alert('Clicked!');
  };

  return (
    <div style={{ padding: 20 }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item: any, index: number) => (
            <li key={index} onClick={handleClick}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
      <div>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <p>Count: {count}</p>
      </div>
    </div>
  );
};

export default Count;
