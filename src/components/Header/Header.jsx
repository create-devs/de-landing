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
                        <li><a href="#top" className={classes.button}>Get Now</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
