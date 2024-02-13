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

import "./css/services.css";

type ServiceIcon = "monitor" | "anchor" | "bar" | "aim" | "avatar" | "code";

interface ServiceInfo {
  icon: ServiceIcon;
  title: string;
  detail: string;
}

const services: ServiceInfo[] = [
  {
    icon: "monitor",
    title: "Website Design",
    detail:
      "Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor",
  },
  {
    icon: "anchor",
    title: "Graphic Design",
    detail:
      "Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor",
  },
  {
    icon: "bar",
    title: "Digital Markerting",
    detail:
      "Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor",
  },
  {
    icon: "aim",
    title: "Photography",
    detail:
      "Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor",
  },
  {
    icon: "avatar",
    title: "Consultancy",
    detail:
      "Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor",
  },
  {
    icon: "code",
    title: "Web Development",
    detail:
      "Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor",
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
                <li className="mb-[25px] pl-[25px] w-1/3">
                  <ServicesCard info={d} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
