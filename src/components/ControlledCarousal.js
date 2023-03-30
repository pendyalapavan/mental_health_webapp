import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
      <Carousel.Item>
        <img
          className="img-responsive d-block w-100"
          src="https://www.kansashealthsystem.com/-/media/Project/Website/Hero/Care_DoctorPatient_AS230454605_hero.jpg?h=586&w=1440&la=en&hash=0C6ABBA9D22560651D926011D18EEE46F7FD25C5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Get an Appointment</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mental-health-podcasts-1610659657.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Podcasts</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/favorite-health-finds/social/2223-LLB_FHF_Anxiety-1296x728-header.jpg?w=1155&h=1528"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Products</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;