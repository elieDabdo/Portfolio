import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slide.css'
import im1 from "../assets/robosub/im1.jpg";
import im2 from "../assets/robosub/im2.jpg";
import im3 from "../assets/robosub/im3.jpg";
import im4 from "../assets/robosub/im4.jpg";
import im5 from "../assets/robosub/im5.jpg";
import im6 from "../assets/robosub/im6.jpg";


const SlideShow = () => {
    const images = [
        im1,
        im2,
        im3,
        im4,
        im5,
        im6,
    ];

    return (
        <div className="main-slide">
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                </div>
            </div>
        </Slide>
        </div>
    );
};

export default SlideShow;