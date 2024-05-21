import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>Please login</h3>
            <div style={{ margin: '20px' }}>
                <button>Google Signin</button>
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