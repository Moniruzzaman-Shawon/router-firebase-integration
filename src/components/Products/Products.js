import React from 'react';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(app);

const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Product component</h2>
            <h5>{user ? user.displayName : 'Ghost'}</h5>
        </div>
    );
};

export default Products;