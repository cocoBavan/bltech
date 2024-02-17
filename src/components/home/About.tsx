import React from "react";
import Link from "next/link";
import RibbonSVG from "../common/svg/RibbonSVG";

import "./css/about.css";
import Tilter from "../common/Tilter";
import Reveal from "../common/Reveal";

const calculateExperience = () => {
  var ageDifMs = Date.now() - 1325336400000;
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const About = () => {
  return (
    <div
      className="foliox_tm_section w-full h-auto clear-both float-left"
      id="about"
    >
      <div className="foliox_tm_about w-full h-auto clear-both float-left mb-[245px]">
        <div className="container">
          <Reveal>
            <div>
              <div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
                <span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">
                  About Me
                </span>
                <h3 className="text-[48px]">
                  A Passionate Developer Who Loves to Code
                </h3>
              </div>
              <div className="wrapper w-full h-auto clear-both flex mt-[75px]">
                <div className="left w-1/2 relative">
                  <div className="big_image float-right relative">
                    <Tilter>
                      <img
                        className="tilt-effect max-w-425px max-h-[510px]"
                        src="assets/img/about/1.png"
                        alt=""
                      />
                    </Tilter>
                    <div className="small_image absolute z-[1] right-full top-full mt-[-180px] mr-[-100px]">
                      <Tilter>
                        <div className="in relative">
                          <img
                            className="relative opacity-0 min-w-[337px] max-w-[337px]"
                            src="/assets/img/thumbs/1-1.jpg"
                            alt=""
                          />
                          <div
                            style={{
                              backgroundImage: `url("/assets/img/about/2.jpeg")`,
                            }}
                            className="main tilt-effect absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                          />
                        </div>
                      </Tilter>
                    </div>
                    <span className="badge w-[120px] h-[120px] inline-block absolute bg-extra-color rounded-[10px] top-[160px] right-full mr-[45px]">
                      <RibbonSVG
                        width={65}
                        height={65}
                        className="svg w-[65px] h-[65px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                      />
                    </span>
                    <div className="experience absolute top-full left-[138px] mt-[35px]">
                      <div className="inner relative flex items-center pl-[25px]">
                        <h3 className="text-[72px]">{calculateExperience()}</h3>
                        <span className="text-[22px] font-poppins text-white leading-[32px] pl-[20px]">
                          Successful
                          <br />
                          Years
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right w-1/2 pl-[90px] relative top-[30px]">
                  <h3 className="title text-[30px] mb-[35px]">About Me</h3>
                  <p className="text">
                    As an enthusiastic app developer, I blend creativity with
                    technical skills to craft engaging mobile experiences. With
                    a strong foundation in UI/UX design and a passion for
                    innovation, I thrive in turning ideas into reality. My goal
                    is to create impactful solutions that delight users and
                    drive business growth. Let's connect and build something
                    amazing together!
                  </p>
                  <div className="list w-full clear-both float-left overflow-hidden rounded-[10px] border-solid border-[#625a7d] border-2 mt-[32px] mb-[40px]">
                    <ul className="mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] pt-[2px] float-left pl-[2px]">
                      <li className="m-0 float-left w-1/2 border-solid border-[#625a7d] border-2 relative mt-[-2px] ml-[-2px] overflow-hidden">
                        <ul className="item py-[25px] px-[35px]">
                          <li className="mb-[11px]">
                            <span className="font-poppins text-[16px] font-medium text-white inline-block">
                              Name
                            </span>
                            <p className="text-[16px]">Bavan Palan</p>
                          </li>
                          <li className="mb-[11px]">
                            <span className="font-poppins text-[16px] font-medium text-white inline-block">
                              Email
                            </span>
                            <p className="text-[16px]">
                              <Link className="text-main-color" href="#">
                                in resume
                              </Link>
                            </p>
                          </li>
                          <li>
                            <span className="font-poppins text-[16px] font-medium text-white inline-block">
                              Phone
                            </span>
                            <p className="text-[16px]">in resume</p>
                          </li>
                        </ul>
                      </li>
                      <li className="m-0 float-left w-1/2 border-solid border-[#625a7d] border-2 relative mt-[-2px] ml-[-2px] overflow-hidden">
                        <ul className="item py-[25px] px-[35px]">
                          <li className="mb-[11px]">
                            <span className="font-poppins text-[16px] font-medium text-white inline-block">
                              Location
                            </span>
                            <p className="text-[16px]">Sydney</p>
                          </li>
                          <li className="mb-[11px]">
                            <span className="font-poppins text-[16px] font-medium text-white inline-block">
                              Degree
                            </span>
                            <p className="text-[16px]">BSc Eng</p>
                          </li>
                          <li>
                            <span className="font-poppins text-[16px] font-medium text-white inline-block">
                              Contract
                            </span>
                            <p className="text-[16px]">Available</p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="foliox_tm_button">
                    <Link href="/assets/files/BavanResume.pdf" download>
                      <span>Download Resume</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
