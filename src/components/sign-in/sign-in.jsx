import React from 'react';

import './sign-in-styles.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;

        try{
               await auth.signInWithEmailAndPassword(email,password);
               this.setState({email: '', password: ''});
        }catch(error)
        {
          console.log(error);
        }
    }

    handleChange = (e) => {
            const {value, name} = e.target;

            this.setState({ [name]: value });
    }

    render()
    {
        return(
            <div className="sign-in">
                <h2>I already Have An Account</h2>
                <span>Sign in With Your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} required label="email" />
                    <FormInput type="password" value={this.state.password} required name="password" handleChange={this.handleChange} label="password" />
                    
                    <div className="buttons">
                    <CustomButton type="submit" > Sign In</CustomButton>
                    <CustomButton type="button" onClick={SignInWithGoogle} isGoogleSignIn>{' '} Sign In With Google{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;