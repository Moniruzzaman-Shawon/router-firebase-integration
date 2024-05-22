import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>This is home page.</h2>
            <p>Current User is: {user ? user.displayName : 'Nobody'}</p>
        </div>
    );
};

export default Home;