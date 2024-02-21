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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleClick = () => {
    setIsMobileOpen(!isMobileOpen);
  };

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

      <div className="foliox_tm_mobile_menu w-full h-auto fixed top-0 left-0 hidden z-[10]">
        <div className="mobile_menu_inner w-full h-auto clear-both float-left bg-[#1e1345] border-solid border-[rgba(255,255,255,.1)] border py-[10px] px-[20px]">
          <div className="mobile_in w-full h-auto clear-both float-left flex items-center justify-between">
            <div className="logo">
              <a href="#">
                <img
                  className="max-w-[120px] max-h-[70px]"
                  src="/assets/img/logo/logo2.png"
                  alt=""
                />
              </a>
            </div>
            <div className="trigger leading-[0]">
              <button
                onClick={handleClick}
                className="flex flex-col justify-center items-center"
              >
                <span
                  className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isMobileOpen
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isMobileOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isMobileOpen
                        ? "-rotate-45 -translate-y-1"
                        : "translate-y-0.5"
                    }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`dropdown w-full h-auto clear-both float-left bg-[#1e1345] ${
            isMobileOpen ? "" : "hidden"
          }`}
        >
          <div className="dropdown_inner w-full h-auto clear-both float-left py-[25px] px-[40px]">
            <ul className="anchor_nav">
              <li className="current float-left w-full">
                <a
                  onClick={handleClick}
                  className="text-white inline-block p-0 font-medium"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="float-left w-full">
                <a
                  onClick={handleClick}
                  className="text-white inline-block p-0 font-medium"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="float-left w-full">
                <a
                  onClick={handleClick}
                  className="text-white inline-block p-0 font-medium"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className="float-left w-full">
                <a
                  onClick={handleClick}
                  className="text-white inline-block p-0 font-medium"
                  href="#service"
                >
                  Service
                </a>
              </li>
              <li className="float-left w-full">
                <a
                  onClick={handleClick}
                  className="text-white inline-block p-0 font-medium"
                  href="#blog"
                >
                  News
                </a>
              </li>
              <li className="float-left w-full">
                <a
                  onClick={handleClick}
                  className="text-white inline-block p-0 font-medium"
                  href="https://www.linkedin.com/in/bavan-palan-83906555/"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
