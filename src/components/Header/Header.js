import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import handleSignOut from '../../hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {

                    <>
                        <Link to='/login'> Login</Link>
                        <button onClick={() => signOut(auth)}>Sign out</button>
                    </>
                }
            </nav>
        </div>
    );
};

export default Header;