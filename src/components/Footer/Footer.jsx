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
                        <a href="https://www.facebook.com/dhakaeats"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/dhaka_eats/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UCJuOlzFwbYttiPWxGGbA36w/"><i className="fab fa-youtube"></i></a>
                    </div>
                    <p>&copy; 2022 CreateDevs LLC. All rights reserved. Google Play and the Google Play logo are trademarks of Google LLC.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
