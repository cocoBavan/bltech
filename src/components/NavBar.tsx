"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import "./navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  const [showNavBarBG, setShowNavBarBG] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    //console.log(window.scrollY, lastScrollY);
    if (window.scrollY > 20) {
      // Web page goes up
      setShowNavBarBG(true); // Make the
    } else {
      // if scroll up setshowNavBarBG the navbar
      setShowNavBarBG(false);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav>
      <div
        className={`foliox_tm_header fixed top-0 left-0 right-0 z-[10] py-[45px] px-0 transition-all duration-300 ${
          showNavBarBG && "animate"
        }`}
      >
        <div className="container">
          <div className="inner w-full flex items-center justify-between">
            <div className="logo">
              <Link className="anchor" href="#home">
                <Image
                  width={200}
                  height={80}
                  className="max-w-[200px] max-h-[80px] transition-all duration-300"
                  src="/assets/img/logo/logo2.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="details flex items-center">
              <div className="menu">
                <ul className="anchor_nav flex items-center">
                  <li className="current mr-[40px]">
                    <Link
                      className="text-white font-poppins transition-all duration-300 hover:text-extra-color"
                      href="#home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mr-[40px]">
                    <Link
                      className="text-white font-poppins transition-all duration-300 hover:text-extra-color"
                      href="#about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mr-[40px]">
                    <Link
                      className="text-white font-poppins transition-all duration-300 hover:text-extra-color"
                      href="#service"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="mr-[40px]">
                    <Link
                      className="text-white font-poppins transition-all duration-300 hover:text-extra-color"
                      href="#portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="mr-[40px]">
                    <Link
                      className="text-white font-poppins transition-all duration-300 hover:text-extra-color"
                      href="#blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white font-poppins transition-all duration-300 hover:text-extra-color"
                      href="https://www.linkedin.com/in/bavan-palan-83906555/"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="social relative ml-[60px]">
                <ul className="flex items-center">
                  <li className="mr-[12px]">
                    <Link
                      className="text-white transition-all duration-300 hover:text-extra-color"
                      href="#"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                  </li>
                  <li className="mr-[12px]">
                    <Link
                      className="text-white transition-all duration-300 hover:text-extra-color"
                      href="#"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                  </li>
                  <li className="mr-[12px]">
                    <Link
                      className="text-white transition-all duration-300 hover:text-extra-color"
                      href="https://www.youtube.com/@bavan"
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white transition-all duration-300 hover:text-extra-color"
                      href="https://www.linkedin.com/in/bavan-palan-83906555/"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
