import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to to-transparent bottom-0 z-20"/>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image loading="lazy" src="https://links.papareact.com/gi1" alt="Carousel_img1"/>
        </div>
        <div>
          <Image loading="lazy" src="https://links.papareact.com/6ff" alt="Carousel_img2"/>
        </div>
        <div>
          <Image loading="lazy" src="https://links.papareact.com/7ma" alt="Carousel_img3"/>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
