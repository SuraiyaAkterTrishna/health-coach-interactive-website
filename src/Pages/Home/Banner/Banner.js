import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import doctor1 from '../../../images/banner/doctor1.png';
import doctor2 from '../../../images/banner/doctor2.png';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={doctor1}
                    alt="First slide"
                />
                <Carousel.Caption>
                        <h1>Hi I am Katrina Kaif</h1>
                        <p>Your Personal Coach For Your Better Life.</p>
                        <button className="banner-btn">About Me</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={doctor2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>Hi I am Jennifer Graff!!</h1>
                    <p>Your Personal Coach For Your Better Life.</p>
                    <button className="banner-btn">About Me</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;