import React from 'react';

import './sign-in-styles.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

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

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = (e) => {
            const {value, name} = e.target;

            this.setState({ [name]: value })
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

                    <CustomButton type="submit" > Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;