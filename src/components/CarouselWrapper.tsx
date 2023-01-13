import React from "react";

// react-responsive-carousel css required
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface CarouselProp {
  children: any;
}

const CarouselWrapper = ({ children }: CarouselProp) => {
  return (
    <Carousel
      // autoPlay={true}
      emulateTouch={true}
      centerMode={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      // interval={5000}
    >
      {children}
    </Carousel>
  );
};

export default CarouselWrapper;
