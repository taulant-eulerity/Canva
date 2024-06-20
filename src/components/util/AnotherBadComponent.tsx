// AnotherBadComponent.tsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;

`;

const Button = styled.button`
  padding: 5px 10px;

  color: white;
`;

const Label = styled.label`
  font-size: 14px;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AnotherBadComponent: React.FC = () => {
  const [userName, setUserName] = useState<string>('John Doe');
  const [age, setAge] = useState<number>(25);
  const [isPrimary, setIsPrimary] = useState<boolean>(true);

  useEffect(() => {
    console.log('Component did mount');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const togglePrimary = () => {
    setIsPrimary(!isPrimary);
  };

  return (
    <Container >
      <div>
        <Label>Username:</Label>
        <Input value={userName} onChange={handleInputChange} />
      </div>
      <div>
        <Label>Age:</Label>
        <Input value={age.toString()} onChange={(e) => setAge(parseInt(e.target.value))} />
      </div>
      <Button onClick={togglePrimary}>
        Toggle Primary
      </Button>
    </Container>
  );
};

export default AnotherBadComponent;
