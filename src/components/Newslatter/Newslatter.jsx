import React from 'react';
import classes from './Newslatter.module.css';

const Newslatter = () => {
    return (
        <div className={classes.newslatter} id="mc_embed_signup">
            <form action="https://gmail.us17.list-manage.com/subscribe/post?u=7ef462c8ba9a1bdd3fa7c8681&amp;id=8d6fcc0a53" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                    <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Your Email Address" required/>
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                        <input type="text" name="b_7ef462c8ba9a1bdd3fa7c8681_8d6fcc0a53" tabIndex="-1"/>
                    </div>
                    <div className={classes.clear}>
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                    </div>
                </div>
            </form>
            <p>Updates on launch!</p>
        </div>
    )
}

export default Newslatter;
