import React from 'react';
import './Header.css';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bdrail from '../../images/bdrail2.jpeg';
const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bdrail})` }} className="header">
            <div className="logo-text">
                <h3>BD-Railways</h3>
            </div>
            <div className="List-style">
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Book</Link>
                    </li>
                    <li>
                        <Link className="login-style" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    );
};

export default Header;