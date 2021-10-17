import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please register</h2>
            <form>Email:
                <input type="email" placeholder="Enter you email address here" />
                <br /><br />
                Password:
                <input type="password" placeholder="Enter your password" />
                <br /><br />
                <input type="submit" value="Register" />
            </form>
            <br /><br />
            <Link to="/login">Already registered?</Link>
        </div>
    );
};

export default Register;