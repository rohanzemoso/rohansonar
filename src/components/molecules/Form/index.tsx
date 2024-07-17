import React, { useState } from 'react';
import Input from '../../atoms/Inputs/index';
import Button from '../../atoms/Buttons/index';
import { styled } from '@mui/system';

const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  padding: '24px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  maxWidth: '400px',
  margin: '0 auto',
});

const Form: React.FC = () => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    alert(`Form submitted with value: ${value}`);
  };

  return (
    <FormContainer>
      <Input
        placeholder="Enter your name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button label="Submit" onClick={handleSubmit} />
    </FormContainer>
  );
};

export default Form;
