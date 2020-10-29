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
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-pinterest-p"></i></a>
                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <p>Copyright &copy; 2020. All rights reserved Dhakaeats.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
