import React from 'react';
import logo from '../../images/dhaka-eats-logo.png';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className="centered">
                    <a href="#" className={classes.footerlogo}><img src={logo} alt="logo"/></a>
                    <div className={classes.social}>
                        <a href="http://bit.ly/dhaka-fb"><i className="fab fa-facebook-f"></i></a>
                        <a href="http://bit.ly/de-insta"><i className="fab fa-instagram"></i></a>
                        <a href="http://bit.ly/dhaka-yt"><i className="fab fa-youtube"></i></a>
                    </div>
                    <p>&copy; 2021 CreateDevs LLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
