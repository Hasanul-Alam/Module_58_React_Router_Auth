import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/register">Register</Link>
            <span>{user.displayName} </span>
            <Link to="/login">Login</Link>
            {user?.email && <button onClick={logout}>Logout</button>}
        </div>
    );
};

export default Header;