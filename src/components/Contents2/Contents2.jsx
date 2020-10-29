import React from 'react';
import frame from '../../images/frame.png';
import screen from '../../images/screen2.png';
import classes from './Contents2.module.css';

const Contents2 = () => {
    return (
        <section className={classes.contentsection2}>
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
                            <h1>Read Reviews from real people</h1>
                            <h4>We've got you covered</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolor modi deserunt temporibus quam. Odio deleniti, sed sint nostrum illo neque atque illum alias cum molestias, officia vero! Ratione, placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, dolores fugit impedit excepturi a deserunt quas nulla aliquam aliquid est officia quibusdam vitae veniam odio similique enim, reprehenderit praesentium.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contents2;
