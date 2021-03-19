import React from 'react';
import './Header.css';
import bdrail from '../../images/bdrail2.jpeg';
const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bdrail})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <p className="lo">BD-Train</p>
                    </li>
                    <li>
                        <a href="/Home">Home</a>
                    </li>
                    <li>
                        <a href="/">Login</a>
                    </li>
                    <li>
                        <a href="/">Book</a>
                    </li>
                    <li>
                        <a href="/">Destination</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;