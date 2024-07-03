import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "./Allpics/Slide1.jpg"
import img2 from "./Allpics/Slide2.jpg"
import img3 from "./Allpics/Slide3.jpg"
import img4 from "./Allpics/Slide4.jpg"
import img5 from "./Allpics/Slide5.jpg"
import img6 from "./Allpics/Slide6.jpg"
export default function CarouselComponent() {
    return (
        <div className="conatiner">
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div className="container-fluid">
                    <img src={img1} alt='...'/>
                </div>
                <div className="container-fluid">
                    <img src={img2} alt='...'/>
                </div>
                <div className="container-sm">
                    <img src={img3} alt='...'/>
                </div>
                <div className="container-fluid">
                    <img src={img4} alt='...'/>
                </div>
                <div className="container-sm">
                    <img src={img5} alt='...'/>
                </div>
                <div className="container-fluid">
                    <img src={img6} alt='...'/>
                </div>
            </Carousel>
        </div>
        </div>
    );
}