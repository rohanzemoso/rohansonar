import React from 'react';
import SignUpForm from '../../organisms/SignupForm/index';
import { styled } from '@mui/system';
import {WELCOME} from '../../../utils/constants'
const SignUpTemplateContainer = styled('div')({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '24px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f0f0f0',
});

const Header = styled('header')({
  backgroundColor: '#4caf50',
  color: '#ffffff',
  padding: '16px',
  textAlign: 'center',
});

const Main = styled('main')({
  backgroundColor: '#ffffff',
  padding: '24px',
});

const SignUpTemplate: React.FC = () => (
  <SignUpTemplateContainer>
    <Header>
      <h1>{WELCOME}</h1>
    </Header>
    <Main>
      <SignUpForm />
    </Main>
  </SignUpTemplateContainer>
);

export default SignUpTemplate;
