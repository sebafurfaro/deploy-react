import React from 'react';
import '../App.scss';
import {Button} from './Button';

function Hero() {
    return (
        <div className="hero-container">
            <video
                src="https://s3.amazonaws.com/webflow.io/geopagos.mp4"
                autoPlay
                loop
                muted></video>
            <h1>Adventure waits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn-outline"
                    buttonSize="btn-large">Get starting</Button>
                    <Button
                    className="btns"
                    buttonStyle="btn-primary"
                    buttonSize="btn-large">Watch trailer</Button>
            </div>
        </div>
    )
}

export default Hero;
