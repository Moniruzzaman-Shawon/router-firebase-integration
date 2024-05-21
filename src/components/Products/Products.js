import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>Product component</h2>
            <h5>{user ? user.displayName : 'Ghost'}</h5>
        </div>
    );
};

export default Products;