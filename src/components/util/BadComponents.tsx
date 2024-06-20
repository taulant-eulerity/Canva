// BadComponent.tsx

import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: ${(props: any) => props.bg || 'white'};
  color: ${(props: any) => props.color || 'black'};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.button`
  background-color: ${(props: any) => props.bg || 'blue'};
  color: ${(props: any) => props.color || 'white'};
  border: none;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Txt = styled.p`
  font-size: 1.5rem;
`;

const BadComponent: React.FC = () => {
  const [count, setCount] = useState<any>(0);
  const [txt, setTxt] = useState<any>('Hello World');
  const [bg, setBg] = useState<any>('lightgray');

  const handleClick = () => {
    setCount((c: any) => c + 1);
    setTxt((t: any) => t + '!');
    setBg((b: any) => (b === 'lightgray' ? 'lightblue' : 'lightgray'));
  };

  return (
    <Div color="darkslategray">
      <Txt>{txt}</Txt>
      <Txt>Count: {count}</Txt>
      <Btn onClick={handleClick} color="white">
        Click me
      </Btn>
      <Btn onClick={() => setCount(0)}  color="white">
        Reset
      </Btn>
    </Div>
  );
};

export default BadComponent;
