import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signinUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signinUsingGoogle}>Google sign in</button>
            <br /><br />
            <Link to="/register">New user?</Link>
        </div>
    );
};

export default Login;