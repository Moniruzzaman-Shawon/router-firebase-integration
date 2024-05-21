import React from 'react';
import { Form } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3>Register Now..</h3>
            <form >
                <input type="name" placeholder='Your name' /><br />
                <input type="email" placeholder='Your email' /><br />
                <input type="password" placeholder='Enter your password' /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;