import React from 'react';

import './signup-signin.scss';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sigun-up/sign-up';

const SignInSignUpPage = () => (
    <div className="signin-signup">
            <SignIn />
            <SignUp />
    </div>
);

export default SignInSignUpPage;