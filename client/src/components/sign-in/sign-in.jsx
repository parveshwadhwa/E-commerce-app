import {React, useState} from 'react';

import './sign-in-styles.scss';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { googleSignInStart } from '../../redux/user/user-actions';
import {emailSignInStart} from '../../redux/user/user-actions';

const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    
    const {email, password} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();

        emailSignInStart(email, password);

        // try{
        //        await auth.signInWithEmailAndPassword(email,password);
        //        this.setState({email: '', password: ''});
        // }catch(error)
        // {
        //   console.log(error);
        // }
    }

    const handleChange = (e) => {
            const {value, name} = e.target;

            setCredentials({ ...userCredentials, [name]: value });
    }

        return(
            <div className="sign-in">
                <h2>I already Have An Account</h2>
                <span>Sign in With Your Email and Password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput type="email" name="email" value={email} handleChange={handleChange} required label="email" />
                    <FormInput type="password" value={password} required name="password" handleChange={handleChange} label="password" />
                    
                    <div className="buttons">
                    <CustomButton type="submit" > Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>{' '} Sign In With Google{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);