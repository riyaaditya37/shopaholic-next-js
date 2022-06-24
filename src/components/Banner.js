import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img loading="lazy" src="https://bit.ly/3ygML5x" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://bit.ly/3A29MKQ" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://bit.ly/3xWyklQ" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;