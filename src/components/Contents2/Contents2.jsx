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
                            <h1>Search for the best food</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contents2;
