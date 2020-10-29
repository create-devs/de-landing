import React from 'react';
import logo from '../../images/dhaka-eats-logo.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <a href="/" className={classes.logo}><img src={logo} alt="dhaka-eats-logo"/></a>
                <nav className={classes.navigation}>
                    <ul>
                        <li><a href="#app">Get app</a></li>
                        <li><a href="#top" className={classes.button}>Signup</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
