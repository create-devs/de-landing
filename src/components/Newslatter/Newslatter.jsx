import React from 'react';
import classes from './Newslatter.module.css';

const Newslatter = () => {
    return (
        <div className={classes.newslatter}>
            <form action="https://gmail.us17.list-manage.com/subscribe/post?u=7ef462c8ba9a1bdd3fa7c8681&amp;id=8d6fcc0a53" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <input type="email" placeholder="Your Email Address" required/>
                <button type="submit">Signup</button>
            </form>
            <p>Updates on launch!</p>
        </div>
    )
}

export default Newslatter
