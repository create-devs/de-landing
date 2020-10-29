import React from 'react';
import frame from '../../images/frame.png';
import screen from '../../images/screen4.png';
import playstore from '../../images/google-play.png';
import appstore from '../../images/app-store.png';
import classes from './Contents4.module.css';

const Contents4 = () => {
    return (
        <section className={classes.contentsection4} id="app">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className={[classes.appscreen, 'floatleft'].join(' ')}>
                            <img className={classes.frame} src={frame} alt="frame"/>
                            <img className={classes.screen} src={screen} alt="frame"/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className={classes.content}>
                            <h1>Search for the best food around you</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolor modi deserunt temporibus quam. Odio deleniti, sed sint nostrum illo neque atque illum alias cum molestias, officia vero! Ratione, placeat?</p>
                            <a href="#" className="mr-15">
                                <img src={playstore} alt="playstore"/>
                            </a>
                            <a href="#">
                                <img src={appstore} alt="appstore"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contents4;
