import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super();

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email: '', password: ''})
        
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({[name]:value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name='email' 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='email'
                    />
                    <FormInput 
                    type="password" 
                    name='password' 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    />

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isgooglesignin>
                        Sign In with google
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;