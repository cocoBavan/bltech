"use client";
import React, { useState } from "react";
import MonitorSVG from "../common/svg/MonitorSVG";

import { motion } from "framer-motion";
import Tilter from "../common/Tilter";
import AnchorSVG from "../common/svg/AnchorSVG";
import BarSVG from "../common/svg/BarSVG";
import AimSVG from "../common/svg/AimSVG";
import AvatarSVG from "../common/svg/AvatarSVG";
import CodeSVG from "../common/svg/CodeSVG";
import CameraSVG from "../common/svg/CameraSVG";

import "./css/services.css";
import Reveal from "../common/Reveal";

type ServiceIcon =
  | "monitor"
  | "anchor"
  | "bar"
  | "aim"
  | "avatar"
  | "code"
  | "camera";

interface ServiceInfo {
  icon: ServiceIcon;
  title: string;
  detail: string;
}

const services: ServiceInfo[] = [
  {
    icon: "code",
    title: "App Development",
    detail:
      "Crafting innovative mobile applications tailored to your needs, ensuring seamless user experiences across platforms.",
  },
  {
    icon: "monitor",
    title: "Web Development",
    detail:
      "Building responsive websites with cutting-edge technologies, optimizing for speed, security, and user engagement.",
  },
  {
    icon: "bar",
    title: "Graphic Design",
    detail:
      "Creating visually stunning graphics that communicate your brand message effectively and leave a lasting impression",
  },
  {
    icon: "aim",
    title: "Digital Marketing",
    detail:
      "Driving brand visibility and engagement through targeted digital strategies, including SEO, SEM, and social media marketing",
  },
  {
    icon: "avatar",
    title: "Consultancy",
    detail:
      "Providing expert guidance on cybersecurity and technology, ensuring your digital assets are secure and optimized.",
  },
  {
    icon: "camera",
    title: "Content Making",
    detail:
      "Capturing compelling visuals that tell your story and resonate with your audience, enhancing your brand presence.",
  },
];

const defaultSVGParams = (isHovered: boolean) => {
  return {
    width: 65,
    height: 65,
    className: `z-[2] transition-all duration-500 ${
      isHovered ? "fill-white-color scale-50" : "fill-extra-color scale-100"
    }`,
  };
};

const getIconFromName = (iconName: ServiceIcon, isHovered: boolean) => {
  switch (iconName) {
    case "monitor":
      return <MonitorSVG {...defaultSVGParams(isHovered)} />;
    case "anchor":
      return <AnchorSVG {...defaultSVGParams(isHovered)} />;
    case "bar":
      return <BarSVG {...defaultSVGParams(isHovered)} />;
    case "aim":
      return <AimSVG {...defaultSVGParams(isHovered)} />;
    case "avatar":
      return <AvatarSVG {...defaultSVGParams(isHovered)} />;
    case "code":
      return <CodeSVG {...defaultSVGParams(isHovered)} />;
    case "camera":
      return <CameraSVG {...defaultSVGParams(isHovered)} />;
  }
};

const ServicesCard = ({ info }: { info: ServiceInfo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Tilter>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="list_inner tilt-effect w-full h-auto clear-both relative bg-[#3a2b71] rounded-[10px] text-center pt-[105px] pr-[65px] pb-[70px] pl-[65px]"
      >
        <span
          className={`icon inline-block relative w-[65px] h-[65px] rounded-full mb-[53px] transition duration-500 ease-in-out ${
            isHovered ? "bg-[#00c0ff]" : "bg-[#432d92]"
          }`}
        >
          <motion.div
            animate={{
              top: isHovered ? "0%" : "-50%",
              left: isHovered ? "0%" : "-40%",
            }}
            transition={{
              duration: 0.2,
            }}
            className={`absolute`}
          >
            {getIconFromName(info.icon, isHovered)}
          </motion.div>
        </span>
        <h3 className="title text-[24px] mb-[20px]">{info.title}</h3>
        <p className="text">{info.detail}</p>
      </div>
    </Tilter>
  );
};

const Services = () => {
  return (
    <div
      className="foliox_tm_section w-full h-auto clear-both float-left"
      id="service"
    >
      <div className="foliox_tm_services w-full h-auto clear-both float-left mb-[110px]">
        <Reveal>
          <div className="container">
            <div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
              <span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">
                Services
              </span>
              <h3 className="text-[48px]">What I Do for My Clients</h3>
            </div>
            <div className="list w-full h-auto clear-both float-left mt-[70px]">
              <ul className="ml-[-25px] flex flex-wrap">
                {services.map((d) => (
                  <li key={d.title} className="mb-[25px] pl-[25px] w-1/3">
                    <ServicesCard info={d} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Services;
