"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./css/partners.css";

const images = [
  "/assets/img/partners/1.png",
  "/assets/img/partners/2.png",
  "/assets/img/partners/3.png",
  "/assets/img/partners/4.png",
  "/assets/img/partners/5.png",
  "/assets/img/partners/6.png",
  "/assets/img/partners/7.png",
  "/assets/img/partners/8.png",
];

const Partners = () => {
  const size = useWindowSize();
  console.log(size.width);

  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left">
      <div className="foliox_tm_partners w-full h-auto clear-both float-left mb-[160px]">
        <div className="container">
          <div
            className="partners_list tilt-effect wow fadeInUp w-full h-auto clear-both float-left bg-[#432d92] rounded-[12px] py-[70px] px-0"
            data-wow-duration="1s"
          >
            <Carousel
              centerMode
              centerSlidePercentage={(size.width ?? 0) < 768 ? 50 : 20}
              showArrows={false}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              autoPlay={true}
            >
              {images.map((d) => (
                <div
                  key={d}
                  className="item opacity-50 text-center transition-all duration-300 hover:opacity-100"
                >
                  <img className="max-w-[95%] max-h-[180px]" src={d} alt="" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

// Hook
function useWindowSize() {
  interface WindowSize {
    width: undefined | number;
    height: undefined | number;
  }
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
