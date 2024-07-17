import React from 'react';
import SignUpTemplate from '../../components/templates/SignupTemplate/index';
import { styled } from '@mui/system';

const SignUpPageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f0f0f0',
});

const SignUpPage: React.FC = () => (
  <SignUpPageContainer>
    <SignUpTemplate />
  </SignUpPageContainer>
);

export default SignUpPage;
