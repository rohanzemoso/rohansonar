import React from 'react';
import Form from '../../molecules/Form/index';
import { styled } from '@mui/system';
import {SIGN_UP} from '../../../utils/constants'
const SignUpFormContainer = styled('div')({
  maxWidth: '600px',
  margin: '0 auto',
  padding: '24px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
});

const SignUpForm: React.FC = () => (
  <SignUpFormContainer>
    <h2>{SIGN_UP}</h2>
    <Form />
  </SignUpFormContainer>
);

export default SignUpForm;
