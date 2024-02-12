import React from "react";
import Image from "next/image";

import "./css/hero.css";

const Hero = () => {
  return (
    <div>
      <div
        className="foliox_tm_section w-full h-auto clear-both float-left"
        id="home"
      >
        <div className="foliox_tm_hero w-full h-[100vh] float-left relative">
          <div className="container">
            <div className="content h-[100vh] flex items-center">
              <div className="left w-1/2">
                <h3 className="name text-[120px] leading-[1.1] mb-[25px]">
                  James <span className="text-extra-color">Smith</span>
                </h3>
                <p className="job text-white text-[23px] font-medium font-poppins mb-[50px]">
                  Web Designer based In New York
                </p>
                <div className="foliox_tm_button">
                  <a className="anchor" href="#contact">
                    <span>Get Connected</span>
                  </a>
                </div>
              </div>
              <div className="right w-1/2 pl-[80px]">
                <Image
                  style={{ objectFit: "contain" }}
                  width={600}
                  height={600}
                  className="img tilt-effect max-w-[600px] max-h-[600px]"
                  src="/assets/img/hero/avatar.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
