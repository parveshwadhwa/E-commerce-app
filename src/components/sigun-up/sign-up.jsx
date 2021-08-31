import React, {useState} from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, CreateUserProfileDocument } from '../../firebase/firebase.utils';
import {signUpStart} from '../../redux/user/user-actions';
import { connect } from 'react-redux';

const SignUp = ({signUpStart}) =>
{
   const [userCredentials, setCredentials] = useState({displayName: '', email: '', password: '', confirmPassword: ''});

   const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if(password !== confirmPassword)
        {
        alert("passwords dont match");
        return;
        }

        signUpStart(email, password, displayName);

        // try{
        //            const {user} = await auth.createUserWithEmailAndPassword(email,password);
        //            await CreateUserProfileDocument(user, {displayName});

        //            this.setState({
        //             displayName: '',
        //             email: '',
        //             password: '',
        //             confirmPassword: ''
        //            })
        // }catch(error)
        // {
        //         console.log(error);
        // }


    };

    const handleChange = event => {
        const {name, value} = event.target;
        setCredentials({ ...userCredentials, [name]: value});
    }

        return(
            <div className="sign-up">
                  <h2 className="title">I Don't Have An Account</h2>
                  <span>Sign Up With Your Email And Password</span>

                  <form className="sign-up-form" onSubmit={handleSubmit} >
                     <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Display Name" required />
                     <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
                     <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
                     <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required />

                   <CustomButton type="submit">Sign Up</CustomButton>
                  </form>
            </div>
        )
    }

const mapDispatchToProps = dispatch => ({
    signUpStart: (email,password,displayName) => dispatch(signUpStart({email,password,displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp);
