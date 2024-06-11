import React from 'react';
import CarouselComponent from '../carouselcomponent/carouselcomponent';

const Car = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image paths as needed
  ];

  return (
    <div>
      <h1>React Carousel Example</h1>
      <CarouselComponent images={images} />
    </div>
  );
};

export default Car;
