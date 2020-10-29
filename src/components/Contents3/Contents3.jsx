import React from 'react';
import frame from '../../images/frame.png';
import screen from '../../images/screen3.png';
import classes from './Contents3.module.css';

const Contents3 = () => {
    return (
        <section className={classes.contentsection3}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className={classes.content}>
                            <h1>Get the info you need</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className={[classes.appscreen, 'floatright'].join(' ')}>
                            <img className={classes.frame} src={frame} alt="frame"/>
                            <img className={classes.screen} src={screen} alt="frame"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contents3;
