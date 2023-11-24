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


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SlideShow = (props) => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1, 
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };
  
    return (
        <div className="main-slide">
            <h1 className="education-heading">Check out my time at RoboSub 2023 with the team! </h1>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
            <img src={im1} alt="1" style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }} />
        </div>
        <div>
            <img src={im2} alt="2" style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }}/>
        </div>
        <div>
            <img src={im3} alt="3" style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }} />
        </div>
        <div>
            <img src={im4} alt="4" style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }} />
        </div>
        <div>
            <img src={im5} alt="5" style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }} />
        </div>
        <div>
            <img src={im6} alt="6" style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }} />
        </div>
      </Carousel>
       </div>
    );
  };
  
  export default SlideShow;
