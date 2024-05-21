import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import useFirebase from '../../hooks/useFirebase';
import handleSignOut from '../../hooks/useFirebase';



const Header = () => {
    const { user, handleSignOut } = useFirebase();
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
                        <Link to='/login'>Login</Link>
                        <button onClick={handleSignOut}>Sign out</button>
                    </>
                }
            </nav>
        </div>
    );
};

export default Header;