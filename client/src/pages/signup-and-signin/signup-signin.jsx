import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sigun-up/sign-up';

import { SignInAndSignUpContainer } from './sign-in-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;