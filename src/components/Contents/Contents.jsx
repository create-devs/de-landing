import React from 'react';
import frame from '../../images/frame.png';
import screen from '../../images/screen1.png';
import Newslatter from '../Newslatter/Newslatter';
import classes from './Contents.module.css';

const Contents = () => {
    return (
        <section className={[classes.contentsection, 'mt-100'].join(' ')} id="top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className={classes.content}>
                            <h1>Don't know where to eat around Dhaka?</h1>
                            <h4>We've got you covered</h4>
                            <Newslatter/>
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

export default Contents
