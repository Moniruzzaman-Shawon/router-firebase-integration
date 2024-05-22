import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    return (
        <div>
            <h3>Please login</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={handleGoogleSignIn}>Google Sign in</button>
            </div>

            <form>
                <input type="email" placeholder='Your email' /><br />
                <input type="password" placeholder='Enter your password' /><br />
                <input type="submit" value="Login" />
            </form>
        </div >
    );
};

export default Login;